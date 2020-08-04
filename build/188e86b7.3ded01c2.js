/*! For license information please see 188e86b7.3ded01c2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return m}));var a=n(1),c=n(6),r=(n(0),n(235)),o=n(266),s=n(261),i=n(262),l=n(263),d=n(247),u=n(238),b={last_modified_on:"2020-07-13",title:"Hello World. Your First Muta Blockchain.",description:'Building your own blockchain with Muta, the "Hello World" of Muta tutorials.',series_position:1,author_github:"https://github.com/yejiayu",tags:["type: tutorial","level: easy"]},p={categories:[{name:"getting-started",title:"Getting Started",description:"Take Muta from zero to production in under 10 minutes.",permalink:"/new-docs/guides/getting-started"}],coverLabel:"Hello World. Your First Muta Blockchain.",description:'Building your own blockchain with Muta, the "Hello World" of Muta tutorials.',permalink:"/new-docs/guides/getting-started/your-first-pipeline",readingTime:"8 min read",seriesPosition:1,source:"@site/guides/getting-started/your-first-pipeline.md",tags:[{label:"type: tutorial",permalink:"/new-docs/guides/tags/type-tutorial"},{label:"level: easy",permalink:"/new-docs/guides/tags/level-easy"}],title:"Hello World. Your First Muta Blockchain.",truncated:!1,nextItem:{title:"Deploy a multi-node blockchain network",permalink:"/new-docs/guides/getting-started/deploying"}},h=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Install required dependencies",id:"install-required-dependencies",children:[]},{value:"Install Rust",id:"install-rust",children:[]}]},{value:"Compiling Muta",id:"compiling-muta",children:[{value:"Clone the source code",id:"clone-the-source-code",children:[]},{value:"Compile the source code",id:"compile-the-source-code",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Starting your chain",id:"starting-your-chain",children:[]},{value:"Interacting with your chain",id:"interacting-with-your-chain",children:[{value:"Using GraphiQL",id:"using-graphiql",children:[]},{value:"Using muta-cli",id:"using-muta-cli",children:[]}]},{value:"Next Step",id:"next-step",children:[]}],f={rightToc:h};function m(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this tutorial, we will launch a Muta chain with default configuration, and interact with it using tools. We will not be going into depth about the intricacies of developing on Muta, but will hopefully satisfy your curiosity so that you will continue this journey."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(o.a,{headingDepth:3,mdxType:"Step"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("h3",{id:"install-required-dependencies"},"Install required dependencies"),Object(r.b)(i.a,{block:!0,defaultValue:"macOS",values:[{label:"macOS",value:"macOS"},{label:"ubuntu",value:"ubuntu"},{label:"centos7",value:"centos7"},{label:"archlinux",value:"archlinux"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"macOS",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ brew install autoconf libtool\n"))),Object(r.b)(l.a,{value:"ubuntu",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ apt update\n$ apt install -y git curl openssl cmake pkg-config libssl-dev gcc build-essential clang libclang-dev\n"))),Object(r.b)(l.a,{value:"centos7",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yum install -y centos-release-scl\n$ yum install -y git make gcc-c++ openssl-devel llvm-toolset-7\n\n# \u6253\u5f00 llvm \u652f\u6301\n$ scl enable llvm-toolset-7 bash\n"))),Object(r.b)(l.a,{value:"archlinux",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ pacman -Sy --noconfirm git gcc pkgconf clang make\n"))))),Object(r.b)("li",null,Object(r.b)("h3",{id:"install-rust"},"Install Rust"),Object(r.b)("p",null,"Muta uses the Rust programming language. If you\u2019re running macOS, Linux, or another Unix-like OS, we suggest you to install Rust using ",Object(r.b)("inlineCode",{parentName:"p"},"rustup"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"curl https://sh.rustup.rs -sSf | sh\n"))))),Object(r.b)("p",null,"Once the prerequisites are installed, you can start to build your Muta Chain."),Object(r.b)("h2",{id:"compiling-muta"},"Compiling Muta"),Object(r.b)("p",null,"Firstly, you need to compile the source code."),Object(r.b)(o.a,{headingDepth:3,mdxType:"Step"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("h3",{id:"clone-the-source-code"},"Clone the source code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"git clone https://github.com/nervosnetwork/muta.git\n"))),Object(r.b)("li",null,Object(r.b)("h3",{id:"compile-the-source-code"},"Compile the source code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd muta \ncargo build --release --example muta-chain\n")),Object(r.b)(d.a,{type:"info",mdxType:"Alert"},Object(r.b)("p",null,"Hey, bro, this final compilation can take up to 30 minutes depending on your hardware. Why don't use this time to glance through the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:""}),"key concept in Muta"),"."))))),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"After compiling Muta succeed, before runnning the node, you can custome the blockchain parameters (",Object(r.b)("inlineCode",{parentName:"p"},"genesis.toml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"config.toml"),") which effect the entire chain and network. More information can be found in Configuration guide."),Object(r.b)(u.a,{to:"/docs/setup/config/",mdxType:"Jump"},"View Configuration Guide"),Object(r.b)("p",null,"In this case, we\u2019ll leave these parameters on their default settings."),Object(r.b)("h2",{id:"deployment"},"Deployment"),Object(r.b)("p",null,"How to deploy your chain really depends on your production need. We provide a guide to show you how to deploy multi-node network."),Object(r.b)(u.a,{to:"/docs/setup/deploy/",mdxType:"Jump"},"View Deployment Guide"),Object(r.b)("p",null,"In here, we will show you how to run a single node on localhost."),Object(r.b)("h2",{id:"starting-your-chain"},"Starting your chain"),Object(r.b)("p",null,"Now that your node has finished all the above work, run the following command to start your local node:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cd muta\n./target/release/examples/muta-chain\n")),Object(r.b)("p",null,"Your should see something like this if your node is running successfully:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-log"}),'\n[2020-06-29T15:59:36.263061+08:00 INFO overlord::timer] Overlord: timer set Precommit event height 151, round 0, block hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c", lock round Some(0) timer\n[2020-06-29T15:59:36.263095+08:00 INFO overlord::state::process] Overlord: state receive Precommit vote event height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"\n[2020-06-29T15:59:36.266089+08:00 INFO overlord::state::process] Overlord: state round 0, Precommit vote pool length 1\n[2020-06-29T15:59:36.266148+08:00 INFO overlord::state::process] Overlord: state aggregate signatures height 151, round 0, voters ["f8389d774afdad8755ef8e629e5a154fddc6325a"]\n[2020-06-29T15:59:36.266288+08:00 INFO overlord::state::process] Overlord: state broadcast a Precommit QC, height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"\n[2020-06-29T15:59:36.266409+08:00 INFO overlord::state::process] Overlord: state trigger SMR Precommit QC height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"\n[2020-06-29T15:59:36.266510+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by precommit QC hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" qc round 0 from State, height 151, round 0\n[2020-06-29T15:59:36.266577+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Commit event hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" event\n[2020-06-29T15:59:36.266666+08:00 INFO overlord::state::process] Overlord: state receive commit event height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"\n[2020-06-29T15:59:36.267090+08:00 INFO core_consensus::engine] [consensus]: validator of height 152 is [bls public key "04188ef9", address "0xf8389d774afdad8755ef8e629e5a154fddc6325a", propose weight 1, vote weight 1]\n[2020-06-29T15:59:36.267354+08:00 INFO core_mempool] [core_mempool]: flush mempool with 0 tx_hashes\n[2020-06-29T15:59:36.267737+08:00 INFO core_consensus::adapter] [consensus-adapter]: exec transactions cost 762.582\xb5s transactions len 0\n[2020-06-29T15:59:36.267854+08:00 INFO overlord::state::process] Overlord: achieve consensus in height 151, costs 1 round 14.371511ms time\n[2020-06-29T15:59:36.267885+08:00 INFO core_consensus::adapter] [consensus-adapter]: save receipts cost 56.179\xb5s receipts len 0\n[2020-06-29T15:59:36.267955+08:00 INFO core_consensus::status] update_by_executed: info exec height 151, cycles used 0, state root 0xdd0b5a5e75cca4143baec4be1b7d22906e62538da760e1f22655c1d0006903b7, receipt root 0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421, confirm root 0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\n[2020-06-29T15:59:36.268010+08:00 INFO core_consensus::status] update_by_executed: current status latest_committed_height 151, exec height 150, current_hash 0x94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c, latest_committed_state_root 0xdd0b5a5e75cca4143baec4be1b7d22906e62538da760e1f22655c1d0006903b7 list state root [], list receipt root [], list confirm root [], list cycle used []\n[2020-06-29T15:59:39.254042+08:00 INFO overlord::state::process] Overlord: state goto new height 152\n[2020-06-29T15:59:39.254798+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by new height 152\n[2020-06-29T15:59:39.255410+08:00 INFO overlord::smr::state_machine] Overlord: SMR goto new height: 152\n[2020-06-29T15:59:39.255838+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw New round 0 event, lock round None, lock proposal None event\n[2020-06-29T15:59:39.255987+08:00 INFO overlord::timer] Overlord: timer set New round 0 event, lock round None, lock proposal None timer\n[2020-06-29T15:59:39.256148+08:00 INFO overlord::state::process] Overlord: state goto new round 0\n[2020-06-29T15:59:39.256357+08:00 INFO overlord::state::process] Overlord: state self become leader, height 152, round 0\n[2020-06-29T15:59:39.256489+08:00 INFO core_mempool] [core_mempool]: 0 txs in map and 0 txs in queue while package\n[2020-06-29T15:59:39.256693+08:00 INFO overlord::state::process] Overlord: state broadcast a signed proposal height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763" and trigger SMR\n[2020-06-29T15:59:39.259548+08:00 INFO core_consensus::engine] [consensus-engine]: check block cost 742ns\n[2020-06-29T15:59:39.259607+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by a proposal hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", from State, height 152, round 0\n[2020-06-29T15:59:39.259638+08:00 INFO core_consensus::engine] [consensus-engine]: get txs cost 9.017\xb5s\n[2020-06-29T15:59:39.259690+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Prevote event height 152, round 0, block hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", lock round None event\n[2020-06-29T15:59:39.259800+08:00 INFO overlord::timer] Overlord: timer set Prevote event height 152, round 0, block hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", lock round None timer\n[2020-06-29T15:59:39.259899+08:00 INFO overlord::state::process] Overlord: state receive Prevote vote event height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763"\n[2020-06-29T15:59:39.260005+08:00 INFO core_consensus::engine] [consensus-engine]: write wal cost 268.058\xb5s order_hashes_len 0\n')),Object(r.b)("p",null,"If the number after ",Object(r.b)("inlineCode",{parentName:"p"},"height")," is increasing, your blockchain is producing new blocks and reaching consensus about the state they describe!"),Object(r.b)("h2",{id:"interacting-with-your-chain"},"Interacting with your chain"),Object(r.b)("p",null,"You can use GraphiQL or Muta-cli to interact with your chain."),Object(r.b)("h3",{id:"using-graphiql"},"Using GraphiQL"),Object(r.b)("p",null,"By default, the chain exposes the GraphQL interface on port 8000 for users to interact with the chain. Open ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://127.0.0.1:8000/graphiql"}),"http://127.0.0.1:8000/graphiql"),", and you will see:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"./static/graphiql.png",alt:null}))),Object(r.b)("p",null,"Enter the GraphQL statement on the left and click the execute button in the middle to see the execution result on the right. Click Docs on the right to view the interface documentation. For more GraphQL usage, please refer to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql.org/"}),"Official Document"),"."),Object(r.b)("h3",{id:"using-muta-cli"},"Using muta-cli"),Object(r.b)("p",null,"Muta-cli is an command line tool used to interacting with Muta."),Object(r.b)(s.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("h4",{id:"install-muta-cli-firstly"},"Install muta-cli firstly"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ npm install -g muta-cli@0.2.0-dev.2\n"))),Object(r.b)("li",null,Object(r.b)("h4",{id:"enter-interactive-mode-and-query-the-blockheight-and-blockheader"},"Enter interactive mode and query the blockheight and blockheader"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ muta-cli repl\n> await client.getLatestBlockHeight()\n2081\n> await client.getBlock('0x1'){\n  header: {\n    chainId: '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',\n    confirmRoot: [],\n    cyclesUsed: [],\n    execHeight: '0x0000000000000000',\n    height: '0x0000000000000001',\n    orderRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',\n    orderSignedTransactionsHash: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',\n    prevHash: '0xeef97d023ef645af469ae67be3e308bd23ebff305fc79ed972941db2f5318e52',\n    proof: {\n      bitmap: '0x',\n      blockHash: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',\n      height: '0x0000000000000000',\n      round: '0x0000000000000000',\n      signature: '0x'\n    },\n    proposer: '0xf8389d774afdad8755ef8e629e5a154fddc6325a',\n    receiptRoot: [],\n    stateRoot: '0xf72a09eb2e79c3c5195401a3efc61c8d0a195f9a00b8579495b29cbfa054382a',\n    timestamp: '0x0000017352d8b65a',\n    validatorVersion: '0x0000000000000000',\n    validators: [ [Object] ]\n  },\n  orderedTxHashes: [],\n  hash: '0x43e1dfe5d78ee5b74b1c321f80ebee3c9c424d4354f12035276cc40aa8452315'\n}\n"))),Object(r.b)("li",null,Object(r.b)("h4",{id:"issue-an-asset"},"Issue an asset"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ muta-cli repl\n> const MT = await as.write.create_asset({name: 'Muta Token', supply: 1000000000, symbol: 'MT'})\n{\n  txHash: '0x78f05d81d56b5ebc8e3b3e4b76dd0928e963d5c0e53c14003ef135ef3b63b33a',\n  height: '0x0000000000000738',\n  cyclesUsed: '0x0000000000005208',\n  events: [\n    {\n      data: '{\"id\":\"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0\",\"name\":\"Muta ' +\n        'Token\",\"symbol\":\"MT\",\"supply\":1000000000,\"issuer\":\"0x9881aac16b9cc6386bd222bc365be07ee375e842\"}',\n      service: 'asset'\n    }\n  ],\n  stateRoot: '0x37024b87295d339f9e3763f0f02d5f91e94c602e72cfea9455ed75627eebe979',\n  response: {\n    serviceName: 'asset',\n    method: 'create_asset',\n    response: {\n      code: '0x0000000000000000',\n      errorMessage: '',\n      succeedData: [Object]\n    }\n  }\n}\n"))),Object(r.b)("li",null,Object(r.b)("h4",{id:"transfer-asset"},"Transfer asset"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ muta-cli repl\n> const asset_id = MT.response.response.succeedData.id\n\n# \u53d1\u884c\u8005\u5373\u4e3a\u53d1\u4ea4\u6613\u7684\u8d26\u6237\u5730\u5740\n> account.address\n'0x9d1d1bb11c44500603971a245f55a23f65148eee'\n\n# \u67e5\u8be2\u53d1\u884c\u8005\u4f59\u989d\n> await client.queryService({serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: account.address})})\n{ \n  isError: false,\n  ret: '{\"asset_id\":\"0xe8c2c6606030bc93da018cec5e6400845489b471527d507357b3316ae884a3f3\",\"user\":\"0x9d1d1bb11c44500603971a245f55a23f65148eee\",\"balance\":1000000000}' \n}\n\n# \u8f6c\u8d26\n> const to = accounts[1].address;\n\n> await as.write.transfer({asset_id: asset_id, to, value: 100});\n{\n  txHash: '0xffa7e55465695b6f50617c4abb472fb55142577dcd9f2069fef02d28b1b7f8f5',\n  height: '0x000000000000074f',\n  cyclesUsed: '0x0000000000005208',\n  events: [\n    {\n      data: '{\"asset_id\":\"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0\",\"from\":\"0x9881aac16b9cc6386bd222bc365be07ee375e842\",\"to\":\"0x46a31f791466ba6a13ccddf9c180ff2ee5a60564\",\"value\":100}',\n      service: 'asset'\n    }\n  ],\n  stateRoot: '0x8348541d8e36e07cec6db6e2728f0c185370fbfa309799447286849064590722',\n  response: {\n    serviceName: 'asset',\n    method: 'transfer',\n    response: { code: '0x0000000000000000', errorMessage: '', succeedData: {} }\n  }\n}\n\n# \u67e5\u770b\u8f6c\u8d26\u7ed3\u679c\n> await client.queryService({ serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: account.address})})\n{\n  code: '0x0000000000000000',\n  errorMessage: '',\n  succeedData: '{\"asset_id\":\"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0\",\"user\":\"0x9881aac16b9cc6386bd222bc365be07ee375e842\",\"balance\":999999900}'\n}\n\n> await client.queryService({ serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: to})})\n{\n  code: '0x0000000000000000',\n  errorMessage: '',\n  succeedData: '{\"asset_id\":\"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0\",\"user\":\"0x46a31f791466ba6a13ccddf9c180ff2ee5a60564\",\"balance\":100}'\n}\n"))))),Object(r.b)("h2",{id:"next-step"},"Next Step"),Object(r.b)("p",null,"You have launched a working Muta-based blockchain, and issues a new token on your chain. We hope you'll continue learning about Muta."),Object(r.b)("p",null,"Your next step may be:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Decentralize your network with more nodes in the Start a Private Network tutorial.")),Object(r.b)(u.a,{to:"/docs/setup/config/",mdxType:"Jump"},"View Deploy a Multi-node Tutorial"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add custom functionality in the Build a dApp tutorial.")),Object(r.b)(u.a,{to:"/docs/setup/config/",mdxType:"Jump"},"View Service Guide"),Object(r.b)("p",null,"If you experienced any issues with this tutorial or want to provide feedback, feel free to open a GitHub issue or reach out on Discord."))}m.isMDXComponent=!0},234:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=c.apply(null,a);o&&e.push(o)}else if("object"===r)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(a=function(){return c}.apply(t,[]))||(e.exports=a)}()},235:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),d=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=d(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,h=u["".concat(o,".").concat(p)]||u[p]||b[p]||r;return n?c.a.createElement(h,s({ref:t},l,{components:n})):c.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},236:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(19),o=n(239),s=n(13),i=n.n(s),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};t.a=function(e){var{isNavLink:t}=e,n=l(e,["isNavLink"]);const{to:s,href:d}=n,u=s||d,b=Object(o.a)(u),p=Object(a.useRef)(!1),h=t?r.c:r.b,f=i.a.canUseIntersectionObserver;let m;return Object(a.useEffect)(()=>(!f&&b&&window.docusaurus.prefetch(u),()=>{f&&m&&m.disconnect()}),[u,f,b]),u&&b&&!u.startsWith("#")?c.a.createElement(h,Object.assign({},n,{onMouseEnter:()=>{p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:e=>{var t,n;f&&e&&b&&(t=e,n=()=>{window.docusaurus.prefetch(u)},m=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),n())})}),m.observe(t))},to:u})):c.a.createElement("a",Object.assign({},n,{href:u}))}},238:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(236),o=n(234),s=n.n(o);n(96);t.a=function({children:e,className:t,badge:n,leftIcon:a,rightIcon:o,size:i,target:l,to:d}){let u=s()("jump-to","jump-to--"+i,t),b=c.a.createElement("div",{className:"jump-to--inner"},c.a.createElement("div",{className:"jump-to--inner-2"},a&&c.a.createElement("div",{className:"jump-to--left"},c.a.createElement("i",{className:"feather icon-"+a})),c.a.createElement("div",{className:"jump-to--main"},n?c.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),c.a.createElement("div",{className:"jump-to--right"},c.a.createElement("i",{className:`feather icon-${o||"chevron-right"} arrow`}))));return l?c.a.createElement("a",{href:d,target:l,className:u},b):c.a.createElement(r.a,{to:d,className:u},b)}},239:function(e,t,n){"use strict";function a(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return a}))},247:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(234),o=n.n(r);n(99);t.a=function({children:e,className:t,fill:n,icon:a,rounded:r,type:s}){let i=null;switch(s){case"danger":i="alert-triangle";break;case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return c.a.createElement("div",{className:o()(t,"alert","alert--"+s,{"alert--fill":n,"alert--icon":!1!==a,"alert--rounded":!0===r}),role:"alert"},!1!==a&&c.a.createElement("i",{className:o()("feather","icon-"+(a||i))}),e)}},261:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=(n(234),n(240)),o=n.n(r);n(102);t.a=function({children:e,headingDepth:t}){let n="undefined"!=typeof window?window.location:null,r={title:`Tutorial on ${n} failed`,body:`The tutorial on:\n\n${n}\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e`},s="https://github.com/nervosnetwork/muta-docs/issues/new?"+o.a.stringify(r);const[i,l]=Object(a.useState)(null);return c.a.createElement("div",{className:"steps steps--h"+t},e,!i&&c.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",c.a.createElement("span",{className:"button button--sm button--primary",onClick:()=>l("yes")},"Yes"),"\xa0\xa0",c.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==i&&c.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Muta please consider ",c.a.createElement("a",{href:"https://github.com/nervosnetwork/muta/",target:"_blank"},"starring our Github repo"),"."))}},262:function(e,t,n){"use strict";var a=n(1),c=(n(12),n(0)),r=n.n(c),o=n(279),s=n(234),i=n.n(s),l=n(240),d=n.n(l),u=n(282);const b=37,p=39;function h({block:e,centered:t,changeSelectedValue:n,className:a,handleKeydown:c,style:o,values:s,selectedValue:l,tabRefs:d}){return r.a.createElement("div",{className:t?"tabs--centered":null},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",a,{"tabs--block":e}),style:o},s.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":l===e,className:i()("tab-item",{"tab-item--active":l===e}),key:e,ref:e=>d.push(e),onKeyDown:e=>c(d,e.target,e),onFocus:()=>n(e),onClick:()=>n(e)},t))))}function f({placeholder:e,selectedValue:t,changeSelectedValue:n,size:a,values:c}){let s=c;if(s[0].group){let e=_.groupBy(s,"group");s=Object.keys(e).map(t=>({label:t,options:e[t]}))}return r.a.createElement(o.a,{className:"react-select-container react-select--"+a,classNamePrefix:"react-select",options:s,isClearable:t,placeholder:e,value:c.find(e=>e.value==t),onChange:e=>n(e?e.value:null)})}t.a=function(e){const{block:t,centered:n,children:o,defaultValue:s,groupId:i,label:l,placeholder:m,select:g,size:O,style:v,values:y,urlKey:j}=e,{tabGroupChoices:w,setTabGroupChoices:x}=Object(u.a)(),[N,k]=Object(c.useState)(s);if(null!=i){const e=w[i];null!=e&&e!==N&&k(e)}const T=e=>{k(e),null!=i&&x(i,e)},I=[],_=(e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}};return Object(c.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&j){let e=d.a.parse(window.location.search);e[j]&&k(e[j])}},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"margin-bottom--"+(O||"md")},l&&r.a.createElement("div",{className:"margin-vert--sm"},l),y.length>1&&(g?r.a.createElement(f,Object(a.a)({changeSelectedValue:T,handleKeydown:_,placeholder:m,selectedValue:N,size:O,tabRefs:I},e)):r.a.createElement(h,Object(a.a)({changeSelectedValue:T,handleKeydown:_,selectedValue:N,tabRefs:I},e)))),c.Children.toArray(o).filter(e=>e.props.value===N)[0])}},263:function(e,t,n){"use strict";var a=n(0),c=n.n(a);t.a=function(e){return c.a.createElement(c.a.Fragment,null,e.children)}},266:function(e,t,n){"use strict";var a=n(0),c=n.n(a);n(234),n(240),n(103);t.a=function({children:e,headingDepth:t}){return"undefined"!=typeof window&&window.location,c.a.createElement("div",{className:"step step--h"+t},e)}},281:function(e,t,n){"use strict";var a=n(0);const c=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=c}}]);