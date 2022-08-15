---
sidebar_position: 3
---

# Writing a Canvas frontend

Now that we have a working Canvas backend, let's connect it to a frontend so we can start interacting with it.

If you're following along with this tutorial in your browser, make sure you have Metamask installed with a working wallet. You won't need any tokens, but you will need an Ethereum address to log in.

### Start a Canvas node

First you should have a Canvas node running in the background. You can use the example spec from the last tutorial, or [download this spec](https://github.com/canvasxyz/canvas/blob/main/packages/example-chat-client/spec.canvas.js), which includes a few more views.

Save it as spec.canvas.js, and start a local node:

```bash
canvas run spec.canvas.js
```

### Set up a new frontend

Now, start by creating a React app, and installing the Canvas frontend package:


```bash
npx create-react-app canvas-demo
cd canvas-demo
npm install @canvas-js/hooks
npm run start
```

You should now have a starter React application running in your browser.

![Screenshot of React starter app](/img/react-starter.png)

Let's customize it with the spec from the last tutorial. Inside the starter app, open `src/index.js` with your favorite editor, and add the Canvas context provider:

```jsx
import { Canvas } from '@canvas-js/hooks';
// other imports...

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas host="http://localhost:8000">
      <App />
    </Canvas>
  </React.StrictMode>
);
```

Now, we can add the React hooks to `src/App.js`. We'll also replace the existing demo code that shows create-react-app is working:

```
import { useRef } from "react"
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
  } = useCanvas()

  const { error, data } = useRoute("/posts")

  return (
    <div className="App">
      <header className="App-header">
        <div>{data?.length || 0} posts</div>
      </header>
    </div>
  )
}

export default App;
```

Save and refresh, you should see some text on the screen: `0 posts`.


## Accepting user interactions

In Canvas, users have to sign each of their actions, to allow each peer on the network to independently verify your data.

To create notes in our app, we'll collect signed `note(title)` actions from the user. We’ll do this with a simple input form.

Add this block of code, right inside the <header\>, at the top:

```jsx
// underneath useRoute():
const inputRef = useRef()

// inside <header>:
<form onSubmit={(e) => {
    e.preventDefault()
    dispatch("note", inputRef.current.value)
}}>
  <input type="text" ref={inputRef} placeholder="What's happening?" autoFocus="on" />
  <input type="submit" value="Post" />
</form>
```

While we’re here, we should display the notes that we’ve been creating too. Add this underneath the <form\> element:

```jsx
<div>
  {data?.map((row, index) =>
    <div key={index}>
      {row.from_id.slice(0, 6)}: {row.content}
    </div>
  )}
</div>
```

When you see the form, enter a note and press “Save”. A few things should happen:

- Metamask should prompt you to select a wallet.
- Once you accept, you should be asked to sign a message.
- Once you sign the message, the note you’ve just written should appear.

Congratulations! You now have a working Canvas application.


### How sessions work

You'll notice that the first time we created a message, you were asked to sign a message, but you weren't asked again. During the first login, we authorized a session key, which is stored in your browser and valid for a fixed amount of time.

As long as the session key isn’t expired, you can use it to sign interactions just as you would with your main wallet.

To properly verify a session, we need to check that it was signed with a valid Ethereum block ID. This requires you to provide a connection to an Ethereum endpoint, which you can do by signing up for a (free) [Infura](https://infura.io/) key and providing it to your local node:

```
canvas run spec.canvas.js --chain-rpc eth 1 https://mainnet.infura.io/v3/[API_KEY]
```

### Deploying

Since this is a create-react-app application, it should be easy to deploy on the platform of your choice.

If you're using Vercel, run `vercel` to build and deploy to the Vercel edge network. For production, use `vercel --prod` instead.

Remember to switch out localhost:8000 for the URL of a Canvas peer, in `src/index.js`. Setting up your own peer? Continue to the next tutorial to find out how.
