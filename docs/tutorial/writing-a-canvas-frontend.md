---
sidebar_position: 3
---

# Writing a Canvas frontend

Now we have a working Canvas backend, let's connect it to a frontend so we can do a few things with it!

If you're following along with this tutorial in your browser, make sure you have Metamask installed with a working wallet. You won't need any tokens, but you will need an Ethereum address later in this tutorial.

Start by creating a React app, and installing the Canvas frontend package:


```bash
npx create-react-app canvas-demo
cd canvas-demo
npm install @canvas-js/hooks
npm run start
```

You should now have a starter React application running in your browser.

![Screenshot of React starter app](/img/react-starter.png)

Let's customize it with the spec from the last tutorial. Inside the starter app, open `src/index.js` with your favorite editor, and replace the existing imports and demo code:

```jsx
import { useRef } from 'react';
import { useCore } from 'canvas-hooks';

const core = {
  models: {
    notes: {
      text: "string",
      creator: "string",
    },
  },
  routes: {
    "/latest": `SELECT * FROM notes
        ORDER BY notes.timestamp DESC
        LIMIT 30`,
    "/latest/:offset": `SELECT * FROM notes
        ORDER BY notes.timestamp DESC
        OFFSET :offset
        LIMIT 30`,
  },
  actions: {
    note: function (title) {
      this.db.notes.set(this.hash, { creator: this.from, title })
    },
  }
}

export default const Index = ({ props }) => {
    const {
      views, signAndSendAction, login, logout,
      sessionAddress, address, core
    } = useCore(spec)

    return <>
        <div>{core?.actions.length}</div>
    </>
}
```

Notice that we brought the spec inline. The last tutorial's spec exported `{ models, routes, actions }`, but here we provide those in a JavaScript object.

Save and refresh, you should see some text on the screen: `0 actions`.


## Accepting user interactions

In Canvas, users have to sign each of their actions, to allow each peer on the network to independently verify your data.

To create notes in our app, we'll collect signed `note(title)` actions from the user. We’ll do this with a simple input form.

Add this block of code, right underneath the <div\> element:

```jsx
<form onSubmit={() => {
    signAndSendAction("note", inputRef.current.value)
}}>
  <input type="text" ref={inputRef} placeholder="Thread text" autoFocus="on" />
  <input type="submit" value="Save" />
</form>
```

While we’re here, we should display the notes that we’ve been creating too. Add this underneath the <form\> element:

```jsx
<div>
    {views.get("/latest")?.map((row, index) =>
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

- `login` and `logout` are used to create a session, and to clear it from local storage.
- `walletAddress` is the address of your connected wallet.
- `sessionAddress` is the address of the generated session key.

If your sessionAddress variable is non-null, that means you’re logged into a session. Try adding this code at the top of your application:

```jsx
<input
  type="button"
  value={sessionAddress ? `Logout ${address?.slice(0, 5)}...` : "Login"}
  onClick={(e) => {
    sessionAddress ? logout() : login()
  }}
/>
```

Now you have the ability to create a note, without opening Metamask every time.
