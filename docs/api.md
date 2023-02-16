---
sidebar_position: 3
title: "Contract Language"
---

# Contract Language

Each Canvas application is defined as a single file, with JavaScript
exports for models, routes, actions, and configuration, executed
inside a [sandboxed ES2020 runtime](https://bellard.org/quickjs/).
This lets us support complex logic, like custom action handlers and
zk-proof verification inside Canvas.


## Table of Contents

- [Configuration](#configuration)
- [Models](#models)
- [Routes](#routes)
- [Actions](#actions)
- [Contracts](#contracts)
- [Sources](#sources)


## Configuration

An application name is shown to users when logging into the
application on some chains. Currently, this is only used in the
EIP-712 signing flow for EVM-based chains, and it's optional:

```ts
// Optional. If no name is provided, login flows will prompt for
// "Canvas" as the application name where required.

export const name = "My Application"
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

Routes accept parameters, including both path parameters (e.g.
`/posts/:address`) or query parameters (`/posts?address=<0x123>`).

For the example below, a request to `/posts` below would use the
default offset = 0, while a request to `/posts?offset=10` would return
the query with offset = 10:

```ts
export const routes = {
  "/posts": ({ offset = 0 }, { db }) =>
    db.queryRaw(
      `SELECT id, from_id, content, updated_at FROM posts
       ORDER BY updated_at DESC LIMIT 50 OFFSET :offset`, { offset })
}
```

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

### Custom actions

[Custom actions are coming soon.](https://github.com/canvasxyz/canvas/issues/132)

### Other action extensions & CRDTs

We discourage reading from the database inside actions, since
it's easy to create action handlers that are expensive to handle. If
we read from the database and a previously-dated action comes in that
affects later reads, we have to re-execute the history of actions to
regenerate the application state.

There are ways to reduce this computation to a manageable amount, like
adopting the [causal+ consistency
model](https://www.cs.cmu.edu/~dga/papers/cops-sosp2011.pdf) used by
local-first realtime databases. Doing this efficiently is planned for
v2, and will also enable other features like relations between models.

Another extension we're working on is adding a reorderable list
primitive using CRDTs, which will make it possible to create
collaboratively edited nested lists.

## Contracts

To read from chains, we currently recommend using contract hooks. Export a
global variable to declare contracts, and the Canvas node will ensure that
the user has provided an RPC URL for it:

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

Sources are references to previous contracts. When running a contract
with sources, we automatically join the libp2p gossipsub meshes for
those sources, and process and import any actions seen on them.

This allows contracts to be upgraded by effectively soft-forking
previous contracts.

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
we don't have a guaranteed way of retrieving the contract code of
previous contracts.

To see sources in action, take a look at the [unit
tests](https://github.com/canvasxyz/canvas/blob/main/packages/core/test/sources.test.ts).
