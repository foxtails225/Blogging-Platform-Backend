(this["webpackJsonpdankstocks-client"]=this["webpackJsonpdankstocks-client"]||[]).push([[20],{1117:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(2),t(3)),o=t(8),i=c.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.component,s=void 0===i?"div":i,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(s,Object(n.a)({className:Object(l.a)(t.root,o),ref:a},m))}));a.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},1345:function(e,a,t){"use strict";t.r(a);var n=t(23),r=t(0),c=t.n(r),l=t(36),o=t(1114),i=t(1100),s=t(1109),m=t(1140),u=t(1132),p=t(1095),d=t(360),g=t(7),E=t.n(g),b=t(11),f=t(45),h=t(359),v=t(3),O=t(82),j=t(14),y=t(1101),x=t(77),k={quote:j.a.green[300],preQuote:j.a.green[300]},w=Object(o.a)((function(e){var a;return{root:{},action:{backgroundColor:e.palette.common.white},image:{width:"100%",maxHeight:400},item:(a={padding:e.spacing(3),textAlign:"center"},Object(h.a)(a,e.breakpoints.up("md"),{"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}),Object(h.a)(a,e.breakpoints.down("sm"),{"&:not(:last-of-type)":{borderBottom:"1px solid ".concat(e.palette.divider)}}),a),label:{marginLeft:e.spacing(1)},overline:{marginTop:e.spacing(1)}}})),N=function(e){var a=e.className,t=e.path,l=Object(f.a)(e,["className","path"]),o=w(),i=Object(r.useState)(""),m=Object(n.a)(i,2),u=m[0],p=m[1],d=Object(r.useState)(),g=Object(n.a)(d,2),h=g[0],N=g[1],C=Object(r.useState)(k),P=Object(n.a)(C,2),S=P[0],A=P[1];return Object(r.useEffect)((function(){t&&function(){var e=Object(b.a)(E.a.mark((function e(a){var t,n,r,c,l,o,i,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/stock/quote/".concat(a));case 2:(t=e.sent).data&&(s={latestPrice:null!==(n=t.data.latestPrice)&&void 0!==n?n:"N/A",change:null!==(r=t.data.change)&&void 0!==r?r:"N/A",changePercent:null!==(c=t.data.changePercent)&&void 0!==c?c:"N/A",extendedPrice:null!==(l=t.data.extendedPrice)&&void 0!==l?l:"N/A",extendedChange:null!==(o=t.data.extendedChange)&&void 0!==o?o:"N/A",extendedChangePercent:null!==(i=t.data.extendedChangePercent)&&void 0!==i?i:"N/A"},N(s),p(a+" : "+t.data.companyName));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()(t)}),[t]),Object(r.useEffect)((function(){if(h){var e=h.change>=0?j.a.green[300]:j.a.red[300],a=h.extendedChange>=0?j.a.green[300]:j.a.red[300];A({quote:e,preQuote:a})}}),[h]),c.a.createElement("div",Object.assign({className:Object(v.a)(o.root,a)},l),c.a.createElement(y.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},c.a.createElement(y.a,{item:!0,md:6,xs:12},c.a.createElement(x.a,{variant:"h3",color:"textPrimary",display:"inline"},"".concat(u," - ")),h&&c.a.createElement(x.a,{variant:"body1",display:"inline",style:{color:S.quote}},"$",h.latestPrice," ",h.change>=0?"+":"-","$","number"===typeof h.change?Math.abs(h.change):h.change," ","(",h.changePercent>=0&&"+",h.changePercent,"%)"),c.a.createElement(x.a,{variant:"subtitle1",color:"textSecondary"},"After Hours - ",h&&c.a.createElement(x.a,{variant:"body1",display:"inline",style:{color:S.preQuote}},"$",h.extendedPrice," ",h.extendedChange>=0?"+":"-","$","number"===typeof h.extendedChange?Math.abs(h.extendedChange):h.extendedChange," ","(",h.extendedChangePercent>=0&&"+",h.extendedChangePercent,"%)")),c.a.createElement(s.a,{mt:3}))))},C=t(21),P=t(84),S=t.n(P),A=t(1102),W=t(1103),B=t(1104),T=t(1105),M=t(1106),D=t(1107),H=t(1112),I=t(1078),q=t(1079),R=t(361),$=t.n(R),_=t(83),z=t(200),F=Object(o.a)((function(e){return{root:{},image:{flexShrink:0,height:56,width:56},subscriptions:{fontWeight:e.typography.fontWeightMedium},value:{color:j.a.green[600],fontWeight:e.typography.fontWeightMedium}}})),L=function(e){var a=e.className,t=e.path,l=Object(f.a)(e,["className","path"]),o=F(),i=Object(_.a)(),m=Object(r.useState)([]),u=Object(n.a)(m,2),d=u[0],g=u[1],h=Object(r.useCallback)(Object(b.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,O.a.get("/posts/get/stock/".concat(t));case 5:a=e.sent,i.current&&g(a.data.posts),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),g([]);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),[i,t]);return Object(r.useEffect)((function(){h()}),[h]),c.a.createElement(A.a,Object.assign({className:Object(v.a)(o.root,a)},l),c.a.createElement(W.a,{title:"Dank News"}),c.a.createElement(p.a,null),c.a.createElement(S.a,null,c.a.createElement(s.a,null,c.a.createElement(B.a,null,c.a.createElement(T.a,null,d.map((function(e){return c.a.createElement(M.a,{hover:!0,key:e._id},c.a.createElement(D.a,null,c.a.createElement(s.a,{display:"flex",alignItems:"center"},c.a.createElement(H.a,{alt:"Author",src:e.author.avatar,component:C.a,to:"/users/"+e.author.name},Object(z.a)(e.author.name)),c.a.createElement(s.a,{ml:2},c.a.createElement(I.a,{color:"textPrimary",component:C.a,to:"/posts/public/"+e.slug,variant:"h6"},e.title)))))})))))),c.a.createElement(s.a,{p:2,display:"flex",justifyContent:"flex-end"},c.a.createElement(q.a,{component:C.a,size:"small",to:"#",endIcon:c.a.createElement($.a,null)},"See all")))},Q=t(119),J=t.n(Q),V=t(161),G=Object(o.a)((function(e){return{root:{},collapse:{textOverflow:"ellipsis",overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"3"},box:Object(h.a)({padding:e.spacing(6)},e.breakpoints.down("sm"),{padding:e.spacing(3)})}})),K=function(e){var a=e.className,t=e.path,l=Object(f.a)(e,["className","path"]),o=G(),i=Object(r.useState)(null),m=Object(n.a)(i,2),u=m[0],p=m[1],d=Object(r.useState)(!1),g=Object(n.a)(d,2),h=g[0],j=g[1];Object(r.useEffect)((function(){t&&function(){var e=Object(b.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/stock/company/".concat(t));case 2:(a=e.sent).data&&p(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]);return c.a.createElement(V.a,Object.assign({className:Object(v.a)(o.root,a)},l),c.a.createElement(S.a,null,c.a.createElement(s.a,{className:o.box},c.a.createElement(y.a,{container:!0,justify:"space-between"},c.a.createElement(y.a,{item:!0},c.a.createElement(x.a,{variant:"h3",color:"textPrimary"},"Company Profile"))),u&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{my:4},c.a.createElement(y.a,{container:!0,justify:"space-between",spacing:3}," ",c.a.createElement(y.a,{item:!0,lg:12,xs:12},c.a.createElement(x.a,{variant:"body1",color:"textPrimary",className:Object(v.a)(!h&&o.collapse)},u.description),c.a.createElement(I.a,{onClick:function(){return j(!h)}},"Read ",h?"less":"more")),c.a.createElement(y.a,{item:!0,lg:6,xs:12},c.a.createElement(B.a,null,c.a.createElement(T.a,null,c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Sector"),c.a.createElement(D.a,{align:"center"},u.sector)),c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Industry"),c.a.createElement(D.a,{align:"center"},u.industry)),c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Employees"),c.a.createElement(D.a,{align:"center"},J()(u.employees).format("0,0")))))),c.a.createElement(y.a,{item:!0,lg:6,xs:12},c.a.createElement(B.a,null,c.a.createElement(T.a,null,c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Address"),c.a.createElement(D.a,{align:"center"},u.address," ",u.city," ",u.state," ",u.zip," ",u.country)),c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Phone Number"),c.a.createElement(D.a,{align:"center"},"+",u.phone)),c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"CEO"),c.a.createElement(D.a,{align:"center"},u.CEO))))))),c.a.createElement(s.a,{mt:2},c.a.createElement(x.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Official Website: ",u.website))))))},U=Object(o.a)((function(){return{root:{}}})),X=function(e){var a=e.className,t=e.path,l=Object(f.a)(e,["className","path"]),o=U(),i=Object(r.useState)(null),m=Object(n.a)(i,2),u=m[0],d=m[1];return Object(r.useEffect)((function(){t&&function(){var e=Object(b.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/stock/advanced-stats/".concat(t));case 2:(a=e.sent).data&&d(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),c.a.createElement(A.a,Object.assign({className:Object(v.a)(o.root,a)},l),c.a.createElement(W.a,{title:"Key Stats"}),c.a.createElement(p.a,null),c.a.createElement(S.a,null,c.a.createElement(s.a,null,u&&c.a.createElement(B.a,null,c.a.createElement(T.a,null,c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"10-Day Volume"),c.a.createElement(D.a,{align:"center"},J()(u.avg10Volume).format("0,0"))),c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Day High"),c.a.createElement(D.a,{align:"center"},J()(u.peHigh).format("0,0.00"))),c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Day Low"),c.a.createElement(D.a,{align:"center"},J()(u.peLow).format("0,0.00"))),c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Market Cap"),c.a.createElement(D.a,{align:"center"},J()(u.marketcap).format("0,0"))),c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Shares Outstanding"),c.a.createElement(D.a,{align:"center"},J()(u.sharesOutstanding).format("0,0"))),c.a.createElement(M.a,null,c.a.createElement(D.a,{align:"center"},"Beta"),c.a.createElement(D.a,{align:"center"},J()(u.beta).format("0,0.00"))))))))},Y=Object(o.a)((function(){return{root:{paddingTop:32}}})),Z=function(e){var a=e.path,t=Y();return c.a.createElement(i.a,{className:t.root,maxWidth:!1},c.a.createElement(y.a,{container:!0,spacing:3},c.a.createElement(y.a,{item:!0,lg:6,xs:12},c.a.createElement(L,{path:a})),c.a.createElement(y.a,{item:!0,lg:6,xs:12},c.a.createElement(X,{path:a})),c.a.createElement(y.a,{item:!0,lg:12,xs:12},c.a.createElement(K,{path:a}))))},ee=Object(o.a)((function(){return{root:{paddingTop:32,minHeight:"30vh"}}})),ae=function(e){e.path;var a=ee();return c.a.createElement(i.a,{className:a.root,maxWidth:!1},c.a.createElement(y.a,{container:!0,justify:"center",alignItems:"center",spacing:3},c.a.createElement(y.a,{item:!0},c.a.createElement(x.a,{variant:"h4",component:"b",color:"textSecondary"},"Being worked on"))))},te=t(1117),ne=t(619),re=t(620),ce=t(1086),le=t(1113),oe=Object(o.a)((function(e){return{root:{paddingTop:32},image:Object(h.a)({height:"15vh",marginRight:"2vw"},e.breakpoints.down("sm"),{width:"100vw"}),content:{paddingTop:0,paddingBottom:0},chip:{margin:e.spacing(.5)}}})),ie=function(e){var a=e.path,t=oe(),l=Object(r.useState)([]),o=Object(n.a)(l,2),s=o[0],m=o[1];return Object(r.useEffect)((function(){a&&function(){var e=Object(b.a)(E.a.mark((function e(a){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/stock/news/".concat(a));case 2:(t=e.sent).data.data&&t.data.data.length>0&&m(t.data.data);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()(a)}),[a]),c.a.createElement(i.a,{className:t.root,maxWidth:!1},s.length>0&&c.a.createElement(y.a,{container:!0,spacing:3},c.a.createElement(y.a,{item:!0,xs:12,md:12,lg:12},c.a.createElement(A.a,null,c.a.createElement(te.a,{className:t.content},c.a.createElement(ne.a,null,s.map((function(e,a){return c.a.createElement(re.a,{key:a,disableGutters:!0,divider:!0},c.a.createElement("img",{alt:"Stock News",src:e.image_url,className:t.image}),c.a.createElement(ce.a,{primary:c.a.createElement(I.a,{color:"textPrimary",target:"_blank",href:e.news_url,variant:"h5"},e.title),primaryTypographyProps:{variant:"body1",color:"textPrimary"},secondary:c.a.createElement(x.a,{variant:"caption",color:"textSecondary",component:"span"},e.text,c.a.createElement("br",null),e.tickers.slice(0,2).map((function(e,a){return c.a.createElement(le.a,{variant:"outlined",key:a,size:"small",label:e,className:t.chip})}))," | Date",": ",e.date)}))}))))))))},se=[{value:"opinions",label:"Opinions"},{value:"news",label:"News"},{value:"financials",label:"Financials/Earnings"},{value:"sec",label:"SEC Filings"}],me=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=me(),a=Object(l.h)(),t=Object(r.useState)(null),o=Object(n.a)(t,2),g=o[0],E=o[1],b=Object(r.useState)("news"),f=Object(n.a)(b,2),h=f[0],v=f[1];Object(r.useEffect)((function(){var e=a.pathname.split("/")[2];e&&E(e)}),[a]);return c.a.createElement(d.a,{className:e.root,title:g?"".concat(g," Stock Price"):""},c.a.createElement(i.a,{maxWidth:"lg"},c.a.createElement(N,{path:g}),c.a.createElement(s.a,{mt:6},c.a.createElement(m.a,{onChange:function(e,a){v(a)},scrollButtons:"auto",value:h,textColor:"secondary",variant:"scrollable"},se.map((function(e){return c.a.createElement(u.a,{key:e.value,label:e.label,value:e.value})})))),c.a.createElement(p.a,null),c.a.createElement(s.a,{py:3,pb:6},"opinions"===h&&c.a.createElement(Z,{path:g}),"news"===h&&c.a.createElement(ie,{path:g}),"financials"===h&&c.a.createElement(ae,{path:g}),"sec"===h&&c.a.createElement(ae,{path:g}))))}}}]);
//# sourceMappingURL=20.a4ef9c0e.chunk.js.map