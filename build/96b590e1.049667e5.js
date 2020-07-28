/*! For license information please see 96b590e1.049667e5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),o=(n(0),n(206)),c=n(215),i={title:"Basic Concepts",sidebar_label:"hidden",description:"The fundamental Muta concepts. A great place to start learning about Muta."},s={id:"about/concepts",title:"Basic Concepts",description:"The fundamental Muta concepts. A great place to start learning about Muta.",source:"@site/docs/about/concepts.md",permalink:"/new-docs/docs/about/concepts",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/about/concepts.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"What is Muta?",permalink:"/new-docs/docs/about/what-is-muta"},next:{title:"Getting Started",permalink:"/new-docs/docs/setup/getting-started"}},u=[{value:"Basics",id:"basics",children:[{value:"Blockchain Framework",id:"blockchain-framework",children:[]},{value:"Account",id:"account",children:[]},{value:"Transaction",id:"transaction",children:[]},{value:"Block",id:"block",children:[]},{value:"Node",id:"node",children:[]},{value:"Asset",id:"asset",children:[]},{value:"Service",id:"service",children:[]}]},{value:"Advanced",id:"advanced",children:[{value:"Multisignature",id:"multisignature",children:[]}]}],l={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It's worth getting familiar with the basic concepts that comprise Muta as they\nare used throughout the documentation. This knowledge will be helpful as you\nproceed and is also cool to brag about amongst friends."),Object(o.b)("h2",{id:"basics"},"Basics"),Object(o.b)("h3",{id:"blockchain-framework"},"Blockchain Framework"),Object(o.b)("p",null,"@yejiayu"),Object(o.b)("p",null,"\u4ec0\u4e48\u662f\u533a\u5757\u94fe\u6846\u67b6\uff1f\n\u4e3a\u4ec0\u4e48\u6211\u4eec\u8981\u505a\u8981\u505a\u533a\u5757\u94fe\u6846\u67b6Muta\uff1f"),Object(o.b)("h3",{id:"account"},"Account"),Object(o.b)("p",null,"An account represents a entity that is able to perform specified set of actions. It can be used to identify individual users and each user can have as many accounts as they would like. "),Object(o.b)("p",null,"In Muta, an account designates a pair of public key PubKey and private key PrivKey. The PubKey can be derived to generate various Addresses, which are used to identify users in the network. The PrivKey is used to generate digital signatures to prove that an Address associated with the PrivKey approved of a given transaction."),Object(o.b)(c.a,{to:"/docs/advanced/crypto/",mdxType:"Jump"},"Learn about the cryptography used when creating a Account"),Object(o.b)("h3",{id:"transaction"},"Transaction"),Object(o.b)("p",null,"Transaction is ordered set of commands that makes the state change from the current state to the next state. It can be a funds transfer, a message call or a contract deployment. Transactions are bundled together into a block as a series to be executed as each is defined in the Framework."),Object(o.b)(c.a,{to:"/docs/advanced/key-concept/tx",mdxType:"Jump"},"Learn more about Transaction in Muta"),Object(o.b)("h3",{id:"block"},"Block"),Object(o.b)("p",null,"A block in Muta is composed of a header and an array of transactions. Each block contains a hash of the previous block in header, all the way to the first block in the chain. This is how all the data is protected against modifications. "),Object(o.b)("p",null,"Blocks are proposed and produced during consensus by Validators, and then excuted in the Framework. "),Object(o.b)(c.a,{to:"/docs/advanced/block-structure/",mdxType:"Jump"},"Learn more about Blocks"),Object(o.b)("h3",{id:"node"},"Node"),Object(o.b)("p",null,"The Ethereum network is made up of many nodes, each of which runs Muta client software. They all have a copy of the entire blockchain data and communicate over the peer-to-peer network with other nodes. "),Object(o.b)("p",null,"There are two types of nodes: Validator and sync node. They all do the full synchronization of the blockchain, from the genesis block to the latest best block. The difference between them is that validator participats in consensus while sync node only synchronizes data from listening validator nodes\u3002"),Object(o.b)("h3",{id:"asset"},"Asset"),Object(o.b)("p",null,"@Eason"),Object(o.b)("h3",{id:"service"},"Service"),Object(o.b)("p",null,"@yejiayu"),Object(o.b)("h2",{id:"advanced"},"Advanced"),Object(o.b)("h3",{id:"multisignature"},"Multisignature"),Object(o.b)("p",null,"@Eason"))}d.isMDXComponent=!0},205:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=a,h=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return n?r.a.createElement(h,i({ref:t},u,{components:n})):r.a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(19),c=n(227),i=n(13),s=n.n(i),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var{isNavLink:t}=e,n=u(e,["isNavLink"]);const{to:i,href:l}=n,d=i||l,p=Object(c.a)(d),b=Object(a.useRef)(!1),h=t?o.c:o.b,f=s.a.canUseIntersectionObserver;let m;return Object(a.useEffect)(()=>(!f&&p&&window.docusaurus.prefetch(d),()=>{f&&m&&m.disconnect()}),[d,f,p]),d&&p&&!d.startsWith("#")?r.a.createElement(h,Object.assign({},n,{onMouseEnter:()=>{b.current||(window.docusaurus.preload(d),b.current=!0)},innerRef:e=>{var t,n;f&&e&&p&&(t=e,n=()=>{window.docusaurus.prefetch(d)},m=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),n())})}),m.observe(t))},to:d})):r.a.createElement("a",Object.assign({},n,{href:d}))}},215:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(207),c=n(205),i=n.n(c);n(97);t.a=function({children:e,className:t,badge:n,leftIcon:a,rightIcon:c,size:s,target:u,to:l}){let d=i()("jump-to","jump-to--"+s,t),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},a&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+a})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${c||"chevron-right"} arrow`}))));return u?r.a.createElement("a",{href:l,target:u,className:d},p):r.a.createElement(o.a,{to:l,className:d},p)}},227:function(e,t,n){"use strict";function a(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return a}))}}]);