"use strict";(self.webpackChunkcanvas_docs=self.webpackChunkcanvas_docs||[]).push([[154],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(t),u=i,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||s;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<s;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const s={sidebar_position:4},r="Basic Data Formats",o={unversionedId:"formats",id:"formats",title:"Basic Data Formats",description:"At its core, a Canvas application deals with two types of signed messages: sessions and actions.",source:"@site/docs/formats.md",sourceDirName:".",slug:"/formats",permalink:"/docs/formats",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Contract Language",permalink:"/docs/api"},next:{title:"Custom Data Formats",permalink:"/docs/custom"}},l={},d=[{value:"Sessions",id:"sessions",level:2},{value:"Actions",id:"actions",level:2},{value:"Chain implementations",id:"chain-implementations",level:2},{value:"Ethereum",id:"ethereum",level:3},{value:"Session signatures",id:"session-signatures",level:4},{value:"Action signatues",id:"action-signatues",level:4},{value:"Cosmos",id:"cosmos",level:3},{value:"Solana",id:"solana",level:3},{value:"NEAR",id:"near",level:3},{value:"Polkadot",id:"polkadot",level:3},{value:"Message IDs",id:"message-ids",level:2},{value:"Note on canonical JSON serialization",id:"note-on-canonical-json-serialization",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basic-data-formats"},"Basic Data Formats"),(0,i.kt)("p",null,"At its core, a Canvas application deals with two types of signed messages: ",(0,i.kt)("em",{parentName:"p"},"sessions")," and ",(0,i.kt)("em",{parentName:"p"},"actions"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/canvas/packages/interfaces#sessions"},(0,i.kt)("strong",{parentName:"a"},"Sessions")),' are used to "log in" to applications, allowing the user to delegate the authority to sign actions to a temporary session key.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/canvas/packages/interfaces#actions"},(0,i.kt)("strong",{parentName:"a"},"Actions"))," invoke functions defined in the contract. Actions are evaluated inside a VM and have external effects, like setting or deleting records in the model database.")),(0,i.kt)("p",null,"Both types of messages have a payload and a signature. Canvas supports signing messages using identities from a variety of different chains, including Ethereum, Solana, Polkadot, and Cosmos chains. Canvas uses the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md"},"CAIP-2")," standard for chain identifiers."),(0,i.kt)("p",null,"Three basic values are required in both payload types:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"app"),": the ",(0,i.kt)("inlineCode",{parentName:"li"},"ipfs://...")," URI of the app contract"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"chain"),": the CAIP-2 identifier of a chain supported by the app contract"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),": the on-chain address of the user signing the message")),(0,i.kt)("h2",{id:"sessions"},"Sessions"),(0,i.kt)("p",null,"A user can sign a ",(0,i.kt)("inlineCode",{parentName:"p"},"Session")," to authorize a delegate key to sign actions on their behalf."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type Session = {\n  type: "session"\n  signature: string\n  payload: {\n    app: string\n    chain: string\n    from: string\n\n    sessionAddress: string  // address of the delegate key\n    sessionDuration: number // duration in milliseconds\n    sessionIssued: number   // issue time in milliseconds since 1 January 1970 00:00:00 UTC\n\n    // Blockhash of `chain` at issue time; required by peers except in --unchecked mode.\n    // Used to validate `sessionIssued`.\n    block: string | null\n  }\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"signature"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"blockhash")," formats vary by chain."),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"Action")," is can either be signed directly by a user or by a delegate key previously registered in a session."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type Action = {\n  type: "action"\n  signature: string\n\n    // null if signed directly; otherwise the `sessionAddress` of a session\n  session: string | null\n\n  payload: {\n    app: string\n    chain: string\n    from: string\n\n    // Name and arguments of the contract function to invoke.\n    // Action arguments must be JSON primitives\n    call: string\n    callArgs: Record<string, null | boolean | number | string>\n\n    // Blockhash of `chain` at `timestamp`; required by peers except in --unchecked mode.\n    // Used to validate `timestamp` and call external on-chain contracts.\n    block: string | null\n\n    // Milliseconds since 1 January 1970 00:00:00 UTC\n    timestamp: number\n  }\n}\n')),(0,i.kt)("p",null,"Again, the ",(0,i.kt)("inlineCode",{parentName:"p"},"signature"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"blockhash")," formats vary by chain."),(0,i.kt)("h2",{id:"chain-implementations"},"Chain implementations"),(0,i.kt)("p",null,"This section documents the action and session signature formats for the different chain implementations. But you don't have to implement these yourself! We already did that. Use the methods of the ",(0,i.kt)("a",{parentName:"p",href:"/docs/canvas/packages/interfaces#chain-implementations"},"chain implementation interface")," if you need to sign and verify messages manually, or the ",(0,i.kt)("a",{parentName:"p",href:"/docs/canvas/packages/hooks"},"React hooks")," for totally automated session management and action generation."),(0,i.kt)("h3",{id:"ethereum"},"Ethereum"),(0,i.kt)("p",null,"Ethereum-based chains (CAIP namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"eip155"),") use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.login.xyz/"},"SIWE")," specification for session signatures and ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-712"},"EIP-712")," for signing structured action payloads."),(0,i.kt)("h4",{id:"session-signatures"},"Session signatures"),(0,i.kt)("p",null,"The session signature format for Ethereum-based chains is ",(0,i.kt)("inlineCode",{parentName:"p"},"${domain}/${nonce}/${siweSignature}"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"siweSignature")," is the signature of a SIWE message deterministically derived from the session ",(0,i.kt)("inlineCode",{parentName:"p"},"payload"),", along with the ",(0,i.kt)("inlineCode",{parentName:"p"},"domain")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," values."),(0,i.kt)("p",null,"The SIWE message template is populated with the following values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"SIWE field"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"domain"),(0,i.kt)("td",{parentName:"tr",align:null},"DNS host name the user is logging in from"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"domain"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"the user's Ethereum address"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"payload.from"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uri"),(0,i.kt)("td",{parentName:"tr",align:null},"the subject resource URI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ethereum:${payload.sessionAddress}"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"issuedAt"),(0,i.kt)("td",{parentName:"tr",align:null},"current time in ISO 8601"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"new Date(payload.sessionIssued).toISOString()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"expirationTime"),(0,i.kt)("td",{parentName:"tr",align:null},"session expiration time in ISO 8601"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"new Date(payload.sessionIssued).toISOString()"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"version"),(0,i.kt)("td",{parentName:"tr",align:null},"SIWE message version number"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chainId"),(0,i.kt)("td",{parentName:"tr",align:null},"EIP-155 Chain ID"),(0,i.kt)("td",{parentName:"tr",align:null},"chainID of ",(0,i.kt)("inlineCode",{parentName:"td"},"payload.chain")," (component after the ",(0,i.kt)("inlineCode",{parentName:"td"},"eip155:")," namespace)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"nonce"),(0,i.kt)("td",{parentName:"tr",align:null},"randomized token"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nonce"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resources"),(0,i.kt)("td",{parentName:"tr",align:null},"list of additional URI references"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[payload.app]"))))),(0,i.kt)("p",null,"To sign a session payload for a domain ",(0,i.kt)("inlineCode",{parentName:"p"},"myapp.com"),", generate a nonce ",(0,i.kt)("inlineCode",{parentName:"p"},"123123123123"),", construct the SIWE message, and prompt the user to sign it. Browser wallets like MetaMask will parse the SIWE template and verify that the request is coming from the declared domain. When the user approves the signature request and you get a SIWE signature ",(0,i.kt)("inlineCode",{parentName:"p"},"0xABCABCABCABC...")," back, set the session signature to ",(0,i.kt)("inlineCode",{parentName:"p"},"myapp.com/123123123123/0xABCABCABCABC..."),". This is so that other Canvas peers will be able to verify the signature by reconstructing an identical SIWE message using the additional ",(0,i.kt)("inlineCode",{parentName:"p"},"domain")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," values."),(0,i.kt)("h4",{id:"action-signatues"},"Action signatues"),(0,i.kt)("p",null,"The action signature format for Ethereum-based chains uses the EIP-712 standard for signed typed data."),(0,i.kt)("p",null,"The EIP-712 data fields for an action payload are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const actionDataFields = {\n    Message: [\n        { name: "app", type: "string" },\n        { name: "block", type: "string" },\n        { name: "call", type: "string" },\n        { name: "callArgs", type: "string" },\n        { name: "chain", type: "string" },\n        { name: "from", type: "string" },\n        { name: "timestamp", type: "uint64" },\n    ],\n}\n')),(0,i.kt)("p",null,"... where the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"callArgs")," a canonical JSON serialization of the ",(0,i.kt)("inlineCode",{parentName:"p"},"payload.callArgs")," object: no whitespace, and entries sorted lexicographically by key. The value of ",(0,i.kt)("inlineCode",{parentName:"p"},"block")," is the empty string if ",(0,i.kt)("inlineCode",{parentName:"p"},"payload.block === null"),". The rest of the fields are copied from the payload as-is."),(0,i.kt)("p",null,"The message values are then signed using ",(0,i.kt)("inlineCode",{parentName:"p"},"signTypedData_v4"),"."),(0,i.kt)("h3",{id:"cosmos"},"Cosmos"),(0,i.kt)("p",null,"Both action and session payloads are encoded using ",(0,i.kt)("a",{parentName:"p",href:"#note-on-canonical-json-serialization"},"canonical JSON serialization"),"."),(0,i.kt)("p",null,"Then, action payloads are signed using an\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/architecture/adr-036-arbitrary-signature"},"ADR-036"),"\nsignature."),(0,i.kt)("p",null,"Session payloads on standard chains are signed using an ADR-036\nsignature. Session payloads on EVM-based Cosmos chains like Evmos and\nInjective are signed using ",(0,i.kt)("inlineCode",{parentName:"p"},"eth.personalSign"),", and on Terra chains,\nthey are signed using ",(0,i.kt)("inlineCode",{parentName:"p"},"signBytes"),"."),(0,i.kt)("h3",{id:"solana"},"Solana"),(0,i.kt)("p",null,"Both action and session payloads are encoded using canonical JSON serialization, and then signed using ",(0,i.kt)("inlineCode",{parentName:"p"},"nacl.sign.detached")," using the Solana private key."),(0,i.kt)("h3",{id:"near"},"NEAR"),(0,i.kt)("p",null,"Both action and session payloads are encoded using canonical JSON serialization, and then signed using ",(0,i.kt)("inlineCode",{parentName:"p"},"nacl.sign.detached")," using the NEAR private key."),(0,i.kt)("h3",{id:"polkadot"},"Polkadot"),(0,i.kt)("p",null,"Both action and session payloads are encoded using canonical JSON serialization, and then signed using ",(0,i.kt)("inlineCode",{parentName:"p"},"signer.signRaw")," using the Polkadot wallet."),(0,i.kt)("h2",{id:"message-ids"},"Message IDs"),(0,i.kt)("p",null,"Messages are uniquely identified by the sha256 hash of their canonical JSON serialization."),(0,i.kt)("h2",{id:"note-on-canonical-json-serialization"},"Note on canonical JSON serialization"),(0,i.kt)("p",null,"The implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," in browsers serializes object entries in their insertion order, and so is not deterministic. The encodings defined here all require object entries to be sorted lexicographically by key."),(0,i.kt)("p",null,"We recommend using a package like ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/safe-stable-stringify"},"safe-stable-stringify")," configured with ",(0,i.kt)("inlineCode",{parentName:"p"},"{ strict: true, deterministic: true }")," to guarantee this."))}c.isMDXComponent=!0}}]);