---
sidebar_position: 3
title: "@canvas-js/core"
---

[![npm](https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/core)

*Most developers should not be using the core directly. Consider
using the Canvas CLI or Canvas Hub, which will automatically start and
maintain cores, databases, and connections to network peers.*

The Canvas core is an internal component, that handles receiving,
verifying, executing, and storing the effects of signed messages to a
local database.

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

You must also provide `directory` where any SQLite databases will be
created (an in-memory database will be used if directory is null) and
`quickJS`, which should be a QuickJS instance, e.g. a
`QuickJSWASMModule` imported from quickjs-emscripten, which will be
used to execute actions.
