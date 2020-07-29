---
title: "What is Muta?"
description: "What is Muta？"
---

Muta is a versatile, high-performance blockchain framework designed to make building blockchains simple and flexible. Blockchain developers can quickly build their own blockchain based on Muta, eliminating the tedious work of building the underlying network and consensus mechanism from scratch and focusing on business functionality.

Muta provides all the core components needed to build a distributed blockchain network, including a newly designed BFT-like consensus algorithm "Overlord" with high throughput and low latency, fast and stable storage, a modular P2P network and high-performance transaction pools. Service is an abstraction layer used to extend the Muta framework, where each Service performs a relatively independent function, maintaining its own storage and operational interfaces, similar to a Small state machine. These services together form the state machine part of the chain and after being connected to the underlying components of the blockchain through the framework interface, a brand new chain exclusive to you is developed!

## Where can Muta be used?

* Muta can be used for both public and federated chains, and developers can develop custom PoA, PoS or DPoS chains based on Muta, and deploy them using different economic and governance models.
* Developers can also develop different app chains (e.g. DEX chains, payment chains) based on Muta to implement a specific business logic.

## Why Muta?

### High performance which can meet the demands of the production environment

* **Built-in Overlord Consensus Algorithm**. As a new generation of BFT consensus algorithm, Overlord is designed and developed by muta team. It introduces aggregated signatures to reduce message complexity, and decouples state sequencing and transaction consensus to achieve parallel consensus and execution, which improves consensus efficiency by leaps and bounds compared with PBFT, Tendermint, Hotstuff, etc. In production test, Overlord has been able to support hundreds of consensus nodes, reaching thousands of transactions per second processing capacity, and the transaction latency is less than a few seconds, which provides effective support for blockchain technology to further move towards more realistic business scenarios, even the most complex financial scenarios.

* Use Rust as the programming language**, which emphasizes and upholds the concept of zero-cost abstraction, providing many high-level language features without introducing additional cost and with performance comparable to C++.

* Asynchronously programming is widely used in Muta**, which brings significant performance improvements.

### Easiest to use

* **仅需专注链的功能开发**。框架已经内置有共识、执行、存储、交易池、网络这些基础模块，开发者仅需要开发 Service 来扩展链的功能。
* **Service 的开发门槛很低**。最初在设计 Service 时，我们就希望降低开发者的开发门槛，让更多对区块链不那么熟悉的开发者也可以快速上手，开发自己的区块链。因此，目前 Service 的开发体验上与开发合约的体验是很相似的，所以说如果你已经熟悉如何开发合约，那么恭喜你，你也已经学会了如何开发 Service。
* **已有的 Service 可以直接拿来复用**。目前 Muta 已经提供了许多常见功能的模块（Service），开发者可以直接使用。例如 Asset Service 可以帮助开发者直接创建原生资产，相比于ERC20 等合约代币更安全，发行也更灵活和便捷。Risc-V Service 可以直接给链添加 Risc-V 虚拟机。更多 Service 可以查看 Service 列表，未来 Muta 框架会提供许多常见功能的 Service。

### 互操作性

* **Muta 在未来也将支持原生的跨链模块**，通过该模块，不仅可以让不同的 Muta 链之间可以跨链，还可以让基于 Muta 开发的区块链可以和 Nervos CKB 实现跨链，享受到基于 PoW 的 CKB 底层所提供的高安全性和最终性。不同链之间资产和数据的高效互通将赋能更广阔的生态。

## 学习路径


<ul class="connected-list">
<li>

### 搭建一条可用的区块链，进行初始的配置，并尝试简单的交互
* [快速开始]()
* [配置说明]()
* [部署说明]()
* [Tutorial: 部署一个联盟链网络]()
* [Tutorial: 压测链的性能]()
* [Tutorial: 监控链的运行情况]()

</li>
<li>

### 通过开发 Service 来定制链的功能部分
* [Service 开发指南]()
* [Service 列表]()
* [Tutorial: 开发一条存证链]()
* [Toturial: 开发一个去中心化交易所]()

</li>
<li>

### 深入了解 Muta 的模块设计
* [架构设计]()
* [Overlord 共识算法]()
* [交易池]()
* [网络]()
* [存储]()

</li>
<li>

### Muta 生态中的工具组件

* [Muta-cli]()
* [Muta Explorer]()
* [Muta-sdk-js]()
* [Muta-sdk-java]()
* [Muta-benchmark]()

</li>
</ul>

## 贡献 ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

#### 提交 PR

- :fork_and_knife:  Fork 这个项目并 clone 到本地
- :twisted_rightwards_arrows:  新建一个分支: `git checkout -b new-branch`
- :wrench:  增加新特性或者解决一些 bug
- :memo:提交你的修改:   `git commit -am 'Add some feature'`
- :rocket:推送你的分支:   `git push origin new-branch`
- :tada:  提交 Pull Request

#### 提交 Issue

- 点击 [issue](https://github.com/nervosnetwork/muta/issues)。欢迎任何有帮助性的建议:stuck_out_tongue_winking_eye:

#### 翻译文档

如果愿意参与翻译文档，请到未翻译的英文文档页面上方点击 edit on GitHub 可以找到源文件，直接修改源文件，并且提 PR，步骤同上面的 PR 步骤。

## 加入我们!

作为一个创业团队，我们还在不断招募优秀的开发者 :heart:，并且在世界末日到来之前我们会一直招募，前端、后端、区块链开发工程师等等！详情参考[工作描述](https://github.com/zhouyun-zoe/Workflow/issues/3)。
