(this["webpackJsonpcounter-writh-redux"]=this["webpackJsonpcounter-writh-redux"]||[]).push([[0],{13:function(e,t,r){e.exports={counterwrapper:"Counter_counterwrapper__3pCnk",mainwindow:"Counter_mainwindow__1v5pM",error:"Counter_error__20-oV",count:"Counter_count__3rMXh",counterr:"Counter_counterr__1-m77",controls:"Counter_controls__2wUaS"}},195:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(38),u=r.n(c),o=(r(91),r(92),r(13)),s=r.n(o),i=r(6),l=r(82),d=r.n(l),b=r(3),j=a.a.memo((function(e){return Object(b.jsx)("div",{className:d.a.buttonWrapper,children:Object(b.jsx)("button",{disabled:e.disabledStatus,onClick:e.onClick,children:e.name})})})),m=r(9),O={startValue:0,disableInc:!1,disableReset:!1,disableSet:!1,value:0,maxValue:0,error:""},f=function(e){return{type:"inc-Value",data:e}},x=function(e,t,r){return{type:"set-Values",maxVal:e,startVal:t,value:r}},v=function(e){return{type:"disable-button",whatdisable:e}},p=function(e){return{type:"set-error",error:e}},h=a.a.memo((function(e){var t=Object(i.c)(),r=Object(i.d)((function(e){return e.countreducer.value})),n=Object(i.d)((function(e){return e.countreducer.maxValue})),a=Object(i.d)((function(e){return e.countreducer.disableInc})),c=Object(i.d)((function(e){return e.countreducer.disableReset})),u=(Object(i.d)((function(e){return e.countreducer.error})),Object(i.d)((function(e){return e.countreducer.error})));return Object(b.jsxs)("div",{className:s.a.counterwrapper,children:[Object(b.jsx)("div",{children:"Counter with TypeScript, React,redux, redux-form, scss, localStorage"}),Object(b.jsxs)("div",{className:s.a.mainwindow,children:[u?Object(b.jsx)("div",{className:s.a.error,children:u}):Object(b.jsx)("div",{className:r<n?s.a.count:s.a.counterr,children:Object(b.jsx)("p",{children:r})}),Object(b.jsxs)("div",{className:s.a.controls,children:[Object(b.jsx)(j,{onClick:function(){r<n-1?t(f(1)):(t(f(1)),t(v({disableInc:!0,disableReset:!1,disableSet:!1})))},name:"inc",disabledStatus:a}),Object(b.jsx)(j,{onClick:function(){t({type:"res-value"}),t(v({disableInc:!1,disableReset:!1,disableSet:!1})),t(p(""))},name:"reset",disabledStatus:c})]})]})]})})),_=r(197),V=r(196),g=r(22),S=r.n(g),w=r(83),N=r.n(w),I=function(e){return e?void 0:"Required field"},C=function(e){return e&&e<0?"Must be >0 characters or more":void 0},y=function(e){var t=Object.assign({},e),r=Object(i.d)((function(e){return e.countreducer.disableSet})),n=Object(i.d)((function(e){return e.countreducer.startValue})),a=Object(i.d)((function(e){return e.countreducer.maxValue}));return Object(b.jsxs)("form",{className:S.a.contentform,onSubmit:t.handleSubmit,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"MaxValue:"}),Object(b.jsx)(_.a,{placeholder:"".concat(a),name:"MaxValue",type:"number",component:M,validate:[C,I],geterr:t.geterr})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"StartValue:"}),Object(b.jsx)(_.a,{placeholder:"".concat(n),type:"number",name:"startValue",validate:[C,I],component:M,geterr:t.geterr})]}),Object(b.jsx)("div",{className:S.a.buttonWrap,children:Object(b.jsx)(j,Object(m.a)({disabledStatus:r,name:"Set"},t))})]})},M=function(e){return Object(b.jsxs)("div",{className:S.a.form,children:[Object(b.jsx)("div",{className:e.meta.error&&e.meta.touched?S.a.counterr:"",children:Object(b.jsx)("input",Object(m.a)(Object(m.a)({},e.input),{},{value:e.meta.initial},e))}),Object(b.jsx)("div",{children:e.meta.error&&e.meta.touched?Object(b.jsx)("span",{children:e.meta.error}):Object(b.jsx)("div",{className:S.a.erdiv,children:"  "})})]})},k=a.a.memo((function(e){var t=Object(i.c)();Object(i.d)((function(e){return e.countreducer.startValue})),Object(i.d)((function(e){return e.countreducer.disableInc})),Object(i.d)((function(e){return e.countreducer.disableReset})),Object(i.d)((function(e){return e.countreducer.disableSet})),Object(i.d)((function(e){return e.countreducer.value})),Object(i.d)((function(e){return e.countreducer.maxValue}));Object(n.useEffect)((function(){t(p("Put values in fields")),t((function(e){var t=localStorage.getItem("value"),r=localStorage.getItem("maxVal"),n=localStorage.getItem("startVal");t&&r&&n&&e(x(+r,+n,+t))}))}),[]);var r=Object(V.a)({form:"settings"})(y),a=Object(n.useCallback)((function(e){if((+e.MaxValue||+e.startValue<0)&&t(p("Incorrect - Values")),+e.MaxValue>+e.startValue){t(function(e,t,r){return function(n){localStorage.setItem("value",JSON.stringify(r)),localStorage.setItem("maxVal",JSON.stringify(e)),localStorage.setItem("startVal",JSON.stringify(t)),n(x(e,t,r))}}(+e.MaxValue,+e.startValue,+e.startValue));t(p("")),t(v({disableInc:!1,disableReset:!1,disableSet:!0}))}else{t(p("Max value must be bigger start value")),t(v({disableInc:!0,disableReset:!0,disableSet:!1}))}}),[t]);return Object(b.jsx)("div",{className:s.a.counterwrapper,children:Object(b.jsx)("div",{className:s.a.mainwindow,children:Object(b.jsx)("div",{className:N.a.settingFormWrapper,children:Object(b.jsx)(r,{geterr:function(e){return t(p(e))},onSubmit:a})})})})}));var R=function(e){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(k,{})]})},W=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,199)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,u=t.getTTFB;r(e),n(e),a(e),c(e),u(e)}))},F=r(7),J=r(85),L=r(198),B=Object(F.c)({countreducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"inc-Value":return Object(m.a)(Object(m.a)({},e),{},{value:e.value+t.data});case"set-Values":return Object(m.a)(Object(m.a)({},e),{},{maxValue:t.maxVal,startValue:t.startVal,value:t.value});case"disable-button":var r=t.whatdisable;return Object(m.a)(Object(m.a)({},e),r);case"res-value":return Object(m.a)(Object(m.a)({},e),{},{value:0});case"set-error":return Object(m.a)(Object(m.a)({},e),{},{error:t.error});default:return e}},form:L.a}),H=Object(F.d)(B,Object(F.a)(J.a));u.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(i.a,{store:H,children:Object(b.jsx)(R,{})})}),document.getElementById("root")),W()},22:function(e,t,r){e.exports={form:"form_form__3OkHx",error:"form_error__tV3HL",formsummaryerror:"form_formsummaryerror__3Kf5r",buttonWrap:"form_buttonWrap__1FrK6",erdiv:"form_erdiv__2UIHO"}},82:function(e,t,r){e.exports={buttonWrapper:"Button_buttonWrapper__vn1LY"}},83:function(e,t,r){e.exports={settingFormWrapper:"Settings_settingFormWrapper__3uqQN"}},91:function(e,t,r){},92:function(e,t,r){}},[[195,1,2]]]);
//# sourceMappingURL=main.5992445d.chunk.js.map