"use strict";(self.webpackChunkcanvas_docs=self.webpackChunkcanvas_docs||[]).push([[671],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return t?n.createElement(h,i(i({ref:a},l),{},{components:t})):n.createElement(h,i({ref:a},l))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9881:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const s={sidebar_position:1,slug:"/"},i="Canvas",o={unversionedId:"intro",id:"intro",title:"Canvas",description:"Fast and scalable decentralized applications using a P2P VM",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"Roadmap",permalink:"/docs/roadmap"}},c={},p=[{value:"Fast and scalable decentralized applications using a P2P VM",id:"fast-and-scalable-decentralized-applications-using-a-p2p-vm",level:3},{value:"Using Canvas",id:"using-canvas",level:2},{value:"Demo",id:"demo",level:2},{value:"Building a Canvas App",id:"building-a-canvas-app",level:2}],l={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"canvas"},"Canvas"),(0,r.kt)("h3",{id:"fast-and-scalable-decentralized-applications-using-a-p2p-vm"},"Fast and scalable decentralized applications using a P2P VM"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-brightgreen.svg",alt:"license MIT"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@canvas-js/core"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm",alt:"npm"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/packages/core"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/last-commit/canvasxyz/canvas?color=33cd56&logo=github",alt:"npm"}))," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/actions/workflows/ci.yml"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg",alt:"tests"}))),(0,r.kt)("p",null,"Canvas is a framework for peer-to-peer decentralized applications,\nwhere user interactions are signed messages replicated using\n",(0,r.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"libp2p")," and merged into a consistent state\nusing CRDTs."),(0,r.kt)("p",null,"Compared to using p2p networking libraries directly, it provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"persistence"),(0,r.kt)("li",{parentName:"ul"},"efficient sync"),(0,r.kt)("li",{parentName:"ul"},"ability to ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#contracts"},"read from chains")),(0,r.kt)("li",{parentName:"ul"},"support for ",(0,r.kt)("a",{parentName:"li",href:"./docs/formats#signing"},"multiple chains"),", ",(0,r.kt)("a",{parentName:"li",href:"./docs/custom"},"custom data formats"),", and ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#sources"},"upgradeable apps")),(0,r.kt)("li",{parentName:"ul"},"a full edge framework, including a ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#models"},"SQL database"),", ",(0,r.kt)("a",{parentName:"li",href:"./docs/api#routes"},"API router"),", ",(0,r.kt)("a",{parentName:"li",href:"./docs/canvas/packages/hooks"},"React hooks"),", and a ",(0,r.kt)("a",{parentName:"li",href:"./docs/tutorial/canvas-hub"},"hosted peer service"))),(0,r.kt)("p",null,"Canvas does not enforce global consensus, which makes it fast, as nodes\ncan finalize valid actions instantly."),(0,r.kt)("p",null,"For developers building blockchain-based applications, Canvas\ncomplements the chain, providing a fast, upgradeable offchain layer\nthat can be used to relay persistent data without costs."),(0,r.kt)("h2",{id:"using-canvas"},"Using Canvas"),(0,r.kt)("p",null,"Each application is a unique file or\n",(0,r.kt)("a",{parentName:"p",href:"./docs/tutorial/writing-a-canvas-contract"},"contract"),", identified by its\nIPFS hash, that defines ",(0,r.kt)("strong",{parentName:"p"},"models"),", ",(0,r.kt)("strong",{parentName:"p"},"routes"),", and ",(0,r.kt)("strong",{parentName:"p"},"actions"),"."),(0,r.kt)("p",null,"Actions are signed messages that match a verifiable format, as\ndefined in the contract. Their effects are processed by the P2P VM,\nwritten to models, and exposed through the API."),(0,r.kt)("p",null,"Anyone can run an application with ",(0,r.kt)("inlineCode",{parentName:"p"},"canvas run <contract.js>")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"canvas run <multihash>"),", or using our ",(0,r.kt)("a",{parentName:"p",href:"./docs/canvas/packages/core"},"NPM\npackage")," manually. This launches an API\nfor the application and starts sync with existing nodes on the\nnetwork."),(0,r.kt)("p",null,"From the frontend, users can login to the app with a wallet or public key, by\nsigning a session key stored in the browser. We provide ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@canvas-js/hooks"},"React\nhooks"),"\nand template apps for\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-next"},"Next.js"),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack"},"Webpack"),"\nto help with this."),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"These demo applications are deployed to separate Fly.io regions, and\nsync with each other:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat.fly.dev/index.html"},"canvas-chat.fly.dev")," built with Webpack"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat-2.fly.dev"},"canvas-chat-2.fly.dev")," built with Next.js"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://canvas-chat-3.fly.dev"},"canvas-chat-3.fly.dev")," which imports data from the other examples into a new app"),(0,r.kt)("li",{parentName:"ul"},"You can also run the app locally by downloading the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack"},"webpack app"),"\nor ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-next"},"next app"),"\nand running ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run start"),". Your first sync should complete within <60 seconds.")),(0,r.kt)("h2",{id:"building-a-canvas-app"},"Building a Canvas App"),(0,r.kt)("p",null,"To get started, proceed to the tutorial to ",(0,r.kt)("a",{parentName:"p",href:"./docs/tutorial/writing-a-canvas-contract"},"build your first Canvas\napp"),", or ",(0,r.kt)("a",{parentName:"p",href:"./docs/architecture"},"read more about\nthe tech"),". You can also look at the\n",(0,r.kt)("a",{parentName:"p",href:"./docs/api"},"contract language reference")," to see our APIs."))}d.isMDXComponent=!0}}]);