---
sidebar_position: 6
---

# About Canvas

Canvas is a way to build decentralized applications, where every user action is a signed message, relayed over a peer-to-peer network. Each peer maintains a log of actions and their effects, combining them using a conflict-free replicated data type (CRDT), which resolves conflicts between actions published at different times.

Each signed message is checked by "executing" it on a JavaScript and WebAssembly virtual machine. Their effects are written to a SQL database, in either SQLite or Postgres.

The result is a decentralized application stack that works a lot like Heroku, Firebase, or MongoDB, or other developer platforms that you're already familiar with.

### Technology and tradeoffs

Compared to building on smart contracts, the Canvas stack makes a few tradeoffs:

* We don't save data to a blockchain. This makes Canvas fast, since each node can accept actions instantaneously, rather than waiting for consensus.
* It also means that contentious operations - like competing to be in the first 1000 minters of an NFT - are impractical to implement on Canvas.
* Blockchains generally reach some state of finality, either immediately (Tendermint) or after 15-30 blocks (PoW / PoS gadgets). Canvas nodes don't have a strict concept of finality, and have limited shared global state.
* Node operators don't bond a token like ETH, so there is no penalty for misbehavior or going offline.

Compared to writing smart contracts on Ethereum, Polygon, or L2s, Canvas reduces the requirements around security and state, to get more scalability and better user experience.

We think most "general-purpose" uses of computers are a better fit for Canvas than blockchains:

* Canvas apps are much faster.
* Canvas apps don't require cryptocurrency to launch or use. To prevent spam, some applications may require you to hold an NFT, or a verifiable credential, an off-chain signed message that shows you have permission to write to a network.
* Canvas is easier to program and query - in JavaScript and SQL.
* Canvas actions are more flexible; they're just signed data, that can be forked and recombined into new applications.

In general, we recommend that ordering-sensitive operations happen on a blockchain like an Ethereum L2. Canvas provides an API for reading from smart contracts, for this purpose.

## Comparisons

### Canvas vs. smart contracts

When using a smart contract, all your users’ interactions are saved and immutable forever. Any state that one user changes can be immediately interacted with by other users, unlike in Canvas, where there is no global consensus.

Since they are global state machines, blockchains are inherently limited in scalability. Just one application used by a few thousand people is enough to consume the entire throughput of a blockchain, [even on less-decentralized chains](https://www.theblockcrypto.com/linked/144639/solana-restarted-after-seven-hour-outage-caused-by-surge-of-transactions).

Blockchains require users to pay gas fees to interact with chains. Even if gas fees are low, introducing a financial element creates the wrong dynamics for most applications.

Canvas is complementary to blockchains — we think immutable properties like identity, reputation, and permanent game worlds should live on a secure blockchain, and data streams like comments, chat messages, and single-session interactions (like minigames) should be published on P2P data layers.

### Canvas vs. storage layers

[IPFS](https://ipfs.io/) and [Arweave](https://www.arweave.org/) are non-programmable data layers. Most decentralized apps **archive** their data to these layers, but don’t read from them.

Applications that do read from IPFS and Arweave generally have very simple data schemas, like Mirror, which functions as a frontend for Arweave.

Canvas is a layer on top of IPFS, that enforces both the schema and content of data written to it. For example, a Canvas app can check for an ENS name, DAO membership, or other identity token before allowing someone to post.

This allows applications to read from the data layers they are built on, which in turn makes it possible to build fully-featured applications on Canvas — where you can interact with a Canvas application from any node, and have your actions show up on other nodes automatically.

## Future Plans

The first version of the Canvas protocol supports JavaScript as our execution language, and SQLite or Postgres as databases.

However, the Canvas protocol is designed to be modular, so it will be possible to switch out the default database for more optimized solutions. We expect there will be other implementations of the Canvas engine, in high-performance languages like Rust, using high-throughput replicated SQL, and using streaming databases that can scale up to millions of concurrent users.

We're also open to exploring a public Canvas network that anyone could use as a reliable, global storage & hosting network for their distributed applications.

However, our focus is on public good infrastructure including the Canvas append-only log, and the computing applications that it unlocks.
