(window.webpackJsonp=window.webpackJsonp||[]).push([[19,115],{269:function(e,t,a){"use strict";a.r(t);a(29),a(21),a(20),a(55),a(279);var n=a(0),r=a.n(n),l=a(273),c=a(272),o=a.n(c),i=a(275),s=a(69),m=a(300),u=a(1),f=(a(81),a(303),a(304),a(274)),d=a(294),b=a.n(d);a(295);var p=a(413),h=a(414),v=a(168),g=a.n(v);a(169);function E(e){var t=e.item,a=e.level,l=e.onItemClick,c=e.collapsible,i=t.items,s=t.href,m=t.label,d=t.type,b=Object(n.useState)(t.collapsed),p=b[0],h=b[1],v=Object(n.useState)(null),g=v[0],y=v[1];switch(t.collapsed!==g&&(y(t.collapsed),h(t.collapsed)),d){case"category":if(0==i.length)return!1;if(1==a)return r.a.createElement("li",{className:o()("menu__list-item"),key:m},r.a.createElement("div",{className:"title"},m),r.a.createElement("ul",{className:"menu__list"},i.map((function(e){return r.a.createElement(E,{key:e.label,item:e,level:a+1,onItemClick:l,collapsible:c})}))));var k=i[0].href;return r.a.createElement("li",{className:o()("menu__list-item",{"menu__list-item--collapsed":p}),key:m},r.a.createElement(f.a,{activeClassName:"menu__link--active",className:o()("menu__link",{"menu__link--sublist":c}),to:k+"/",onClick:c&&"#!"==k?function(){return h(!p)}:void 0},m),r.a.createElement("ul",{className:"menu__list"},i.map((function(e){return r.a.createElement(E,{key:e.label,item:e,level:a+1,onItemClick:l,collapsible:c})}))));case"link":default:var N=[],O=m;if(m.includes("|")){var _=m.split("|",2);O=_[0],N=JSON.parse(_[1])}var w="hidden"==O;return r.a.createElement("li",{className:o()("menu__list-item",w&&"menu__list-item-hidden"),key:m},r.a.createElement(f.a,Object(u.a)({className:"menu__link",to:s+"/"},/^\/(?!\/)/.test(s)?{activeClassName:"menu__link--active",exact:!0,onClick:l}:{target:"_blank",rel:"noreferrer noopener"}),O,N.length>0&&r.a.createElement("span",{className:"badges"},N.includes("log")&&r.a.createElement("span",{className:"badge badge--secondary",title:"This component works with log events."},"L"),N.includes("metric")&&r.a.createElement("span",{className:"badge badge--secondary",title:"This component works with metric events."},"M"))))}}var y=function(e){var t=Object(n.useState)(!1),a=t[0],l=t[1],c=Object(i.a)(),s=c.siteConfig,m=(s=void 0===s?{}:s).themeConfig.navbar,d=(m=void 0===m?{}:m).title,v=c.isClient,y=Object(h.a)(),k=y.logoLink,N=y.logoLinkProps,O=y.logoImageUrl,_=y.logoAlt,w=e.docsSidebars,j=e.path,C=e.sidebar,P=e.sidebarCollapsible;if(Object(p.a)(a),!C)return null;var T=w[C];if(!T)throw new Error('Cannot find the sidebar "'+C+'" in the sidebar config!');return P&&T.forEach((function(e){return function e(t,a){var n=t.items,r=t.href;switch(t.type){case"category":var l=n.map((function(t){return e(t,a)})).filter((function(e){return e})).length>0;return t.collapsed=!l,l;case"link":default:return r===a}}(e,j)})),r.a.createElement("div",{className:o()("docs-sidebar",g.a.sidebar)},r.a.createElement(f.a,Object(u.a)({className:g.a.sidebarLogo,to:k},N),null!=O&&r.a.createElement(b.a,{key:v,src:O,alt:_}),null!=d&&r.a.createElement("strong",null,d)),r.a.createElement("div",{className:o()("menu","menu--responsive",g.a.menu,{"menu--show":a})},r.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){l(!a)}},a?r.a.createElement("span",{className:o()(g.a.sidebarMenuIcon,g.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{className:g.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},T.map((function(e){return e.items.length>0&&r.a.createElement(E,{key:e.label,item:e,level:1,onItemClick:function(){l(!1)},collapsible:P})})))))},k=a(298),N=a(410),O=a(345),_=a(170),w=a.n(_);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,c=t.routes.find((function(e){return Object(O.b)(n.pathname,e)}))||{},u=a.permalinkToSidebar,f=a.docsSidebars,d=a.version,b=u[c.path],p=Object(i.a)(),h=p.siteConfig,v=(h=void 0===h?{}:h).themeConfig,g=void 0===v?{}:v,E=p.isClient,_=g.sidebarCollapsible,j=void 0===_||_;return 0===Object.keys(c).length?r.a.createElement(N.default,e):r.a.createElement(m.a,{version:d,key:E},r.a.createElement("div",{className:o()(w.a.container,"container","container--l")},b&&r.a.createElement("div",{className:o()(w.a.sidebar)},r.a.createElement(y,{docsSidebars:f,path:c.path,sidebar:b,sidebarCollapsible:j})),r.a.createElement("main",{className:w.a.main},r.a.createElement(l.a,{components:k.a},Object(s.a)(t.routes)))))}},273:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,b=u["".concat(c,".").concat(d)]||u[d]||f[d]||l;return a?r.a.createElement(b,o({ref:t},s,{components:a})):r.a.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<l;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},297:function(e,t,a){"use strict";(function(e){var n=a(1),r=(a(303),a(304),a(81),a(80),a(326),a(0)),l=a.n(r),c=a(327),o=a.n(c),i=a(341),s=a(57),m=a(272),u=a.n(m),f=a(335),d=a(328),b=a.n(d),p=a(275),h=a(320),v=a(135),g=a.n(v);(void 0!==e?e:window).Prism=s.a,a(329),a(330),a(331),a(332),a(333),a(334);var E=/{([\d,-]+)}/,y=/title=".*"/;t.a=function(e){var t=e.children,a=e.className,c=e.metastring,s=Object(p.a)().siteConfig.themeConfig.prism,m=void 0===s?{}:s,d=Object(r.useState)(!1),v=d[0],k=d[1],N=Object(r.useState)(!1),O=N[0],_=N[1];Object(r.useEffect)((function(){_(!0)}),[]);var w=Object(r.useRef)(null),j=Object(r.useRef)(null),C=[],P="",T=Object(h.a)().isDarkTheme,S=m.theme||f.a,M=m.darkTheme||S,x=T?M:S;if(c&&E.test(c)){var L=c.match(E)[1];C=b.a.parse(L).filter((function(e){return e>0}))}c&&y.test(c)&&(P=c.match(y)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)((function(){var e;return j.current&&(e=new o.a(j.current,{target:function(){return w.current}})),function(){e&&e.destroy()}}),[j.current,w.current]);var I=a&&a.replace(/language-/,"");!I&&m.defaultLanguage&&(I=m.defaultLanguage);var B=function(){window.getSelection().empty(),k(!0),setTimeout((function(){return k(!1)}),2e3)};return l.a.createElement(i.a,Object(n.a)({},i.b,{key:O,theme:x,code:t.trim(),language:I}),(function(e){var t,a,r=e.className,c=e.style,o=e.tokens,i=e.getLineProps,s=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,P&&l.a.createElement("div",{style:c,className:g.a.codeBlockTitle},P),l.a.createElement("div",{className:g.a.codeBlockContent},l.a.createElement("button",{ref:j,type:"button","aria-label":"Copy code to clipboard",className:u()(g.a.copyButton,(t={},t[g.a.copyButtonWithTitle]=P,t)),onClick:B},v?"Copied":"Copy"),l.a.createElement("pre",{className:u()(r,g.a.codeBlock,(a={},a[g.a.codeBlockWithTitle]=P,a))},l.a.createElement("div",{ref:w,className:g.a.codeBlockLines,style:c},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return C.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t})))})))}))))))}))}}).call(this,a(79))},298:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),c=a(274),o=a(297),i=a(296),s=a(136),m=a.n(s);t.a={code:function(e){var t=e.children;return"string"==typeof t?l.a.createElement(o.a,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e)},pre:function(e){return l.a.createElement("div",Object(n.a)({className:m.a.mdxCodeBlock},e))},h1:Object(i.a)("h1"),h2:Object(i.a)("h2"),h3:Object(i.a)("h3"),h4:Object(i.a)("h4"),h5:Object(i.a)("h5"),h6:Object(i.a)("h6")}},301:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),c=a(302),o=a.n(c),i=a(275),s=a(272),m=a.n(s),u=a(131),f=a.n(u),d=function(){return l.a.createElement("span",{className:m()(f.a.toggle,f.a.moon)})},b=function(){return l.a.createElement("span",{className:m()(f.a.toggle,f.a.sun)})};t.a=function(e){var t=Object(i.a)().isClient;return l.a.createElement(o.a,Object(n.a)({disabled:!t,icons:{checked:l.a.createElement(d,null),unchecked:l.a.createElement(b,null)}},e))}},309:function(e,t,a){"use strict";var n=a(1),r=a(9),l=a(0),c=a.n(l),o=a(274),i=a(272),s=a.n(i);a(132);var m=function(e){var t,a=e.block,n=e.buttonClass,r=e.center,l=e.description,o=e.size;return e.width,c.a.createElement("div",{className:s()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":r},t["mailing-list--"+o]=o,t))},!1!==l&&c.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),c.a.createElement("form",{action:"https://dev.us17.list-manage.com/subscribe/post?u=a7b19925733ee6bf88e045485&id=d8c4724e17",method:"post",className:"mailing-list--form"},c.a.createElement("button",{className:s()("button","button--"+(n||"primary"),"button--"+o),type:"submit"},"\u2764 Subscribe us for Muta updates \u2764 ")))},u=a(294),f=a.n(u),d=a(275),b=a(295),p=a(133),h=a.n(p);function v(e){var t=e.to,a=e.href,l=e.label,i=Object(r.a)(e,["to","href","label"]),s=Object(b.a)(t);return c.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:s},i),l)}var g=function(e){var t=e.url,a=e.alt;return c.a.createElement(f.a,{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(d.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},r=n.copyright,l=n.links,o=void 0===l?[]:l,i=n.logo,u=void 0===i?{}:i,p=Object(b.a)(u.src);return a?c.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===a.style})},c.a.createElement("div",{className:"container"},o&&o.length>0&&c.a.createElement("div",{className:"row footer__links"},c.a.createElement("div",{className:"col col--5 footer__col"},c.a.createElement("div",{className:"margin-bottom--md"},c.a.createElement(f.a,{className:"navbar__logo",src:"/new-docs/img/muta.svg",alt:"Muta",width:"150",height:"auto"})),c.a.createElement("div",{className:"margin-bottom--md"},c.a.createElement(m,{description:!1,width:"150px"})),c.a.createElement("div",null,c.a.createElement("a",{href:"https://twitter.com/nervosnetwork",target:"_blank"},c.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",c.a.createElement("a",{href:"https://discord.com/invite/rN35fe8",target:"_blank"},c.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",c.a.createElement("a",{href:"https://github.com/nervosnetwork/muta",target:"_blank"},c.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})))),o.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(v,e))}))):null)}))),(u||r)&&c.a.createElement("div",{className:"text--center"},u&&u.src&&c.a.createElement("div",{className:"margin-bottom--sm"},u.href?c.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:h.a.footerLogoLink},c.a.createElement(g,{alt:u.alt,url:p})):c.a.createElement(g,{alt:u.alt,url:p})),r,c.a.createElement("br",null)))):null}},410:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(300);t.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);