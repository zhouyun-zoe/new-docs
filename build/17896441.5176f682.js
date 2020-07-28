(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(327),r=a(218),c=a(306),i=a(242),o=a.n(i),m=a(215),u=a.n(m),d=a(123),p=a.n(d),E=a(223),g=a(217),v=a(307);function h({headings:e,isChild:t}){if(Object(v.a)("contents__link","contents__link--active",100),!e.length)return null;let a=o.a.uniqBy(e,e=>e.value);return l.a.createElement("ul",{className:t?"":"contents"},a.map(e=>{let t=e.value.replace("<code><","<code>&lt;").replace("></code>","&gt;</code>");return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:"contents__link",dangerouslySetInnerHTML:{__html:t}}),l.a.createElement(h,{isChild:!0,headings:e.children}))}))}function f({values:e}){const t=Object(g.a)(),{siteConfig:a={}}=t,{metadata:{event_types:n}}=a.customFields;let s=[];return n.forEach(t=>{e.includes(t)?s.push(l.a.createElement("span",{key:t,className:"text--primary"},o.a.capitalize(t))):s.push(l.a.createElement("del",{key:t,className:"text--warning"},o.a.capitalize(t))),s.push(l.a.createElement("span",{key:t+"-comma"},", "))}),s.pop(),s}function _({operatingSystems:e,unsupportedOperatingSystems:t}){let a=[];return(e||[]).forEach(e=>{a.push(l.a.createElement("span",{key:e,className:"text--primary"},e)),a.push(l.a.createElement("span",{key:e+"-comma"},", "))}),(t||[]).forEach(e=>{a.push(l.a.createElement("del",{key:e,className:"text--warning"},e)),a.push(l.a.createElement("span",{key:e+"-comma"},", "))}),a.pop(),a}function N({deliveryGuarantee:e,eventTypes:t,operatingSystems:a,status:n,unsupportedOperatingSystems:s}){return n||e||a||s?l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"title"},"Support"),"beta"==n&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/guarantees/#beta",className:"text--warning",title:"This component is in beta and is not recommended for production environments. Click to learn more."},l.a.createElement("i",{className:"feather icon-alert-triangle"})," Beta Status")),"prod-ready"==n&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/guarantees/#prod-ready",className:"text--primary",title:"This component has passed reliability standards that make it production ready. Click to learn more."},l.a.createElement("i",{className:"feather icon-award"})," Prod-Ready Status")),"best_effort"==e&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/guarantees/#best-effort",className:"text--warning",title:"This component makes a best-effort delivery guarantee, and in rare cases can lose data. Click to learn more."},l.a.createElement("i",{className:"feather icon-shield-off"})," Best-Effort Delivery")),"at_least_once"==e&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/guarantees/#at-least-once",className:"text--primary",title:"This component offers an at-least-once delivery guarantee. Click to learn more."},l.a.createElement("i",{className:"feather icon-shield"})," At-Least-Once")),t&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/about/data-model/",title:"This component works on the these event types."},l.a.createElement("i",{className:"feather icon-database"})," ",l.a.createElement(f,{values:t}))),a&&s&&l.a.createElement("div",null,l.a.createElement(r.a,{to:"/docs/setup/installation/operating-systems/",title:`This component works on the ${a.join(", ")} operating systems.`},l.a.createElement("i",{className:"feather icon-cpu"})," ",l.a.createElement(_,{operatingSystems:a,unsupportedOperatingSystems:s})))):null}t.default=function(e){const{siteConfig:t={}}=Object(g.a)(),{title:a,url:n}=t,{content:i}=e,{metadata:o}=i,{description:m,editUrl:d,image:v,keywords:f,lastUpdatedAt:_,lastUpdatedBy:y,permalink:b,title:k,version:w}=o,{frontMatter:{component_title:C,delivery_guarantee:x,event_types:S,function_category:O,hide_title:T,hide_table_of_contents:L,issues_url:j,operating_systems:B,posts_path:I,source_url:z,status:D,unsupported_operating_systems:R}}=i,U=n+Object(E.a)(v);return l.a.createElement("div",null,l.a.createElement(s.a,null,k&&l.a.createElement("title",null,k," | Docs | ",a),m&&l.a.createElement("meta",{name:"description",content:m}),m&&l.a.createElement("meta",{property:"og:description",content:m}),f&&f.length&&l.a.createElement("meta",{name:"keywords",content:f.join(",")}),v&&l.a.createElement("meta",{property:"og:image",content:U}),v&&l.a.createElement("meta",{property:"twitter:image",content:U}),v&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),b&&l.a.createElement("meta",{property:"og:url",content:n+b})),l.a.createElement("div",{className:p.a.container},l.a.createElement("div",{className:p.a.leftCol},l.a.createElement("div",{className:"docItemContainer_"},l.a.createElement("article",null,w&&l.a.createElement("span",{style:{verticalAlign:"top"},className:"badge badge--info"},"Version: ",w),!o.hide_title&&l.a.createElement("header",null,l.a.createElement("div",{className:"badges"},O&&l.a.createElement(r.a,{to:"/components?functions[]="+O,className:"badge badge--primary"},O)),l.a.createElement("h1",{className:p.a.docTitle},o.title)),l.a.createElement("div",{className:"markdown"},l.a.createElement(i,null)))),!o.hide_pagination&&(o.next||o.previous)&&l.a.createElement("div",{className:p.a.paginator},l.a.createElement(c.a,{next:o.next,previous:o.previous}))),i.rightToc&&l.a.createElement("div",{className:p.a.rightCol},l.a.createElement("div",{className:u()("table-of-contents",p.a.tableOfContents)},l.a.createElement(N,{deliveryGuarantee:x,eventTypes:S,operatingSystems:B,status:D,unsupportedOperatingSystems:R}),i.rightToc.length>0&&l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"title"},"Contents"),l.a.createElement(h,{headings:i.rightToc})),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"title"},"Resources"),l.a.createElement("ul",{className:"contents"},d&&l.a.createElement("li",null,l.a.createElement("a",{href:d,className:"contents__link",target:"_blank"},l.a.createElement("i",{className:"feather icon-edit-1"})," Edit this page")),I&&l.a.createElement("li",null,l.a.createElement(r.a,{to:I,className:"contents__link"},l.a.createElement("i",{className:"feather icon-book-open"})," View Blog Posts")),j&&l.a.createElement("li",null,l.a.createElement("a",{href:j,className:"contents__link",target:"_blank"},l.a.createElement("i",{className:"feather icon-message-circle"})," View Issues")),z&&l.a.createElement("li",null,l.a.createElement("a",{href:z,className:"contents__link",target:"_blank"},l.a.createElement("i",{className:"feather icon-github"})," View Source")))),(_||y)&&l.a.createElement("div",{className:"section"},"Last updated"," ",_&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("strong",null,new Date(1e3*_).toLocaleDateString()),y&&" "),y&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,y)))))))}},306:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(218),r=a(215),c=a.n(r);a(109);t.a=function({className:e,previous:t,next:a}){return l.a.createElement("nav",{className:c()("pagination-nav",e)},t&&l.a.createElement("div",{className:"pagination-nav__item"},l.a.createElement(s.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous"),l.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.title))),a&&l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l.a.createElement(s.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next"),l.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," \xbb"))))}},307:function(e,t,a){"use strict";var n=a(0);t.a=function(e,t,a){const[l,s]=Object(n.useState)(void 0);Object(n.useEffect)(()=>{let n=[],r=[];function c(){const c=function(){let e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){const l=n[e],{top:s}=l.getBoundingClientRect();s>=0&&s<=a&&(t=l),e+=1}return t}();if(c){let a=0,n=!1;for(r=document.getElementsByClassName(e);a<r.length&&!n;){const e=r[a],{href:i}=e,o=decodeURIComponent(i.substring(i.indexOf("#")+1));c.id===o&&(l&&l.classList.remove(t),e.classList.add(t),s(e),n=!0),a+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}})}}}]);