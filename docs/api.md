---
sidebar_position: 3
title: "Contract Language"
---

# Contract Language

Each Canvas application is defined as a single file, with JavaScript
exports for models, routes, actions, and configuration, executed
inside a [sandboxed ES2020 runtime](https://bellard.org/quickjs/).

This is similar to the approach used by web apps like
[Figma](https://www.figma.com/blog/how-we-built-the-figma-plugin-system/),
and allows us to support custom action handlers, zk-proof verification,
and other complex computations inside Canvas.


## Configuration

An application name is shown to users when logging into the
application on some chains. Currently, this is only used in the
EIP-712 signing flow for EVM-based chains, and it's optional:

```js
// Optional, defaults to "Canvas"
export const name = "My Application"
```


## Models

Models define SQLite database tables used by the application, which
are automatically created when the application is started.

Models must include an `id` and `updated_at` field, with a string and
datetime type. They may also include a list of indexes. Indexes may be
defined over a single column, or multiple columns.

```js
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
served by the Canvas node on the API, just like routes in Express.

```js
export const routes = {
  "/posts": ({}, { db }) =>
    db.queryRaw("SELECT * FROM posts ORDER BY posts.updated_at DESC")
}
```

Routes accept parameters, either path parameters (e.g.
`/posts/:address`) or query parameters (`/posts?address=<0x123>`). For
example, a request to `/posts` below would use the default offset,
while a request to `/posts?offset=10` would return the query with
offset = 10:

```js
export const routes = {
  "/posts": ({ offset = 0 }, { db }) =>
    db.queryRaw(
      `SELECT id, from_id, content, updated_at FROM posts
       ORDER BY updated_at DESC LIMIT 50 OFFSET :offset`, {
      offset,
    })
}
```

You can refer to the [SQLite
reference](https://www.sqlite.org/lang_expr.html) to learn to build more
advanced queries and routes. Here are a few examples:

* Use GROUP BY and [aggregate
  functions](https://www.sqlite.org/lang_aggfunc.html) like count(),
  min(), max(), sum(), and total() to compute summary statistics.
* Use GROUP BY, LEFT JOIN, and
  [group_concat()](https://www.sqlite.org/lang_aggfunc.html#group_concat)
  to create a list of objects and their associations.

```js
export const routes = {
  "/posts_with_reacts": `
    SELECT posts.*,
      group_concat(reacts.creator || ':' || reacts.value, ';') AS reacts
    FROM posts
    LEFT JOIN reacts ON posts.id = reacts.message_id
    GROUP BY posts.id
    ORDER BY updated_at DESC`,
}
```

In this example, we fetch a list of reactions to posts. We use LEFT
JOIN so every row in `posts` is returned regardless of whether or not
it has reactions. If there are any `reacts` matching the post, we
combine them into a string using `group_concat()` and return them as a
list.

When using joins like these, make sure to double-check that you have
the proper indexes on your models! It's easy to miss an index, which
can slow down your queries significantly.


## Actions

Actions are how users write to the database in Canvas
applications. For example, an action could include broadcasting a
message in a game, or creating a thread in a forum.

For example, here the user calls `createPost(content)` and we save
the content to the database.

```js
export const actions = {
  createPost({ content }, { db, from, hash, timestamp }) {
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

Actions will always be processed in the order in which they were
signed, as reported by the user, so a past-dated action will never
overwrite the output of a recent-dated action.

### Custom actions

[Custom actions are coming soon.](https://github.com/canvasxyz/canvas/issues/132)

### Other action extensions

We try to discourage reading from the database inside actions, since
it's easy to create action handlers that are expensive to handle. If
we read from the database and a previously-dated action comes in that
affects later reads, we have to re-execute the history of actions to
regenerate the state of the application.

There are ways to reduce this computation to a manageable amount, like
adopting a [causal-plus consistency
model](https://jepsen.io/consistency/models/causal) like
Replicache and other local-first realtime databases.

Another extension we're working on is adding a reorderable list
primitive using CRDTs, which will make it possible to create
collaboratively edited nested lists.
