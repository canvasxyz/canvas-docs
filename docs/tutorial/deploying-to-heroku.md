---
sidebar_position: 5
---

# Deploying to Heroku

Heroku was one of the first application hosting platforms, founded in 2007 and used by many developers since then. Although Heroku's free tier was deprecated in 2022, some developers continue to use its paid tier, and other platforms have adopted Heroku's architecture (including hosted Postgres).

Deploying a Canvas application to Heroku is simple, and should take no more than 15 minutes.

Note that Heroku uses a different dialect of SQL than the default development environment for Canvas on your local machine (SQLite). You may have to make changes to your views if they're written in SQL, although for most applications, the changes will be minimal.

### Getting started

First, install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and make sure you're logged in. On Mac OS:

```
brew tap heroku/brew && brew install heroku
heroku login
```

Now, navigate to the directory with your application code. For this tutorial, you can clone the main Canvas repo, and then navigate to the example-chat-server directory:

```
git clone git@github.com:canvasxyz/canvas.git
cd canvas
cd packages/example-chat-server
```

### The application

Three files in this directory are used to deploy to Heroku:

* **package.json** ensures the Canvas CLI is globally installed, when running the app on Heroku.
* **Procfile** specifies how to run the app.
* **spec.canvas.js** is the application.

package.json:

```js
{
  "scripts": {
    "build": "npm install -g @canvas-js/cli"
  }
}
```

Procfile:

```
web: canvas run ./spec.canvas.js --port $PORT --database $DATABASE_URL
```

### Setting up Heroku and Postgres

From the directory where you have your spec, create an new Heroku application.

```
heroku create
```

Then, add a Postgres database to it:

```
heroku addons:create heroku-postgresql:hobby-dev
```

### Adding a blockchain RPC

If your app reads from a smart contract, you'll need to provide an RPC endpoint for the chain you're connecting to. For Ethereum and L2 users, sign up for [Infura](https://infura.io/)'s [free tier](https://infura.io/pricing), create a project, and add it to the configuration:

```
heroku config:set ETH_CHAIN_ID=1 ETH_CHAIN_RPC=https://mainnet.infura.io/v3/[API_KEY]
```

**If you skip this step, you may need to edit Procfile to add `--unchecked` to the canvas run command.** Otherwise, your app won't be able to start in production.

```
web: canvas run ./spec.canvas.js --port $PORT --database $DATABASE_URL --unchecked
```

### Deploying

Initialize the directory as a git repo, and then add the Heroku remote. You can do this from within the example-chat-server directory. Just make sure to give it the name of the app you created earlier:

```
git init
heroku git:remote --app [name]
```

Now, you can commit and push:

```
git add .
git commit -m "initial commit"
git push heroku main
```

Your application should be live on Heroku as soon as the build and deployment process is complete.
