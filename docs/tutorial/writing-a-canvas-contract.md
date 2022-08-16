---
sidebar_position: 1
---

# Writing a Canvas contract

On Canvas, every application’s backend is uniquely defined by an offchain contract, a file like this:

```js
export const database = 'sqlite'

export const models = {
  notes: {
    text: "string",
    creator: "string",
  },
}

export const routes = {
  "/latest": `SELECT * FROM notes
      ORDER BY notes.updated_at DESC
      LIMIT 30`,
  "/latest/:offset": `SELECT * FROM notes
      ORDER BY notes.updated_at DESC
      LIMIT 30 OFFSET :offset`,
}

export const actions = {
  note: function (title) {
    this.db.notes.set(this.hash, { creator: this.from, title })
  },
}
```

Let’s take a look at each part:

- **Models** are database tables, like a schema for a database. We use sqlite as a database.
- **Routes** are views, that take data from database tables, and display them to users.
- **Actions** are ways the user can interact with the app. Each action is a JavaScript function running in a sandboxed WebAssembly VM, that writes to the database by calling `db.table.set()`.

There are also optional exports. For example, you can specify **contracts** so the app can pull data from on-chain, and **translators** for importing data from other apps.

In our example, when a user creates a new note, we call `this.db.notes.set()` to save a note to the database. It will immediately be visible through the two routes we’ve defined above.

To see notes from an individual author, we would write a new SQL query that filters by `creator`:

```js
export routes = {
    // ...
    "/by/:creator": `SELECT * FROM notes
        WHERE notes.creator = :creator
        ORDER BY notes.updated_at DESC
        OFFSET :offset
        LIMIT 30`,
}
```

In this example, we're just writing SQL for each view function to keep things simple. Later, we'll introduce view functions, which allow routes to define more expressive logic.
