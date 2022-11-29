---
sidebar_position: 0
title: "Contract Language"
---

# Contract Language


### Models

Each model defines a SQLite database table, automatically created when
the application is started.

Models must include an `id` and `updated_at` field, with a string and
datetime type, respectively. They may also include a list of
indexes. Indexes may be defined over a single column, or multiple columns.

```js
export const routes = {
  posts: {
    id: "string",
    content: "string",
    from_id: "string",
    updated_at: "datetime",
    indexes: [["updated_at"], ["from_id", "updated_at"]]
  }
}
```

### Routes

Each route is a view with its own API route, and SQL expression that
queries the database.

```js
export const routes = {
  "/posts": "SELECT * FROM posts ORDER BY posts.updated_at DESC",
}
```

It is also possible to create routes with
[path parameters](https://www.sqlite.org/lang_expr.html#parameters).
For example:

```js
export const routes = {
  "/posts/:from_id": `
    SELECT * FROM posts WHERE posts.from_id = :from_id
    ORDER BY posts.updated_at DESC`
}
```

### Advanced Routes

For routes with more advanced syntax, consult the
[SQLite documentation](https://www.sqlite.org/lang_expr.html). A few useful
examples:

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

In this example, we use LEFT JOIN so every row in `posts` is returned,
and if there are any `reacts` matching the post, those are grouped
together into a string and returned as a list with both
`react.creator` and `react.value`.

When using joins like these, make sure to double-check that you have
the proper indexes on your models, so your routes run efficiently even
when your tables grow larger.


### Actions

Actions define different messages to be handled by the Canvas application.
For example, an action could include posting a message in chat, creating a
threaad in a forum, or modifying an item in a game.

Actions have access to the `this.db` object, which exposes the model
database to the action handler.

* **this.db.table.set(key, data)** creates or updates the data for that key.
* **this.db.table.delete(key)** deletes the data corresponding to that key.

They also have access to some action metadata:

* **this.hash** is the unique hash of the action.
* **this.from** is the address or public key, of the signer of the action.

Actions will always be processed in the order in which they were signed, so
a past action will never overwrite the output of a more recent action, even
if it's seen by the local client later.

```js
export const actions = {
  createPost(content) {
    this.db.posts.set(this.hash, { content, from_id: this.from })
  },
}
```
