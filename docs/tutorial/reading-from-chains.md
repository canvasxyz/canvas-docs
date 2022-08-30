---
sidebar_position: 3
---

# Reading on-chain data

Like all peer-to-peer protocols, Canvas applications need a way to determine who's allowed to post to the network. To accomplish this, we support both on-chain and off-chain ways to verify user identity.

For on-chain identity, the user's identity is read from a smart contract on a blockchain, such as an identity registry or NFT contract.

For off-chain identity, the user should hold a [verifiable credential](https://www.w3.org/TR/vc-data-model/), a signed message from an issuer that's held off-chain.

This tutorial walks you through reading on-chain identities, using an ERC-721 contract as an example.

### Referencing a smart contract

To reference a smart contract from your spec, define it in the **contracts** export, following this format:

```js
export const contracts = {
  bibos: {
    chain: "eth",
    chainId: 1,
    address: "0xF528e3381372c43F5e8a55b3E6c252E32F1a26e4",
    abi: ["function balanceOf(address owner) view returns (uint balance)"],
  },
}
```

* The **name** of the contract is how you'll reference it from within your actions.
* The **chain** defines which type of chain your contract connects to. Currently, this should always be `eth`, which is used for all EVM chains.
* The **chainId** is the Ethereum-compatible [chain ID](https://chainlist.org/).
* The **address** is the smart contract's address, as found on a block explorer like Etherscan.
* The **abi** is required for Canvas to know what methods it's calling on the contract.

Canvas uses [Ethers v5's human-readable ABI standard](https://docs.ethers.io/v5/api/utils/abi/interface/), where each function in the ABI is described with a string. You don't have to include every function that the contract supports, [just the ones you're using](https://blog.ricmoo.com/human-readable-contract-abis-in-ethers-js-141902f4d917).

In our example, [Bibos](https://bibos.xyz/) are an [ERC-721](https://eips.ethereum.org/EIPS/eip-721) compliant contract, so we use `balanceOf(address)` to check the user's balance.


### Using a contract in your spec

Once you've exported a contract, you can use it from within your actions, using the `contract()` global. *Note: The contract call is an injected global right now, but in later versions, you'll import it manually.*

```js
const balance = await contract("bibos").balanceOf(this.from)
```

```js
export const actions = {
	async createPost(content) {
		if ((await contract("bibos").balanceOf(this.from)) === "0") return false
		this.db.posts.set(this.hash, { content, from_id: this.from })
	}
}
```

The injected contract supports any method defined in its ABI, so you can use a contract that performs more advanced operations - like checking for multiple NFTs, ensuring that a balance exceeds a threshold, or even verifying a zk-proof.

### Running your spec

To read the state of an on-chain contract, your local node must have access to a blockchain node. The easiest way to do this is to include an RPC endpoint of a hosted node from a provider like [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/). Or you can [set up your own node](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/), but that's beyond the scope of this tutorial.

The first way to specify an RPC is by using the **--chain-rpc** flag, which takes three arguments, the type of chain, chain ID, and RPC URL.

```
canvas run spec.canvas.js --chain-rpc eth 1 https://mainnet.infura.io/v3/[API_KEY]
```

The second way is to provide it as environment variables, which you can save in a **.env** file in the directory you are running your spec from. Then, you can use `canvas run` as you did previously.

```
ETH_CHAIN_ID=1
ETH_CHAIN_RPC=https://mainnet.infura.io/v3/[API_KEY]
```

You can refer to [Chainlist](https://chainlist.org/) for a table of common chain IDs, or use this reference:


| Network           | Chain ID          |
| ----------------- | ----------------- |
| Ethereum Mainnet  | 1                 |
| Optimism (L2)     | 10                |
| Arbitrum (L2)     | 42161             |
| Gnosis (PoS)      | 100               |
| Polygon (PoS)     | 137               |
| Goerli (Testnet)  | 5                 |

Note that the Ropsten and Rinkeby testnets are being deprecated with the transition to ETH2.

Congratulations - now you have a decentralized app where writing to the contract requires holding an NFT!