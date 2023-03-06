---
sidebar_position: 1
slug: /
---

# Introduction

[![license MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/core) [![npm](https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github)](https://github.com/canvasxyz/canvas/tree/main/packages/core) [![tests](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg)](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml)

Canvas is a peer-to-peer architecture for decentralized applications,
where user interactions are signed messages replicated over
[libp2p](https://libp2p.io/), and executed in an application runtime.

Compared to using peer-to-peer libraries directly, Canvas provides:

* persistence
* efficient sync for past actions
* ability to [read from chains](./docs/api#contracts)
* a set of React hooks, and an [indexer/hosted peer](./docs/tutorial/canvas-hub)
* support for [multiple chains](https://github.com/canvasxyz/canvas/tree/main/packages) and [custom data formats](./docs/custom)

For developers, we provide an easy-to-use data store like Heroku or
Postgres, which allows most application backends to be expressed in
<50 lines of code. User interactions happen in near-realtime, and
don't require transacting with tokens or cryptocurrency.

You can think of Canvas as serverless functions for signed messages.

## Using Canvas

Each application is a unique file or "contract", identified by its
IPFS hash, that defines **models**, **routes**, and **actions**.

Anyone can run an application with `canvas run <contract.js>` or
`canvas run <multihash>`. This launches an API for the application, and
if you have peering enabled, starts sync with existing
nodes on the network.

From the frontend, users can login to the app with a wallet like
Metamask or Rainbow, by signing a temporary key stored in the
browser. We provide [React
hooks](https://www.npmjs.com/package/@canvas-js/hooks) for doing this,
and template apps for
[Next.js](https://github.com/canvasxyz/canvas/tree/main/examples/chat-next)
and
[Webpack](https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack),
that make it possible to run a full-stack Canvas app with one
command.


## Demo

These demo applications are deployed to separate Fly.io containers, and
synchronize with each other:

* [canvas-chat.fly.dev](https://canvas-chat.fly.dev/index.html) built with Webpack
* [canvas-chat-2.fly.dev](https://canvas-chat-2.fly.dev) built with Next.js
* [canvas-chat-3.fly.dev](https://canvas-chat-3.fly.dev) which imports data from the other examples into a new application
* You can also run Canvas locally by downloading the
  [webpack app](https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack)
  or [next app](https://github.com/canvasxyz/canvas/tree/main/examples/chat-next)
  and running `npm run start`. Your local instance should sync with the online instances in <60 seconds.


## Building a Canvas App

To get started, proceed to the tutorial to [build your first Canvas
app](./docs/tutorial/writing-a-canvas-contract), or [read more about
Canvas](./docs/about). You can also refer to the [contract language
reference](./docs/api) to learn about specific APIs.
