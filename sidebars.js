module.exports = {
  docs: [
    {
      type: 'category',
      label: 'About',
      items: [
        "about/what-is-muta",
        {
          type: 'category',
          label: 'Concepts',
          items: [
            "about/concepts",
            "about/concepts/account",
            "about/concepts/tx",
            "about/concepts/block",
            "about/concepts/node",
            "about/concepts/asset",
            "about/concepts/multisignature",
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        "setup/getting-started",
        {
          type: 'category',
          label: 'configuration',
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
        "dev/service-eg",
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        "advanced/overlord",
        "advanced/network",
        "advanced/mempool",
        "advanced/storage",
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
  ]
};
