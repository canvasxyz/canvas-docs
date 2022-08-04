---
sidebar_position: 6
---

# Technology and tradeoffs

The basic idea behind Canvas is that user actions are **signed messages**, relayed over a peer-to-peer network. Each peer maintains an **append-only log** of actions and their effects, combining them using a CRDT (conflict-free replicated data type, the same ones used to synchronize Google Docs).

Signed messages are executed on a JavaScript and WebAssembly virtual machine, using a new peer-to-peer stack which we've written, built on IPFS.

Compared to building on smart contracts, this stack makes a few tradeoffs:

* We don't save data to a blockchain. This makes Canvas fast (each node can accept actions instantaneously, rather than waiting for consensus), but it also means that contentious operations - like competing to be in the first 1000 minters of an NFT - are impractical to implement on Canvas.
* Blockchains generally reach some state of finality, either immediately (with Tendermint) or after 15-30 blocks (with PoW or PoS gadgets). Canvas nodes don't have a strict concept of finality, and have limited shared global state.
* Node operators don't bond a token like ETH, so there is no penalty for misbehavior or going offline.

These issues will be addressed with a future Canvas guardian network, where Canvas nodes will commit to the latest updates they have accepted, and data is archived to backends like Filecoin and Arweave.

In general, we recommend that ordering-sensitive operations happen on a blockchain like an Ethereum L2. Canvas provides an API for *reading from smart contracts* for this purpose.

On the other hand, we think most "general-purpose" uses of computers are a better fit for Canvas than blockchains:

* Canvas apps are much faster.
* Canvas apps don't require cryptocurrency to launch or use. To prevent spam, some applications may require you to hold an NFT, or a verifiable credential, an off-chain signed message that shows you have permission to write to a network.
* Canvas is easier to program (in JavaScript) and query (in SQL).
* Canvas actions are more flexible; they're just signed data, that can be forked and recombined into new applications.
