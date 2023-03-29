---
sidebar_position: 1
slug: /
---

# Introduction

[![license MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/core) [![npm](https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github)](https://github.com/canvasxyz/canvas/tree/main/packages/core) [![tests](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg)](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml)

Canvas is a framework for peer-to-peer decentralized applications,
where user interactions are signed messages replicated using
[libp2p](https://libp2p.io/) and merged into a consistent global state
using CRDTs and [p2p-optimized data
structures](https://github.com/canvasxyz/okra#readme).

Compared to using p2p networking libraries directly, Canvas provides:

* persistence
* efficient sync
* ability to [read from chains](./docs/api#contracts)
* support for [multiple chains](./docs/formats#signing), [custom data formats](./docs/custom), and [upgradeable apps](./docs/api#sources)
* a full edge framework, including a [SQL database](./docs/api#models), [API router](./docs/api#routes), [React hooks](./docs/canvas/packages/hooks), and a [hosted peer service](./docs/tutorial/canvas-hub)

Canvas does not enforce global consensus, which makes it fast, as nodes
can finalize valid actions instantly.

For developers building blockchain-based applications, Canvas
complements the chain, providing a fast, upgradeable offchain layer
that can be used to relay persistent data without costs.


## Using Canvas

Each application is a unique file or
[contract](./docs/tutorial/writing-a-canvas-contract), identified by its
IPFS hash, that defines **models**, **routes**, and **actions**.

Actions are signed messages that match a verifiable format, as
defined by the contract. Their effects are processed by the P2P VM
and written to models, which are exposed through routes.

Anyone can run an application with `canvas run <contract.js>` or
`canvas run <multihash>`, or by using our [NPM
package](./docs/canvas/packages/core) directly. This launches an API
for the application and starts sync with existing nodes on the
network.

From the frontend, users can login to the app with a wallet or public key, by
signing a session key stored in the browser. We provide [React
hooks](https://www.npmjs.com/package/@canvas-js/hooks)
and template apps for
[Next.js](https://github.com/canvasxyz/canvas/tree/main/examples/chat-next)
and
[Webpack](https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack)
to help with this.


## Demo

These demo applications are deployed to separate Fly.io regions, and
sync with each other:

* [canvas-chat.fly.dev](https://canvas-chat.fly.dev/index.html) built with Webpack
* [canvas-chat-2.fly.dev](https://canvas-chat-2.fly.dev) built with Next.js
* [canvas-chat-3.fly.dev](https://canvas-chat-3.fly.dev) which imports data from the other examples into a new app
* You can also run the app locally by downloading the
  [webpack app](https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack)
  or [next app](https://github.com/canvasxyz/canvas/tree/main/examples/chat-next)
  and running `npm run start`. Your first sync should complete within <60 seconds.


## Building a Canvas App

To get started, proceed to the tutorial to [build your first Canvas
app](./docs/tutorial/writing-a-canvas-contract), or [read more about
the tech](./docs/architecture). You can also look at the
[contract language reference](./docs/api) to see our APIs.
