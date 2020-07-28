(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(1),b=a(6),r=(a(0),a(206)),c={title:"Genesis Configuration",description:"The fundamental Muta concepts. A great place to start learning about Muta."},i={id:"setup/genesis-config",title:"Genesis Configuration",description:"The fundamental Muta concepts. A great place to start learning about Muta.",source:"@site/docs/setup/genesis-config.md",permalink:"/new-docs/docs/setup/genesis-config",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/setup/genesis-config.md",sidebar:"docs",previous:{title:"Configuration",permalink:"/new-docs/docs/setup/config"},next:{title:"Node Configuration",permalink:"/new-docs/docs/setup/node-config"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Full list of blockchain parameters",id:"full-list-of-blockchain-parameters",children:[{value:"Initialization parameters",id:"initialization-parameters",children:[]},{value:"Asset service parameters",id:"asset-service-parameters",children:[]},{value:"Metadata service parameters",id:"metadata-service-parameters",children:[]}]}],O={rightToc:l};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this section we will understand how to customize genesis parameters in ",Object(r.b)("inlineCode",{parentName:"p"},"devtools/chain/genesis.toml")," which affect the entire chain and network. "),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Genesis parameters are global to a blockchain, and most of them are critical to that blockchain\u2019s consensus. Once the blockchain is initialized, most of these parameters cannot be changed. However, a small number can be updated using the metadata service and are marked as Upgradable below. All the nodes in a blockchain network should share the same ",Object(r.b)("inlineCode",{parentName:"p"},"genesis.toml"),"."),Object(r.b)("p",null,"Let's take a look at ",Object(r.b)("inlineCode",{parentName:"p"},"devtools/chain/genesis.toml"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'timestamp = 0\nprevhash = "0x44915be5b6c20b0678cf05fcddbbaa832e25d7e6ac538784cd5c24de00d47472"\n\n[[services]]\nname = "asset"\npayload = \'\'\'\n{\n    "id": "0xf56924db538e77bb5951eb5ff0d02b88983c49c45eea30e8ae3e7234b311436c",\n    "name": "MutaToken",\n    "symbol": "MT",\n    "supply": 320000011,\n    "issuer": "0xf8389d774afdad8755ef8e629e5a154fddc6325a"\n}\n\'\'\'\n\n[[services]]\nname = "metadata"\npayload = \'\'\'\n{\n    "chain_id": "0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",\n    "common_ref": "0x703873635a6b51513451",\n    "timeout_gap": 20,\n    "cycles_limit": 4294967295,\n    "cycles_price": 1,\n    "interval": 3000,\n    "verifier_list": [\n        {\n            "bls_pub_key": "0x04188ef9488c19458a963cc57b567adde7db8f8b6bec392d5cb7b67b0abc1ed6cd966edc451f6ac2ef38079460eb965e890d1f576e4039a20467820237cda753f07a8b8febae1ec052190973a1bcf00690ea8fc0168b3fbbccd1c4e402eda5ef22",\n            "address": "0xf8389d774afdad8755ef8e629e5a154fddc6325a",\n            "propose_weight": 1,\n            "vote_weight": 1\n        }\n    ],\n    "propose_ratio": 15,\n    "prevote_ratio": 10,\n    "precommit_ratio": 10,\n    "brake_ratio": 7,\n    "tx_num_limit": 20000,\n    "max_tx_size": 1024\n}\n\'\'\'\n')),Object(r.b)("p",null,"Let\u2019s go line-by-line and understand what each parameter means."),Object(r.b)("h2",{id:"full-list-of-blockchain-parameters"},"Full list of blockchain parameters"),Object(r.b)("h3",{id:"initialization-parameters"},"Initialization parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"timestamp")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"timestamp of genesis block, can be set to arbitrary timestamp. For example, it can be 0 or 00:00 on some day."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"prevhash")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"can be set to arbitrary value."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("h3",{id:"asset-service-parameters"},"Asset service parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"id")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8d44\u4ea7\u7684\u552f\u4e00 id\uff0c\u5efa\u8bae\u8bbe\u7f6e\u6210 hash \uff0c\u4ee5\u514d\u5728\u4e4b\u540e\u548c\u94fe\u4e0a\u5176\u4ed6\u8d44\u4ea7\u91cd\u590d"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8d44\u4ea7\u540d\u5b57"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0x"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"symbol")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8d44\u4ea7\u7b80\u79f0"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"supply")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8d44\u4ea7\u53d1\u884c\u603b\u91cf"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"issuer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u53d1\u884c\u65b9\u5730\u5740"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("h3",{id:"metadata-service-parameters"},"Metadata service parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"chain_id")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u94fe\u552f\u4e00 id\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u4efb\u610f hash"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"common_ref")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"BLS \u7b7e\u540d\u9700\u8981"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"timeout_gap")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u4ea4\u6613\u6c60\u80fd\u63a5\u53d7\u7684\u6700\u5927\u8d85\u65f6\u5757\u8303\u56f4\u3002\u7528\u6237\u5728\u53d1\u9001\u4ea4\u6613\u7684\u65f6\u5019\uff0c\u9700\u8981\u586b\u5199 ",Object(r.b)("inlineCode",{parentName:"td"},"timeout")," \u5b57\u6bb5\uff0c\u8868\u793a\u5757\u9ad8\u5ea6\u8d85\u8fc7\u8fd9\u4e2a\u503c\u540e\uff0c\u5982\u679c\u8be5\u4ea4\u6613\u8fd8\u6ca1\u6709\u88ab\u6253\u5305\uff0c\u5219\u4ee5\u540e\u90fd\u4e0d\u4f1a\u88ab\u6253\u5305\uff0c\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u4e4b\u524d\u7684\u67d0\u7b14\u4ea4\u6613\u8d85\u65f6\u540e\u4e00\u5b9a\u4f1a\u5931\u8d25\uff0c\u907f\u514d\u7528\u6237\u7684\u4ea4\u6613\u5f88\u957f\u65f6\u95f4\u672a\u88ab\u6253\u5305\u540e\u6362 ",Object(r.b)("inlineCode",{parentName:"td"},"nonce")," \u91cd\u53d1\u4ea4\u6613\uff0c\u7ed3\u679c\u4e24\u7b14\u4ea4\u6613\u90fd\u4e0a\u94fe\u7684\u60c5\u51b5\u3002\u5f53\u7528\u6237\u586b\u5199\u7684 ",Object(r.b)("inlineCode",{parentName:"td"},"timeout")," > ",Object(r.b)("inlineCode",{parentName:"td"},"chain_current_height")," + ",Object(r.b)("inlineCode",{parentName:"td"},"timeout_gap")," \u65f6\uff0c\u4ea4\u6613\u6c60\u4f1a\u62d2\u7edd\u8fd9\u7b14\u4ea4\u6613\u3002\u8003\u8651\u5230\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\uff08\u6bd4\u5982\u4e00\u4e9b\u51b7\u94b1\u5305\u5bf9\u4ea4\u6613\u7b7e\u540d\u540e\u8f83\u957f\u65f6\u95f4\u624d\u53d1\u51fa\uff09\uff0c\u8be5\u503c\u53ef\u4ee5\u9002\u5f53\u8c03\u5927"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"cycles_limit")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10\u8fdb\u5236\uff0c\u94fe\u7ea7\u522b\u5bf9\u5355\u4e2a\u4ea4\u6613\u53ef\u4ee5\u6d88\u8017\u7684\u6700\u5927 ",Object(r.b)("inlineCode",{parentName:"td"},"cycle")," \u7684\u9650\u5236"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1000000"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"cycles_price")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u6700\u5c0f cycle \u4ef7\u683c\uff0c\u76ee\u524d\u6ca1\u6709\u4f7f\u7528"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"interval")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u51fa\u5757\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a ms\u3002\u5f53\u8bbe\u7f6e\u4e3a 3s \u7684\u65f6\u5019\uff0c\u51fa\u5757\u95f4\u9694\u5e76\u4e0d\u662f\u4e25\u683c\u7684 3s\uff0c\u800c\u662f\u5728 3s \u9644\u8fd1\u6ce2\u52a8\uff0c\u8fd9\u662f\u56e0\u4e3a Overlord \u5171\u8bc6\u5728\u54cd\u5e94\u6027\u4e0a\u7684\u4f18\u5316\u3002\u5f53\u7f51\u7edc\u72b6\u51b5\u8f83\u597d\u7684\u65f6\u5019\uff0c\u4f1a\u5c0f\u4e8e 3s\uff0c\u7f51\u7edc\u60c5\u51b5\u8f83\u5dee\uff0c\u5219\u4f1a\u7565\u5927\u4e8e 3s\u3002"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"3000"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"verifier_list")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"bls_pub_key")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u7684 BLS \u516c\u94a5"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"address")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u7684\u5730\u5740"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"propose_weight")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u7684\u51fa\u5757\u6743\u91cd\u3002\u5982\u679c\u6709\u56db\u4e2a\u5171\u8bc6\u8282\u70b9\uff0c\u51fa\u5757\u6743\u91cd\u5206\u522b\u4e3a 1, 2, 3, 4\uff0c\u5219\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684\u51fa\u5757\u6982\u7387\u4e3a 1 / (1 + 2 + 3 + 4)\u3002\u6295\u7968\u6743\u91cd\u7684\u903b\u8f91\u7c7b\u4f3c\u3002"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"vote_weight")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u7684\u6295\u7968\u6743\u91cd"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"propose_ratio")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"propose \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b\u3002\u4f8b\u5982 propose_ratio \u4e3a 5, interval \u4e3a 3000\uff0c\u5219 propose \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e3a 15 / 10 * 3000 = 4500\uff0c\u5355\u4f4d\u5747\u4e3a\u6beb\u79d2\u3002"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"15"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"prevote_ratio")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"prevote \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"precommit_ratio")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"precommit \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"brake_ratio")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"brake \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"7"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"tx_num_limit")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u6bcf\u4e00\u4e2a\u5757\u91cc\u6700\u591a\u53ef\u4ee5\u6253\u5305\u7684\u4ea4\u6613\u6570"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20000"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"max_tx_size")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"\u5355\u4e2a\u4ea4\u6613\u6700\u5927\u7684\u5b57\u8282\u6570"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1024"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))))}d.isMDXComponent=!0},206:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var O=b.a.createContext({}),d=function(e){var t=b.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=d(e.components);return b.a.createElement(O.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,O=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,o=p["".concat(c,".").concat(m)]||p[m]||j[m]||r;return a?b.a.createElement(o,i({ref:t},O,{components:a})):b.a.createElement(o,i({ref:t},O))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var O=2;O<r;O++)c[O]=a[O];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);