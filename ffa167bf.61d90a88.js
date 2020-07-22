/*! For license information please see ffa167bf.61d90a88.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(1),a=n(6),o=(n(0),n(195)),r=n(231),s={last_modified_on:"2020-07-13",$schema:"/.meta/.schemas/guides.json",title:"Unit Testing Your Configs",description:"Learn how to write and execute unit tests for your Vector configs",author_github:"https://github.com/zhouyun-zoe",tags:["type: guide","domain: config"]},l={categories:[{name:"advanced",title:"Advanced",description:"Go the basics, become a Vector pro, and extract the full potential of Vector.",permalink:"/new-docs/guides/advanced"}],coverLabel:"Unit Testing Your Configs",description:"Learn how to write and execute unit tests for your Vector configs",permalink:"/new-docs/guides/advanced/unit-testing",readingTime:"6 min read",source:"@site/guides/advanced/unit-testing.md",tags:[{label:"type: guide",permalink:"/new-docs/guides/tags/type-guide"},{label:"domain: config",permalink:"/new-docs/guides/tags/domain-config"}],title:"Unit Testing Your Configs",truncated:!1,prevItem:{title:"Troubleshooting",permalink:"/new-docs/guides/advanced/troubleshooting"}},c=[{value:"Input",id:"input",children:[]},{value:"Outputs",id:"outputs",children:[]},{value:"Executing",id:"executing",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(r.a,{name:"guide",mdxType:"Assumptions"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You understand the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/about/concepts/"}),"basic Vector concepts")," and understand ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/guides/getting-started/your-first-pipeline/"}),"how to set up a pipeline"),"."))),Object(o.b)("p",null,"It's possible to define unit tests within a Vector configuration file that cover\na network of transforms within the topology. The purpose of these tests is to\nassist in the development of configs containing larger and more complex\ntopologies, and improve their maintainability."),Object(o.b)("p",null,"The full spec can be found ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/reference/tests/"}),"here"),". This guide will cover\nwriting and executing a unit test for the following config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-toml",metastring:'title="vector.toml"',title:'"vector.toml"'}),'[sources.over_tcp]\n  type = "socket"\n  mode = "tcp"\n  address = "0.0.0.0:9000"\n\n[transforms.foo]\n  type = "grok_parser"\n  inputs = ["over_tcp"]\n  pattern = "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:message}"\n\n[transforms.bar]\n  type = "add_fields"\n  inputs = ["foo"]\n  [transforms.bar.fields]\n    new_field = "this is a static value"\n\n[transforms.baz]\n  type = "remove_fields"\n  inputs = ["foo"]\n  fields = ["level"]\n\n[sinks.over_http]\n  type = "http"\n  inputs = ["baz"]\n  uri = "http://localhost:4195/post"\n  encoding = "text"\n')),Object(o.b)("p",null,"In this config we:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Parse a log line into the fields ",Object(o.b)("inlineCode",{parentName:"li"},"timestamp"),", ",Object(o.b)("inlineCode",{parentName:"li"},"level")," and ",Object(o.b)("inlineCode",{parentName:"li"},"message")," with the\ntransform ",Object(o.b)("inlineCode",{parentName:"li"},"foo"),"."),Object(o.b)("li",{parentName:"ul"},"Add a static string field ",Object(o.b)("inlineCode",{parentName:"li"},"new_field")," using the transform ",Object(o.b)("inlineCode",{parentName:"li"},"bar"),"."),Object(o.b)("li",{parentName:"ul"},"Remove the field ",Object(o.b)("inlineCode",{parentName:"li"},"level")," with the transform ",Object(o.b)("inlineCode",{parentName:"li"},"baz"),".")),Object(o.b)("p",null,"In reality it's unlikely that a config this simple would be worth the investment\nof writing unit tests. Regardless, for the purpose of this guide we've concluded\nthat yes, we do wish to unit test this config."),Object(o.b)("p",null,"Specifically, we need to ensure that the resulting events of our topology\n(whatever comes out of the ",Object(o.b)("inlineCode",{parentName:"p"},"baz")," transform) always meets the following\nrequirements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Does NOT contain the field ",Object(o.b)("inlineCode",{parentName:"li"},"level"),"."),Object(o.b)("li",{parentName:"ul"},"Contains the field ",Object(o.b)("inlineCode",{parentName:"li"},"new_field"),", with a static value ",Object(o.b)("inlineCode",{parentName:"li"},"this is a static value"),"."),Object(o.b)("li",{parentName:"ul"},"Has a ",Object(o.b)("inlineCode",{parentName:"li"},"timestamp")," and ",Object(o.b)("inlineCode",{parentName:"li"},"message")," field containing the values extracted from the\nraw message of the input log.")),Object(o.b)("p",null,"Otherwise our system fails and an annoying relative (uncle Cecil) moves in to\nlive with us indefinitely. We will do ",Object(o.b)("em",{parentName:"p"},"anything")," to prevent that."),Object(o.b)("h2",{id:"input"},"Input"),Object(o.b)("p",null,"First we shall write a single unit test at the bottom of our config called\n",Object(o.b)("inlineCode",{parentName:"p"},"check_simple_log"),". Each test must define input events (usually just one), which\ninitiates the test by injecting those events into a transform of the topology:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-toml"}),'[[tests]]\n  name = "check_simple_log"\n\n  [[tests.inputs]]\n    insert_at = "foo"\n    type = "raw"\n    value = "2019-11-28T12:00:00+00:00 info Sorry, I\'m busy this week Cecil"\n')),Object(o.b)("p",null,"Here we've specified that our test should begin by injecting an event at the\ntransform ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),". The ",Object(o.b)("inlineCode",{parentName:"p"},"raw")," input type creates a log with only a ",Object(o.b)("inlineCode",{parentName:"p"},"message")," field\nand ",Object(o.b)("inlineCode",{parentName:"p"},"timestamp")," (set to the time of the test), where ",Object(o.b)("inlineCode",{parentName:"p"},"message")," is populated with\nthe contents of the ",Object(o.b)("inlineCode",{parentName:"p"},"value")," field."),Object(o.b)("h2",{id:"outputs"},"Outputs"),Object(o.b)("p",null,"This test won't run in its current state because there's nothing to check. In\norder to perform checks with this unit test we define an output to inspect:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-toml"}),'[[tests]]\n  name = "check_simple_log"\n\n  [[tests.inputs]]\n    insert_at = "foo"\n    type = "raw"\n    value = "2019-11-28T12:00:00+00:00 info Sorry, I\'m busy this week Cecil"\n\n  [[tests.outputs]]\n    extract_from = "baz"\n\n    [[tests.outputs.conditions]]\n      type = "check_fields"\n      "level.exists" = false\n      "new_field.equals" = "this is a static value"\n      "timestamp.equals" = "2019-11-28T12:00:00+00:00"\n      "message.equals" = "Sorry, I\'m busy this week Cecil"\n')),Object(o.b)("p",null,"We can define any number of outputs for a test, and must specify at which\ntransform the output events should be extracted for checking. This allows us to\ncheck the events from different transforms in a single test. For our purposes we\nonly need to check the output of ",Object(o.b)("inlineCode",{parentName:"p"},"baz"),"."),Object(o.b)("p",null,"An output can also have any number of conditions to check, and these are how we\ndetermine whether a test has failed or succeeded. In order for the test to pass\neach condition for an output must resolve to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("p",null,"It's possible for a topology to result in >1 events extracted from a single\ntransform, in which case each condition must pass for one or more of the\nextracted events in order for the test to pass."),Object(o.b)("p",null,"An output without any conditions cannot fail a test, and instead prints the\ninput and output events of a transform during the test. This is useful when\nbuilding a config as it allows us to inspect the behavior of each transform in\nisolation."),Object(o.b)("p",null,"The only condition we've defined here is a ",Object(o.b)("inlineCode",{parentName:"p"},"check_fields")," type. This is\ncurrently the ",Object(o.b)("em",{parentName:"p"},"only")," condition type on offer, and it allows us to specify any\nnumber of field queries (of the format ",Object(o.b)("inlineCode",{parentName:"p"},'"<field>.<predicate>" = "<argument>"'),")."),Object(o.b)("h2",{id:"executing"},"Executing"),Object(o.b)("p",null,"With this test added to the bottom of our config we are now able to execute it.\nExecuting tests within a config file can be done with the ",Object(o.b)("inlineCode",{parentName:"p"},"test")," subcommand:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),"vector test ./example.toml\n")),Object(o.b)("p",null,"Doing this results in the following output:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),'$ vector test ./example.toml\nRunning ./example.toml tests\ntest ./example.toml: check_simple_log ... failed\n\nfailures:\n\n--- ./example.toml ---\n\ntest \'check_simple_log\':\n\ncheck transform \'baz\' failed conditions:\n  condition[0]: predicates failed: [ new_field.equals: "this is a static value" ]\npayloads (events encoded as JSON):\n  input: {"level":"info","timestamp":"2019-11-28T12:00:00+00:00","message":"Sorry, I\'m busy this week Cecil"}\n  output: {"timestamp":"2019-11-28T12:00:00+00:00","message":"Sorry, I\'m busy this week Cecil"}\n')),Object(o.b)("p",null,"Woops! Something isn't right. Vector has told us that condition ",Object(o.b)("inlineCode",{parentName:"p"},"0")," (our only\ncondition) failed for the predicate ",Object(o.b)("inlineCode",{parentName:"p"},"new_field.equals"),". We also get to see a\nJSON encoded representation of the input and output of the transform ",Object(o.b)("inlineCode",{parentName:"p"},"baz"),".\nTry reviewing our config topology to see if you can spot the mistake."),Object(o.b)("p",null,"SPOILERS: The problem is that transform ",Object(o.b)("inlineCode",{parentName:"p"},"baz")," is configured with the input\n",Object(o.b)("inlineCode",{parentName:"p"},"foo"),", which means ",Object(o.b)("inlineCode",{parentName:"p"},"bar")," is skipped in the topology!"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Side note: We would have also caught this particular issue with\n",Object(o.b)("inlineCode",{parentName:"p"},"vector validate --topology ./example.toml"),".")),Object(o.b)("p",null,"The fix is easy, we simply change the input of ",Object(o.b)("inlineCode",{parentName:"p"},"baz")," from ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," to ",Object(o.b)("inlineCode",{parentName:"p"},"bar"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-diff"}),'--- a/example.toml\n+++ b/example.toml\n@@ -16,7 +16,7 @@\n\n [transforms.baz]\n   type = "remove_fields"\n-  inputs = ["foo"]\n+  inputs = ["bar"]\n   fields = ["level"]\n')),Object(o.b)("p",null,"And running our test again gives us an exit status 0:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"$ vector test ./example.toml\nRunning ./example.toml tests\nTest ./example.toml: check_simple_log ... passed\n")),Object(o.b)("p",null,"The test passed! Now if we configure our CI system to execute our test we can\nensure that uncle Cecil remains in Shoreditch after any future config change.\nWhat an insufferable hipster he is."))}p.isMDXComponent=!0},192:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)&&i.length){var r=a.apply(null,i);r&&e.push(r)}else if("object"===o)for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(i=function(){return a}.apply(t,[]))||(e.exports=i)}()},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(i.forwardRef)((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(r,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,s({ref:t},c,{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},197:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(192),r=n.n(o);n(93);t.a=function({children:e,className:t,fill:n,icon:i,rounded:o,type:s}){let l=null;switch(s){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:r()(t,"alert","alert--"+s,{"alert--fill":n,"alert--icon":!1!==i,"alert--rounded":!0===o}),role:"alert"},!1!==i&&a.a.createElement("i",{className:r()("feather","icon-"+(i||l))}),e)}},231:function(e,t,n){"use strict";var i=n(0),a=n.n(i),o=n(197);t.a=function({children:e,name:t}){return a.a.createElement(o.a,{type:"info",fill:!0,icon:!1,rounded:!0,className:"list--icons list--icons--arrow list--tight list--indent margin-bottom--lg"},a.a.createElement("p",{class:"text--lg margin-bottom--sm",style:{marginTop:"-0.25em"}},"Before you begin, this ",t||"page"," assumes the following:"),e)}}}]);