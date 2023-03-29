"use strict";(self.webpackChunkcanvas_docs=self.webpackChunkcanvas_docs||[]).push([[75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i="Roadmap",l={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"* Sync Canvas cores with databases and RPCs/HTTP APIs",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/docs/roadmap",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Architecture",permalink:"/docs/architecture"}},s={},c=[{value:"Changelog",id:"changelog",level:2},{value:"v0.3.x (2023-03-28)",id:"v03x-2023-03-28",level:3},{value:"v0.2.x (2023-03-06)",id:"v02x-2023-03-06",level:3},{value:"v0.1.x (2023-02-17)",id:"v01x-2023-02-17",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"roadmap"},"Roadmap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sync Canvas cores with databases and RPCs/HTTP APIs"),(0,r.kt)("li",{parentName:"ul"},"Full support for custom actions"),(0,r.kt)("li",{parentName:"ul"},"Zero-knowledge proof verification"),(0,r.kt)("li",{parentName:"ul"},"Later",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Adding dependencies to actions"),(0,r.kt)("li",{parentName:"ul"},"Adding relations to models"),(0,r.kt)("li",{parentName:"ul"},"First-class support for user-defined CRDTs")))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"See Github for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/releases"},"full changelog"),"."),(0,r.kt)("h3",{id:"v03x-2023-03-28"},"v0.3.x (2023-03-28)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for running Canvas apps entirely in the browser."),(0,r.kt)("li",{parentName:"ul"},"Improvements to the underlying libp2p networking stack. Time to first sync should now be much faster.")),(0,r.kt)("h3",{id:"v02x-2023-03-06"},"v0.2.x (2023-03-06)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Preliminary support for custom actions."),(0,r.kt)("li",{parentName:"ul"},"Core.applyAction and Core.applySession have been replaced with Core.apply, which can be called with either sessions, actions, or custom actions."),(0,r.kt)("li",{parentName:"ul"},"Upgraded QuickJS to add native BigInt support within contracts."),(0,r.kt)("li",{parentName:"ul"},"The libp2p node has been moved inside the Core class. Each app now runs its own libp2p node, with its own persistent PeerId."),(0,r.kt)("li",{parentName:"ul"},"The RPC protocol no longer depends on communicating the types of messages, and just references them by hash. The libp2p protocol string has been upgraded from /x/canvas/sync/v1/{cid}to /x/canvas/sync/v2/{cid}."),(0,r.kt)("li",{parentName:"ul"},"The canvas daemon, canvas start, and canvas stop CLI commands have been removed."),(0,r.kt)("li",{parentName:"ul"},"The @canvas-js/next package has been deprecated.")),(0,r.kt)("h3",{id:"v01x-2023-02-17"},"v0.1.x (2023-02-17)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CLI: Deploy single-page apps using the canvas run command to serve an API. Use the --static flag to serve an included frontend."),(0,r.kt)("li",{parentName:"ul"},"React Hooks: We include React hooks for interacting with Canvas applications from the frontend. The hooks currently support Ethereum-compatible chains only, and can optionally be used with wagmi, ConnectKit, and/or RainbowKit."),(0,r.kt)("li",{parentName:"ul"},"Read from on-chain using contract hooks."),(0,r.kt)("li",{parentName:"ul"},"Contracts can be upgraded by using sources."),(0,r.kt)("li",{parentName:"ul"},"We include example Canvas applications in Webpack and Next.js, which deploy to Fly.io.")))}u.isMDXComponent=!0}}]);