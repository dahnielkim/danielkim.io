(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0p8T":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("MFBA"),l=(a("uTcq"),function(e){return r.a.createElement("span",{style:{marginLeft:"1rem"}},r.a.createElement(i.a,{className:"post-type-icon"}),r.a.createElement("span",{className:"tag-item"},r.a.createElement(o.a,{to:e.tagLink},e.tagName)))})},EDuE:function(e,t,a){},L6NH:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var n=a("t8Zj");function r(e){var t=Math.round(e/5);return t>5?" / "+new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":" / "+new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function o(e,t){var a;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(a=e).toLocaleDateString.apply(a,Object(n.a)(r))}},LIIa:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),o=a("yE/o"),i=a("+6Dn"),l=a("aQu0"),c=a("9eSz"),m=a.n(c),u=function(e){return r.a.createElement(o.a,null,r.a.createElement(i.a,{container:!0,columns:2,style:{marginTop:"3rem"}},r.a.createElement(i.a.Row,{style:{marginBottom:"2rem"}},r.a.createElement(i.a.Column,{mobile:16,tablet:10,computer:8},e.topSegment?r.a.createElement("p",{style:{marginBottom:"1rem"}},e.topSegment):null,r.a.createElement(l.a,{as:"h1",style:{fontSize:"4rem",marginTop:0,lineHeight:"4rem"}},e.headerSegment),e.bottomSegment?e.bottomSegment:null),r.a.createElement(i.a.Column,{only:"computer tablet"},e.logo?r.a.createElement(m.a,{style:{width:"50%",marginTop:"1rem",marginBottom:"1rem",marginRight:"auto",marginLeft:"auto"},sizes:e.logo}):null))))}},Oiwi:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),i=a("+6Dn"),l=a("aQu0"),c=a("0p8T"),m=a("L6NH"),u=function(e){return r.a.createElement(i.a.Column,{computer:e.mainPage?8:16,tablet:e.mainPage?8:16,mobile:16,key:e.frontmatter.path,style:{marginBottom:"3rem"}},r.a.createElement(i.a.Row,null,r.a.createElement(o.a,{to:e.pathLink},r.a.createElement(l.a,{as:"h3"},e.frontmatter.title))),r.a.createElement(i.a.Row,{style:{marginTop:"0.5rem",color:"rgba(0, 0, 0, 0.4)"}},e.frontmatter.excerpt),r.a.createElement(i.a.Row,{style:{marginTop:"0.5rem",color:"rgba(0, 0, 0, 0.4)"}},Object(m.a)(e.frontmatter.date,"en"),""+Object(m.b)(e.timeToRead),r.a.createElement(c.a,{tagLink:"/tags/"+e.blogTag,tagName:e.blogTag})),r.a.createElement(i.a.Row,{style:{marginTop:"0.5rem"},className:"dkim-link"},r.a.createElement(o.a,{to:e.pathLink},"Read more →")))}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));var n=a("9Hrx"),r=a("q1tI"),o=a.n(r),i=a("Wbzz"),l=a("3IkW"),c=a("yE/o"),m=a("+6Dn"),u=a("aQu0"),s=a("Oiwi"),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.edges.slice(0,2).map((function(e){var t=e.node,a=t.frontmatter,n=t.timeToRead,r="/articles/"+a.path,i=a.tags.filter((function(e){return"articles"!==e}));return o.a.createElement(s.a,{key:r,pathLink:r,frontmatter:a,timeToRead:n,blogTag:i,mainPage:!0})}));return o.a.createElement(c.a,{style:{marginTop:"6rem"}},o.a.createElement(m.a,{container:!0,columns:2},o.a.createElement(u.a,{as:"h3",style:{letterSpacing:10,color:"rgba(0, 0, 0, 0.4)",marginBottom:0}},"LATEST ARTICLES"),o.a.createElement(m.a.Row,null,e)))},t}(r.Component),f=a("LIIa"),g=(a("tDNE"),a("EDuE"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=[];this.props.data.markdown&&(e=this.props.data.markdown.edges.filter((function(e){return e.node.frontmatter.tags.includes("articles")})));var t=o.a.createElement(r.Fragment,null,o.a.createElement("p",{style:{marginTop:"2rem"}},"Welcome to my page."),o.a.createElement("p",null,"A collection of ",o.a.createElement(i.a,{to:"/articles"},"articles")," and various things I am passionate about."));return o.a.createElement(l.a,{lang:"en",seoTitle:"DANIELKIM.IO",seoDesc:"Welcome to danielkim.io. Let's share experiences!",seoSlug:"/",location:this.props.location},o.a.createElement(f.a,{topSegment:"Hey, I'm",headerSegment:"Daniel Kim.",bottomSegment:t,logo:this.props.data.file.childImageSharp.sizes}),e.length>0?o.a.createElement(p,{edges:e}):null)},t}(r.Component)),d="2598010488";t.default=g},kSFL:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI"),r=a.n(n),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.a.createContext&&r.a.createContext(o),l=function(){return(l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&(a[n[r]]=e[n[r]])}return a};function m(e){return function(t){return r.a.createElement(u,l({attr:l({},e.attr)},t),function e(t){return t&&t.map((function(t,a){return r.a.createElement(t.tag,l({key:a},t.attr),e(t.child))}))}(e.child))}}function u(e){var t=function(t){var a,n=e.size||t.size||"1em";t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className);var o=e.attr,i=c(e,["attr"]);return r.a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:a,style:l({color:e.color||t.color},t.style,e.style),height:n,width:n}),e.children)};return void 0!==i?r.a.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},tDNE:function(e,t,a){},uTcq:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-3ab0bc88b80a98432fec.js.map