(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),b=(n(0),n(235)),l={id:"network",title:"P2P Network"},c={id:"docs_zh/advanced/core/network",title:"P2P Network",description:"\u7f51\u7edc\u6a21\u5757\u662f\u4e3a\u5171\u8bc6\u548c\u4ea4\u6613\u6c60\u4e24\u4e2a\u6a21\u5757\u63d0\u4f9b\u6d88\u606f\u6536\u53d1\u7684\u80fd\u529b\u3002",source:"@site/docs/docs_zh/advanced/core/network.md",permalink:"/new-docs/docs/docs_zh/advanced/core/network",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/docs_zh/advanced/core/network.md",sidebar:"docs_zh",previous:{title:"Overlord",permalink:"/new-docs/docs/docs_zh/advanced/core/overlord"},next:{title:"Mempool",permalink:"/new-docs/docs/docs_zh/advanced/core/mempool"}},o=[{value:"\u5b9e\u73b0\u7ec6\u8282",id:"\u5b9e\u73b0\u7ec6\u8282",children:[{value:"\u67b6\u6784\u56fe",id:"\u67b6\u6784\u56fe",children:[]},{value:"\u6587\u4ef6\u5217\u8868",id:"\u6587\u4ef6\u5217\u8868",children:[]},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}]},{value:"\u534f\u8bae",id:"\u534f\u8bae",children:[{value:"\u53d1\u73b0\u534f\u8bae",id:"\u53d1\u73b0\u534f\u8bae",children:[]},{value:"Ping \u534f\u8bae",id:"ping-\u534f\u8bae",children:[]},{value:"\u8bc6\u522b\u534f\u8bae",id:"\u8bc6\u522b\u534f\u8bae",children:[]},{value:"\u4f20\u8f93\u534f\u8bae",id:"\u4f20\u8f93\u534f\u8bae",children:[]}]},{value:"\u8def\u7531",id:"\u8def\u7531",children:[]},{value:"FAQ",id:"faq",children:[]},{value:"\u5410\u54cf",id:"\u5410\u54cf",children:[]}],i={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u7f51\u7edc\u6a21\u5757\u662f\u4e3a\u5171\u8bc6\u548c\u4ea4\u6613\u6c60\u4e24\u4e2a\u6a21\u5757\u63d0\u4f9b\u6d88\u606f\u6536\u53d1\u7684\u80fd\u529b\u3002"),Object(b.b)("p",null,"\u4e3b\u8981\u63d0\u4f9b\u4e24\u79cd\u6d88\u606f\u6536\u53d1\u65b9\u5f0f\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5e7f\u64ad\uff0c\u5305\u542b\u7279\u5b9a\u8303\u56f4\u8282\u70b9\u7684\u591a\u64ad"),Object(b.b)("li",{parentName:"ul"},"RPC\uff0c\u8c03\u7528\u4e0a\u8ff0\u4e24\u4e2a\u6a21\u5757\u5728\u7f51\u7edc\u6ce8\u518c\u7684\u670d\u52a1\uff0c\u6bd4\u5982 Alice \u627e Bob \u7d22\u8981\u4e00\u7b14\u4ea4\u6613\uff0c\u5c31\u662f\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f")),Object(b.b)("p",null,"\u6ce8\uff1a\u5e7f\u64ad\u4fe1\u606f\u4e0d\u4f1a\u88ab\u8f6c\u53d1"),Object(b.b)("p",null,"\u7f51\u7edc\u5b9a\u4e49\u4e86\u4e24\u7ec4\u5e7f\u64ad\u548c RPC \u63a5\u53e3\uff0c\u5171\u8bc6\u548c\u4ea4\u6613\u6c60\u53ef\u8c03\u7528\u4e0a\u8ff0\u63a5\u53e3\u5b8c\u6210\u6d88\u606f\u7684\u53d1\u9001\u3002\u540c\u65f6\u5b9a\u4e49\u4e09\u4e2a\u6ce8\u518c\u56de\u8c03\u51fd\n\u6570\u7684\u63a5\u53e3\u7528\u4e8e\u5904\u7406\u6536\u5230\u7684\u4fe1\u606f\uff0c\u5b83\u4eec\u5206\u522b\u5bf9\u5e94\u5e7f\u64ad\u5904\u7406\uff0cRPC \u8bf7\u6c42\u5904\u7406\u4ee5\u53ca RPC \u8fd4\u56de\u4fe1\u606f\u7684\u6570\u636e\u3002\u5171\u8bc6\u548c\u4ea4\n\u6613\u6c60\u901a\u8fc7\u6ce8\u518c\u56de\u8c03\u51fd\u6570\u7684\u65b9\u5f0f\uff0c\u5b8c\u6210\u81ea\u5df1\u60f3\u8981\u7684\u6d88\u606f\u5904\u7406\u903b\u8f91\u3002"),Object(b.b)("p",null,"\u5176\u4ed6\u57fa\u7840\u4fe1\u606f\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u57fa\u4e8e ",Object(b.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/nervosnetwork/tentacle"}),"tentacle")," \u5b9e\u73b0\uff0c\u4e0e libp2p \u5176\u4ed6\u5b9e\u73b0\u4e0d\u5b8c\u5168\u517c\u5bb9"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 TCP \u8fde\u63a5\uff0c\u652f\u6301 IPv4 \u548c IPv6"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 secio \u65b9\u5f0f\u8fdb\u884c\u673a\u5bc6\u901a\u884c\uff0c\u8eab\u4efd\u6807\u8bc6\u4ece secp256k1 \u516c\u94a5\u6d3e\u751f"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528 yamux \u591a\u8def\u590d\u7528\uff0c\u4e5f\u5373\u5355\u4e00\u8fde\u63a5\u4e0b\uff0c\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u6d88\u606f\u7684\u6df7\u5408\u6536\u53d1"),Object(b.b)("li",{parentName:"ul"},"\u4f7f\u7528\u5355\u4e00\u63a8\u9001\u65b9\u5f0f\u53d1\u73b0\u5176\u4ed6\u8282\u70b9")),Object(b.b)("p",null,"\u76ee\u524d\u8282\u70b9\u4e4b\u95f4\u53ea\u8981\u8bbe\u7f6e\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\u4e3a bootstrap \u8282\u70b9\uff0c\u8fde\u63a5\u540e\u5373\u53ef\u52a0\u5165\u6574\u4e2a\u7f51\u7edc\uff0c\u5e76\u6ca1\u6709\u6743\u9650\u7684\u9650\u5236\u3002\u5f53\n\u7136\u5355\u4e2a\u8282\u70b9\u53ef\u901a\u8fc7\u914d\u7f6e\u7684\u65b9\u5f0f\uff0c\u53ea\u5141\u8bb8\u7279\u5b9a\u7684\u8282\u70b9\u4ee5\u53ca\u5171\u8bc6\u8282\u70b9\u7684\u63a5\u5165\u3002"),Object(b.b)("p",null,"\u8282\u70b9\u4e4b\u95f4\u4f1a\u6709\u76f8\u4e92\u8bc4\u5206\u673a\u5236\uff0c\u8bc4\u5206\u4f9d\u636e\u5171\u8bc6\u548c\u4ea4\u6613\u6c60\u5bf9\u6d88\u606f\u7684\u5904\u7406\u903b\u8f91\uff0c\u7ed9\u53d1\u9001\u6d88\u606f\u7684\u8282\u70b9\u6253\u5206\u3002\u4e25\u91cd\u7684\u9519\n\u8bef\u884c\u4e3a\u6216\u8bc4\u5206\u4f4e\u4e8e 40 \u5206\u90fd\u4f1a\u5bfc\u81f4\u8282\u70b9\u95f4\u7684\u8fde\u63a5\u88ab\u65ad\u5f00\uff0c\u540c\u65f6\u4e00\u6bb5\u65f6\u95f4\u5185\u65e0\u6cd5\u518d\u6b21\u8fde\u63a5\u3002"),Object(b.b)("p",null,"\u8282\u70b9\u4e4b\u95f4\u4e5f\u6709\u5b9a\u671f\u7684\u5fc3\u8df3\u68c0\u67e5\uff0c\u786e\u8ba4\u5f7c\u6b64\u5b89\u5eb7\u3002"),Object(b.b)("h2",{id:"\u5b9e\u73b0\u7ec6\u8282"},"\u5b9e\u73b0\u7ec6\u8282"),Object(b.b)("h3",{id:"\u67b6\u6784\u56fe"},"\u67b6\u6784\u56fe"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"+--------------------+----------------------+\n|      Consensus     |       Mempool        |\n+--------------------+----------------------+\n|              NetworkService(s)            |\n+--------------------+----------------------+\n|        RPC(s)      |       Gossip(s)      |\n+--------------------+----------------------+\n| Peer Manager(s) - Connection(s) - Router  |\n+-------------------------------------------+\n|                  Peer(s)                  |\n+-------------------------------------------+\n")),Object(b.b)("p",null,"\u7c7b actor \u6a21\u578b\uff0c\u7f51\u7edc\u7ec4\u4ef6\u4e4b\u95f4\u901a\u8fc7\u6d88\u606f\u4f20\u9012\u7684\u5f62\u5f0f\u4e92\u52a8\uff0c\u4e0b\u9762\u662f\u4e3b\u8981\u7684\u7f51\u7edc\n\u7ec4\u4ef6\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Compression \u538b\u7f29\u7ec4\u4ef6\uff0c\u6240\u6709\u5171\u8bc6\u548c\u4ea4\u6613\u6c60\u53d1\u51fa\u7684\u6d88\u606f\u90fd\u91c7\u7528 Snappy \u8fdb\u884c\u538b\u7f29\u3002"),Object(b.b)("li",{parentName:"ul"},"Connection \u7c7b\u4f3c\u8fde\u63a5\u6c60\u7684\u6982\u5ff5\uff0c\u8d1f\u8d23\u7ef4\u62a4\u6240\u6709\u53d1\u51fa\u548c\u63a5\u5165\u7684\u8fde\u63a5\uff0c\u5e76\u901a\u8fc7\u6d88\u606f\u4e8b\u4ef6\u7684\u5f62\u5f0f\u901a\u77e5\n\u8282\u70b9\u7ba1\u7406\u7ec4\u4ef6\u3002"),Object(b.b)("li",{parentName:"ul"},"Outbound \u8d1f\u8d23\u5e7f\u64ad\u548c RPC \u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u5b83\u4eec\u901a\u8fc7\u6301\u6709 Connection \u670d\u52a1\u53d1\u51fa\u6d88\u606f\u3002"),Object(b.b)("li",{parentName:"ul"},"PeerManager \u8d1f\u8d23\u8282\u70b9\u7ba1\u7406\uff0c\u5904\u7406 Connection \u53d1\u6765\u7684\u5404\u79cd\u8fde\u63a5\u76f8\u5173\u7684\u4e8b\u4ef6\u6d88\u606f\uff0c\u5171\u8bc6\u548c\u4ea4\u6613\u6c60\n\u5bf9\u8282\u70b9\u7684\u8bc4\u5206\u4e8b\u4ef6\uff0c\u5176\u4ed6\u7684\u534f\u8bae\u5bf9\u8282\u70b9\u4fe1\u606f\u7684\u66f4\u65b0\u4e8b\u4ef6\u7b49\u3002"),Object(b.b)("li",{parentName:"ul"},"Protocols \u6240\u6709\u7f51\u7edc\u534f\u8bae\u7684\u5b9e\u73b0\uff0c\u5305\u62ec\u53d1\u73b0\u534f\u8bae\u3001Ping \u534f\u8bae\u3001\u8bc6\u522b\u534f\u8bae\u3001\u4f20\u8f93\u534f\u8bae\u3002\n\u6ce8\uff1a\u76ee\u524d\u5e7f\u64ad\u548c RPC \u90fd\u662f\u540c\u8fc7\u4f20\u8f93\u534f\u8bae\u5b9e\u73b0\u7684\u3002\u53d1\u73b0\u534f\u8bae\u3001Ping \u534f\u8bae\u3001\u8bc6\u522b\u534f\u8bae\u4f7f\u7528\ntentacle \u5e93\u5185\u7684\u4ee3\u7801\u3002"),Object(b.b)("li",{parentName:"ul"},"Reactor \u5171\u8bc6\u548c\u4ea4\u6613\u6c60\u6ce8\u518c\u4fe1\u606f\u5904\u7406\u903b\u8f91\u8def\u7531\u5668\uff0c\u7c7b\u4f3c\u5feb\u9012\u5458\u89d2\u8272\uff0c\u8d1f\u8d23\u662f\u5c06\u6536\u5230\u7684\u5feb\u9012\u9001\u5230\u76ee\n\u7684\u5730\u5730\u3002"),Object(b.b)("li",{parentName:"ul"},"SelfCheck \u5b9a\u671f\u53d1\u9001\u4e00\u4e9b\u81ea\u68c0\u4fe1\u606f")),Object(b.b)("h3",{id:"\u6587\u4ef6\u5217\u8868"},"\u6587\u4ef6\u5217\u8868"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"network\n   \u251c\u2500\u2500 common.rs                       # \u5e38\u7528\u8f85\u52a9\u51fd\u6570\n   \u251c\u2500\u2500 compression\n   \u2502   \u251c\u2500\u2500 mod.rs\n   \u2502   \u2514\u2500\u2500 snappy.rs                   # snappy \u5b9e\u73b0\u4e0a\u8ff0\u63a5\u53e3\n   \u251c\u2500\u2500 config.rs                       # \u7f51\u7edc\u914d\u7f6e\u5b9a\u4e49\n   \u251c\u2500\u2500 connection\n   \u2502   \u251c\u2500\u2500 control.rs                  # \u5c01\u88c5 tentacle \u63d0\u4f9b\u7684\u53d1\u9001\u63a5\u53e3\n   \u2502   \u251c\u2500\u2500 keeper.rs                   # \u5904\u7406 tentacle \u629b\u51fa\u7684\u5404\u79cd\u8fde\u63a5\u4e8b\u4ef6\n   \u2502   \u2514\u2500\u2500 mod.rs                      # \u8fde\u63a5\u6c60\u914d\u7f6e\u4ee5\u53ca\u5904\u7406\u8282\u70b9\u7ba1\u7406\u53d1\u51fa\u7684\u8fde\u63a5\u6216\u8005\u65ad\u5f00\u8bf7\u6c42\n   \u251c\u2500\u2500 endpoint.rs                     # \u5b9a\u4e49\u5171\u8bc6\u548c\u4ea4\u6613\u6c60\u7684\u6d88\u606f\u8def\u7531\u5730\u5740\u683c\u5f0f\n   \u251c\u2500\u2500 error.rs                        # \u5b9a\u4e49\u7f51\u7edc\u9519\u8bef\n   \u251c\u2500\u2500 event.rs                        # \u5b9a\u4e49\u7f51\u7edc\u7528\u5230\u7684\u6240\u6709\u4e8b\u4ef6\n   \u251c\u2500\u2500 lib.rs\n   \u251c\u2500\u2500 message\n   \u2502   \u251c\u2500\u2500 mod.rs                      # \u5b9a\u4e49\u7f51\u7edc\u4fe1\u606f\u683c\u5f0f\u4ee5\u53ca\u5e8f\u5217\u5316\u548c\u53cd\u5e8f\u5217\u5316\n   \u2502   \u251c\u2500\u2500 serde_multi.rs              # \u8f85\u52a9\u5b9e\u73b0 serde \u5b9a\u4e49\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u51fd\u6570\uff0c\u4f9b\u4ea4\u6613\u6c60\u548c\u5171\u8bc6\u4f7f\u7528\n   \u2502   \u2514\u2500\u2500 serde.rs                    # \u8f85\u52a9\u5b9e\u73b0 serde \u5b9a\u4e49\u7684\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u51fd\u6570\uff0c\u4f9b\u4ea4\u6613\u6c60\u548c\u5171\u8bc6\u4f7f\u7528\n   \u251c\u2500\u2500 metrics.rs                      # Prometheus metrics \u6570\u636e\u53cd\u9988\n   \u251c\u2500\u2500 outbound\n   \u2502   \u251c\u2500\u2500 gossip.rs                   # \u5e7f\u64ad\u63a5\u53e3\u5b9e\u73b0\n   \u2502   \u251c\u2500\u2500 mod.rs\n   \u2502   \u2514\u2500\u2500 rpc.rs                      # RPC \u63a5\u53e3\u5b9e\u73b0\n   \u251c\u2500\u2500 peer_manager\n   \u2502   \u251c\u2500\u2500 addr_set.rs                 # \u8282\u70b9\u5730\u5740\u4fe1\u606f\u7ef4\u62a4\n   \u2502   \u251c\u2500\u2500 diagnostic.rs               # \u7528\u4e8e\u8f85\u52a9\u6d4b\u8bd5\u65f6\u4f7f\u7528\uff0c\u66b4\u9732\u8282\u70b9\u7ba1\u7406\u5185\u90e8\u72b6\u6001\n   \u2502   \u251c\u2500\u2500 mod.rs\n   \u2502   \u251c\u2500\u2500 peer.rs                     # \u8282\u70b9\u5b9a\u4e49\n   \u2502   \u251c\u2500\u2500 retry.rs                    # \u8282\u70b9\u91cd\u8bd5\u6b21\u6570\u7ba1\u7406\n   \u2502   \u251c\u2500\u2500 save_restore.rs             # \u8282\u70b9\u4fe1\u606f\u6301\u4e45\u5316\uff0c\u6682\u65f6\u53ea\u4fdd\u5b58\u5230\u6587\u4ef6\n   \u2502   \u251c\u2500\u2500 shared.rs                   # \u5f53\u524d\u8fde\u63a5\u7684\u6240\u6709\u8282\u70b9\u4fe1\u606f\u8bb0\u5f55\n   \u2502   \u251c\u2500\u2500 tags.rs                     # \u8282\u70b9\u7684 tag \u7ba1\u7406\n   \u2502   \u251c\u2500\u2500 test_manager.rs             # \u8282\u70b9\u7ba1\u7406\u5355\u5143\u6d4b\u8bd5\n   \u2502   \u251c\u2500\u2500 time.rs                     # \u65f6\u95f4\u5904\u7406\n   \u2502   \u2514\u2500\u2500 trust_metric.rs             # \u8282\u70b9\u6253\u5206\u5b9e\u73b0\n   \u251c\u2500\u2500 protocols\n   \u2502   \u251c\u2500\u2500 core.rs\n   \u2502   \u251c\u2500\u2500 discovery                   # \u53d1\u73b0\u534f\u8bae\n   \u2502   \u2502   \u251c\u2500\u2500 addr.rs                 # \u5730\u5740\u7ba1\u7406\n   \u2502   \u2502   \u251c\u2500\u2500 behaviour.rs            # \u6d88\u606f\u5904\u7406\n   \u2502   \u2502   \u251c\u2500\u2500 message.rs              # \u6d88\u606f\u5b9a\u4e49\n   \u2502   \u2502   \u251c\u2500\u2500 protocol.rs             # \u6d88\u606f\u89e3\u6790\n   \u2502   \u2502   \u2514\u2500\u2500 substream.rs            # \u62bd\u8c61\u7684\u6d88\u606f\u6d41\n   \u2502   \u251c\u2500\u2500 discovery.rs\n   \u2502   \u251c\u2500\u2500 identify                    # Identify \u534f\u8bae\n   \u2502   \u2502   \u251c\u2500\u2500 behaviour.rs            # \u6d88\u606f\u5904\u7406\n   \u2502   \u2502   \u251c\u2500\u2500 common.rs               # \u901a\u7528\u8f85\u52a9\u51fd\u6570\n   \u2502   \u2502   \u251c\u2500\u2500 message.rs              # \u6d88\u606f\u5b9a\u4e49\n   \u2502   \u2502   \u2514\u2500\u2500 protocol.rs             # \u6d88\u606f\u89e3\u6790\n   \u2502   \u251c\u2500\u2500 identify.rs\n   \u2502   \u251c\u2500\u2500 macro.rs\n   \u2502   \u251c\u2500\u2500 mod.rs\n   \u2502   \u251c\u2500\u2500 ping                        # Ping \u534f\u8bae\n   \u2502   \u2502   \u251c\u2500\u2500 behaviour.rs            # \u6d88\u606f\u5904\u7406\n   \u2502   \u2502   \u251c\u2500\u2500 message.rs              # \u6d88\u606f\u5b9a\u4e49\n   \u2502   \u2502   \u2514\u2500\u2500 protocol.rs             # \u6d88\u606f\u89e3\u6790\n   \u2502   \u251c\u2500\u2500 ping.rs\n   \u2502   \u251c\u2500\u2500 transmitter                 # \u4f20\u8f93\u534f\u8bae\n   \u2502   \u2502   \u251c\u2500\u2500 behaviour.rs            # \u6d88\u606f\u5904\u7406\n   \u2502   \u2502   \u251c\u2500\u2500 message.rs              # \u6d88\u606f\u5b9a\u4e49\n   \u2502   \u2502   \u2514\u2500\u2500 protocol.rs             # \u6d88\u606f\u89e3\u6790\n   \u2502   \u2514\u2500\u2500 transmitter.rs\n   \u251c\u2500\u2500 reactor\n   \u2502   \u251c\u2500\u2500 mod.rs                      # \u5171\u8bc6\u548c\u4ea4\u6613\u6c60\u56de\u8c03\u903b\u8f91\u5904\u7406\n   \u2502   \u2514\u2500\u2500 router.rs                   # \u4f20\u8f93\u534f\u8bae\u6536\u5230\u7684\u6d88\u606f\u8def\u7531\n   \u251c\u2500\u2500 rpc_map.rs                      # \u7ef4\u62a4 RPC \u8bf7\u6c42\u7684\u72b6\u6001\u8868\n   \u251c\u2500\u2500 rpc.rs                          # \u5b9a\u4e49 RPC \u4fe1\u606f\u7684\u683c\u5f0f\n   \u251c\u2500\u2500 selfcheck.rs                    # \u81ea\u68c0\u670d\u52a1\n   \u251c\u2500\u2500 service.rs                      # \u6574\u4e2a\u7f51\u7edc\u670d\u52a1\u7684\u6784\u9020\n   \u251c\u2500\u2500 test\n   \u2502   \u2514\u2500\u2500 mock.rs                     # \u5355\u5143\u6d4b\u8bd5\u9700\u8981 mock \u7684 tentacle \u6570\u636e\u7c7b\u578b\n   \u251c\u2500\u2500 test.rs                         # \u7f51\u7edc\u6a21\u5757\u5185\u90e8\u7ec4\u4ef6\u95f4\u4ea4\u4e92\u7684\u63a5\u53e3\u5b9a\u4e49\n   \u2514\u2500\u2500 traits.rs\n\n15 directories, 64 files\n")),Object(b.b)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"bootstraps"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7a7a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"bootstraps \u8282\u70b9\u7684\u5217\u8868\uff0c\u4e3a\u8282\u70b9\u7684 peer id, Base58 \u7f16\u7801 \u4ee5\u53ca ",Object(b.b)("inlineCode",{parentName:"td"},"host:port")," \u683c\u5f0f\u7684\u5730\u5740")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"allowlist"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7a7a"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u767d\u540d\u5355\u8282\u70b9\u5217\u8868\uff0c\u4e3a\u8282\u70b9\u7684 peer id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"allowlist_only"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"false"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u53ea\u8fde\u63a5\u767d\u540d\u5355\u5185\u7684\u8282\u70b9\uff0c\u5171\u8bc6\u8282\u70b9\u4f1a\u81ea\u52a8\u52a0\u5165\u767d\u540d\u5355")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"trust_interval_duration"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"60"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8282\u70b9\u6253\u5206\u7cfb\u7edf\u6240\u4f7f\u7528\u7684\u6253\u5206\u5468\u671f\u65f6\u957f\uff0c\u5355\u4f4d\u4e3a\u79d2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"trust_max_history_duration"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"24 ",Object(b.b)("em",{parentName:"td"}," 60 ")," 60 * 10 = 10 \u5929"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u8282\u70b9\u6253\u5206\u7cfb\u7edf\u4fdd\u5b58\u7684\u5386\u53f2\u5468\u671f\u65f6\u957f\uff0c\u5355\u4f4d\u4e3a\u79d2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"fatal_ban_duration"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"60 * 60 = 1 \u5c0f\u65f6"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u56e0\u4e25\u91cd\u9519\u8bef\u884c\u4e3a\u5bfc\u81f4\u8282\u70b9\u65ad\u5f00\u540e\uff0c\u62d2\u7edd\u518d\u6b21\u8fde\u63a5\u7684\u65f6\u957f\uff0c\u5355\u4f4d\u4e3a\u79d2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"soft_ban_duration"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"60 * 10 = 10 \u5206\u949f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u56e0\u4e00\u822c\u9519\u8bef\u884c\u4e3a\u5bfc\u81f4\u8282\u70b9\u65ad\u5f00\u540e\uff0c\u62d2\u7edd\u518d\u6b21\u8fde\u63a5\u7684\u65f6\u957f\uff0c\u5355\u4f4d\u4e3a\u79d2")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"max_connected_peers"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"40"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6700\u5927\u8fde\u63a5\u8282\u70b9\u6570\u91cf")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"listening_address"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'"0.0.0.0:2337"'),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u76d1\u542c\u5730\u5740")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rpc_timeout"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"10"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"rpc \u8bf7\u6c42\u8d85\u65f6\u54cd\u5e94\u65f6\u95f4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"selfcheck_interval"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"30"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u7f51\u7edc\u81ea\u68c0\u95f4\u9694\u5468\u671f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"send_buffer_size"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"24 ",Object(b.b)("em",{parentName:"td"}," 1024 ")," 1024 = 24 MiB"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u53d1\u9001\u7f13\u5b58\u5927\u5c0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"write_timeout"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"10"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u53d1\u9001\u8d85\u65f6\u54cd\u5e94\u65f6\u95f4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"recv_buffer_size"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"24 ",Object(b.b)("em",{parentName:"td"}," 1024 ")," 1024 = 24 MiB"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53d7\u7f13\u5b58\u5927\u5c0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"max_frame_length"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4 ",Object(b.b)("em",{parentName:"td"}," 1024 ")," 1024 = 4 MiB"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6700\u5927\u7a97\u53e3\u5927\u5c0f")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"max_wait_streams"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"256"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u6700\u5927\u5f85\u54cd\u5e94\u7684\u534f\u8bae\u6d41\u6570\u91cf")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ping_interval"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"15"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Ping \u534f\u8bae\u53d1\u9001\u95f4\u9694\u65f6\u957f\uff0c\u5355\u4f4d\u4e3a\u79d2")))),Object(b.b)("h2",{id:"\u534f\u8bae"},"\u534f\u8bae"),Object(b.b)("h3",{id:"\u53d1\u73b0\u534f\u8bae"},"\u53d1\u73b0\u534f\u8bae"),Object(b.b)("p",null,"Muta \u76ee\u524d\u4f7f\u7528\u7684\u53d1\u73b0\u534f\u8bae\u57fa\u4e8e ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nervosnetwork/tentacle/tree/master/protocols/discovery"}),"tentacle-discovery")," \uff0c\u5e76\u6709\u7565\u5fae\u4fee\u6539\u3002"),Object(b.b)("p",null,"\u539f\u534f\u8bae\u4ee3\u7801\u53ea\u80fd\u5206\u4eab ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://doc.rust-lang.org/std/net/enum.SocketAddr.html"}),"SocketAddr"),' \u5b9a\u4e49\u7684\u8282\u70b9\u76d1\u542c\u5730\u5740\uff0c\u800c\u4fee\u6539\u540e\u7684\u7248\u672c\u652f\u6301\u5206\u4eab "hostname:port"\n\u53ef\u7528 DNS \u89e3\u6790\u7684\u5730\u5740\u3002'),Object(b.b)("h4",{id:"\u6d88\u606f"},"\u6d88\u606f"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"union DiscoveryPayload {\n    GetNodes,\n    Nodes,\n}\n\ntable GetNodes {\n    version: Uint32,\n    count: Uint32,\n    listen_port: PortOpt,\n}\n\ntable Nodes {\n    announce: Bool,\n    items: NodeVec,\n}\n\ntable Node {\n    addresses: BytesVec,\n}\n")),Object(b.b)("p",null,"\u5b8c\u6574\u7684\u6d88\u606f\u5b9a\u4e49\u8bf7\u770b ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nervosnetwork/tentacle/blob/master/protocols/discovery/src/protocol.mol"}),"protocol.mol")),Object(b.b)("p",null,"\u53d1\u73b0\u534f\u8bae\u4e3b\u8981\u662f\u4e24\u79cd\u7c7b\u578b\u7684\u6d88\u606f\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"GetNodes"),Object(b.b)("li",{parentName:"ul"},"Nodes")),Object(b.b)("h5",{id:"getnodes"},"GetNodes"),Object(b.b)("p",null,"\u7528\u4e8e\u7d22\u8981\u5176\u4ed6\u8282\u70b9\u7684\u4fe1\u606f\uff0cversion \u76ee\u524d\u662f\u56fa\u5b9a\u503c 0 \u4e0d\u7528\u7ba1\u3002count \u5219\u662f\u7d22\u8981\u7684\u6700\u5927\u8282\u70b9\u4fe1\u606f\u7684\u6761\u6570\uff0c\u800c listen_port \u5219\u662f\u672c\u8282\u70b9\u81ea\u8eab\u7684\u76d1\u542c\u7aef\u53e3\uff0c\n\u5bf9\u4e8e\u8fde\u5165\u7c7b\u578b\u7684\u8fde\u63a5\uff0c\u5176\u7aef\u53e3\u53f7\u4e3a\u7cfb\u7edf\u968f\u673a\u5206\u914d\u7684\u7aef\u53e3\uff0c\u6b64\u65f6\u8282\u70b9\u6709\u5fc5\u8981\u53d1\u9001 listen_port \u66f4\u65b0\u81ea\u5df1\u7684\u771f\u5b9e\u76d1\u542c\u7aef\u53e3\u3002"),Object(b.b)("p",null,"\u5f53\u524d\u6700\u5927\u53d1\u9001\u8282\u70b9\u6570\u91cf\u4e3a 1000 \u56fa\u5b9a\u503c\u3002"),Object(b.b)("p",null,"\u4f1a\u5bfc\u81f4\u65ad\u5f00\u7684\u9519\u8bef\u884c\u4e3a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"GetNodes \u6d88\u606f\u53ea\u80fd\u8bf7\u6c42\u4e00\u6b21\uff0c\u91cd\u590d\u8bf7\u6c42\u4f1a\u5bfc\u81f4\u65ad\u5f00\u3002")),Object(b.b)("h5",{id:"nodes"},"Nodes"),Object(b.b)("p",null,"\u7528\u4e8e\u53d1\u9001\u8282\u70b9\u4fe1\u606f\uff0cannounce \u7528\u4e8e\u6807\u8bc6\u6536\u5230\u7684\u8282\u70b9\u4fe1\u606f\u4e3a\u672c\u8282\u70b9\u4e3b\u52a8\u7d22\u53d6\u7684\u8fd8\u662f\u5bf9\u65b9\u53d1\u5e03\u7684\u3002\n\u5f53\u7d2f\u8ba1\u7684\u65b0\u8282\u70b9\u6570\u91cf\u8d85\u8fc7 1000 \u6216\u8005\u95f4\u9694 24 \u5c0f\u65f6\uff0c\u4f1a\u89e6\u53d1\u4e00\u6b21\u53d1\u5e03\u884c\u4e3a\u3002"),Object(b.b)("p",null,"\u4f1a\u5bfc\u81f4\u65ad\u5f00\u7684\u9519\u8bef\u884c\u4e3a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u5355\u4e2a PeerId \u6700\u591a 3 \u4e2a\u5730\u5740"),Object(b.b)("li",{parentName:"ul"},"\u77ed\u65f6\u95f4\u5185\u91cd\u590d\u63a8\u9001\u8282\u70b9\u4fe1\u606f"),Object(b.b)("li",{parentName:"ul"},"\u8282\u70b9\u4fe1\u606f\u6570\u91cf\u8d85\u8fc7 1000 \u4e2a")),Object(b.b)("h3",{id:"ping-\u534f\u8bae"},"Ping \u534f\u8bae"),Object(b.b)("p",null,"Muta \u76ee\u524d\u4f7f\u7528\u7684 Ping \u534f\u8bae\u57fa\u4e8e ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nervosnetwork/tentacle/tree/master/protocols/ping"}),"tentacle-ping")," \u3002"),Object(b.b)("h4",{id:"\u6d88\u606f-1"},"\u6d88\u606f"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"union PingPayload {\n    Ping,\n    Pong,\n}\n\ntable PingMessage {\n    payload:        PingPayload,\n}\n\ntable Ping {\n    nonce: Uint32,\n}\n\ntable Pong {\n    nonce: Uint32,\n}\n")),Object(b.b)("p",null,"Ping \u534f\u8bae\u672c\u8eab\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u91cd\u590d\u6211\u7ed9\u4f60\u7684\u6570\u5b57\uff0c\u5b83\u4e3b\u8981\u7684\u4f5c\u7528\u5305\u62ec\u5fc3\u8df3\u68c0\u67e5\uff0c\u6d88\u606f\u7684\u5ef6\u8fdf\u4fe1\u606f\u7b49\u3002"),Object(b.b)("p",null,"\u4e0d\u53ca\u65f6\u56de\u590d\u6570\u5b57\uff0c\u6216\u8005\u56de\u590d\u9519\u8bef\u7684\u6570\u5b57\u90fd\u4f1a\u964d\u4f4e\u81ea\u8eab\u5728\u5bf9\u7aef\u8282\u70b9\u6253\u5206\u7cfb\u7edf\u5185\u7684\u5206\u6570\uff0c\u4f4e\u4e8e\u4e00\u5b9a\u5206\u6570\u4f1a\u5bfc\u81f4\u8fde\u63a5\u65ad\u5f00\u3002"),Object(b.b)("h3",{id:"\u8bc6\u522b\u534f\u8bae"},"\u8bc6\u522b\u534f\u8bae"),Object(b.b)("p",null,"Muta \u76ee\u524d\u4f7f\u7528\u7684\u8bc6\u522b\u534f\u8bae\u540c\u6837\u57fa\u4e8e ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nervosnetwork/tentacle/tree/master/protocols/identify"}),"tentacle-identify")," \u3002"),Object(b.b)("h4",{id:"\u6d88\u606f-2"},"\u6d88\u606f"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),"table Address {\n    bytes: Bytes,\n}\n\ntable IdentifyMessage {\n    // These are the addresses on which the peer is listening as multi-addresses.\n    listen_addrs: AddressVec,\n    // Observed each other's ip\n    observed_addr: Address,\n    // Custom message to indicate self ability, such as list protocols supported\n    identify: Bytes,\n}\n")),Object(b.b)("p",null,"\u8be5\u534f\u8bae\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u5e2e\u52a9\u8282\u70b9\u5224\u65ad\u81ea\u5df1\u662f\u5426\u76d1\u542c\u5728\u516c\u5f00\u7684\u5916\u90e8\u53ef\u76f4\u63a5\u8bbf\u95ee\u7684\u5730\u5740\u4e0a\uff0c\u76ee\u524d Muta \u8981\u6c42\u8282\u70b9\u5fc5\u987b\n\u76d1\u542c\u5728\u516c\u5f00\u53ef\u8bbf\u95ee\u7684\u5730\u5740\u4e0a\uff0c\u6682\u65f6\u5e76\u65e0\u591a\u5927\u7528\u5904\u3002"),Object(b.b)("p",null,"\u4f46\u9519\u8bef\u8fd4\u56de\u4fe1\u606f\u4f9d\u7136\u4f1a\u5bfc\u81f4\u8282\u70b9\u76f4\u63a5\u65ad\u5f00\uff0c\u6bd4\u5982"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u53d1\u9001\u91cd\u590d\u7684\u76d1\u542c\u5730\u5740"),Object(b.b)("li",{parentName:"ul"},"\u53d1\u9001\u91cd\u590d\u7684\u89c2\u6d4b\u5730\u5740"),Object(b.b)("li",{parentName:"ul"},"\u4e00\u6b21\u53d1\u9001\u8d85\u8fc7 10 \u4e2a\u5730\u5740"),Object(b.b)("li",{parentName:"ul"},"\u65e0\u6548\u4fe1\u606f"),Object(b.b)("li",{parentName:"ul"},"\u8d85\u65f6")),Object(b.b)("h3",{id:"\u4f20\u8f93\u534f\u8bae"},"\u4f20\u8f93\u534f\u8bae"),Object(b.b)("p",null,"Muta \u76ee\u524d\u7684\u5e7f\u64ad\u548c RPC \u534f\u8bae\u90fd\u57fa\u4e8e\u4f20\u8f93\u534f\u8bae\u5b9e\u73b0\uff0c\u4f20\u8f93\u534f\u8bae\u5f88\u7b80\u5355\uff0c\u5b83\u53ea\u662f\u8d1f\u8d23\u5c06\u6536\u5230\u7684\u4fe1\u606f\u53d1\u9001\u7ed9\u4e0a\u9762\u63d0\u5230\u7684\n\u903b\u8f91\u8def\u7531\u5668\u3002"),Object(b.b)("h4",{id:"\u6d88\u606f-3"},"\u6d88\u606f"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'pub struct NetworkMessage {\n    #[prost(map = "string, bytes", tag = "1")]\n    pub headers: HashMap<String, Vec<u8>>,\n\n    #[prost(string, tag = "2")]\n    pub url: String,\n\n    #[prost(bytes, tag = "3")]\n    pub content: Vec<u8>,\n}\n')),Object(b.b)("p",null,"\u5176\u4e2d headers \u7528\u4e8e\u4fdd\u5b58\u4e00\u4e9b\u901a\u7528\u7684\u5934\u90e8\u4fe1\u606f\uff0c\u6bd4\u5982 Jaeger \u7684 trace id \u3002url \u5219\u662f\u4fe1\u606f\u6295\u9012\u7684\u76ee\u7684\u5730\u5740\uff0c\n\u6bd4\u5982 ",Object(b.b)("inlineCode",{parentName:"p"},"/gossip/mempool/new_txs"),"\uff0c\u63cf\u8ff0\u7684\u5c31\u662f\u4ea4\u6613\u6c60\u6ce8\u518c\u7528\u4e8e\u63a5\u53d7\u65b0\u4ea4\u6613\u7684\u5730\u5740\u3002content \u81ea\u7136\u5c31\u662f\u4fe1\u606f\n\u672c\u4f53\u3002"),Object(b.b)("p",null,"\u4f20\u8f93\u534f\u8bae\u4f1a\u8d1f\u8d23\u5c06\u4fe1\u606f\u91c7\u7528 protobuf \u7684\u65b9\u5f0f\u89e3\u7801\u540e\uff0c\u8f6c\u7ed9\u8def\u7531\u5668\u5904\u7406\u3002"),Object(b.b)("h2",{id:"\u8def\u7531"},"\u8def\u7531"),Object(b.b)("p",null,"\u90a3\u4e48\u5e7f\u64ad\u548c RPC \u7684\u6d88\u606f\u4ee5\u53ca\u5904\u7406\u903b\u8f91\u662f\u5982\u4f55\u8f7d\u5165\u7f51\u7edc\u7684\u5462\uff1f"),Object(b.b)("p",null,"\u7f51\u7edc\u6a21\u5757\u5b9a\u4e49\u4e86\u5982\u4e0b\u7684\u6ce8\u518c\u63a5\u53e3"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"    pub fn register_endpoint_handler<M>(&mut self, end: &str, handler: Box<dyn MessageHandler<Message = M>>) -> ProtocolResult<()>\n    where\n        M: MessageCodec;\n")),Object(b.b)("p",null,"\u53ef\u4ee5\u770b\u5230\u63a5\u53e3\u4e2d\u6709 ",Object(b.b)("inlineCode",{parentName:"p"},"end")," endpoint \u8fd9\u4e2a\u53c2\u6570\uff0c\u5b83\u5c31\u662f\u4e0a\u9762\u4f20\u8f93\u534f\u8bae\u4e2d\u63d0\u5230\u7684 url \uff0c\u800c ",Object(b.b)("inlineCode",{parentName:"p"},"handler")," \u5c31\u662f\u88ab\u6ce8\u518c\u7684\u6d88\u606f\u5904\u7406\u903b\u8f91\u3002\nendpoint \u548c handler \u4f1a\u4fdd\u5b58\u5230\u8def\u7531\u6a21\u5757\u7684\u54c8\u5e0c\u8868\u4e2d\uff0c\u5f53\u4f20\u8f93\u534f\u8bae\u5c06\u6536\u5230\u7684\u4fe1\u606f\u89e3\u7801\u540e\uff0c\u901a\u8fc7 url \u5c31\u81ea\u7136\u80fd\u591f\u627e\u5230\u5bf9\u5e94\u7684\u6d88\u606f\u5904\u7406\u903b\u8f91\u4e86\u3002"),Object(b.b)("h2",{id:"faq"},"FAQ"),Object(b.b)("p",null,"1\u3001tentacle \u548c libp2p \u5176\u4ed6\u5b9e\u73b0\u6709\u54ea\u4e9b\u4e0d\u517c\u5bb9\u7684\u5730\u65b9\u5462\uff1f"),Object(b.b)("p",null,"\u53ef\u4ee5\u770b\u8fd9\u91cc\u7684\u6587\u6863 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/driftluo/tentacle/blob/master/docs/introduction_zh.md#%E4%B8%8D%E5%85%BC%E5%AE%B9"}),"tentacle-introduction_zh")),Object(b.b)("p",null,"2\u3001\u8282\u70b9\u6253\u5206\u7cfb\u7edf\u662f\u57fa\u4e8e\u4ec0\u4e48\u8bbe\u8ba1\u7684\u5462\uff1f"),Object(b.b)("p",null,"\u53ef\u4ee5\u770b\u8fd9\u91cc\u7684\u8bba\u6587 ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://dl.acm.org/citation.cfm?id=1060808"}),"TrustGuard")),Object(b.b)("p",null,"3\u3001\u4e3a\u4ec0\u4e48\u628a\u5e7f\u64ad\u548c RPC \u90fd\u6302\u5728\u540c\u4e00\u4e2a\u4f20\u8f93\u534f\u8bae\u4e0b\u9762\u5462\uff1f"),Object(b.b)("p",null,"\u4f20\u8f93\u534f\u8bae\u5f88\u7b80\u5355\uff0c\u6536\u5230\u89e3\u7801\u540e\u9a6c\u4e0a\u5c31\u8f6c\u53d1\u7ed9\u8def\u7531\u5668\u4e86\u3002\u4e5f\u5b9e\u9645\u6d4b\u8bd5\u8fc7\u5206\u591a\u4e2a\u6d41\uff0c\u5e76\u6ca1\u6709\u63d0\u9ad8\n\u6027\u80fd\u3002\u672a\u6765\u4e5f\u8bb8\u5207\u6362\u5230 Quic \u540e\uff0c\u5206\u6d41\u6570\u4f1a\u6709\u66f4\u597d\u7684\u8868\u73b0\u5427\u3002"),Object(b.b)("h2",{id:"\u5410\u54cf"},"\u5410\u54cf"),Object(b.b)("p",null,"\u7f51\u7edc\u6a21\u5757\u8fd8\u4f1a\u7ee7\u7eed\u4f18\u5316\u8c03\u6574\uff0c\u6b22\u8fce\u4ea4\u6d41\u5410\u54cf\u3002"))}p.isMDXComponent=!0},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),s=p(n),O=r,u=s["".concat(l,".").concat(O)]||s[O]||d[O]||b;return n?a.a.createElement(u,c({ref:t},i,{components:n})):a.a.createElement(u,c({ref:t},i))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,l=new Array(b);l[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<b;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);