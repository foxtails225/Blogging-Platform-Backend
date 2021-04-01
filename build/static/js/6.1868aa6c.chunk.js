(this["webpackJsonpdankstocks-client"]=this["webpackJsonpdankstocks-client"]||[]).push([[6],{1349:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(21),l=t(1114),o=t(1100),c=t(1109),s=t(1102),m=t(1117),u=t(77),d=t(1095),p=t(1078),g=t(360),b=t(241),h=t(56),f=t(7),E=t.n(f),v=t(11),w=t(45),x=t(3),y=t(1224),k=t(1225),C=t(1092),j=t(631),S=t(1079),B=t(83),O=Object(l.a)((function(){return{root:{}}})),N=function(e){var a=e.className,t=Object(w.a)(e,["className"]),n=O(),i=Object(h.a)().login,l=Object(B.a)();return r.a.createElement(k.a,{initialValues:{email:"",password:"",submit:null},validationSchema:y.d().shape({email:y.f().email("Must be a valid email").max(255).required("Email is required"),password:y.f().max(255).required("Password is required")}),onSubmit:function(){var e=Object(v.a)(E.a.mark((function e(a,t){var n,r,o;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,r=t.setStatus,o=t.setSubmitting,e.prev=1,e.next=4,i(a.email,a.password);case 4:l.current&&(r({success:!0}),o(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),l.current&&(r({success:!1}),n({submit:e.t0.message}),o(!1));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var i=e.errors,l=e.handleBlur,o=e.handleChange,s=e.handleSubmit,m=e.isSubmitting,u=e.touched,d=e.values;return r.a.createElement("form",Object.assign({noValidate:!0,onSubmit:s,className:Object(x.a)(n.root,a)},t),r.a.createElement(C.a,{error:Boolean(u.email&&i.email),fullWidth:!0,autoFocus:!0,helperText:u.email&&i.email,label:"Email Address",margin:"normal",name:"email",onBlur:l,onChange:o,type:"email",value:d.email,variant:"outlined"}),r.a.createElement(C.a,{error:Boolean(u.password&&i.password),fullWidth:!0,helperText:u.password&&i.password,label:"Password",margin:"normal",name:"password",onBlur:l,onChange:o,type:"password",value:d.password,variant:"outlined"}),i.submit&&r.a.createElement(c.a,{mt:3},r.a.createElement(j.a,{error:!0},i.submit)),r.a.createElement(c.a,{mt:2},r.a.createElement(S.a,{color:"secondary",disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Log In")))}))},T=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column",minHeight:"100vh"},banner:{backgroundColor:e.palette.background.paper,paddingBottom:e.spacing(2),paddingTop:e.spacing(2),borderBottom:"1px solid ".concat(e.palette.divider)},bannerChip:{marginRight:e.spacing(2)},methodIcon:{height:30,marginLeft:e.spacing(2),marginRight:e.spacing(2)},cardContainer:{paddingBottom:80,paddingTop:80},cardContent:{padding:e.spacing(4),display:"flex",flexDirection:"column",minHeight:400}}}));a.default=function(){var e=T(),a=Object(h.a)().method;return r.a.createElement(g.a,{className:e.root,title:"Login"},r.a.createElement(o.a,{className:e.cardContainer,maxWidth:"sm"},r.a.createElement(c.a,{mb:8,display:"flex",justifyContent:"center"},r.a.createElement(i.a,{to:"/"},r.a.createElement(b.a,null))),r.a.createElement(s.a,null,r.a.createElement(m.a,{className:e.cardContent},r.a.createElement(c.a,{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},r.a.createElement("div",null,r.a.createElement(u.a,{color:"textPrimary",gutterBottom:!0,variant:"h2"},"Sign in"),r.a.createElement(u.a,{variant:"body2",color:"textSecondary"},"Sign in on the internal platform"))),r.a.createElement(c.a,{flexGrow:1,mt:3},"JWT"===a&&r.a.createElement(N,null)),r.a.createElement(c.a,{my:3},r.a.createElement(d.a,null)),r.a.createElement(p.a,{component:i.a,to:"/register",variant:"body2",color:"textSecondary"},"Create new account")))))}}}]);
//# sourceMappingURL=6.1868aa6c.chunk.js.map