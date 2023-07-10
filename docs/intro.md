---
sidebar_position: 1
slug: /
---

# Canvas

### A universal peer-to-peer database

:::tip Upcoming Release
Canvas 1.0 is in the final stages of implementation, with significant improvements landing soon.
Please see our [Discord](https://discord.gg/HZQuC9QEqN) for more details!
:::
<br/>

[![license MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/core) [![npm](https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github)](https://github.com/canvasxyz/canvas/tree/main/packages/core) [![tests](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg)](https://github.com/canvasxyz/canvas/actions/workflows/ci.yml)

Canvas is a **serverless, functional, peer-to-peer database** based on
[Merkle
sync](https://joelgustafson.com/posts/2023-05-04/merklizing-the-key-value-store-for-fun-and-profit)
and [libp2p](https://libp2p.io).

Compared to other peer-to-peer libraries or databases, Canvas is
highly customizable, extensible, and resembles a traditional
application framework. It can be configured to support basically any
type of decentralized identity or signature logic.

Unlike using libp2p directly, Canvas provides:

* local persistent tables via [SQLite](https://www.sqlite.org/index.html)
* efficient [Merkle sync](https://github.com/canvasxyz/okra#readme)
* support for [custom cryptographic formats](./docs/custom) and [atomic upgrades of applications](./docs/api#sources)
* ability to [read from blockchains](./docs/api#contracts) and use block timestamps for conflict resolution
* a full set of tooling, including [React hooks](./docs/canvas/packages/hooks) and a [hosted service](./docs/tutorial/canvas-hub)

Compared to blockchains and on-chain databases, Canvas provides higher
throughput, no confirmation delays, and does not require a token or
transaction fees. Each node has its own view of the network, which
makes it best for traditional database-oriented applications.

## Using Canvas

Developers usually start by self-hosting their own database, or
embedding one in an existing application.

Each database is defined by a unique [application
contract](./docs/tutorial/writing-a-canvas-contract) that defines
**models**, **views**, and **actions**, like a model-view-controller
framework.

Models are database tables defined in SQLite. Actions are signed
messages (either directly signed or session-signed) that write to
database tables, and views are API routes that expose data in the
database.

You can write an application contract in a file or inline in your
frontend. We recommend writing it in a file, in which case you can run
the contract with `canvas run <contract.js>` using our CLI.
This launches an API for the application, and syncs it with anyone else
running the application in seconds.

From the frontend, users can log into the app by signing a session key in
the browser, and further interactions can happen instantly. Finally,
we provide [React
hooks](https://www.npmjs.com/package/@canvas-js/hooks) and
[Next.js](https://github.com/canvasxyz/canvas/tree/main/examples/chat-next)
and
[Webpack](https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack)
templates to get started quickly!


## Demo

These demo applications are deployed to separate Fly.io regions, and
sync via libp2p:

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
