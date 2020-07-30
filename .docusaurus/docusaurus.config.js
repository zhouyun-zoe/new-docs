export default {
  "plugins": [
    [
      "@docusaurus/plugin-content-docs",
      {
        "editUrl": "https://github.com/nervosnetwork/muta/edit/master/website/",
        "sidebarPath": "/Users/Yun/Desktop/vdocs/website/new-docs/sidebars.js"
      }
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        "feedOptions": {
          "type": "all",
          "copyright": "Copyright © 2020 Timber, Inc."
        }
      }
    ],
    "/Users/Yun/Desktop/vdocs/website/new-docs/plugins/guides",
    [
      "@docusaurus/plugin-content-pages",
      {}
    ]
  ],
  "themes": [
    [
      "@docusaurus/theme-classic",
      {
        "customCss": "/Users/Yun/Desktop/vdocs/website/new-docs/src/css/custom.css"
      }
    ],
    "@docusaurus/theme-search-algolia"
  ],
  "customFields": {
    "metadata": {
      "latest_post": {
        "author_github": "https://github.com/LycrusHamster",
        "date": "2019-05-11",
        "description": "Let's talk about consensus",
        "id": "consensus-cangshu",
        "path": "website/blog/2020-05-11-consensus-cangshu.md",
        "permalink": "/blog/consensus-cangshu/",
        "tags": [
          "type: post"
        ],
        "title": "共识算法发展历程（从 Paxos 聊起...)"
      },
      "post_tags": [
        "type: announcement",
        "type: post",
        "domain: testing"
      ],
      "posts": [
        {
          "author_github": "https://github.com/LycrusHamster",
          "date": "2019-05-11",
          "description": "Let's talk about consensus",
          "id": "consensus-cangshu",
          "path": "website/blog/consensus-cangshu.md",
          "permalink": "/blog/consensus-cangshu/",
          "tags": [
            "type: post"
          ],
          "title": "共识算法发展历程（从 Paxos 聊起...)"
        }
      ],
      "team": [
        {
          "avatar": "https://github.com/yejiayu.png",
          "bio": "Yejiayu is the architect of Muta. Love programming and cats",
          "github": "https://github.com/yejiayu",
          "id": "Yejiayu",
          "keybase": "https://keybase.io/arodin",
          "name": "Yejiayu"
        },
        {
          "avatar": "https://github.com/zeroqn.png",
          "bio": "Zeroqn is the Developer of Muta. Love programming and exercising.",
          "github": "https://github.com/zeroqn",
          "id": "zeroqn",
          "keybase": "https://keybase.io/zeroqn",
          "name": "Zeroqn"
        },
        {
          "avatar": "https://github.com/KaoImin.png",
          "bio": "KaoImin is the Developer of Muta. Love programming and calligraphy.",
          "github": "https://github.com/KaoImin",
          "id": "KaoImin",
          "keybase": "https://keybase.io/KaoImin",
          "name": "KaoImin"
        },
        {
          "avatar": "https://github.com/LycrusHamster.png",
          "bio": "LycrusHamster is the Developer of Muta. Love programming and hamster.",
          "github": "https://github.com/LycrusHamster",
          "id": "LycrusHamster",
          "keybase": "https://github.com/LycrusHamster",
          "name": "LycrusHamster"
        },
        {
          "avatar": "https://github.com/rev-chaos.png",
          "bio": "Rev-chaos is the Developer and researcher of Muta. Love programming and travling.",
          "github": "https://github.com/rev-chaos",
          "id": "rev-chaos",
          "name": "Rev-chaos"
        },
        {
          "avatar": "https://github.com/homura.png",
          "bio": "Homura is the Developer of Muta. Love programming and fitness.",
          "github": "https://github.com/homura",
          "id": "homura",
          "name": "Homura"
        },
        {
          "avatar": "https://github.com/zhouyun-zoe.png",
          "bio": "Zhouyun is the professional char of Muta. Love everything expect programming.",
          "github": "https://github.com/zhouyun-zoe",
          "id": "zhouyun-zoe",
          "keybase": "https://keybase.io/zhouyun-zoe",
          "name": "zhouyun-zoe"
        }
      ]
    }
  },
  "themeConfig": {
    "navbar": {
      "hideOnScroll": true,
      "logo": {
        "alt": "muta",
        "src": "/img/muta.svg"
      },
      "links": [
        {
          "to": "docs/",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "guides/",
          "label": "Guides",
          "position": "left"
        },
        {
          "to": "blog/",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "community/",
          "label": "community",
          "position": "right"
        },
        {
          "label": "Translation",
          "position": "right",
          "items": [
            {
              "label": "中文",
              "to": "docs/docs_zh/about/what-is-muta"
            },
            {
              "label": "English",
              "to": "docs/about/what-is-muta"
            }
          ]
        },
        {
          "href": "https://github.com/nervosnetwork/muta",
          "className": "header-github-link",
          "position": "right"
        }
      ]
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      }
    },
    "footer": {
      "links": [
        {
          "title": "About",
          "items": [
            {
              "label": "What is Muta?",
              "to": "docs/about/what-is-muta/"
            },
            {
              "label": "The Team",
              "to": "community/#team"
            },
            {
              "label": "Contact Us",
              "to": "contact/"
            }
          ]
        },
        {
          "title": "Development",
          "items": [
            {
              "label": "Getting Started",
              "to": "docs/setup/getting-started/"
            },
            {
              "label": "Service Dev",
              "to": "docs/dev/service/"
            },
            {
              "label": "Dapp Dev",
              "to": "docs/dev/dapp-dev/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Forum",
              "href": "https://talk.nervos.org/"
            },
            {
              "label": "Discord",
              "href": "https://discord.com/invite/rN35fe8"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/nervosnetwork"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/nervosnetwork/muta"
            }
          ]
        }
      ],
      "logo": {
        "alt": "nervosnetwork",
        "src": "/img/nervos-logo.svg",
        "href": "https://nervos.org/"
      },
      "copyright": "Copyright © 2020 Nervos Fundation"
    },
    "algolia": {
      "apiKey": "**",
      "indexName": "**",
      "algoliaOptions": {}
    }
  },
  "title": "Muta",
  "tagline": "Build your own blochkchain, today!",
  "url": "https://zhouyun-zoe.github.io",
  "baseUrl": "/new-docs/",
  "favicon": "/img/muta-logo.png",
  "organizationName": "zhouyun-zoe",
  "projectName": "new-docs",
  "presets": [],
  "scripts": [],
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Ubuntu|Roboto|Source+Code+Pro",
    "https://at-ui.github.io/feather-font/css/iconfont.css"
  ]
};