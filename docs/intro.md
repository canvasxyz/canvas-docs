---
sidebar_position: 1
slug: /
---

# Canvas

### A new P2P VM and edge database

[![license MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/core) [![npm](https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github)](https://github.com/canvasxyz/canvas/tree/main/packages/core) [![tests](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg)](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml)

Canvas is a distributed database that makes it easy to build offchain
applications, where user actions are signed, replicated using
[libp2p](https://libp2p.io/), and combined in a [P2P VM](./docs/api).

It can be used as a Web3 database, a fast and upgradeable offchain
data layer, or a building block for more complex protocols.

Compared to libp2p, Canvas provides:

* persistence
* efficient [Merkle sync](https://github.com/canvasxyz/okra#readme) for large batches of actions
* ability to [read from chains](./docs/api#contracts) and use [custom functions](./docs/api#actions) to validate actions
* support for [multiple chains](./docs/formats#chain-implementations), [custom data formats](./docs/custom), and [upgrades](./docs/api#sources)
* a database-like interface with [SQLite](./docs/api#models), [API routing](./docs/api#routes), [React hooks](./docs/canvas/packages/hooks), and a [hosted service](./docs/tutorial/canvas-hub)

By default, Canvas does not enforce finality, which means nodes
accept actions as soon as they are validated.


## Using Canvas

Each application is a unique file or
[contract](./docs/tutorial/writing-a-canvas-contract), identified by its
IPFS hash, that defines **models**, **routes**, and **actions**.

Actions are signed messages that match a verifiable format, as
defined in the contract. Their effects are processed in the VM,
written to models, and exposed via the API.

You can start an application with `canvas run <contract.js>` or
`canvas run <multihash>`, or use our [NPM
package](./docs/canvas/packages/core). This launches an API for the
application and starts sync with existing nodes on the network.

From the frontend, users log into the app by signing a session key in
the browser, and further interactions can happen instantly. Finally,
we provide [React
hooks](https://www.npmjs.com/package/@canvas-js/hooks) and
[Next.js](https://github.com/canvasxyz/canvas/tree/main/examples/chat-next)
and
[Webpack](https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack)
templates for developers to get started quickly.


## Demo

These demo applications are deployed to separate Fly.io regions, and
sync with each other via p2p:

* [canvas-chat-p2p.pages.dev](https://canvas-chat-p2p.pages.dev) (Webpack, client-side p2p)
* [canvas-chat.fly.dev](https://canvas-chat.fly.dev/index.html) (Webpack, server-side p2p)
* [canvas-chat-2.fly.dev](https://canvas-chat-2.fly.dev) (Next.js, server-side p2p)
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
