---
sidebar_position: 2
title: "@canvas-js/cli"
---

[![npm](https://img.shields.io/npm/v/@canvas-js/cli?color=33cd56&logo=npm)](https://www.npmjs.com/package/@canvas-js/cli)

This package includes the command line interface for using Canvas.

To install, run:

```
npm install -g @canvas-js/cli
```

The CLI includes a built-in IPFS node, SQLite, the QuickJS VM for
processing actions, and an API server. Use the `--help` flag to learn more.

```
canvas <command>

Commands:
  canvas init <filename>  Create a sample spec for demonstration purposes
  canvas info <spec>      Show the models, views, and actions for a spec
  canvas run <spec>       Run an app, by path or IPFS hash
  canvas export <spec>    Export actions and sessions as JSON to stdout
  canvas import <spec>    Import actions and sessions from stdin
  canvas list             List all specs in the data directory

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

The `run` command is the most commonly used:

```
canvas run <spec>

Run an app, by path or IPFS hash

Positionals:
  spec  Path to spec file, or IPFS hash of spec              [string] [required]

Options:
  --version       Show version number                                  [boolean]
  --help          Show help                                            [boolean]
  --port          Port to bind the core API             [number] [default: 8000]
  --peering       Enable peering over libp2p GossipSub                 [boolean]
  --peering-port  Port to bind libp2p TCP transport     [number] [default: 4044]
  --ipfs          IPFS Gateway URL   [string] [default: "http://127.0.0.1:8080"]
  --noserver      Don't bind an Express server to provide view APIs    [boolean]
  --reset         Reset the message log and model databases
                                                      [boolean] [default: false]
  --replay        Reconstruct the model database by replying the message log
                                                      [boolean] [default: false]
  --unchecked     Run the node in unchecked mode, without verifying block hashes
                                                                       [boolean]
  --verbose       Enable verbose logging              [boolean] [default: false]
  --chain-rpc     Provide an RPC endpoint for reading on-chain data      [array]
```