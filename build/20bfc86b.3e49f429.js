/*! For license information please see 20bfc86b.3e49f429.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(1),r=n(6),s=(n(0),n(216)),o=n(224),i=n(259),c=n(226),l=n(225),u={last_modified_on:"2020-07-13",title:"Structuring Your Log Data",description:"How to parse log data in Vector",series_position:2,author_github:"https://github.com/zhouyun-zoe",tags:["type: tutorial","domain: config"]},p={categories:[{name:"getting-started",title:"Getting Started",description:"Take Vector from zero to production in under 10 minutes.",permalink:"/new-docs/guides/getting-started"}],coverLabel:"Structuring Your Log Data",description:"How to parse log data in Vector",permalink:"/new-docs/guides/getting-started/structuring",readingTime:"6 min read",seriesPosition:2,source:"@site/guides/getting-started/structuring.md",tags:[{label:"type: tutorial",permalink:"/new-docs/guides/tags/type-tutorial"},{label:"domain: config",permalink:"/new-docs/guides/tags/domain-config"}],title:"Structuring Your Log Data",truncated:!1,prevItem:{title:"Hello World. Your First Muta Blockchain.",permalink:"/new-docs/guides/getting-started/your-first-pipeline"},nextItem:{title:"Deploying Vector",permalink:"/new-docs/guides/getting-started/deploying"}},d=[{value:"Tutorial",id:"tutorial",children:[{value:"Setup a basic pipeline",id:"setup-a-basic-pipeline",children:[]},{value:"Add a parsing transform",id:"add-a-parsing-transform",children:[]},{value:"Test it",id:"test-it",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:d};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Structured logs are like cocktails; they're cool because they're complicated.\nIn this guide we'll build a pipeline using ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transformations"),"\nthat allows us to send unstructured ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"events")," through it that\nlook like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272\n')),Object(s.b)("p",null,"And have them coming out the other end in a structured format like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "bytes_in":"656",\n  "timestamp":"2019-05-03T13:11:48-04:00",\n  "method":"PUT",\n  "bytes_out":"10272",\n  "host":"172.128.80.109",\n  "status":"406",\n  "user":"Bins5273",\n  "path":"/mesh"\n}\n')),Object(s.b)("h2",{id:"tutorial"},"Tutorial"),Object(s.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(s.b)("ol",null,Object(s.b)("li",null,Object(s.b)("h3",{id:"setup-a-basic-pipeline"},"Setup a basic pipeline"),Object(s.b)("p",null,"In the last guide we simply piped stdin to stdout, I'm not trying to diminish\nyour sense of achievement but that was pretty basic."),Object(s.b)("p",null,"This time we're going to build a config we might use in the real world. It's\ngoing to consume logs over TCP with a ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(s.b)("inlineCode",{parentName:"a"},"socket")," source")," and\nwrite them to an ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/elasticsearch/"}),Object(s.b)("inlineCode",{parentName:"a"},"elasticsearch")," sink"),"."),Object(s.b)(o.a,{type:"info",mdxType:"Alert"},Object(s.b)("p",null,"There's no need to run a local Elasticsearch for this guide as we can write and\neven test our config without connecting to sources or sinks (as you'll see).")),Object(s.b)("p",null,"The basic source to sink version of our pipeline looks like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.foo]\n  type = "socket"\n  address = "0.0.0.0:9000"\n  mode = "tcp"\n\n[sinks.bar]\n  inputs = ["foo"]\n  type = "elasticsearch"\n  index = "example-index"\n  host = "http://10.24.32.122:9000"\n')),Object(s.b)("p",null,"If we were to run it then the raw data we consume over TCP would be captured in\nthe field ",Object(s.b)("inlineCode",{parentName:"p"},"message"),", and the object we'd publish to Elasticsearch would look\nlike this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="log event"',title:'"log','event"':!0}),'{"message":"172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272","host":"foo","timestamp":"2019-05-03T13:11:48-04:00"}\n')),Object(s.b)("p",null,"That's hardly structured at all! Let's remedy that by adding our first transform.")),Object(s.b)("li",null,Object(s.b)("h3",{id:"add-a-parsing-transform"},"Add a parsing transform"),Object(s.b)("p",null,"Nothing in this world is ever good enough for you, why should events be any\ndifferent?"),Object(s.b)("p",null,"Vector makes it easy to mutate events into a more (or less) structured format\nwith ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms"),". Let's parse our logs into a structured\nformat by capturing named regular expression groups with a\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/regex_parser/"}),Object(s.b)("inlineCode",{parentName:"a"},"regex_parser")," transform"),"."),Object(s.b)("p",null,"A config can have any number of transforms and it's entirely up to you how they\nare chained together. Similar to sinks, a transform requires you to specify\nwhere its data comes from. When a sink is configured to accept data from a\ntransform the pipeline is complete."),Object(s.b)("p",null,"Let's place our new transform in between our existing source and sink:"),Object(s.b)(c.a,{block:!0,defaultValue:"diff",values:[{label:"Diff",value:"diff"},{label:"Full Config",value:"new_result"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"diff",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),' [sources.foo]\n   type = "socket"\n   address = "0.0.0.0:9000"\n   mode = "tcp"\n\n\n+[transforms.apache_parser]\n+  inputs = ["foo"]\n+  type = "regex_parser"\n+  field = "message"\n+  regex = \'^(?P<host>[\\w\\.]+) - (?P<user>[\\w]+) (?P<bytes_in>[\\d]+) \\[(?P<timestamp>.*)\\] "(?P<mathod>[\\w]+) (?P<path>.*)" (?P<status>[\\d]+) (?P<bytes_out>[\\d]+)$\'\n+\n [sinks.bar]\n-  inputs = ["foo"]\n+  inputs = ["apache_parser"]\n   type = "elasticsearch"\n   index = "example-index"\n   host = "http://10.24.32.122:9000"\n'))),Object(s.b)(l.a,{value:"new_result",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.foo]\n  type = "socket"\n  address = "0.0.0.0:9000"\n  mode = "tcp"\n\n[transforms.apache_parser]\n  inputs = ["foo"]\n  type = "regex_parser"\n  field = "message"\n  regex = \'^(?P<host>[\\w\\.]+) - (?P<user>[\\w]+) (?P<bytes_in>[\\d]+) \\[(?P<timestamp>.*)\\] "(?P<mathod>[\\w]+) (?P<path>.*)" (?P<status>[\\d]+) (?P<bytes_out>[\\d]+)$\'\n\n[sinks.bar]\n  inputs = ["apache_parser"]\n  type = "elasticsearch"\n  index = "example-index"\n  host = "http://10.24.32.122:9000"\n')))),Object(s.b)("p",null,"This regular expression looks great and it probably works, but it's best to be\nsure, right? Which leads us onto the next step.")),Object(s.b)("li",null,Object(s.b)("h3",{id:"test-it"},"Test it"),Object(s.b)("p",null,"No one is saying that unplanned explosions aren't cool, but you should be doing\nthat in your own time. In order to test our transform we ",Object(s.b)("em",{parentName:"p"},"could")," set up a local\nElasticsearch instance and run the whole pipeline, but that's an awful bother\nand Vector has a much better way."),Object(s.b)("p",null,"Instead, we can write ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/advanced/unit-testing/"}),"unit tests")," as part of our\nconfig just like you would for regular code:"),Object(s.b)(c.a,{block:!0,defaultValue:"diff",values:[{label:"Diff",value:"diff"},{label:"Full Config",value:"new_result"}],mdxType:"Tabs"},Object(s.b)(l.a,{value:"diff",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff",metastring:'title="vector.toml"',title:'"vector.toml"'}),'# Write the data\n[sinks.bar]\n  inputs = ["apache_parser"]\n  type = "elasticsearch"\n  index = "example-index"\n  host = "http://10.24.32.122:9000"\n+\n+[[tests]]\n+  name = "test apache regex"\n+\n+  [[tests.inputs]]\n+    insert_at = "apache_parser"\n+    type = "raw"\n+    value = "172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272"\n+\n+  [[tests.outputs]]\n+    extract_from = "apache_parser"\n+    [[tests.outputs.conditions]]\n+      type = "check_fields"\n+      "method.eq" = "PUT"\n+      "host.eq" = "172.128.80.109"\n+      "timestamp.eq" = "2019-05-03T13:11:48-04:00"\n+      "path.eq" = "/mesh"\n+      "status.eq" = "406"\n'))),Object(s.b)(l.a,{value:"new_result",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'# Consume data\n[sources.foo]\n  type = "socket"\n  address = "0.0.0.0:9000"\n  mode = "tcp"\n\n# Structure the data\n[transforms.apache_parser]\n  inputs = ["foo"]\n  type = "regex_parser"\n  field = "message"\n  regex = \'^(?P<host>[\\w\\.]+) - (?P<user>[\\w]+) (?P<bytes_in>[\\d]+) \\[(?P<timestamp>.*)\\] "(?P<mathod>[\\w]+) (?P<path>.*)" (?P<status>[\\d]+) (?P<bytes_out>[\\d]+)$\'\n\n# Write the data\n[sinks.bar]\n  inputs = ["apache_parser"]\n  type = "elasticsearch"\n  index = "example-index"\n  host = "http://10.24.32.122:9000"\n\n[[tests]]\n  name = "test apache regex"\n\n  [[tests.inputs]]\n    insert_at = "apache_parser"\n    type = "raw"\n    value = "172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272"\n\n  [[tests.outputs]]\n    extract_from = "apache_parser"\n    [[tests.outputs.conditions]]\n      type = "check_fields"\n      "method.eq" = "PUT"\n      "host.eq" = "172.128.80.109"\n      "timestamp.eq" = "2019-05-03T13:11:48-04:00"\n      "path.eq" = "/mesh"\n      "status.eq" = "406"\n')))),Object(s.b)("p",null,"This unit test spec has a name, defines an input event to feed into our pipeline\nat a specific transform (in this case our ",Object(s.b)("em",{parentName:"p"},"only")," transform), and defines where\nwe'd like to capture resulting events coming out along with a condition to check\nthe events against."),Object(s.b)("p",null,"When we run:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vector test ./vector.toml\n")),Object(s.b)("p",null,"It will parse and execute our test:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'Running vector.toml tests\ntest vector.toml: test apache regex ... failed\n\nfailures:\n\n--- vector.toml ---\n\ntest \'test apache regex\':\n\ncheck transform \'apache_parser\' failed conditions:\n  condition[0]: predicates failed: [ method.eq: "PUT" ]\npayloads (events encoded as JSON):\n  input: {"timestamp":"2020-02-20T10:19:27.283745Z","message":"172.128.80.109 - Bins5273 656 [2019-05-03T13:11:48-04:00] \\"PUT /mesh\\" 406 10272"}\n  output: {"bytes_in":"656","timestamp":"2019-05-03T13:11:48-04:00","mathod":"PUT","bytes_out":"10272","host":"172.128.80.109","status":"406","user":"Bins5273","path":"/mesh"}\n')),Object(s.b)("p",null,"By Jove! There ",Object(s.b)("em",{parentName:"p"},"was")," a problem with our regular expression! Our test has pointed\nout that the predicate ",Object(s.b)("inlineCode",{parentName:"p"},"method.eq")," failed, and has helpfully printed our input\nand resulting events in JSON format."),Object(s.b)("p",null,"This allows us to inspect exactly what our transform is doing, and it turns out\nthat the method from our Apache log is actually being captured in a field\n",Object(s.b)("inlineCode",{parentName:"p"},"mathod"),"."),Object(s.b)("p",null,"See if you can spot the typo, once it's fixed we can run\n",Object(s.b)("inlineCode",{parentName:"p"},"vector test ./vector.toml")," again and we should get this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"Running vector.toml tests\ntest vector.toml: test apache regex ... passed\n")),Object(s.b)("p",null,"Success! Next, try experimenting by adding more ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms")," to\nyour pipeline before moving onto the next guide."),Object(s.b)(o.a,{type:"info",mdxType:"Alert"},Object(s.b)("p",null,"While we're at, did you know you can control all of Vector's field names via\nthe ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/global-options/#log_schema"}),"global ",Object(s.b)("inlineCode",{parentName:"a"},"log_schema")," options"),"?\nVector does not lock you into any specific schema."))))),Object(s.b)("h2",{id:"next-steps"},"Next Steps"),Object(s.b)("p",null,"Now that you're a Vector pro you'll have endless ragtag groups of misfits\ntrying to recruit you as their hacker, but it won't mean much if you can't\ndeploy Vector. Onto the next guide!"))}m.isMDXComponent=!0},215:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===s)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},216:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=a,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||s;return n?r.a.createElement(m,i({ref:t},l,{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(215),o=n.n(s);n(99);t.a=function({children:e,className:t,fill:n,icon:a,rounded:s,type:i}){let c=null;switch(i){case"danger":c="alert-triangle";break;case"success":c="check-circle";break;case"warning":c="alert-triangle";break;default:c="info"}return r.a.createElement("div",{className:o()(t,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==a,"alert--rounded":!0===s}),role:"alert"},!1!==a&&r.a.createElement("i",{className:o()("feather","icon-"+(a||c))}),e)}},225:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement(r.a.Fragment,null,e.children)}},226:function(e,t,n){"use strict";var a=n(1),r=(n(12),n(0)),s=n.n(r),o=n(245),i=n(215),c=n.n(i),l=n(227),u=n.n(l),p=n(256);const d=37,b=39;function m({block:e,centered:t,changeSelectedValue:n,className:a,handleKeydown:r,style:o,values:i,selectedValue:l,tabRefs:u}){return s.a.createElement("div",{className:t?"tabs--centered":null},s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",a,{"tabs--block":e}),style:o},i.map(({value:e,label:t})=>s.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":l===e,className:c()("tab-item",{"tab-item--active":l===e}),key:e,ref:e=>u.push(e),onKeyDown:e=>r(u,e.target,e),onFocus:()=>n(e),onClick:()=>n(e)},t))))}function h({placeholder:e,selectedValue:t,changeSelectedValue:n,size:a,values:r}){let i=r;if(i[0].group){let e=_.groupBy(i,"group");i=Object.keys(e).map(t=>({label:t,options:e[t]}))}return s.a.createElement(o.a,{className:"react-select-container react-select--"+a,classNamePrefix:"react-select",options:i,isClearable:t,placeholder:e,value:r.find(e=>e.value==t),onChange:e=>n(e?e.value:null)})}t.a=function(e){const{block:t,centered:n,children:o,defaultValue:i,groupId:c,label:l,placeholder:f,select:g,size:y,style:O,values:j,urlKey:w}=e,{tabGroupChoices:v,setTabGroupChoices:x}=Object(p.a)(),[k,N]=Object(r.useState)(i);if(null!=c){const e=v[c];null!=e&&e!==k&&N(e)}const T=e=>{N(e),null!=c&&x(c,e)},P=[],_=(e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case d:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}};return Object(r.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&w){let e=u.a.parse(window.location.search);e[w]&&N(e[w])}},[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"margin-bottom--"+(y||"md")},l&&s.a.createElement("div",{className:"margin-vert--sm"},l),j.length>1&&(g?s.a.createElement(h,Object(a.a)({changeSelectedValue:T,handleKeydown:_,placeholder:f,selectedValue:k,size:y,tabRefs:P},e)):s.a.createElement(m,Object(a.a)({changeSelectedValue:T,handleKeydown:_,selectedValue:k,tabRefs:P},e)))),r.Children.toArray(o).filter(e=>e.props.value===k)[0])}},246:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r},259:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=(n(215),n(227)),o=n.n(s);n(104);t.a=function({children:e,headingDepth:t}){let n="undefined"!=typeof window?window.location:null,s={title:`Tutorial on ${n} failed`,body:`The tutorial on:\n\n${n}\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e`},i="https://github.com/nervosnetwork/muta/issues/new?"+o.a.stringify(s);const[c,l]=Object(a.useState)(null);return r.a.createElement("div",{className:"steps steps--h"+t},e,!c&&r.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",r.a.createElement("span",{className:"button button--sm button--primary",onClick:()=>l("yes")},"Yes"),"\xa0\xa0",r.a.createElement("a",{href:i,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==c&&r.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Muta please consider ",r.a.createElement("a",{href:"https://github.com/nervosnetwork/muta/",target:"_blank"},"starring our Github repo"),"."))}}}]);