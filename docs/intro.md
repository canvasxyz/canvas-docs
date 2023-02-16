---
sidebar_position: 1
slug: /
---

# Introduction

[![license MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/core) [![npm](https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github)](https://github.com/canvasxyz/canvas/tree/main/packages/core) [![tests](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg)](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml)

Canvas is a developer framework for decentralized applications, where
every user interaction is a signed message replicated over a
peer-to-peer network, implemented using [libp2p](https://libp2p.io/).

For developers, we provide an easy-to-use data store like Heroku
or Postgres, which allows most application backends to be expressed in
<50 lines of code.

For users, we provide a Web2-like user experience
where interactions happen in near-realtime, and don't require
transacting with tokens or cryptocurrency.

Canvas complements blockchains. User actions are synchronized using
[efficient P2P data structures](https://github.com/canvasxyz/okra),
and their effects are combined using a [CRDT](https://crdt.tech/)-like
strategy. Compared to using libp2p directly, Canvas also provides:

* persistence
* efficient sync for past actions
* a concise language for defining applications, with a SQL database and ability to read from chains
* a set of React hooks, and an [indexer/data explorer](./docs/tutorial/canvas-hub)
* support for a wide range of cryptographies/signature formats


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
* You can also run Canvas locally by downloading the
  [webpack app](https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack)
  or [next app](https://github.com/canvasxyz/canvas/tree/main/examples/chat-next)
  and running `npm run start`. Your local instance should sync with the online instances in <60 seconds.


## Building a Canvas App

To get started, proceed to the tutorial to [build your first Canvas
app](./docs/tutorial/writing-a-canvas-contract), or [read more about
Canvas](./docs/about). You can also refer to the [contract language
reference](./docs/api) to learn about specific APIs.
