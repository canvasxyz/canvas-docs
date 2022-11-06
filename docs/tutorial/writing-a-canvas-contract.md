---
sidebar_position: 1
---

# Writing a contract

In this tutorial, we will be building a simple message board that allows users to sign in with their wallet and leave messages in real time.

The first part of of this is to write the "backend", which we will refer to as the "contract."

## Writing a Canvas contract

On Canvas, every application is uniquely defined by an offchain contract, a file like this:

```js
export const models = {
  posts: {
    id: "string",
    content: "string",
    from_id: "string",
    updated_at: "datetime",
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
- **Actions** are ways the user can interact with the app. Each action is a JavaScript function that writes to the database by calling `this.db.[table].set()`.

In our example, when a user creates a new post, we call `this.db.posts.set()` to save it to the database. It will immediately be visible through the two routes we’ve defined above.

### Running the contract

Now, let's try running this application. First, install the Canvas command-line package:

```
npm install -g @canvas-js/cli
```

Copy the code above into a file called spec.canvas.js, and start a node:

```
canvas run spec.canvas.js --unchecked
```

By default, every message is signed with the block hash of a recent Ethereum block, to prevent long-range replay attacks. However, checking the block hash requires an API, so we'll skip it for now, by running in "unchecked" mode.

```
% canvas run example.canvas.js --unchecked
✦ Using development mode. Actions will be signed with the spec's filename, not IPFS hash.
✦ Using in-memory model database. Data will not be saved between runs.
✦ To persist data, install the spec with:
  canvas install /spec.canvas.js

Serving file:///spec.canvas.js on port 8000:
└ GET http://localhost:8000/
└ GET http://localhost:8000/posts
└ POST /actions
└ POST /sessions
```

To persist data and start network sync, we would run this application by its IPFS multihash.

```
% canvas install spec.canvas.js
[canvas-cli] Creating app directory at /home/.canvas/Qmd5CMRkmcw8Gq1uQ4iPj8Ln9n1ksLLn5XZsddXWrZqkYd
[canvas-cli] Creating /home/.canvas/Qmd5CMRkmcw8Gq1uQ4iPj8Ln9n1ksLLn5XZsddXWrZqkYd/spec.canvas.js
[canvas-cli] Run the app with canvas run Qmd5CMRkmcw8Gq1uQ4iPj8Ln9n1ksLLn5XZsddXWrZqkYd

% canvas run Qmd5CMRkmcw8Gq1uQ4iPj8Ln9n1ksLLn5XZsddXWrZqkYd --unchecked
Serving ipfs://Qmd5CMRkmcw8Gq1uQ4iPj8Ln9n1ksLLn5XZsddXWrZqkYd on port 8000:
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

Next, we're going to create a front end, using Canvas hooks, that can read from this contract.
