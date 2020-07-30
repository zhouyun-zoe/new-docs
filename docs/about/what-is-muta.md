---
title: "What is Muta?"
description: "What is Muta？"
---

Muta is a versatile, high-performance blockchain framework designed to make building blockchains simple and flexible. Blockchain developers can quickly build their own blockchain based on Muta, eliminating the tedious work of building the underlying network and consensus mechanism from scratch and focusing on business functionality.

## Overview

### The basic core component Muta provided

Muta provides all the core components needed to build a distributed blockchain network, including:
 * a newly designed consensus algorithm [**"Overlord"**]() with high throughput and low latency 
 * fast and stable [**Storage**]() 
 * a modular [**P2P network**]()
 * and high-performance [**mempool pool**]() 

### Customizable Part

Developers can simply customize the functional parts of the chain by developing [**services**](), including governance mechanisms, business logic, and even connecting virtual machines to the blockchain.

[**Service**]() is an abstraction layer used to extend the Muta framework, where each Service performs a relatively independent function, maintaining its own storage and operational interfaces, similar to a Small state machine. These services together form the state machine part of the chain and after being connected to the underlying components of the blockchain through the framework interface, a brand new chain exclusive to you is developed!

## Where can Muta be used?

* Muta can be used for both public and federated chains, and developers can develop custom PoA, PoS or DPoS chains based on Muta, and deploy them using different economic and governance models.
* Developers can also develop different app chains (e.g. [DEX chains](), payment chains) based on Muta to implement a specific business logic.

## What are the key features of Muta?

### High performance which can meet the demands of the production environment

* **Built-in [Overlord]() Consensus Algorithm**. It introduces aggregated signatures to reduce message complexity, and decouples state sequencing and transaction consensus to achieve parallel consensus and execution, which improves consensus efficiency by leaps and bounds compared with PBFT, Tendermint, Hotstuff, etc. In production test, Overlord has been able to support hundreds of consensus nodes, reaching thousands of transactions per second processing capacity, and the transaction latency is less than a few seconds.

* **Use Rust as the programming language**, which emphasizes and upholds the concept of zero-cost abstraction, providing many high-level language features without introducing additional cost and with performance comparable to C++.

* **Asynchronously programming** is widely used in Muta, which brings significant performance improvements.

### Easiest to use

* **Focus only on developing the functionality of the chain**. Consensus, storage, mempool and network are already built into the framework as foundational modules, so developers only need to develop services to extend the functionality of the chain.

* **Developing a Service is quite easy**. When we originally designed Service, we wanted to lower the development barrier for developers so that more developers who are not as familiar with blockchain can get up to speed quickly and develop their own blockchain. As a result, Service is now very similar to developing contracts in terms of experience, so if you're already familiar with how to develop contracts, congratulations, you've also learned how to develop Service.

* **Existing Services can be reused directly**. Muta already provides a number of modules (Services) with common functionality that can be used directly by developers. For example, the Asset Service allows developers to create native assets that are safer and more flexible and easier to issue than contract tokens such as ERC20, and the Risc-V Service allows developers to add Risc-V virtual machines directly to the chain. More services can be found in the list of services, and the Muta framework will provide many more services with common features in the future.


### Interoperability

* **Muta will also support native cross-chain in the future**, which will not only allow cross-chain communication between different Muta chains, but also allow Muta-based blockchains to communicate with [Nervos CKB](), enjoying the high security and finality provided by the PoW-based layer1 solution. Efficient interoperability of assets and data between the different chains will empower the broader ecosystem.

## Learning Path


<ul class="connected-list">
<li>

### Build your first blockchain, make the initial configuration, and attempt simple interactions
* [Getting Started]()
* [Configuration]()
* [Deployment]()
* [Tutorial: Build a multi-node blockchain network]()
* [Tutorial: Benchmark the performance of your chain]()
* [Tutorial: Visualizing your node using Prometheus and Grafana]()

</li>
<li>

### Customize the functional part of the chain by developing services
* [Service development]()
* [Service List]()
* [Tutorial: Build a POE blockchain Network]()
* [Toturial: Build a DEX chain]()

</li>
<li>

### Dive into Muta
* [Architecture]()
* [Overlord]()
* [Mempool]()
* [Network]()
* [Storage]()

</li>
<li>

### Toolchain

* [Muta-cli]()
* [Muta Explorer]()
* [Muta-sdk-js]()
* [Muta-sdk-java]()
* [Muta-benchmark]()

</li>
</ul>

## Contribute ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

#### Pull Request

- :fork_and_knife:  Fork it!
- :twisted_rightwards_arrows:  Create your branch: `git checkout -b new-branch`
- :wrench:  Make your changes
- :memo:Commit your changes:   `git commit -am 'Add some feature'`
- :rocket:Push to the branch:   `git push origin new-branch`
- :tada:  Submit a pull request

#### Issue

- Submit an [issue](https://github.com/nervosnetwork/muta/issues)。Any helpful suggestions are welcomed.:stuck_out_tongue_winking_eye:

#### Translation

If you are willing to participate in the translation of the document, please go to the top of the untranslated English document page and click edit on GitHub to find the source file, modify the source file directly, and submit the PR. The steps are the same as the PR step above.

## Join us!

As an entrepreneurial team, we are still recruiting excellent developers :heart:, and we will continue to recruit until the end of the world, front-end, back-end, blockchain development engineers, etc. For more details, please refer to [Job Description](https://github.com/zhouyun-zoe/Workflow/issues/3).

[Nervos Network]: nervos.org
[Nervos CKB]: https://github.com/nervosnetwork/ckb
