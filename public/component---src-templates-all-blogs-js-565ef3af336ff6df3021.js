(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(179),l=a(181),i=a(7),c=a.n(i),m=a(455),s=a(461),u=a(459),g=a(244),p=function(){return r.a.createElement(m.a,null,r.a.createElement(s.a,null,r.a.createElement(s.a.Column,{computer:16,tablet:16,mobile:16,style:{marginBottom:"2rem"}},r.a.createElement(s.a.Row,null,r.a.createElement("p",{style:{paddingLeft:"1rem",paddingRight:"1rem"}},r.a.createElement("span",{role:"img","aria-label":"scientist"},"👨🏻‍🔬")," ","In the lab trying to cook up some posts. Please check back later."," ",r.a.createElement("span",{role:"img","aria-label":"scientist"},"👨🏻‍🔬"))))))},d=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=[];return this.props.posts?(e=this.props.posts.map(function(e){var t="/articles/"+e.node.frontmatter.path,a=e.node.frontmatter.tags.filter(function(e){return"articles"!==e});return r.a.createElement(g.a,{key:t,pathLink:t,frontmatter:e.node.frontmatter,timeToRead:e.node.timeToRead,blogTag:a,mainPage:!1})}),r.a.createElement(m.a,{style:{marginTop:"2rem",marginBottom:"3rem"}},r.a.createElement(s.a,{container:!0,columns:2},r.a.createElement(u.a,{as:"h3",style:{letterSpacing:10,color:"rgba(0, 0, 0, 0.4)",marginBottom:0}},"ALL ARTICLES"),r.a.createElement(s.a.Row,null,e)))):r.a.createElement(p,null)},t}(n.Component);t.default=function(e){return r.a.createElement(o.a,{lang:"en",seoTitle:"Articles",seoDesc:"Articles page for Daniel Kim",seoSlug:"/"+e.pageContext.pathSlug,location:e.location},r.a.createElement(l.a,{topSegment:"It's my",headerSegment:"Articles."}),r.a.createElement(d,{posts:e.pageContext.posts}))}},167:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(32),c=a.n(i);a.d(t,"a",function(){return c.a}),a.d(t,"c",function(){return i.withPrefix});a(170);var m=r.a.createContext({}),s=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},170:function(e,t,a){var n;e.exports=(n=a(177))&&n.default||n},177:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(54),c=a(2),m=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},178:function(e){e.exports={data:{site:{siteMetadata:{title:"DANIELKIM.IO",author:"Daniel Kim",description:"Thoughts and topics of various things I am passionate about",siteUrl:"https://danielkim.io",social:{twitter:"@dahnielkim"}}}}}},179:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=(a(33),a(178)),l=a(167),i=a(188),c=a.n(i),m=a(4),s=a.n(m);function u(e){var t=e.meta,a=e.image,n=e.title,i=e.description,m=e.slug,s=e.lang,u=void 0===s?"en":s;return r.a.createElement(l.b,{query:g,render:function(e){var o=e.site.siteMetadata,l=i||o.description,s=a?o.siteUrl+"/"+a:null,g=""+o.siteUrl+m;return r.a.createElement(c.a,Object.assign({htmlAttributes:{lang:u}},n?{titleTemplate:"/"===m?"Home - "+o.title:"%s — "+o.title,title:n}:{title:o.title+" by Daniel Kim"},{meta:[{name:"description",content:l},{property:"og:url",content:g},{property:"og:title",content:n||o.title},{name:"og:description",content:l},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.social.twitter},{name:"twitter:title",content:n||o.title},{name:"twitter:description",content:l}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(t)}),r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-135482517-1"}),r.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || []; function\n                gtag(){dataLayer.push(arguments)}\n                gtag('js', new Date()); gtag('config',\n                'UA-135482517-1');\n              "))},data:o})}u.defaultProps={meta:[],title:"",slug:""},u.propTypes={description:s.a.string,image:s.a.string,meta:s.a.array,slug:s.a.string,title:s.a.string.isRequired};var g="3236765318",p=u,d=(a(74),a(75),a(7)),E=a.n(d),f=a(455),h=a(461),y=a(458),b=a(452),w=a(189),v=a(76),k=a.n(v),R=(a(150),function(e){var t=e.open,a=k()(e,["open"]);return r.a.createElement("div",Object.assign({className:t?"burger-menu open":"burger-menu"},a),r.a.createElement("div",{className:"bar1",key:"b1"}),r.a.createElement("div",{className:"bar2",key:"b2"}),r.a.createElement("div",{className:"bar3",key:"b3"}))}),T=function(e){var t=e.close,a=e.pathName;return r.a.createElement(f.a,null,r.a.createElement(h.a,null,r.a.createElement(y.a,{fluid:!0,secondary:!0,pointing:!0,vertical:!0,widths:16},r.a.createElement(l.a,{to:"/"},r.a.createElement(y.a.Item,{active:"/"===a,onClick:t},"Home")),r.a.createElement(l.a,{to:"/articles"},r.a.createElement(y.a.Item,{active:a.includes("/articles"),onClick:t},"Articles")),r.a.createElement(l.a,{to:"/about"},r.a.createElement(y.a.Item,{active:"/about"===a,onClick:t},"About")),r.a.createElement(l.a,{to:"/uses"},r.a.createElement(y.a.Item,{active:"/uses"===a,onClick:t},"Uses")))))},I=a(192),L=a.n(I),S=(a(151),function(e){function t(){return e.apply(this,arguments)||this}return E()(t,e),t.prototype.render=function(){var e=this.props.location.pathname;return r.a.createElement(f.a,null,r.a.createElement(h.a,{container:!0,columns:1,style:{position:"relative",zIndex:1e3,marginBottom:0}},r.a.createElement(h.a.Row,{only:"computer tablet"},r.a.createElement(L.a,{style:{position:"absolute",left:0,right:0,top:0,zIndex:0,opacity:.4,borderBottom:"1px solid rgb(238, 238, 238)"},height:90,params:{particles:{color:{value:"#000000"},number:{value:50},size:{value:1},line_linked:{enable:!0,distance:150,color:"#000000",opacity:.4,width:1}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}),r.a.createElement(h.a.Column,null,r.a.createElement(y.a,{secondary:!0,pointing:!0,borderless:!0,stackable:!0},r.a.createElement(y.a.Item,{style:{paddingLeft:0}},r.a.createElement(l.a,{to:"/"},r.a.createElement(b.a,{style:{height:45},src:"/assets/personal_logo.svg"}))),r.a.createElement(y.a.Menu,{position:"right"},r.a.createElement(l.a,{to:"/"},r.a.createElement(y.a.Item,{name:"home",active:"/"===e})),r.a.createElement(l.a,{to:"/articles"},r.a.createElement(y.a.Item,{name:"articles",active:e.includes("/articles")})),r.a.createElement(l.a,{to:"/about"},r.a.createElement(y.a.Item,{name:"about",active:"/about"===e})),r.a.createElement(l.a,{to:"/uses"},r.a.createElement(y.a.Item,{name:"uses",active:"/uses"===e})))))),r.a.createElement(h.a.Row,{only:"mobile"},r.a.createElement(w.a,{modal:!0,overlayStyle:{background:"rgba(255,255,255,0.98"},contentStyle:C,closeOnDocumentClick:!1,trigger:function(e){return r.a.createElement(R,{open:e})}},function(t){return r.a.createElement(T,{pathName:e,close:t})}))))},t}(n.Component)),C={background:"rgba(255,255,255,0",width:"80%",border:"none"},A=a(456),x=a(457),D=function(){return r.a.createElement(f.a,{textAlign:"center"},r.a.createElement(A.a,{style:{marginBottom:"2rem"}}),r.a.createElement(h.a,{container:!0,textAlign:"center"},r.a.createElement(h.a.Row,null,r.a.createElement(x.a,{horizontal:!0,divided:!0,link:!0,size:"small"},r.a.createElement(x.a.Item,{style:{color:"black"},as:"a",href:"https://www.linkedin.com/in/dshkim/"},"LinkedIn"),r.a.createElement(x.a.Item,{style:{color:"black"},as:"a",href:"https://www.github.com/dahnielkim"},"GitHub"),r.a.createElement(x.a.Item,{style:{color:"black"},as:"a",href:"https://www.twitter.com/dahnielkim"},"Twitter"))),r.a.createElement(h.a.Row,{style:{fontSize:13,color:"rgb(0,0,0,0.4)",marginBottom:"1rem"}},"©2020 Daniel Kim. All Rights Reserved.")))},B=function(e){return r.a.createElement("div",{style:{maxWidth:900,marginRight:"auto",marginLeft:"auto",marginTop:"0.5rem"}},r.a.createElement(p,{lang:e.lang,title:e.seoTitle,description:e.seoDesc,slug:e.seoSlug}),r.a.createElement(S,{location:e.location}),e.children,r.a.createElement(D,null))};a.d(t,"a",function(){return B})},181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(455),l=a(461),i=a(459),c=a(187),m=a.n(c),s=function(e){return r.a.createElement(o.a,null,r.a.createElement(l.a,{container:!0,columns:2,style:{marginTop:"3rem"}},r.a.createElement(l.a.Row,{style:{marginBottom:"2rem"}},r.a.createElement(l.a.Column,{mobile:16,tablet:10,computer:8},e.topSegment?r.a.createElement("p",{style:{marginBottom:"1rem"}},e.topSegment):null,r.a.createElement(i.a,{as:"h1",style:{fontSize:"4rem",marginTop:0,lineHeight:"4rem"}},e.headerSegment),e.bottomSegment?e.bottomSegment:null),r.a.createElement(l.a.Column,{only:"computer tablet"},e.logo?r.a.createElement(m.a,{style:{width:"50%",marginTop:"1rem",marginBottom:"1rem",marginRight:"auto",marginLeft:"auto"},sizes:e.logo}):null))))};a.d(t,"a",function(){return s})},193:function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return r});a(205);function n(e){var t=Math.round(e/5);return t>5?" / "+new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":" / "+new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function r(e,t){var a;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var n=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(a=e).toLocaleDateString.apply(a,n)}},206:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(167),l=a(241),i=(a(152),function(e){return r.a.createElement("span",{style:{marginLeft:"1rem"}},r.a.createElement(l.a,{className:"post-type-icon"}),r.a.createElement("span",{className:"tag-item"},r.a.createElement(o.a,{to:e.tagLink},e.tagName)))});a.d(t,"a",function(){return i})},244:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(167),l=a(461),i=a(459),c=a(206),m=a(193),s=function(e){return r.a.createElement(l.a.Column,{computer:e.mainPage?8:16,tablet:e.mainPage?8:16,mobile:16,key:e.frontmatter.path,style:{marginBottom:"3rem"}},r.a.createElement(l.a.Row,null,r.a.createElement(o.a,{to:e.pathLink},r.a.createElement(i.a,{as:"h3"},e.frontmatter.title))),r.a.createElement(l.a.Row,{style:{marginTop:"0.5rem",color:"rgba(0, 0, 0, 0.4)"}},e.frontmatter.excerpt),r.a.createElement(l.a.Row,{style:{marginTop:"0.5rem",color:"rgba(0, 0, 0, 0.4)"}},Object(m.a)(e.frontmatter.date,"en"),""+Object(m.b)(e.timeToRead),r.a.createElement(c.a,{tagLink:"/tags/"+e.blogTag,tagName:e.blogTag})),r.a.createElement(l.a.Row,{style:{marginTop:"0.5rem"},className:"dkim-link"},r.a.createElement(o.a,{to:e.pathLink},"Read more →")))};a.d(t,"a",function(){return s})}}]);
//# sourceMappingURL=component---src-templates-all-blogs-js-565ef3af336ff6df3021.js.map