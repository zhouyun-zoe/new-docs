/*! For license information please see a6aa9e1f.38a12dd2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{270:function(e,t,a){"use strict";a.r(t);var n=a(0),u=a.n(n),r=a(369),D=a(274);var i=function(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return u.a.createElement("nav",{className:"pagination-nav"},u.a.createElement("div",{className:"pagination-nav__item"},a&&u.a.createElement(D.a,{className:"pagination-nav__link",to:a},u.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),u.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&u.a.createElement(D.a,{className:"pagination-nav__link",to:n},u.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))},l=a(395),c=a(300),o=a(293),s=a(275),m=a(396);a(228);t.default=function(e){var t=e.metadata,a=e.items,n=Object(s.a)().siteConfig,E=(void 0===n?{title:siteTitle}:n).customFields.metadata.post_tags,d=Object(o.a)(E,"blog"),f=(d.filter((function(e){return"type"==e.category})),d.filter((function(e){return"domain"==e.category})),"/"===t.permalink?siteTitle:"Blog");return Object(m.b)(),u.a.createElement(c.a,{title:f,description:"Muta blog posts, articles, and tips from the Muta core team."},u.a.createElement("div",{className:"blog-list container"},u.a.createElement("div",{className:"blog-list--filters"},u.a.createElement("a",{href:"/blog/rss.xml",style:{float:"right",fontSize:"1.5em",marginTop:"0px",marginLeft:"-30px",width:"30px"}},u.a.createElement("i",{className:"feather icon-rss"})),u.a.createElement("h1",null,"The Muta Blog"),u.a.createElement("p",null,"Thoughts on designing and development from the ",u.a.createElement(D.a,{to:"/community/#team"},"Muta & Nervos Network team"),"."),u.a.createElement("div",{className:"margin-vert--lg"},u.a.createElement(l.a,{github:!1,size:"s",inline:!0,style:"highlight"})),u.a.createElement("p",{className:"margin-vert--sm"},"Looking for Muta updates & announcements?"),u.a.createElement("p",null,u.a.createElement(D.a,{to:"https://github.com/nervosnetwork/muta/releases"},u.a.createElement("i",{className:"feather icon-gift"})," Check out the Muta Release"))),u.a.createElement("div",{className:"blog-list--items"},a.map((function(e){var t=e.content;return u.a.createElement(r.a,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},u.a.createElement(t,null))})),u.a.createElement(i,{metadata:t}))))}},273:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),u=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,u=function(e,t){if(null==e)return{};var a,n,u={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(u[a]=e[a]);return u}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(u[a]=e[a])}return u}var c=u.a.createContext({}),o=function(e){var t=u.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=o(e.components);return u.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return u.a.createElement(u.a.Fragment,{},t)}},E=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,D=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=o(a),E=n,d=s["".concat(D,".").concat(E)]||s[E]||m[E]||r;return a?u.a.createElement(d,i({ref:t},c,{components:a})):u.a.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,D=new Array(r);D[0]=E;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,D[1]=i;for(var c=2;c<r;c++)D[c]=a[c];return u.a.createElement.apply(null,D)}return u.a.createElement.apply(null,a)}E.displayName="MDXCreateElement"},281:function(e,t,a){var n=a(24).f,u=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in u||a(10)&&n(u,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},293:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(80),a(278),a(279),a(81);var n=a(306),u=a.n(n);function r(e,t){var a=new u.a;return e.map((function(e){var n=e;return"string"==typeof e&&(n={label:e,permalink:"/"+t+"/tags/"+a.slug(e)}),function(e,t){if(e.enriched)return e;var a=e.label.split(": ",2),n=a[0],u=a[1],r="primary";switch(n){case"type":r="blue";break;case"level":r="pink";break;default:r="primary"}return{category:n,count:e.count,enriched:!0,label:e.label,permalink:e.permalink,style:r,value:u}}(n)}))}},297:function(e,t,a){"use strict";(function(e){var n=a(1),u=(a(303),a(304),a(81),a(80),a(326),a(0)),r=a.n(u),D=a(327),i=a.n(D),l=a(341),c=a(57),o=a(272),s=a.n(o),m=a(335),E=a(328),d=a.n(E),f=a(275),g=a(320),p=a(135),F=a.n(p);(void 0!==e?e:window).Prism=c.a,a(329),a(330),a(331),a(332),a(333),a(334);var v=/{([\d,-]+)}/,h=/title=".*"/;t.a=function(e){var t=e.children,a=e.className,D=e.metastring,c=Object(f.a)().siteConfig.themeConfig.prism,o=void 0===c?{}:c,E=Object(u.useState)(!1),p=E[0],b=E[1],y=Object(u.useState)(!1),C=y[0],N=y[1];Object(u.useEffect)((function(){N(!0)}),[]);var w=Object(u.useRef)(null),O=Object(u.useRef)(null),k=[],T="",A=Object(g.a)().isDarkTheme,M=o.theme||m.a,_=o.darkTheme||M,j=A?_:M;if(D&&v.test(D)){var B=D.match(v)[1];k=d.a.parse(B).filter((function(e){return e>0}))}D&&h.test(D)&&(T=D.match(h)[0].split("title=")[1].replace(/"+/g,"")),Object(u.useEffect)((function(){var e;return O.current&&(e=new i.a(O.current,{target:function(){return w.current}})),function(){e&&e.destroy()}}),[O.current,w.current]);var S=a&&a.replace(/language-/,"");!S&&o.defaultLanguage&&(S=o.defaultLanguage);var x=function(){window.getSelection().empty(),b(!0),setTimeout((function(){return b(!1)}),2e3)};return r.a.createElement(l.a,Object(n.a)({},l.b,{key:C,theme:j,code:t.trim(),language:S}),(function(e){var t,a,u=e.className,D=e.style,i=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,T&&r.a.createElement("div",{style:D,className:F.a.codeBlockTitle},T),r.a.createElement("div",{className:F.a.codeBlockContent},r.a.createElement("button",{ref:O,type:"button","aria-label":"Copy code to clipboard",className:s()(F.a.copyButton,(t={},t[F.a.copyButtonWithTitle]=T,t)),onClick:x},p?"Copied":"Copy"),r.a.createElement("pre",{className:s()(u,F.a.codeBlock,(a={},a[F.a.codeBlockWithTitle]=T,a))},r.a.createElement("div",{ref:w,className:F.a.codeBlockLines,style:D},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=l({line:e,key:t});return k.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t})))})))}))))))}))}}).call(this,a(79))},298:function(e,t,a){"use strict";var n=a(1),u=a(0),r=a.n(u),D=a(274),i=a(297),l=a(296),c=a(136),o=a.n(c);t.a={code:function(e){var t=e.children;return"string"==typeof t?r.a.createElement(i.a,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(D.a,e)},pre:function(e){return r.a.createElement("div",Object(n.a)({className:o.a.mdxCodeBlock},e))},h1:Object(l.a)("h1"),h2:Object(l.a)("h2"),h3:Object(l.a)("h3"),h4:Object(l.a)("h4"),h5:Object(l.a)("h5"),h6:Object(l.a)("h6")}},301:function(e,t,a){"use strict";var n=a(1),u=a(0),r=a.n(u),D=a(302),i=a.n(D),l=a(275),c=a(272),o=a.n(c),s=a(131),m=a.n(s),E=function(){return r.a.createElement("span",{className:o()(m.a.toggle,m.a.moon)})},d=function(){return r.a.createElement("span",{className:o()(m.a.toggle,m.a.sun)})};t.a=function(e){var t=Object(l.a)().isClient;return r.a.createElement(i.a,Object(n.a)({disabled:!t,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(d,null)}},e))}},305:function(e,t,a){"use strict";var n=a(0),u=a.n(n),r=a(274),D=a(272),i=a.n(D);t.a=function(e){var t=e.count,a=e.label,n=e.permalink,D=e.style,l=e.value,c=e.valueOnly;return u.a.createElement(r.a,{to:n+"/",className:i()("badge","badge--rounded","badge--"+D)},c?l:a,t&&u.a.createElement(u.a.Fragment,null," (",t,")"))}},306:function(e,t,a){var n=a(307);e.exports=i;var u=Object.hasOwnProperty,r=/\s/g,D=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~\u2019]/g;function i(){if(!(this instanceof i))return new i;this.reset()}function l(e,t){return"string"!=typeof e?"":(t||(e=e.toLowerCase()),e.trim().replace(D,"").replace(n(),"").replace(r,"-"))}i.prototype.slug=function(e,t){for(var a=l(e,!0===t),n=a;u.call(this.occurrences,a);)this.occurrences[n]++,a=n+"-"+this.occurrences[n];return this.occurrences[a]=0,a},i.prototype.reset=function(){this.occurrences=Object.create(null)},i.slug=l},307:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},309:function(e,t,a){"use strict";var n=a(1),u=a(9),r=a(0),D=a.n(r),i=a(274),l=a(272),c=a.n(l);a(132);var o=function(e){var t,a=e.block,n=e.buttonClass,u=e.center,r=e.description,i=e.size;return e.width,D.a.createElement("div",{className:c()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":u},t["mailing-list--"+i]=i,t))},!1!==r&&D.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),D.a.createElement("form",{action:"https://dev.us17.list-manage.com/subscribe/post?u=a7b19925733ee6bf88e045485&id=d8c4724e17",method:"post",className:"mailing-list--form"},D.a.createElement("button",{className:c()("button","button--"+(n||"primary"),"button--"+i),type:"submit"},"\u2764 Subscribe us for Muta updates \u2764 ")))},s=a(294),m=a.n(s),E=a(275),d=a(295),f=a(133),g=a.n(f);function p(e){var t=e.to,a=e.href,r=e.label,l=Object(u.a)(e,["to","href","label"]),c=Object(d.a)(t);return D.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),r)}var F=function(e){var t=e.url,a=e.alt;return D.a.createElement(m.a,{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(E.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},u=n.copyright,r=n.links,i=void 0===r?[]:r,l=n.logo,s=void 0===l?{}:l,f=Object(d.a)(s.src);return a?D.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===a.style})},D.a.createElement("div",{className:"container"},i&&i.length>0&&D.a.createElement("div",{className:"row footer__links"},D.a.createElement("div",{className:"col col--5 footer__col"},D.a.createElement("div",{className:"margin-bottom--md"},D.a.createElement(m.a,{className:"navbar__logo",src:"/new-docs/img/muta.svg",alt:"Muta",width:"150",height:"auto"})),D.a.createElement("div",{className:"margin-bottom--md"},D.a.createElement(o,{description:!1,width:"150px"})),D.a.createElement("div",null,D.a.createElement("a",{href:"https://twitter.com/nervosnetwork",target:"_blank"},D.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",D.a.createElement("a",{href:"https://discord.com/invite/rN35fe8",target:"_blank"},D.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",D.a.createElement("a",{href:"https://github.com/nervosnetwork/muta",target:"_blank"},D.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})))),i.map((function(e,t){return D.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?D.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?D.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?D.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):D.a.createElement("li",{key:e.href||e.to,className:"footer__item"},D.a.createElement(p,e))}))):null)}))),(s||u)&&D.a.createElement("div",{className:"text--center"},s&&s.src&&D.a.createElement("div",{className:"margin-bottom--sm"},s.href?D.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:g.a.footerLogoLink},D.a.createElement(F,{alt:s.alt,url:f})):D.a.createElement(F,{alt:s.alt,url:f})),u,D.a.createElement("br",null)))):null}},310:function(e,t,a){"use strict";a(281),a(279);var n=a(0),u=a.n(n),r=a(272),D=a.n(r),i=a(275);a(138);t.a=function(e){var t,a=e.bio,n=e.className,r=e.github,l=e.nameSuffix,c=e.rel,o=e.size,s=e.subTitle,m=e.vertical,E=Object(i.a)().siteConfig,d=(void 0===E?{}:E).customFields.metadata.team,f=d.find((function(e){return e.github==r}))||d.find((function(e){return"ben"==e.id}));return u.a.createElement("div",{className:D()("avatar",n,(t={},t["avatar--"+o]=o,t["avatar--vertical"]=m,t))},u.a.createElement("img",{className:D()("avatar__photo","avatar__photo--"+o),src:f.avatar}),u.a.createElement("div",{className:"avatar__intro"},u.a.createElement("div",{className:"avatar__name"},u.a.createElement("a",{href:f.github,target:"_blank",rel:c},f.name),l),s&&u.a.createElement("small",{className:"avatar__subtitle"},s),!s&&a&&u.a.createElement("small",{className:"avatar__subtitle",dangerouslySetInnerHTML:{__html:f.bio}})))}},311:function(e,t,a){"use strict";var n=a(1),u=a(0),r=a.n(u),D=(a(274),a(305)),i=a(272),l=a.n(i),c=a(293),o=a(139),s=a.n(o);t.a=function(e){var t,a=e.block,u=e.colorProfile,i=e.tags,o=e.valuesOnly,m=Object(c.a)(i,u);return r.a.createElement("span",{className:l()(s.a.tags,(t={},t[s.a.tagsBlock]=a,t))},m.map((function(e,t){return r.a.createElement(D.a,Object(n.a)({key:t,valueOnly:o},e))})))}},312:function(e,t,a){var n;!function(u){"use strict";var r,D,i,l=(r=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,D=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,i=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==m(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var u=(t=String(l.masks[t]||t||l.masks.default)).slice(0,4);"UTC:"!==u&&"GMT:"!==u||(t=t.slice(4),a=!0,"GMT:"===u&&(n=!0));var E=a?"getUTC":"get",d=e[E+"Date"](),f=e[E+"Day"](),g=e[E+"Month"](),p=e[E+"FullYear"](),F=e[E+"Hours"](),v=e[E+"Minutes"](),h=e[E+"Seconds"](),b=e[E+"Milliseconds"](),y=a?0:e.getTimezoneOffset(),C=o(e),N=s(e),w={d:d,dd:c(d),ddd:l.i18n.dayNames[f],dddd:l.i18n.dayNames[f+7],m:g+1,mm:c(g+1),mmm:l.i18n.monthNames[g],mmmm:l.i18n.monthNames[g+12],yy:String(p).slice(2),yyyy:p,h:F%12||12,hh:c(F%12||12),H:F,HH:c(F),M:v,MM:c(v),s:h,ss:c(h),l:c(b,3),L:c(Math.round(b/10)),t:F<12?l.i18n.timeNames[0]:l.i18n.timeNames[1],tt:F<12?l.i18n.timeNames[2]:l.i18n.timeNames[3],T:F<12?l.i18n.timeNames[4]:l.i18n.timeNames[5],TT:F<12?l.i18n.timeNames[6]:l.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(D)||[""]).pop().replace(i,""),o:(y>0?"-":"+")+c(100*Math.floor(Math.abs(y)/60)+Math.abs(y)%60,4),S:["th","st","nd","rd"][d%10>3?0:(d%100-d%10!=10)*d%10],W:C,N:N};return t.replace(r,(function(e){return e in w?w[e]:e.slice(1,e.length-1)}))});function c(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function o(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var u=(t-a)/6048e5;return 1+Math.floor(u)}function s(e){var t=e.getDay();return 0===t&&(t=7),t}function m(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}l.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},l.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return l}.call(t,a,t,e))||(e.exports=n)}()},352:function(e,t,a){"use strict";a(370);var n=a(8),u=a(87),r=a(10),D=/./.toString,i=function(e){a(15)(RegExp.prototype,"toString",e,!0)};a(14)((function(){return"/a/b"!=D.call({source:"a",flags:"b"})}))?i((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!r&&e instanceof RegExp?u.call(e):void 0)})):"toString"!=D.name&&i((function(){return D.call(this)}))},353:function(e,t,a){e.exports=a(371)},369:function(e,t,a){"use strict";a(279),a(352),a(20);var n=a(0),u=a.n(n),r=a(310),D=a(274),i=(a(298),a(273),a(311)),l=a(272),c=a.n(l),o=a(312),s=a.n(o),m=a(293),E=a(353),d=a.n(E);t.a=function(e){var t=e.children,a=e.frontMatter,n=e.metadata,l=(e.truncated,e.isBlogPostPage,n.date),o=n.description,E=n.permalink,f=n.tags,g=a.author_github,p=a.title,F=d()(t.toString()),v=new Date(Date.parse(l)),h=Object(m.a)(f,"blog").find((function(e){return"domain"==e.category})),b=h?h.value:null;return u.a.createElement(D.a,{to:E+"/",className:c()("panel","domain-bg","domain-bg--hover","domain-bg--"+b)},u.a.createElement("article",null,u.a.createElement("h2",null,p),u.a.createElement("div",{className:"subtitle"},o),u.a.createElement(r.a,{github:g,size:"sm",subTitle:u.a.createElement(u.a.Fragment,null,u.a.createElement("time",{pubdate:"pubdate",dateTime:v.toISOString()},s()(v,"mmm dS"))," / ",F.text),rel:"author"}),u.a.createElement(i.a,{colorProfile:"blog",tags:f})))}},370:function(e,t,a){a(10)&&"g"!=/./g.flags&&a(24).f(RegExp.prototype,"flags",{configurable:!0,get:a(87)})},371:function(e,t,a){"use strict";function n(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}e.exports=function(e,t){var a,u,r=0,D=0,i=e.length-1;for((t=t||{}).wordsPerMinute=t.wordsPerMinute||200,a=t.wordBound||n;a(e[D]);)D++;for(;a(e[i]);)i--;for(u=D;u<=i;){for(;u<=i&&!a(e[u]);u++);for(r++;u<=i&&a(e[u]);u++);}var l=r/t.wordsPerMinute,c=60*l*1e3;return{text:Math.ceil(l.toFixed(2))+" min read",minutes:l,time:c,words:r}}},395:function(e,t,a){"use strict";var n=a(0),u=a.n(n),r=a(272),D=a.n(r);t.a=function(e){var t=e.github,a=e.inline,n=e.size,r=e.style,i=D()("panel","panel--button","panel--"+n,"panel--"+r,{"panel--button--inline":a});return u.a.createElement("div",{className:"row row--squished"},u.a.createElement("div",{className:"col"},u.a.createElement("a",{href:"https://twitter.com/Zoe_YunZhou",target:"_blank",className:i},u.a.createElement("div",{className:"panel--icon"},u.a.createElement("i",{className:"feather icon-twitter",title:"Twitter"})),u.a.createElement("div",null,u.a.createElement("div",{className:"panel--title"},"Follow @muta"),u.a.createElement("div",{className:"panel--description"},"Get real-time updates!")))),0!=t&&u.a.createElement("div",{className:"col"},u.a.createElement("a",{href:"https://github.com/nervosnetwork/muta",target:"_blank",className:i},u.a.createElement("div",{className:"panel--icon"},u.a.createElement("i",{className:"feather icon-github"})),u.a.createElement("div",null,u.a.createElement("div",{className:"panel--title"},"Star nervosnetwork/muta"),u.a.createElement("div",{className:"panel--description"},"Star the repo to support us.")))))}},396:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return r}));var n=a(275);function u(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_post,a=Date.parse(t.date),u=new Date,r=Math.abs(u-a),D=Math.ceil(r/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),D<30&&(!i||i<a)?t:null}function r(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}}}]);