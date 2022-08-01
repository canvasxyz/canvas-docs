---
sidebar_position: 1
slug: /
---

# Introduction

Canvas is a platform for building decentralized, or “Web3” applications.

Like email or IRC are protocols, and unlike Twitter or Discord which are centralized apps with a centralized backend, we make it easy for any developer to create any application as a decentralized protocol from the start.


## How it works

Every Canvas application is defined as an **offchain contract**. This is a single JavaScript file, that specifies the models, routes, and actions in the application's backend.

To start a node, use `canvas run <contract.js>` from the command line. This launches a decentralized backend for the application, with an API and routes that you can connect to from the frontend.

We give you an NPM package with React hooks, so you can set up a frontend that connects to the Canvas backend in minutes. From the frontend, end users log in with a crypto wallet like Metamask, which gives them a temporary session key stored in the browser.

Every action they take on the frontend is signed and broadcast to the peer-to-peer network, where it's verified by every node that sees it.

## Technology

Like blockchain-based applications, anyone can build on Canvas apps' data. Historical data can also be committed to networks like Filecoin and Arweave, so actions that have been applied can’t be erased, and new actions can’t be retroactively inserted into the past.

We achieve all this using a combination of new tech:

* Collaborative data structures, the same ones used to synchronize Google Docs
* A JavaScript and WebAssembly virtual machine
* A new peer-to-peer stack which we've written, built on top of IPFS
* Support for Web3 wallet logins
