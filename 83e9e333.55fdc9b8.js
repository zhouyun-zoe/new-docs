(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{179:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(265),c=(a(108),a(254));t.default=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{metadata:{team:a}}=t.customFields;return l.a.createElement(r.a,{title:"Contact",description:"Contact the Muta team"},l.a.createElement("header",{className:"hero"},l.a.createElement("div",{className:"container container--fluid"},l.a.createElement("h1",null,"Contact"),l.a.createElement("div",{className:"hero--subtitle"},"Muta is a ",l.a.createElement("a",{href:"https://www.nervos.org/"},"Nervos Network")," open-source product. You can contact the Muta & Nervos team using any of the options below."))),l.a.createElement("main",null,l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"mailto:hi-muta@cryptape.com",className:"panel text--center"},l.a.createElement("div",{className:"panel--icon"},l.a.createElement("i",{className:"feather icon-mail"})),l.a.createElement("div",{className:"panel--title"},"hi-muta@cryptape.com"),l.a.createElement("div",{className:"panel--description"},"Shoot us an email"))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://twitter.com/nervosnetwork",target:"_blank",className:"panel text--center"},l.a.createElement("div",{className:"panel--icon"},l.a.createElement("i",{className:"feather icon-twitter"})),l.a.createElement("div",{className:"panel--title"},"@nervosnetwork"),l.a.createElement("div",{className:"panel--description"},"Tweet at us"))),l.a.createElement("div",{className:"col"},l.a.createElement("a",{href:"https://discord.com/invite/rN35fe8",target:"_blank",className:"panel text--center"},l.a.createElement("div",{className:"panel--icon"},l.a.createElement("i",{className:"feather icon-message-circle"})),l.a.createElement("div",{className:"panel--title"},"Discord"),l.a.createElement("div",{className:"panel--description"},"Join our discord"))))))))}},266:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),c=a(267),s=a.n(c),o=a(254),i=a(252),m=a.n(i),u=a(93),d=a.n(u);const E=()=>r.a.createElement("span",{className:m()(d.a.toggle,d.a.moon)}),h=()=>r.a.createElement("span",{className:m()(d.a.toggle,d.a.sun)});t.a=function(e){const{isClient:t}=Object(o.a)();return r.a.createElement(s.a,Object(n.a)({disabled:!t,icons:{checked:r.a.createElement(E,null),unchecked:r.a.createElement(h,null)}},e))}},272:function(e,t,a){"use strict";var n=a(1),l=a(6),r=a(0),c=a.n(r),s=a(253),o=a(252),i=a.n(o);a(94);var m=function({block:e,buttonClass:t,center:a,description:n,size:l,width:r}){return c.a.createElement("div",{className:i()("mailing-list",{"mailing-list--block":e,"mailing-list--center":a,["mailing-list--"+l]:l})},!1!==n&&c.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),c.a.createElement("form",{action:"https://dev.us17.list-manage.com/subscribe/post?u=a7b19925733ee6bf88e045485&id=d8c4724e17",method:"post",className:"mailing-list--form"},c.a.createElement("button",{className:i()("button","button--"+(t||"primary"),"button--"+l),type:"submit"},"\u2764 Subscribe us for Muta updates \u2764 ")))},u=a(259),d=a.n(u),E=a(254),h=a(260),f=a(95),N=a.n(f);function p(e){var t=e.to,a=e.href,r=e.label,o=Object(l.a)(e,["to","href","label"]),i=Object(h.a)(t);return c.a.createElement(s.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:i},o),r)}var v=function(e){var t=e.url,a=e.alt;return c.a.createElement(d.a,{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(E.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,r=n.links,s=void 0===r?[]:r,o=n.logo,u=void 0===o?{}:o,f=Object(h.a)(u.src);return a?c.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===a.style})},c.a.createElement("div",{className:"container"},s&&s.length>0&&c.a.createElement("div",{className:"row footer__links"},c.a.createElement("div",{className:"col col--5 footer__col"},c.a.createElement("div",{className:"margin-bottom--md"},c.a.createElement(d.a,{className:"navbar__logo",src:"/new-docs/img/muta.svg",alt:"Muta",width:"150",height:"auto"})),c.a.createElement("div",{className:"margin-bottom--md"},c.a.createElement(m,{description:!1,width:"150px"})),c.a.createElement("div",null,c.a.createElement("a",{href:"https://twitter.com/nervosnetwork",target:"_blank"},c.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",c.a.createElement("a",{href:"https://discord.com/invite/rN35fe8",target:"_blank"},c.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",c.a.createElement("a",{href:"https://github.com/nervosnetwork/muta",target:"_blank"},c.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})))),s.map((function(e,t){return c.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?c.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(p,e))}))):null)}))),(u||l)&&c.a.createElement("div",{className:"text--center"},u&&u.src&&c.a.createElement("div",{className:"margin-bottom--sm"},u.href?c.a.createElement("a",{href:u.href,target:"_blank",rel:"noopener noreferrer",className:N.a.footerLogoLink},c.a.createElement(v,{alt:u.alt,url:f})):c.a.createElement(v,{alt:u.alt,url:f})),l,c.a.createElement("br",null)))):null}}}]);