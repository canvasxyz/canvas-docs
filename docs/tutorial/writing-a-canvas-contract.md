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
      ORDER BY notes.updated_at DESC`,
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

### Running the contract

Now, let's try running this application. First, install the Canvas command-line package:

```
npm install -g @canvas-js/cli
```

You can copy the code above into a file called example.canvas.js, or download it here.

Now, you can run the contract with `canvas run example.canvas.js`.

Make sure to select **yes** when prompted to run in unchecked mode - this means the node won't check the block hash of each message when it comes from the client.:

```
% canvas run example.canvas.js

No chain RPC provided. Run in unchecked mode instead? [Y/n] Y
Running in unchecked mode! Actions will be processed without verifying a blockhash.
Peering automatically disabled.

[canvas-core] Initializing new model database at /example.canvas/db.sqlite
[canvas-core] Initialized core /example.canvas.js with database example.canvas
[canvas-cli] Serving /example.canvas.js on port 8000:
└ GET http://localhost:8000/
└ POST /actions
  └ { payload, session, signature }
  └ payload: { from, spec, updated_at, call, args }
  └ calls: [ createPoll, createCard, createVote ]
└ POST /sessions
  └ { payload, signature }
  └ payload: { from, spec, updated_at, session_public_key, session_duration }
```

It's live! A few things just happened while initializing the application:

1. We set up a model database for persisting data. Since this is the first time running the application, we also initialized a set of database tables for it from scratch.
2. We also set up a sandboxed JavaScript VM, running inside a WebAssembly environment, to execute each action.
3. We launched a REST API that allows for both writing new actions, and reading from the SQL views exposed by the application.
4. Because we didn’t provide any peers, the application just executes locally without syncing to any other nodes.
