---
sidebar_position: 1
slug: /
---

# Introduction

Canvas is a platform for building decentralized applications.

Like email or IRC are protocols, and unlike Twitter or Discord which are centralized apps with a centralized backend, we make it easy for any developer to create any application as a decentralized protocol from the start.


## How it works

Every Canvas application is defined as an **offchain contract**. This is a single JavaScript file, that specifies the models, routes, and actions in the application's backend.

To run an application, anyone with the offchain contract can execute `canvas run <contract.js>` from the command line. This launches a decentralized backend for the application, and exposes an API that you can connect to from the frontend.

From the frontend, users can log in with a crypto wallet like Metamask, and create a temporary session key stored in the browser. Their interactions are signed and broadcast to the peer-to-peer network, where they can be verified by every node.

## Technology

The basic idea behind Canvas is that user actions are **signed messages**, relayed over a peer-to-peer network. Each peer maintains an append-only log of actions and their effects, combining them using a CRDT (conflict-free replicated data type, the same data structures used to synchronize Google Docs).

Building on this foundation, we can add tools like a light client for reading from blockchains, finality by writing to networks like Arweave and Filecoin, and more powerful runtimes and database backends. For more about the tech, see the [Technology and tradeoffs](./technology) page.

Otherwise, we recommend checking out the tutorial!
