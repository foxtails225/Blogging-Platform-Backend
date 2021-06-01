(this["webpackJsonpdankstocks-client"]=this["webpackJsonpdankstocks-client"]||[]).push([[27],{1373:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),i=t(649),c=t(1114),o=t(645),s=t(1116),m=t(1126),u=t(78),d=t(1110),p=t(1091),b=t(357),g=t(102),h=t(57),f=t(7),v=t.n(f),E=t(12),y=t(33),x=t(38),k=t(2),j=t(1220),C=t(1221),w=t(1107),S=t(1092),O=t(35),B=t(99),N=Object(i.a)((function(){return{root:{}}})),T=function(e){var a=e.className,t=Object(y.a)(e,["className"]),n=N(),l=Object(x.g)(),i=Object(B.a)();return r.a.createElement(C.a,{initialValues:{email:"",submit:null},validationSchema:j.c().shape({email:j.e().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:function(){var e=Object(E.a)(v.a.mark((function e(a,t){var n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,r=t.setStatus,c=t.setSubmitting,e.prev=1,e.next=4,O.a.post("/recovery-password",{email:a.email});case 4:i.current&&(r({success:!0}),c(!1),l.push("/")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i.current&&(r({success:!1}),n({submit:e.t0.message}),c(!1));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var l=e.errors,i=e.handleBlur,c=e.handleChange,s=e.handleSubmit,m=e.isSubmitting,u=e.touched,d=e.values;return r.a.createElement("form",Object.assign({noValidate:!0,onSubmit:s,className:Object(k.a)(n.root,a)},t),r.a.createElement(w.a,{error:Boolean(u.email&&l.email),fullWidth:!0,autoFocus:!0,helperText:u.email&&l.email,label:"Email Address",margin:"normal",name:"email",onBlur:i,onChange:c,type:"email",value:d.email,variant:"outlined"}),r.a.createElement(o.a,{mt:2},r.a.createElement(S.a,{color:"secondary",disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Send Link")))}))},R=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column",minHeight:"100vh"},banner:{backgroundColor:e.palette.background.paper,paddingBottom:e.spacing(2),paddingTop:e.spacing(2),borderBottom:"1px solid ".concat(e.palette.divider)},bannerChip:{marginRight:e.spacing(2)},methodIcon:{height:30,marginLeft:e.spacing(2),marginRight:e.spacing(2)},cardContainer:{paddingBottom:80,paddingTop:80},cardContent:{padding:e.spacing(4),display:"flex",flexDirection:"column",minHeight:400}}}));a.default=function(){var e=R(),a=Object(h.a)().method;return r.a.createElement(b.a,{className:e.root,title:"Password Recovery"},r.a.createElement(c.a,{className:e.cardContainer,maxWidth:"sm"},r.a.createElement(o.a,{mb:8,display:"flex",justifyContent:"center"},r.a.createElement(l.a,{to:"/"},r.a.createElement(g.a,null))),r.a.createElement(s.a,null,r.a.createElement(m.a,{className:e.cardContent},r.a.createElement(o.a,{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},r.a.createElement("div",null,r.a.createElement(u.a,{color:"textPrimary",gutterBottom:!0,variant:"h2"},"Password Recovery"),r.a.createElement(u.a,{variant:"body2",color:"textSecondary"},"Tell us your email so we can send you a reset link"))),r.a.createElement(o.a,{flexGrow:1,mt:3},"JWT"===a&&r.a.createElement(T,null)),r.a.createElement(o.a,{my:3},r.a.createElement(d.a,null)),r.a.createElement(p.a,{component:l.a,to:"/login",variant:"body2",color:"textSecondary"},"Have an account?")))))}}}]);
//# sourceMappingURL=27.d7341ff1.chunk.js.map