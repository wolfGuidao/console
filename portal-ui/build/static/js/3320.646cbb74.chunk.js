"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[3320],{53224:function(e,n,t){var a=t(18489),i=t(83738),r=(t(50390),t(70758)),l=t(62449),s=t(62559),o=["onClick","text","disabled","tooltip","icon"],c=(0,l.Z)((function(e){return{root:{padding:"7px",color:function(n){return function(n){var t=n.variant,a=n.color,i=e.palette.primary.main;return"primary"===a&&"contained"===t?i=e.palette.primary.contrastText:"primary"===a&&"outlined"===t?i=e.palette.primary.main:"secondary"===a&&(i=e.palette.secondary.main),i}(n)},borderColor:function(n){return"secondary"===n.color?e.palette.secondary.main:e.palette.primary.main},"& svg.min-icon":{width:12,marginLeft:function(e){return e.text?"5px":"0px"},"@media (max-width: 900px)":{width:16,marginLeft:"0px !important"}}}}}));n.Z=function(e){var n=c(e),t=e.onClick,l=e.text,d=void 0===l?"":l,u=e.disabled,m=void 0!==u&&u,g=e.tooltip,h=e.icon,x=void 0===h?null:h,b=(0,i.Z)(e,o);return(0,s.jsxs)(r.Z,(0,a.Z)((0,a.Z)({classes:n,tooltip:g||d,variant:"outlined",onClick:t,disabled:m,color:"secondary",size:"medium",sx:{border:"1px solid #f44336","& span":{fontSize:14,"@media (max-width: 900px)":{display:"none"}}}},b),{},{children:[(0,s.jsx)("span",{children:d})," ",x]}))}},55572:function(e,n,t){var a=t(35531),i=t(18489),r=t(50390),l=t(86509),s=t(4285),o=t(72462),c=t(66964),d=t(94187),u=t(95467),m=t(96152),g=t(43615),h=t(84201),x=t(10369),b=t(62559);n.Z=(0,s.Z)((function(e){return(0,l.Z)((0,i.Z)({buttonContainer:{textAlign:"right"},multiContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start"},sizeFactorContainer:{marginLeft:8},bottomContainer:{display:"flex",flexGrow:1,alignItems:"center","& div":{flexGrow:1,width:"100%"}},factorElements:{display:"flex",justifyContent:"flex-start"},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"},shortened:{gridTemplateColumns:"auto auto 20px 20px",display:"grid",gridGap:20,paddingRight:20}},o.oO))}))((function(e){var n=e.classes,t=e.paramName,i=e.newValues,l=e.setNewValues,s=e.error,o=e.setError,p=function(e){o((0,x.h)(s,e))};(0,r.useEffect)((function(){for(var e=[],n=0;n<i.length;n++)e.push({fieldKey:"key-".concat(n.toString()),required:!1,value:i[n].key,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid key"}),e.push({fieldKey:"val-".concat(n.toString()),required:!1,value:i[n].value,pattern:/^[a-zA-Z0-9-_.]{1,63}$/,customPatternMessage:"Invalid value"});var t=(0,h.R)(e);o(t)}),[i,o]);var v=i.map((function(e,o){return(0,b.jsx)(r.Fragment,{children:(0,b.jsxs)("div",{className:n.shortened,children:[(0,b.jsx)(c.Z,{id:"key-".concat(o.toString()),label:"",placeholder:"Key",name:"key-".concat(o.toString()),value:i[o].key,onChange:function(e){var n=(0,a.Z)(i);n[o].key=e.target.value,l(n),p("key-".concat(o.toString()))},index:o,error:s["key-".concat(o.toString())]||""},"csv-key-".concat(o.toString())),(0,b.jsx)(c.Z,{id:"val-".concat(o.toString()),label:"",placeholder:"Value",name:"val-".concat(o.toString()),value:i[o].value,onChange:function(e){var n=(0,a.Z)(i);n[o].value=e.target.value,l(n),p("val-".concat(o.toString()))},index:o,error:s["val-".concat(o.toString())]||""},"csv-val-".concat(o.toString())),(0,b.jsx)(d.Z,{title:"Add ".concat(t),"aria-label":"addlabel",children:(0,b.jsx)(u.Z,{size:"small",onClick:function(){var e=(0,a.Z)(i);e.push({key:"",value:""}),l(e)},children:(0,b.jsx)(m.Z,{})})}),(0,b.jsx)(d.Z,{title:"Remove","aria-label":"removeLabel",children:(0,b.jsx)(u.Z,{size:"small",style:{marginLeft:16},onClick:function(){if(1===i.length&&l([{key:"",value:""}]),i.length>1){var e=(0,a.Z)(i);e.splice(o,1),l(e)}},children:(0,b.jsx)(g.Z,{})})})]})},"keyvalue-".concat(o.toString()))}));return(0,b.jsx)(r.Fragment,{children:v})}))},88370:function(e,n,t){var a=t(18489),i=t(50390),r=t(34424),l=t(38342),s=t.n(l),o=t(86509),c=t(4285),d=t(72462),u=t(8174),m=t(62559),g=(0,r.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo,logEnabled:s()(e.tenants.tenantDetails.tenantInfo,"logEnabled",!1),monitoringEnabled:s()(e.tenants.tenantDetails.tenantInfo,"monitoringEnabled",!1),encryptionEnabled:s()(e.tenants.tenantDetails.tenantInfo,"encryptionEnabled",!1),minioTLS:s()(e.tenants.tenantDetails.tenantInfo,"minioTLS",!1),consoleTLS:s()(e.tenants.tenantDetails.tenantInfo,"consoleTLS",!1),consoleEnabled:s()(e.tenants.tenantDetails.tenantInfo,"consoleEnabled",!1),adEnabled:s()(e.tenants.tenantDetails.tenantInfo,"idpAdEnabled",!1),oidcEnabled:s()(e.tenants.tenantDetails.tenantInfo,"idpOidcEnabled",!1)}}),null);n.Z=(0,c.Z)((function(e){return(0,o.Z)((0,a.Z)((0,a.Z)({},d.oZ),{},{centerAlign:{textAlign:"center"},listHeight:{height:"50"}},(0,d.Bz)(e.spacing(4))))}))(g((function(e){var n=e.classes,t=e.records,a=e.recordName;return(0,m.jsx)(i.Fragment,{children:(0,m.jsx)(u.Z,{columns:[{label:"Key",elementKey:"key"},{label:"Value",elementKey:"value"}],isLoading:!1,records:t,itemActions:[],entityName:a,idField:"name",customPaperHeight:n.listHeight})})})))},23320:function(e,n,t){t.r(n),t.d(n,{default:function(){return E}});var a=t(23430),i=t(18489),r=t(50390),l=t(34424),s=t(86509),o=t(4285),c=t(72462),d=t(25594),u=t(23473),m=t(18201),g=t(46981),h=t(30324),x=t(63548),b=t(44149),p=t(35531),v=t(76352),f=t(66946),j=t(55572),Z=t(66964),N=t(84201),S=t(10369),y=t(62559),A=(0,o.Z)((function(e){return(0,s.Z)((0,i.Z)((0,i.Z)((0,i.Z)({buttonContainer:{textAlign:"right"},multiContainer:{display:"flex",alignItems:"center",justifyContent:"flex-start"},sizeFactorContainer:{marginLeft:8},bottomContainer:{display:"flex",flexGrow:1,alignItems:"center","& div":{flexGrow:1,width:"100%"}},factorElements:{display:"flex",justifyContent:"flex-start"},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"},shortened:{gridTemplateColumns:"auto auto 20px 20px",display:"grid",gridGap:20}},c.oO),c.ID),c.DF))}))((function(e){var n=e.tenant,t=e.classes,i=e.open,l=e.onClose,s=e.image,o=e.labels,c=e.annotations,u=e.nodeSelector,m=e.diskCapacityGB,g=e.serviceAccountName,x=e.dbLabels,A=e.dbAnnotations,C=e.dbNodeSelector,k=e.dbImage,w=e.dbServiceAccountName,L=(0,r.useState)({}),I=(0,a.Z)(L,2),E=I[0],z=I[1],D=(0,r.useState)(o.length>0?(0,p.Z)(o):[{key:"",value:""}]),P=(0,a.Z)(D,2),T=P[0],F=P[1],G=(0,r.useState)(c.length>0?(0,p.Z)(c):[{key:"",value:""}]),R=(0,a.Z)(G,2),V=R[0],B=R[1],O=(0,r.useState)(u.length>0?(0,p.Z)(u):[{key:"",value:""}]),M=(0,a.Z)(O,2),K=M[0],$=M[1],q=(0,r.useState)(s),_=(0,a.Z)(q,2),W=_[0],H=_[1],U=(0,r.useState)(m),Y=(0,a.Z)(U,2),J=Y[0],Q=Y[1],X=(0,r.useState)(null!=g?g:""),ee=(0,a.Z)(X,2),ne=ee[0],te=ee[1],ae=(0,r.useState)(x.length>0?(0,p.Z)(x):[{key:"",value:""}]),ie=(0,a.Z)(ae,2),re=ie[0],le=ie[1],se=(0,r.useState)(A.length>0?(0,p.Z)(A):[{key:"",value:""}]),oe=(0,a.Z)(se,2),ce=oe[0],de=oe[1],ue=(0,r.useState)(C.length>0?(0,p.Z)(C):[{key:"",value:""}]),me=(0,a.Z)(ue,2),ge=me[0],he=me[1],xe=(0,r.useState)(k),be=(0,a.Z)(xe,2),pe=be[0],ve=be[1],fe=(0,r.useState)(null!=w?w:""),je=(0,a.Z)(fe,2),Ze=je[0],Ne=je[1],Se=(0,r.useState)({}),ye=(0,a.Z)(Se,2),Ae=ye[0],Ce=ye[1],ke=(0,r.useState)({}),we=(0,a.Z)(ke,2),Le=we[0],Ie=we[1],Ee=(0,r.useState)({}),ze=(0,a.Z)(Ee,2),De=ze[0],Pe=ze[1],Te=(0,r.useState)({}),Fe=(0,a.Z)(Te,2),Ge=Fe[0],Re=Fe[1],Ve=(0,r.useState)({}),Be=(0,a.Z)(Ve,2),Oe=Be[0],Me=Be[1],Ke=(0,r.useState)({}),$e=(0,a.Z)(Ke,2),qe=$e[0],_e=$e[1],We=function(e){for(var n=[],t=0;t<e.length;t++)""!==e[t].key&&n.push(e[t]);return n},He=function(e){z((0,S.h)(E,e))};(0,r.useEffect)((function(){var e=[];e.push({fieldKey:"image",required:!1,value:W,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"dbImage",required:!1,value:pe,pattern:/^([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9]?)+(\/(([a-zA-Z0-9])([a-zA-Z0-9-._])*([a-zA-Z0-9])?)+)*:([a-zA-Z0-9])[a-zA-Z0-9-.]{0,127}$/,customPatternMessage:"Invalid image"}),e.push({fieldKey:"diskCapacityGB",required:!0,value:J,pattern:/^[0-9]*$/,customPatternMessage:"Must be an integer between 0 and 10"}),e.push({fieldKey:"serviceAccountName",required:!1,value:ne,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid service account name"}),e.push({fieldKey:"dbServiceAccountName",required:!1,value:Ze,pattern:/^[a-zA-Z0-9-.]{1,253}$/,customPatternMessage:"Invalid service account name"});var n=(0,N.R)(e);z(n)}),[W,pe,J,ne,Ze,z]);var Ue=function(){return 0===Object.keys(E).length&&0===Object.keys(Ae).length&&0===Object.keys(Le).length&&0===Object.keys(De).length&&0===Object.keys(Ge).length&&0===Object.keys(Oe).length&&0===Object.keys(qe).length};return(0,y.jsx)(v.Z,{onClose:function(){return l(!0)},modalOpen:i,title:"Edit Logging",children:(0,y.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),Ue()?h.Z.invoke("PUT","/api/v1/namespaces/".concat(n.namespace,"/tenants/").concat(n.name,"/log"),{labels:We(T),annotations:We(V),nodeSelector:We(K),image:W,diskCapacityGB:J,serviceAccountName:ne,dbLabels:We(re),dbAnnotations:We(ce),dbNodeSelector:We(ge),dbImage:pe,dbServiceAccountName:Ze}).then((function(){l(!0)})).catch((function(e){})):(0,b.zb)({errorMessage:"Some fields have invalid values",detailedError:""})},children:(0,y.jsxs)(d.ZP,{container:!0,children:[(0,y.jsxs)(d.ZP,{xs:12,className:t.modalFormScrollable,children:[(0,y.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,y.jsx)("h4",{children:"Logging API "})}),(0,y.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,y.jsx)(Z.Z,{id:"image",label:"Image",placeholder:"Image",name:"image",value:W,onChange:function(e){H(e.target.value),He("image")},error:E.image||""},"image")}),(0,y.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,y.jsx)(Z.Z,{id:"diskCapacityGB",label:"Disk Capacity (GB)",placeholder:"Disk Capacity (GB)",name:"diskCapacityGB",value:J,onChange:function(e){Q(e.target.value),He("diskCapacityGB")},error:E.diskCapacityGB||""},"diskCapacityGB")}),(0,y.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,y.jsx)(Z.Z,{id:"serviceAccountName",label:"Service Account",placeholder:"Service Account Name",name:"serviceAccountName",value:ne,onChange:function(e){te(e.target.value),He("serviceAccountName")},error:E.serviceAccountName||""},"serviceAccountName")}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,y.jsx)("span",{className:t.inputLabel,children:"Labels"}),(0,y.jsx)(j.Z,{newValues:T,setNewValues:F,paramName:"Labels",error:Ae,setError:Ce})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,y.jsx)("span",{className:t.inputLabel,children:"Annotations"}),(0,y.jsx)(j.Z,{newValues:V,setNewValues:B,paramName:"Annotations",error:Le,setError:Ie})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,y.jsx)("span",{className:t.inputLabel,children:"Node Selector"}),(0,y.jsx)(j.Z,{newValues:K,setNewValues:$,paramName:"Node Selector",error:De,setError:Pe})]}),(0,y.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,y.jsx)("h4",{children:"Database Configuration "})}),(0,y.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,y.jsx)(Z.Z,{id:"dbImage",label:"Postgres Image",placeholder:"Db Image",name:"dbImage",value:pe,onChange:function(e){ve(e.target.value),He("dbImage")},error:E.dbImage||""},"dbImage")}),(0,y.jsx)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:(0,y.jsx)(Z.Z,{id:"dbServiceAccountName",label:"Service Account",placeholder:"Db Service Account Name",name:"dbServiceAccountName",value:Ze,onChange:function(e){Ne(e.target.value),He("dbServiceAccountName")},error:E.dbServiceAccountName||""},"dbServiceAccountName")}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,y.jsx)("span",{className:t.inputLabel,children:"Labels"}),(0,y.jsx)(j.Z,{newValues:re,setNewValues:le,paramName:"Db Labels",error:Ge,setError:Re})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,y.jsx)("span",{className:t.inputLabel,children:"Annotations"}),(0,y.jsx)(j.Z,{newValues:ce,setNewValues:de,paramName:"Db Annotations",error:Oe,setError:Me})]}),(0,y.jsxs)(d.ZP,{item:!0,xs:12,className:t.formFieldRow,children:[(0,y.jsx)("span",{className:t.inputLabel,children:"Node Selector"}),(0,y.jsx)(j.Z,{newValues:ge,setNewValues:he,paramName:"DbNode Selector",error:qe,setError:_e})]})]}),(0,y.jsx)(d.ZP,{xs:12,className:t.buttonContainer,children:(0,y.jsx)(f.Z,{type:"submit",variant:"contained",color:"primary",disabled:!Ue(),children:"Save"})})]})})})})),C=t(88370),k=t(60656),w=t(92440),L=t(53224),I=(0,l.$j)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo}}),null),E=(0,o.Z)((function(e){return(0,s.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({},c.oZ),{},{headerLabel:{fontSize:22,fontWeight:600,color:"#000",marginTop:4},breadcrumLink:{textDecoration:"none",color:"black"},tableWrapper:{height:"calc(100vh - 267px)"},paperContainer:{padding:"15px 15px 15px 50px"}},c.OR),c.qg),(0,c.Bz)(e.spacing(4))))}))(I((function(e){var n,t,i,l=e.classes,s=e.match,o=e.tenant,c=e.loadingTenant,p=(0,r.useState)(!0),v=(0,a.Z)(p,2),f=v[0],j=v[1],Z=(0,r.useState)(),N=(0,a.Z)(Z,2),S=N[0],I=N[1],E=(0,r.useState)(!1),z=(0,a.Z)(E,2),D=z[0],P=z[1],T=(0,r.useState)(!1),F=(0,a.Z)(T,2),G=F[0],R=F[1],V=(0,r.useState)(!1),B=(0,a.Z)(V,2),O=B[0],M=B[1],K=(0,r.useState)(!1),$=(0,a.Z)(K,2),q=$[0],_=$[1],W=(0,r.useState)(!1),H=(0,a.Z)(W,2),U=H[0],Y=H[1],J=s.params.tenantName,Q=s.params.tenantNamespace;(0,r.useEffect)((function(){f&&h.Z.invoke("GET","/api/v1/namespaces/".concat(Q,"/tenants/").concat(J,"/log")).then((function(e){I(e),M(e.disabled),R(e.disabled),j(!1)})).catch((function(e){(0,b.Ih)({errorMessage:"Error getting tenant logs",detailedError:e.detailedError})}))}),[J,Q,f,R,G]);var X=function(){_(!1),P(!1),j(!0)};return(0,y.jsxs)(r.Fragment,{children:[(0,y.jsx)(k.Z,{title:"Disable Logging?",confirmText:"Disable",isOpen:q,onConfirm:function(){h.Z.invoke("POST","/api/v1/namespaces/".concat(Q,"/tenants/").concat(J,"/disable-logging")).then((function(){M(!0),R(!0)})).catch((function(e){(0,b.Ih)({errorMessage:"Error disabling logging",detailedError:e.detailedError})})),X()},onClose:function(){return _(!1)},confirmationContent:(0,y.jsx)(u.Z,{children:"Disabling logging will erase any custom values you have used to configure logging"})}),(0,y.jsx)(k.Z,{title:"Enable Logging?",confirmText:"Enable",isOpen:U,onConfirm:function(){h.Z.invoke("POST","/api/v1/namespaces/".concat(Q,"/tenants/").concat(J,"/enable-logging")).then((function(){M(!1)})).catch((function(e){(0,b.Ih)({errorMessage:"Error enabling logging",detailedError:e.detailedError})})),Y(!1),R(!1),j(!0)},onClose:function(){return Y(!1)},confirmationContent:(0,y.jsx)(u.Z,{children:"Logging will be enabled with default values"})}),D&&null!==o&&null!=S&&!G&&(0,y.jsx)(A,{open:D,onClose:X,tenant:o,image:S.image,labels:S.labels,annotations:S.annotations,nodeSelector:S.nodeSelector,diskCapacityGB:S.diskCapacityGB,serviceAccountName:S.serviceAccountName,dbImage:S.dbImage,dbLabels:S.dbLabels,dbAnnotations:S.dbAnnotations,dbNodeSelector:S.dbNodeSelector,dbServiceAccountName:S.dbServiceAccountName}),(0,y.jsx)("h1",{className:l.sectionTitle,children:"Logging"}),(0,y.jsxs)("div",{className:l.actionsTray,children:[(0,y.jsx)(w.Z,{value:"enableLogging",id:"enableLogging",name:"enableLogging",checked:!O,onChange:function(e){e.target.checked?Y(!0):_(!0)},label:"Logging",indicatorLabels:["Enabled","Disabled"]}),!G&&!f&&(0,y.jsx)(L.Z,{tooltip:"Edit Logging configuration",text:"Edit",onClick:function(){P(!0)},icon:(0,y.jsx)(x.dY,{}),color:"primary",variant:"contained"})]}),!G&&!f&&(0,y.jsx)(g.Z,{className:l.paperContainer,children:(0,y.jsx)(d.ZP,{container:!0,children:(0,y.jsxs)(d.ZP,{item:!0,xs:12,children:[(0,y.jsx)("h2",{children:"Logging API Service Details"}),(0,y.jsx)("hr",{className:l.hrClass}),(0,y.jsx)("table",{width:"100%",children:(0,y.jsx)("tbody",{children:c?(0,y.jsx)("tr",{children:(0,y.jsx)("td",{className:l.centerAlign,colSpan:4,children:(0,y.jsx)(m.Z,{})})}):(0,y.jsxs)(r.Fragment,{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{className:l.titleCol,children:"Image:"}),(0,y.jsx)("td",{children:null===S||void 0===S?void 0:S.image})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{className:l.titleCol,children:"Disk Capacity (GB):"}),(0,y.jsx)("td",{children:null===S||void 0===S?void 0:S.diskCapacityGB})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{className:l.titleCol,children:"Service Account:"}),(0,y.jsx)("td",{children:null===S||void 0===S?void 0:S.serviceAccountName})]}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)("h4",{children:"Labels"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)(C.Z,{records:null!=S&&S.labels.length>0?S.labels:[],recordName:"Labels"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)("h4",{children:"Annotations"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)(C.Z,{records:null!=S&&S.annotations.length>0?S.annotations:[],recordName:"Annotations"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)("h4",{children:"Node Selector"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)(C.Z,{records:null!=S&&S.nodeSelector.length>0?S.nodeSelector:[],recordName:"Node Selector"})})})]})})}),(0,y.jsx)("h2",{children:"Database Details"}),(0,y.jsx)("hr",{className:l.hrClass}),(0,y.jsx)("table",{width:"100%",children:(0,y.jsx)("tbody",{children:c?(0,y.jsx)("tr",{children:(0,y.jsx)("td",{className:l.centerAlign,colSpan:4,children:(0,y.jsx)(m.Z,{})})}):(0,y.jsxs)(r.Fragment,{children:[(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{className:l.titleCol,children:"Postgres Image:"}),(0,y.jsx)("td",{children:null===S||void 0===S?void 0:S.dbImage})]}),(0,y.jsxs)("tr",{children:[(0,y.jsx)("td",{className:l.titleCol,children:"Service Account:"}),(0,y.jsx)("td",{children:null===S||void 0===S?void 0:S.dbServiceAccountName})]}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)("h4",{children:"Labels"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)(C.Z,{records:null!=S&&(null===(n=S.dbLabels)||void 0===n?void 0:n.length)>0?S.dbLabels:[],recordName:"labels"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)("h4",{children:"Annotations"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)(C.Z,{records:null!=S&&(null===(t=S.dbAnnotations)||void 0===t?void 0:t.length)>0?S.dbAnnotations:[],recordName:"annotations"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)("h4",{children:"Node Selector"})})}),(0,y.jsx)("tr",{children:(0,y.jsx)("td",{children:(0,y.jsx)(C.Z,{records:null!=S&&(null===(i=S.dbNodeSelector)||void 0===i?void 0:i.length)>0?S.dbNodeSelector:[],recordName:"node selectors"})})})]})})})]})})})]})})))}}]);
//# sourceMappingURL=3320.646cbb74.chunk.js.map