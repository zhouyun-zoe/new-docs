/*! For license information please see ac743589.30d2fb07.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(251)),i=n(256),c={last_modified_on:"2020-04-01",$schema:"/.meta/.schemas/guides.json",title:"Next Steps",description:"Where to go after the basics",series_position:5,author_github:"https://github.com/zhouyun-zoe",tags:["type: post","domain: ux"],hide_pagination:!0},s={categories:[{name:"getting-started",title:"Getting Started",description:"Take Vector from zero to production in under 10 minutes.",permalink:"/new-docs/guides/getting-started"}],coverLabel:"Next Steps",description:"Where to go after the basics",permalink:"/new-docs/guides/getting-started/next-steps",readingTime:"1 min read",seriesPosition:5,source:"@site/guides/getting-started/next-steps.md",tags:[{label:"type: post",permalink:"/new-docs/guides/tags/type-post"},{label:"domain: ux",permalink:"/new-docs/guides/tags/domain-ux"}],title:"Next Steps",truncated:!1,prevItem:{title:"Visualizing your node using Prometheus and Grafana",permalink:"/new-docs/guides/getting-started/monitoring"},nextItem:{title:"Service Tutorial",permalink:"/new-docs/guides/advanced/service-demo"}},u=[],l={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You've completed the getting started series! You should understand the basic\nfundamentals to deploy and run Muta in most environments. If you\nwant to extract the full potential of Muta then proceed to the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/advanced/"}),"advanced guides"),". We recommend the following to get you\nstarted:"),Object(o.b)(i.a,{to:"/guides/advanced/service-demo/",leftIcon:"book",mdxType:"Jump"},"How to wirte a service"),Object(o.b)(i.a,{to:"/guides/advanced/poe-chain/",leftIcon:"book",mdxType:"Jump"},"Build a POE blockchain"))}p.isMDXComponent=!0},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return n?a.a.createElement(m,c({ref:t},u,{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},252:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},253:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(19),i=n(257),c=n(13),s=n.n(c),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var{isNavLink:t}=e,n=u(e,["isNavLink"]);const{to:c,href:l}=n,p=c||l,d=Object(i.a)(p),f=Object(r.useRef)(!1),m=t?o.c:o.b,g=s.a.canUseIntersectionObserver;let b;return Object(r.useEffect)(()=>(!g&&d&&window.docusaurus.prefetch(p),()=>{g&&b&&b.disconnect()}),[p,g,d]),p&&d&&!p.startsWith("#")?a.a.createElement(m,Object.assign({},n,{onMouseEnter:()=>{f.current||(window.docusaurus.preload(p),f.current=!0)},innerRef:e=>{var t,n;g&&e&&d&&(t=e,n=()=>{window.docusaurus.prefetch(p)},b=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())})}),b.observe(t))},to:p})):a.a.createElement("a",Object.assign({},n,{href:p}))}},256:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(253),i=n(252),c=n.n(i);n(96);t.a=function({children:e,className:t,badge:n,leftIcon:r,rightIcon:i,size:s,target:u,to:l}){let p=c()("jump-to","jump-to--"+s,t),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},r&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+r})),a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${i||"chevron-right"} arrow`}))));return u?a.a.createElement("a",{href:l,target:u,className:p},d):a.a.createElement(o.a,{to:l,className:p},d)}},257:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);