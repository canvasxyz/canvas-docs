---
sidebar_position: 5
---

# About Canvas

Canvas is an off-chain runtime for web applications. It's a hybrid
automatically federated/peer-to-peer protocol similar to
[Bluesky](https://atproto.com/) or
[Farcaster](https://www.farcaster.xyz/), with a focus on general
applications rather than being a social network.

Every signed message on Canvas is "executed" in a JavaScript/WASM
virtual machine. During execution, actions are allowed to write to a
SQLite database, using an interface that resembles a key-value
store. Applications can then expose this data through SQL and
programmable views.

Messages are signed with the IPFS URI of the spec intended to process
them, although specs can also define custom signature formats, so they
can process data from other applications, or base layers outside
Canvas.

Messages are stored by each peer in a [Merkle Search
Tree](https://github.com/canvasxyz/okra), which allows peers to
efficiently synchronize past histories of actions with each other.

To learn more, we encourage you to review our NPM packages and [check
out our code](https://github.com/canvasxyz/canvas).

## Tradeoffs

Canvas is complementary to blockchains - for blockchain developers, we
believe immutable records like identity, reputation, and financial
transactions should live on a secure L1 or L2 network, while systems
like Canvas can be used to create more scalable end-user applications
(potentially finalized on-chain).

* Off-chain applications are faster, since each node can accept
  actions as they are seen.
* Applications don't require cryptocurrency to launch or use. Some
  applications may require you to hold an NFT, or a verifiable
  credential from a certificate authority.
* Developers can get started without blockchain-specific skills, using
  TypeScript and SQL.
* Interactions with applications are more flexible. They're just
  signed data, that can be forked and recombined into new
  applications.

### Canvas vs. blockchains

Compared to building on smart contracts, the Canvas stack makes a few tradeoffs:

* We don't save data to a blockchain. This makes Canvas fast, since
  each node can accept actions instantaneously, rather than waiting
  for consensus.
* Contentious operations, like competing to be in the first 1000
  minters of an NFT, are currently impractical on Canvas.
* Blockchains generally finalize, either immediately (Tendermint) or
  after 15-30 blocks (PoW / PoS gadgets). Canvas nodes don't have a
  strict concept of finality, and have limited shared global state.
* Node operators don't bond a token like ETH, so there is no penalty
  for misbehavior or going offline.

In general, we recommend that ordering-sensitive operations happen on
a blockchain like an Ethereum L2. Canvas provides an API for reading
from smart contracts for this purpose.

### Canvas vs. storage networks

[IPFS](https://ipfs.io/) and [Arweave](https://www.arweave.org/) are
non-programmable data layers. Many decentralized apps archive data to
these layers, but don’t read from them, since that requires imposing a
data schema and indexing the entire network. A few applications *do*
read from IPFS or Arweave, and those applications generally have very
simple data schemas.

Canvas is a layer on top of IPFS, that enforces both a schema and
content for data written to it. For example, a Canvas app can check
for an ENS name, DAO membership, or other identity token before
allowing someone to post.

This allows applications to read from the data layers they are built
on, which in turn makes it possible to build fully-featured modular
applications.

### Scalability

The first version of the Canvas protocol supports JavaScript as an
execution language, and SQLite as a database.

However, the protocol is designed to be modular. It's possible to
switch out the default database for replicated, streaming, or
deterministic databases without any changes in schema.
