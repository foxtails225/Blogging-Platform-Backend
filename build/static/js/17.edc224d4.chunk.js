(this["webpackJsonpdankstocks-client"]=this["webpackJsonpdankstocks-client"]||[]).push([[17],{1203:function(e,a,t){"use strict";var n=t(355),r=t(45),c=t(0),l=t.n(c),o=t(4),s=t(1111),i=t(24),m=Object(s.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(i.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(i.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(i.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(i.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(i.c)(e.palette.warning.main,.08)}}}));a.a=function(e){var a=e.className,t=void 0===a?"":a,c=e.color,s=void 0===c?"secondary":c,i=e.children,u=(e.style,Object(r.a)(e,["className","color","children","style"])),p=m();return l.a.createElement("span",Object.assign({className:Object(o.a)(p.root,Object(n.a)({},p[s],s),t)},u),i)}},1205:function(e,a,t){"use strict";var n=t(23),r=t(0),c=t.n(r),l=t(1111),o=t(1083),s=t(622),i=t(341),m=t(1082),u=t(1116),p=t(1085),d=t(1216),g=t.n(d),E=t(1217),f=t.n(E),b=t(1218),O=t.n(b),j=t(1219),v=t.n(j),y=t(1212),h=t.n(y),x=Object(l.a)((function(){return{menu:{width:256,maxWidth:"100%"}}}));a.a=Object(r.memo)((function(e){var a=x(),t=Object(r.useRef)(null),l=Object(r.useState)(!1),d=Object(n.a)(l,2),E=d[0],b=d[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"More options"},c.a.createElement(s.a,Object.assign({onClick:function(){b(!0)},ref:t},e),c.a.createElement(g.a,{fontSize:"small"}))),c.a.createElement(i.a,{anchorEl:t.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){b(!1)},open:E,PaperProps:{className:a.menu},transformOrigin:{vertical:"top",horizontal:"left"}},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(f.a,null)),c.a.createElement(p.a,{primary:"Import"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(O.a,null)),c.a.createElement(p.a,{primary:"Copy"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(v.a,null)),c.a.createElement(p.a,{primary:"Export"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(h.a,null)),c.a.createElement(p.a,{primary:"Archive"}))))}))},1340:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(1111),l=t(1098),o=t(1099),s=t(356),i=t(7),m=t.n(i),u=t(38),p=t(355),d=t(11),g=t(23),E=t(45),f=t(20),b=t(4),O=t(3),j=t.n(O),v=t(125),y=t.n(v),h=t(83),x=t.n(h),k=t(1100),w=t(1101),N=t(1097),C=t(1107),B=t(1102),S=t(1117),P=t(1104),A=t(1105),T=t(1119),W=t(1103),M=t(1077),I=t(1125),_=t(1203),F=t(133),Y=t(1205),z=t(1120),R=t(1121),D=t(1122),G=t(1091),L=t(1123),H=t(1078),J=t(1349),U=t(1332),V=[{name:"pending",text:"pending"},{name:"approved",text:"approve"},{name:"rejected",text:"reject"}],$=Object(c.a)((function(e){return{root:{},toggleBtn:{"&.MuiToggleButton-root":{color:e.palette.text.primary},"&.Mui-selected":{backgroundColor:e.palette.secondary.main,color:e.palette.common.white}}}})),q=function(e){var a=e.open,t=e.data,c=e.onOpen,l=e.onFetch,o=e.className,s=Object(E.a)(e,["open","data","onOpen","onFetch","className"]),i=$(),u=Object(n.useState)(t.status),p=Object(g.a)(u,2),f=p[0],O=p[1],j=Object(n.useState)(t.reason),v=Object(g.a)(j,2),y=v[0],h=v[1],x=function(){var e=Object(d.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={_id:t._id,status:f,reason:y},e.next=3,F.a.put("/posts/update/status",a);case 3:l(),c();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){c()};return r.a.createElement("div",Object.assign({className:Object(b.a)(i.root,o)},s),r.a.createElement(z.a,{open:a,keepMounted:!0,onClose:k,"aria-labelledby":"status-dialog"},r.a.createElement(R.a,null,"Post Status"),r.a.createElement(D.a,null,r.a.createElement(J.a,{value:f,exclusive:!0,size:"small",onChange:function(e,a){O(a)},"aria-label":"text alignment"},V.map((function(e,a){return r.a.createElement(U.a,{key:e.name+a,value:e.name,className:i.toggleBtn},e.text)}))),r.a.createElement(G.a,{value:y,margin:"dense",type:"text",onChange:function(e){h(e.target.value)},fullWidth:!0})),r.a.createElement(L.a,null,r.a.createElement(H.a,{onClick:k,color:"primary"},"Cancel"),r.a.createElement(H.a,{onClick:x,color:"primary"},"Confirm"))))},K={approved:"success",pending:"warning",rejected:"error"},Q=[{name:"title",value:"Title"},{name:"author",value:"Author"},{name:"total",value:"Total"},{name:"status",value:"Status"},{name:"createdAt",value:"Date"}],X={page:0,limit:5,count:0,order:"createdAt",orderBy:"desc"},Z=Object(c.a)((function(e){return{root:{}}})),ee=function(e){var a=e.className,t=Object(E.a)(e,["className"]),c=Z(),l=Object(n.useState)(!1),o=Object(g.a)(l,2),s=o[0],i=o[1],O=Object(n.useState)(),v=Object(g.a)(O,2),h=v[0],z=v[1],R=Object(n.useState)(X),D=Object(g.a)(R,2),G=D[0],L=D[1],H=Object(n.useState)([]),J=Object(g.a)(H,2),U=J[0],V=J[1],$=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(p.a)({},G.order,"desc"===G.orderBy?-1:1),t={page:G.page,sortBy:a,limit:G.limit},e.next=5,F.a.post("/admin/posts/all/",t);case 5:n=e.sent,V(n.data.posts),L((function(e){return Object(u.a)(Object(u.a)({},e),{},{count:n.data.count})})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),L(X),V([]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){$()}),[G.page,G.limit,G.order,G.orderBy]);var ee=function(e){var a=e.currentTarget.id,t="desc"!==G.orderBy?"desc":"asc";L((function(e){return Object(u.a)(Object(u.a)({},e),{},{order:a,orderBy:t})}))};return r.a.createElement(k.a,Object.assign({className:Object(b.a)(c.root,a)},t),r.a.createElement(w.a,{action:r.a.createElement(Y.a,null),title:"All Posts"}),r.a.createElement(N.a,null),r.a.createElement(x.a,null,r.a.createElement(C.a,{minWidth:700},r.a.createElement(B.a,null,r.a.createElement(S.a,null,r.a.createElement(P.a,null,Q.map((function(e){return r.a.createElement(A.a,{key:e.name,align:"center"},r.a.createElement(T.a,{id:e.name,active:G.order===e.name,onClick:ee,direction:(a=e.name,G.order===a&&G.orderBy?G.orderBy:"desc"),disabled:"no"===e.name},e.value));var a})))),r.a.createElement(W.a,null,U.map((function(e){return r.a.createElement(P.a,{hover:!0,key:e._id},r.a.createElement(A.a,{align:"center"},r.a.createElement(M.a,{color:"textPrimary",component:f.a,to:"/posts/public/"+e.slug,variant:"body2"},e.title)),r.a.createElement(A.a,null,r.a.createElement(M.a,{color:"textPrimary",component:f.a,to:"/users/"+e.author.name,variant:"body2"},e.author.name)),r.a.createElement(A.a,{align:"center"},y()(0).format("$0,0.00")),r.a.createElement(A.a,{align:"center",onClick:function(){return z({_id:(a=e)._id,status:a.status,reason:a.reason}),void i(!s);var a}},r.a.createElement(_.a,{color:K[e.status]},e.status)),r.a.createElement(A.a,{align:"center"},j()(e.createdAt).format("DD MMM, YYYY hh:mm:ss")))})))),r.a.createElement(I.a,{rowsPerPageOptions:[5,10,25],component:"div",count:G.count,rowsPerPage:G.limit,page:G.page,onChangePage:function(e,a){L((function(e){return Object(u.a)(Object(u.a)({},e),{},{page:a})}))},onChangeRowsPerPage:function(e){var a=parseInt(e.target.value,10);L((function(e){return Object(u.a)(Object(u.a)({},e),{},{limit:a,page:0})}))}}))),r.a.createElement(C.a,{p:2,display:"flex",justifyContent:"flex-end"}),s&&r.a.createElement(q,{open:s,data:h,onOpen:function(){i(!s)},onFetch:$}))},ae=t(1110),te=t(201),ne=Object(c.a)((function(e){return{root:{},toggleBtn:{"&.MuiToggleButton-root":{color:e.palette.text.primary},"&.Mui-selected":{backgroundColor:e.palette.secondary.main,color:e.palette.common.white}}}})),re=function(e){var a=e.open,t=e.data,c=e.onOpen,l=e.onFetch,o=e.className,s=Object(E.a)(e,["open","data","onOpen","onFetch","className"]),i=ne(),u=Object(n.useState)(t.status),p=Object(g.a)(u,2),f=p[0],O=p[1],j=Object(n.useState)(t.reason),v=Object(g.a)(j,2),y=v[0],h=v[1],x=function(){var e=Object(d.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={_id:t._id,status:f,reason:y},e.next=3,F.a.put("/users/update/status",a);case 3:l(),c();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){c()};return r.a.createElement("div",Object.assign({className:Object(b.a)(i.root,o)},s),r.a.createElement(z.a,{open:a,keepMounted:!0,onClose:k,"aria-labelledby":"status-dialog"},r.a.createElement(R.a,null,"User Status"),r.a.createElement(D.a,null,r.a.createElement(J.a,{value:f,exclusive:!0,size:"small",onChange:function(e,a){O(Boolean(a))},"aria-label":"user alignment"},r.a.createElement(U.a,{value:!0,className:i.toggleBtn},"Active"),r.a.createElement(U.a,{value:!1,className:i.toggleBtn},"Block")),r.a.createElement(G.a,{value:y,margin:"dense",type:"text",onChange:function(e){h(e.target.value)},fullWidth:!0})),r.a.createElement(L.a,null,r.a.createElement(H.a,{onClick:k,color:"primary"},"Cancel"),r.a.createElement(H.a,{onClick:x,color:"primary"},"Confirm"))))},ce=[{name:"name",value:"Name"},{name:"email",value:"Email"},{name:"role",value:"Role"},{name:"status",value:"Status"},{name:"createdAt",value:"Date"}],le={page:0,limit:5,count:0,order:"createdAt",orderBy:"desc"},oe=Object(c.a)((function(e){return{root:{}}})),se=function(e){var a=e.className,t=Object(E.a)(e,["className"]),c=oe(),l=Object(n.useState)(!1),o=Object(g.a)(l,2),s=o[0],i=o[1],O=Object(n.useState)(),v=Object(g.a)(O,2),y=v[0],h=v[1],z=Object(n.useState)(le),R=Object(g.a)(z,2),D=R[0],G=R[1],L=Object(n.useState)([]),H=Object(g.a)(L,2),J=H[0],U=H[1],V=function(){var e=Object(d.a)(m.a.mark((function e(){var a,t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(p.a)({},D.order,"desc"===D.orderBy?-1:1),t={page:D.page,sortBy:a,limit:D.limit},e.next=5,F.a.post("/admin/users/all/",t);case 5:n=e.sent,U(n.data.users),G((function(e){return Object(u.a)(Object(u.a)({},e),{},{count:n.data.count})})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),G(le),U([]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){V()}),[D.page,D.limit,D.order,D.orderBy]);var $=function(e){var a=e.currentTarget.id,t="desc"!==D.orderBy?"desc":"asc";G((function(e){return Object(u.a)(Object(u.a)({},e),{},{order:a,orderBy:t})}))};return r.a.createElement(k.a,Object.assign({className:Object(b.a)(c.root,a)},t),r.a.createElement(w.a,{action:r.a.createElement(Y.a,null),title:"All Users"}),r.a.createElement(N.a,null),r.a.createElement(x.a,null,r.a.createElement(C.a,{minWidth:700},r.a.createElement(B.a,null,r.a.createElement(S.a,null,r.a.createElement(P.a,null,ce.map((function(e){return r.a.createElement(A.a,{key:e.name,align:"center"},r.a.createElement(T.a,{id:e.name,active:D.order===e.name,onClick:$,direction:(a=e.name,D.order===a&&D.orderBy?D.orderBy:"desc"),disabled:"no"===e.name},e.value));var a})))),r.a.createElement(W.a,null,J.map((function(e){return r.a.createElement(P.a,{hover:!0,key:e._id},r.a.createElement(A.a,null,r.a.createElement(C.a,{display:"flex",alignItems:"center"},r.a.createElement(ae.a,{alt:"Author",src:e.avatar,component:f.a,to:"/users/"+e.name},Object(te.a)(e.name)),r.a.createElement(C.a,{ml:1},r.a.createElement(M.a,{color:"textPrimary",component:f.a,to:"/users/"+e.name,variant:"body2"},e.name)))),r.a.createElement(A.a,{align:"center"},e.email),r.a.createElement(A.a,{align:"center"},e.role),r.a.createElement(A.a,{align:"center",onClick:function(){return h({_id:(a=e)._id,status:a.status,reason:a.reason}),void i(!s);var a}},r.a.createElement(_.a,{color:e.status?"success":"error"},e.status?"Active":"Banned")),r.a.createElement(A.a,{align:"center"},j()(e.createdAt).format("DD MMM, YYYY hh:mm:ss")))})))),r.a.createElement(I.a,{rowsPerPageOptions:[5,10,25],component:"div",count:D.count,rowsPerPage:D.limit,page:D.page,onChangePage:function(e,a){G((function(e){return Object(u.a)(Object(u.a)({},e),{},{page:a})}))},onChangeRowsPerPage:function(e){var a=parseInt(e.target.value,10);G((function(e){return Object(u.a)(Object(u.a)({},e),{},{limit:a,page:0})}))}}))),r.a.createElement(C.a,{p:2,display:"flex",justifyContent:"flex-end"}),s&&r.a.createElement(re,{open:s,data:y,onOpen:function(){i(!s)},onFetch:V}))},ie=t(77),me=t(1247),ue=t.n(me),pe=Object(c.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}})),de=function(e){var a=e.className,t=Object(E.a)(e,["className"]),n=pe(),c=12,l=-10;return r.a.createElement(k.a,Object.assign({className:Object(b.a)(n.root,a)},t),r.a.createElement(C.a,{flexGrow:1},r.a.createElement(ie.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"New posts"),r.a.createElement(C.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},r.a.createElement(ie.a,{variant:"h3",color:"textPrimary"},c),r.a.createElement(_.a,{className:n.label,color:l>0?"success":"error"},l>0?"+":"",l,"%"))),r.a.createElement(ae.a,{className:n.avatar},r.a.createElement(ue.a,null)))},ge=t(1228),Ee=t.n(ge),fe=Object(c.a)((function(e){return{root:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},avatar:{backgroundColor:e.palette.secondary.contrastText,color:e.palette.secondary.main,height:48,width:48}}})),be=function(e){var a=e.className,t=Object(E.a)(e,["className"]),n=fe(),c="25.50",l="$";return r.a.createElement(k.a,Object.assign({className:Object(b.a)(n.root,a)},t),r.a.createElement(C.a,{flexGrow:1},r.a.createElement(ie.a,{color:"inherit",component:"h3",gutterBottom:!0,variant:"overline"},"Total income"),r.a.createElement(C.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},r.a.createElement(ie.a,{color:"inherit",variant:"h3"},l,c))),r.a.createElement(ae.a,{className:n.avatar,color:"inherit"},r.a.createElement(Ee.a,null)))},Oe=t(1074),je=Object(c.a)((function(e){return{root:{padding:e.spacing(3)},progress:{margin:e.spacing(0,1),flexGrow:1}}})),ve=function(e){var a=e.className,t=Object(E.a)(e,["className"]),n=je(),c=97;return r.a.createElement(k.a,Object.assign({className:Object(b.a)(n.root,a)},t),r.a.createElement(ie.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"System Health"),r.a.createElement(C.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},r.a.createElement(ie.a,{variant:"h3",color:"textPrimary"},c,"%"),r.a.createElement(Oe.a,{className:n.progress,value:c,color:"secondary",variant:"determinate"})))},ye=t(618),he=t(82),xe=t(619),ke=t(1085),we=t(1083),Ne=t(622),Ce=t(1248),Be=t.n(Ce),Se=t(22),Pe=Object(c.a)((function(e){return{root:{},viewButton:{marginLeft:e.spacing(2)}}})),Ae=function(e){var a=e.className,t=e.flag,n=Object(E.a)(e,["className","flag"]),c=Pe();return r.a.createElement(xe.a,Object.assign({className:Object(b.a)(c.root,a)},n),r.a.createElement(ke.a,{primary:Se.c.find((function(e){return e.name===t.reason})).label,primaryTypographyProps:{variant:"h6",noWrap:!0},secondary:j()(t.createdAt).fromNow()}),r.a.createElement(we.a,{key:t.user._id,title:"View Profile"},r.a.createElement(ae.a,{src:t.user.avatar,alt:"Person",component:f.a,to:"/users/"+t.user.name})),r.a.createElement(we.a,{title:"View Post"},r.a.createElement(Ne.a,{className:c.viewButton,edge:"end"},r.a.createElement(Be.a,{fontSize:"small"}))))},Te=Object(c.a)((function(){return{root:{}}})),We=function(e){var a=e.className,t=Object(E.a)(e,["className"]),c=Te(),l=Object(he.a)(),o=Object(n.useState)([]),s=Object(g.a)(o,2),i=s[0],u=s[1],p=Object(n.useCallback)(Object(d.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.get("/comments/flagsAll");case 3:a=e.sent,l.current&&u(a.data.flags),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l]);return Object(n.useEffect)((function(){p()}),[p]),r.a.createElement(k.a,Object.assign({className:Object(b.a)(c.root,a)},t),r.a.createElement(w.a,{action:r.a.createElement(Y.a,null),title:"Reports"}),r.a.createElement(N.a,null),r.a.createElement(x.a,null,r.a.createElement(C.a,{minWidth:400},r.a.createElement(ye.a,null,i.map((function(e,a){return r.a.createElement(Ae,{divider:a<i.length-1,key:e._id,flag:e})}))))))},Me=t(1303),Ie=t.n(Me),_e=Object(c.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}})),Fe=function(e){var a=e.className,t=Object(E.a)(e,["className"]),n=_e(),c="29",l=4;return r.a.createElement(k.a,Object.assign({className:Object(b.a)(n.root,a)},t),r.a.createElement(C.a,{flexGrow:1},r.a.createElement(ie.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"New Subscribers"),r.a.createElement(C.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},r.a.createElement(ie.a,{variant:"h3",color:"textPrimary"},c),r.a.createElement(_.a,{className:n.label,color:l>0?"success":"error"},l>0?"+":"",l,"%"))),r.a.createElement(ae.a,{className:n.avatar},r.a.createElement(Ie.a,null)))},Ye=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=Ye();return r.a.createElement(s.a,{className:e.root,title:"Administrator"},r.a.createElement(l.a,{maxWidth:!1},r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,lg:3,sm:6,xs:12},r.a.createElement(Fe,null)),r.a.createElement(o.a,{item:!0,lg:3,sm:6,xs:12},r.a.createElement(de,null)),r.a.createElement(o.a,{item:!0,lg:3,sm:6,xs:12},r.a.createElement(ve,null)),r.a.createElement(o.a,{item:!0,lg:3,sm:6,xs:12},r.a.createElement(be,null)),r.a.createElement(o.a,{item:!0,lg:12,xl:12,xs:12},r.a.createElement(ee,null)),r.a.createElement(o.a,{item:!0,lg:4,xl:4,xs:12},r.a.createElement(We,null)),r.a.createElement(o.a,{item:!0,lg:8,xl:8,xs:12},r.a.createElement(se,null)))))}}}]);
//# sourceMappingURL=17.edc224d4.chunk.js.map