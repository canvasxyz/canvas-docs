---
sidebar_position: 7
---

# Comparisons

### Canvas vs. storage layers

[IPFS](https://ipfs.io/) and [Arweave](https://www.arweave.org/) are non-programmable data layers. They let anyone publish data to them, which maximizes performance and flexibility, but makes them easy to spam & hard to read from. Most decentralized apps **archive** their data to these layers, but don’t read from them.

Applications that do read from IPFS and Arweave generally have very simple data schemas, like Mirror, which basically functions as a frontend on top of Arweave.

Canvas is a layer on top of data storage, that enforces both the schema and content of data written to it. For example, a Canvas app can check for an ENS name, DAO membership, or other identity token before allowing someone to post.

This allows applications to read from the data layers they are built on, which in turn makes it possible to build fully-featured applications on Canvas — where you can interact with a Canvas application from any node, and have your actions show up on other nodes automatically.


### Canvas vs. blockchains / smart contracts

Compared to writing smart contracts on Ethereum, Polygon, or L2s, Canvas reduces the requirements around security and state, to get more scalability and better user experience.

When using a smart contract, all your users’ interactions are saved and immutable forever. Any state that one user changes can be immediately interacted with by other users, unlike in Canvas, where there is no global consensus.

Since they are global state machines, blockchains are inherently limited in scalability. Just one application used by a few thousand people is enough to consume the entire throughput of a blockchain, [even on less-decentralized chains](https://www.theblockcrypto.com/linked/144639/solana-restarted-after-seven-hour-outage-caused-by-surge-of-transactions).

Users also have to pay gas fees to interact with chains. Even if gas fees are low, introducing this financial element creates the wrong dynamics for some kinds of applications.

Canvas is complementary to blockchains — we think immutable properties like identity and reputation should live on a secure blockchain, and data streams like comments, chat messages, and interactions should be published on a system like Canvas, and archived back to a blockchain or storage layer as needed.

### Scaling up

The first version of the Canvas protocol supports JavaScript as our execution language, and SQLite or Postgres as databases.

But the protocol is designed to be modular, so you can switch out the default database for more optimized solutions. We expect there will be other implementations of the Canvas engine, in higher-performance languages like Rust, using higher-performance/shareded SQL databases, and using streaming databases that can scale up to millions of concurrent users.