---
sidebar_position: 2
---

# How Canvas Works

TODO: Full technical description of Canvas

* Every signed message on Canvas is "executed" in a JavaScript/WASM
  virtual machine.
* During execution, actions are allowed to write to a SQLite database,
  using an interface that resembles a key-value store.
* Applications can expose this data through routes.
* Messages are signed with the IPFS URI of the spec intended to process
  them, although applications can also define custom data formats.
* Messages are stored by each peer in a [Merkle Search
  Tree](https://github.com/canvasxyz/okra), which allows peers to
  efficiently synchronize past histories of actions with each other.

### Canvas vs. blockchains

* We don't save data to a blockchain. This makes Canvas fast, since
  each node can accept actions instantly, rather than waiting
  for consensus.
* Blockchains generally finalize immediately (Tendermint) or
  after 15-30 blocks (PoS gadgets). Canvas nodes don't have a
  strict concept of finality, and have limited shared global state.
* Contentious operations, like competing to be in the first 1000
  minters of an NFT, are impractical. We recommend these kinds of
  operations happen on a chain, e.g. an Ethereum L2.
* Node operators don't bond a token, so there is no penalty
  for misbehavior or going offline.


### Canvas vs. storage networks

* [IPFS](https://ipfs.io/) and [Arweave](https://www.arweave.org/) are
  non-programmable data layers.
* Many decentralized apps archive data to these layers, but don’t read
  from them, since that requires imposing a data schema and indexing
  the entire network.
* Canvas is a layer on top of IPFS, that enforces both a schema and
  content for data written to it. For example, a Canvas app can check
  for an ENS name, DAO membership, or other identity token before
  allowing someone to post.
