---
sidebar_position: 1
---

# Writing a Canvas contract

In this tutorial, we will be building a simple message board that allows users to sign in with their wallet and leave messages in real time.

The first part of of this is to write the backend, or rather, the "contract."

## Writing a Canvas contract

On Canvas, every application is uniquely defined by an offchain contract, a file like this:

```js
export const database = "sqlite";

export const models = {
  posts: {
    content: "string",
    from_id: "string",
    indexes: ["updated_at"],
  },
};

export const routes = {
  "/posts": "SELECT * FROM posts ORDER BY posts.updated_at DESC",
};

export const actions = {
  createPost(content) {
    this.db.posts.set(this.hash, { content, from_id: this.from });
  },
};
```

Let’s take a look at each export:

- **Models** are database tables, like a schema for a database.
- **Routes** are views, that take data from database tables, and display them to users.
- **Actions** are ways the user can interact with the app. Each action is a JavaScript function running in a sandboxed WebAssembly VM, that writes to the database by calling set().

In our example, when a user creates a new post, we call `this.db.posts.set()` to save it to the database. It will immediately be visible through the two routes we’ve defined above.

### Running the contract

Now, let's try running this application. First, install the Canvas command-line package:

```
npm install -g @canvas-js/cli
```

Copy the code above into a file called example.canvas.js, and start a node:

```
canvas run example.canvas.js
```

Make sure to select **yes** when prompted to run in unchecked mode. This means the node won't use an API to check the block hash of each signed message, as it comes from the client:

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

It's live! We just took care of a few things while initializing the application:

1. We set up a model database for persisting data. Since this is the first time running the application, we also initialized a set of database tables for it from scratch.
2. We set up a sandboxed JavaScript VM, inside a WebAssembly environment, to execute each action.
3. We launched a REST API for accepting new actions, and accessing the application's routes.
4. Because we didn’t provide any peers, the application just executes locally without syncing to any other nodes.

Next, we're going to create a Front End that using Canvas hooks that can read from this contract.
