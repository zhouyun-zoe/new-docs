(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),o=(n(0),n(251)),c={title:"Storage"},l={id:"docs_zh/advanced/core/storage",title:"Storage",description:"# \u5b58\u50a8\u8bbe\u8ba1",source:"@site/docs/docs_zh/advanced/core/storage.md",permalink:"/new-docs/docs/docs_zh/advanced/core/storage",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/docs_zh/advanced/core/storage.md",sidebar:"docs_zh",previous:{title:"Mempool",permalink:"/new-docs/docs/docs_zh/advanced/core/mempool"},next:{title:"Cryptography",permalink:"/new-docs/docs/docs_zh/advanced/crypto"}},i=[{value:"\u76ee\u6807",id:"\u76ee\u6807",children:[]},{value:"\u8bbe\u8ba1",id:"\u8bbe\u8ba1",children:[]},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[{value:"Storage",id:"storage",children:[]},{value:"Adapter",id:"adapter",children:[]}]}],s={rightToc:i};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"\u5b58\u50a8\u8bbe\u8ba1"},"\u5b58\u50a8\u8bbe\u8ba1"),Object(o.b)("h2",{id:"\u76ee\u6807"},"\u76ee\u6807"),Object(o.b)("p",null,"\u5b58\u50a8\u6a21\u5757\u8d1f\u8d23\u5bf9\u4e0a\u5c42\u6a21\u5757\u63d0\u4f9b\u6570\u636e\u7684\u7684\u6301\u4e45\u5316\u652f\u6301\uff0c\u91c7\u7528 key-value \u6570\u636e\u5e93\u3002"),Object(o.b)("p",null,"\u6a21\u5757\u4e3b\u8981\u5206\u4e24\u4e2a\u7ec4\u4ef6\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Storage"),Object(o.b)("li",{parentName:"ul"},"Adapter")),Object(o.b)("p",null,"Storage \u7ec4\u4ef6\u4e3a\u4e0a\u5c42\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u6570\u636e\u5b58\u50a8\u63a5\u53e3\uff0c\u800c Adapter \u5219\u8d1f\u8d23\u5bf9\u66f4\u5e95\u5c42\n\u7684\u6570\u636e\u5e93\u5177\u4f53\u5b9e\u73b0\u63d0\u4f9b\u7edf\u4e00\u7684\u62bd\u8c61\u63a5\u53e3\uff0c\u4f7f\u5f97\u4e0d\u540c\u7684\u6570\u636e\u5e93\u5b9e\u73b0\u53ef\u4ee5\u65b9\u4fbf\u7684\u63a5\u5165\u3002"),Object(o.b)("h2",{id:"\u8bbe\u8ba1"},"\u8bbe\u8ba1"),Object(o.b)("p",null,"Storage \u63a5\u53e3\u8bbe\u8ba1\u4e3b\u8981\u548c\u4e1a\u52a1\u903b\u8f91\u6709\u5173\uff0c\u5927\u4f53\u5206\u4e3a\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Transaction \u4ea4\u6613\u6570\u636e\u5b58\u50a8"),Object(o.b)("li",{parentName:"ul"},"Receipt \u4ea4\u6613\u56de\u6267\u5b58\u50a8"),Object(o.b)("li",{parentName:"ul"},"Epoch \u5757\u5b58\u50a8"),Object(o.b)("li",{parentName:"ul"},"LatestProof \u5f53\u524d\u6700\u65b0\u5171\u8bc6\u7684 Proof\uff0c\u540c\u6b65\u9700\u8981")),Object(o.b)("p",null,"Adapter \u63a5\u53e3\u8d1f\u8d23\u4e0a\u8ff0 Storage \u903b\u8f91\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\uff0c\u901a\u8fc7 Protocol \u63d0\u4f9b\u7684\nCodec \u5e8f\u5217\u5316\u63a5\u53e3\uff0c\u5b8c\u6210\u5bf9\u6570\u636e\u7684\u5b58\u50a8\u64cd\u4f5c\u3002\u5927\u4f53\u64cd\u4f5c\u53ef\u4ee5\u5206\u4e3a\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"get"),Object(o.b)("li",{parentName:"ul"},"insert"),Object(o.b)("li",{parentName:"ul"},"remove"),Object(o.b)("li",{parentName:"ul"},"iter"),Object(o.b)("li",{parentName:"ul"},"batch_modify")),Object(o.b)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),Object(o.b)("h3",{id:"storage"},"Storage"),Object(o.b)("h4",{id:"\u57fa\u672c\u4e0a\u901a\u7528-cr"},"\u57fa\u672c\u4e0a\u901a\u7528 CR"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"async fn get_xxx(&self, key: XXX) -> ProtocolResult<XXX>;\nasync fn insert_xxx(&self, key: XXX, value: XXX) -> ProtocolResult<()>;\nasync fn contains_xxx(&self, key: XXX) -> ProtocolResult<bool>;\n")),Object(o.b)("p",null,"\u6ca1\u6709\u66f4\u65b0\u548c\u5220\u9664\u63a5\u53e3\uff0c\u4ee5\u4e0b\u662f\u4f8b\u5916"),Object(o.b)("p",null,"LatestProof \u6709\u66f4\u65b0\u63a5\u53e3\uff0c\u4e14\u662f\u56fa\u5b9a\u7684 Key\u3002"),Object(o.b)("h3",{id:"adapter"},"Adapter"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"#[derive(Debug, Copy, Clone, Display)]\npub enum StorageCategory {\n    Epoch,\n    Receipt,\n    SignedTransaction,\n}\n\npub trait StorageSchema {\n    type Key: ProtocolCodec + Send;\n    type Value: ProtocolCodec + Send;\n\n    fn category() -> StorageCategory;\n}\n\n#[async_trait]\npub trait Storage<Adapter: StorageAdapter>: Send + Sync {\n    async fn insert_transactions(&self, signed_txs: Vec<SignedTransaction>) -> ProtocolResult<()>;\n\n    async fn get_transaction_by_hash(\n        &self,\n        tx_hash: Hash,\n    ) -> ProtocolResult<Option<SignedTransaction>>;\n}\n\npub enum StorageBatchModify<S: StorageSchema> {\n    Remove,\n    Insert(<S as StorageSchema>::Value),\n}\n\n#[async_trait]\npub trait StorageAdapter: Sync + Send {\n    async fn insert<S: StorageSchema>(\n        &self,\n        key: <S as StorageSchema>::Key,\n        val: <S as StorageSchema>::Value,\n    ) -> ProtocolResult<()>;\n\n    async fn get<S: StorageSchema>(\n        &self,\n        key: <S as StorageSchema>::Key,\n    ) -> ProtocolResult<Option<<S as StorageSchema>::Value>>;\n\n    async fn remove<S: StorageSchema>(&self, key: <S as StorageSchema>::Key) -> ProtocolResult<()>;\n\n    async fn contains<S: StorageSchema>(\n        &self,\n        key: <S as StorageSchema>::Key,\n    ) -> ProtocolResult<bool>;\n\n    // TODO: Query struct?\n    fn iter<S: StorageSchema + 'static>(\n        &self,\n        keys: Vec<<S as StorageSchema>::Key>,\n    ) -> Box<dyn Stream<Item = ProtocolResult<Option<<S as StorageSchema>::Value>>>>;\n\n    async fn batch_modify<S: StorageSchema>(\n        &self,\n        keys: Vec<<S as StorageSchema>::Key>,\n        vals: Vec<StorageBatchModify<S>>,\n    ) -> ProtocolResult<()>;\n}\n")),Object(o.b)("p",null,"Adapter \u901a\u8fc7 Schema \u548c Protocol Codec\uff0c \u76f4\u63a5\u5bf9\u5e94\u8868\u7684\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\u64cd\u4f5c\u3002Storage \u5c42\u65e0\u9700\u5173\u5fc3\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u64cd\u4f5c\uff0c\u62ff\u5230\u7684\u76f4\u63a5\u5c31\u662f\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\u3002"),Object(o.b)("p",null,"\u4f7f\u7528 Stream \u5b9e\u73b0\u5f02\u6b65\u539f\u751f\u7684\u904d\u5386\uff0c\u6279\u91cf\u8bfb\u53d6\u64cd\u4f5c\u3002"),Object(o.b)("p",null,"BatchModify \u5219\u5c06\u63d2\u5165\u548c\u5220\u9664\u8fdb\u884c\u4e86\u6574\u5408\uff0c\u63a5\u53e3\u7a0d\u7b80\u6d01\u5e72\u51c0\u4e00\u4e9b\u3002"))}u.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l({ref:t},s,{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);