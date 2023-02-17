---
sidebar_position: 1
---

# Writing a contract

In this tutorial, we will be building a simple message board that allows users to sign in with their wallet and leave messages in real time.

The first part of of this is to write the "backend", which we will refer to as the "contract."

## Writing a Canvas contract

On Canvas, every application is uniquely defined by an offchain contract, a file like this:

```ts
export const models = {
  posts: {
    id: "string",
    content: "string",
    from_id: "string",
    updated_at: "datetime",
    indexes: ["updated_at"],
  }
};

export const routes = {
  "/posts": ({ offset = 0 }, { db }) =>
    db.queryRaw("SELECT * FROM posts ORDER BY posts.updated_at DESC LIMIT 50 OFFSET :offset", { offset })
}

export const actions = {
  createPost({ content }, { db, hash, from, timestamp }) {
    db.posts.set(hash, { content, from_id: from });
  }
};`
```

Let’s take a look at each export:

- **Models** are database tables, like a schema for a database.
- **Routes** are views, that take data from database tables, and display them to users.
- **Actions** are ways the user can interact with the app. Each action is a JavaScript function that writes to the database by calling `this.db.[table].set()`.

In our example, when a user creates a new post, we call `this.db.posts.set()` to save it to the database. It will immediately be visible through the two routes we’ve defined above.

### Running the contract

Now, let's try running this application. First, install the Canvas command-line package:

```
npm install -g @canvas-js/cli
```

Copy the code above into a file called spec.canvas.js, or run `canvas init spec.canvas.js` to automatically generate it. Then, start a node:

```
canvas run spec.canvas.js --unchecked
✦ Using development mode. Actions will be signed with the spec's filename, not IPFS hash.
✦ Using in-memory model database. Data will not be saved between runs.
✦ To persist data, install the spec with:
  canvas install spec.canvas.js

Serving file:///spec.canvas.js on port 8000:
└ GET http://localhost:8000/
└ GET http://localhost:8000/posts
└ POST /actions
└ POST /sessions
```

Why the `--unchecked` flag? For applications that use on-chain identity, messages are signed with a block hash, which allows actions to read from the state of the blockchain at the moment the user signed them. However, this is optional, and checking for blocks requires access to a synchronized blockchain node (like Infura).

To persist data and start network sync, we would run this application by its IPFS hash. An IPFS hash represents the exact fingerprint of the application code, including any comments and whitespace.

```
% canvas install spec.canvas.js
[canvas-cli] Creating app directory at /home/.canvas/QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1
[canvas-cli] Creating /home/.canvas/QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1/spec.canvas.js
[canvas-cli] Run the app with canvas run QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1

% canvas run QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1 --unchecked
Serving ipfs://QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1 on port 8000:
└ GET http://localhost:8000/
└ GET http://localhost:8000/posts
└ POST /actions
└ POST /sessions
```

We're live! Here is a summary of what just happened:

1. We set up a model database for persisting data. Since this is the first time running the application, we also initialized a set of database tables for it from scratch.
2. We set up a sandboxed JavaScript VM, for executing each action.
3. We launched a REST API for accepting new actions, and accessing the application's routes.
4. The application will make itself discoverable via libp2p, so anyone else running the same application can discover it. (Wait a few seconds and you can see peer discovery messages being broadcasted.)

Next, we're going to create a frontend that can read from this contract.
