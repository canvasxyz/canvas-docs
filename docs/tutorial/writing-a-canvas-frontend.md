---
sidebar_position: 2
---

# Connecting a frontend

***Canvas is early-stage software, and this tutorial may be out of date.***

Now that we have a working Canvas backend, let's connect it to a frontend.

To follow along with this tutorial, make sure you have Metamask installed with a working wallet. You won't need any tokens, but you will need an Ethereum address to log in.

### Starting a Canvas node

First you should have a Canvas node running in the background. You can use the example spec from the last tutorial.

Save it as spec.canvas.js, and start a local node:

```bash
canvas run spec.canvas.js
```

### Setting up a new frontend

Now, start by creating a React app, and installing the Canvas frontend package:

```bash
npx create-react-app canvas-demo
cd canvas-demo
npm install @canvas-js/hooks
npm run start
```

You should now have a starter React application running in your browser.

![Screenshot of React starter app](/img/react-starter.png)

Inside the starter app, open `src/index.js` with your favorite editor, and wrap `<App/>` with the Canvas context provider:

```jsx
import { Canvas } from "@canvas-js/hooks";
// other imports...

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Canvas host="http://localhost:8000">
      <App />
    </Canvas>
  </React.StrictMode>
);
```

Now, we can add React hooks to `src/App.js`. We'll also replace the existing demo code that shows create-react-app is working:

```jsx
import { useRef } from "react";
import { useRoute, useCanvas } from "@canvas-js/hooks";
import "./App.css";

function App() {
  const {
    error: canvasError,
    multihash,
    dispatch,
    connect,
    connectNewSession,
    disconnect,
    address,
    session,
  } = useCanvas();

  const { error, data } = useRoute("/posts");

  return (
    <div className="App">
      <header className="App-header">
        <div>{data?.length || 0} posts</div>
      </header>
    </div>
  );
}

export default App;
```

Save and refresh, and you should see some text on the screen:

![Screenshot of app with text that says "0 posts"](/img/react-starter-1.png)

### Connecting a wallet and posting

To create notes in our app, we'll let the user call `createPost()` from the client. This is simple - they need to be able to call `connect()` to log in, and `dispatch()` to send messages.

We’ll do this with a simple input form. Add this right inside the <header\>:

```jsx
// underneath useRoute():
const inputRef = useRef()

// inside <header>:
<button	onClick={() => session ? disconnect() : address ? connectNewSession() : connect()}>
    {session ? "Logout" : "Login"}
</button>
<form onSubmit={(e) => {
    e.preventDefault()
    dispatch("createPost", inputRef.current.value)
    inputRef.current.value = ''
}}>
  <input type="text" ref={inputRef} placeholder="What's happening?" autoFocus="on" />
  <input type="submit" value="Post" />
</form>
```

While we’re here, we should display the notes that we’ve been creating too. Add this underneath the <form\> element:

```jsx
<div>
  {data?.map((row, index) => (
    <div key={index}>
      {row.from_id.slice(0, 6)}: {row.content}
    </div>
  ))}
</div>
```

When you see the form, enter a note and press “Save”. A few things should happen:

- Metamask should prompt you to select a wallet.
- Once you accept, you should be asked to sign a message.
- Once you sign the message, the note you’ve just written should appear.

Congratulations! You now have a working application.

![Screenshot of app with hello world post](/img/react-starter-2.png)

### How sessions work

You'll notice that only the first time we created a message, you were asked to sign a message. That signature was used to authorize a session key, which is stored in your browser.

As long as the session key isn’t expired, you can use it to sign interactions just as you would with your main wallet.

To properly verify a session, we need to check that it was signed with a valid Ethereum block ID. This requires you to provide a connection to an Ethereum endpoint, which you can do by signing up for a (free) [Infura](https://infura.io/) key and providing it to your local node:

```
canvas run example.canvas.js --chain-rpc eth 1 https://mainnet.infura.io/v3/[API_KEY]
```

Next, lets revisit the contract you made in the previous step and enable it to talk to external blockchains.
