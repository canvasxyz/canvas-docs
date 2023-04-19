---
sidebar_position: 2
---

# Roadmap and changelog

See Github for the [full changelog](https://github.com/canvasxyz/canvas/releases).

### Upcoming

* Improved RPCs for syncing cores with outside databases
* Better support for custom actions and custom sessions
* Zero-knowledge proof verification
* Support for model relations & action dependencies

### v0.4.x (2023-04-18)

* Specs now declare exactly which chains they support using `export const chains: string[]`. If one isn't declared, it defaults to ["eip155:1"] (Ethereum mainnet only).
* Ethereum session signatures now use SIWE instead of EIP-712.
* Ethereum session signatures are now stored in a 3-tuple string format `${domain}/${nonce}/${signatureBytes}`.
* Major libp2p upgrades resulting in faster peer discovery times and more reliable connections. Many thanks to the libp2p team for responding quickly to some bugs we found!
* We now use CAIP-2 chain identifiers across the board.
* More organized and colorful logging :)

### v0.3.x (2023-03-28)

* Support for running Canvas apps entirely in the browser.
* Improvements to the underlying libp2p networking stack. Time to first sync should now be much faster.

### v0.2.x (2023-03-06)

* Preliminary support for custom actions.
* Core.applyAction and Core.applySession have been replaced with Core.apply, which can be called with either sessions, actions, or custom actions.
* Upgraded QuickJS to add native BigInt support within contracts.
* The libp2p node has been moved inside the Core class. Each app now runs its own libp2p node, with its own persistent PeerId.
* The RPC protocol no longer depends on communicating the types of messages, and just references them by hash. The libp2p protocol string has been upgraded from /x/canvas/sync/v1/{cid}to /x/canvas/sync/v2/{cid}.
* The canvas daemon, canvas start, and canvas stop CLI commands have been removed.
* The @canvas-js/next package has been deprecated.

### v0.1.x (2023-02-17)

* CLI: Deploy single-page apps using the canvas run command to serve an API. Use the --static flag to serve an included frontend.
* React Hooks: We include React hooks for interacting with Canvas applications from the frontend. The hooks currently support Ethereum-compatible chains only, and can optionally be used with wagmi, ConnectKit, and/or RainbowKit.
* Read from on-chain using contract hooks.
* Contracts can be upgraded by using sources.
* We include example Canvas applications in Webpack and Next.js, which deploy to Fly.io.
