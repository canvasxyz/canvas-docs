"use strict";(self.webpackChunkcanvas_docs=self.webpackChunkcanvas_docs||[]).push([[240],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?t.createElement(f,o(o({ref:n},p),{},{components:a})):t.createElement(f,o({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7945:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(7462),r=(a(7294),a(3905));const i={},o="Canvas",s={unversionedId:"canvas/README",id:"canvas/README",title:"Canvas",description:"tests",source:"@site/docs/canvas/README.md",sourceDirName:"canvas",slug:"/canvas/",permalink:"/docs/canvas/",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Using Canvas",id:"using-canvas",level:2},{value:"Commands",id:"commands",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2}],p={toc:c};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"canvas"},"Canvas"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/actions/workflows/ci.yml"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/canvasxyz/canvas/actions/workflows/ci.yml/badge.svg",alt:"tests"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@canvas-js/core"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/node/v/@canvas-js/core.svg",alt:"node"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@canvas-js/core"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@canvas-js/core?color=33cd56&logo=npm",alt:"npm"}))),(0,r.kt)("p",null,"Canvas is a platform for decentralized applications, where every user\ninteraction is a signed message distributed over a ",(0,r.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"peer-to-peer\nnetwork"),". User actions are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/okra"},"efficiently\nsychronized")," and merged using\n",(0,r.kt)("a",{parentName:"p",href:"https://crdt.tech/"},"collaborative data types"),", making it possible\nto build decentralized applications with near-realtime responsiveness\nand no token transactions."),(0,r.kt)("p",null,"Compared to using libp2p directly, Canvas provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"persistence"),(0,r.kt)("li",{parentName:"ul"},"efficient sync for past actions"),(0,r.kt)("li",{parentName:"ul"},"a concise language for defining applications, and upgrading between different versions"),(0,r.kt)("li",{parentName:"ul"},"a SQL database and customizable view functions"),(0,r.kt)("li",{parentName:"ul"},"a set of hooks for reading from chains"),(0,r.kt)("li",{parentName:"ul"},"support for a wide range of cryptographies/signature formats")),(0,r.kt)("p",null,"Canvas is designed to be maximally interoperable and data-agnostic. We\nexpect to support a wide range of signed data formats, plus the\nability to sync Canvas networks to non-blockchain data sources."),(0,r.kt)("p",null,"For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.canvas.xyz"},"Canvas documentation"),"."),(0,r.kt)("h2",{id:"using-canvas"},"Using Canvas"),(0,r.kt)("p",null,"To install the latest published CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install -g @canvas-js/cli\n")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canvas init [filename]"),": Create a sample application for demonstration purposes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canvas info [filename | CID]"),": Show models, views, and actions for an application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canvas run [filename | CID]"),": Run a Canvas application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canvas export [CID]"),": Export actions from a Canvas application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canvas import [CID]"),": Import actions from a Canvas application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canvas install [filename]"),": Install a local spec file as a Canvas application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"canvas list"),": List all installed Canvas applications.")),(0,r.kt)("p",null,"You can run each command with --help for more detailed documentation."),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"Canvas is currently developed and maintained by a small team. For\nsuggestions or contributions, we recommend first opening an issue or\ndiscussing with an existing contributor before opening a pull request."),(0,r.kt)("p",null,"For information about how to build this repo, see DEVELOPING.md."),(0,r.kt)("h2",{id:"license"},"License"),(0,r.kt)("p",null,"MIT \xa9 2023 Canvas Technologies, Inc."))}m.isMDXComponent=!0}}]);