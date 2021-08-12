(this["webpackJsonpdankstocks-client"]=this["webpackJsonpdankstocks-client"]||[]).push([[16],{1131:function(e,t,a){"use strict";var n=a(1),r=a(48),c=a(5),o=a(0),l=(a(3),a(1132)),i=a(16),s=a(112),u=a(1238),m=a(205),d=o.forwardRef((function(e,t){var a=e.actions,d=e.children,p=e.name,f=e.value,b=e.onChange,v=Object(c.a)(e,["actions","children","name","value","onChange"]),h=o.useRef(null),O=Object(s.a)({controlled:f,default:e.defaultValue,name:"RadioGroup"}),g=Object(r.a)(O,2),E=g[0],j=g[1];o.useImperativeHandle(a,(function(){return{focus:function(){var e=h.current.querySelector("input:not(:disabled):checked");e||(e=h.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var k=Object(i.a)(t,h),y=Object(m.a)(p);return o.createElement(u.a.Provider,{value:{name:y,onChange:function(e){j(e.target.value),b&&b(e,e.target.value)},value:E}},o.createElement(l.a,Object(n.a)({role:"radiogroup",ref:k},v),d))}));t.a=d},1132:function(e,t,a){"use strict";var n=a(1),r=a(5),c=a(0),o=(a(3),a(2)),l=a(8),i=c.forwardRef((function(e,t){var a=e.classes,l=e.className,i=e.row,s=void 0!==i&&i,u=Object(r.a)(e,["classes","className","row"]);return c.createElement("div",Object(n.a)({className:Object(o.a)(a.root,l,s&&a.row),ref:t},u))}));t.a=Object(l.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(i)},1141:function(e,t,a){"use strict";var n=a(1),r=a(5),c=a(0),o=(a(3),a(2)),l=a(8),i=a(79),s=c.forwardRef((function(e,t){var a=e.children,l=e.classes,s=e.className,u=e.disableTypography,m=void 0!==u&&u,d=Object(r.a)(e,["children","classes","className","disableTypography"]);return c.createElement("div",Object(n.a)({className:Object(o.a)(l.root,s),ref:t},d),m?a:c.createElement(i.a,{component:"h2",variant:"h6"},a))}));t.a=Object(l.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},1142:function(e,t,a){"use strict";var n=a(1),r=a(5),c=a(0),o=(a(3),a(2)),l=a(364),i=a(93),s=Object(i.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),u=Object(i.a)(c.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),m=a(8);var d=Object(m.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})((function(e){var t=e.checked,a=e.classes,n=e.fontSize;return c.createElement("div",{className:Object(o.a)(a.root,t&&a.checked)},c.createElement(s,{fontSize:n}),c.createElement(u,{fontSize:n,className:a.layer}))})),p=a(18),f=a(10),b=a(68),v=a(1238);var h=c.createElement(d,{checked:!0}),O=c.createElement(d,null),g=c.forwardRef((function(e,t){var a=e.checked,i=e.classes,s=e.color,u=void 0===s?"secondary":s,m=e.name,d=e.onChange,p=e.size,g=void 0===p?"medium":p,E=Object(r.a)(e,["checked","classes","color","name","onChange","size"]),j=c.useContext(v.a),k=a,y=Object(b.a)(d,j&&j.onChange),x=m;return j&&("undefined"===typeof k&&(k=j.value===e.value),"undefined"===typeof x&&(x=j.name)),c.createElement(l.a,Object(n.a)({color:u,type:"radio",icon:c.cloneElement(O,{fontSize:"small"===g?"small":"default"}),checkedIcon:c.cloneElement(h,{fontSize:"small"===g?"small":"default"}),classes:{root:Object(o.a)(i.root,i["color".concat(Object(f.a)(u))]),checked:i.checked,disabled:i.disabled},name:x,checked:k,onChange:y,ref:t},E))}));t.a=Object(m.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(g)},1149:function(e,t,a){"use strict";var n=a(1),r=a(0),c=(a(3),a(8)),o=a(79),l=r.forwardRef((function(e,t){return r.createElement(o.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(c.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(l)},1225:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(649),o=a(1133),l=Object(c.a)((function(){return{root:{textAlign:"center"},icon:{display:"flex",height:"inherit",width:"inherit"}}}));t.a=function(e){var t=l();return r.a.createElement(o.a,{classes:{root:t.root},fontSize:"small"},r.a.createElement("img",Object.assign({alt:"Custom Icon",className:t.icon,src:e.src},e)))}},1238:function(e,t,a){"use strict";var n=a(0),r=n.createContext();t.a=r},1250:function(e,t,a){"use strict";var n=a(100),r=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(102)).default)(c.createElement("path",{d:"M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"}),"BookmarkBorderOutlined");t.default=o},1266:function(e,t,a){"use strict";var n=a(100),r=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(102)).default)(c.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=o},1267:function(e,t,a){"use strict";var n=a(100),r=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(102)).default)(c.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=o},1273:function(e,t,a){"use strict";var n=a(6),r=a.n(n),c=a(11),o=a(22),l=a(34),i=a(0),s=a.n(i),u=a(2),m=a(1249),d=a(649),p=a(1136),f=a(1137),b=a(1139),v=a(1140),h=a(29),O=a(23),g=a(12),E=a(1134),j=a(645),k=a(1135),y=a(1092),x=a(57),w={style:{base:{color:g.a.grey[500],fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:g.a.grey[500]}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},N=Object(d.a)((function(e){return{root:{}}})),C=function(e){var t=e.className,a=(e.open,e.author),n=e.secret,o=e.amount,i=e.onOpen,d=e.onBack,p=e.onSuccess,f=Object(l.a)(e,["className","open","author","secret","amount","onOpen","onBack","onSuccess"]),b=Object(x.a)().user,v=Object(m.useStripe)(),O=Object(m.useElements)(),g=N(),C=function(){var e=Object(c.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),v&&O){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,v.confirmCardPayment(n,{payment_method:{card:O.getElement(m.CardElement),billing_details:{email:a.email}}});case 5:if(!(c=e.sent).error){e.next=10;break}console.log(c.error.message),e.next=16;break;case 10:if("succeeded"!==c.paymentIntent.status){e.next=16;break}return e.next=13,h.a.post("/notifications/create",{user:a._id,type:"tips_success",title:"New payment received",description:"You got the new tips. You received $".concat(o," from ").concat(b.name),isRead:!1,url:"#"});case 13:return e.next=15,h.a.post("/transactions/create",{user:a._id,client:b._id,amount:5*o/4,fee:o/4,paymentId:c.paymentIntent.id,type:"tips"});case 15:p();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement("div",Object.assign({className:Object(u.a)(g.root,t)},f),s.a.createElement("form",{onSubmit:C},s.a.createElement(E.a,null,s.a.createElement(j.a,{border:1,padding:2,borderRadius:5},s.a.createElement(m.CardElement,{options:w}))),s.a.createElement(k.a,null,s.a.createElement(y.a,{onClick:function(){return i()},color:"primary"},"Cancel"),s.a.createElement(y.a,{onClick:function(){return d()},color:"primary"},"Back"),s.a.createElement(y.a,{disabled:!v,type:"submit",color:"primary"},"Confirm"))))},S=a(1115),_=a(1107),I=a(1108),R=Object(d.a)((function(e){return{root:{}}})),B=function(e){var t=e.className,a=e.author,n=(e.open,e.onOpen),m=e.onNext,d=Object(l.a)(e,["className","author","open","onOpen","onNext"]),p=R(),f=Object(i.useState)(),b=Object(o.a)(f,2),v=b[0],O=b[1],g=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={stripeId:a.stripeId,amount:v},e.next=3,h.a.post("/stripe/secret",t);case 3:(n=e.sent).data&&m(n.data.secret,4*v/5);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement("div",Object.assign({className:Object(u.a)(p.root,t)},d),s.a.createElement(E.a,null,s.a.createElement(S.a,{container:!0,justify:"center"},s.a.createElement(S.a,{item:!0,md:5},s.a.createElement(_.a,{label:"Name",defaultValue:a.name,InputProps:{readOnly:!0}})),s.a.createElement(S.a,{item:!0,md:5},s.a.createElement(_.a,{label:"Amount",type:"number",placeholder:"Minimum of $3",value:v,onChange:function(e){return O(e.target.value)},error:v<3,InputProps:{inputProps:{min:3},startAdornment:s.a.createElement(I.a,{position:"start"},"$")}})))),s.a.createElement(k.a,null,s.a.createElement(y.a,{onClick:function(){return n()},color:"primary"},"Cancel"),s.a.createElement(y.a,{onClick:g,disabled:v<3||!v,color:"primary"},"Confirm")))},z=Object(d.a)((function(e){return{root:{},backButton:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));t.a=function(e){var t=e.className,a=e.postId,n=e.open,d=e.onOpen,g=e.onSuccess,E=Object(l.a)(e,["className","postId","open","onOpen","onSuccess"]),j=z(),k=Object(i.useState)(0),y=Object(o.a)(k,2),x=y[0],w=y[1],N=Object(i.useState)(),S=Object(o.a)(N,2),_=S[0],I=S[1],R=Object(i.useState)(0),M=Object(o.a)(R,2),L=M[0],T=M[1],D=Object(i.useState)(),P=Object(o.a)(D,2),F=P[0],H=P[1],A=["Author Info","Card Details"];Object(i.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/posts/getById/"+a);case 2:(t=e.sent).data&&H(t.data.post.author);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]);return s.a.createElement("div",Object.assign({className:Object(u.a)(j.root,t)},E),F&&s.a.createElement(p.a,{open:n,keepMounted:!0,onClose:function(){return d()},"aria-labelledby":"checkform-dialog",fullWidth:!0},s.a.createElement(f.a,{activeStep:x,alternativeLabel:!0},A.map((function(e){return s.a.createElement(b.a,{key:e},s.a.createElement(v.a,null,e))}))),0===x&&s.a.createElement(B,{open:n,author:F,onOpen:d,onNext:function(e,t){I(e),T(t),w((function(e){return e+1}))}}),1===x&&s.a.createElement(m.Elements,{stripe:O.g},s.a.createElement(C,{open:n,author:F,amount:L,secret:_,onOpen:d,onBack:function(){w((function(e){return e-1}))},onSuccess:g}))))}},1289:function(e,t,a){"use strict";var n=a(100),r=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(102)).default)(c.createElement("path",{d:"M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"}),"Flag");t.default=o},1290:function(e,t,a){"use strict";var n=a(100),r=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(102)).default)(c.createElement("path",{d:"M12.36 6l.4 2H18v6h-3.36l-.4-2H7V6h5.36M14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6L14 4z"}),"FlagOutlined");t.default=o},1325:function(e,t,a){"use strict";var n=a(100),r=a(101);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(102)).default)(c.createElement("path",{d:"M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"}),"AddPhotoAlternate");t.default=o},1370:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),c=a(11),o=a(33),l=a(22),i=a(84),s=a(0),u=a.n(s),m=a(38),d=a(13),p=a(1265),f=a(4),b=a.n(f),v=a(649),h=a(12),O=a(37),g=a(627),E=a(165),j=a(645),k=a(1115),y=a(79),x=a(1121),w=a(1091),N=a(1122),C=a(1110),S=a(29),_=a(57),I=a(358),R=a(34),B=a(2),z=a(1098),M=a(634),L=a(1250),T=a.n(L),D=a(360),P=a.n(D),F=a(1289),H=a.n(F),A=a(1290),V=a.n(A),$=a(1200),G=a(1225),W=a(1273),U=Object(v.a)((function(e){return{root:{display:"flex",alignItems:"center"},div:Object(i.a)({flexDirection:"column",position:"sticky",float:"left",top:"45vh",left:"10vw"},e.breakpoints.up("xl"),{left:"26vw"}),reaction:Object(i.a)({},e.breakpoints.down("md"),{paddingRight:e.spacing(5)}),likedButton:{color:h.a.red[600]},likedIcon:{padding:e.spacing(1)},commentBox:Object(i.a)({marginTop:e.spacing(3)},e.breakpoints.down("sm"),{marginTop:e.typography.pxToRem(6),marginLeft:e.spacing(2),marginRight:e.spacing(1)}),iconBox:Object(i.a)({marginTop:e.spacing(1)},e.breakpoints.down("sm"),{marginTop:e.typography.pxToRem(2)}),commentIcon:{color:h.a.grey[700]}}})),q=function(e){var t=e.className,a=e.post,n=e.isBookmarked,o=e.onRef,i=e.onBookmarked,m=Object(R.a)(e,["className","post","isBookmarked","onRef","onBookmarked"]),d=U(),p=Object(_.a)(),f=p.user,b=p.isAuthenticated,v=Object(s.useState)(!1),h=Object(l.a)(v,2),O=h[0],g=h[1],E=Object(s.useState)(!1),k=Object(l.a)(E,2),x=k[0],w=k[1],N=Object(s.useState)(!1),C=Object(l.a)(N,2),I=C[0],L=C[1],D=Object(s.useState)(a.liked.count),F=Object(l.a)(D,2),A=F[0],q=F[1],J=Object(s.useState)(!1),Y=Object(l.a)(J,2),Z=Y[0],K=Y[1],Q=Object(s.useState)(!1),X=Object(l.a)(Q,2),ee=X[0],te=X[1];Object(s.useEffect)((function(){b?(f._id===a.author._id&&K(!0),w(!1)):(K(!0),w(!0))}),[f,b,a.author]),Object(s.useEffect)((function(){var e;b&&(null===(e=a.liked)||void 0===e||e.users.forEach((function(e){return e===f._id&&g(!0)})),a.flags.map((function(e){return e.user===f._id&&L(!0)})))}),[a.liked.users]);var ae=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={postId:a._id,isLiked:!O},e.next=3,S.a.put("/posts/liked",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={post:a._id,type:"post",isFlag:!I},e.next=3,S.a.put("/posts/flaged",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(c.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={postId:a._id},c=n?"delete":"create",e.next=4,S.a.post("/bookmarks/".concat(c),t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){return te(!ee)};return u.a.createElement("div",Object.assign({className:Object(B.a)(d.root,d[t],"div"===t&&d.reaction)},m),O?u.a.createElement(z.a,{title:"Unlike",disableTouchListener:!0,disableHoverListener:x},u.a.createElement("span",null,u.a.createElement(M.a,{className:Object(B.a)(d.likedButton,d.likedIcon),onClick:function(){g(!1),q((function(e){return e-1})),ae()},disabled:x},u.a.createElement(G.a,{src:"/static/icons/trending_filled.svg"})))):u.a.createElement(z.a,{title:"Like",disableTouchListener:!0,disableHoverListener:x},u.a.createElement("span",null,u.a.createElement(M.a,{className:d.likedIcon,onClick:function(){g(!0),q((function(e){return e+1})),ae()},disabled:x},u.a.createElement(G.a,{src:"/static/icons/trending_outlined.svg"})))),u.a.createElement(y.a,{color:"textSecondary",variant:"h6"},A),u.a.createElement(j.a,{className:d.commentBox},u.a.createElement(M.a,{className:d.likedIcon,onClick:o,disabled:x},u.a.createElement($.a,{className:d.commentIcon,size:"20"}))),u.a.createElement(y.a,{color:"textSecondary",variant:"h6"},a.comments.length),u.a.createElement(j.a,{className:d.iconBox},n?u.a.createElement(z.a,{title:"Unsaved",disableTouchListener:!0,disableHoverListener:Z},u.a.createElement("span",null,u.a.createElement(M.a,{className:d.likedButton,onClick:function(){i(!1),re()},disabled:Z},u.a.createElement(T.a,{fontSize:"small"})))):u.a.createElement(z.a,{title:"Saved",disableTouchListener:!0,disableHoverListener:Z},u.a.createElement("span",null,u.a.createElement(M.a,{onClick:function(){i(!0),re()},disabled:Z},u.a.createElement(T.a,{fontSize:"small"}))))),u.a.createElement(j.a,{className:d.iconBox},u.a.createElement("span",null,u.a.createElement(M.a,{disabled:Z,onClick:ce},u.a.createElement(P.a,{fontSize:"small"})))),I?u.a.createElement(z.a,{title:"Unflag",disableTouchListener:!0,disableHoverListener:Z},u.a.createElement("span",null,u.a.createElement(M.a,{className:Object(B.a)(d.iconBox),onClick:function(){L(!1),ne()},disabled:Z},u.a.createElement(H.a,{fontSize:"small"})))):u.a.createElement(z.a,{title:"Flag",disableTouchListener:!0,disableHoverListener:Z},u.a.createElement("span",null,u.a.createElement(M.a,{className:d.iconBox,onClick:function(){L(!0),ne()},disabled:Z},u.a.createElement(V.a,{fontSize:"small"})))),ee&&u.a.createElement(W.a,{open:ee,postId:a._id,onOpen:ce,onSuccess:ce}))},J=a(1119),Y=a(1092),Z=a(1266),K=a.n(Z),Q=a(1136),X=a(1141),ee=a(1134),te=a(639),ae=a(641),ne=a(1131),re=a(1102),ce=a(1142),oe=a(1107),le=a(1135),ie=a(23),se=Object(v.a)((function(e){return{root:{},toggleBtn:{"&.MuiToggleButton-root":{color:e.palette.text.primary},"&.Mui-selected":{backgroundColor:e.palette.secondary.main,color:e.palette.common.white}}}})),ue=function(e){var t=e.open,a=(e.user,e.post),n=e.comment,o=e.onOpen,i=e.onFlag,m=e.className,d=Object(R.a)(e,["open","user","post","comment","onOpen","onFlag","className"]),p=se(),f=Object(s.useState)(""),b=Object(l.a)(f,2),v=b[0],h=b[1],O=Object(s.useState)(""),g=Object(l.a)(O,2),E=g[0],j=g[1],k=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={comment:n._id,post:a,reason:v,type:"comment",description:E},e.next=3,S.a.put("/comments/flag",t);case 3:o(),i();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return o()};return u.a.createElement("div",Object.assign({className:Object(B.a)(p.root,m)},d),u.a.createElement(Q.a,{open:t,keepMounted:!0,onClose:y,"aria-labelledby":"status-dialog"},u.a.createElement(X.a,null,"Report"),u.a.createElement(ee.a,null,u.a.createElement(te.a,{component:"fieldset"},u.a.createElement(ae.a,{component:"legend"},"Please choose the reason"),u.a.createElement(ne.a,{"aria-label":"spam-flag-report",name:"report",value:v,onChange:function(e){j(""),h(e.target.value)}},ie.c.map((function(e,t){return u.a.createElement(re.a,{key:e.name+t,value:e.name,control:u.a.createElement(ce.a,null),label:e.label})})))),u.a.createElement(oe.a,{value:E,margin:"dense",type:"text",onChange:function(e){j(e.target.value)},disabled:"other"!==v,fullWidth:!0})),u.a.createElement(le.a,null,u.a.createElement(Y.a,{onClick:y,color:"primary"},"Cancel"),u.a.createElement(Y.a,{onClick:k,color:"primary"},"Confirm"))))},me=a(1149),de=Object(v.a)((function(e){return{root:{}}})),pe=function(e){var t=e.open,a=e.onOpen,n=e.onConfirm,r=e.className,c=Object(R.a)(e,["open","onOpen","onConfirm","className"]),o=de(),l=function(){return a()};return u.a.createElement("div",Object.assign({className:Object(B.a)(o.root,r)},c),u.a.createElement(Q.a,{open:t,keepMounted:!0,onClose:l,"aria-labelledby":"delete-dialog"},u.a.createElement(X.a,null,"Confirm Remove"),u.a.createElement(ee.a,null,u.a.createElement(me.a,null,"Are you sure you want to delete this comment?")),u.a.createElement(le.a,null,u.a.createElement(Y.a,{onClick:l,color:"primary"},"Cancel"),u.a.createElement(Y.a,{onClick:function(){n(),a()},color:"primary"},"Confirm"))))},fe={reply:!1,disable:!0,flagDiabled:!0,removeDisabled:!0},be=Object(v.a)((function(e){return{root:{display:"flex",marginBottom:e.spacing(2)},bubble:{borderRadius:e.shape.borderRadius},header:Object(i.a)({},e.breakpoints.down("sm"),{flexWrap:"wrap"}),name:Object(i.a)({},e.breakpoints.down("sm"),{width:"100%"}),replybtn:{marginRight:e.spacing(1)},replyIcon:{color:h.a.grey[700]},replyClickIcon:{color:h.a.red[700]},small:{width:e.spacing(4),height:e.spacing(4)},large:{width:e.spacing(5),height:e.spacing(5)},date:{marginLeft:e.spacing(1)}}})),ve=function(e){var t=e.className,a=e.comment,n=e.postId,i=e.reply,m=e.commentRef,p=e.onComment,f=Object(R.a)(e,["className","comment","postId","reply","commentRef","onComment"]),v=be(),h=Object(O.a)(),E=Object(g.a)(h.breakpoints.down("sm")),k=Object(_.a)(),N=k.user,C=k.isAuthenticated,I=Object(s.useState)(!1),z=Object(l.a)(I,2),M=z[0],L=z[1],T=Object(s.useState)(!1),D=Object(l.a)(T,2),P=D[0],F=D[1],A=Object(s.useState)(fe),W=Object(l.a)(A,2),U=W[0],q=W[1],Z=Object(s.useState)(!1),Q=Object(l.a)(Z,2),X=Q[0],ee=Q[1],te=Object(s.useState)(!1),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],ce=Object(s.useState)(a.liked.count),oe=Object(l.a)(ce,2),le=oe[0],ie=oe[1],se={marginLeft:h.typography.pxToRem((E?10:20)*a.depth)};Object(s.useEffect)((function(){C?(N._id===a.user._id&&q((function(e){return Object(o.a)(Object(o.a)({},e),{},{disabled:!0,flagDiabled:!0,removeDisabled:!1})})),"admin"===N.role&&q((function(e){return Object(o.a)(Object(o.a)({},e),{},{disabled:!1,flagDiabled:!1,removeDisabled:!1})}))):q((function(e){return Object(o.a)(Object(o.a)({},e),{},{disabled:!0,flagDiabled:!0,removeDisabled:!0})}))}),[N,C,a.user]),Object(s.useEffect)((function(){C&&a.liked.users.forEach((function(e){return e===N._id&&ee(!0)}))}),[a.liked.users]),Object(s.useEffect)((function(){if(C){var e=a.flags.find((function(e){return e.user===N._id}));re(Boolean(e))}}),[a.flags]),Object(s.useEffect)((function(){if(N){var e=i===a._id,t=a.user._id===N._id,n="admin"!==N.role&&!t;q({reply:e,disable:!1,flagDiabled:t,removeDisabled:n})}}),[i,a,N]);var me=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={commentId:a._id,isLiked:!X},e.next=3,S.a.put("/comments/liked",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.delete("/comments/delete",{params:{_id:a._id}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ve=function(){return F(!P)};return u.a.createElement("div",Object.assign({className:Object(B.a)(v.root,t),style:se},f),u.a.createElement(x.a,{alt:"Person",component:d.a,src:a.user.avatar,className:Object(B.a)(E?v.small:v.large),to:"#"}),u.a.createElement(j.a,{flexGrow:1,p:2,ml:2,bgcolor:"background.dark",className:v.bubble},u.a.createElement(j.a,{display:"flex",alignItems:"center",className:v.header,mb:1},u.a.createElement(j.a,{className:v.name},m?u.a.createElement(w.a,{ref:m,color:"textPrimary",component:d.a,to:"#",variant:"h6"},a.user.name):u.a.createElement(w.a,{color:"textPrimary",component:d.a,to:"#",variant:"h6"},a.user.name),u.a.createElement(J.a,{smUp:!0},u.a.createElement(y.a,{color:"textSecondary",variant:"caption",className:v.date},b()(a.createdAt).fromNow()))),u.a.createElement(j.a,{flexGrow:1}),u.a.createElement(Y.a,{size:"small",className:v.replybtn,onClick:function(){var e=a.depth+1;p(a._id,e)},disabled:U.disable,startIcon:u.a.createElement($.a,{size:"20",className:U.reply?v.replyClickIcon:v.replyIcon})},"Reply"),X?u.a.createElement(Y.a,{size:"small",className:v.replybtn,onClick:function(){ee(!1),ie((function(e){return e-1})),me()},disabled:U.disable,startIcon:u.a.createElement(G.a,{src:"/static/icons/trending_filled.svg"})},le," likes"):u.a.createElement(Y.a,{size:"small",className:v.replybtn,onClick:function(){ee(!0),ie((function(e){return e+1})),me()},disabled:U.disable,startIcon:u.a.createElement(G.a,{src:"/static/icons/trending_outlined.svg"})},le," likes"),u.a.createElement(Y.a,{size:"small",className:v.replybtn,onClick:function(){return L(!0)},disabled:U.flagDiabled||ne,startIcon:ne?u.a.createElement(H.a,null):u.a.createElement(V.a,null)},"Flag"),!U.removeDisabled&&u.a.createElement(Y.a,{size:"small",className:v.replybtn,onClick:ve,disabled:U.removeDisabled,startIcon:u.a.createElement(K.a,null)},"Remove"),u.a.createElement(J.a,{smDown:!0},u.a.createElement(y.a,{color:"textSecondary",variant:"caption",className:v.date},b()(a.createdAt).fromNow()))),u.a.createElement(y.a,{variant:"body1",color:"textPrimary"},a.comment)),M&&u.a.createElement(ue,{open:M,user:N,post:n,comment:a,onOpen:function(){return L(!M)},onFlag:function(){return re(!0)}}),P&&u.a.createElement(pe,{open:P,onOpen:ve,onConfirm:de}))},he=a(139),Oe=a(353),ge=a(1267),Ee=a.n(ge),je=a(1325),ke=a.n(je),ye=Object(v.a)((function(e){return{root:Object(i.a)({alignItems:"center",display:"flex"},e.breakpoints.down("sm"),{flexWrap:"wrap"}),inputContainer:Object(i.a)({flexGrow:1,marginLeft:e.spacing(2),paddingBottom:e.spacing(.5),paddingLeft:e.spacing(.5),paddingRight:e.spacing(.5),paddingTop:e.spacing(.5)},e.breakpoints.down("sm"),{width:"100%"}),divider:{height:24,width:1},fileInput:{display:"none"}}})),xe=function(e){var t=e.className,a=e.post,n=e.status,o=e.inputRef,i=e.onFetch,m=Object(R.a)(e,["className","post","status","inputRef","onFetch"]),d=ye(),p=Object(_.a)().user,f=Object(he.b)().enqueueSnackbar,b=Object(O.a)(),v=Object(g.a)(b.breakpoints.down("sm")),h=Object(s.useRef)(null),j=Object(s.useState)(""),k=Object(l.a)(j,2),y=k[0],w=k[1],N=function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={parent:n.parent,post:a._id,depth:n.depth,comment:y},e.next=4,S.a.post("/comments/create",t);case 4:w(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.message&&f(e.t0.message,{variant:"error"});case 10:i();case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return u.a.createElement("div",Object.assign({className:Object(B.a)(d.root,t)},m),!v&&u.a.createElement(x.a,{alt:"Person",src:p?p.avatar:""}),u.a.createElement(E.a,{className:d.inputContainer,variant:"outlined"},u.a.createElement(Oe.a,{value:y,disableUnderline:!0,fullWidth:!0,multiline:!0,rows:3,onChange:function(e){e.persist(),w(e.target.value)},ref:o})),u.a.createElement(z.a,{title:"Send"},u.a.createElement("span",null,u.a.createElement(M.a,{color:y.length>0?"primary":"default",onClick:N,disabled:""===y},u.a.createElement(Ee.a,null)))),u.a.createElement(C.a,{className:d.divider}),u.a.createElement(z.a,{title:"Attach image"},u.a.createElement(M.a,{edge:"end",onClick:function(){h.current.click()}},u.a.createElement(ke.a,null))),u.a.createElement("input",{className:d.fileInput,ref:h,type:"file"}))},we={depth:0,parent:null},Ne=[{name:"bullish",text:"Bullish"},{name:"bearish",text:"Bearish"},{name:"neutral",text:"Neutral"},{name:"no_opinion",text:"No Opinion"}],Ce=Object(v.a)((function(e){var t;return{root:(t={backgroundColor:e.palette.background.dark,margin:"0 auto",width:"80%",minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},Object(i.a)(t,e.breakpoints.down("md"),{width:"70%"}),Object(i.a)(t,e.breakpoints.down("sm"),{width:"100%"}),Object(i.a)(t,e.breakpoints.up("xl"),{width:"45%"}),t),chip:{marginLeft:e.spacing(1),marginTop:e.spacing(1)},box:Object(i.a)({padding:e.spacing(7),flexGrow:1},e.breakpoints.down("sm"),{padding:e.spacing(3)}),author:{marginTop:e.spacing(2),display:"flex",alignItems:"center"},avatar:{marginRight:e.spacing(2)},content:Object(i.a)({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(17),marginBottom:e.spacing(2)},e.breakpoints.down("sm"),{fontSize:e.typography.pxToRem(17)}),defaultDisclosure:Object(i.a)({fontFamily:e.typography.fontFamily,fontWeight:"bold",fontStyle:"italic",color:h.a.grey[500]},e.breakpoints.down("sm"),{fontSize:"0.9rem"}),disclosure:Object(i.a)({fontFamily:e.typography.fontFamily,color:h.a.grey[500]},e.breakpoints.down("sm"),{fontSize:"0.9rem"})}}));t.default=function(){var e=Ce(),t=Object(O.a)(),a=Object(m.g)(),n=Object(_.a)(),i=n.user,f=n.isAuthenticated,v=Object(s.useRef)(null),h=Object(s.useRef)(null),R=Object(g.a)(t.breakpoints.down("sm")),B=Object(m.h)(),z=Object(s.useState)(),M=Object(l.a)(z,2),L=M[0],T=M[1],D=Object(s.useState)(),P=Object(l.a)(D,2),F=P[0],H=P[1],A=Object(s.useState)(we),V=Object(l.a)(A,2),$=V[0],G=V[1],W=Object(s.useState)(!1),U=Object(l.a)(W,2),J=U[0],Y=U[1];Object(s.useEffect)((function(){Z(),ie.f.on("fetchPost",(function(e){Z()}))}),[]),Object(s.useEffect)((function(){var e,t,n;f&&("admin"===(null===(e=B.state)||void 0===e?void 0:e.from)&&H(null===(t=B.state)||void 0===t?void 0:t.comment),v.current&&"profile"===(null===(n=B.state)||void 0===n?void 0:n.from)&&X(),!v.current&&a.replace(Object(o.a)({},B)))}),[B,a,f]),Object(s.useEffect)((function(){f&&h.current&&h.current.focus()}),[a,B,f]);var Z=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=B.pathname.split("/")[3],n=f&&{user:i._id},e.next=5,S.a.get("/posts/get/".concat(t),{params:n});case 5:c=e.sent,T(c.data.post),Y(c.data.isBookmark),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),a.push("/404");case 13:G(we);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),K=function(e){return Y(e)},Q=function(e,t){var a=$.parent!==e?e:null;G({parent:a,depth:t})},X=function(){v.current.click(),a.replace(Object(o.a)(Object(o.a)({},B),{},{state:void 0}))};return u.a.createElement(u.a.Fragment,null,L&&!R&&u.a.createElement(q,{post:L,isBookmarked:J,onBookmarked:K,onRef:X,className:"div"}),u.a.createElement(I.a,{className:e.root,title:L&&L.title?L.title:"Post"},u.a.createElement(E.a,null,L&&u.a.createElement(j.a,{mt:3,className:e.box},u.a.createElement(k.a,{container:!0,spacing:3},R&&u.a.createElement(u.a.Fragment,null,u.a.createElement(j.a,{flexGrow:1}),u.a.createElement(q,{post:L,isBookmarked:J,onBookmarked:K,onRef:X})),u.a.createElement(k.a,{item:!0,xs:12,md:10},u.a.createElement(y.a,{variant:"h1",component:"header",color:"textPrimary"},L.title),u.a.createElement(j.a,{className:e.author},u.a.createElement(x.a,{alt:"Person",component:d.a,src:L.author.avatar,className:e.avatar,to:"/users/"+L.author.name}),u.a.createElement(y.a,{variant:"caption",color:"textSecondary"},u.a.createElement(w.a,{color:"textSecondary",component:d.a,to:"/users/"+L.author.name,variant:"h6"},L.author.name)," ",b()(L.createdAt).fromNow())),u.a.createElement(j.a,{mt:2},L.tags.map((function(t){return u.a.createElement(N.a,{key:t.symbol,clickable:!0,variant:"outlined",label:t.symbol,className:e.chip,onClick:function(){return e=t.symbol,a.push("/symbol/".concat(e));var e}})})),u.a.createElement(N.a,{variant:"outlined",color:"primary",className:e.chip,label:Ne.find((function(e){return e.name===L.picker})).text})))),u.a.createElement(j.a,{mt:3,className:e.content},Object(p.a)(L.content)),u.a.createElement(C.a,null),u.a.createElement(j.a,{mt:3,className:e.defaultDisclosure},"Disclaimer: Nothing in this article is or should ever be taken as financial advice. This is purely the personal opinions of the author. Seek out financial advice from a licensed professional who is familiar with your personal financial status and risk tolerances."),u.a.createElement(j.a,{mt:3,className:e.disclosure},Object(p.a)(L.disclosure)))),L&&u.a.createElement(E.a,null,u.a.createElement(j.a,{mt:3,className:e.box},u.a.createElement(k.a,{container:!0,spacing:3},u.a.createElement(k.a,{item:!0,xs:12,md:12},L.comments.map((function(e){return u.a.createElement(u.a.Fragment,{key:e._id},u.a.createElement(ve,{comment:e,commentRef:F===e._id&&h,postId:L._id,reply:$.parent,onComment:Q}))})),f&&u.a.createElement(u.a.Fragment,null,u.a.createElement(j.a,{my:2},u.a.createElement(C.a,null)),u.a.createElement(xe,{post:L,status:$,inputRef:v,onFetch:Z}))))))))}}}]);
//# sourceMappingURL=16.7bc3ccd4.chunk.js.map