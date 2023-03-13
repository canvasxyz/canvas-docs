---
sidebar_position: 1
slug: /
---

# Introduction

[![license MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/core) [![npm](https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github)](https://github.com/canvasxyz/canvas/tree/main/packages/core) [![tests](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg)](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml)

Canvas is a framework for peer-to-peer decentralized applications,
where user interactions are signed messages replicated using
[libp2p](https://libp2p.io/) and [Merkle Search
Trees](https://github.com/canvasxyz/okra#readme), and merged into a
consistent global state using CRDTs.

Compared to using p2p networking libraries directly, Canvas provides:

* persistence, in a SQL database with built-in API & routing
* efficient sync for past actions
* ability to [read from chains](./docs/api#contracts)
* standard signature formats, with support for [multiple chains](https://github.com/canvasxyz/canvas/tree/main/packages), [custom data formats](./docs/custom), and upgradeability
* developer tools, including [React hooks](./docs/canvas/packages/hooks) and a [hosted peer](./docs/tutorial/canvas-hub)

Canvas does not enforce any type of global consensus or ordering,
which makes it fast (nodes can finalize valid actions instantly).
It's also easy to learn and set up (<5 min).

For developers building blockchain-based applications, Canvas
complements the chain, providing a fast, upgradeable offchain layer
that can be used to relay data without costs.

## Using Canvas

Each application is a unique file or
[contract](./docs/tutorial/writing-a-canvas-contract), identified by its
IPFS hash, that defines **models**, **routes**, and **actions**.

Anyone can run an application with `canvas run <contract.js>` or
`canvas run <multihash>`. This launches an API for the application
and starts sync with existing nodes on the network.

From the frontend, users can login to the app with a wallet or public key, by
signing a session key stored in the browser. We provide [React
hooks](https://www.npmjs.com/package/@canvas-js/hooks),
and template apps for
[Next.js](https://github.com/canvasxyz/canvas/tree/main/examples/chat-next)
and
[Webpack](https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack).

For projects with existing data schemas, we also support custom data
formats to interoperate with any existing signed data. This is not
documented yet; contact us for more information.


## Demo

These demo applications are deployed to separate Fly.io regions, and
sync with each other:

* [canvas-chat.fly.dev](https://canvas-chat.fly.dev/index.html) built with Webpack
* [canvas-chat-2.fly.dev](https://canvas-chat-2.fly.dev) built with Next.js
* [canvas-chat-3.fly.dev](https://canvas-chat-3.fly.dev) which imports data from the other examples into a new app
* You can also run the app locally by downloading the
  [webpack app](https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack)
  or [next app](https://github.com/canvasxyz/canvas/tree/main/examples/chat-next)
  and running `npm run start`. Your local instance should sync within <60 seconds.


## Building a Canvas App

To get started, proceed to the tutorial to [build your first Canvas
app](./docs/tutorial/writing-a-canvas-contract), or [read more about
the tech](./docs/architecture). You can also look at the
[contract language reference](./docs/api) to see our APIs.
