---
sidebar_position: 1
slug: /
---

# Introduction

Canvas is a platform for building decentralized “Web3” applications.

Like email or IRC are protocols, and unlike Twitter or Discord which are centralized apps with a centralized backend, we make it easy for any developer to create any application as a decentralized protocol from the start.


## How it works

Every Canvas application is defined as an **offchain contract**. This is a single JavaScript file, that specifies the models, routes, and actions in the application's backend.

To run an application, anyone with the offchain contract can execute `canvas run <contract.js>` from the command line. This launches a decentralized backend for the application, and exposes an API and routes that you can connect to from the frontend.

From the frontend, users can log in with a crypto wallet like Metamask, which gives them a temporary session key stored in the browser. Their interactions are signed and broadcast to the peer-to-peer network, where they can be verified by every node.

## Technology and tradeoffs

Canvas is built on new technologies from the last 10 years:

* Collaborative data structures, the same ones used to synchronize Google Docs
* A JavaScript and WebAssembly virtual machine
* A new peer-to-peer stack which we've written, built on IPFS
* Support for common Web3 wallets, like Metamask, for login
* An "edge computing" model, similar to Cloudflare/Vercel edge functions

The basic idea behind Canvas is that user actions are **signed messages**, relayed over a peer-to-peer network. Each peer maintains an **append-only log** of actions and their effects, combining them using a CRDT (conflict-free replicated data type) so actions don't have to be processed in order.

Compared to crypto-based Web3 networks, Canvas makes a few tradeoffs:

* We don't save data to a blockchain, and there is no shared global state. This makes Canvas fast (each node can accept actions instantaneously, rather than waiting for consensus), but it also means that contentious operations - like competing to be in the first 1000 minters of an NFT - are impractical to implement on Canvas.
* Blockchains generally reach some state of finality, either immediately (with Tendermint) or after 15-30 blocks (with PoW or PoS gadgets). Canvas nodes don't have a strict concept of finality.
* Node operators don't bond ETH, so there is no penalty for misbehavior or going offline.

On the other hand:

* Canvas apps don't require cryptocurrency to use. To prevent spam, some applications may require one to hold an NFT, or a verifiable credential, an off-chain signed message that shows you have permission to write to a network.
* Canvas is easier to program (in JavaScript) and query (in SQL).
* Canvas actions are more flexible; they're just signed data, that can be forked and recombined into new applications.

Canvas is optimized for writing useful applications, rather than creating new financial instruments. We think most "general-purpose" uses of computers are a better fit for Canvas than blockchains.

In general, we recommend that contentious/ordering-sensitive operations, like giving someone write access to a restricted channel in a Canvas application, be conducted on a blockchain like an Ethereum L2. Canvas provides an API for *reading from smart contracts* for this purpose.

Finally, many of the issues around finality are expected to be addressed with a future Canvas "guardian network", where Canvas data will be archived to backends like Filecoin and Arweave, and Canvas nodes will commit to their latest updates they have accepted.
