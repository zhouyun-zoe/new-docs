---
title: Basic Concepts
sidebar_label: hidden
description: The fundamental Muta concepts. A great place to start learning about Muta.
---

import Jump from '@site/src/components/Jump';

It's worth getting familiar with the basic concepts that comprise Muta as they
are used throughout the documentation. This knowledge will be helpful as you
proceed and is also cool to brag about amongst friends.

## Basics

### Blockchain Framework

@yejiayu

什么是区块链框架？
为什么我们要做要做区块链框架Muta？

### Account

An account represents a entity that is able to perform specified set of actions. It can be used to identify individual users and each user can have as many accounts as they would like. 

In Muta, an account designates a pair of public key PubKey and private key PrivKey. The PubKey can be derived to generate various Addresses, which are used to identify users in the network. The PrivKey is used to generate digital signatures to prove that an Address associated with the PrivKey approved of a given transaction.

<Jump to="/docs/advanced/crypto/">Learn about the cryptography used when creating a Account</Jump>

### Transaction



### Block

Transactions are combined into single blocks and every 10 minutes, a new block of about 1MB is size is created. Every block in a blockchain contains 4 components: a timestamp, a reference to the previous block, a summary of the included transaction and the Proof of Work (see ‘6’ below) that went into creating the secure block.

Secure hashing implies that editing a block without causing a change in the subsequent blocks is impossible. No entity can simply enter the bitcoin network and perform a successful transfer worth millions of dollars because of 2 reasons:
a) each block requires several independent confirmations, and
b) solving the mathematical equations for the cryptographic problems is difficult, requiring special miners.

<Jump to="/docs/advanced/block-structure/">View Block structure</Jump>

### Node

Nodes are distributed computers in the network that all have a copy of the entire blockchain. As new users enter the blockchain network, copies of the blockchain and the access to it is distributed. The data is replicable, synchronized and shared across all the nodes in the across multiple networks. The data is not controlled by a singular node or network.

### Asset

### Service

@yejiayu

## Advanced

### Multisignature

@Eason



