# Architecture

TODO

### Canvas vs. blockchains

Blockchains generally finalize immediately (Tendermint) or after 15-30
blocks (PoS gadgets). Canvas nodes don't have a strict concept of
finality, so contentious operations like competing to mint an NFT or
making DeFi swaps, are impractical.  Payments and financial
applications on Canvas should use [state
channels](https://statechannels.org/) as a design pattern.

Canvas networks are currently made entirely of volunteer node
operators, and/or hosted peers like the Canvas Hub. Node operators
don't bond a token, so there are no slashing penalties for going
offline.


### Canvas vs. storage networks

[IPFS](https://ipfs.io/) and [Arweave](https://www.arweave.org/) are
non-programmable data layers. Many decentralized apps archive data to
these layers, but don’t read from them, since that requires imposing a
data schema and indexing the entire network.

Canvas is one approach to providing a data schema on top of IPFS, that
can enforce both a schema and content for data written to it. For
example, a Canvas app can check for an ENS name, DAO membership, or
other identity token before accepting their data as valid in an
application.
