---
sidebar_position: 4
---

# Basic Data Formats

By default, Canvas supports user interactions signed using a set of
basic data formats:

* **[Actions](https://github.com/canvasxyz/canvas/blob/main/packages/interfaces/src/actions.ts)**
encode arbitrary calls, processed in the Canvas VM as user interactions.
* **[Sessions](https://github.com/canvasxyz/canvas/blob/main/packages/interfaces/src/sessions.ts)**
are used to log in, by delegating the ability to create Actions to a temporary session key.

Specifically, Actions are defined as objects which carry an
**[ActionPayload](#action-payload)**, signature, and optionally the
session key they were signed with. Sessions are defined as objects
which contain a **[SessionPayload](#session-payload)** and signature.

### Action Payload

```ts
export type ActionPayload = {
	app: string
	appName: string
	from: string
	call: string
	callArgs: Record<string, ActionArgument>
	chain: Chain
	chainId: string
	block: string | null
	timestamp: number
}
```

### Session Payload

```ts
export type SessionPayload = {
	app: string
	appName: string
	block: string | null
	chain: Chain
	chainId: string
	from: string
	sessionAddress: string
	sessionDuration: number
	sessionIssued: number
}
```

| Field     | Content  |
| --------- | -------- |
| app       | IPFS hash of the app    |
| appName   | Name displayed to users |
| block     | Block hash when the action occurred (optional) |
| chain     | `ethereum` \| `cosmos` \| `solana` \| `...` |
| chainId   | `1` \| `osmo` \| `...` |
| from      | User address that sent the action or session |

| Action Field | Content  |
| ------------ | -------- |
| call         | User address that sent the action |
| callArgs     | Map of named arguments to the action call |
| timestamp    | Timestamp when the action was sent |

| Session Field | Content  |
| ------------- | -------- |
| sessionAddress  | The session address being authorized |
| sessionDuration | How long the session is valid |
| sessionIssued   | Timestamp when the session was issued |

## Signing

### Ethereum

Both action and session payloads are encoded according to EIP-712, and signed using signTypedData_v4.

_TODO: Explain our handling of Domain and encodings used for empty and null fields._

### Ethereum SIWE

Action payloads are encoded according to EIP-712, and signed using signTypedData_v4. Session payloads are encoded using SIWE.

_TODO: Explain exact mapping to the SIWE signature string._

### Cosmos

Both action and session payloads are encoded using [stable JSON stringify](#note-on-stable-stringify).

Then, action payloads are signed using an
[ADR-036](https://docs.cosmos.network/v0.47/architecture/adr-036-arbitrary-signature)
signature.

Session payloads on standard chains are signed using an ADR-036
signature. Session payloads on EVM-based Cosmos chains like Evmos and
Injective are signed using `eth.personalSign`, and on Terra chains,
they are signed using `signBytes`.

### Solana

Both action and session payloads are encoded using stable JSON stringify, and then signed using `nacl.sign.detached` using the Solana private key.

### NEAR

Both action and session payloads are encoded using stable JSON stringify, and then signed using `nacl.sign.detached` using the NEAR private key.

### Polkadot

Both action and session payloads are encoded using stable JSON stringify, and then signed using `signer.signRaw` using the Polkadot wallet.

## Hashing format

The hash of an action or session is defined as the sha256 hash of the
entire [stable stringified](#note-on-stable-stringify) Action or
Session object.

This is necessary because not all chains have deterministic
signatures, so we have to hash the signature to get a unique
identifier for the action.

```ts
export type Action = {
	type: "action"
	payload: ActionPayload,
	session: string | null
	signature: string
}
```

```ts
export type Session = {
	type: "session"
	payload: SessionPayload,
	signature: string
}
```

### Note on stable stringify

The default `JSON.stringify()` implementation in most
browsers relies on insertion order and is not guaranteed to be
deterministic. The encodings defined here use a stable deterministic ordering for object fields.

We recommend using a package like
[safe-stable-stringify](https://www.npmjs.com/package/safe-stable-stringify)
to guarantee this.
