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
        {
          type: 'category',
          label: 'Service  List',
          items: [
            "service-list/service-overview",
            "service-list/metadata-service",
            "service-list/asset-service",
            "service-list/auth-service",
            "service-list/multi-sig-service",
            "service-list/gov-service",
            "service-list/riscv-service",
            "service-list/admission-service",
            "service-list/kyc-service",
          ]
        },
        "dev/poe-chain",
        "dev/dex",
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        "advanced/arch",
        "advanced/core/overlord",
        "advanced/core/network",
        "advanced/core/mempool",
        "advanced/core/storage",
        "advanced/crypto",
      ],
    },
    {
      type: 'category',
      label: 'Toolchain',
      items: [
        "toolchain/sdk-js",
        "toolchain/sdk-java",
        "toolchain/explorer",
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
      ],
    },
    
  ],
};
