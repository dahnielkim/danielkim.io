(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(167),i=a(455),o=a(461),c=a(179),m=a(181);t.default=function(e){var t=e.pageContext.tags,a=r.a.createElement(n.Fragment,null,r.a.createElement("p",{style:{marginTop:"2rem"}},"This page allows you to search searching for specific posts based on tag."));return r.a.createElement(c.a,{lang:"en",seoTitle:"Tags",seoDesc:"Articles associated with a certain tag on danielkim.io",seoSlug:"/"+e.pageContext.pathSlug,location:e.location},r.a.createElement(m.a,{topSegment:"It's time to",headerSegment:"Search.",bottomSegment:a}),r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement(o.a.Column,null,r.a.createElement("ul",{style:{marginTop:"-2rem",marginBottom:"5rem"}},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(l.a,{to:"/tags/"+e},e))}))))))}},167:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(32),c=a.n(o);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return o.withPrefix});a(170);var m=r.a.createContext({}),s=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,t,a){var n;e.exports=(n=a(177))&&n.default||n},177:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(54),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},178:function(e){e.exports={data:{site:{siteMetadata:{title:"DANIELKIM.IO",author:"Daniel Kim",description:"Thoughts and topics of various things I am passionate about",siteUrl:"https://danielkim.io",social:{twitter:"@dahnielkim"}}}}}},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(33),a(178)),i=a(167),o=a(188),c=a.n(o),m=a(4),s=a.n(m);function u(e){var t=e.meta,a=e.image,n=e.title,o=e.description,m=e.slug,s=e.lang,u=void 0===s?"en":s;return r.a.createElement(i.b,{query:g,render:function(e){var l=e.site.siteMetadata,i=o||l.description,s=a?l.siteUrl+"/"+a:null,g=""+l.siteUrl+m;return r.a.createElement(c.a,Object.assign({htmlAttributes:{lang:u}},n?{titleTemplate:"/"===m?"Home - "+l.title:"%s — "+l.title,title:n}:{title:l.title+" by Daniel Kim"},{meta:[{name:"description",content:i},{property:"og:url",content:g},{property:"og:title",content:n||l.title},{name:"og:description",content:i},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.social.twitter},{name:"twitter:title",content:n||l.title},{name:"twitter:description",content:i}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(t)}),r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-135482517-1"}),r.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || []; function\n                gtag(){dataLayer.push(arguments)}\n                gtag('js', new Date()); gtag('config',\n                'UA-135482517-1');\n              "))},data:l})}u.defaultProps={meta:[],title:"",slug:""},u.propTypes={description:s.a.string,image:s.a.string,meta:s.a.array,slug:s.a.string,title:s.a.string.isRequired};var g="3236765318",d=u,p=(a(74),a(75),a(7)),E=a.n(p),h=a(455),y=a(461),b=a(458),f=a(452),w=a(189),v=a(76),k=a.n(v),I=(a(150),function(e){var t=e.open,a=k()(e,["open"]);return r.a.createElement("div",Object.assign({className:t?"burger-menu open":"burger-menu"},a),r.a.createElement("div",{className:"bar1",key:"b1"}),r.a.createElement("div",{className:"bar2",key:"b2"}),r.a.createElement("div",{className:"bar3",key:"b3"}))}),S=function(e){var t=e.close,a=e.pathName;return r.a.createElement(h.a,null,r.a.createElement(y.a,null,r.a.createElement(b.a,{fluid:!0,secondary:!0,pointing:!0,vertical:!0,widths:16},r.a.createElement(i.a,{to:"/"},r.a.createElement(b.a.Item,{active:"/"===a,onClick:t},"Home")),r.a.createElement(i.a,{to:"/articles"},r.a.createElement(b.a.Item,{active:a.includes("/articles"),onClick:t},"Articles")),r.a.createElement(i.a,{to:"/about"},r.a.createElement(b.a.Item,{active:"/about"===a,onClick:t},"About")),r.a.createElement(i.a,{to:"/uses"},r.a.createElement(b.a.Item,{active:"/uses"===a,onClick:t},"Uses")))))},T=a(192),R=a.n(T),C=(a(151),function(e){function t(){return e.apply(this,arguments)||this}return E()(t,e),t.prototype.render=function(){var e=this.props.location.pathname;return r.a.createElement(h.a,null,r.a.createElement(y.a,{container:!0,columns:1,style:{position:"relative",zIndex:1e3,marginBottom:0}},r.a.createElement(y.a.Row,{only:"computer tablet"},r.a.createElement(R.a,{style:{position:"absolute",left:0,right:0,top:0,zIndex:0,opacity:.4,borderBottom:"1px solid rgb(238, 238, 238)"},height:90,params:{particles:{color:{value:"#000000"},number:{value:50},size:{value:1},line_linked:{enable:!0,distance:150,color:"#000000",opacity:.4,width:1}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),r.a.createElement(y.a.Column,null,r.a.createElement(b.a,{secondary:!0,pointing:!0,borderless:!0,stackable:!0},r.a.createElement(b.a.Item,{style:{paddingLeft:0}},r.a.createElement(i.a,{to:"/"},r.a.createElement(f.a,{style:{height:45},src:"/assets/personal_logo.svg"}))),r.a.createElement(b.a.Menu,{position:"right"},r.a.createElement(i.a,{to:"/"},r.a.createElement(b.a.Item,{name:"home",active:"/"===e})),r.a.createElement(i.a,{to:"/articles"},r.a.createElement(b.a.Item,{name:"articles",active:e.includes("/articles")})),r.a.createElement(i.a,{to:"/about"},r.a.createElement(b.a.Item,{name:"about",active:"/about"===e})),r.a.createElement(i.a,{to:"/uses"},r.a.createElement(b.a.Item,{name:"uses",active:"/uses"===e})))))),r.a.createElement(y.a.Row,{only:"mobile"},r.a.createElement(w.a,{modal:!0,overlayStyle:{background:"rgba(255,255,255,0.98"},contentStyle:x,closeOnDocumentClick:!1,trigger:function(e){return r.a.createElement(I,{open:e})}},function(t){return r.a.createElement(S,{pathName:e,close:t})}))))},t}(n.Component)),x={background:"rgba(255,255,255,0",width:"80%",border:"none"},A=a(456),q=a(457),L=function(){return r.a.createElement(h.a,{textAlign:"center"},r.a.createElement(A.a,{style:{marginBottom:"2rem"}}),r.a.createElement(y.a,{container:!0,textAlign:"center"},r.a.createElement(y.a.Row,null,r.a.createElement(q.a,{horizontal:!0,divided:!0,link:!0,size:"small"},r.a.createElement(q.a.Item,{style:{color:"black"},as:"a",href:"https://www.linkedin.com/in/dshkim/"},"LinkedIn"),r.a.createElement(q.a.Item,{style:{color:"black"},as:"a",href:"https://www.github.com/dahnielkim"},"GitHub"),r.a.createElement(q.a.Item,{style:{color:"black"},as:"a",href:"https://www.twitter.com/dahnielkim"},"Twitter"))),r.a.createElement(y.a.Row,{style:{fontSize:13,color:"rgb(0,0,0,0.4)",marginBottom:"1rem"}},"©2020 Daniel Kim. All Rights Reserved.")))},z=function(e){return r.a.createElement("div",{style:{maxWidth:900,marginRight:"auto",marginLeft:"auto",marginTop:"0.5rem"}},r.a.createElement(d,{lang:e.lang,title:e.seoTitle,description:e.seoDesc,slug:e.seoSlug}),r.a.createElement(C,{location:e.location}),e.children,r.a.createElement(L,null))};a.d(t,"a",function(){return z})},181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(455),i=a(461),o=a(459),c=a(187),m=a.n(c),s=function(e){return r.a.createElement(l.a,null,r.a.createElement(i.a,{container:!0,columns:2,style:{marginTop:"3rem"}},r.a.createElement(i.a.Row,{style:{marginBottom:"2rem"}},r.a.createElement(i.a.Column,{mobile:16,tablet:10,computer:8},e.topSegment?r.a.createElement("p",{style:{marginBottom:"1rem"}},e.topSegment):null,r.a.createElement(o.a,{as:"h1",style:{fontSize:"4rem",marginTop:0,lineHeight:"4rem"}},e.headerSegment),e.bottomSegment?e.bottomSegment:null),r.a.createElement(i.a.Column,{only:"computer tablet"},e.logo?r.a.createElement(m.a,{style:{width:"50%",marginTop:"1rem",marginBottom:"1rem",marginRight:"auto",marginLeft:"auto"},sizes:e.logo}):null))))};a.d(t,"a",function(){return s})}}]);
//# sourceMappingURL=component---src-templates-all-tags-index-js-3f13b4fa4d3ca186e1bb.js.map