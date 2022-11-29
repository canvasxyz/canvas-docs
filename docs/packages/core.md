---
sidebar_position: 3
title: "@canvas-js/core"
---

[![npm](https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/core)

The Canvas core is an internal component that receives, verifies,
executes, and stores the effects of signed messages.

Most developers should not be using the core directly, but instead
should be using the Canvas CLI or Canvas Hub, which will automatically
maintain cores and manage connections to network peers.

### Initializing a core

To initialize a Canvas core, import `@canvas-js/core` and call
`Core.initialize()` with the appropriate arguments.

```typescript
import { Core } from '@canvas-js/core';

const core = await Core.initialize({
  uri,
  spec,
  directory: null,
  quickJS,
  unchecked: true
});
```

The core should always be identified by a URI, which can be a IPFS URI
pointing to a Canvas spec, or a file:// URI for local
development. Messages are expected to be signed with the core's URI.

The core also takes the compiled text of the spec. Note that this may be
different from what's stored in IPFS, if it has been processed by JSX
or another preprocessor.

You must also provide a QuickJS instance, e.g. a `QuickJSWASMModule`
imported from quickjs-emscripten, which will be used to execute
actions.