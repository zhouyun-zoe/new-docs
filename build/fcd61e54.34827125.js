(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{199:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(1),a=t(6),o=(t(0),t(206)),p={title:"Mempool"},c={id:"advanced/core/mempool",title:"Mempool",description:"## \u8bbe\u8ba1\u8981\u6c42",source:"@site/docs/advanced/core/mempool.md",permalink:"/new-docs/docs/advanced/core/mempool",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/advanced/core/mempool.md",sidebar:"docs",previous:{title:"Network",permalink:"/new-docs/docs/advanced/core/network"},next:{title:"Storage",permalink:"/new-docs/docs/advanced/core/storage"}},l=[{value:"\u8bbe\u8ba1\u8981\u6c42",id:"\u8bbe\u8ba1\u8981\u6c42",children:[]},{value:"\u8bbe\u8ba1\u65b9\u6848",id:"\u8bbe\u8ba1\u65b9\u6848",children:[{value:"\u4f18\u826f\u6027\u80fd",id:"\u4f18\u826f\u6027\u80fd",children:[]},{value:"\u516c\u5e73\u6253\u5305",id:"\u516c\u5e73\u6253\u5305",children:[]},{value:"\u63d0\u524d\u540c\u6b65",id:"\u63d0\u524d\u540c\u6b65",children:[]}]},{value:"\u5177\u4f53\u8bbe\u8ba1",id:"\u5177\u4f53\u8bbe\u8ba1",children:[]}],i={rightToc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u8bbe\u8ba1\u8981\u6c42"},"\u8bbe\u8ba1\u8981\u6c42"),Object(o.b)("p",null,"Mempool \u662f\u8282\u70b9\u8d1f\u8d23\u6536\u96c6\u65b0\u4ea4\u6613\u4ee5\u53ca\u6253\u5305\u65b0\u4ea4\u6613\u7ed9\u5171\u8bc6\u6a21\u5757\u8fdb\u884c\u5171\u8bc6\u7684\u529f\u80fd\u6a21\u5757\u3002\u5f88\u81ea\u7136\u5730\uff0c\u6211\u4eec\u5bf9 Mempool \u4f1a\u63d0\u51fa\u4e00\u4e9b\u8981\u6c42\uff1a"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u6027\u80fd\u4f18\u79c0\uff0c\u5728\u666e\u901a\u8ba1\u7b97\u8bbe\u5907\u4e2d\u8fd0\u884c\u5373\u53ef\u8fbe\u5230\u6bcf\u79d2\u63d2\u5165 10000+ \u7b14\u4ea4\u6613\u7684\u6027\u80fd\u8981\u6c42\u3002"),Object(o.b)("li",{parentName:"ol"},"\u516c\u5e73\u6027\uff0c\u6309\u7167\u6536\u5230\u4ea4\u6613\u7684\u987a\u5e8f\u6253\u5305\u4ea4\u6613\u3002")),Object(o.b)("p",null,"\u6b64\u5916\uff0c\u4e3a\u4e86\u914d\u5408\u5171\u8bc6\u8fc7\u7a0b\u4e0e\u4ea4\u6613\u540c\u6b65\u8fc7\u7a0b\u5e76\u53d1\u7684\u8bbe\u8ba1\uff0c\u8fd8\u6709\u7b2c\u4e09\u4e2a\u8981\u6c42\uff1a"),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"\u6253\u5305\u7ed9\u5171\u8bc6\u7684\u4ea4\u6613\u5305\u542b\u4e24\u90e8\u5206\uff1a\u7528\u4e8e\u5171\u8bc6\u7684 order \u4ea4\u6613\u4ee5\u53ca\u7528\u4e8e\u540c\u6b65\u7684 propose \u4ea4\u6613\u3002")),Object(o.b)("h2",{id:"\u8bbe\u8ba1\u65b9\u6848"},"\u8bbe\u8ba1\u65b9\u6848"),Object(o.b)("h3",{id:"\u4f18\u826f\u6027\u80fd"},"\u4f18\u826f\u6027\u80fd"),Object(o.b)("p",null,"\u8981\u83b7\u5f97\u4f18\u79c0\u7684\u6027\u80fd\uff0c\u9996\u5148\u8981\u5206\u6790\u4ea4\u6613\u63d2\u5165\u7684\u8fc7\u7a0b\uff0c\u627e\u5230\u6027\u80fd\u74f6\u9888\u4e4b\u5904\u5bf9\u75c7\u89e3\u51b3\u3002\u4e00\u7b14\u4ea4\u6613\u63d2\u5165 Mempool \u7684\u8fc7\u7a0b\u5305\u62ec\uff1a"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"\u68c0\u67e5\u4ea4\u6613\u6c60\u662f\u5426\u5df2\u6ee1\uff0c\u4ee5\u907f\u514d\u5185\u5b58\u6ea2\u51fa\u3002"),Object(o.b)("li",{parentName:"ol"},"\u68c0\u67e5\u4ea4\u6613\u662f\u5426\u5df2\u7ecf\u88ab\u4ea4\u6613\u6c60\u5305\u542b\uff0c\u4ee5\u907f\u514d\u91cd\u590d\u63d2\u5165\u3002"),Object(o.b)("li",{parentName:"ol"},"\u68c0\u67e5\u4ea4\u6613\u7684\u7b7e\u540d\u662f\u5426\u6b63\u786e\uff0c\u683c\u5f0f\u662f\u5426\u5408\u89c4\uff0c\u4ee5\u907f\u514d\u63d2\u5165\u660e\u663e\u9519\u8bef\u7684\u4ea4\u6613\u3002"),Object(o.b)("li",{parentName:"ol"},"\u68c0\u67e5\u4ea4\u6613\u662f\u5426\u5df2\u7ecf\u4e0a\u94fe\uff0c\u4ee5\u907f\u514d\u5171\u8bc6\u5df2\u4e0a\u94fe\u7684\u4ea4\u6613\u3002")),Object(o.b)("p",null,"\u968f\u7740\u533a\u5757\u94fe\u7684\u4e0d\u65ad\u589e\u957f\uff0c\u5386\u53f2\u4ea4\u6613\u6570\u636e\u65e5\u76ca\u5e9e\u5927\uff0c\u6b65\u9aa4 4 \u7684\u67e5\u8be2\u5c06\u4f1a\u6210\u4e3a\u6027\u80fd\u9ed1\u6d1e\u3002\u6211\u4eec\u901a\u8fc7\u5728\u4ea4\u6613\u4e2d\u8bbe\u7f6e\u4e00\u4e2a\u5fc5\u586b\u7684 timeout \u5b57\u6bb5\uff0c\u4ee5\u53ca\u4e00\u4e2a\u5168\u5c40\u7ea6\u675f\u53c2\u6570 g \u6765\u89e3\u51b3\u8be5\u95ee\u9898\u3002"),Object(o.b)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u5f53\u67d0\u7b14\u4ea4\u6613\u7684 timeout \u4e3a t\uff0c\u82e5\u8be5\u4ea4\u6613\u5728\u9ad8\u5ea6 t \u4ecd\u672a\u88ab\u6253\u5305\uff0c\u5219\u4f1a\u88ab\u89c6\u4e3a\u5931\u6548\u800c\u88ab\u8282\u70b9\u629b\u5f03\u3002\u4e3a\u4e86\u907f\u514d\u7528\u6237\u8bbe\u7f6e\u8fc7\u9ad8\u7684 timeout\uff0c\u82e5\u6700\u65b0\u9ad8\u5ea6\u4e3a h \u7684\u8282\u70b9\u6536\u5230\u7684\u4ea4\u6613\u7684 timeout t > h + g\uff0c\u540c\u6837\u4f1a\u88ab\u8282\u70b9\u89c6\u4e3a\u975e\u6cd5\u800c\u629b\u5f03\u3002\u5728\u8fd9\u79cd\u673a\u5236\u7684\u7ea6\u675f\u4e0b\uff0c\u6700\u65b0\u9ad8\u5ea6\u4e3a h \u7684\u8282\u70b9\u4ec5\u9700\u4fdd\u5b58\u9ad8\u5ea6\u533a\u95f4\u4e3a ","[h - g, h]"," \u7684\u5386\u53f2\u4ea4\u6613\u7528\u4e8e\u67e5\u91cd\uff0c\u67e5\u91cd\u7684\u8ba1\u7b97\u590d\u6742\u5ea6\u548c\u5b58\u50a8\u590d\u6742\u5ea6\u5747\u964d\u5230\u4e86O(g)\uff0c\u4e0e\u5386\u53f2\u4ea4\u6613\u603b\u91cf\u65e0\u5173\u3002"),Object(o.b)("h3",{id:"\u516c\u5e73\u6253\u5305"},"\u516c\u5e73\u6253\u5305"),Object(o.b)("p",null,"\u5728\u4ea4\u6613\u4f18\u5148\u7ea7\u76f8\u540c\u7684\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u8282\u70b9\u540e\u6536\u5230\u7684\u4ea4\u6613\u5374\u5148\u88ab\u6253\u5305\uff0c\u8fd9\u663e\u7136\u6709\u8fdd\u516c\u5e73\u6027\u3002\u56e0\u6b64\uff0c\u4ea4\u6613\u6c60\u7684\u4ea4\u6613\u5fc5\u987b\u6309\u7167\u5148\u5165\u5148\u51fa\u7684\u539f\u5219\u8fdb\u884c\u6253\u5305\u3002"),Object(o.b)("p",null,"\u7136\u800c\uff0c\u5982\u679c\u6309\u7167\u4ee5\u592a\u574a\u7684 nonce \u5355\u8c03\u9012\u589e\u7684\u8bbe\u8ba1\uff08\u4ea4\u6613\u4e2d\u7684 nonce \u5b57\u6bb5\u7684\u8bbe\u8ba1\u662f\u4e3a\u4e86\u786e\u4fdd\u4ea4\u6613\u7684\u552f\u4e00\u6027\uff09\uff0c\u82e5\u4ea4\u6613\u6c60\u540c\u65f6\u5305\u542b\u591a\u7b14\u540c\u4e00\u7528\u6237\u53d1\u51fa\u7684\u4ea4\u6613\uff0c\u5219\u8fd9\u4e9b\u4ea4\u6613\u4e4b\u95f4\u8fd8\u9700\u8981\u6ee1\u8db3\u504f\u5e8f\u5173\u7cfb\uff0c\u8fd9\u4f1a\u7ed9\u6253\u5305\u673a\u5236\u5e26\u6765\u975e\u5e38\u5927\u7684\u590d\u6742\u6027\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u91c7\u7528\u968f\u673a nonce \u7684\u65b9\u5f0f\u751f\u6210\u552f\u4e00\u4ea4\u6613\uff0c\u8fd9\u79cd\u8bbe\u8ba1\u8fd8\u4f1a\u5e26\u6765\u5176\u4ed6\u4e00\u4e9b\u989d\u5916\u7684\u597d\u5904\uff0c\u6bd4\u5982\u83b7\u5f97\u4e86\u66f4\u597d\u7684\u5e76\u53d1\u6267\u884c\u80fd\u529b\uff08\u4f8b\u5982\u540c\u4e00\u4e2a\u7528\u6237\u53d1\u51fa\u7684\u591a\u7b14\u4ea4\u6613\u88ab\u540c\u4e00\u4e2a\u533a\u5757\u6253\u5305\uff0c\u5728\u4ee5\u592a\u574a\u4e2d\u8fd9\u4e9b\u4ea4\u6613\u5fc5\u987b\u987a\u5e8f\u6267\u884c\uff0c\u800c\u91c7\u7528\u968f\u673a nonce \u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5e76\u53d1\u6267\u884c\u8fd9\u4e9b\u4ea4\u6613\uff09\uff0c\u7b80\u5316\u94b1\u5305\u7684\u8bbe\u8ba1\uff08\u5728\u4ee5\u592a\u574a\u4e2d\uff0c\u94b1\u5305\u9700\u8981\u540c\u6b65\u6700\u65b0\u7684 nonce\uff0c\u4ee5\u907f\u514d\u53d1\u51fa\u91cd\u590d\u7684\u4ea4\u6613\uff0c\u800c\u5728\u6211\u4eec\u7684\u8bbe\u8ba1\u4e2d\u5c31\u6ca1\u6709\u8fd9\u6837\u7684\u8981\u6c42\uff09\u3002"),Object(o.b)("p",null,"\u603b\u4e4b\uff0c\u5f3a\u5236\u8981\u6c42\u4e00\u4e2a\u7528\u6237\u7684\u6240\u6709\u4ea4\u6613\u4fdd\u6301\u504f\u5e8f\u662f\u6ca1\u6709\u5fc5\u8981\u4e14\u4f4e\u6548\u7684\uff0c\u5982\u679c\u67d0\u4e9b\u4ea4\u6613\u4e4b\u95f4\u5b58\u5728\u67d0\u79cd\u4f9d\u8d56\u5173\u7cfb\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ref \u5b57\u6bb5\u6765\u8868\u793a\u8fd9\u79cd\u5173\u7cfb\uff0c\u4ee5\u6b64\u83b7\u5f97\u6bd4\u4ee5\u592a\u574a\u66f4\u901a\u7528\u7684\u4f9d\u8d56\u8868\u8fbe\uff0c\u6bd4\u5982\u7528\u4e8e\u8868\u793a\u4e0d\u540c\u7528\u6237\u4e4b\u95f4\u4ea4\u6613\u7684\u4f9d\u8d56\u5173\u7cfb\u3002\u5e76\u4e14\u6211\u4eec\u7684\u987a\u5e8f\u6253\u5305\u65b9\u6848\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u6269\u5c55\u5230\u6ee1\u8db3\u8fd9\u79cd\u4f9d\u8d56\u9700\u6c42\u3002"),Object(o.b)("h3",{id:"\u63d0\u524d\u540c\u6b65"},"\u63d0\u524d\u540c\u6b65"),Object(o.b)("p",null,"\u7531\u4e8e\u533a\u5757\u94fe\u662f\u4e00\u4e2a\u5206\u5e03\u5f0f\u7cfb\u7edf\uff0c\u4e0d\u540c\u8282\u70b9\u7684\u4ea4\u6613\u6c60\u6240\u5305\u542b\u7684\u4ea4\u6613\u96c6\u5408\u4e0d\u4f1a\u5b8c\u5168\u76f8\u540c\u3002\u5171\u8bc6\u8fc7\u7a0b\u4e0e\u4ea4\u6613\u540c\u6b65\u6253\u5305\u7684\u6838\u5fc3\u601d\u60f3\u662f\uff0c\u5728\u4ea4\u6613\u6c60\u4e2d\u5305\u542b\u7684\u4ea4\u6613\u5f88\u591a\uff0c\u65e0\u6cd5\u88ab\u4e00\u6b21\u5171\u8bc6\u5b8c\u6210\u7684\u60c5\u51b5\u4e0b\uff08\u53d7\u9650\u4e8e cycle_limit\uff0c\u7c7b\u4f3c\u4ee5\u592a\u574a\u7684 gas_limit\uff09\uff0c\u672a\u53c2\u4e0e\u5171\u8bc6\u7684\u4ea4\u6613\u7684\u540c\u6b65\u8fc7\u7a0b\u53ef\u4ee5\u4e0e\u5171\u8bc6\u8fc7\u7a0b\u5e76\u53d1\u8fdb\u884c\u3002\u901a\u8fc7\u8fd9\u6837\u7684\u8bbe\u8ba1\uff0c\u5728\u4e0b\u4e00\u4e2a\u9ad8\u5ea6\u7684\u5171\u8bc6\u5f00\u59cb\u7684\u65f6\u5019\uff0c\u53c2\u4e0e\u5171\u8bc6\u7684\u4ea4\u6613\u7684\u540c\u6b65\u8fc7\u7a0b\u5df2\u7ecf\u63d0\u524d\u4e00\u4e2a\u9ad8\u5ea6\u5f00\u59cb\u4e86\uff0c\u5171\u8bc6\u6548\u7387\u56e0\u6b64\u5f97\u5230\u4e86\u63d0\u5347\u3002"),Object(o.b)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u5c31\u662f\u4ea4\u6613\u6c60\u6253\u5305\u7684\u65f6\u5019\uff0c\u5728 order \u4ea4\u6613\u6ee1\u4e86\u4e4b\u540e\uff0c\u7ee7\u7eed\u6253\u5305\u4ea4\u6613\u4f5c\u4e3a propose \u4ea4\u6613\u3002\u5728\u5171\u8bc6\u7684\u65f6\u5019\uff0cleader \u8282\u70b9\u53d1\u51fa\u7684\u63d0\u6848\u4e2d\u5305\u542b\u4e86 order \u4ea4\u6613 \u548c propose \u4ea4\u6613\uff08\u63d0\u6848\u4e2d\u5305\u542b\u7684\u5b9e\u9645\u4e0a\u90fd\u662f\u4ea4\u6613\u54c8\u5e0c\uff0c\u5728\u5171\u8bc6\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u91c7\u7528\u7684\u662f compact block",Object(o.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," \u7684\u8bbe\u8ba1\uff09\u3002order \u4ea4\u6613\u53c2\u4e0e\u5171\u8bc6\uff0c\u800c propose \u4ea4\u6613\u5f00\u59cb\u540c\u6b65\u3002"),Object(o.b)("h2",{id:"\u5177\u4f53\u8bbe\u8ba1"},"\u5177\u4f53\u8bbe\u8ba1"),Object(o.b)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u4ee5\u4e0a\u8981\u6c42\uff0c\u6211\u4eec\u7528 Map \u548c Queue \u7ed3\u6784\u5171\u4eab\u5b58\u50a8\u4ea4\u6613\u6570\u636e\uff0cMap \u53ef\u5feb\u901f\u67e5\u8be2\u548c\u5220\u9664\uff0c\u800c Queue \u6ee1\u8db3\u5148\u5165\u5148\u51fa\u7684\u6253\u5305\u8981\u6c42\u3002\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u7528\u4e86\u4e24\u4e2a queue\uff0c\u5c31\u50cf\u4e24\u4e2a\u676f\u5b50\u4ea4\u66ff\u5012\u725b\u5976\u3002Mempool \u7684\u6838\u5fc3\u6570\u636e\u7ed3\u6784\u5982\u4e0b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"struct TxCache {\n    /// \u7528 queue \u5b9e\u73b0\u5148\u5165\u5148\u51fa\u7684\u6253\u5305\u529f\u80fd. \n    /// \u7528\u4e24\u4e2a queue \u8f6e\u6d41\u5b58\u50a8\u4ea4\u6613. \u4e00\u4e2a queue \u5f53\u524d\u8f6e\u503c, \u53e6\u4e00\u4e2a\u5219\u4f5c\u4e3a\u66ff\u8865. \n    /// \u6253\u5305\u65f6\u4ece\u5f53\u524d\u8f6e\u503c\u7684 queue \u4e2d\u987a\u5e8f\u6253\u5305.\n    queue_0: Queue<SharedTx>,\n    queue_1: Queue<SharedTx>,\n    /// \u7528 map \u5b8c\u6210\u9ad8\u6548\u7684\u968f\u673a\u67e5\u8be2\u548c\u5220\u9664\u4ea4\u6613.\n    map: Map<Hash, SharedTx>,\n    /// \u6307\u793a\u5f53\u524d\u8f6e\u503c\u7684 queue, true \u4e3a queue_0, false \u4e3a queue_1.\n    is_zero: AtomicBool,\n    /// \u7528\u4e8e\u539f\u5b50\u64cd\u4f5c\uff0c\u4ee5\u59a5\u5584\u5904\u7406\u6253\u5305\u4e0e\u63d2\u5165\u7684\u5e76\u53d1\u95ee\u9898. \n    concurrent_count: AtomicUsize,\n}\n\n/// \u7528\u4e8e map \u548c queue \u4e2d\u5171\u4eab\u7684\u4ea4\u6613\u7ed3\u6784\ntype SharedTx = Arc<TxWrapper>;\n\nstruct TxWrapper {\n    tx: SignedTransaction,\n    /// \u8be5\u4ea4\u6613\u662f\u5426\u88ab map \u5220\u9664\uff0c\u6709\u8be5\u6807\u8bc6\u7684\u4ea4\u6613\u5728\u6253\u5305\u4ea4\u6613\u65f6\u4f1a\u88ab\u8df3\u8fc7\uff0c\u5e76\u4e14\u4ece queue \u4e2d\u5220\u9664\n    removed: AtomicBool,\n    /// \u907f\u514d\u91cd\u590d\u540c\u6b65\u7684\u6807\u8bc6\uff0c\u6709\u8be5\u6807\u8bc6\u7684\u4ea4\u6613\u5728\u6253\u5305 propose \u4ea4\u6613\u65f6\u4f1a\u88ab\u8df3\u8fc7\n    proposed: AtomicBool,\n}\n\n/// \u7528\u4e8e\u5b58\u50a8\u5171\u8bc6\u540c\u6b65\u8fd4\u56de\u7684\u4ea4\u6613\ntype CallbackCache = Map<Hash, SignedTransaction>;\n\n/// Mempool \u6253\u5305\u8fd4\u56de\u7ed9\u5171\u8bc6\u6a21\u5757\u7684\u6570\u636e\u7ed3\u6784\nstruct MixedTxHashes {\n    order_tx_hashes: Vec<Hash>,\n    propose_tx_hashes: Vec<Hash>,\n}\n")),Object(o.b)("p",null,"\u901a\u8fc7\u6240\u6709\u68c0\u67e5\u7684\u65b0\u4ea4\u6613\u5728\u63d2\u5165 Mempool \u65f6\uff0c\u9996\u5148\u5305\u88c5\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"TxWrapper"),"\uff08",Object(o.b)("inlineCode",{parentName:"p"},"removed")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"proposed")," \u5747\u8bbe\u7f6e\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"\uff09\u3002\u7136\u540e\u8f6c\u6362\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"SharedTx")," \u5e76\u63d2\u5165 ",Object(o.b)("inlineCode",{parentName:"p"},"TxCache")," \u4e2d\uff08\u63d2\u5165\u5f53\u524d\u8f6e\u503c\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"queue")," \u7684\u5c3e\u90e8\uff0c\u4ee5\u53ca ",Object(o.b)("inlineCode",{parentName:"p"},"map")," \u4e2d\uff09\u3002 "),Object(o.b)("p",null,"Mempool \u6536\u5230\u5171\u8bc6\u7684\u6253\u5305\u8bf7\u6c42\u65f6\uff0c\u8fd4\u56de ",Object(o.b)("inlineCode",{parentName:"p"},"MixedTxHashes"),"\uff0c\u5176\u4e2d\u5305\u542b\u7528\u4e8e\u5171\u8bc6\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"order_tx_hashes")," \u548c\u7528\u4e8e\u63d0\u524d\u540c\u6b65\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"propose_tx_hashes"),"\u3002"),Object(o.b)("p",null,"\u6253\u5305\u7b97\u6cd5\u5982\u4e0b\uff0c\u4ece\u5f53\u524d\u8f6e\u503c\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"queue")," \u7684\u5934\u90e8\u5f00\u59cb\u5f39\u51fa\u4ea4\u6613\uff0c\u8df3\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"removed = true")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"TxWrapper"),"\uff0c\u76f4\u5230\u8fbe\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"cycle_limit "),"\u4e0a\u9650\u4e3a\u6b62\uff0c\u5c06\u8fd9\u4e9b\u4ea4\u6613\u54c8\u5e0c\u63d2\u5165 ",Object(o.b)("inlineCode",{parentName:"p"},"order_tx_hashes")," \u4e2d\u3002\u7ee7\u7eed\u5f39\u51fa\u4ea4\u6613\uff0c\u8df3\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"proposed = true")," \u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"TxWrapper"),"\uff0c\u76f4\u5230\u8fbe\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"cycle_limit")," \u4e0a\u9650\u4e3a\u6b62\uff0c\u5c06\u8fd9\u4e9b\u4ea4\u6613\u54c8\u5e0c\u63d2\u5165 ",Object(o.b)("inlineCode",{parentName:"p"},"propose_tx_hashes")," \u4e2d\u3002\u4ee5\u4e0a\u5f39\u51fa\u7684\u4ea4\u6613\u9664\u4e86 ",Object(o.b)("inlineCode",{parentName:"p"},"removed = true")," \u7684\u4ea4\u6613\u5916\u90fd\u6309\u7167\u5f39\u51fa\u987a\u5e8f\u63d2\u5165\u5230\u5f53\u524d\u66ff\u8865\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"queue")," \u4e2d\u3002\u5f53\u8f6e\u503c ",Object(o.b)("inlineCode",{parentName:"p"},"queue")," \u5168\u90e8\u5f39\u51fa\u540e\uff0c\u4ea4\u6362\u4e24\u4e2a ",Object(o.b)("inlineCode",{parentName:"p"},"queue")," \u7684\u8eab\u4efd\u3002"),Object(o.b)("p",null,"\u5f53\u8282\u70b9\u6536\u5230\u6765\u81ea leader \u7684 proposal \u65f6\uff0c\u4f1a\u8bf7\u6c42 Mempool \u68c0\u67e5 ",Object(o.b)("inlineCode",{parentName:"p"},"order_tx_hashes")," \u548c ",Object(o.b)("inlineCode",{parentName:"p"},"propose_tx_hashes"),"\u3002Mempool \u901a\u8fc7\u67e5\u8be2 ",Object(o.b)("inlineCode",{parentName:"p"},"TxCache.map")," \u786e\u5b9a\u4ea4\u6613\u662f\u5426\u5b58\u5728\uff0c\u5bf9\u4e8e\u7f3a\u5931\u7684\u4ea4\u6613\u53d1\u8d77\u540c\u6b65\u8bf7\u6c42\u3002\u5bf9\u4e8e\u540c\u6b65\u8fd4\u56de\u7684 order \u4ea4\u6613\u63d2\u5165\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"CallbackCache")," \u4e2d\uff0c\u800c\u5bf9\u4e8e\u540c\u6b65\u8fd4\u56de\u7684 propose \u4ea4\u6613\u5219\u63d2\u5165\u5230 ",Object(o.b)("inlineCode",{parentName:"p"},"TxCache"),"  \u4e2d\uff0c\u5e76\u5c06 ",Object(o.b)("inlineCode",{parentName:"p"},"proposed")," \u8bbe\u7f6e\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"\u3002"),Object(o.b)("p",null,"Mempool \u6536\u5230\u5171\u8bc6\u7684\u5220\u9664\u6307\u5b9a ",Object(o.b)("inlineCode",{parentName:"p"},"tx_hashes")," \u96c6\u5408\u7684\u8bf7\u6c42\u65f6\uff0c\u5148\u6e05\u7a7a ",Object(o.b)("inlineCode",{parentName:"p"},"CallbackCache"),"\uff0c\u7136\u540e\u67e5\u8be2 ",Object(o.b)("inlineCode",{parentName:"p"},"TxCache.map"),"\uff0c\u5c06\u5bf9\u5e94\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"TxWrapper")," \u4e2d\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"removed")," \u8bbe\u7f6e\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"\uff0c\u7136\u540e\u5220\u9664\u8be5 ",Object(o.b)("inlineCode",{parentName:"p"},"SharedTx"),"\u3002"),Object(o.b)("p",null,"Mempool \u7684\u63d2\u5165\u548c\u6253\u5305\u8fc7\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\u3002"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"./static/mempool_process.png",alt:"image"}))),Object(o.b)("p",null,Object(o.b)("sup",Object(r.a)({parentName:"p"},{id:"fnref-1"}),Object(o.b)("a",Object(r.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1"))," compact block: \u538b\u7f29\u533a\u5757\uff0cleader \u53d1\u9001\u7684 proposal \u4e2d\u4ec5\u5305\u542b\u4ea4\u6613\u54c8\u5e0c\uff0c\u6536\u5230 proposal \u7684\u8282\u70b9\u68c0\u67e5\u4ea4\u6613\u54c8\u5e0c\u662f\u5426\u5728\u672c\u5730 Mempool \u4e2d\uff0c\u5982\u679c\u6ca1\u6709\u5219\u5411 leader \u8bf7\u6c42\u7f3a\u5931\u7684\u5b8c\u6574\u4ea4\u6613\u3002\u901a\u8fc7 compact block \u7684\u8bbe\u8ba1\uff0c\u53ef\u4ee5\u51cf\u5c11\u4ea4\u6613\u4f20\u8f93\u91cf\uff0c\u63d0\u9ad8\u5e26\u5bbd\u5229\u7528\u7387\u3002"))}b.isMDXComponent=!0},206:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),b=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=b(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,s=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.a.createElement(s,c({ref:n},i,{components:t})):a.a.createElement(s,c({ref:n},i))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,p[1]=c;for(var i=2;i<o;i++)p[i]=t[i];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);