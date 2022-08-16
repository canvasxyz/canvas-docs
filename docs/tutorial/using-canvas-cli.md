---
sidebar_position: 2
---

# Using the Canvas CLI

Now that we’ve written a Canvas application, it’s time to try running it.

### Setting up Node

Make sure you are running Node v16. If you aren't sure, try running `node -v`:

```
% node -v
v16.15.1
```

If you're on a more recent version of Node, Canvas won't run because of an unpatched issue with OpenSSL libraries. You should use NVM to get Node v16, which should be straightforward.

Go to https://github.com/nvm-sh/nvm#installing-and-updating, which should give you a `curl` command for installing NVM. Once you have it installed, open a new command line window, and run:

```
nvm install 16
nvm use 16
```

To make future installations easier, we also recommend running `nvm alias default 16` to set your default Node to v16.

### Setting up Canvas

Now you can install the Canvas command-line package:

```
npm install -g @canvas-js/cli
```

### Using the Canvas CLI

In your project directory, create `example.canvas.js` with the following code:

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

Now, you can run the contract using `canvas run`. Make sure to select **yes** when prompted to run in unchecked mode - this means the node won't check the block hash of each message when it comes from the client:

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

It's live! A few things just happened here:

1. First, we set up a SQL database for persisting data. Since this is the first time running the application, we initialized a set of database tables for it from scratch.
2. We also set up a sandboxed JavaScript VM, running inside a WebAssembly environment, to execute each action.
3. We launched a REST API that allows for both writing new actions, and reading from the SQL views exposed by the application.
4. Because we didn’t provide any peers, the application just executes locally without syncing to any other nodes.
