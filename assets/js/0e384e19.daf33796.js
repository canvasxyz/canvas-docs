"use strict";(self.webpackChunkcanvas_docs=self.webpackChunkcanvas_docs||[]).push([[671],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),h=r,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||o;return t?n.createElement(u,i(i({ref:a},l),{},{components:t})):n.createElement(u,i({ref:a},l))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9881:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:1,slug:"/"},i="Canvas",s={unversionedId:"intro",id:"intro",title:"Canvas",description:"A next-generation P2P VM and edge database",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"Roadmap and changes",permalink:"/docs/roadmap"}},c={},p=[{value:"A next-generation P2P VM and edge database",id:"a-next-generation-p2p-vm-and-edge-database",level:3},{value:"Using Canvas",id:"using-canvas",level:2},{value:"Demo",id:"demo",level:2},{value:"Building a Canvas App",id:"building-a-canvas-app",level:2}],l={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"canvas"},"Canvas"),(0,r.kt)("h3",{id:"a-next-generation-p2p-vm-and-edge-database"},"A next-generation P2P VM and edge database"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-brightgreen.svg",alt:"license MIT"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@canvas-js/core"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm",alt:"npm"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/packages/core"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github",alt:"npm"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/actions/workflows/ci.yml"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg",alt:"tests"}))),(0,r.kt)("p",null,"Canvas is a framework that makes it easy to build offchain Web3\napplications, where user interactions are signed, replicated using\n",(0,r.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"libp2p"),", and combined in a ",(0,r.kt)("a",{parentName:"p",href:"./docs/api"},"P2P VM"),"."),(0,r.kt)("p",null,"It can be used as a Web3 database, a runtime for synchronizing signed\ndata, or as a building block for more complex protocols."),(0,r.kt)("p",null,"Compared to libp2p, Canvas provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"persistence"),(0,r.kt)("li",{parentName:"ul"},"efficient sync for large batches of actions"),(0,r.kt)("li",{parentName:"ul"},"ability to ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#contracts"},"read from chains")," and use custom functions to validate actions"),(0,r.kt)("li",{parentName:"ul"},"built-in support for ",(0,r.kt)("a",{parentName:"li",href:"./docs/formats#chain-implementations"},"multiple chains"),", ",(0,r.kt)("a",{parentName:"li",href:"./docs/custom"},"custom data formats"),", and ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#sources"},"upgradeability")),(0,r.kt)("li",{parentName:"ul"},"a database-like interface: ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#models"},"SQLite views"),", ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#routes"},"API routing"),", ",(0,r.kt)("a",{parentName:"li",href:"./docs/canvas/packages/hooks"},"React hooks"),", and ",(0,r.kt)("a",{parentName:"li",href:"./docs/tutorial/canvas-hub"},"hosting"))),(0,r.kt)("p",null,"By default, Canvas does not enforce finality, which means nodes\naccept actions as soon as they are validated."),(0,r.kt)("p",null,"For Web3 developers, Canvas extends the chain, with a fast,\nupgradeable offchain layer that supports computations over on-chain\ndata."),(0,r.kt)("h2",{id:"using-canvas"},"Using Canvas"),(0,r.kt)("p",null,"Each application is a unique file or\n",(0,r.kt)("a",{parentName:"p",href:"./docs/tutorial/writing-a-canvas-contract"},"contract"),", identified by its\nIPFS hash, that defines ",(0,r.kt)("strong",{parentName:"p"},"models"),", ",(0,r.kt)("strong",{parentName:"p"},"routes"),", and ",(0,r.kt)("strong",{parentName:"p"},"actions"),"."),(0,r.kt)("p",null,"Actions are signed messages that match a verifiable format, as\ndefined in the contract. Their effects are processed by the P2P VM,\nwritten to models, and exposed through the API."),(0,r.kt)("p",null,"Start an application with ",(0,r.kt)("inlineCode",{parentName:"p"},"canvas run <contract.js>")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"canvas run <multihash>"),", or manually initializing our ",(0,r.kt)("a",{parentName:"p",href:"./docs/canvas/packages/core"},"NPM\npackage"),". This launches an API\nfor the application and starts sync with existing nodes on the\nnetwork."),(0,r.kt)("p",null,"From the frontend, users can login to the app with a wallet or public key, by\nsigning a session key stored in the browser. We provide ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@canvas-js/hooks"},"React\nhooks"),"\nand template apps for\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-next"},"Next.js"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack"},"Webpack"),"\nto help with this."),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"These demo applications are deployed to separate Fly.io regions, and\nsync with each other:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat.fly.dev/index.html"},"canvas-chat.fly.dev")," built with Webpack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat-2.fly.dev"},"canvas-chat-2.fly.dev")," built with Next.js"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat-3.fly.dev"},"canvas-chat-3.fly.dev")," which imports data from the other examples into a new app"),(0,r.kt)("li",{parentName:"ul"},"You can also run the app locally by downloading the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack"},"webpack app"),"\nor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-next"},"next app"),"\nand running ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start"),". Your first sync should complete within <60 seconds.")),(0,r.kt)("h2",{id:"building-a-canvas-app"},"Building a Canvas App"),(0,r.kt)("p",null,"To get started, proceed to the tutorial to ",(0,r.kt)("a",{parentName:"p",href:"./docs/tutorial/writing-a-canvas-contract"},"build your first Canvas\napp"),", or ",(0,r.kt)("a",{parentName:"p",href:"./docs/architecture"},"read more about\nthe tech"),". You can also look at the\n",(0,r.kt)("a",{parentName:"p",href:"./docs/api"},"contract language reference")," to see our APIs."))}d.isMDXComponent=!0}}]);