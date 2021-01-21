(this["webpackJsonpblogging-platform-frontend"]=this["webpackJsonpblogging-platform-frontend"]||[]).push([[4],{1115:function(e,t,a){"use strict";var r=a(1),n=a(5),c=a(0),o=(a(2),a(4)),l=a(8),i=a(10),s=c.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.color,m=void 0===s?"inherit":s,u=e.component,p=void 0===u?"span":u,d=e.fontSize,b=void 0===d?"default":d,f=Object(n.a)(e,["classes","className","color","component","fontSize"]);return c.createElement(p,Object(r.a)({className:Object(o.a)("material-icons",a.root,l,"inherit"!==m&&a["color".concat(Object(i.a)(m))],"default"!==b&&a["fontSize".concat(Object(i.a)(b))]),"aria-hidden":!0,ref:t},f))}));s.muiName="Icon",t.a=Object(l.a)((function(e){return{root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}}),{name:"MuiIcon"})(s)},1266:function(e,t,a){"use strict";var r=a(259),n=a(260);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(261)).default)(c.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},1267:function(e,t,a){"use strict";var r=a(259),n=a(260);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(261)).default)(c.createElement("path",{d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"}),"DescriptionOutlined");t.default=o},1268:function(e,t,a){"use strict";var r=a(259),n=a(260);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,r(a(261)).default)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");t.default=o},1311:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a.n(r),c=a(11),o=a(23),l=a(0),i=a.n(l),s=a(1110),m=a(1096),u=a(1105),p=a(1125),d=a(1116),b=a(1095),f=a(134),g=a(82),E=a(354),v=a(45),h=a(355),y=a(22),O=a(4),j=a(14),x=a(1076),k=a(1108),w=a(76),S=a(1106),N=a(1081),z=a(620),C=a(1230),P=a.n(C),I=a(1266),T=a.n(I),A=Object(s.a)((function(e){var t;return{root:{},cover:{position:"relative",height:260,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center","&:before":{position:"absolute",content:'" "',top:0,left:0,height:"100%",width:"100%",backgroundImage:"linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)"},"&:hover":{"& $changeButton":{visibility:"visible"}}},changeButton:(t={visibility:"hidden",position:"absolute",bottom:e.spacing(3),right:e.spacing(3),backgroundColor:j.a.blueGrey[900],color:e.palette.common.white},Object(h.a)(t,e.breakpoints.down("md"),{top:e.spacing(3),bottom:"auto"}),Object(h.a)(t,"&:hover",{backgroundColor:j.a.blueGrey[900]}),t),avatar:Object(h.a)({border:"2px solid ".concat(e.palette.common.white),height:120,width:120,top:-60,left:e.spacing(3),position:"absolute"},e.breakpoints.down("sm"),{height:100,width:100,left:e.spacing(1)}),action:{marginLeft:e.spacing(1)},bioBox:Object(h.a)({marginLeft:"160px"},e.breakpoints.down("sm"),{marginLeft:"120px"})}})),L=function(e){var t=e.className,a=e.profile,r=Object(v.a)(e,["className","profile"]),n=A();return i.a.createElement("div",Object.assign({className:Object(O.a)(n.root,t)},r),i.a.createElement("div",{className:n.cover,style:{backgroundImage:"url(".concat(a.cover,")")}},i.a.createElement(x.a,{className:n.changeButton,variant:"contained",startIcon:i.a.createElement(P.a,null)},"Change Cover")),i.a.createElement(m.a,{maxWidth:"lg"},i.a.createElement(u.a,{position:"relative",mt:1,display:"flex",alignItems:"center"},i.a.createElement(k.a,{alt:"Person",className:n.avatar,src:a.avatar}),i.a.createElement(u.a,{className:n.bioBox,mt:1},i.a.createElement(w.a,{variant:"h4",color:"textPrimary"},a.name),i.a.createElement(S.a,{smDown:!0},i.a.createElement(w.a,{variant:"overline",color:"textSecondary"},a.bio))),i.a.createElement(u.a,{flexGrow:1}),i.a.createElement(S.a,{smDown:!0},i.a.createElement(x.a,{color:"secondary",component:y.a,size:"small",to:"/account/setting",variant:"contained",className:n.action},"Edit Profile")),i.a.createElement(S.a,{mdUp:!0},i.a.createElement(N.a,{title:"More options"},i.a.createElement(z.a,{className:n.action},i.a.createElement(T.a,{fontSize:"small"}))))),i.a.createElement(S.a,{mdUp:!0},i.a.createElement(u.a,{textAlign:"center"},i.a.createElement(w.a,{variant:"overline",color:"textSecondary"},a.bio)))))},R=a(1097),M=a(81),_=a(3),B=a.n(_),G=a(1257),H=a(1098),D=a(1099),U=a(1075),V=a(1246),W=a.n(V),F=a(1245),J=a.n(F),$=a(1183),q=a(1115),K=Object(s.a)((function(){return{root:{textAlign:"center"},icon:{display:"flex",height:"inherit",width:"inherit"}}})),Q=function(e){var t=K();return i.a.createElement(q.a,{classes:{root:t.root},fontSize:"small"},i.a.createElement("img",Object.assign({alt:"Custom Icon",className:t.icon,src:e.src},e)))},X=Object(s.a)((function(){return{root:{display:"flex",alignItems:"center"},iconRoot:{textAlign:"center"},likedButton:{color:j.a.red[600]},likedIcon:{display:"flex",height:"inherit",width:"inherit"},commentIcon:{color:j.a.grey[500]}}})),Y=function(e){var t=e.className,a=e.author,r=e.post,n=Object(v.a)(e,["className","author","post"]),c=X(),s=Object(l.useState)(!1),m=Object(o.a)(s,2),p=m[0],d=m[1],b=Object(l.useState)(r.liked.count),f=Object(o.a)(b,2),g=f[0],E=f[1],h=function(){d(!0),E((function(e){return e+1}))};return i.a.createElement("div",Object.assign({className:Object(O.a)(c.root,t)},n),a&&i.a.createElement(z.a,{onClick:h,disabled:a},i.a.createElement(Q,{src:"/static/icons/trending_outlined.svg"})),!a&&i.a.createElement(i.a.Fragment,null,p?i.a.createElement(N.a,{title:"Unlike"},i.a.createElement(z.a,{className:c.likedButton,onClick:function(){d(!1),E((function(e){return e-1}))}},i.a.createElement(Q,{src:"/static/icons/trending_filled.svg"}))):i.a.createElement(N.a,{title:"Like"},i.a.createElement(z.a,{onClick:h},i.a.createElement(Q,{src:"/static/icons/trending_outlined.svg"})))),i.a.createElement(w.a,{color:"textSecondary",variant:"h6"},g),i.a.createElement(u.a,{ml:2,mr:1,marginTop:"2px"},i.a.createElement($.a,{className:c.commentIcon,size:"20"})),i.a.createElement(w.a,{color:"textSecondary",variant:"h6"},g),i.a.createElement(u.a,{flexGrow:1}),i.a.createElement(z.a,null,i.a.createElement(J.a,{fontSize:"small"})))},Z=Object(s.a)((function(e){return{root:{},date:{marginLeft:6},media:{height:500,backgroundPosition:"top"},title:Object(h.a)({marginLeft:e.spacing(5),marginRight:e.spacing(5)},e.breakpoints.down("sm"),{marginLeft:e.spacing(1),marginRight:e.spacing(1)})}})),ee=function(e){var t=e.className,a=e.author,r=e.post,n=Object(v.a)(e,["className","author","post"]),c=Z(),s=Object(l.useState)(null),m=Object(o.a)(s,2),p=m[0],d=m[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(H.a,Object.assign({className:Object(O.a)(c.root,t)},n),i.a.createElement(D.a,{avatar:i.a.createElement(k.a,{alt:"Person",component:y.a,src:"string"!==typeof r.author&&r.author.avatar,to:"#"}),disableTypography:!0,subheader:i.a.createElement(u.a,{display:"flex",alignItems:"center"},i.a.createElement(W.a,{fontSize:"small"}),i.a.createElement(w.a,{variant:"caption",color:"textSecondary",className:c.date},B()(r.createdAt).fromNow())),title:i.a.createElement(U.a,{color:"textPrimary",component:y.a,to:"#",variant:"h6"},"string"!==typeof r.author&&r.author.name)}),i.a.createElement(u.a,{px:3,pb:1,className:c.title},i.a.createElement(U.a,{color:"textPrimary",component:y.a,to:"#",variant:"h3"},r.title)),i.a.createElement(u.a,{mt:2,pb:2,px:3},i.a.createElement(Y,{post:r,author:a}))),p&&i.a.createElement(G.a,{large:p,onClose:function(){return d(null)}}))},te=a(42),ae=a(1113),re=a(616),ne=a(617),ce=a(1082),oe=a(1083),le=a(1109),ie=a(1267),se=a.n(ie),me=a(1268),ue=a.n(me),pe=a(2),de=a.n(pe);function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function fe(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var ge=Object(l.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,n=e.size,c=void 0===n?24:n,o=fe(e,["color","size"]);return i.a.createElement("svg",be({ref:t,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),i.a.createElement("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),i.a.createElement("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),i.a.createElement("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),i.a.createElement("line",{x1:"16",y1:"3",x2:"14",y2:"21"}))}));ge.propTypes={color:de.a.string,size:de.a.oneOfType([de.a.string,de.a.number])},ge.displayName="Hash";var Ee=ge,ve={published:0,pending:0,comments:0,tags:0},he=Object(s.a)((function(e){return{root:{},blueAvatar:{backgroundColor:e.palette.secondary.main},redAvatar:{backgroundColor:j.a.red[600]},cardContent:{paddingTop:0}}})),ye=function(e){var t=e.className,a=(e.profile,Object(v.a)(e,["className","profile"])),r=Object(l.useState)(ve),s=Object(o.a)(r,2),m=s[0],p=s[1],d=Object(te.g)(),g=he();Object(l.useEffect)((function(){(function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("/account/status");case 2:t=e.sent,p(t.data.status);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return i.a.createElement("div",Object.assign({className:Object(O.a)(g.root,t)},a),i.a.createElement(u.a,{mt:2},i.a.createElement(H.a,null,i.a.createElement(D.a,{title:"Profile Status"}),i.a.createElement(b.a,null),i.a.createElement(ae.a,{className:g.cardContent},i.a.createElement(re.a,null,i.a.createElement(ne.a,{disableGutters:!0,divider:!0},i.a.createElement(ce.a,null,i.a.createElement(k.a,{className:g.blueAvatar},i.a.createElement(se.a,null))),i.a.createElement(oe.a,{primary:"".concat(m.published," posts published"),primaryTypographyProps:{variant:"body2",color:"textSecondary"}}),i.a.createElement(le.a,{color:"secondary",size:"small",label:"Contribute",onClick:function(){return d.push("/posts/new")}})),i.a.createElement(ne.a,{disableGutters:!0,divider:!0},i.a.createElement(ce.a,null,i.a.createElement(k.a,{className:g.blueAvatar},i.a.createElement(ue.a,null))),i.a.createElement(oe.a,{primary:"".concat(m.pending," posts pended"),primaryTypographyProps:{variant:"body2",color:"textSecondary"}})),i.a.createElement(ne.a,{disableGutters:!0,divider:!0},i.a.createElement(ce.a,null,i.a.createElement(k.a,{className:g.redAvatar},i.a.createElement($.a,null))),i.a.createElement(oe.a,{primary:"".concat(m.comments," comments written"),primaryTypographyProps:{variant:"body2",color:"textSecondary"}})),i.a.createElement(ne.a,{disableGutters:!0,divider:!0},i.a.createElement(ce.a,null,i.a.createElement(k.a,{className:g.redAvatar},i.a.createElement(Ee,{size:22}))),i.a.createElement(oe.a,{primary:"".concat(m.tags," tag followed"),primaryTypographyProps:{variant:"body2",color:"textSecondary"}})))))))},Oe=a(596),je=a.n(Oe),xe=a(16),ke=a(240),we=Object(s.a)((function(e){return{root:{},item:{padding:e.spacing(3),flexGrow:1,"&:first-of-type":{borderRight:"1px solid ".concat(e.palette.divider)}}}})),Se=function(e){var t=e.className,a=Object(v.a)(e,["className"]),r=we(),s=Object(g.a)(),m=Object(l.useState)([]),p=Object(o.a)(m,2),d=p[0],f=p[1],E=Object(l.useCallback)(Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.a.get("/api/reports/customer-activity");case 3:t=e.sent,s.current&&f(t.data.activities),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[s]);return Object(l.useEffect)((function(){E()}),[E]),i.a.createElement(H.a,Object.assign({className:Object(O.a)(r.root,t)},a),i.a.createElement(D.a,{title:"Recent Comments"}),i.a.createElement(b.a,null),i.a.createElement(re.a,{disablePadding:!0},d.map((function(e,t){return i.a.createElement(ne.a,{divider:t<d.length-1,key:e.id},i.a.createElement(ce.a,null,i.a.createElement(k.a,{alt:"Customer",component:y.a,src:e.customer.avatar,to:"#"},Object(ke.a)(e.customer.name))),i.a.createElement(oe.a,{disableTypography:!0,primary:i.a.createElement(U.a,{color:"textPrimary",component:y.a,to:"#",underline:"none",variant:"h6"},e.customer.name),secondary:i.a.createElement(w.a,{variant:"body2",color:"textSecondary"},e.description)}))}))),i.a.createElement(b.a,null),i.a.createElement(u.a,{p:2,display:"flex",justifyContent:"flex-end"},i.a.createElement(x.a,{component:y.a,size:"small",to:"#",endIcon:i.a.createElement(je.a,null)},"See all")))},Ne=Object(s.a)((function(){return{root:{}}})),ze=function(e){var t=e.className,a=e.profile,r=Object(v.a)(e,["className","profile"]),s=Ne(),m=Object(g.a)(),p=Object(M.a)().user,d=Object(l.useState)([]),b=Object(o.a)(d,2),E=b[0],h=b[1],y=Object(l.useState)(!1),j=Object(o.a)(y,2),x=j[0],k=j[1],w=Object(l.useState)(1),S=Object(o.a)(w,2),N=S[0],z=S[1],C=Object(l.useCallback)(Object(c.a)(n.a.mark((function e(){var t,a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={email:p.email,page:N},e.next=4,f.a.post("/posts/all/",t);case 4:a=e.sent,m.current&&(r=a.data,h(r.posts),k(r.isAuthor),z(r.page)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[m,p,N]);return Object(l.useEffect)((function(){C()}),[C]),i.a.createElement("div",Object.assign({className:Object(O.a)(s.root,t)},r),i.a.createElement(R.a,{container:!0,spacing:3},i.a.createElement(R.a,{item:!0,xs:12,md:6,lg:4},i.a.createElement(R.a,{container:!0,spacing:3},i.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},i.a.createElement(ye,{profile:a})),i.a.createElement(R.a,{item:!0,xs:12,md:12,lg:12},i.a.createElement(Se,null)))),i.a.createElement(R.a,{item:!0,xs:12,md:6,lg:8},E.map((function(e){return i.a.createElement(u.a,{mt:2,key:e._id},i.a.createElement(ee,{post:e,author:x}))})))))},Ce=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%"}}}));t.default=function(){var e=Ce(),t=Object(g.a)(),a=Object(l.useState)("profile"),r=Object(o.a)(a,2),s=r[0],v=r[1],h=Object(l.useState)(null),y=Object(o.a)(h,2),O=y[0],j=y[1],x=Object(l.useCallback)(Object(c.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/account/about");case 3:a=e.sent,t.current&&j(a.data.user),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);return Object(l.useEffect)((function(){x()}),[x]),O?i.a.createElement(E.a,{className:e.root,title:"Profile"},i.a.createElement(L,{profile:O}),i.a.createElement(m.a,{maxWidth:"lg"},i.a.createElement(u.a,{mt:3},i.a.createElement(p.a,{onChange:function(e,t){v(t)},scrollButtons:"auto",value:s,textColor:"secondary",variant:"scrollable"},[{value:"profile",label:"Profile"},{value:"reading",label:"reading list"},{value:"dashboard",label:"Dashboard"}].map((function(e){return i.a.createElement(d.a,{key:e.value,label:e.label,value:e.value})})))),i.a.createElement(b.a,null),i.a.createElement(u.a,{py:3,pb:6},"profile"===s&&i.a.createElement(ze,{profile:O})))):null}}}]);
//# sourceMappingURL=4.bda22477.chunk.js.map