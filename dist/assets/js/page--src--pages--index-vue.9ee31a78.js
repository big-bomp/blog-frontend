(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{iyQ6:function(t,a,e){"use strict";e.r(a);e("Kw5r");var s=e("DOVJ"),n=(e("Y6W1"),e("VTBJ")),l=(e("qePV"),e("rB9j"),e("UxlC"),e("2B1R"),e("ma9I"),e("fVfk")),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,i=a.data,o=a.parent,u=e.info,c=e.showLinks,p=e.showNavigation,d=e.ariaLabel,g=function(t,a){var e=t.currentPage,s=void 0===e?1:e,n=t.totalPages,l=void 0===n?1:n,i=Math.ceil(a/2),r=Math.floor(s-i),o=Math.floor(s+i);l<=a?(r=0,o=l):s<=i?(r=0,o=a):s+i>=l&&(r=l-a,o=l);for(var u=[],c=r+1;c<=o;c++)u.push(c);return{current:s,total:l,start:r,end:o,pages:u}}(u,e.range),v=g.current,f=g.total,b=g.pages,C=g.start,L=g.end,y=Object(l.d)(o.$route),h=function(a){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===v&&(i=e.ariaCurrentLabel);var u={to:r(y,a),exact:!0};return e.activeLinkClass&&(u.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(u.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,o],attrs:Object(n.a)(Object(n.a)({},u),{},{"aria-label":i.replace("%n",a),"aria-current":v===a})},[l])},k=c?b.map((function(t){return h(t,t,e.ariaLinkLabel)})):[];if(p){var m=e.firstLabel,S=e.prevLabel,_=e.nextLabel,x=e.lastLabel,w=e.ariaFirstLabel,P=e.ariaPrevLabel,O=e.ariaNextLabel,j=e.ariaLastLabel,N=e.firstClass,G=e.prevClass,I=e.nextClass,$=e.lastClass,A=e.navClass;v>1&&k.unshift(h(v-1,S,P,[G,A])),C>0&&k.unshift(h(1,m,w,[N,A])),v<f&&k.push(h(v+1,_,O,[I,A])),L<f&&k.push(h(f,x,j,[$,A]))}return k.length<2?null:t("nav",Object(n.a)(Object(n.a)({},i),{},{attrs:{role:"navigation","aria-label":d}}),k)}};function r(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(l.g)(t)+"/".concat(a).concat(e):t}e("6NbQ");var o={name:"HomePage",metaInfo:{title:"Hello, world!"},components:{Pager:i},computed:{general:function(){return this.$page.general.edges[0].node}}},u=e("KHd+"),c=null,p=Object(u.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Layout",[e("header",{staticClass:"masthead",style:{backgroundImage:"url("+(t.GRIDSOME_API_URL+t.general.cover.url)+")"}},[e("div",{staticClass:"overlay"}),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-md-10 mx-auto"},[e("div",{staticClass:"site-heading"},[e("h1",[t._v(t._s(t.general.title))]),e("span",{staticClass:"subheading"},[t._v(t._s(t.general.subtitle))])])])])])]),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-md-10 mx-auto"},[t._l(t.$page.posts.edges,(function(a){return e("div",{key:a.node.id,staticClass:"post-preview"},[e("g-link",{attrs:{to:"/post/"+a.node.id}},[e("h2",{staticClass:"post-title"},[t._v("\n              "+t._s(a.node.title)+"\n            ")]),e("h3",{staticClass:"post-subtitle"},[t._v("\n              Problems look mighty small from 150 miles up\n            ")])]),e("p",{staticClass:"post-meta"},[t._v("Posted by\n            "),t._v("\n           on "+t._s(a.node.created_at)+"\n            ")]),e("p",t._l(a.node.tags,(function(s){return e("span",{key:s.id},[e("g-link",{attrs:{to:"/tag/"+a.node.id}},[t._v(" "+t._s(s.title))]),t._v("\n             \n\n            ")],1)})),0)],1)})),e("hr"),e("pager",{attrs:{info:t.$page.posts.pageInfo}})],2)])])])}),[],!1,null,null,null);"function"==typeof c&&c(p);a.default=p.exports}}]);