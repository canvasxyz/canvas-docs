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

Now, we can add the React hooks to `src/App.tsx`. We'll also replace the existing demo code that shows create-react-app is working:

```
import { useRoute, useCanvas } from "@canvas-js/hooks"
// other imports...

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

  const { error, data } = useRoute<Post>("/posts")

  return <>
    <div>{core?.actions.length}</div>
  </>
}
```

Save and refresh, you should see some text on the screen: `0 actions`.


## Accepting user interactions

In Canvas, users have to sign each of their actions, to allow each peer on the network to independently verify your data.

To create notes in our app, we'll collect signed `note(title)` actions from the user. We’ll do this with a simple input form.

Add this block of code, right underneath the <div\> element:

```jsx
<form onSubmit={() => {
    dispatch("note", inputRef.current.value)
}}>
  <input type="text" ref={inputRef} placeholder="Thread text" autoFocus="on" />
  <input type="submit" value="Save" />
</form>
```

While we’re here, we should display the notes that we’ve been creating too. Add this underneath the <form\> element:

```jsx
<div>
    {data?.map((row, index) =>
        <div key={index}>{row.text} -{row.creator}</div>
    )}
</div>
```

When you see the form, enter a note and press “Save”. A few things should happen:

- Metamask should prompt you to select a wallet.
- Once you accept, you should be asked to sign a message.
- Once you sign the message, the note you’ve just written should appear.

Congratulations! You now have a working Canvas application.


### Logging in with sessions

Earlier, when we set up our Canvas spec using the `useCore()` hook, we exported several variables with names like `login` and `logout`.

Those are used for generating sessions. When you call login, we generate a new session key, store it in the browser, and request a signature from Metamask that authorizes it for a limited amount of time.

As long as the session key isn’t expired, you can use it to sign interactions, just as you would with your main wallet. (For extra security, certain actions can be configured to require a signature from your main wallet.)

To use session logins, this is the API you should be familiar with:

- `connect` is used to connect your wallet, but doesn't automatically start a session.
- `connectNewSession` and `disconnect` are used to start a session, and to clear it from local storage.
- `address` is the address of your connected wallet.
- `session` is an object that contains your session key.

If your session object is non-null, that means you’re logged into a session. Try adding this code at the top of your application:

```jsx
<input
  type="button"
  value={session?.address ? `Logout ${session?.address?.slice(0, 5)}...` : "Login"}
  onClick={(e) => {
    !address ? connect() : !session?.address ? connectNewSession() : disconnect()
  }}
/>
```

Now you have the ability to create a note, without opening Metamask every time.

### Deploying

Since this is a create-react-app application, it's easy to deploy on the platform of your choice.

If you're using Vercel, run `vercel` to build and deploy to the Vercel edge network. For production, use `vercel --prod` instead.

Remember to switch out localhost:8000 for the URL of a Canvas peer, in `src/index.js`. Setting up your own peer? Continue to the next tutorial to find out how.
