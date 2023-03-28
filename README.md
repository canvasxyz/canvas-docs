# Canvas Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

Install dependencies, and then start a local development server:

```
npm i
npm run start
```

Package documentation is generated from submodules.

The first time you pull the main Canvas repository, you should run:

```
git submodule update --init
```

To pull updates:

```
git submodule update --remote
```

## Deploying

Deploy to Github pages (requires write access to the repo):

```
npm run deploy
```

You can also use `npm run build` to generate static content into the `build` directory.

(C) Canvas Technologies, Inc.