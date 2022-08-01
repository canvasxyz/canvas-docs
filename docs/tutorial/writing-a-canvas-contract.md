---
sidebar_position: 1
---

# Writing a Canvas contract

On Canvas, every application’s backend is defined by an offchain contract (or "spec"). A spec is a collection of models, routes, and actions:

```js
const models = {
  notes: {
    text: "string",
    creator: "string",
  },
}

const routes = {
  "/latest": `SELECT * FROM notes
      ORDER BY notes.timestamp DESC
      LIMIT 30`,
  "/latest/:offset": `SELECT * FROM notes
      ORDER BY notes.timestamp DESC
      LIMIT 30 OFFSET :offset`,
}

const actions = {
  note: function (title) {
    this.db.notes.set(this.hash, { creator: this.from, title })
  },
}

export { models, routes, actions }
```

Let’s take a look at each part:

- **Models** are database tables, like a schema for a database.
- **Routes** are views, that take data from database tables, and display them to users.
- **Actions** are ways the user can interact with the app. Each action is a JavaScript function running in a sandboxed WebAssembly VM, that writes to the database by calling `set()`.

In our example, when a user creates a new note, we call `this.db.notes.set()` to save a note to the database, which will immediately be visible through the two routes we’ve defined above.

In these routes, since notes aren’t namespaced by creator, everyone’s notes go into the same global space. If we wanted a view of notes from each author separately, we would write a new SQL query that filters by `creator`:

```js
export routes = {
    // ...
    "/by/:creator": `SELECT * FROM notes
        WHERE notes.creator = :creator
        ORDER BY notes.timestamp DESC
        OFFSET :offset
        LIMIT 30`,
}
```

In these examples, we're just writing SQL for each view function to keep things simple. But in the next few tutorials, we'll introduce view functions, which allow routes to define more expressive logic.
