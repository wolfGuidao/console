"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[6973],{54950:function(e,n,o){var r=o(18489),t=o(50390),a=o(25594),i=o(74268),l=o(36554),c=o(94187),s=o(86509),d=o(4285),u=o(72462),p=o(97538),m=o(62559);n.Z=(0,d.Z)((function(e){return(0,s.Z)((0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},u.YI),u.Hr),u.lM),{},{fieldContainer:(0,r.Z)((0,r.Z)({},u.YI.fieldContainer),{},{display:"flex",justifyContent:"flex-start",alignItems:"center",margin:"15px 0",marginBottom:0,flexBasis:"initial"}),noTopMargin:{marginTop:0}}))}))((function(e){var n=e.label,o=e.onChange,r=e.value,s=e.id,d=e.name,u=e.checked,f=void 0!==u&&u,h=e.disabled,v=void 0!==h&&h,x=e.noTopMargin,Z=void 0!==x&&x,b=e.tooltip,k=void 0===b?"":b,g=e.overrideLabelClasses,C=void 0===g?"":g,j=e.classes;return(0,m.jsx)(t.Fragment,{children:(0,m.jsxs)(a.ZP,{item:!0,xs:12,className:"".concat(j.fieldContainer," ").concat(Z?j.noTopMargin:""),children:[(0,m.jsx)("div",{children:(0,m.jsx)(i.Z,{name:d,id:s,value:r,color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:f,onChange:o,checkedIcon:(0,m.jsx)("span",{className:j.checkedIcon}),icon:(0,m.jsx)("span",{className:j.unCheckedIcon}),disabled:v})}),""!==n&&(0,m.jsxs)(l.Z,{htmlFor:s,className:"".concat(j.noMinWidthLabel," ").concat(C),children:[(0,m.jsx)("span",{children:n}),""!==k&&(0,m.jsx)("div",{className:j.tooltipContainer,children:(0,m.jsx)(c.Z,{title:k,placement:"top-start",children:(0,m.jsx)("div",{className:j.tooltip,children:(0,m.jsx)(p.Z,{})})})})]})]})})}))},86973:function(e,n,o){o.r(n);var r=o(35531),t=o(23430),a=o(18489),i=o(50390),l=o(86509),c=o(4285),s=o(25594),d=o(66946),u=o(35721),p=o(25534),m=o(54950),f=o(30324),h=o(72462),v=o(8235),x=o(47424),Z=o(62559);n.default=(0,c.Z)((function(e){return(0,l.Z)((0,a.Z)((0,a.Z)({buttonContainer:{marginTop:24,textAlign:"right","& .MuiButton-root":{marginLeft:8}},dropdown:{marginBottom:24},checkboxLabel:{marginTop:12,marginRight:4,fontSize:16,fontWeight:500},checkboxDisabled:{opacity:.5},inlineCheckboxes:(0,a.Z)((0,a.Z)({},h.IX.inlineCheckboxes),{},{alignItems:"center","@media (max-width: 900px)":{flexFlow:"column",alignItems:"flex-start"}})},h.OR),(0,h.Bz)(e.spacing(4))))}))((function(e){var n=e.classes,o=(0,i.useState)(!1),a=(0,t.Z)(o,2),l=a[0],c=a[1],h=(0,i.useState)(["cpu","mem","block","mutex","trace","threads","goroutines"]),b=(0,t.Z)(h,2),k=b[0],g=b[1],C=function(e){var n=[];n=k.indexOf(e.target.value)>-1?k.filter((function(n){return n!==e.target.value})):[].concat((0,r.Z)(k),[e.target.value]),g(n)};return(0,Z.jsxs)(i.Fragment,{children:[(0,Z.jsx)(u.Z,{label:"Profile"}),(0,Z.jsxs)(p.Z,{children:[(0,Z.jsxs)(s.ZP,{item:!0,xs:12,className:n.boxy,children:[(0,Z.jsx)(s.ZP,{item:!0,xs:12,className:n.dropdown,children:(0,Z.jsxs)(s.ZP,{item:!0,xs:12,className:"".concat(n.inlineCheckboxes," ").concat(l&&n.checkboxDisabled),children:[(0,Z.jsx)("div",{className:n.checkboxLabel,children:"Types to profile:"}),[{label:"cpu",value:"cpu"},{label:"mem",value:"mem"},{label:"block",value:"block"},{label:"mutex",value:"mutex"},{label:"trace",value:"trace"},{label:"threads",value:"threads"},{label:"goroutines",value:"goroutines"}].map((function(e){return(0,Z.jsx)(m.Z,{checked:k.indexOf(e.value)>-1,disabled:l,id:"checkbox-".concat(e.label),label:e.label,name:"checkbox-".concat(e.label),onChange:C,value:e.value},"checkbox-".concat(e.label))}))]})}),(0,Z.jsxs)(s.ZP,{item:!0,xs:12,className:n.buttonContainer,children:[(0,Z.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary",disabled:l||k.length<1,onClick:function(){!function(){if(!l){var e=k.join(",");c(!0),f.Z.invoke("POST","/api/v1/profiling/start",{type:e}).then((function(){})).catch((function(e){console.log(e),c(!1)}))}}()},children:"Start Profiling"}),(0,Z.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary",disabled:!l,onClick:function(){!function(){if(l){var e=document.createElement("a");document.body.appendChild(e);var n=new XMLHttpRequest;n.open("POST","/api/v1/profiling/stop",!0),n.responseType="blob",n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){c(!1);var e=document.createElement("a");e.href=window.URL.createObjectURL(n.response),e.download="profile.zip",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},n.send()}}()},children:"Stop Profiling"})]})]}),!l&&(0,Z.jsxs)(i.Fragment,{children:[(0,Z.jsx)("br",{}),(0,Z.jsx)(v.Z,{title:"During the profiling run all production traffic will be suspended.",iconComponent:(0,Z.jsx)(x.Z,{}),help:(0,Z.jsx)(i.Fragment,{})})]})]})]})}))},74268:function(e,n,o){o.d(n,{Z:function(){return S}});var r=o(36222),t=o(1048),a=o(32793),i=o(50390),l=o(50076),c=o(36128),s=o(16756),d=o(55900),u=o(62559),p=(0,d.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=(0,d.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),h=o(91442),v=o(15573),x=o(8208),Z=o(10594);function b(e){return(0,Z.Z)("MuiCheckbox",e)}var k=(0,o(43349).Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],C=(0,x.ZP)(s.Z,{shouldForwardProp:function(e){return(0,x.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,o.indeterminate&&n.indeterminate,"default"!==o.color&&n["color".concat((0,h.Z)(o.color))]]}})((function(e){var n,o=e.theme,t=e.ownerState;return(0,a.Z)({color:o.palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:(0,c.Fq)("default"===t.color?o.palette.action.active:o.palette[t.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(n={},(0,r.Z)(n,"&.".concat(k.checked,", &.").concat(k.indeterminate),{color:o.palette[t.color].main}),(0,r.Z)(n,"&.".concat(k.disabled),{color:o.palette.action.disabled}),n))})),j=(0,u.jsx)(m,{}),y=(0,u.jsx)(p,{}),w=(0,u.jsx)(f,{}),S=i.forwardRef((function(e,n){var o,r,c=(0,v.Z)({props:e,name:"MuiCheckbox"}),s=c.checkedIcon,d=void 0===s?j:s,p=c.color,m=void 0===p?"primary":p,f=c.icon,x=void 0===f?y:f,Z=c.indeterminate,k=void 0!==Z&&Z,S=c.indeterminateIcon,z=void 0===S?w:S,F=c.inputProps,I=c.size,P=void 0===I?"medium":I,R=(0,t.Z)(c,g),M=k?z:x,L=k?z:d,N=(0,a.Z)({},c,{color:m,indeterminate:k,size:P}),q=function(e){var n=e.classes,o=e.indeterminate,r=e.color,t={root:["root",o&&"indeterminate","color".concat((0,h.Z)(r))]},i=(0,l.Z)(t,b,n);return(0,a.Z)({},n,i)}(N);return(0,u.jsx)(C,(0,a.Z)({type:"checkbox",inputProps:(0,a.Z)({"data-indeterminate":k},F),icon:i.cloneElement(M,{fontSize:null!=(o=M.props.fontSize)?o:P}),checkedIcon:i.cloneElement(L,{fontSize:null!=(r=L.props.fontSize)?r:P}),ownerState:N,ref:n},R,{classes:q}))}))},14478:function(e,n,o){var r=o(50390).createContext();n.Z=r},25868:function(e,n,o){function r(e){var n=e.props,o=e.states,r=e.muiFormControl;return o.reduce((function(e,o){return e[o]=n[o],r&&"undefined"===typeof n[o]&&(e[o]=r[o]),e}),{})}o.d(n,{Z:function(){return r}})},23060:function(e,n,o){o.d(n,{Z:function(){return a}});var r=o(50390),t=o(14478);function a(){return r.useContext(t.Z)}},40198:function(e,n,o){var r=o(36222),t=o(1048),a=o(32793),i=o(50390),l=o(44977),c=o(50076),s=o(25868),d=o(23060),u=o(91442),p=o(15573),m=o(8208),f=o(41248),h=o(62559),v=["children","className","color","component","disabled","error","filled","focused","required"],x=(0,m.ZP)("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return(0,a.Z)({},n.root,"secondary"===o.color&&n.colorSecondary,o.filled&&n.filled)}})((function(e){var n,o=e.theme,t=e.ownerState;return(0,a.Z)({color:o.palette.text.secondary},o.typography.body1,(n={lineHeight:"1.4375em",padding:0,position:"relative"},(0,r.Z)(n,"&.".concat(f.Z.focused),{color:o.palette[t.color].main}),(0,r.Z)(n,"&.".concat(f.Z.disabled),{color:o.palette.text.disabled}),(0,r.Z)(n,"&.".concat(f.Z.error),{color:o.palette.error.main}),n))})),Z=(0,m.ZP)("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:function(e,n){return n.asterisk}})((function(e){var n=e.theme;return(0,r.Z)({},"&.".concat(f.Z.error),{color:n.palette.error.main})})),b=i.forwardRef((function(e,n){var o=(0,p.Z)({props:e,name:"MuiFormLabel"}),r=o.children,i=o.className,m=o.component,b=void 0===m?"label":m,k=(0,t.Z)(o,v),g=(0,d.Z)(),C=(0,s.Z)({props:o,muiFormControl:g,states:["color","required","focused","disabled","error","filled"]}),j=(0,a.Z)({},o,{color:C.color||"primary",component:b,disabled:C.disabled,error:C.error,filled:C.filled,focused:C.focused,required:C.required}),y=function(e){var n=e.classes,o=e.color,r=e.focused,t=e.disabled,a=e.error,i=e.filled,l=e.required,s={root:["root","color".concat((0,u.Z)(o)),t&&"disabled",a&&"error",i&&"filled",r&&"focused",l&&"required"],asterisk:["asterisk",a&&"error"]};return(0,c.Z)(s,f.M,n)}(j);return(0,h.jsxs)(x,(0,a.Z)({as:b,ownerState:j,className:(0,l.Z)(y.root,i),ref:n},k,{children:[r,C.required&&(0,h.jsxs)(Z,{ownerState:j,"aria-hidden":!0,className:y.asterisk,children:["\u2009","*"]})]}))}));n.Z=b},41248:function(e,n,o){o.d(n,{M:function(){return t}});var r=o(10594);function t(e){return(0,r.Z)("MuiFormLabel",e)}var a=(0,o(43349).Z)("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]);n.Z=a},36554:function(e,n,o){o.d(n,{Z:function(){return b}});var r=o(36222),t=o(1048),a=o(32793),i=o(50390),l=o(50076),c=o(25868),s=o(23060),d=o(40198),u=o(41248),p=o(15573),m=o(8208),f=o(10594);function h(e){return(0,f.Z)("MuiInputLabel",e)}(0,o(43349).Z)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var v=o(62559),x=["disableAnimation","margin","shrink","variant"],Z=(0,m.ZP)(d.Z,{shouldForwardProp:function(e){return(0,m.FO)(e)||"classes"===e},name:"MuiInputLabel",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[(0,r.Z)({},"& .".concat(u.Z.asterisk),n.asterisk),n.root,o.formControl&&n.formControl,"small"===o.size&&n.sizeSmall,o.shrink&&n.shrink,!o.disableAnimation&&n.animated,n[o.variant]]}})((function(e){var n=e.theme,o=e.ownerState;return(0,a.Z)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},o.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===o.size&&{transform:"translate(0, 17px) scale(1)"},o.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!o.disableAnimation&&{transition:n.transitions.create(["color","transform","max-width"],{duration:n.transitions.duration.shorter,easing:n.transitions.easing.easeOut})},"filled"===o.variant&&(0,a.Z)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===o.size&&{transform:"translate(12px, 13px) scale(1)"},o.shrink&&(0,a.Z)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===o.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===o.variant&&(0,a.Z)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===o.size&&{transform:"translate(14px, 9px) scale(1)"},o.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 24px)",transform:"translate(14px, -9px) scale(0.75)"}))})),b=i.forwardRef((function(e,n){var o=(0,p.Z)({name:"MuiInputLabel",props:e}),r=o.disableAnimation,i=void 0!==r&&r,d=o.shrink,u=(0,t.Z)(o,x),m=(0,s.Z)(),f=d;"undefined"===typeof f&&m&&(f=m.filled||m.focused||m.adornedStart);var b=(0,c.Z)({props:o,muiFormControl:m,states:["size","variant","required"]}),k=(0,a.Z)({},o,{disableAnimation:i,formControl:m,shrink:f,size:b.size,variant:b.variant,required:b.required}),g=function(e){var n=e.classes,o=e.formControl,r=e.size,t=e.shrink,i={root:["root",o&&"formControl",!e.disableAnimation&&"animated",t&&"shrink","small"===r&&"sizeSmall",e.variant],asterisk:[e.required&&"asterisk"]},c=(0,l.Z)(i,h,n);return(0,a.Z)({},n,c)}(k);return(0,v.jsx)(Z,(0,a.Z)({"data-shrink":f,ownerState:k,ref:n},u,{classes:g}))}))},16756:function(e,n,o){o.d(n,{Z:function(){return k}});var r=o(23430),t=o(1048),a=o(32793),i=o(50390),l=o(44977),c=o(50076),s=o(91442),d=o(8208),u=o(55386),p=o(23060),m=o(86875),f=o(10594);function h(e){return(0,f.Z)("PrivateSwitchBase",e)}(0,o(43349).Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var v=o(62559),x=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Z=(0,d.ZP)(m.Z)((function(e){var n=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),b=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),k=i.forwardRef((function(e,n){var o=e.autoFocus,i=e.checked,d=e.checkedIcon,m=e.className,f=e.defaultChecked,k=e.disabled,g=e.disableFocusRipple,C=void 0!==g&&g,j=e.edge,y=void 0!==j&&j,w=e.icon,S=e.id,z=e.inputProps,F=e.inputRef,I=e.name,P=e.onBlur,R=e.onChange,M=e.onFocus,L=e.readOnly,N=e.required,q=e.tabIndex,B=e.type,O=e.value,E=(0,t.Z)(e,x),T=(0,u.Z)({controlled:i,default:Boolean(f),name:"SwitchBase",state:"checked"}),A=(0,r.Z)(T,2),H=A[0],W=A[1],V=(0,p.Z)(),D=k;V&&"undefined"===typeof D&&(D=V.disabled);var U="checkbox"===B||"radio"===B,X=(0,a.Z)({},e,{checked:H,disabled:D,disableFocusRipple:C,edge:y}),Y=function(e){var n=e.classes,o=e.checked,r=e.disabled,t=e.edge,a={root:["root",o&&"checked",r&&"disabled",t&&"edge".concat((0,s.Z)(t))],input:["input"]};return(0,c.Z)(a,h,n)}(X);return(0,v.jsxs)(Z,(0,a.Z)({component:"span",className:(0,l.Z)(Y.root,m),centerRipple:!0,focusRipple:!C,disabled:D,tabIndex:null,role:void 0,onFocus:function(e){M&&M(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){P&&P(e),V&&V.onBlur&&V.onBlur(e)},ownerState:X,ref:n},E,{children:[(0,v.jsx)(b,(0,a.Z)({autoFocus:o,checked:i,defaultChecked:f,className:Y.input,disabled:D,id:U&&S,name:I,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;W(n),R&&R(e,n)}},readOnly:L,ref:F,required:N,ownerState:X,tabIndex:q,type:B},"checkbox"===B&&void 0===O?{}:{value:O},z)),H?d:w]}))}))}}]);
//# sourceMappingURL=6973.aa8569ff.chunk.js.map