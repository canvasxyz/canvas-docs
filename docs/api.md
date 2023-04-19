---
sidebar_position: 3
title: "Contract Language"
---

# Contract Language

Each Canvas application is defined as a single file, with JavaScript
exports for models, routes, actions, and configuration.

Applications are executed in [QuickJS](https://bellard.org/quickjs/),
a sandboxed ES2020 runtime, with P2P-friendly database accessors.

As the technology matures, we'll also support
faster runtimes including [Realms](https://github.com/tc39/proposal-shadowrealm)
and [WebAssembly via AssemblyScript](https://www.assemblyscript.org/).

## Table of Contents

- [Configuration](#configuration)
- [Models](#models)
- [Routes](#routes)
- [Actions](#actions)
- [Contracts](#contracts)
- [Sources](#sources)


## Configuration

Contracts should specify the chains that are expected to be supported,
by specifying the
[CAIP-2](https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md)
chain identifier.

Both a chain and chain ID are required in the identifier, because a
contract might read from different contracts on different chains.

```ts
// Optional. If no chains are provided, Ethereum mainnet
// ["eip155:1"] will be used by default.

export const chains = ["eip155:1"]
```


## Models

Models define SQLite database tables used by the application, which
are automatically created when the application is started.

* Models must include an `id` and `updated_at` field, with a string and
  datetime type respectively.
* Models may also include a list of `indexes`. Indexes are defined by
  naming the column(s) indexed, and may be defined over a single column
  or multiple columns.
* Models support `boolean`, `string`, `integer`, `float`, and
  `datetime` types.

We automatically translate between JavaScript and SQLite data types,
so for example, datetimes are stored as integers. Refer to our
[interfaces](https://github.com/canvasxyz/canvas/blob/main/packages/interfaces/src/models.ts) for more info.


```ts
export const models = {
  posts: {
    id: "string",
    content: "string",
    from_id: "string",
    updated_at: "datetime",
    indexes: [["updated_at"], ["from_id", "updated_at"]]
  }
}
```

## Routes

Routes are functions that can read from the database, which are automatically
served on the application's API.

```ts
export const routes = {
  "/posts": ({}, { db }) =>
    db.queryRaw("SELECT * FROM posts ORDER BY posts.updated_at DESC")
}
```

Each route takes two arguments, `params` and `context`. Params
includes both path parameters (e.g.  `/posts/:address`) and query
parameters (`/posts?address=<0x123>`) passed to the route.

The context argument includes a `db` object, which can be used to read
from the database. In this example, a request to `/posts` uses the
default offset = 0, while `/posts?offset=10` would query the database
for posts with offset = 10:

```ts
export const routes = {
  "/posts": ({ offset = 0 }, { db }) =>
    db.queryRaw(
      `SELECT id, from_id, content, updated_at FROM posts
       ORDER BY updated_at DESC LIMIT 50 OFFSET :offset`, { offset })
}
```

Currently, queryRaw is lazily executed; it returns a cursor that you
return from the route function, and your node will execute the query
for you after the route finishes execution.

<!--
Alternatively, you can also return a string from the route:

```ts
export const routes = {
  "/posts": () => "SELECT * FROM posts"
}
```
-->

You can refer to the [SQLite
reference](https://www.sqlite.org/lang_expr.html) for more advanced
query strategies. Here are a few examples:

* Use GROUP BY and [aggregate
  functions](https://www.sqlite.org/lang_aggfunc.html) like count(),
  min(), max(), sum(), and total() to compute summary statistics.
* Use GROUP BY, LEFT JOIN, and
  [group_concat()](https://www.sqlite.org/lang_aggfunc.html#group_concat)
  to create a list of objects and their associations.

```ts
export const routes = {
  "/posts_with_reacts": ({ offset = 0 }, { db }) =>
    db.queryRaw(`
      SELECT posts.*,
        group_concat(reacts.creator || ':' || reacts.value, ';') AS reacts
      FROM posts
      LEFT JOIN reacts ON posts.id = reacts.message_id
      GROUP BY posts.id
      ORDER BY updated_at DESC LIMIT 50 OFFSET :offset`, { offset }),
}
```

Here, we fetch a list of reactions to posts, using LEFT JOIN so every
row in `posts` is returned regardless of whether or not it has
reactions. If there are any `reacts` matching the post, we combine
them into a string using `group_concat()` and return them grouped by
post.

When using joins like these, make sure to double-check that you have
the proper indexes on your models! It's easy to miss an index, which
can slow down your queries significantly.


## Actions

Actions are how users write to the database in Canvas
applications. For example, an action could include broadcasting a
message in a game, or creating a thread in a forum.

```ts
export const actions = {
  createPost({ content }, { db, from, hash, timestamp, contracts }) {
    db.posts.set(this.hash, { content, from_id: from })
  },
}
```

Each action receives `args` and `context` objects. `args` is populated
with arguments passed to the action, and `context` is populated with
everything else needed to process the action:

- `hash` is the unique hash of the action. This is defined as the
  [hash](https://github.com/canvasxyz/canvas/blob/main/packages/interfaces/src/actions.ts)
  of the stringified action object.
- `from` is the address or public key that produced the action. If the
  action is signed with a session key, this is the address used to
  authorize the session key.
- `timestamp` is the timestamp of the action, provided by the user.
- `db` is an object used for writing to the database.
  - `db.table.set(key, data)` creates or updates the data for that key.
  - `db.table.delete(key)` deletes the data corresponding to that key.
- `contracts` provides an interface for querying on-chain smart contracts.

Actions will always be processed in the order in which they were
signed, as reported by the user, so a past-dated action will never
overwrite the output of a recent-dated action.

## Contracts

To read from chains, we provide contract hooks, which you can use by
exporting a global `contracts` variable. When starting up, the Canvas
node will ensure that the user has provided an RPC URL for it:

```ts
export const contracts = {
  bibos: {
    chain: "eth",
    chainId: 1,
    address: "0xF528e3381372c43F5e8a55b3E6c252E32F1a26e4",
    abi: ["function balanceOf(address owner) view returns (uint balance)"],
  },
};
```

Canvas uses [Ethers v5's human-readable ABI
standard](https://docs.ethers.io/v5/api/utils/abi/interface/), where
each function in the ABI is described with a string. You don't have to
include every function that the contract supports, [just the ones you
use](https://blog.ricmoo.com/human-readable-contract-abis-in-ethers-js-141902f4d917).

Then, you can use the contracts variable inside the action context:

```ts
export const actions = {
  async createPost({ content }, { db, from, hash, timestamp, contracts }) {
    if ((await contracts.bibos.balanceOf(from)) === "0") return false
    db.posts.set(hash, { content, from_id: from })
  },
}
```

## Sources

Sources are references to previous contracts, which can be used to
soft-fork past applications by importing their actions.

When running a contract with sources, we automatically join the libp2p
gossipsub meshes for those sources, and process and import any actions
seen on them.

```ts
const previousApp = "Qm..."

export const sources = {
  [previousApp]: {
    createPost({ content }, { db, hash, from }) {
      db.posts.set(hash, { content, from })
    },
  },
}
```

Each source should include action handlers for the actions it
imports. You can reuse action handlers declared earlier:

```ts
export const sources = {
  [previousApp]: {
    createPost: actions.createPost
  },
  [additionalApp]: { ...actions }
}
```

Sources are *not* transitive; to import data from a contract imported
by a previous contract, you must define it explicitly. This is because
we don't have a way to retrieve the code of previous contracts.

To see sources in action, take a look at the [unit
tests](https://github.com/canvasxyz/canvas/blob/main/packages/core/test/sources.test.ts).
