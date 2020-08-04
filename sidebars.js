module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About',
      items: [
        "about/what-is-muta",
        "about/concepts",
      ],
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        "setup/getting-started",
        {
          type: 'category',
          label: 'Configuration',
          items: [
            "setup/config",
            "setup/genesis-config",
            "setup/node-config",
          ]
        },
        "setup/deploy",
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        "dev/dev-overview",
        "dev/service-dev",
        "dev/service-list",
        "dev/poe-chain",
        "dev/dex",
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        "advanced/arch",
        "advanced/transaction-block",
        {
          type: 'category',
          label: 'Core Design',
          items: [
            "advanced/core/overlord",
            "advanced/core/network",
            "advanced/core/mempool",
            "advanced/core/storage",
          ]
        },
        "advanced/crypto",
      ],
    },
    {
      type: 'category',
      label: 'Toolchain',
      items: [
        "toolchain/sdk-js",
        "toolchain/sdk-java",
        "toolchain/muta-cli",
/*      "toolchain/explorer",   */
        "toolchain/benchmark-tool",
        "toolchain/keypair",
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        "ref/faq",
        {
          type: 'link',
          label: 'Contributing',
          href: 'https://github.com/nervosnetwork/muta/blob/master/CONTRIBUTING.md'
        },
      ],
    },
  ],

  docs_zh: [
    {
      type: 'category',
      label: 'About',
      items: [
        "docs_zh/about/what-is-muta",
        "docs_zh/about/concepts",
      ],
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        "docs_zh/setup/getting-started",
        {
          type: 'category',
          label: 'Configuration',
          items: [
            "docs_zh/setup/config",
            "docs_zh/setup/genesis-config",
            "docs_zh/setup/node-config",
          ]
        },
        "docs_zh/setup/deploy",
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        "docs_zh/dev/dev-overview",
        "docs_zh/dev/service-dev",
        "docs_zh/dev/service-list",
        "docs_zh/dev/poe-chain",
        "docs_zh/dev/dex",
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        "docs_zh/advanced/arch",
        "docs_zh/advanced/core/overlord",
        "docs_zh/advanced/core/network",
        "docs_zh/advanced/core/mempool",
        "docs_zh/advanced/core/storage",
        "docs_zh/advanced/crypto",
      ],
    },
    {
      type: 'category',
      label: 'Toolchain',
      items: [
        "docs_zh/toolchain/sdk-js",
        "docs_zh/toolchain/sdk-java",
        "docs_zh/toolchain/muta-cli",
        "docs_zh/toolchain/benchmark-tool",
        "docs_zh/toolchain/keypair",
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        "docs_zh/ref/faq",
        {
          type: 'link',
          label: 'Contributing',
          href: 'https://github.com/nervosnetwork/muta/blob/master/CONTRIBUTING.md'
        },
      ],
    },   
  ],
};
