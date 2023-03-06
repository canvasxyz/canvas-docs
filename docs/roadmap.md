---
sidebar_position: 2
---

# Roadmap

### Upcoming

* Ability to run Canvas nodes entirely in the browser.
* Full support for custom actions.
* Zero-knowledge proof verification. Our plan is to support this through injected "precompiles" so applications can call out to a SnarkJS verifier from within their code.

### Future plans

* Adding dependencies to actions, and adding relations to models.
* First-class support for user-defined CRDTs.

## Changelog

See Github for the [full changelog](https://github.com/canvasxyz/canvas/releases).

### v0.2.x

* Preliminary support for custom actions!
* Core.applyAction and Core.applySession have been replaced with Core.apply, which can be called with either sessions, actions, or custom actions.
* Upgraded QuickJS to add native BigInt support within contracts.
* The libp2p node has been moved inside the Core class. Each app now runs its own libp2p node, with its own persistent PeerId.
* The RPC protocol no longer depends on communicating the types of messages, and just references them by hash. The libp2p protocol string has been upgraded from /x/canvas/sync/v1/{cid}to /x/canvas/sync/v2/{cid}.
* The canvas daemon, canvas start, and canvas stop CLI commands have been removed.
* The @canvas-js/next package has been deprecated.

### v0.1.x

* CLI: Deploy single-page apps using the canvas run command to serve an API. Use the --static flag to serve an included frontend.
* React Hooks: We include React hooks for interacting with Canvas applications from the frontend. The hooks currently support Ethereum-compatible chains only, and can optionally be used with wagmi, ConnectKit, and/or RainbowKit.
* Read from on-chain using contract hooks.
* Contracts can be upgraded by using sources.
* We include example Canvas applications in Webpack and Next.js, which deploy to Fly.io.
