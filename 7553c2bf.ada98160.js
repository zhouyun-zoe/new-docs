(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),i=(n(0),n(235)),c={title:"Architecture"},o={id:"docs_zh/advanced/arch",title:"Architecture",description:"## System Architecture",source:"@site/docs/docs_zh/advanced/arch.md",permalink:"/new-docs/docs/docs_zh/advanced/arch",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/docs_zh/advanced/arch.md",sidebar:"docs_zh",previous:{title:"Tutorial\uff1a\u4f7f\u7528 Muta \u6846\u67b6\u4ece\u96f6\u5f00\u53d1\u4e00\u6761 Dex \u4e13\u6709\u94fe",permalink:"/new-docs/docs/docs_zh/dev/dex"},next:{title:"Overlord",permalink:"/new-docs/docs/docs_zh/advanced/core/overlord"}},l=[{value:"System Architecture",id:"system-architecture",children:[]},{value:"Components",id:"components",children:[]},{value:"Core Flow",id:"core-flow",children:[{value:"\u4ea4\u6613",id:"\u4ea4\u6613",children:[]},{value:"\u51fa\u5757",id:"\u51fa\u5757",children:[]}]},{value:"Parallet Execution",id:"parallet-execution",children:[]},{value:"Execution Block",id:"execution-block",children:[]}],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"system-architecture"},"System Architecture"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/static/docs-img/arch/arch.png",alt:null}))),Object(i.b)("h2",{id:"components"},"Components"),Object(i.b)("p",null,"\u89c1\u5404\u7ec4\u4ef6\u8be6\u7ec6\u6587\u6863"),Object(i.b)("h2",{id:"core-flow"},"Core Flow"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"\u7528\u6237\u53d1 Transaction \u5230 Transaction \u4e0a\u94fe\u53d1\u751f\u4e86\u4ec0\u4e48")),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/static/docs-img/arch/core-flow.png",alt:null}))),Object(i.b)("h3",{id:"\u4ea4\u6613"},"\u4ea4\u6613"),Object(i.b)("h4",{id:"\u4ece-user"},"\u4ece User"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\u7528\u6237\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"SDK"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"GraphiQL")," \u7b49\u5de5\u5177\u5bf9\u8282\u70b9\u63d0\u4ea4\u4e00\u7b14\u4ea4\u6613"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Mempool")," \u9a8c\u8bc1\u4ea4\u6613\u4fe1\u606f\u662f\u5426\u5408\u6cd5\uff0c\u5178\u578b\u7684\u6709\uff1a\u4ea4\u6613\u7b7e\u540d\u3001",Object(i.b)("inlineCode",{parentName:"li"},"TimeoutGap"),"\u3001",Object(i.b)("inlineCode",{parentName:"li"},"Cycles")," \u7b49\uff0c\u540c\u65f6\u5b58\u5165\u81ea\u8eab\u7684\u4ea4\u6613\u5185\u5b58\u6c60\u3002",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4ea4\u6613\u6c60\u8fbe\u5230\u4e0a\u9650\u5c06\u4e22\u5931\u8be5\u4ea4\u6613\uff0c\u540c\u65f6\u4e0d\u4f1a\u5e7f\u64ad\u3002"),Object(i.b)("li",{parentName:"ul"},"\u9a8c\u8bc1\u4e0d\u901a\u8fc7\u5c06\u4e22\u5f03\u8be5\u4ea4\u6613\uff0c\u540c\u65f6\u4e0d\u4f1a\u5e7f\u64ad\u3002"))),Object(i.b)("li",{parentName:"ol"},"\u5f53\u4ea4\u6613\u9a8c\u8bc1\u6210\u529f\u540e\uff0c\u8c03\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"Network"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Network")," \u628a\u4ea4\u6613\u5e8f\u5217\u5316\u540e\uff0c\u5411\u5df2\u8fde\u4e0a\u7684\u5176\u4ed6\u8282\u70b9\u5e7f\u64ad\u8be5\u4ea4\u6613\u3002")),Object(i.b)("h4",{id:"\u4ece-network"},"\u4ece Network"),Object(i.b)("ol",{start:4},Object(i.b)("li",{parentName:"ol"},"\u672c\u8282\u70b9\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"Network")," \u6536\u5230\u4e00\u7b14\u4ea4\u6613\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"Network")," \u76f4\u63a5\u8f6c\u4ea4\u7ed9",Object(i.b)("inlineCode",{parentName:"li"},"Mempool"),"\u9a8c\u8bc1\u3002\u9a8c\u8bc1\u6d41\u7a0b\u53c2\u8003 ",Object(i.b)("inlineCode",{parentName:"li"},"2"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"\u4e0d\u540c\u70b9: \u4ece ",Object(i.b)("inlineCode",{parentName:"li"},"Network")," \u6765\u7684\u4ea4\u6613\u4e0d\u4f1a\u88ab\u518d\u6b21\u5e7f\u64ad")))),Object(i.b)("h3",{id:"\u51fa\u5757"},"\u51fa\u5757"),Object(i.b)("h4",{id:"\u63d0\u6848\u8282\u70b9"},"\u63d0\u6848\u8282\u70b9"),Object(i.b)("ol",{start:5},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Consensus")," \u5411 ",Object(i.b)("inlineCode",{parentName:"li"},"Mempool")," \u8bf7\u6c42\u7b5b\u9009\u4e00\u6279\u4ea4\u6613\uff0c",Object(i.b)("inlineCode",{parentName:"li"},"Mempool")," \u4f1a\u6839\u636e\u4e00\u4e9b\u7cfb\u7edf\u53c2\u6570\u5982: ",Object(i.b)("inlineCode",{parentName:"li"},"CyclesLimit"),"\uff0c\u6765\u51b3\u5b9a\u6700\u540e\u7b5b\u9009\u51fa\u7684\u4ea4\u6613\u6570\u91cf"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Consensus")," \u5c06\u7b5b\u9009\u540e\u7684\u4ea4\u6613\u6253\u5305\u6210 ",Object(i.b)("inlineCode",{parentName:"li"},"Block")," \u5e76\u4e14\u5bf9\u5b83\u7b7e\u540d\u540e\u7ec4\u6210 ",Object(i.b)("inlineCode",{parentName:"li"},"Proposal"),"\uff0c\u7136\u540e\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"Network")," \u5e7f\u64ad\u7ed9\u5176\u4ed6\u8282\u70b9\u3002",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Muta")," \u4f7f\u7528\u4e86 ",Object(i.b)("inlineCode",{parentName:"li"},"Compact Blocks"),"\uff0c\u6240\u4ee5 ",Object(i.b)("inlineCode",{parentName:"li"},"Block")," \u4e2d\u5e76\u4e0d\u5b58\u653e\u4ea4\u6613\u7684\u5177\u4f53\u5185\u5bb9")))),Object(i.b)("h4",{id:"\u63d0\u6848\u5757\u6295\u7968"},"\u63d0\u6848\u5757\u6295\u7968"),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"Network")," \u6536\u5230\u63d0\u6848\u8282\u70b9\u7684",Object(i.b)("inlineCode",{parentName:"li"},"Proposal"),"\uff0c\u9a8c\u8bc1 ",Object(i.b)("inlineCode",{parentName:"li"},"Proposal")," \u7684\u7b7e\u540d\u3001\u533a\u5757\u53c2\u6570\u7b49\u57fa\u7840\u4fe1\u606f\u3002"),Object(i.b)("li",{parentName:"ol"},"\u67e5\u770b\u672c\u5730\u662f\u5426\u5b58\u5728\u5bf9\u5e94\u4ea4\u6613\u3002"),Object(i.b)("li",{parentName:"ol"},"\u4e0d\u5b58\u5728\u7684\u4ea4\u6613\u5c06\u901a\u8fc7 ",Object(i.b)("inlineCode",{parentName:"li"},"Network")," \u4ece\u7f51\u7edc\u83b7\u53d6\u3002"),Object(i.b)("li",{parentName:"ol"},"\u9a8c\u8bc1\u901a\u8fc7\u540e\u5c06\u5bf9 ",Object(i.b)("inlineCode",{parentName:"li"},"Proposal")," \u6295 ",Object(i.b)("inlineCode",{parentName:"li"},"Yes")," \u7968\uff0c\u8be6\u7ec6\u7684\u5171\u8bc6\u6d41\u7a0b\u53ef\u4ee5\u67e5\u770b ",Object(i.b)("inlineCode",{parentName:"li"},"Overlord")," \u8bbe\u8ba1\u6587\u6863\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002")),Object(i.b)("h4",{id:"commit-\u533a\u5757"},"Commit \u533a\u5757"),Object(i.b)("ol",{start:11},Object(i.b)("li",{parentName:"ol"},"\u5b58\u50a8\u5171\u8bc6\u6210\u529f\u540e\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Block")," \u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"Storage"),", \u540c\u65f6\u8fdb\u5165\u4e0b\u4e00\u8f6e\u5171\u8bc6\u3002"),Object(i.b)("li",{parentName:"ol"},"\u5f02\u6b65\u7684\u5c06\u4ea4\u6613\u63d0\u4ea4\u7ed9 ",Object(i.b)("inlineCode",{parentName:"li"},"Framework")," \u6267\u884c\u3002"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"Framework")," \u6839\u636e\u4ea4\u6613\u5185\u5bb9\u627e\u5230\u5bf9\u5e94\u7684 ",Object(i.b)("inlineCode",{parentName:"li"},"Service"),"\u3002"),Object(i.b)("li",{parentName:"ol"},"\u6267\u884c\u6210\u529f\u540e\uff0c\u6570\u636e\u5b58\u50a8\u5230 ",Object(i.b)("inlineCode",{parentName:"li"},"Storage"))),Object(i.b)("h2",{id:"parallet-execution"},"Parallet Execution"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/static/docs-img/arch/parallet.png",alt:null}))),Object(i.b)("h2",{id:"execution-block"},"Execution Block"),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"/static/docs-img/arch/execution-block.png",alt:null}))))}p.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},m=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=p(n),O=r,u=m["".concat(c,".").concat(O)]||m[O]||d[O]||i;return n?a.a.createElement(u,o({ref:t},b,{components:n})):a.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);