const path = require("path");

module.exports = {
  title: "Muta",
  tagline:
    "Build your own blochkchain, today!",
  url: "https://vector.dev",
  baseUrl: "/",
  favicon: "img/muta-logo.png",
  organizationName: "nervosnetwork",
  projectName: "muta",
  customFields: {
    metadata: require("./metadata"),
  },
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: 'Muta',
      logo: {
        alt: 'muta',
        src: 'img/muta-logo.png',
      },
      links: [
        { to: "docs/", label: "Docs", position: "left" },
        { to: "guides/", label: "Guides", position: "left" },
        { to: "blog/", label: "Blog", position: "left" },
        { to: "community/", label: "Community", position: "right" },
        {
          href: "https://github.com/nervosnetwork/muta",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    footer: {
      links: [
        {
          title: "About",
          items: [
            {
              label: "What is Muta?",
              to: "docs/about/what-is-muta/",
            },
            {
              label: "The Team",
              to: "community/#team",
            },
            {
              label: "Contact Us",
              to: "contact/",
            },
          ],
        },
        {
          title: "Development",
          items: [
            {
              label: "Getting Started",
              to: "docs/reference/sources/",
            },
            {
              label: "Service Dev",
              to: "docs/reference/transforms/",
            },
            {
              label: "Dapp Dev",
              to: "docs/reference/sinks/",
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://talk.nervos.org/',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/rN35fe8',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nervosnetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nervosnetwork/muta',
            },
          ],
        },
      ],
      logo: {
        alt: "nervosnetwork",
        src: "/img/nervos-logo.svg",
        href: "https://timber.io/",
      },
      copyright: `Copyright © ${new Date().getFullYear()} NervosNetwork`,
    },
    algolia: {
      apiKey: "2356c5cb76b57b43624c6450b0a031cc",
      indexName: "timberio_vector",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        editUrl: "https://github.com/nervosnetwork/muta/edit/master/website/",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        feedOptions: {
          type: "all",
          copyright: `Copyright © ${new Date().getFullYear()} Timber, Inc.`,
        },
      },
    ],
    path.resolve(__dirname, "./plugins/guides"),
    ["@docusaurus/plugin-content-pages", {}]
  ],
  scripts: [],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css",
  ],
  themes: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    "@docusaurus/theme-search-algolia",
  ],
};
