---
sidebar_position: 4
---

# Basic Data Formats

User interactions are encoded using a set of default data formats,
defined here:

**[Actions](https://github.com/canvasxyz/canvas/blob/main/packages/interfaces/src/actions.ts)**
encode arbitrary calls, typically processed in the Canvas VM to carry
out user
interactions. **[Sessions](https://github.com/canvasxyz/canvas/blob/main/packages/interfaces/src/sessions.ts)**
encode the delegation of permissions to a temporary session key.

Specifically, Actions are defined as objects which carry an
**[ActionPayload](#action-payload)**, signature, and optionally the
session key they were signed with. Sessions are defined as objects
which contain a **[SessionPayload](#session-payload)** and signature.

### Action Payload

```
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

```
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

_TODO: Exact mapping to the SIWE signature string._

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
Session object:

```
export type Action = {
	type: "action"
	payload: ActionPayload,
	session: string | null
	signature: string
}
```

```
export type Session = {
	type: "session"
	payload: SessionPayload,
	signature: string
}
```

This is necessary because not all chains have deterministic signatures.

### Note on stable stringify

The default `JSON.stringify()` implementation in most
browsers relies on insertion order and is not guaranteed to be
deterministic. The encodings defined here use a stable deterministic ordering for object fields.

We recommend using a package like
[safe-stable-stringify](https://www.npmjs.com/package/safe-stable-stringify)
to guarantee this.
