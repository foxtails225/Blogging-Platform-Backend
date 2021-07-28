(this["webpackJsonpdankstocks-client"]=this["webpackJsonpdankstocks-client"]||[]).push([[26],{1126:function(e,a,t){"use strict";var r=t(1),n=t(5),s=t(0),o=(t(3),t(2)),c=t(8),i=s.forwardRef((function(e,a){var t=e.classes,c=e.className,i=e.component,l=void 0===i?"div":i,d=Object(n.a)(e,["classes","className","component"]);return s.createElement(l,Object(r.a)({className:Object(o.a)(t.root,c),ref:a},d))}));a.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},1375:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(13),o=t(650),c=t(1115),i=t(646),l=t(1117),d=t(1126),m=t(79),u=t(1111),p=t(1092),b=t(358),f=t(104),g=t(57),h=t(7),w=t.n(h),v=t(11),C=t(34),E=t(38),y=t(2),x=t(1220),O=t(1221),j=t(1108),k=t(643),N=t(1093),B=t(31),R=t(103),S=Object(o.a)((function(){return{root:{}}})),P=function(e){var a=e.className,t=Object(C.a)(e,["className"]),r=S(),s=Object(E.g)(),o=Object(E.i)().id,c=Object(R.a)();return n.a.createElement(O.a,{enableReinitialize:!0,initialValues:{password:"",passwordConfirm:"",submit:null},validationSchema:x.c().shape({password:x.e().min(7,"Must be at least 7 characters").max(255).required("Required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),passwordConfirm:x.e().oneOf([x.d("password"),null],"Passwords must match").required("Required")}),onSubmit:function(){var e=Object(v.a)(w.a.mark((function e(a,t){var r,n,i,l;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.setErrors,n=t.setStatus,i=t.setSubmitting,e.prev=1,l=o.split("=")[1],e.next=5,B.a.post("/password-reset",{recoveryToken:l,password:a.password});case 5:c.current&&(n({success:!0}),i(!1),s.push("/login")),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c.current&&(n({success:!1}),r({submit:e.t0.message}),i(!1));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var s=e.errors,o=e.handleBlur,c=e.handleChange,l=e.handleSubmit,d=e.isSubmitting,m=e.touched,u=e.values;return n.a.createElement("form",Object.assign({noValidate:!0,onSubmit:l,className:Object(y.a)(r.root,a)},t),n.a.createElement(j.a,{error:Boolean(m.password&&s.password),fullWidth:!0,helperText:m.password&&s.password,label:"New Password",margin:"normal",name:"password",onBlur:o,onChange:c,type:"password",value:u.password,variant:"outlined"}),n.a.createElement(j.a,{error:Boolean(m.passwordConfirm&&s.passwordConfirm),fullWidth:!0,helperText:m.passwordConfirm&&s.passwordConfirm,label:"Confirm Password",margin:"normal",name:"passwordConfirm",onBlur:o,onChange:c,type:"password",value:u.passwordConfirm,variant:"outlined"}),s.submit&&n.a.createElement(i.a,{mt:3},n.a.createElement(k.a,{error:!0},s.submit)),n.a.createElement(i.a,{mt:2},n.a.createElement(N.a,{color:"secondary",disabled:d,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Reset Password")))}))},T=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column",minHeight:"100vh"},banner:{backgroundColor:e.palette.background.paper,paddingBottom:e.spacing(2),paddingTop:e.spacing(2),borderBottom:"1px solid ".concat(e.palette.divider)},bannerChip:{marginRight:e.spacing(2)},methodIcon:{height:30,marginLeft:e.spacing(2),marginRight:e.spacing(2)},cardContainer:{paddingBottom:80,paddingTop:80},cardContent:{padding:e.spacing(4),display:"flex",flexDirection:"column",minHeight:400}}}));a.default=function(){var e=T(),a=Object(g.a)().method;return n.a.createElement(b.a,{className:e.root,title:"Password Reset"},n.a.createElement(c.a,{className:e.cardContainer,maxWidth:"sm"},n.a.createElement(i.a,{mb:8,display:"flex",justifyContent:"center"},n.a.createElement(s.a,{to:"/"},n.a.createElement(f.a,null))),n.a.createElement(l.a,null,n.a.createElement(d.a,{className:e.cardContent},n.a.createElement(i.a,{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},n.a.createElement("div",null,n.a.createElement(m.a,{color:"textPrimary",gutterBottom:!0,variant:"h2"},"Password Reset"),n.a.createElement(m.a,{variant:"body2",color:"textSecondary"},"Reset your account password using your recovery link"))),n.a.createElement(i.a,{flexGrow:1,mt:3},"JWT"===a&&n.a.createElement(P,null)),n.a.createElement(i.a,{my:3},n.a.createElement(u.a,null)),n.a.createElement(p.a,{component:s.a,to:"/login",variant:"body2",color:"textSecondary"},"Have an account?")))))}}}]);
//# sourceMappingURL=26.2d9761ca.chunk.js.map