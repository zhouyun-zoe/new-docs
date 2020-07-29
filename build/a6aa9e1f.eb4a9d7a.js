/*! For license information please see a6aa9e1f.eb4a9d7a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{203:function(e,t,a){"use strict";a.r(t);var u=a(0),n=a.n(u),r=a(275),D=a(207);var l=function(e){const{metadata:t}=e,{previousPage:a,nextPage:u}=t;return n.a.createElement("nav",{className:"pagination-nav"},n.a.createElement("div",{className:"pagination-nav__item"},a&&n.a.createElement(D.a,{className:"pagination-nav__link",to:a},n.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},u&&n.a.createElement(D.a,{className:"pagination-nav__link",to:u},n.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))},i=a(300),c=a(217),o=a(209),s=a(208),m=a(301);a(174);t.default=function(e){const{metadata:t,items:a}=e,u=Object(s.a)(),{siteConfig:E={title:siteTitle}}=u,{metadata:{post_tags:d}}=E.customFields,f=Object(o.a)(d,"blog"),F=(f.filter(e=>"type"==e.category),f.filter(e=>"domain"==e.category),"/"===t.permalink?siteTitle:"Blog");return Object(m.b)(),n.a.createElement(c.a,{title:F,description:"Muta blog posts, articles, and tips from the Muta core team."},n.a.createElement("div",{className:"blog-list container"},n.a.createElement("div",{className:"blog-list--filters"},n.a.createElement("a",{href:"/blog/rss.xml",style:{float:"right",fontSize:"1.5em",marginTop:"0px",marginLeft:"-30px",width:"30px"}},n.a.createElement("i",{className:"feather icon-rss"})),n.a.createElement("h1",null,"The Muta Blog"),n.a.createElement("p",null,"Thoughts on designing and development from the ",n.a.createElement(D.a,{to:"/community/#team"},"Muta & Nervos Network team"),"."),n.a.createElement("div",{className:"margin-vert--lg"},n.a.createElement(i.a,{github:!1,size:"s",inline:!0,style:"highlight"})),n.a.createElement("p",{className:"margin-vert--sm"},"Looking for Muta updates & announcements?"),n.a.createElement("p",null,n.a.createElement(D.a,{to:"https://github.com/nervosnetwork/muta/releases"},n.a.createElement("i",{className:"feather icon-gift"})," Check out the Muta Release"))),n.a.createElement("div",{className:"blog-list--items"},a.map(({content:e})=>n.a.createElement(r.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},n.a.createElement(e,null))),n.a.createElement(l,{metadata:t}))))}},206:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var u=a(0),n=a.n(u);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,u)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,u,n=function(e,t){if(null==e)return{};var a,u,n={},r=Object.keys(e);for(u=0;u<r.length;u++)a=r[u],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(u=0;u<r.length;u++)a=r[u],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),o=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=o(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},E=Object(u.forwardRef)((function(e,t){var a=e.components,u=e.mdxType,r=e.originalType,D=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=o(a),E=u,d=s["".concat(D,".").concat(E)]||s[E]||m[E]||r;return a?n.a.createElement(d,l({ref:t},c,{components:a})):n.a.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,u=t&&t.mdxType;if("string"==typeof e||u){var r=a.length,D=new Array(r);D[0]=E;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:u,D[1]=l;for(var c=2;c<r;c++)D[c]=a[c];return n.a.createElement.apply(null,D)}return n.a.createElement.apply(null,a)}E.displayName="MDXCreateElement"},209:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var u=a(221),n=a.n(u);function r(e,t){const a=new n.a;return e.map(e=>{let u=e;return"string"==typeof e&&(u={label:e,permalink:`/${t}/tags/${a.slug(e)}`}),function(e,t){if(e.enriched)return e;const a=e.label.split(": ",2),u=a[0],n=a[1];let r="primary";switch(u){case"type":r="blue";break;case"level":r="pink";break;default:r="primary"}return{category:u,count:e.count,enriched:!0,label:e.label,permalink:e.permalink,style:r,value:n}}(u)})}},213:function(e,t,a){"use strict";(function(e){var u=a(1),n=a(0),r=a.n(n),D=a(237),l=a.n(D),i=a(249),c=a(35),o=a(205),s=a.n(o),m=a(245),E=a(238),d=a.n(E),f=a(208),F=a(231),g=a(96),p=a.n(g);(void 0!==e?e:window).Prism=c.a,a(239),a(240),a(241),a(242),a(243),a(244);const h=/{([\d,-]+)}/,b=/title=".*"/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:D={}}}}=Object(f.a)(),[c,o]=Object(n.useState)(!1),[E,g]=Object(n.useState)(!1);Object(n.useEffect)(()=>{g(!0)},[]);const y=Object(n.useRef)(null),v=Object(n.useRef)(null);let C=[],N="";const{isDarkTheme:w}=Object(F.a)(),O=D.theme||m.a,k=D.darkTheme||O,T=w?k:O;if(a&&h.test(a)){const e=a.match(h)[1];C=d.a.parse(e).filter(e=>e>0)}a&&b.test(a)&&(N=a.match(b)[0].split("title=")[1].replace(/"+/g,"")),Object(n.useEffect)(()=>{let e;return v.current&&(e=new l.a(v.current,{target:()=>y.current})),()=>{e&&e.destroy()}},[v.current,y.current]);let A=t&&t.replace(/language-/,"");!A&&D.defaultLanguage&&(A=D.defaultLanguage);const M=()=>{window.getSelection().empty(),o(!0),setTimeout(()=>o(!1),2e3)};return r.a.createElement(i.a,Object(u.a)({},i.b,{key:E,theme:T,code:e.trim(),language:A}),({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:D})=>r.a.createElement(r.a.Fragment,null,N&&r.a.createElement("div",{style:t,className:p.a.codeBlockTitle},N),r.a.createElement("div",{className:p.a.codeBlockContent},r.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:s()(p.a.copyButton,{[p.a.copyButtonWithTitle]:N}),onClick:M},c?"Copied":"Copy"),r.a.createElement("pre",{className:s()(e,p.a.codeBlock,{[p.a.codeBlockWithTitle]:N})},r.a.createElement("div",{ref:y,className:p.a.codeBlockLines,style:t},a.map((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return C.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(u.a)({key:t},a),e.map((e,t)=>r.a.createElement("span",Object(u.a)({key:t},D({token:e,key:t})))))}))))))}}).call(this,a(53))},216:function(e,t,a){"use strict";var u=a(1),n=a(0),r=a.n(n),D=a(207),l=a(213),i=a(212),c=a(98),o=a.n(c);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?r.a.createElement(l.a,e):t},a:e=>/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(D.a,e),pre:e=>r.a.createElement("div",Object(u.a)({className:o.a.mdxCodeBlock},e)),h1:Object(i.a)("h1"),h2:Object(i.a)("h2"),h3:Object(i.a)("h3"),h4:Object(i.a)("h4"),h5:Object(i.a)("h5"),h6:Object(i.a)("h6")}},218:function(e,t,a){"use strict";var u=a(1),n=a(0),r=a.n(n),D=a(219),l=a.n(D),i=a(208),c=a(205),o=a.n(c),s=a(93),m=a.n(s);const E=()=>r.a.createElement("span",{className:o()(m.a.toggle,m.a.moon)}),d=()=>r.a.createElement("span",{className:o()(m.a.toggle,m.a.sun)});t.a=function(e){const{isClient:t}=Object(i.a)();return r.a.createElement(l.a,Object(u.a)({disabled:!t,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(d,null)}},e))}},220:function(e,t,a){"use strict";var u=a(0),n=a.n(u),r=a(207),D=a(205),l=a.n(D);t.a=function({count:e,label:t,permalink:a,style:u,value:D,valueOnly:i}){return n.a.createElement(r.a,{to:a+"/",className:l()("badge","badge--rounded","badge--"+u)},i?D:t,e&&n.a.createElement(n.a.Fragment,null," (",e,")"))}},221:function(e,t,a){var u=a(222);e.exports=l;var n=Object.hasOwnProperty,r=/\s/g,D=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~\u2019]/g;function l(){if(!(this instanceof l))return new l;this.reset()}function i(e,t){return"string"!=typeof e?"":(t||(e=e.toLowerCase()),e.trim().replace(D,"").replace(u(),"").replace(r,"-"))}l.prototype.slug=function(e,t){for(var a=i(e,!0===t),u=a;n.call(this.occurrences,a);)this.occurrences[u]++,a=u+"-"+this.occurrences[u];return this.occurrences[a]=0,a},l.prototype.reset=function(){this.occurrences=Object.create(null)},l.slug=i},222:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},223:function(e,t,a){"use strict";var u=a(1),n=a(6),r=a(0),D=a.n(r),l=a(207),i=a(205),c=a.n(i);a(94);var o=function({block:e,buttonClass:t,center:a,description:u,size:n,width:r}){return D.a.createElement("div",{className:c()("mailing-list",{"mailing-list--block":e,"mailing-list--center":a,["mailing-list--"+n]:n})},!1!==u&&D.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),D.a.createElement("form",{action:"https://dev.us17.list-manage.com/subscribe/post?u=a7b19925733ee6bf88e045485&id=d8c4724e17",method:"post",className:"mailing-list--form"},D.a.createElement("button",{className:c()("button","button--"+(t||"primary"),"button--"+n),type:"submit"},"\u2764 Subscribe us for Muta updates \u2764 ")))},s=a(210),m=a.n(s),E=a(208),d=a(211),f=a(95),F=a.n(f);function g(e){var t=e.to,a=e.href,r=e.label,i=Object(n.a)(e,["to","href","label"]),c=Object(d.a)(t);return D.a.createElement(l.a,Object(u.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},i),r)}var p=function(e){var t=e.url,a=e.alt;return D.a.createElement(m.a,{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(E.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,u=a||{},n=u.copyright,r=u.links,l=void 0===r?[]:r,i=u.logo,s=void 0===i?{}:i,f=Object(d.a)(s.src);return a?D.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===a.style})},D.a.createElement("div",{className:"container"},l&&l.length>0&&D.a.createElement("div",{className:"row footer__links"},D.a.createElement("div",{className:"col col--5 footer__col"},D.a.createElement("div",{className:"margin-bottom--md"},D.a.createElement(m.a,{className:"navbar__logo",src:"/new-docs/img/muta.svg",alt:"Muta",width:"150",height:"auto"})),D.a.createElement("div",{className:"margin-bottom--md"},D.a.createElement(o,{description:!1,width:"150px"})),D.a.createElement("div",null,D.a.createElement("a",{href:"https://twitter.com/nervosnetwork",target:"_blank"},D.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",D.a.createElement("a",{href:"https://discord.com/invite/rN35fe8",target:"_blank"},D.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",D.a.createElement("a",{href:"https://github.com/nervosnetwork/muta",target:"_blank"},D.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})))),l.map((function(e,t){return D.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?D.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?D.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?D.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):D.a.createElement("li",{key:e.href||e.to,className:"footer__item"},D.a.createElement(g,e))}))):null)}))),(s||n)&&D.a.createElement("div",{className:"text--center"},s&&s.src&&D.a.createElement("div",{className:"margin-bottom--sm"},s.href?D.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:F.a.footerLogoLink},D.a.createElement(p,{alt:s.alt,url:f})):D.a.createElement(p,{alt:s.alt,url:f})),n,D.a.createElement("br",null)))):null}},224:function(e,t,a){"use strict";var u=a(0),n=a.n(u),r=a(205),D=a.n(r),l=a(208);a(99);t.a=function({bio:e,className:t,github:a,nameSuffix:u,rel:r,size:i,subTitle:c,vertical:o}){const s=Object(l.a)(),{siteConfig:m={}}=s,{metadata:{team:E}}=m.customFields,d=E.find(e=>e.github==a)||E.find(e=>"ben"==e.id);return n.a.createElement("div",{className:D()("avatar",t,{["avatar--"+i]:i,"avatar--vertical":o})},n.a.createElement("img",{className:D()("avatar__photo","avatar__photo--"+i),src:d.avatar}),n.a.createElement("div",{className:"avatar__intro"},n.a.createElement("div",{className:"avatar__name"},n.a.createElement("a",{href:d.github,target:"_blank",rel:r},d.name),u),c&&n.a.createElement("small",{className:"avatar__subtitle"},c),!c&&e&&n.a.createElement("small",{className:"avatar__subtitle",dangerouslySetInnerHTML:{__html:d.bio}})))}},225:function(e,t,a){"use strict";var u=a(1),n=a(0),r=a.n(n),D=(a(207),a(220)),l=a(205),i=a.n(l),c=a(209),o=a(100),s=a.n(o);t.a=function({block:e,colorProfile:t,tags:a,valuesOnly:n}){const l=Object(c.a)(a,t);return r.a.createElement("span",{className:i()(s.a.tags,{[s.a.tagsBlock]:e})},l.map((e,t)=>r.a.createElement(D.a,Object(u.a)({key:t,valueOnly:n},e))))}},226:function(e,t,a){var u;!function(n){"use strict";var r,D,l,i=(r=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,D=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,l=/[^-+\dA-Z]/g,function(e,t,a,u){if(1!==arguments.length||"string"!==m(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var n=(t=String(i.masks[t]||t||i.masks.default)).slice(0,4);"UTC:"!==n&&"GMT:"!==n||(t=t.slice(4),a=!0,"GMT:"===n&&(u=!0));var E=a?"getUTC":"get",d=e[E+"Date"](),f=e[E+"Day"](),F=e[E+"Month"](),g=e[E+"FullYear"](),p=e[E+"Hours"](),h=e[E+"Minutes"](),b=e[E+"Seconds"](),y=e[E+"Milliseconds"](),v=a?0:e.getTimezoneOffset(),C=o(e),N=s(e),w={d:d,dd:c(d),ddd:i.i18n.dayNames[f],dddd:i.i18n.dayNames[f+7],m:F+1,mm:c(F+1),mmm:i.i18n.monthNames[F],mmmm:i.i18n.monthNames[F+12],yy:String(g).slice(2),yyyy:g,h:p%12||12,hh:c(p%12||12),H:p,HH:c(p),M:h,MM:c(h),s:b,ss:c(b),l:c(y,3),L:c(Math.round(y/10)),t:p<12?i.i18n.timeNames[0]:i.i18n.timeNames[1],tt:p<12?i.i18n.timeNames[2]:i.i18n.timeNames[3],T:p<12?i.i18n.timeNames[4]:i.i18n.timeNames[5],TT:p<12?i.i18n.timeNames[6]:i.i18n.timeNames[7],Z:u?"GMT":a?"UTC":(String(e).match(D)||[""]).pop().replace(l,""),o:(v>0?"-":"+")+c(100*Math.floor(Math.abs(v)/60)+Math.abs(v)%60,4),S:["th","st","nd","rd"][d%10>3?0:(d%100-d%10!=10)*d%10],W:C,N:N};return t.replace(r,(function(e){return e in w?w[e]:e.slice(1,e.length-1)}))});function c(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function o(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var u=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-u);var n=(t-a)/6048e5;return 1+Math.floor(n)}function s(e){var t=e.getDay();return 0===t&&(t=7),t}function m(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}i.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},i.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(u=function(){return i}.call(t,a,t,e))||(e.exports=u)}()},258:function(e,t,a){e.exports=a(276)},275:function(e,t,a){"use strict";var u=a(0),n=a.n(u),r=a(224),D=a(207),l=(a(216),a(206),a(225)),i=a(205),c=a.n(i),o=a(226),s=a.n(o),m=a(209),E=a(258),d=a.n(E);t.a=function(e){const{children:t,frontMatter:a,metadata:u,truncated:i,isBlogPostPage:o=!1}=e,{date:E,description:f,permalink:F,tags:g}=u,{author_github:p,title:h}=a,b=d()(t.toString()),y=new Date(Date.parse(E)),v=Object(m.a)(g,"blog").find(e=>"domain"==e.category),C=v?v.value:null;return n.a.createElement(D.a,{to:F+"/",className:c()("panel","domain-bg","domain-bg--hover","domain-bg--"+C)},n.a.createElement("article",null,n.a.createElement("h2",null,h),n.a.createElement("div",{className:"subtitle"},f),n.a.createElement(r.a,{github:p,size:"sm",subTitle:n.a.createElement(n.a.Fragment,null,n.a.createElement("time",{pubdate:"pubdate",dateTime:y.toISOString()},s()(y,"mmm dS"))," / ",b.text),rel:"author"}),n.a.createElement(l.a,{colorProfile:"blog",tags:g})))}},276:function(e,t,a){"use strict";function u(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}e.exports=function(e,t){var a,n,r=0,D=0,l=e.length-1;for((t=t||{}).wordsPerMinute=t.wordsPerMinute||200,a=t.wordBound||u;a(e[D]);)D++;for(;a(e[l]);)l--;for(n=D;n<=l;){for(;n<=l&&!a(e[n]);n++);for(r++;n<=l&&a(e[n]);n++);}var i=r/t.wordsPerMinute,c=60*i*1e3;return{text:Math.ceil(i.toFixed(2))+" min read",minutes:i,time:c,words:r}}},300:function(e,t,a){"use strict";var u=a(0),n=a.n(u),r=a(205),D=a.n(r);t.a=function({github:e,inline:t,size:a,style:u}){let r=D()("panel","panel--button","panel--"+a,"panel--"+u,{"panel--button--inline":t});return n.a.createElement("div",{className:"row row--squished"},n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"https://twitter.com/Zoe_YunZhou",target:"_blank",className:r},n.a.createElement("div",{className:"panel--icon"},n.a.createElement("i",{className:"feather icon-twitter",title:"Twitter"})),n.a.createElement("div",null,n.a.createElement("div",{className:"panel--title"},"Follow @muta"),n.a.createElement("div",{className:"panel--description"},"Get real-time updates!")))),0!=e&&n.a.createElement("div",{className:"col"},n.a.createElement("a",{href:"https://github.com/nervosnetwork/muta",target:"_blank",className:r},n.a.createElement("div",{className:"panel--icon"},n.a.createElement("i",{className:"feather icon-github"})),n.a.createElement("div",null,n.a.createElement("div",{className:"panel--title"},"Star nervosnetwork/muta"),n.a.createElement("div",{className:"panel--description"},"Star the repo to support us.")))))}},301:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var u=a(208);function n(){const e=Object(u.a)(),{siteConfig:t={}}=e,{metadata:{latest_post:a}}=t.customFields,n=Date.parse(a.date),r=new Date,D=Math.abs(r-n),l=Math.ceil(D/864e5);let i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),l<30&&(!i||i<n)?a:null}function r(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}}}]);