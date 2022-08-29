---
sidebar_position: 5
---

# Deploying to Heroku

Deploying a Canvas application to Heroku is simple, and should take no more than 15 minutes.

Applications on Heroku use a different dialect of SQL (Postgres) than the default development environment for Canvas on your local machine (SQLite). You may have to make changes to your views, although for most applications, the changes will be minimal.

### Getting started

First, you should install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and make sure you're logged in. On Mac OS:

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

### Deploying

From the directory where you have your spec, create an new Heroku application.

```
heroku create
```

Then, add a Postgres database to it:

```
heroku addons:create heroku-postgresql:hobby-dev
```

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

Your application should be live on Heroku as soon as the build and deployment process is complete. Congratulations!
