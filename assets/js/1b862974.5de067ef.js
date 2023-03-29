"use strict";(self.webpackChunkcanvas_docs=self.webpackChunkcanvas_docs||[]).push([[976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,y=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5},l="Deploying to Fly.io & Vercel",i={unversionedId:"tutorial/deploying-to-fly-io",id:"tutorial/deploying-to-fly-io",title:"Deploying to Fly.io & Vercel",description:"This tutorial describes how to set up a Canvas application with a separate frontend and backend. See the Next.js and Webpack examples for setups that serve both from one container.",source:"@site/docs/tutorial/deploying-to-fly-io.md",sourceDirName:"tutorial",slug:"/tutorial/deploying-to-fly-io",permalink:"/docs/tutorial/deploying-to-fly-io",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Reading on-chain data",permalink:"/docs/tutorial/reading-from-chains"},next:{title:"Canvas Hub",permalink:"/docs/tutorial/canvas-hub"}},s={},p=[{value:"Deploying a Canvas contract to Fly.io",id:"deploying-a-canvas-contract-to-flyio",level:2},{value:"Getting started",id:"getting-started",level:3},{value:"Setting up your application",id:"setting-up-your-application",level:3},{value:"Adding a storage volume",id:"adding-a-storage-volume",level:3},{value:"Adding a blockchain RPC",id:"adding-a-blockchain-rpc",level:3},{value:"Deploying",id:"deploying",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Deploying a Canvas frontend to Vercel",id:"deploying-a-canvas-frontend-to-vercel",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-to-flyio--vercel"},"Deploying to Fly.io & Vercel"),(0,o.kt)("p",null,"This tutorial describes how to set up a Canvas application with a separate frontend and backend. See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-next"},"Next.js")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack"},"Webpack")," examples for setups that serve both from one container."),(0,o.kt)("h2",{id:"deploying-a-canvas-contract-to-flyio"},"Deploying a Canvas contract to Fly.io"),(0,o.kt)("p",null,"Fly.io is an application hosting platform which uses micro-VMs running\non a global network, with access to block storage volumes. This lets\nus run Canvas apps that use SQLite databases, just like we do in\ndevelopment. Fly also has a generous ",(0,o.kt)("a",{parentName:"p",href:"https://fly.io/docs/about/pricing/"},"free\ntier"),"!"),(0,o.kt)("h3",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"First make sure you have ",(0,o.kt)("a",{parentName:"p",href:"https://fly.io/docs/getting-started/installing-flyctl/"},"flyctl")," installed, and that you are logged in. Follow the instructions in the link, or on Mac, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install flyctl\nflyctl auth login   # `flyctl auth signup` for new users\n")),(0,o.kt)("h3",{id:"setting-up-your-application"},"Setting up your application"),(0,o.kt)("p",null,"You'll need a few files to deploy a Canvas backend node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/blob/main/examples/chat-webpack/Dockerfile"},"A Dockerfile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/blob/main/examples/chat-webpack/fly.toml"},"A fly.toml")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/blob/main/examples/chat-webpack/spec.canvas.js"},"Your spec"),", which we'll assume is ",(0,o.kt)("inlineCode",{parentName:"li"},"spec.canvas.js"))),(0,o.kt)("p",null,"First, create a new directory, and download the example files from the links above. (If your spec is named something else, edit the Dockerfile accordingly.)"),(0,o.kt)("p",null,"Now, run ",(0,o.kt)("inlineCode",{parentName:"p"},"flyctl launch")," to set up a Fly configuration file for your application."),(0,o.kt)("p",null,"Fly should autodetect your Dockerfile, and prompt you for a name and region. When it asks you if you need a Postgres database, select ",(0,o.kt)("strong",{parentName:"p"},"no"),", and when it asks you to deploy, also select ",(0,o.kt)("strong",{parentName:"p"},"no"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"% flyctl launch\n\nCreating app in /example\nScanning source code\nDetected a Dockerfile\n? App Name (leave blank to use an auto-generated name): canvas-example-chat\nAutomatically selected personal organization: [Your Name]\n? Select region: [Your Region]\nCreated app canvas-example-chat in organization personal\nWrote config file fly.toml\n? Would you like to setup a Postgresql database now? No\n? Would you like to deploy now? No\n")),(0,o.kt)("p",null,"At this point, you should have an autogenerated fly.toml in your directory."),(0,o.kt)("h3",{id:"adding-a-storage-volume"},"Adding a storage volume"),(0,o.kt)("p",null,"To persist data, you'll need to set up a storage volume called ",(0,o.kt)("inlineCode",{parentName:"p"},"canvas_example_chat_data"),", which you can do with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fly volumes create canvas_example_chat_data\n")),(0,o.kt)("h3",{id:"adding-a-blockchain-rpc"},"Adding a blockchain RPC"),(0,o.kt)("p",null,"If your app reads from a smart contract, you'll need to provide an RPC endpoint for the chain you're connecting to. For Ethereum and L2 users, sign up for ",(0,o.kt)("a",{parentName:"p",href:"https://infura.io/"},"Infura"),"'s ",(0,o.kt)("a",{parentName:"p",href:"https://infura.io/pricing"},"free tier"),", create a project, and add it to the configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fly secrets set ETH_CHAIN_ID=1 ETH_CHAIN_RPC=https://mainnet.infura.io/v3/[API_KEY]\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If you skip this step, you should modify the Dockerfile to add ",(0,o.kt)("inlineCode",{parentName:"strong"},"--unchecked")," to the canvas run command.")," Otherwise, your app won't be able to start in production. Replace the CMD line in Dockerfile:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CMD ["canvas", "run", "--unchecked", "./spec.canvas.js", "--datadir", "/data"]\n')),(0,o.kt)("h3",{id:"deploying"},"Deploying"),(0,o.kt)("p",null,"Now, you're ready to push your application!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fly deploy\n")),(0,o.kt)("p",null,"Once the deployment is complete, you should have a running application at a subdomain of .fly.dev. Use ",(0,o.kt)("inlineCode",{parentName:"p"},"fly info")," to see where it's hosted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"% fly info\nApp\n  Name     = fragrant-star-4920\n  Owner    = personal\n  Version  = 0\n  Status   = running\n  Hostname = fragrant-star-4920.fly.dev\n\nServices\nPROTOCOL PORTS\nTCP      80 => 8000 [HTTP]\n         443 => 8000 [TLS, HTTP]\n\nIP Adresses\nTYPE ADDRESS             REGION CREATED AT\nv4   37.16.26.48                1m52s ago\nv6   2a09:8280:1::3:6029        1m51s ago\n")),(0,o.kt)("p",null,"If you go to the new app's hostname (e.g. fragrant-star-4920.fly.dev), you should get an HTTP response that shows the node is running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'{"name":"QmZ3Wsp92rS1c31PJ6g1qVCQKv4jxA51qqg4TaRefBQ2vM"}\n')),(0,o.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you have any problems, here are a few troubleshooting tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try cloning the directory at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack"},"https://github.com/canvasxyz/canvas/tree/main/examples/chat-webpack")," and deploying it, following README.md."),(0,o.kt)("li",{parentName:"ul"},"Try building and running the Dockerfile locally. First, use ",(0,o.kt)("inlineCode",{parentName:"li"},"docker build .")," to run the build process, which will create a container with your spec. Then, try ",(0,o.kt)("inlineCode",{parentName:"li"},"docker run -p8000:8000 [hash]"),", passing it the image ID that was generated by the build stage. This should give you a working server that can be accessed from your browser at ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:8000"},"localhost:8000"),".")),(0,o.kt)("h2",{id:"deploying-a-canvas-frontend-to-vercel"},"Deploying a Canvas frontend to Vercel"),(0,o.kt)("p",null,"Since the frontend we built is a create-react-app application, it should be easy to deploy on the platform of your choice."),(0,o.kt)("p",null,"First, in the <Canvas",">"," element in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/index.js"),", switch out localhost:8000 for the URL of a Canvas node. You can use the URL of your deployment on Fly.io above."),(0,o.kt)("p",null,"Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"vercel")," from the application's root directory to build and deploy to the Vercel network. For production, use ",(0,o.kt)("inlineCode",{parentName:"p"},"vercel --prod")," instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"% npm install -g vercel\n% vercel\n\n? Set up and deploy \u201c~/canvas-demo\u201d? [Y/n] y\n? Which scope do you want to deploy to? My Team\n? Link to existing project? [y/N] n\n? What\u2019s your project\u2019s name? (canvas-demo)\n\ud83d\udd17 Linked to yourname/canvas-demo (created .vercel and added it to .gitignore)\n")))}u.isMDXComponent=!0}}]);