(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{117:function(e,t,a){"use strict";a.r(t);a(12);var r=a(0),n=a.n(r),l=a(217),c=a(207);t.default=function(e){const{tags:t}=e,a={};Object.keys(t).forEach(e=>{const t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)});const r=Object.entries(a).sort(([e],[t])=>e===t?0:e>t?1:-1).map(([e,a])=>n.a.createElement("div",{key:e},n.a.createElement("h3",null,e),a.map(e=>n.a.createElement(c.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")),n.a.createElement("hr",null))).filter(e=>null!=e);return n.a.createElement(l.a,{title:"Tags",description:"Blog Tags"},n.a.createElement("div",{className:"container margin-vert--lg"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement("h1",null,"Tags"),n.a.createElement("div",{className:"margin-vert--lg"},r)))))}},218:function(e,t,a){"use strict";var r=a(1),n=a(0),l=a.n(n),c=a(219),s=a.n(c),o=a(208),i=a(205),m=a.n(i),u=a(93),f=a.n(u);const d=()=>l.a.createElement("span",{className:m()(f.a.toggle,f.a.moon)}),E=()=>l.a.createElement("span",{className:m()(f.a.toggle,f.a.sun)});t.a=function(e){const{isClient:t}=Object(o.a)();return l.a.createElement(s.a,Object(r.a)({disabled:!t,icons:{checked:l.a.createElement(d,null),unchecked:l.a.createElement(E,null)}},e))}},223:function(e,t,a){"use strict";var r=a(1),n=a(6),l=a(0),c=a.n(l),s=a(207),o=a(205),i=a.n(o);a(94);var m=function({block:e,buttonClass:t,center:a,description:r,size:n,width:l}){return c.a.createElement("div",{className:i()("mailing-list",{"mailing-list--block":e,"mailing-list--center":a,["mailing-list--"+n]:n})},!1!==r&&c.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),c.a.createElement("form",{action:"https://dev.us17.list-manage.com/subscribe/post?u=a7b19925733ee6bf88e045485&id=d8c4724e17",method:"post",className:"mailing-list--form"},c.a.createElement("button",{className:i()("button","button--"+(t||"primary"),"button--"+n),type:"submit"},"\u2764 Subscribe us for Muta updates \u2764 ")))},u=a(210),f=a.n(u),d=a(208),E=a(211),h=a(95),g=a.n(h);function b(e){var t=e.to,a=e.href,l=e.label,o=Object(n.a)(e,["to","href","label"]),i=Object(E.a)(t);return c.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},o),l)}var v=function(e){var t=e.url,a=e.alt;return c.a.createElement(f.a,{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(d.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},n=r.copyright,l=r.links,s=void 0===l?[]:l,o=r.logo,u=void 0===o?{}:o,h=Object(E.a)(u.src);return a?c.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===a.style})},c.a.createElement("div",{className:"container"},s&&s.length>0&&c.a.createElement("div",{className:"row footer__links"},c.a.createElement("div",{className:"col col--5 footer__col"},c.a.createElement("div",{className:"margin-bottom--md"},c.a.createElement(f.a,{className:"navbar__logo",src:"/new-docs/img/muta.svg",alt:"Muta",width:"150",height:"auto"})),c.a.createElement("div",{className:"margin-bottom--md"},c.a.createElement(m,{description:!1,width:"150px"})),c.a.createElement("div",null,c.a.createElement("a",{href:"https://twitter.com/nervosnetwork",target:"_blank"},c.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",c.a.createElement("a",{href:"https://discord.com/invite/rN35fe8",target:"_blank"},c.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",c.a.createElement("a",{href:"https://github.com/nervosnetwork/muta",target:"_blank"},c.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})))),s.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(b,e))}))):null)}))),(u||n)&&c.a.createElement("div",{className:"text--center"},u&&u.src&&c.a.createElement("div",{className:"margin-bottom--sm"},u.href?c.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:g.a.footerLogoLink},c.a.createElement(v,{alt:u.alt,url:h})):c.a.createElement(v,{alt:u.alt,url:h})),n,c.a.createElement("br",null)))):null}}}]);