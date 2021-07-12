(this["webpackJsonpdankstocks-client"]=this["webpackJsonpdankstocks-client"]||[]).push([[27],{1126:function(e,t,a){"use strict";var n=a(1),r=a(5),c=a(0),o=(a(3),a(2)),i=a(8),l=c.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,u=Object(r.a)(e,["classes","className","component"]);return c.createElement(s,Object(n.a)({className:Object(o.a)(a.root,i),ref:t},u))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},1374:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),c=a(11),o=a(0),i=a.n(o),l=a(38),s=a(13),u=a(650),d=a(1115),m=a(646),f=a(1117),p=a(1126),b=a(79),v=a(1111),g=a(1092),E=a(31),y=a(1221),h=a(1222),x=a(1108),j=a(643),k=a(1093),C=a(57),O=a(103),N=Object(u.a)((function(e){return{box:{display:"grid",columnGap:"16px",gridTemplateColumns:"repeat(7, 1fr)"},digit:{display:"inline-block",textAlign:"center","& .MuiInputBase-input":{textAlign:"center"}},helper:{mx:"14px"}}})),w=function(){var e,t=N(),a=Object(O.a)(),n=Object(C.a)().verifyCode,s=Object(l.h)(),u=Object(o.useRef)([]);return Object(o.useEffect)((function(){u.current=u.current.slice(0,6)}),[]),i.a.createElement(h.a,{initialValues:{email:(null===(e=s.state)||void 0===e?void 0:e.username)||"",code:["","","","","",""],submit:null},validationSchema:y.c().shape({email:y.e().email("Must be a valid email").max(255).required("Email is required"),code:y.a().of(y.e().required("Code is required"))}),onSubmit:function(){var e=Object(c.a)(r.a.mark((function e(t,c){var o,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.setErrors,i=c.setStatus,l=c.setSubmitting,e.prev=1,e.next=4,n(t.email,t.code.join(""));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.error(e.t0),a.current&&(i({success:!1}),o({submit:e.t0.message}),l(!1));case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var a=e.errors,n=e.handleBlur,r=e.handleSubmit,c=e.isSubmitting,o=e.setFieldValue,l=e.touched,s=e.values;return i.a.createElement("form",{noValidate:!0,onSubmit:r},i.a.createElement(m.a,{mt:3},i.a.createElement(b.a,{color:"textSecondary",variant:"subtitle2"},"Verification code")),i.a.createElement(m.a,{pt:1,className:t.box},[1,2,3,4,5,6].map((function(e,r){return i.a.createElement(x.a,{error:Boolean(Array.isArray(l.code)&&6===l.code.length&&a.code),fullWidth:!0,inputRef:function(e){return u.current[r]=e},key:"code-".concat(r),name:"code[".concat(r,"]"),onBlur:n,onKeyDown:function(e){if("ENTER"===e.code){if(s.code[r])return void o("code[".concat(r,"]"),"");if(r>0)return o("code[".concat(r,"]"),""),void u.current[r-1].focus()}Number.isInteger(parseInt(e.key,10))&&(o("code[".concat(r,"]"),e.key),r<5&&u.current[r+1].focus())},onPaste:function(e){var t=e.clipboardData.getData("text").split("");if(6===t.length){var a=!0;t.forEach((function(e){Number.isInteger(parseInt(e,10))||(a=!1)})),a&&(o("code",t),u.current[5].focus())}},value:s.code[r],variant:"outlined",className:t.digit})}))),Boolean(Array.isArray(l.code)&&6===l.code.length&&a.code)&&i.a.createElement(j.a,{error:!0,className:t.helper},Array.isArray(a.code)&&a.code.find((function(e){return void 0!==e}))),a.submit&&i.a.createElement(m.a,{mt:3},i.a.createElement(j.a,{error:!0},a.submit)),i.a.createElement(m.a,{mt:3},i.a.createElement(k.a,{color:"primary",disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Verify")))}))},S=a(104),A=a(358),B=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column",minHeight:"100vh"},methodIcon:{height:30,marginLeft:e.spacing(2),marginRight:e.spacing(2)},cardContainer:{paddingBottom:80,paddingTop:80},cardContent:{padding:e.spacing(4),display:"flex",flexDirection:"column",minHeight:400}}}));t.default=function(){var e,t=B(),a=Object(C.a)().method,n=null===(e=Object(l.h)().state)||void 0===e?void 0:e.username,o=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("/resend-code",{email:n});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement(A.a,{className:t.root,title:"Verify Code"},i.a.createElement(d.a,{className:t.cardContainer,maxWidth:"sm"},i.a.createElement(m.a,{mb:8,display:"flex",justifyContent:"center"},i.a.createElement(s.a,{to:"/"},i.a.createElement(S.a,null))),i.a.createElement(f.a,null,i.a.createElement(p.a,{className:t.cardContent},i.a.createElement(m.a,{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},i.a.createElement("div",null,i.a.createElement(b.a,{color:"textPrimary",gutterBottom:!0,variant:"h2"},"Verify Code"),i.a.createElement(b.a,{variant:"body2",color:"textSecondary"},"Confirm registration using your verification code"))),i.a.createElement(m.a,{flexGrow:1,mt:1},"JWT"===a&&i.a.createElement(w,null)),i.a.createElement(m.a,{my:3},i.a.createElement(v.a,null)),i.a.createElement(m.a,{display:"flex"},i.a.createElement(g.a,{component:s.a,to:"/login",variant:"body2",color:"textSecondary"},"Have an account?"),i.a.createElement(m.a,{flexGrow:1}),i.a.createElement(g.a,{variant:"body2",component:"button",onClick:o},"Resend Code"))))))}}}]);
//# sourceMappingURL=27.d8d351da.chunk.js.map