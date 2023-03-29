"use strict";(self.webpackChunkcanvas_docs=self.webpackChunkcanvas_docs||[]).push([[956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},s="Writing a contract",o={unversionedId:"tutorial/writing-a-canvas-contract",id:"tutorial/writing-a-canvas-contract",title:"Writing a contract",description:"In this tutorial, we will be building a simple message board that allows users to sign in with their wallet and leave messages in real time.",source:"@site/docs/tutorial/writing-a-canvas-contract.md",sourceDirName:"tutorial",slug:"/tutorial/writing-a-canvas-contract",permalink:"/docs/tutorial/writing-a-canvas-contract",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Architecture",permalink:"/docs/architecture"},next:{title:"Connecting a frontend",permalink:"/docs/tutorial/writing-a-canvas-frontend"}},c={},l=[{value:"Writing a Canvas contract",id:"writing-a-canvas-contract",level:2},{value:"Running the contract",id:"running-the-contract",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"writing-a-contract"},"Writing a contract"),(0,r.kt)("p",null,"In this tutorial, we will be building a simple message board that allows users to sign in with their wallet and leave messages in real time."),(0,r.kt)("p",null,'The first part of of this is to write the "backend", which we will refer to as the "contract."'),(0,r.kt)("h2",{id:"writing-a-canvas-contract"},"Writing a Canvas contract"),(0,r.kt)("p",null,"On Canvas, every application is uniquely defined by an offchain contract, a file like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export const models = {\n  posts: {\n    id: "string",\n    content: "string",\n    from_id: "string",\n    updated_at: "datetime",\n    indexes: ["updated_at"],\n  }\n};\n\nexport const routes = {\n  "/posts": ({ offset = 0 }, { db }) =>\n    db.queryRaw("SELECT * FROM posts ORDER BY posts.updated_at DESC LIMIT 50 OFFSET :offset", { offset })\n}\n\nexport const actions = {\n  createPost({ content }, { db, hash, from, timestamp }) {\n    db.posts.set(hash, { content, from_id: from });\n  }\n};`\n')),(0,r.kt)("p",null,"Let\u2019s take a look at each export:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Models")," are database tables, like a schema for a database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Routes")," are views, that take data from database tables, and display them to users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Actions")," are ways the user can interact with the app. Each action is a JavaScript function that writes to the database by calling ",(0,r.kt)("inlineCode",{parentName:"li"},"this.db.[table].set()"),".")),(0,r.kt)("p",null,"In our example, when a user creates a new post, we call ",(0,r.kt)("inlineCode",{parentName:"p"},"this.db.posts.set()")," to save it to the database. It will immediately be visible through the two routes we\u2019ve defined above."),(0,r.kt)("h3",{id:"running-the-contract"},"Running the contract"),(0,r.kt)("p",null,"Now, let's try running this application. First, install the Canvas command-line package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install -g @canvas-js/cli\n")),(0,r.kt)("p",null,"Copy the code above into a file called spec.canvas.js, or run ",(0,r.kt)("inlineCode",{parentName:"p"},"canvas init spec.canvas.js")," to automatically generate it. Then, start a node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"canvas run spec.canvas.js --unchecked\n\u2726 Using development mode. Actions will be signed with the spec's filename, not IPFS hash.\n\u2726 Using in-memory model database. Data will not be saved between runs.\n\u2726 To persist data, install the spec with:\n  canvas install spec.canvas.js\n\nServing file:///spec.canvas.js on port 8000:\n\u2514 GET http://localhost:8000/\n\u2514 GET http://localhost:8000/posts\n\u2514 POST /actions\n\u2514 POST /sessions\n")),(0,r.kt)("p",null,"Why the ",(0,r.kt)("inlineCode",{parentName:"p"},"--unchecked")," flag? For applications that use on-chain identity, messages are signed with a block hash, which allows actions to read from the state of the blockchain at the moment the user signed them. However, this is optional, and checking for blocks requires access to a synchronized blockchain node (like Infura)."),(0,r.kt)("p",null,"To persist data and start network sync, we would run this application by its IPFS hash. An IPFS hash represents the exact fingerprint of the application code, including any comments and whitespace."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"% canvas install spec.canvas.js\n[canvas-cli] Creating app directory at /home/.canvas/QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1\n[canvas-cli] Creating /home/.canvas/QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1/spec.canvas.js\n[canvas-cli] Run the app with canvas run QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1\n\n% canvas run QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1 --unchecked\nServing ipfs://QmQSKDMqFxYyGW3RN4FLsFiheqnwKvb2yGofjkAjRhCCx1 on port 8000:\n\u2514 GET http://localhost:8000/\n\u2514 GET http://localhost:8000/posts\n\u2514 POST /actions\n\u2514 POST /sessions\n")),(0,r.kt)("p",null,"We're live! Here is a summary of what just happened:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We set up a model database for persisting data. Since this is the first time running the application, we also initialized a set of database tables for it from scratch."),(0,r.kt)("li",{parentName:"ol"},"We set up a sandboxed JavaScript VM, for executing each action."),(0,r.kt)("li",{parentName:"ol"},"We launched a REST API for accepting new actions, and accessing the application's routes."),(0,r.kt)("li",{parentName:"ol"},"The application will make itself discoverable via libp2p, so anyone else running the same application can discover it. (Wait a few seconds and you can see peer discovery messages being broadcasted.)")),(0,r.kt)("p",null,"Next, we're going to create a frontend that can read from this contract."))}u.isMDXComponent=!0}}]);