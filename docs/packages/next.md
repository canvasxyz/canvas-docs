---
sidebar_position: 4
title: "@canvas-js/next"
---

[![npm](https://img.shields.io/npm/v/@canvas-js/next?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/next)

This package provides the `canvas-next` command line tool, for
running Next.js monorepos with a Canvas backend.

To use canvas-next, start with an existing Next.js application
(e.g. using [create-next-app](https://nextjs.org/docs/api-reference/create-next-app)) and install:

```
npm install @canvas-js/next
```

Then, inside package.json, replace `next start` with `canvas-next`:

```
scripts": {
  "dev": "canvas-next",
  "start": "NODE_ENV=production canvas-next"
  "build": "next build",
  "lint": "next lint"
}
```

Now, `npm run dev` will automatically look for `spec.canvas.js` in your
project's root directory, and start a non-persistent development server.
`npm run start` will start a production server.
