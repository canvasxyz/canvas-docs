---
sidebar_position: 4
title: "@canvas-js/next"
---

[![npm](https://img.shields.io/npm/v/@canvas-js/next?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/next) [![npm](https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github)](https://github.com/canvasxyz/canvas/tree/main/packages/next)

This package provides the `canvas-next` command line tool, for
running Next.js Canvas monorepos with a combined frontend and backend.

To use canvas-next, start with an existing Next.js application
(e.g. using [create-next-app](https://nextjs.org/docs/api-reference/create-next-app))
and install the package:

```
npx create-next-app@latest my-app
cd my-app
npm install @canvas-js/next
```

Inside package.json, replace `next start` with `canvas-next`:

```
scripts": {
  "dev": "canvas-next",
  "build": "next build",
  "start": "NODE_ENV=production CANVAS_PATH=./ canvas-next",
  "lint": "next lint"
}
```

Now, `npm run dev` will automatically look for `spec.canvas.js` in your
project's root directory, and start a non-persistent development server.

`npm run start` will start a production server.
