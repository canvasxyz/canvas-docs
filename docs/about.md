---
sidebar_position: 6
---

# About Canvas

Canvas is an off-chain runtime for web applications.

Every signed message on Canvas is *executed* within a JavaScript/WASM virtual machine. During execution, actions are allowed to write to a SQLite database, using an interface that resembles a key-value store. Applications can then expose this data through SQL and programmable views.

Messages are signed with the IPFS URI of the spec intended to process them, although specs can also define custom signature formats, so they can process data from other applications, or base layers outside Canvas.

Messages are stored by each peer in a [Merkle Search Tree](https://github.com/canvasxyz/okra), which allows peers to efficiently synchronize past histories of actions with each other.

## Tradeoffs

Canvas is complementary to blockchains - for blockchain developers, it seems that immutable records like identity, reputation, and financial transactions should live on a secure L1 or L2 network, while systems like Canvas can be used to create more scalable layers (and potentially finalized on-chain).

* Off-chain apps are faster, since each node can accept actions as they are seen.
* Off-chain apps are easier to program and query in JavaScript and SQL.
* Apps don't require cryptocurrency to launch or use. Some applications may require you to hold an NFT, or a verifiable credential from a certificate authority.
* Interactions with apps are more flexible. They're just signed data, that can be forked and recombined into new applications, or archived to storage layers like Filecoin or Arweave.

### Canvas vs. blockchains

Compared to building on smart contracts, the Canvas stack makes a few tradeoffs:

* We don't save data to a blockchain. This makes Canvas fast, since each node can accept actions instantaneously, rather than waiting for consensus.
* It also means that contentious operations - like competing to be in the first 1000 minters of an NFT - are impractical to implement on Canvas.
* Blockchains generally reach some state of finality, either immediately (Tendermint) or after 15-30 blocks (PoW / PoS gadgets). Canvas nodes don't have a strict concept of finality, and have limited shared global state.
* Node operators don't bond a token like ETH, so there is no penalty for misbehavior or going offline.

In general, ordering-sensitive operations should happen on a blockchain like an Ethereum L2. Canvas provides an API for reading from smart contracts for this purpose.

### Canvas vs. storage layers

[IPFS](https://ipfs.io/) and [Arweave](https://www.arweave.org/) are non-programmable data layers. Most decentralized apps archive their data to these layers, but don’t read from them, because reading from them would require imposing a data schema and scanning the entire network. The few applications that *do* read from IPFS and Arweave generally have very simple data schemas.

Canvas is a layer on top of IPFS, that enforces both a schema and content for data written to it. For example, a Canvas app can check for an ENS name, DAO membership, or other identity token before allowing someone to post.

This allows applications to read from the data layers they are built on, which in turn makes it possible to build fully-featured modular applications.

### Scalability

The first version of the Canvas protocol supports JavaScript as an execution language, and SQLite as a database.

However, the protocol is designed to be modular and it will be possible to switch out the default database for replicated, streaming, or deterministic databases.
