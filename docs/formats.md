---
sidebar_position: 4
---

# Basic Data Formats

At its core, a Canvas application deals with two types of signed messages: _sessions_ and _actions_.

- [**Sessions**](/docs/canvas/packages/interfaces#sessions) are used to "log in" to applications, allowing the user to delegate the authority to sign actions to a temporary session key.
- [**Actions**](/docs/canvas/packages/interfaces#actions) invoke functions defined in the contract. Actions are evaluated inside a VM and have external effects, like setting or deleting records in the model database.

Both types of messages have a payload and a signature. Canvas supports signing messages using identities from a variety of different chains, including Ethereum, Solana, Polkadot, and Cosmos chains.

We use the [CAIP-2](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md) standard for chain identifiers, i.e. Ethereum mainnet is `eip155:1`.

Three basic values are required in both payload types:

1. `app`: the `ipfs://...` URI of the app contract
2. `chain`: the CAIP-2 identifier of a chain supported by the app contract
3. `from`: the on-chain address of the user signing the message

## Sessions

A user can sign a `Session` payload to authorize a delegate key to sign actions on their behalf.

```ts
type Session = {
  type: "session"
  signature: string
  payload: {
    app: string
    chain: string
    from: string

    sessionAddress: string  // address of the delegate key
    sessionDuration: number // duration in milliseconds
    sessionIssued: number   // issue time in milliseconds since 1 January 1970 00:00:00 UTC

    // Blockhash of `chain` at issue time; required by peers except in --unchecked mode.
    // Used to validate `sessionIssued`.
    block: string | null
  }
}
```

The `signature`, `address`, and `blockhash` formats vary by chain.

## Actions

An `Action` payload can either be signed directly by a user, or by a delegate key previously registered in a session.

```ts
type Action = {
  type: "action"
  signature: string

  // null if signed directly; otherwise the `sessionAddress` of a session
  session: string | null

  payload: {
    app: string
    chain: string
    from: string

    // Name and arguments of the contract function to invoke.
    // Action arguments must be JSON primitives
    call: string
    callArgs: Record<string, null | boolean | number | string>

    // Blockhash of `chain` at `timestamp`; required by peers except in --unchecked mode.
    // Used to validate `timestamp` and call external on-chain contracts.
    block: string | null

    // Milliseconds since 1 January 1970 00:00:00 UTC
    timestamp: number
  }
}
```

Again, the `signature`, `address`, and `blockhash` formats vary by chain.

## Chain implementations

This section documents the action and session signature formats for the different chain implementations. But you don't have to implement these yourself! We already did that. Use the methods of the [chain implementation interface](/docs/canvas/packages/interfaces#chain-implementations) if you need to sign and verify messages manually, or the [React hooks](/docs/canvas/packages/hooks) for totally automated session management and action generation.

### Ethereum

Ethereum-based chains (CAIP namespace `eip155`) use the [SIWE](https://docs.login.xyz/) specification for session signatures and [EIP-712](https://eips.ethereum.org/EIPS/eip-712) for signing structured action payloads.

#### Session signatures

The session signature format for Ethereum-based chains is `${domain}/${nonce}/${siweSignature}`, where `siweSignature` is the signature of a SIWE message deterministically derived from the session `payload`, along with the `domain` and `nonce` values.

The SIWE message template is populated with the following values:

| SIWE field     | description                               | value                                                                |
| -------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| domain         | DNS host name the user is logging in from | `domain`                                                             |
| address        | the user's Ethereum address               | `payload.from`                                                       |
| uri            | the subject resource URI                  | ```ethereum:${payload.sessionAddress}```                             |
| issuedAt       | current time in ISO 8601                  | `new Date(payload.sessionIssued).toISOString()`                      |
| expirationTime | session expiration time in ISO 8601       | `new Date(payload.sessionIssued).toISOString()`                      |
| version        | SIWE message version number               | `1`                                                                  |
| chainId        | EIP-155 Chain ID                          | chainID of `payload.chain` (component after the `eip155:` namespace) |
| nonce          | randomized token                          | `nonce`                                                              |
| resources      | list of additional URI references         | `[payload.app]`                                                      |

To sign a session payload for a domain `myapp.com`, generate a nonce `123123123123`, construct the SIWE message, and prompt the user to sign it. Browser wallets like MetaMask will parse the SIWE template and verify that the request is coming from the declared domain. When the user approves the signature request and you get a SIWE signature `0xABCABCABCABC...` back, set the session signature to `myapp.com/123123123123/0xABCABCABCABC...`. This is so that other Canvas peers will be able to verify the signature by reconstructing an identical SIWE message using the additional `domain` and `nonce` values.

#### Action signatues

_For users of non-Ethereum chains, note that we may implement SIWE-style (SIWx) login messages as a default format for other chains, in the near future._

The action signature format for Ethereum-based chains uses the EIP-712 standard for signed typed data.

The EIP-712 data fields for an action payload are:

```ts
const actionDataFields = {
	Message: [
		{ name: "app", type: "string" },
		{ name: "block", type: "string" },
		{ name: "call", type: "string" },
		{ name: "callArgs", type: "string" },
		{ name: "chain", type: "string" },
		{ name: "from", type: "string" },
		{ name: "timestamp", type: "uint64" },
	],
}
```

... where the value of `callArgs` a canonical JSON serialization of the `payload.callArgs` object: no whitespace, and entries sorted lexicographically by key. The value of `block` is the empty string if `payload.block === null`. The rest of the fields are copied from the payload as-is.

The message values are then signed using `signTypedData_v4`.

### Cosmos

Both action and session payloads are encoded using [canonical JSON serialization](#note-on-canonical-json-serialization).

Then, action payloads are signed using an
[ADR-036](https://docs.cosmos.network/v0.47/architecture/adr-036-arbitrary-signature)
signature.

Session payloads on standard chains are signed using an ADR-036
signature. Session payloads on EVM-based Cosmos chains like Evmos and
Injective are signed using `eth.personalSign`, and on Terra chains,
they are signed using `signBytes`.

### Solana

Both action and session payloads are encoded using canonical JSON serialization, and then signed using `nacl.sign.detached` using the Solana private key.

### NEAR

Both action and session payloads are encoded using canonical JSON serialization, and then signed using `nacl.sign.detached` using the NEAR private key.

### Polkadot

Both action and session payloads are encoded using canonical JSON serialization, and then signed using `signer.signRaw` using the Polkadot wallet.

## Message IDs

Messages are uniquely identified by the sha256 hash of their canonical JSON serialization.

## Note on canonical JSON serialization

The implementation of `JSON.stringify()` in browsers serializes object entries in their insertion order, and so is not deterministic. The encodings defined here all require object entries to be sorted lexicographically by key.

We recommend using a package like [safe-stable-stringify](https://www.npmjs.com/package/safe-stable-stringify) configured with `{ strict: true, deterministic: true }` to guarantee this.
