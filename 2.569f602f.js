/*! For license information please see 2.569f602f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{221:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},s=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},l=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(s(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),u=n(545),d=n(372);t.STATUS={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};var h=Object.create(null),p=function(e){function n(n){var r=e.call(this,n)||this;return r._isMounted=!1,r.handleLoad=function(e){r._isMounted&&r.setState({content:e,status:t.STATUS.LOADED},r.getElement)},r.handleError=function(e){var n=r.props.onError,a="Browser does not support SVG"===e.message?t.STATUS.UNSUPPORTED:t.STATUS.FAILED;r._isMounted&&r.setState({status:a},(function(){"function"==typeof n&&n(e)}))},r.request=function(){var e=r.props,n=e.cacheRequests,a=e.src;try{return n&&(h[a]={content:"",status:t.STATUS.LOADING,queue:[]}),fetch(a).then((function(e){var t=e.headers.get("content-type"),n=s((t||"").split(/ ?; ?/),1)[0];if(e.status>299)throw new d.InlineSVGError("Not Found");if(!["image/svg+xml","text/plain"].some((function(e){return n.indexOf(e)>=0})))throw new d.InlineSVGError("Content type isn't valid: "+n);return e.text()})).then((function(e){if(r.handleLoad(e),n){var o=h[a];o&&(o.content=e,o.status=t.STATUS.LOADED,o.queue=o.queue.filter((function(t){return t(e),!1})))}})).catch((function(e){n&&delete h[a],r.handleError(e)}))}catch(o){r.handleError(new d.InlineSVGError(o.message))}},r.state={content:"",element:null,hasCache:!!n.cacheRequests&&!!h[n.src],status:t.STATUS.PENDING},r.hash=n.uniqueHash||d.randomString(8),r}return a(n,e),n.prototype.componentDidMount=function(){if(this._isMounted=!0,d.canUseDOM()){var e=this.state.status,n=this.props.src;try{if(e===t.STATUS.PENDING){if(!d.isSupportedEnvironment())throw new d.InlineSVGError("Browser does not support SVG");if(!n)throw new d.InlineSVGError("Missing src");this.load()}}catch(r){this.handleError(r)}}else this.handleError(new d.InlineSVGError("No DOM"))},n.prototype.componentDidUpdate=function(e,n){if(d.canUseDOM()){var r=this.state,a=r.hasCache,o=r.status,i=this.props,s=i.onLoad,l=i.src;if(n.status!==t.STATUS.READY&&o===t.STATUS.READY&&s&&s(l,a),e.src!==l){if(!l)return void this.handleError(new d.InlineSVGError("Missing src"));this.load()}}},n.prototype.componentWillUnmount=function(){this._isMounted=!1},n.prototype.processSVG=function(){var e=this.state.content,t=this.props.preProcessor;return t?t(e):e},n.prototype.updateSVGAttributes=function(e){var t=this,n=this.props,r=n.baseURL,a=void 0===r?"":r,o=n.uniquifyIDs,i=["id","href","xlink:href","xlink:role","xlink:arcrole"],s=["href","xlink:href"];return o?(l(e.children).map((function(e){if(e.attributes&&e.attributes.length){var n=Object.values(e.attributes);n.forEach((function(e){var n=e.value.match(/url\((.*?)\)/);n&&n[1]&&(e.value=e.value.replace(n[0],"url("+a+n[1]+"__"+t.hash+")"))})),i.forEach((function(e){var r,a,o=n.find((function(t){return t.name===e}));!o||(r=e,a=o.value,s.indexOf(r)>=0&&a&&a.indexOf("#")<0)||(o.value=o.value+"__"+t.hash)}))}return e.children.length&&(e=t.updateSVGAttributes(e)),e})),e):e},n.prototype.getNode=function(){var e=this.props,t=e.description,n=e.title;try{var r=this.processSVG(),a=u.default(r,{nodeOnly:!0});if(!(a&&a instanceof SVGSVGElement))throw new d.InlineSVGError("Could not convert the src to a DOM Node");var o=this.updateSVGAttributes(a);if(t){var i=o.querySelector("desc");i&&i.parentNode&&i.parentNode.removeChild(i);var s=document.createElement("desc");s.innerHTML=t,o.prepend(s)}if(n){var l=o.querySelector("title");l&&l.parentNode&&l.parentNode.removeChild(l);var c=document.createElement("title");c.innerHTML=n,o.prepend(c)}return o}catch(h){this.handleError(h)}},n.prototype.getElement=function(){try{var e=this.getNode(),n=u.default(e);if(!n||!c.isValidElement(n))throw new d.InlineSVGError("Could not convert the src to a React element");this.setState({element:n,status:t.STATUS.READY})}catch(r){this.handleError(new d.InlineSVGError(r.message))}},n.prototype.load=function(){var e=this;this._isMounted&&this.setState({content:"",element:null,status:t.STATUS.LOADING},(function(){var n=e.props,r=n.cacheRequests,a=n.src,o=r&&h[a];if(o)o.status===t.STATUS.LOADING?o.queue.push(e.handleLoad):o.status===t.STATUS.LOADED&&e.handleLoad(o.content);else{var i,s=a.match(/data:image\/svg[^,]*?(;base64)?,(.*)/);s?i=s[1]?atob(s[2]):decodeURIComponent(s[2]):a.indexOf("<svg")>=0&&(i=a),i?e.handleLoad(i):e.request()}}))},n.prototype.render=function(){if(!d.canUseDOM())return null;var e=this.state,n=e.element,r=e.status,a=this.props,s=(a.baseURL,a.cacheRequests,a.children),l=void 0===s?null:s,u=(a.description,a.innerRef),h=a.loader,p=void 0===h?null:h,f=(a.onError,a.onLoad,a.preProcessor,a.src,a.title,a.uniqueHash,a.uniquifyIDs,i(a,["baseURL","cacheRequests","children","description","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs"]));return n?c.cloneElement(n,o({ref:u},f)):[t.STATUS.UNSUPPORTED,t.STATUS.FAILED].indexOf(r)>-1?l:p},n.defaultProps={cacheRequests:!0,uniquifyIDs:!1},n}(c.PureComponent);t.default=p},229:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(327),i=n(241),s=n(217),l=n(223);const c="",u="dark";var d=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(s.a)(),[t,n]=Object(r.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):c),a=Object(r.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[n]),o=Object(r.useCallback)(()=>{n(c),a(c)},[]),i=Object(r.useCallback)(()=>{n(u),a(u)},[]);return Object(r.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(r.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&n(e)}catch(t){console.error(t)}},[n]),Object(r.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{n(e?u:c)})},[]),{isDarkTheme:t===u,setLightTheme:o,setDarkTheme:i}},h=n(269);var p=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=d();return a.a.createElement(h.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)};var f=()=>{const[e,t]=Object(r.useState)({}),n=Object(r.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(n){console.error(n)}},[]);return Object(r.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith("docusaurus.tab.")){e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,r)=>{t(t=>({...t,[e]:r})),n(e,r)}}},m=n(246);var g=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=f();return a.a.createElement(m.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)},v=n(111),b=n.n(v);var k=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(s.a)(),{id:t,content:n,backgroundColor:o,textColor:i}=e,[l,c]=Object(r.useState)(!0);return Object(r.useEffect)(()=>{const e=localStorage.getItem("docusaurus.announcement.id"),n=t!==e;localStorage.setItem("docusaurus.announcement.id",t),n&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(n||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&c(!1)},[]),!n||l?null:a.a.createElement("div",{className:b.a.announcementBar,style:{backgroundColor:o,color:i},role:"banner"},a.a.createElement("div",{className:b.a.announcementBarContent,dangerouslySetInnerHTML:{__html:n}}),a.a.createElement("button",{type:"button",className:b.a.announcementBarClose,onClick:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),c(!0)},"aria-label":"Close"},a.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},y=n(1),E=n(215),O=n.n(E),S=n(218),w=(n(12),n(264));n(112);var x=e=>{const[t,o]=Object(r.useState)(!1),i=Object(r.useRef)(null),{siteConfig:l={}}=Object(s.a)(),{themeConfig:{algolia:c}}=l,u=Object(w.c)();const d=(e=!0)=>{t||Promise.all([n.e(95).then(n.t.bind(null,546,7)),n.e(67).then(n.t.bind(null,547,7))]).then(([{default:t}])=>{o(!0),window.docsearch=t,function(e){window.docsearch({appId:c.appId,apiKey:c.apiKey,indexName:c.indexName,inputSelector:"#search_input_react",algoliaOptions:c.algoliaOptions,handleSelected:(e,t,n)=>{const r=document.createElement("a");r.href=n.url;const a="#__docusaurus"===r.hash?""+r.pathname:`${r.pathname}${r.hash}`;u.push(a)}}),e&&i.current.focus()}(e)})},h=Object(r.useCallback)(()=>{d(),t&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),p=Object(r.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),f=Object(r.useCallback)(e=>{const t="mouseover"!==e.type;d(t)});return a.a.createElement("div",{className:"navbar__search",key:"search-box"},a.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:O()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),a.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:O()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:f,onFocus:f,onBlur:p,ref:i}))},_=n(230),C=n(232);var T=function(e){const[t,n]=Object(r.useState)(e);return Object(r.useEffect)(()=>{const e=()=>n(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,n]},j=n(13),N=n.n(j);const D=()=>({scrollX:N.a.canUseDOM?window.pageXOffset:0,scrollY:N.a.canUseDOM?window.pageYOffset:0});var M=(e,t=[])=>{const[n,a]=Object(r.useState)(D()),o=()=>{const t=D();a(t),e&&e(t)};return Object(r.useEffect)(()=>(window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o,{passive:!0})),t),n};var L=e=>{const[t,n]=Object(r.useState)(!0),[a,o]=Object(r.useState)(!1),[i,s]=Object(r.useState)(0),[l,c]=Object(r.useState)(0),u=Object(r.useCallback)(e=>{null!==e&&c(e.getBoundingClientRect().height)},[]),d=Object(w.d)(),[h,p]=T(d.hash);return M(({scrollY:t})=>{if(!e)return;if(0===t&&n(!0),t<l)return;if(a)return o(!1),n(!1),void s(t);const r=document.documentElement.scrollHeight-l,c=window.innerHeight;i&&t>=i?n(!1):t+c<r&&n(!0),s(t)},[i,l]),Object(r.useEffect)(()=>{e&&(n(!0),p(d.hash))},[d]),Object(r.useEffect)(()=>{e&&h&&o(!0)},[h]),{navbarRef:u,isNavbarVisible:t}},A=n(328),P=n(329),I=n(113),U=n.n(I);function R({activeBasePath:e,to:t,href:n,label:r,activeClassName:o="navbar__link--active",...i}){const s=Object(l.a)(t),c=Object(l.a)(e);return a.a.createElement(S.a,Object(y.a)({},n?{target:"_blank",rel:"noopener noreferrer",href:n}:{isNavLink:!0,activeClassName:o,to:s,...e?{isActive:(e,t)=>t.pathname.startsWith(c)}:null},i),r)}function B({items:e,position:t,className:n,...r}){const o=(e,t=!1)=>O()({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?a.a.createElement("div",{className:O()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},a.a.createElement(R,Object(y.a)({className:o(n)},r,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),r.label),a.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},n)=>a.a.createElement("li",{key:n},a.a.createElement(R,Object(y.a)({activeClassName:"dropdown__link--active",className:o(e,!0)},t)))))):a.a.createElement(R,Object(y.a)({className:o(n)},r))}function G({items:e,className:t,...n}){const r=(e,t=!1)=>O()("menu__link",{"menu__link--sublist":t},e);return e?a.a.createElement("li",{className:"menu__list-item"},a.a.createElement(R,Object(y.a)({className:r(t,!0)},n),n.label),a.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},o)=>a.a.createElement("li",{className:"menu__list-item",key:o},a.a.createElement(R,Object(y.a)({activeClassName:"menu__link--active",className:r(e)},t,{onClick:n.onClick})))))):a.a.createElement("li",{className:"menu__list-item"},a.a.createElement(R,Object(y.a)({className:r(t)},n)))}var V=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:n=!1}={},disableDarkMode:o=!1}},isClient:i}=Object(s.a)(),[l,c]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1),{isDarkTheme:h,setLightTheme:p,setDarkTheme:f}=Object(C.a)(),{navbarRef:m,isNavbarVisible:g}=L(n),{logoLink:v,logoLinkProps:b,logoImageUrl:k,logoAlt:E}=Object(P.a)();Object(A.a)(l);const w=Object(r.useCallback)(()=>{c(!0)},[c]),T=Object(r.useCallback)(()=>{c(!1)},[c]),j=Object(r.useCallback)(e=>e.target.checked?f():p(),[p,f]);return a.a.createElement("nav",{ref:m,className:O()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":l,[U.a.navbarHideable]:n,[U.a.navbarHidden]:!g})},a.a.createElement("div",{className:"navbar__inner"},a.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&a.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:w,onKeyDown:w},a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.a.createElement(S.a,Object(y.a)({className:"navbar__brand",to:v},b),null!=k&&a.a.createElement("img",{key:i,className:"navbar__logo",src:k,alt:E}),null!=e&&a.a.createElement("strong",{className:O()("navbar__title",{[U.a.hideLogoText]:u})},e)),t.filter(e=>"left"===e.position).map((e,t)=>a.a.createElement(B,Object(y.a)({},e,{key:t})))),a.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>a.a.createElement(B,Object(y.a)({},e,{key:t}))),!o&&a.a.createElement(_.a,{className:U.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:h,onChange:j}),a.a.createElement(x,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),a.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:T}),a.a.createElement("div",{className:"navbar-sidebar"},a.a.createElement("div",{className:"navbar-sidebar__brand"},a.a.createElement(S.a,Object(y.a)({className:"navbar__brand",onClick:T,to:v},b),null!=k&&a.a.createElement("img",{key:i,className:"navbar__logo",src:k,alt:E}),null!=e&&a.a.createElement("strong",{className:"navbar__title"},e)),!o&&l&&a.a.createElement(_.a,{"aria-label":"Dark mode toggle in sidebar",checked:h,onChange:j})),a.a.createElement("div",{className:"navbar-sidebar__items"},a.a.createElement("div",{className:"menu"},a.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>a.a.createElement(G,Object(y.a)({},e,{onClick:T,key:t}))))))))},q=n(236);n(114);t.a=function(e){const{siteConfig:t={}}=Object(s.a)(),{favicon:n,title:r,themeConfig:{image:c},url:u}=t,{children:d,title:h,noFooter:f,description:m,image:v,keywords:b,permalink:y,version:E}=e,O=h?`${h} | ${r}`:r,S=v||c;let w=u+Object(l.a)(S);Object(i.a)(S)||(w=S);const x=Object(l.a)(n);return a.a.createElement(p,null,a.a.createElement(g,null,a.a.createElement(o.a,null,a.a.createElement("html",{lang:"en"}),O&&a.a.createElement("title",null,O),O&&a.a.createElement("meta",{property:"og:title",content:O}),n&&a.a.createElement("link",{rel:"shortcut icon",href:x}),m&&a.a.createElement("meta",{name:"description",content:m}),m&&a.a.createElement("meta",{property:"og:description",content:m}),E&&a.a.createElement("meta",{name:"docsearch:version",content:E}),b&&b.length&&a.a.createElement("meta",{name:"keywords",content:b.join(",")}),S&&a.a.createElement("meta",{property:"og:image",content:w}),S&&a.a.createElement("meta",{property:"twitter:image",content:w}),S&&a.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),y&&a.a.createElement("meta",{property:"og:url",content:u+y}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),a.a.createElement(k,null),a.a.createElement(V,null),a.a.createElement("div",{className:"main-wrapper"},d),!f&&a.a.createElement(q.a,null)))}},231:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=h(o),s=h(n(215)),l=h(n(8)),c=h(n(369)),u=h(n(370)),d=n(371);function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),o=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return i.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},i.default.createElement("div",{className:"react-toggle-track"},i.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),i.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),i.default.createElement("div",{className:"react-toggle-thumb"}),i.default.createElement("input",r({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=p,p.displayName="Toggle",p.defaultProps={icons:{checked:i.default.createElement(c.default,null),unchecked:i.default.createElement(u.default,null)}},p.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},232:function(e,t,n){"use strict";var r=n(0),a=n(269);t.a=function(){return Object(r.useContext)(a.a)}},246:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=a},264:function(e,t,n){"use strict";var r=n(19);n.d(t,"a",(function(){return r.d})),n.d(t,"b",(function(){return r.e})),n.d(t,"c",(function(){return r.f})),n.d(t,"d",(function(){return r.g}))},269:function(e,t,n){"use strict";var r=n(0);const a=n.n(r).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=a},328:function(e,t,n){"use strict";var r=n(0);t.a=function(e=!0){Object(r.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},329:function(e,t,n){"use strict";var r=n(217),a=n(232),o=n(223),i=n(241);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(r.a)(),{isDarkTheme:n}=Object(a.a)(),s=t.href||e;let l={};t.target?l={target:t.target}:Object(i.a)(s)||(l={rel:"noopener noreferrer",target:"_blank"});const c=t.srcDark&&n?t.srcDark:t.src;return{logoLink:s,logoLinkProps:l,logoImageUrl:Object(o.a)(c),logoAlt:t.alt}}},330:function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},369:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},370:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},372:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=n(330);t.canUseDOM=function(){return o.canUseDOM},t.supportsInlineSVG=function(){if(!document)return!1;var e=document.createElement("div");return e.innerHTML="<svg />",e.firstChild&&"http://www.w3.org/2000/svg"===e.firstChild.namespaceURI};var i=function(e){function t(t,n){var r=e.call(this)||this;return r.name="InlineSVGError",r.message=t,r.data=n,r}return a(t,e),t}(Error);t.InlineSVGError=i,t.isSupportedEnvironment=function(){return t.supportsInlineSVG()&&"undefined"!=typeof window&&null!==window},t.randomString=function(e){for(var t,n="abcdefghijklmnopqrstuvwxyz",r=""+n+n.toUpperCase()+"1234567890",a="",o=0;o<e;o++)a+=(t=r)[Math.floor(Math.random()*t.length)];return a}},545:function(e,t,n){"use strict";n.r(t),n.d(t,"convertFromNode",(function(){return d})),n.d(t,"convertFromString",(function(){return h})),n.d(t,"default",(function(){return p}));var r=n(0),a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},o=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],i={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,o=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(s){a={error:s}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(a)throw a.error}}return i},c=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e};function u(e,t){var n={key:t};if(e instanceof Element){var r=e.getAttribute("class");r&&(n.className=r),c(e.attributes).forEach((function(e){switch(e.name){case"class":break;case"style":n[e.name]=e.value.split(/ ?; ?/).reduce((function(e,t){var n=a(t.split(/ ?: ?/),2),r=n[0],o=n[1];return r&&o&&(e[r.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))]=Number.isNaN(Number(o))?o:Number(o)),e}),{});break;case"checked":case"disabled":case"selected":case"autoplay":case"controls":n[e.name]=e.name;break;default:n[i[e.name]||e.name]=e.value}}))}return n}function d(e,t){if(void 0===t&&(t={}),!(e&&e instanceof Node))return null;var n,a=t.actions,i=void 0===a?[]:a,l=t.index,h=void 0===l?0:l,p=t.level,f=void 0===p?0:p,m=e,g=f+"-"+h,v=[];if(Array.isArray(i)&&i.forEach((function(t){t.condition(m,g,f)&&("function"==typeof t.pre&&((m=t.pre(m,g,f))instanceof Node||(m=e)),"function"==typeof t.post&&v.push(t.post(m,g,f)))})),v.length)return v;switch(m.nodeType){case 1:return r.createElement((n=m.nodeName,/[a-z]+[A-Z]+[a-z]+/.test(n)?n:n.toLowerCase()),u(m,g),function(e,t,n){var r=c(e).map((function(e,r){return d(e,s(s({},n),{index:r,level:t+1}))})).filter(Boolean);return r.length?r:null}(m.childNodes,f,t));case 3:var b=m.nodeValue.toString();if(/^\s+$/.test(b))return null;if(!m.parentNode)return b;var k=m.parentNode.nodeName.toLowerCase();return-1!==o.indexOf(k)?(/\S/.test(b)&&console.warn("A textNode is not allowed inside '"+k+"'. Your text \""+b+'" will be ignored'),null):b;case 8:default:return null}}function h(e,t){if(void 0===t&&(t={}),!e||"string"!=typeof e)return null;var n=t.nodeOnly,r=void 0!==n&&n,a=t.selector,o=void 0===a?"body > *":a,i=t.type,s=void 0===i?"text/html":i;try{var l=(new DOMParser).parseFromString(e,s).querySelector(o);if(!(l instanceof Node))throw new Error("Error parsing input");return r?l:d(l,t)}catch(c){0}return null}function p(e,t){return void 0===t&&(t={}),"string"==typeof e?h(e,t):e instanceof Node?d(e,t):null}}}]);