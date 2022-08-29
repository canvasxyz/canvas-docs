---
sidebar_position: 6
---

# About Canvas

Canvas is a peer-to-peer computing platform that complements blockchains. While blockchains are designed to create shared state machines that with global state, they're also expensive, difficult to scale, and often use new programming languages that create an unnecessary barrier to entry.

Canvas proposes a new architecture that works more like Heroku, Firebase, and other hosted databases that developeres are already familiar with.

### Canvas architecture

Each application is a uniquely hashed file on IPFS, and interactions with the application are signed messages, relayed over a peer-to-peer network, stored by each node in an append-only log.

Each signed message is checked by *executing* it within a JavaScript and WebAssembly virtual machine. During execution, actions are allowed to write to a SQL database using an interface that resembles a key-value store. Anyone can then read the data from each node, using full SQL and arbitrarily programmable views.

All together, this makes it possible to write a backend for most database-oriented applications in around 50 lines of code.

Today, Canvas is focused on database-oriented applications, and serving a small number of alpha partners. However, there are a few extensions to the Canvas runtime that we have planned, that will make it possible to create far more powerful applications.

### Canvas vs. blockchains

Compared to building on smart contracts, the Canvas stack currently makes a few tradeoffs:

* We don't save data to a blockchain. This makes Canvas fast, since each node can accept actions instantaneously, rather than waiting for consensus.
* It also means that contentious operations - like competing to be in the first 1000 minters of an NFT - are impractical to implement on Canvas.
* Blockchains generally reach some state of finality, either immediately (Tendermint) or after 15-30 blocks (PoW / PoS gadgets). Canvas nodes don't have a strict concept of finality, and have limited shared global state.
* Node operators don't bond a token like ETH, so there is no penalty for misbehavior or going offline.

In general, we recommend that ordering-sensitive operations happen on a blockchain like an Ethereum L2. Canvas provides an API for reading from smart contracts for this purpose.

On the other hand, we think most applications on the web today would be easier to develop with a peer-to-peer, off-chain architecture:

* Off-chain apps are faster, since each node can accept actions as they are seen.
* Off-chain apps are easier to program and query in JavaScript and SQL.
* Apps don't require cryptocurrency to launch or use. To prevent spam, some applications may require you to hold an NFT, or a verifiable credential from a certificate authority.
* Interactions with apps are more flexible. They're just signed data, that can be forked and recombined into new applications, or archived to storage layers like Filecoin or Arweave.

Blockchains require users to pay gas fees to interact with chains. Even if gas fees are low, introducing a financial element creates the wrong dynamics for many applications.

Canvas is complementary to blockchains — for blockchain devs, we think immutable properties like identity, reputation, and permanent game worlds should live on a secure L1 or L2 network, and data streams like comments, chat messages, and single-session interactions (like minigames) should be published on P2P data layers.

### Canvas vs. storage layers

[IPFS](https://ipfs.io/) and [Arweave](https://www.arweave.org/) are non-programmable data layers. Most decentralized apps archive their data to these layers, but don’t read from them, because reading from them would require imposing a data schema and scanning the entire network.

On the other hand, applications that *do* read from IPFS and Arweave generally have very simple data schemas.

Canvas is a layer on top of IPFS, that enforces both the schema and content of data written to it. For example, a Canvas app can check for an ENS name, DAO membership, or other identity token before allowing someone to post.

This allows applications to read from the data layers they are built on, which in turn makes it possible to build fully-featured applications on Canvas — where you can interact with a Canvas application from any node, and have your actions show up on other nodes automatically.

### Future Plans

The first version of the Canvas protocol supports JavaScript as our execution language, and SQLite or Postgres as databases.

However, the Canvas protocol is designed to be modular, so it will be possible to switch out the default database for more optimized solutions. We expect there will be other implementations of the Canvas engine, in high-performance languages like Rust, using high-throughput replicated SQL, and using streaming databases that can scale up to millions of concurrent users.

The other area of future development is for Canvas to support long-running, general-purpose computations. We have an idea of how this would work, and