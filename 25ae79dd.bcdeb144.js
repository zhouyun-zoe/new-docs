(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),c=(n(0),n(273)),l={title:"Storage"},o={id:"advanced/core/storage",title:"Storage",description:"Storage \u8d1f\u8d23\u5bf9\u4e0a\u5c42\u6a21\u5757\u63d0\u4f9b\u6570\u636e\u7684\u8bbf\u95ee\u3001\u6301\u4e45\u5316\u652f\u6301\uff0c\u5b58\u50a8\u65b9\u5f0f\u91c7\u7528 kv \u7ed3\u6784\u3002",source:"@site/docs/advanced/core/storage.md",permalink:"/new-docs/docs/advanced/core/storage",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/advanced/core/storage.md",sidebar:"docs",previous:{title:"Mempool",permalink:"/new-docs/docs/advanced/core/mempool"},next:{title:"Cryptography",permalink:"/new-docs/docs/advanced/crypto"}},i=[{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",children:[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"\u5b58\u50a8\u903b\u8f91",id:"\u5b58\u50a8\u903b\u8f91",children:[]},{value:"\u5e8f\u5217\u5316",id:"\u5e8f\u5217\u5316",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],b={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Storage \u8d1f\u8d23\u5bf9\u4e0a\u5c42\u6a21\u5757\u63d0\u4f9b\u6570\u636e\u7684\u8bbf\u95ee\u3001\u6301\u4e45\u5316\u652f\u6301\uff0c\u5b58\u50a8\u65b9\u5f0f\u91c7\u7528 kv \u7ed3\u6784\u3002"),Object(c.b)("p",null,"\u63a5\u53e3\u4e0a\uff0c\u4e3b\u8981\u6709\u4e24\u79cd\u7c7b\u578b\n1. Storage \u9488\u5bf9\u5177\u4f53\u4e1a\u52a1\u6570\u636e\u7684\u5b58\u50a8\u903b\u8f91\uff0c\u9700\u8981\u4f9d\u9760 Adapter \u7684\u80fd\u529b\u5b8c\u6210\u8bbf\u95ee\u3001\u6301\u4e45\u5316\u80fd\u529b\u3002\n2. Adapter \u4e00\u79cd\u5e95\u5c42 KV \u64cd\u4f5c\u7684\u62bd\u8c61\uff0c\u7406\u8bba\u4e0a\u4efb\u4f55\u62e5\u6709 kv \u5b58\u50a8\u80fd\u529b\u7684\u6570\u636e\u5e93\u90fd\u53ef\u4ee5\u65b9\u4fbf\u7684\u63a5\u5165\uff0c\u6bd4\u5982 RocksDB\u3001LevelDB\u3001Redis \u7b49\u3002"),Object(c.b)("p",null,"Muta \u4f7f\u7528 RocksDB Adapter \u4f5c\u4e3a\u9ed8\u8ba4\u7684\u6570\u636e\u5e93\u3002"),Object(c.b)("p",null,"Storage \u63a5\u53e3\u4e3b\u8981\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b\u7684\u8bfb\u5199\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Transaction"),Object(c.b)("li",{parentName:"ul"},"Receipt"),Object(c.b)("li",{parentName:"ul"},"Block"),Object(c.b)("li",{parentName:"ul"},"LatestProof: \u5f53\u524d\u6700\u65b0\u533a\u5757\u7684 Proof"),Object(c.b)("li",{parentName:"ul"},"WAL: \u63d0\u4f9b\u7ed9 Overlord \u64cd\u4f5c WAL \u6570\u636e\u3002WAL \u662f\u4e00\u79cd\u9884\u5199\u5165\u673a\u5236\uff0c\u4e3a\u4e86\u907f\u514d\u5728\u51fa\u73b0\u610f\u5916 Down \u673a\u540e\u53ef\u4ee5\u7ee7\u7eed\u8fd0\u884c\uff0c\u53ef\u53c2\u9605 ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/new-docs/docs/advanced/core/overlord"}),"Overlord \u6587\u6863"),"\u83b7\u53d6\u66f4\u591a\u4fe1\u606f")),Object(c.b)("h2",{id:"\u8bbe\u8ba1"},"\u8bbe\u8ba1"),Object(c.b)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nervosnetwork/muta/tree/master/core/storage"}),"https://github.com/nervosnetwork/muta/tree/master/core/storage")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"\u251c\u2500\u2500 ...\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 adapter\n    \u2502   \u251c\u2500\u2500 memory.rs // \u57fa\u4e8e\u5185\u5b58\u6570\u636e\u5e93\u4f5c\u4e3a\u5e95\u5c42\u5b58\u50a8\uff0c\u53ea\u5728\u5355\u5143\u6d4b\u8bd5\u4e2d\u4f7f\u7528\n    \u2502   \u251c\u2500\u2500 mod.rs\n    \u2502   \u2514\u2500\u2500 rocks.rs // \u57fa\u4e8e RocksDB \u4f5c\u4e3a\u6570\u636e\u5e93\u5b58\u50a8\uff0c\u7528\u4e8e\u771f\u5b9e\u7684\u8fd0\u884c\u73af\u5883\n    \u251c\u2500\u2500 lib.rs // \n    \u2514\u2500\u2500 tests // Storage \u7684\u5355\u5143\u6d4b\u8bd5\u7528\u4f8b\n")),Object(c.b)("h3",{id:"\u5b58\u50a8\u903b\u8f91"},"\u5b58\u50a8\u903b\u8f91"),Object(c.b)("p",null,"\u9996\u5148\u6709 5 \u4e2a\u5217\u65cf\u4e3a\u6570\u636e\u505a\u903b\u8f91\u5212\u5206, \u5206\u522b ",Object(c.b)("inlineCode",{parentName:"p"},"Block"),", ",Object(c.b)("inlineCode",{parentName:"p"},"Receipt"),", ",Object(c.b)("inlineCode",{parentName:"p"},"SignedTransaction"),", ",Object(c.b)("inlineCode",{parentName:"p"},"WAL"),"\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"HashHeight"),", \u5404\u5217\u65cf\u5728\u6e90\u7801\u4e2d\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"#[derive(Debug, Copy, Clone, Display)]\npub enum StorageCategory {\n    Block, // Block, Latest Block, Latest Block Proof\n    Receipt,\n    SignedTransaction,\n    Wal,\n    HashHeight, // block height \u5bf9\u5e94\u7684 Block hash \u7684\u6620\u5c04\n}\n")),Object(c.b)("p",null,"\u5404\u5217\u65cf\u5b9e\u9645\u5b58\u50a8\u7684 KV \u6570\u636e:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Block",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Block",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"key: ","[height]"),Object(c.b)("li",{parentName:"ul"},"value: Block"))),Object(c.b)("li",{parentName:"ul"},"Latest Block:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},'key: "latest_hash" '),Object(c.b)("li",{parentName:"ul"},"value: Block"))),Object(c.b)("li",{parentName:"ul"},"Latest Block Proof",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},'key: "latest_proof"'),Object(c.b)("li",{parentName:"ul"},"value: Block"))))),Object(c.b)("li",{parentName:"ul"},"Receipt",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"key: ","[block-height]","-","[transaction-hash]"),Object(c.b)("li",{parentName:"ul"},"value: Receipt"))),Object(c.b)("li",{parentName:"ul"},"SignedTransaction",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"key: ","[block-height]","-","[transaction-hash]"),Object(c.b)("li",{parentName:"ul"},"value: SignedTransaction"))),Object(c.b)("li",{parentName:"ul"},"WAL",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},'key: "overlord_wal"'),Object(c.b)("li",{parentName:"ul"},"value: Bytes // \u6570\u636e\u683c\u5f0f\u7531 Overlord \u5b9a\u4e49"))),Object(c.b)("li",{parentName:"ul"},"HashHeight",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"key: ","[Block-hash]"),Object(c.b)("li",{parentName:"ul"},"value: height")))),Object(c.b)("p",null,"\u5bf9\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"SignedTransaction")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"Receipt")," \u8fd9\u4e24\u79cd\u6570\u636e\u6211\u4eec\u7279\u5730\u52a0\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"Height")," \u4f5c\u4e3a\u524d\u7f00\uff0c\u4f5c\u7528\u662f\u4f7f\u5f97\u6570\u636e\u53ef\u4ee5\u5c3d\u91cf\u7684\u6309\u987a\u5e8f\u8fdb\u884c\u6392\u5e8f\uff0c\u5728\u7269\u7406\u4e0a\u5c3d\u91cf\u843d\u5230\u4e00\u4efd\u6587\u4ef6\u4e0a\uff0c\u52a0\u5feb\u8bfb\u53d6\u6570\u636e\uff0c\u8be6\u7ec6\u8bfb\u53d6\u6d41\u7a0b\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"// \u4ee5 SignedTransaction \u4e3e\u4f8b\nBlockHeight(BigEndian U64) + TransactionHash -> SignedTransaction: \u4ea4\u6613\u54c8\u5e0c\u5230\u4ea4\u6613\u7684\u6620\u5c04\n- \u4e00\u6b21\u6027\u67e5\u8be2\u9ad8\u5ea6 1 \u7684\u5168\u90e8 Tx: db.range_scan(1 + 0x00001000)\n")),Object(c.b)("p",null,"Muta \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u533a\u5757\u94fe\u6846\u67b6\uff0c\u4e00\u4e2a\u533a\u5757\u53ef\u4ee5\u5904\u7406\u6570\u4e07\u7b14 ",Object(c.b)("inlineCode",{parentName:"p"},"SignedTransaction"),"\uff0c\u5bf9\u5e94\u7684\u4e5f\u4f1a\u751f\u6210\u6570\u4e07\u6761 ",Object(c.b)("inlineCode",{parentName:"p"},"Receipt"),"\uff0c\u5982\u679c\u6301\u7eed\u4e0d\u65ad\u7684\u538b\u6d4b\u90a3\u4e48\u5f88\u5feb\u6570\u636e\u91cf\u5c31\u4f1a\u8fbe\u5230\u6570\u5341\u4ebf\u7684\u7ea7\u522b\uff0c\u5728\u8fd9\u79cd\u6570\u636e\u4f53\u91cf\u4e0b\u7ecf\u8fc7\u5185\u90e8\u6d4b\u8bd5\uff0c\u968f\u673a\u8bfb\u548c\u5faa\u5e8f\u8bfb\u7684\u6027\u80fd\u5dee\u8ddd\u8fbe\u5230\u4e86 ",Object(c.b)("strong",{parentName:"p"},"300")," \u500d\u5de6\u53f3\u3002"),Object(c.b)("h3",{id:"\u5e8f\u5217\u5316"},"\u5e8f\u5217\u5316"),Object(c.b)("p",null,"\u6240\u6709\u6570\u636e\u5747\u4f7f\u7528 protocol-buffers \u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316"),Object(c.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Write-ahead_logging"}),"WAL"),": write-ahead logging "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/protocol-buffers"}),"protocol-buffers"),": Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://rocksdb.org/"}),"RocksDB"),": A Persistent Key-Value Store for Flash and RAM Storage")))}p.isMDXComponent=!0},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,d=u["".concat(l,".").concat(O)]||u[O]||s[O]||c;return n?a.a.createElement(d,o({ref:t},b,{components:n})):a.a.createElement(d,o({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=O;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);