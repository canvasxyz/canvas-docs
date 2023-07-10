"use strict";(self.webpackChunkcanvas_docs=self.webpackChunkcanvas_docs||[]).push([[671],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),l=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?n.createElement(h,s(s({ref:a},c),{},{components:t})):n.createElement(h,s({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9881:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1,slug:"/"},s="Canvas",o={unversionedId:"intro",id:"intro",title:"Canvas",description:"A universal peer-to-peer database",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"Roadmap and changelog",permalink:"/docs/roadmap"}},p={},l=[{value:"A universal peer-to-peer database",id:"a-universal-peer-to-peer-database",level:3},{value:"Using Canvas",id:"using-canvas",level:2},{value:"Demo",id:"demo",level:2},{value:"Building a Canvas App",id:"building-a-canvas-app",level:2}],c={toc:l};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"canvas"},"Canvas"),(0,r.kt)("h3",{id:"a-universal-peer-to-peer-database"},"A universal peer-to-peer database"),(0,r.kt)("admonition",{title:"Upcoming Release",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Canvas 1.0 is in the final stages of implementation, with significant improvements landing soon.\nPlease see our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/HZQuC9QEqN"},"Discord")," for more details!")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-brightgreen.svg",alt:"license MIT"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@canvas-js/core"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm",alt:"npm"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/packages/core"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github",alt:"npm"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/actions/workflows/ci.yml"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg",alt:"tests"}))),(0,r.kt)("p",null,"Canvas is a ",(0,r.kt)("strong",{parentName:"p"},"serverless, functional, peer-to-peer database")," based on\n",(0,r.kt)("a",{parentName:"p",href:"https://joelgustafson.com/posts/2023-05-04/merklizing-the-key-value-store-for-fun-and-profit"},"Merkle\nsync"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://libp2p.io"},"libp2p"),"."),(0,r.kt)("p",null,"Compared to other peer-to-peer libraries or databases, Canvas is\nhighly customizable, extensible, and resembles a traditional\napplication framework. It can be configured to support basically any\ntype of decentralized identity or signature logic."),(0,r.kt)("p",null,"Unlike using libp2p directly, Canvas provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"local persistent tables via ",(0,r.kt)("a",{parentName:"li",href:"https://www.sqlite.org/index.html"},"SQLite")),(0,r.kt)("li",{parentName:"ul"},"efficient ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/okra#readme"},"Merkle sync")),(0,r.kt)("li",{parentName:"ul"},"support for ",(0,r.kt)("a",{parentName:"li",href:"./docs/custom"},"custom cryptographic formats")," and ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#sources"},"atomic upgrades of applications")),(0,r.kt)("li",{parentName:"ul"},"ability to ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#contracts"},"read from blockchains")," and use block timestamps for conflict resolution"),(0,r.kt)("li",{parentName:"ul"},"a full set of tooling, including ",(0,r.kt)("a",{parentName:"li",href:"./docs/canvas/packages/hooks"},"React hooks")," and a ",(0,r.kt)("a",{parentName:"li",href:"./docs/tutorial/canvas-hub"},"hosted service"))),(0,r.kt)("p",null,"Compared to blockchains and on-chain databases, Canvas provides higher\nthroughput, no confirmation delays, and does not require a token or\ntransaction fees. Each node has its own view of the network, which\nmakes it best for traditional database-oriented applications."),(0,r.kt)("h2",{id:"using-canvas"},"Using Canvas"),(0,r.kt)("p",null,"Developers usually start by self-hosting their own database, or\nembedding one in an existing application."),(0,r.kt)("p",null,"Each database is defined by a unique ",(0,r.kt)("a",{parentName:"p",href:"./docs/tutorial/writing-a-canvas-contract"},"application\ncontract")," that defines\n",(0,r.kt)("strong",{parentName:"p"},"models"),", ",(0,r.kt)("strong",{parentName:"p"},"views"),", and ",(0,r.kt)("strong",{parentName:"p"},"actions"),", like a model-view-controller\nframework."),(0,r.kt)("p",null,"Models are database tables defined in SQLite. Actions are signed\nmessages (either directly signed or session-signed) that write to\ndatabase tables, and views are API routes that expose data in the\ndatabase."),(0,r.kt)("p",null,"You can write an application contract in a file or inline in your\nfrontend. We recommend writing it in a file, in which case you can run\nthe contract with ",(0,r.kt)("inlineCode",{parentName:"p"},"canvas run <contract.js>")," using our CLI.\nThis launches an API for the application, and syncs it with anyone else\nrunning the application in seconds."),(0,r.kt)("p",null,"From the frontend, users can log into the app by signing a session key in\nthe browser, and further interactions can happen instantly. Finally,\nwe provide ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@canvas-js/hooks"},"React\nhooks")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-next"},"Next.js"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack"},"Webpack"),"\ntemplates to get started quickly!"),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"These demo applications are deployed to separate Fly.io regions, and\nsync via libp2p:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat-p2p.pages.dev"},"canvas-chat-p2p.pages.dev")," (Webpack, client-side p2p)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat.fly.dev/index.html"},"canvas-chat.fly.dev")," (Webpack, server-side p2p)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat-2.fly.dev"},"canvas-chat-2.fly.dev")," (Next.js, server-side p2p)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat-3.fly.dev"},"canvas-chat-3.fly.dev")," which imports data from the other examples into a new app"),(0,r.kt)("li",{parentName:"ul"},"You can also run the app locally by downloading the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack"},"webpack app"),"\nor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-next"},"next app"),"\nand running ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start"),". Your first sync should complete within <60 seconds.")),(0,r.kt)("h2",{id:"building-a-canvas-app"},"Building a Canvas App"),(0,r.kt)("p",null,"To get started, proceed to the tutorial to ",(0,r.kt)("a",{parentName:"p",href:"./docs/tutorial/writing-a-canvas-contract"},"build your first Canvas\napp"),", or ",(0,r.kt)("a",{parentName:"p",href:"./docs/architecture"},"read more about\nthe tech"),". You can also look at the\n",(0,r.kt)("a",{parentName:"p",href:"./docs/api"},"contract language reference")," to see our APIs."))}d.isMDXComponent=!0}}]);