(this["webpackJsonpdankstocks-client"]=this["webpackJsonpdankstocks-client"]||[]).push([[25],{1276:function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1423:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(0),c=a.n(r),l=a(39),i=a(674),o=a(1144),s=a(670),m=a(1194),u=a(1192),p=a(1140),f=a(369),d=a(6),E=a.n(d),b=a(12),h=a(40),g=a(106),v=a(3),y=a(32),O=a(11),j=a(1145),k=a(1148),x=a(636),w=a(30),C=a(1256),S=a(1253),N=a(1254),I=a(1252),A=a(1263),P=a(1262),T=a(1257),M=a(364),D=a(1272),F=a(1273),L=a(1264),W=a(1251),R=a(365),B=a(1247),Y=a(1248),q=a(1249),G=a(1271),z=a(38),H=a(637),_=a(83),$=Object(w.a)(Object(w.a)({},M.b),{},{background:"transparent",color:"#fff",boxShadow:"none"}),Q=Object(G.a)("%b %d, '%y"),J=Object(G.a)("%b %d, '%y, %H:%M"),U=function(e){return new Date(e.date)},V=function(e){return e.close},K=Object(R.a)((function(e){return new Date(e.date)})).left,X=Object(D.a)((function(e){var t=e.path,a=e.period,l=e.width,i=e.ratio,o=e.quote,m=e.name,u=e.color,p=e.margin,f=void 0===p?{top:0,right:15,bottom:0,left:15}:p,d=e.showTooltip,h=e.hideTooltip,g=e.tooltipData,v=e.tooltipTop,O=void 0===v?0:v,j=e.tooltipLeft,k=void 0===j?0:j,x=Object(z.a)(),w=Object(r.useState)([]),M=Object(n.a)(w,2),D=M[0],R=M[1],G=Object(H.a)(x.breakpoints.down("sm"))?150:l,X=G*i-f.top,Z=function(){var e=Object(b.a)(E.a.mark((function e(t,a){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/stock/chart/".concat(t),{params:{type:a}});case 2:n=e.sent,R(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){t&&Z(t,a)}),[t,a]);var ee=Object(r.useMemo)((function(){return Object(P.a)({range:[0,G-f.left],domain:Object(B.a)(D,U)})}),[G,D,f.left]),te=Object(r.useMemo)((function(){var e=Math.abs(Object(Y.a)(D,V)-Object(q.a)(D,V))/2;return Object(T.a)({range:[X+f.top,f.top],domain:[Object(q.a)(D,V)-e/3||0,Object(Y.a)(D,V)+e||0],nice:!0})}),[X,D,f.top]),ae=Object(r.useCallback)((function(e){var t=(Object(L.a)(e)||{x:0}).x,a=ee.invert(t),n=K(D,a,1),r=D[n-1],c=D[n],l=r;c&&U(c)&&(l=a.valueOf()-U(r).valueOf()>U(c).valueOf()-a.valueOf()?c:r),d({tooltipData:l,tooltipLeft:t,tooltipTop:te(V(l))})}),[d,te,ee,D]);return c.a.createElement("div",null,c.a.createElement(_.a,{variant:"h3",color:"textPrimary",display:"inline"},"".concat(m," - ")),o&&c.a.createElement(_.a,{variant:"body1",display:"inline",style:{color:u.quote}},"$",g?V(g):o.latestPrice," ",o.change>=0?"+":"-","$","number"===typeof o.change?Math.abs(o.change):o.change," ","(",o.changePercent>=0&&"+",100*o.changePercent,"%)"),c.a.createElement(_.a,{variant:"subtitle1",color:"textSecondary"},"After Hours - ",o&&c.a.createElement(_.a,{variant:"body1",display:"inline",style:{color:u.preQuote}},"$",o.extendedPrice," ",o.extendedChange>=0?"+":"-","$","number"===typeof o.extendedChange?Math.abs(o.extendedChange):o.extendedChange," ","(",o.extendedChangePercent>=0&&"+",100*o.extendedChangePercent,"%)")),c.a.createElement(_.a,{variant:"subtitle1",color:"textSecondary"},"Delayed by 15 minutes"),c.a.createElement(s.a,{mt:3},c.a.createElement("div",{style:{position:"relative"}},D.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("svg",{width:G,height:X},c.a.createElement("rect",{x:0,y:0,width:G,height:X,fill:"url(#area-background-gradient)",rx:3}),c.a.createElement(W.a,{id:"area-background-gradient",from:"#3b6978",to:"#204051"}),c.a.createElement(W.a,{id:"area-gradient",from:"#edffea",to:"#edffea",toOpacity:.1}),c.a.createElement(A.a,{left:0,scale:te,width:G,strokeDasharray:"1,3",stroke:"#edffea",strokeOpacity:0,pointerEvents:"none"}),c.a.createElement(C.a,{data:D,x:function(e){var t;return null!==(t=ee(U(e)))&&void 0!==t?t:0},y:function(e){var t;return null!==(t=te(V(e)))&&void 0!==t?t:0},yScale:te,strokeWidth:1,stroke:"url(#area-gradient)",fill:"url(#area-gradient)",curve:I.a}),c.a.createElement(S.a,{x:0,y:f.top,width:G-f.left,height:X,fill:"transparent",rx:14,onTouchStart:ae,onTouchMove:ae,onMouseMove:ae,onMouseLeave:function(){return h()}}),g&&c.a.createElement("g",null,c.a.createElement(N.a,{from:{x:k,y:f.top},to:{x:k,y:X+f.top},stroke:"#75daad",strokeWidth:2,pointerEvents:"none",strokeDasharray:"5,2"}),c.a.createElement("circle",{cx:k,cy:O+1,r:4,fill:"black",fillOpacity:.1,stroke:"black",strokeOpacity:.1,strokeWidth:2,pointerEvents:"none"}),c.a.createElement("circle",{cx:k,cy:O,r:4,fill:"#75daad",stroke:"white",strokeWidth:2,pointerEvents:"none"}))),g&&c.a.createElement("div",null,c.a.createElement(F.a,{key:Math.random(),top:O-12,left:k+12,style:$},"dynamic"!==a?Q(U(g)):J(U(g))))))))})),Z={quote:O.a.green[300],preQuote:O.a.green[300]},ee=[{name:"dynamic",label:"1D",visible:!0},{name:"5d",label:"5D",visible:!0},{name:"1m",label:"1M",visible:!0},{name:"3m",label:"3M",visible:!1},{name:"1y",label:"1Y",visible:!0},{name:"5y",label:"5Y",visible:!1},{name:"max",label:"ALL",visible:!0}],te=Object(i.a)((function(e){var t;return{root:{},action:{backgroundColor:e.palette.common.white},image:{width:"100%",maxHeight:400},item:(t={padding:e.spacing(3),textAlign:"center"},Object(g.a)(t,e.breakpoints.up("md"),{"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}),Object(g.a)(t,e.breakpoints.down("sm"),{"&:not(:last-of-type)":{borderBottom:"1px solid ".concat(e.palette.divider)}}),t),label:{marginLeft:e.spacing(1)},overline:{marginTop:e.spacing(1)}}})),ae=function(e){var t=e.className,a=e.path,l=Object(h.a)(e,["className","path"]),i=te(),o=Object(r.useState)(""),m=Object(n.a)(o,2),u=m[0],p=m[1],f=Object(r.useState)(),d=Object(n.a)(f,2),g=d[0],w=d[1],C=Object(r.useState)(Z),S=Object(n.a)(C,2),N=S[0],I=S[1],A=Object(r.useState)("dynamic"),P=Object(n.a)(A,2),T=P[0],M=P[1];Object(r.useEffect)((function(){a&&function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n,r,c,l,i,o,s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/stock/quote/".concat(t));case 2:(a=e.sent).data&&(s={latestPrice:null!==(n=a.data.latestPrice)&&void 0!==n?n:"N/A",change:null!==(r=a.data.change)&&void 0!==r?r:"N/A",changePercent:null!==(c=a.data.changePercent)&&void 0!==c?c:"N/A",extendedPrice:null!==(l=a.data.extendedPrice)&&void 0!==l?l:"N/A",extendedChange:null!==(i=a.data.extendedChange)&&void 0!==i?i:"N/A",extendedChangePercent:null!==(o=a.data.extendedChangePercent)&&void 0!==o?o:"N/A"},w(s),p(t+" : "+a.data.companyName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(a)}),[a]),Object(r.useEffect)((function(){if(g){var e=g.change>=0?O.a.green[300]:O.a.red[300],t=g.extendedChange>=0?O.a.green[300]:O.a.red[300];I({quote:e,preQuote:t})}}),[g]);var D=function(e){return M(e.currentTarget.name)};return c.a.createElement("div",Object.assign({className:Object(v.a)(i.root,t)},l),c.a.createElement(j.a,{container:!0,spacing:3},c.a.createElement(j.a,{item:!0,md:6,xs:12},c.a.createElement(X,{period:T,path:a,name:u,quote:g,color:N,width:700,ratio:.4})),c.a.createElement(j.a,{item:!0,md:6},c.a.createElement(s.a,{mt:9,style:{textAlign:"end"}},c.a.createElement(k.a,{color:"primary",size:"small"},ee.map((function(e){return c.a.createElement(x.a,{key:e.name,name:e.name,onClick:D,variant:T===e.name?"contained":"outlined"},e.label)})))))))},ne=a(14),re=a(143),ce=a.n(re),le=a(1146),ie=a(1147),oe=a(1186),se=a(1187),me=a(1188),ue=a(1189),pe=a(1152),fe=a(1122),de=a(1153),Ee=a(372),be=a.n(Ee),he=a(141),ge=a(1276),ve=[{name:"bullish",text:"Bullish"},{name:"bearish",text:"Bearish"},{name:"neutral",text:"Neutral"},{name:"no_opinion",text:"No Opinion"}],ye=Object(i.a)((function(e){return{root:{},image:{flexShrink:0,height:56,width:56},subscriptions:{fontWeight:e.typography.fontWeightMedium},value:{color:O.a.green[600],fontWeight:e.typography.fontWeightMedium},picker:{}}})),Oe=function(e){var t=e.className,a=e.path,l=Object(h.a)(e,["className","path"]),i=ye(),o=Object(he.a)(),m=Object(r.useState)([]),u=Object(n.a)(m,2),f=u[0],d=u[1],g=Object(r.useCallback)(Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,y.a.get("/posts/get/stock/".concat(a));case 5:t=e.sent,o.current&&d(t.data.posts),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),d([]);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),[o,a]);return Object(r.useEffect)((function(){g()}),[g]),c.a.createElement(le.a,Object.assign({className:Object(v.a)(i.root,t)},l),c.a.createElement(ie.a,{title:"Dank Reads"}),c.a.createElement(p.a,null),c.a.createElement(ce.a,null,c.a.createElement(s.a,null,c.a.createElement(oe.a,null,c.a.createElement(se.a,null,f.map((function(e){return c.a.createElement(me.a,{hover:!0,key:e._id},c.a.createElement(ue.a,null,c.a.createElement(s.a,{display:"flex",alignItems:"center"},c.a.createElement(pe.a,{alt:"Author",src:e.author.avatar,component:ne.a,to:"/users/"+e.author.name},Object(ge.a)(e.author.name)),c.a.createElement(s.a,{ml:2},c.a.createElement(fe.a,{color:"textPrimary",component:ne.a,to:"/posts/public/"+e.slug,variant:"h6"},e.title)),c.a.createElement(s.a,{flexGrow:1}),c.a.createElement(de.a,{variant:"outlined",color:"primary",label:ve.find((function(t){return t.name===e.picker})).text,className:i.picker}))))})))))),c.a.createElement(s.a,{p:2,display:"flex",justifyContent:"flex-end"},c.a.createElement(x.a,{component:ne.a,size:"small",to:"#",endIcon:c.a.createElement(be.a,null)},"See all")))},je=a(1280),ke=a.n(je),xe=a(1384),we=a(169),Ce=a(1150),Se=Object(i.a)((function(e){return{root:{},collapse:{textOverflow:"ellipsis",overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"3"},box:Object(g.a)({padding:e.spacing(6)},e.breakpoints.down("sm"),{padding:e.spacing(3)}),link:{color:"#fff"},more:{fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif",fontWeight:"bold"}}})),Ne=function(e){var t,a=e.className,l=e.path,i=Object(h.a)(e,["className","path"]),o=Se(),m=Object(r.useState)(null),u=Object(n.a)(m,2),p=u[0],f=u[1],d=Object(r.useState)(!1),g=Object(n.a)(d,2),O=g[0],k=g[1];Object(r.useEffect)((function(){l&&function(){var e=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/stock/company/".concat(l));case 2:(t=e.sent).data&&f(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l]);return c.a.createElement(we.a,Object.assign({className:Object(v.a)(o.root,a)},i),c.a.createElement(ce.a,null,c.a.createElement(s.a,{className:o.box},c.a.createElement(j.a,{container:!0,justify:"space-between"},c.a.createElement(j.a,{item:!0},c.a.createElement(_.a,{variant:"h3",color:"textPrimary"},"Company Profile"))),p&&c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{my:4},c.a.createElement(j.a,{container:!0,justify:"space-between",spacing:3}," ",c.a.createElement(j.a,{item:!0,lg:12,xs:12},c.a.createElement(_.a,{variant:"body1",color:"textPrimary",className:Object(v.a)(!O&&o.collapse)},p.description),c.a.createElement(fe.a,{onClick:function(){return k(!O)},className:o.more},"Read ",O?"less":"more")),c.a.createElement(Ce.a,{mdDown:!0},c.a.createElement(j.a,{item:!0,lg:6,xs:12},c.a.createElement(oe.a,null,c.a.createElement(se.a,null,c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Sector"),c.a.createElement(ue.a,{align:"center"},p.sector)),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Industry"),c.a.createElement(ue.a,{align:"center"},p.industry)),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Employees"),c.a.createElement(ue.a,{align:"center"},ke()(p.employees).format("0,0")))))),c.a.createElement(j.a,{item:!0,lg:6,xs:12},c.a.createElement(oe.a,null,c.a.createElement(se.a,null,c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Address"),c.a.createElement(ue.a,{align:"center"},p.address," ",p.city," ",p.state," ",p.zip," ",p.country)),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Phone Number"),c.a.createElement(ue.a,{align:"center"},p.phone&&c.a.createElement(xe.a,{value:p.phone,displayType:"text",format:"+1 (###) ###-####"}))),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"CEO"),c.a.createElement(ue.a,{align:"center"},p.CEO)))))),c.a.createElement(Ce.a,{lgUp:!0},c.a.createElement(j.a,{item:!0,lg:12,xs:12},c.a.createElement(oe.a,null,c.a.createElement(se.a,null,c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Sector"),c.a.createElement(ue.a,{align:"center"},p.sector)),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Industry"),c.a.createElement(ue.a,{align:"center"},p.industry)),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Employees"),c.a.createElement(ue.a,{align:"center"},ke()(p.employees).format("0,0"))),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Address"),c.a.createElement(ue.a,{align:"center"},p.address," ",p.city," ",p.state," ",p.zip," ",p.country)),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Phone Number"),c.a.createElement(ue.a,{align:"center"},"+",p.phone)),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"CEO"),c.a.createElement(ue.a,{align:"center"},p.CEO)))))))),c.a.createElement(s.a,{mt:2},c.a.createElement(_.a,{gutterBottom:!0,variant:"h5"},c.a.createElement(fe.a,{href:null!==(t=p.website)&&void 0!==t?t:"#",target:"blank",className:o.link},p.website)))))))},Ie=Object(i.a)((function(){return{root:{}}})),Ae=function(e){var t=e.className,a=e.path,l=Object(h.a)(e,["className","path"]),i=Ie(),o=Object(r.useState)(null),m=Object(n.a)(o,2),u=m[0],f=m[1];return Object(r.useEffect)((function(){a&&function(){var e=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/stock/advanced-stats/".concat(a));case 2:(t=e.sent).data&&f(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),c.a.createElement(le.a,Object.assign({className:Object(v.a)(i.root,t)},l),c.a.createElement(ie.a,{title:"Key Stats"}),c.a.createElement(p.a,null),c.a.createElement(ce.a,null,c.a.createElement(s.a,null,u&&c.a.createElement(oe.a,null,c.a.createElement(se.a,null,c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"10-Day Volume"),c.a.createElement(ue.a,{align:"center"},ke()(u.avg10Volume).format("0,0"))),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"52 Week High"),c.a.createElement(ue.a,{align:"center"},ke()(u.week52high).format("0,0.00"))),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"52 Week Low"),c.a.createElement(ue.a,{align:"center"},ke()(u.week52low).format("0,0.00"))),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Market Cap"),c.a.createElement(ue.a,{align:"center"},ke()(u.marketcap).format("0,0"))),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Shares Outstanding"),c.a.createElement(ue.a,{align:"center"},ke()(u.sharesOutstanding).format("0,0"))),c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"},"Beta"),c.a.createElement(ue.a,{align:"center"},ke()(u.beta).format("0,0.00"))))))))},Pe=Object(i.a)((function(){return{root:{paddingTop:32}}})),Te=function(e){var t=e.path,a=Pe();return c.a.createElement(j.a,{container:!0,spacing:3,className:a.root},c.a.createElement(j.a,{item:!0,lg:6,xs:12},c.a.createElement(Oe,{path:t})),c.a.createElement(j.a,{item:!0,lg:6,xs:12},c.a.createElement(Ae,{path:t})),c.a.createElement(j.a,{item:!0,lg:12,xs:12},c.a.createElement(Ne,{path:t})))},Me=a(1190),De={totalRevenue:"Total Revenue",costOfRevenue:"Cost of Revenue",grossProfit:"Gross Profit",researchAndDevelopment:"Research & Development",sellingGeneralAndAdmin:"General, Selling, & Admin Costs",operatingExpense:"Operating Expense",operatingIncome:"Operating Income",otherIncomeExpenseNet:"Other Income Next Expenses",ebit:"EBIT",interestIncome:"Interest Income",pretaxIncome:"Pretax Income",incomeTax:"Income Tax",minorityInterest:"Minority Interest",netIncome:"Net Income",netIncomeBasic:"Net Income Basic",fiscalYear:"Year"},Fe=function(e){var t=e.path,a=Object(r.useState)([]),l=Object(n.a)(a,2),i=l[0],o=l[1],m=Object(r.useState)([]),u=Object(n.a)(m,2),p=u[0],f=u[1];return Object(r.useEffect)((function(){t&&function(){var e=Object(b.a)(E.a.mark((function e(){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/stock/income/".concat(t));case 2:(a=e.sent).data&&(n=a.data.map((function(e){var t={};return Object.keys(De).forEach((function(a){t[a]=e[a]})),t}))).length>0&&(n.shift(),o(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(r.useEffect)((function(){if(0!==i.length){var e=i.map((function(e){return null===e||void 0===e?void 0:e.fiscalYear}));f(e)}}),[i]),c.a.createElement(s.a,{minWidth:700},c.a.createElement(oe.a,null,c.a.createElement(Me.a,null,c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"}),p.map((function(e){return c.a.createElement(ue.a,{key:e,align:"center"},e)})))),i.length>0&&c.a.createElement(se.a,null,Object.keys(i[0]).filter((function(e){return"fiscalYear"!==e})).map((function(e){return c.a.createElement(me.a,{hover:!0,key:e},c.a.createElement(ue.a,{align:"center",width:100},De[e]),Array.from({length:p.length}).map((function(t,a){return c.a.createElement(ue.a,{key:a,align:"center"},i[a][e]?"number"===typeof i[a][e]?i[a][e]>=0?ke()(i[a][e]/12).format("0,0"):"(".concat(ke()(Math.abs(i[a][e]/12)).format("0,0"),")"):i[a][e]:"-")})))})))))},Le={currentCash:"Current Cash",shortTermInvestments:"Short Term Investments",receivables:"Receivables",inventory:"Inventory",otherCurrentAssets:"Other Current Assets",currentAssets:"Current Assets",longTermInvestments:"Long Term Investments",propertyPlantEquipment:"Property Plant Equipment",goodwill:"Goodwill",intangibleAssets:"Intangible Assets",otherAssets:"Other Assets",totalAssets:"Total Assets",accountsPayable:"Accounts Payable",currentLongTermDebt:"Current Long Term Debt",otherCurrentLiabilities:"Other Current Liabilities",totalCurrentLiabilities:"Total Current Liabilities",longTermDebt:"long Term Debt",otherLiabilities:"Other Liabilities",minorityInterest:"Minority Interest",totalLiabilities:"Total Liabilities",commonStock:"Common Stock",retainedEarnings:"Retained Earnings",treasuryStock:"Treasury Stock",capitalSurplus:"Capital Surplus",shareholderEquity:"Shareholder Equity",netTangibleAssets:"Net Tangible Assets",fiscalYear:"Year"},We=function(e){var t=e.path,a=Object(r.useState)([]),l=Object(n.a)(a,2),i=l[0],o=l[1],m=Object(r.useState)([]),u=Object(n.a)(m,2),p=u[0],f=u[1];return Object(r.useEffect)((function(){t&&function(){var e=Object(b.a)(E.a.mark((function e(){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/stock/balance-sheet/".concat(t));case 2:(a=e.sent).data&&(n=a.data.map((function(e){var t={};return Object.keys(Le).forEach((function(a){t[a]=e[a]})),t}))).length>0&&(n.shift(),o(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(r.useEffect)((function(){if(0!==i.length){var e=i.map((function(e){return null===e||void 0===e?void 0:e.fiscalYear}));f(e)}}),[i]),c.a.createElement(s.a,{minWidth:700},c.a.createElement(oe.a,null,c.a.createElement(Me.a,null,c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"}),p.map((function(e){return c.a.createElement(ue.a,{key:e,align:"center"},e)})))),i.length>0&&c.a.createElement(se.a,null,Object.keys(i[0]).filter((function(e){return"fiscalYear"!==e})).map((function(e){return c.a.createElement(me.a,{hover:!0,key:e},c.a.createElement(ue.a,{align:"center",width:100},Le[e]),Array.from({length:p.length}).map((function(t,a){return c.a.createElement(ue.a,{key:a,align:"center"},i[a][e]?"number"===typeof i[a][e]?i[a][e]>=0?ke()(i[a][e]/12).format("0,0"):"(".concat(ke()(Math.abs(i[a][e]/12)).format("0,0"),")"):i[a][e]:"-")})))})))))},Re={netIncome:"Net Income",depreciation:"Depreciation",changesInReceivables:"Changes In Receivables",changesInInventories:"Changes In Inventory",cashChange:"Change In Cash",cashFlow:"Cash Flow",capitalExpenditures:"Capital Expenditures",investments:"Investments",netBorrowings:"Net Borrowings",otherFinancingCashFlows:"Other Financing Cash Flows",cashFlowFinancing:"Cash Flow Financing",exchangeRateEffect:"Exchange Rate Effect",totalInvestingCashFlows:"Cash Flow from Investing Activities",fiscalYear:"Year"},Be=function(e){var t=e.path,a=Object(r.useState)([]),l=Object(n.a)(a,2),i=l[0],o=l[1],m=Object(r.useState)([]),u=Object(n.a)(m,2),p=u[0],f=u[1];return Object(r.useEffect)((function(){t&&function(){var e=Object(b.a)(E.a.mark((function e(){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/stock/cash-flow/".concat(t));case 2:(a=e.sent).data&&(n=a.data.map((function(e){var t={};return Object.keys(Re).forEach((function(a){t[a]=e[a]})),t}))).length>0&&(n.shift(),o(n));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t]),Object(r.useEffect)((function(){if(0!==i.length){var e=i.map((function(e){return null===e||void 0===e?void 0:e.fiscalYear}));f(e)}}),[i]),c.a.createElement(s.a,{minWidth:700},c.a.createElement(oe.a,null,c.a.createElement(Me.a,null,c.a.createElement(me.a,null,c.a.createElement(ue.a,{align:"center"}),p.map((function(e){return c.a.createElement(ue.a,{key:e,align:"center"},e)})))),i.length>0&&c.a.createElement(se.a,null,Object.keys(i[0]).filter((function(e){return"fiscalYear"!==e})).map((function(e){return c.a.createElement(me.a,{hover:!0,key:e},c.a.createElement(ue.a,{align:"center",width:100},Re[e]),Array.from({length:p.length}).map((function(t,a){return c.a.createElement(ue.a,{key:a,align:"center"},i[a][e]?"number"===typeof i[a][e]?i[a][e]>=0?ke()(i[a][e]/12).format("0,0"):"(".concat(ke()(Math.abs(i[a][e]/12)).format("0,0"),")"):i[a][e]:"-")})))})))))},Ye=[{value:"income",label:"Income Statement"},{value:"balance",label:"Balance Sheet"},{value:"flow",label:"Cash Flow"}],qe=Object(i.a)((function(){return{root:{paddingTop:32,minHeight:"30vh"}}})),Ge=function(e){var t=e.path,a=qe(),l=Object(r.useState)("income"),i=Object(n.a)(l,2),m=i[0],u=i[1],p=function(e){return u(e.currentTarget.value)};return c.a.createElement(o.a,{className:a.root,maxWidth:!1},c.a.createElement(s.a,{mt:1,display:"flex"},Ye.map((function(e){return c.a.createElement(s.a,{key:e.value,mr:2},c.a.createElement(x.a,{value:e.value,variant:"outlined",size:"small",onClick:p,color:e.value===m?"primary":"default"},e.label))})),c.a.createElement(s.a,{flexGrow:1}),c.a.createElement(s.a,null,c.a.createElement(_.a,{variant:"h5",component:"h5",color:"textPrimary"},"(In millions)"))),c.a.createElement(s.a,{pb:6},"income"===m&&c.a.createElement(Fe,{path:t}),"balance"===m&&c.a.createElement(We,{path:t}),"flow"===m&&c.a.createElement(Be,{path:t})))},ze=a(1156),He=a(640),_e=a(641),$e=a(1131),Qe=Object(i.a)((function(e){return{root:{paddingTop:32},image:Object(g.a)({height:"15vh",marginRight:"2vw"},e.breakpoints.down("sm"),{height:"20vh"}),content:{paddingTop:0,paddingBottom:0},item:Object(g.a)({},e.breakpoints.down("sm"),{display:"block",textAlign:"center"}),chip:{margin:e.spacing(.5)}}})),Je=function(e){var t=e.path,a=Qe(),l=Object(r.useState)([]),i=Object(n.a)(l,2),s=i[0],m=i[1],u=Object(r.useState)(10),p=Object(n.a)(u,2),f=p[0],d=p[1];Object(r.useEffect)((function(){t&&function(){var e=Object(b.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/stock/news/".concat(t,"?items=").concat(f));case 2:(a=e.sent).data.data&&a.data.data.length>0&&m(a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(t)}),[t,f]);return c.a.createElement(o.a,{className:a.root,maxWidth:!1},s.length>0&&c.a.createElement(j.a,{container:!0,spacing:3,justify:"center"},c.a.createElement(j.a,{item:!0,xs:12,md:12,lg:12},c.a.createElement(le.a,null,c.a.createElement(ze.a,{className:a.content},c.a.createElement(He.a,null,s.map((function(e,t){return c.a.createElement(_e.a,{key:t,disableGutters:!0,divider:!0,className:a.item},c.a.createElement("img",{alt:"Stock News",src:e.image_url,className:a.image}),c.a.createElement($e.a,{primary:c.a.createElement(fe.a,{color:"textPrimary",target:"_blank",href:e.news_url,variant:"h5"},e.title),primaryTypographyProps:{variant:"body1",color:"textPrimary"},secondary:c.a.createElement(_.a,{variant:"caption",color:"textSecondary",component:"span"},e.text,c.a.createElement("br",null),e.tickers.slice(0,2).map((function(e,t){return c.a.createElement(de.a,{variant:"outlined",key:t,size:"small",label:e,className:a.chip})}))," | Date",": ",e.date)}))})))))),c.a.createElement(j.a,{item:!0,md:3},c.a.createElement(x.a,{color:"primary",variant:"contained",onClick:function(){return d(f+10)},disabled:f>40,fullWidth:!0},"Read More"))))},Ue=[{value:"opinions",label:"Opinions"},{value:"news",label:"News"},{value:"financials",label:"Financials/Earnings"},{value:"sec",label:"SEC Filings"}],Ve=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=Ve(),t=Object(l.h)(),a=Object(r.useState)(null),i=Object(n.a)(a,2),d=i[0],E=i[1],b=Object(r.useState)("opinions"),h=Object(n.a)(b,2),g=h[0],v=h[1];Object(r.useEffect)((function(){var e=t.pathname.split("/")[2];e&&E(e)}),[t]);return c.a.createElement(f.a,{className:e.root,title:d?"".concat(d," Stock Price"):""},c.a.createElement(o.a,{maxWidth:"lg"},c.a.createElement(ae,{path:d}),c.a.createElement(s.a,{mt:6},c.a.createElement(m.a,{onChange:function(e,t){v(t)},scrollButtons:"auto",value:g,textColor:"secondary",variant:"scrollable"},Ue.map((function(e){return c.a.createElement(u.a,{key:e.value,label:e.label,value:e.value})})))),c.a.createElement(p.a,null),c.a.createElement(s.a,{pb:6},"opinions"===g&&c.a.createElement(Te,{path:d}),"news"===g&&c.a.createElement(Je,{path:d}),"financials"===g&&c.a.createElement(Ge,{path:d}),"sec"===g&&c.a.createElement(Ge,{path:d}))))}}}]);
//# sourceMappingURL=25.9b96e57b.chunk.js.map