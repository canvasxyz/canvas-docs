---
sidebar_position: 2
---

# Connecting a frontend

Now that we have a working Canvas backend, we'll connect it to a frontend using [wagmi](https://wagmi.sh) and [ConnectKit](https://docs.family.co/connectkit).

To follow along with this tutorial, you should have Metamask installed. You won't need any tokens, but you will need an Ethereum address.

## Starting a Canvas node

First you should have a Canvas node running in the background. You can
use the example app from the last tutorial, or run `canvas init
spec.canvas.js` to generate a new one.

```bash
canvas run spec.canvas.js
```

## Setting up a new frontend

Now, start by creating a React app, and installing dependencies. (For Typescript, add `--template typescript` when running create-react-app.)

```bash
npx create-react-app canvas-demo
cd canvas-demo
npm install wagmi connectkit ethers @canvas-js/hooks
npm run start
```

You should now have a starter React application running in your browser.

(If you get warnings, run `GENERATE_SOURCEMAP=false npm run
start`. This resolves a known issue where many packages are
missing sourcemaps required by Webpack 5.)

![Screenshot of React starter app](/img/react-starter.png)

Inside the starter app, open `src/index.js` with your favorite editor. Import wagmi, ConnectKit, and the Canvas hooks and create a wagmi client, and then wrap <App /> with the providers we're using.

```ts
// other imports ignored...
import { Canvas } from "@canvas-js/hooks";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const client = createClient(
  getDefaultClient({ appName: "Demo App" })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Canvas host="http://localhost:8000">
          <App />
        </Canvas>
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
```

Now, we can add Canvas and ConnectKit components to our application. Inside `src/App.js`, we'll use `<ConnectKitButton>` to log in, and the `useRoute()` hook to fetch data from the backend:

```tsx
import "./App.css"
import { ConnectKitButton } from "connectkit";
import { useRoute } from "@canvas-js/hooks";

function App() {
  const { data } = useRoute("/posts");

  return (
    <div className="App">
      <header className="App-header">
        <div>{data?.length || 0} posts</div>
        <ConnectKitButton />
      </header>
    </div>
  );
}

export default App;
```

Save and refresh, and you should see some text on the screen:

![Screenshot of app with text that says "0 posts"](/img/react-starter-1.png)

## Connecting a wallet and posting actions

To create notes in our app, we'll let the user call `createPost()` from the client. We’ll do this by setting up a chain implementation using Canvas and ConnectKit, and then adding a simple input form.

```tsx
import "./App.css"
import { ConnectKitButton } from "connectkit";
import { useRoute, useSession } from "@canvas-js/hooks";
import { EthereumChainImplementation } from "@canvas-js/chain-ethereum"
import { useRef, useMemo } from "react";
import { useAccount, useSigner, useProvider, useNetwork } from "wagmi";

function App() {
  const { address } = useAccount();
  const { data: signer } = useSigner()
  const provider = useProvider()
  const { chain } = useNetwork()

  const chainImplementation = useMemo(() => {
    return new EthereumChainImplementation(
      chain?.id.toString() ?? "1",
      provider
    )
  }, [chain?.id, provider])

  const { sessionAddress, login, client } = useSession(
    chainImplementation,
    signer
  )

  const { data } = useRoute("/posts")
  const inputRef = useRef()

  return (
    <div className="App">
      <header className="App-header">
        <div>{data?.length || 0} posts</div>
        <ConnectKitButton />
        {address && !sessionAddress && <button onClick={login}>Login</button>}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            client.createPost({ content: inputRef.current.value })
            inputRef.current.value = ""
          }}
        >
          <input
            disabled={!sessionAddress}
            type="text"
            ref={inputRef}
            placeholder="What's happening?"
            autoFocus="on"
          />
          <input disabled={!sessionAddress} type="submit" value="Post" />
        </form>
      </header>
    </div>
  );
};
```

While we’re here, we should display the notes that we’ve been creating too. Add this underneath the <form\> element:

```tsx
<div>
  {data?.map((row, index) => (
    <div key={index}>
      {row.from_id.slice(0, 6)}: {row.content}
    </div>
  ))}
</div>
```

Enter a note and press “Save”. A few things should happen:

- Metamask should prompt you to select a wallet.
- Once you accept, you should be asked to sign a message.
- Once you sign the message, the note you’ve just written should appear.

Congratulations! You now have a working application.

![Screenshot of app with hello world post](/img/react-starter-2.png)

## How sessions work

You'll notice that only the first time we created a message, you were asked to sign a message. That signature was used to authorize a session key, which is stored in your browser.

As long as the session key isn’t expired, you can use it to sign interactions just as you would with your main wallet.

To *fully* verify a session, we need to check that it was signed with a valid Ethereum block ID. We don't do this yet, because it requires you to provide a connection to an Ethereum node (or another blockchain).

```
canvas run example.canvas.js --chain-rpc eth 1 https://mainnet.infura.io/v3/[API_KEY]
```

We'll learn how that works in the next tutorial, when we extend the contract we've written, and enable it to talk to external blockchains.
