"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[692],{99604:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var a=t(1413),i=t(72791),o=t(57689),s=t(11135),r=t(23814),l=t(61889),c=t(45248),u=t(40986),d=t(74794),f=t(28371),m=t(29439),x=t(26181),p=t.n(x),v=t(25787),g=t(21435),h=t(35527),y=t(81207),j=t(90673),b=t(25469),C=t(78687),Z=t(40968),N=t(56578),_=t(45830),P=t(80007),A=t(80184),S=(0,v.Z)((function(e){return(0,s.Z)((0,a.Z)((0,a.Z)({bottomContainer:{display:"flex",flexGrow:1,alignItems:"center",margin:"auto",justifyContent:"center","& div":{width:150,"@media (max-width: 900px)":{flexFlow:"column"}}},factorElements:{display:"flex",justifyContent:"flex-start",marginLeft:30},sizeNumber:{fontSize:35,fontWeight:700,textAlign:"center"},sizeDescription:{fontSize:14,color:"#777",textAlign:"center"}},r.DF),r.AK))}))((function(e){var n=e.classes,t=(0,b.TL)(),a=(0,C.v9)((function(e){return e.tenants.tenantInfo})),o=(0,C.v9)((function(e){return e.addPool.storageClasses})),s=(0,C.v9)((function(e){return e.addPool.setup.numberOfNodes.toString()})),r=(0,C.v9)((function(e){return e.addPool.setup.storageClass})),u=(0,C.v9)((function(e){return e.addPool.setup.volumeSize.toString()})),d=(0,C.v9)((function(e){return e.addPool.setup.volumesPerServer.toString()})),f=(0,i.useState)({}),x=(0,m.Z)(f,2),v=x[0],S=x[1],k=1073741824*parseInt(u)*parseInt(d),I=k*parseInt(s);(0,i.useEffect)((function(){var e=[{fieldKey:"number_of_nodes",required:!0,value:s.toString(),customValidation:parseInt(s)<1||isNaN(parseInt(s)),customValidationMessage:"Number of servers must be at least 1"},{fieldKey:"pool_size",required:!0,value:u.toString(),customValidation:parseInt(u)<1||isNaN(parseInt(u)),customValidationMessage:"Pool Size cannot be 0"},{fieldKey:"volumes_per_server",required:!0,value:d.toString(),customValidation:parseInt(d)<1||isNaN(parseInt(d)),customValidationMessage:"1 volume or more are required"}],n=(0,Z.R)(e);t((0,_.LJ)({page:"setup",status:0===Object.keys(n).length})),S(n)}),[t,s,u,d,r]),(0,i.useEffect)((function(){0===o.length&&a&&y.Z.invoke("GET","/api/v1/namespaces/".concat(a.namespace,"/resourcequotas/").concat(a.namespace,"-storagequota")).then((function(e){var n=p()(e,"elements",[]).map((function(e){var n=p()(e,"name","").split(".storageclass.storage.k8s.io/requests.storage")[0];return{label:n,value:n}}));t((0,_.oo)({page:"setup",field:"storageClass",value:n[0].value})),t((0,_.TU)(n))})).catch((function(e){console.error(e)}))}),[a,o,t]);var w=function(e,n){t((0,_.oo)({page:"setup",field:e,value:n}))};return(0,A.jsxs)(h.Z,{className:n.paperWrapper,children:[(0,A.jsxs)("div",{className:n.headerElement,children:[(0,A.jsx)(P.Z,{children:"New Pool Configuration"}),(0,A.jsx)("span",{className:n.descriptionText,children:"Configure a new Pool to expand MinIO storage"})]}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,A.jsx)(g.Z,{id:"number_of_nodes",name:"number_of_nodes",onChange:function(e){var n=parseInt(e.target.value);e.target.validity.valid&&!isNaN(n)?w("numberOfNodes",n):isNaN(n)&&w("numberOfNodes",0)},label:"Number of Servers",value:s,error:v.number_of_nodes||"",pattern:"[0-9]*"})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,A.jsx)(g.Z,{id:"pool_size",name:"pool_size",onChange:function(e){var n=parseInt(e.target.value);e.target.validity.valid&&!isNaN(n)?w("volumeSize",n):isNaN(n)&&w("volumeSize",0)},label:"Volume Size",value:u,error:v.pool_size||"",pattern:"[0-9]*",overlayObject:(0,A.jsx)(N.Z,{id:"quota_unit",onUnitChange:function(){},unitSelected:"Gi",unitsList:[{label:"Gi",value:"Gi"}],disabled:!0})})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,A.jsx)(g.Z,{id:"volumes_per_sever",name:"volumes_per_sever",onChange:function(e){var n=parseInt(e.target.value);e.target.validity.valid&&!isNaN(n)?w("volumesPerServer",n):isNaN(n)&&w("volumesPerServer",0)},label:"Volumes per Server",value:d,error:v.volumes_per_server||"",pattern:"[0-9]*"})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.formFieldRow,children:(0,A.jsx)(j.Z,{id:"storage_class",name:"storage_class",onChange:function(e){w("storageClass",e.target.value)},label:"Storage Class",value:r,options:o,disabled:o.length<1})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.bottomContainer,children:(0,A.jsxs)("div",{className:n.factorElements,children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{className:n.sizeNumber,children:(0,c.ae)(k.toString(10))}),(0,A.jsx)("div",{className:n.sizeDescription,children:"Instance Capacity"})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("div",{className:n.sizeNumber,children:(0,c.ae)(I.toString(10))}),(0,A.jsx)("div",{className:n.sizeDescription,children:"Total Capacity"})]})]})})]})})),k=t(14917),I=t(75952),w=t(93433),F=t(84741),G=t(37516),R=(0,v.Z)((function(e){return(0,s.Z)((0,a.Z)((0,a.Z)({configSectionItem:{marginRight:15,"& .multiContainer":{border:"1px solid red"}},tenantCustomizationFields:{marginLeft:30,width:"88%",margin:"auto"},containerItem:{marginRight:15},fieldGroup:(0,a.Z)((0,a.Z)({},r.QV.fieldGroup),{},{paddingTop:15,marginBottom:25}),responsiveSectionItem:{"@media (max-width: 900px)":{flexFlow:"column",alignItems:"flex-start","& div > div":{marginBottom:5,marginRight:0}}}},r.oO),r.AK))}))((function(e){var n=e.classes,t=(0,b.TL)(),o=(0,C.v9)((function(e){return e.addPool.configuration.securityContextEnabled})),s=(0,C.v9)((function(e){return e.addPool.configuration.securityContext})),r=(0,C.v9)((function(e){return e.addPool.configuration.customRuntime})),c=(0,C.v9)((function(e){return e.addPool.configuration.runtimeClassName})),u=(0,i.useState)({}),d=(0,m.Z)(u,2),f=d[0],x=d[1],p=(0,i.useCallback)((function(e,n){t((0,_.oo)({page:"configuration",field:e,value:n}))}),[t]);(0,i.useEffect)((function(){var e=[];o&&(e=[].concat((0,w.Z)(e),[{fieldKey:"pool_securityContext_runAsUser",required:!0,value:s.runAsUser,customValidation:""===s.runAsUser||parseInt(s.runAsUser)<0,customValidationMessage:"runAsUser must be present and be 0 or more"},{fieldKey:"pool_securityContext_runAsGroup",required:!0,value:s.runAsGroup,customValidation:""===s.runAsGroup||parseInt(s.runAsGroup)<0,customValidationMessage:"runAsGroup must be present and be 0 or more"},{fieldKey:"pool_securityContext_fsGroup",required:!0,value:s.fsGroup,customValidation:""===s.fsGroup||parseInt(s.fsGroup)<0,customValidationMessage:"fsGroup must be present and be 0 or more"}]));var n=(0,Z.R)(e);t((0,_.LJ)({page:"configure",status:0===Object.keys(n).length})),x(n)}),[t,o,s]);var v=function(e){x((0,F.he)(f,e))};return(0,A.jsxs)(h.Z,{className:n.paperWrapper,children:[(0,A.jsxs)("div",{className:n.headerElement,children:[(0,A.jsx)(P.Z,{children:"Configure"}),(0,A.jsx)("span",{className:n.descriptionText,children:"Aditional Configurations for the new Pool"})]}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.configSectionItem,children:(0,A.jsx)(G.Z,{value:"tenantConfig",id:"pool_configuration",name:"pool_configuration",checked:o,onChange:function(e){var n=e.target.checked;p("securityContextEnabled",n)},label:"Security Context"})}),o&&(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.tenantCustomizationFields,children:(0,A.jsxs)("fieldset",{className:n.fieldGroup,children:[(0,A.jsx)("legend",{className:n.descriptionText,children:"Pool's Security Context"}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:"".concat(n.configSectionItem),children:(0,A.jsxs)("div",{className:"".concat(n.multiContainer," ").concat(n.responsiveSectionItem),children:[(0,A.jsx)("div",{className:n.containerItem,children:(0,A.jsx)(g.Z,{type:"number",id:"pool_securityContext_runAsUser",name:"pool_securityContext_runAsUser",onChange:function(e){p("securityContext",(0,a.Z)((0,a.Z)({},s),{},{runAsUser:e.target.value})),v("pool_securityContext_runAsUser")},label:"Run As User",value:s.runAsUser,required:!0,error:f.pool_securityContext_runAsUser||"",min:"0"})}),(0,A.jsx)("div",{className:n.containerItem,children:(0,A.jsx)(g.Z,{type:"number",id:"pool_securityContext_runAsGroup",name:"pool_securityContext_runAsGroup",onChange:function(e){p("securityContext",(0,a.Z)((0,a.Z)({},s),{},{runAsGroup:e.target.value})),v("pool_securityContext_runAsGroup")},label:"Run As Group",value:s.runAsGroup,required:!0,error:f.pool_securityContext_runAsGroup||"",min:"0"})}),(0,A.jsx)("div",{className:n.containerItem,children:(0,A.jsx)(g.Z,{type:"number",id:"pool_securityContext_fsGroup",name:"pool_securityContext_fsGroup",onChange:function(e){p("securityContext",(0,a.Z)((0,a.Z)({},s),{},{fsGroup:e.target.value})),v("pool_securityContext_fsGroup")},label:"FsGroup",value:s.fsGroup,required:!0,error:f.pool_securityContext_fsGroup||"",min:"0"})})]})}),(0,A.jsx)("br",{}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.configSectionItem,children:(0,A.jsx)("div",{className:n.multiContainer,children:(0,A.jsx)(G.Z,{value:"securityContextRunAsNonRoot",id:"pool_securityContext_runAsNonRoot",name:"pool_securityContext_runAsNonRoot",checked:s.runAsNonRoot,onChange:function(e){var n=e.target.checked;p("securityContext",(0,a.Z)((0,a.Z)({},s),{},{runAsNonRoot:n}))},label:"Do not run as Root"})})})]})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.configSectionItem,sx:{marginTop:"10px"},children:(0,A.jsx)(G.Z,{value:"customRuntime",id:"tenant_custom_runtime",name:"tenant_custom_runtime",checked:r,onChange:function(e){var n=e.target.checked;p("customRuntime",n)},label:"Custom Runtime Configurations"})}),r&&(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.tenantCustomizationFields,children:(0,A.jsxs)("fieldset",{className:n.fieldGroup,children:[(0,A.jsx)("legend",{className:n.descriptionText,children:"Custom Runtime Configurations"}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:"".concat(n.configSectionItem),children:(0,A.jsx)("div",{className:n.containerItem,children:(0,A.jsx)(g.Z,{id:"tenant_runtime_runtimeClassName",name:"tenant_runtime_runtimeClassName",onChange:function(e){p("runtimeClassName",e.target.value),v("tenant_runtime_runtimeClassName")},label:"Runtime Class Name",value:c,error:f.tenant_runtime_runtimeClassName||""})})})]})})]})})),z=t(4942),T=t(13400),E=t(83679),L=t(45660),V=t(87995),O=(0,v.Z)((function(e){return(0,s.Z)((0,a.Z)((0,a.Z)({overlayAction:{marginLeft:10,display:"flex",alignItems:"center","& svg":{maxWidth:15,maxHeight:15},"& button":{background:"#EAEAEA"}},affinityConfigField:{display:"flex"},affinityFieldLabel:{display:"flex",flexFlow:"column",flex:1},radioField:{display:"flex",alignItems:"flex-start",marginTop:10,"& div:first-child":{display:"flex",flexFlow:"column",alignItems:"baseline",textAlign:"left !important"}},affinityLabelKey:{"& div:first-child":{marginBottom:0}},affinityLabelValue:{marginLeft:10,"& div:first-child":{marginBottom:0}},rowActions:{display:"flex",alignItems:"center"},affinityRow:{marginBottom:10,display:"flex"}},r.oO),r.AK))}))((function(e){var n=e.classes,t=(0,b.TL)(),o=(0,C.v9)((function(e){return e.addPool.affinity.podAffinity})),s=(0,C.v9)((function(e){return e.addPool.affinity.nodeSelectorLabels})),r=(0,C.v9)((function(e){return e.addPool.affinity.withPodAntiAffinity})),c=(0,C.v9)((function(e){return e.addPool.nodeSelectorPairs})),u=(0,C.v9)((function(e){return e.addPool.tolerations})),d=(0,i.useState)({}),f=(0,m.Z)(d,2),x=f[0],p=f[1],v=(0,i.useState)(!0),N=(0,m.Z)(v,2),S=N[0],k=N[1],F=(0,i.useState)({}),R=(0,m.Z)(F,2),O=R[0],U=R[1],q=(0,i.useState)([]),K=(0,m.Z)(q,2),M=K[0],B=K[1],D=(0,i.useCallback)((function(e,n){t((0,_.oo)({page:"affinity",field:e,value:n}))}),[t]);(0,i.useEffect)((function(){S&&y.Z.invoke("GET","/api/v1/nodes/labels").then((function(e){k(!1),U(e);var n=[];for(var t in e)n.push({label:t,value:t});B(n)})).catch((function(e){k(!1),t((0,V.zb)(e)),U({})}))}),[t,S]),(0,i.useEffect)((function(){if(c){var e=c.filter((function(e){return""!==e.key})).map((function(e){return"".concat(e.key,"=").concat(e.value)})).filter((function(e,n,t){return t.indexOf(e)===n})).join("&");D("nodeSelectorLabels",e)}}),[c,D]),(0,i.useEffect)((function(){var e=[];if("nodeSelector"===o){var n=!0,a=s.split("&");1===a.length&&""===a[0]&&(n=!1),a.forEach((function(e,t){var i=e.split("=");2!==i.length&&(n=!1),t+1!==a.length&&(""!==i[0]&&""!==i[1]||(n=!1))})),e=[].concat((0,w.Z)(e),[{fieldKey:"labels",required:!0,value:s,customValidation:!n,customValidationMessage:"You need to add at least one label key-pair"}])}var i=(0,Z.R)(e);t((0,_.LJ)({page:"affinity",status:0===Object.keys(i).length})),p(i)}),[t,o,s]);var W=function(e,n,i){var o=(0,a.Z)((0,a.Z)({},u[e]),{},(0,z.Z)({},n,i));t((0,_.fu)({index:e,tolerationValue:o}))};return(0,A.jsxs)(h.Z,{className:n.paperWrapper,children:[(0,A.jsxs)("div",{className:n.headerElement,children:[(0,A.jsx)(P.Z,{children:"Pod Placement"}),(0,A.jsx)("span",{className:n.descriptionText,children:"Configure how pods will be assigned to nodes"})]}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.affinityConfigField,children:(0,A.jsxs)(l.ZP,{item:!0,className:n.affinityFieldLabel,children:[(0,A.jsx)("div",{className:n.label,children:"Type"}),(0,A.jsx)("div",{className:"".concat(n.descriptionText," ").concat(n.affinityHelpText),children:"MinIO supports multiple configurations for Pod Affinity"}),(0,A.jsx)(l.ZP,{item:!0,className:n.radioField,children:(0,A.jsx)(E.Z,{currentSelection:o,id:"affinity-options",name:"affinity-options",label:" ",onChange:function(e){D("podAffinity",e.target.value)},selectorOptions:[{label:"None",value:"none"},{label:"Default (Pod Anti-Affinity)",value:"default"},{label:"Node Selector",value:"nodeSelector"}]})})]})}),"nodeSelector"===o&&(0,A.jsxs)(i.Fragment,{children:[(0,A.jsx)("br",{}),(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(G.Z,{value:"with_pod_anti_affinity",id:"with_pod_anti_affinity",name:"with_pod_anti_affinity",checked:r,onChange:function(e){var n=e.target.checked;D("withPodAntiAffinity",n)},label:"With Pod Anti-Affinity"})}),(0,A.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,A.jsx)("h3",{children:"Labels"}),(0,A.jsx)("span",{className:n.error,children:x.labels}),(0,A.jsx)(l.ZP,{container:!0,children:c&&c.map((function(e,a){return(0,A.jsxs)(l.ZP,{item:!0,xs:12,className:n.affinityRow,children:[(0,A.jsxs)(l.ZP,{item:!0,xs:5,className:n.affinityLabelKey,children:[M.length>0&&(0,A.jsx)(j.Z,{onChange:function(e){var n=e.target.value,i={key:n,value:O[n][0]},o=(0,w.Z)(c);o[a]=i,t((0,_.bF)(o))},id:"select-access-policy",name:"select-access-policy",label:"",value:e.key,options:M}),0===M.length&&(0,A.jsx)(g.Z,{id:"nodeselector-key-".concat(a.toString()),label:"",name:"nodeselector-".concat(a.toString()),value:e.key,onChange:function(e){var n=(0,w.Z)(c);n[a]={key:n[a].key,value:e.target.value},t((0,_.bF)(n))},index:a,placeholder:"Key"})]}),(0,A.jsxs)(l.ZP,{item:!0,xs:5,className:n.affinityLabelValue,children:[M.length>0&&(0,A.jsx)(j.Z,{onChange:function(e){var n=(0,w.Z)(c);n[a]={key:n[a].key,value:e.target.value},t((0,_.bF)(n))},id:"select-access-policy",name:"select-access-policy",label:"",value:e.value,options:O[e.key]?O[e.key].map((function(e){return{label:e,value:e}})):[]}),0===M.length&&(0,A.jsx)(g.Z,{id:"nodeselector-value-".concat(a.toString()),label:"",name:"nodeselector-".concat(a.toString()),value:e.value,onChange:function(e){var n=(0,w.Z)(c);n[a]={key:n[a].key,value:e.target.value},t((0,_.bF)(n))},index:a,placeholder:"value"})]}),(0,A.jsxs)(l.ZP,{item:!0,xs:2,className:n.rowActions,children:[(0,A.jsx)("div",{className:n.overlayAction,children:(0,A.jsx)(T.Z,{size:"small",onClick:function(){var e=(0,w.Z)(c);M.length>0?e.push({key:M[0].value,value:O[M[0].value][0]}):e.push({key:"",value:""}),t((0,_.bF)(e))},children:(0,A.jsx)(I.dtP,{})})}),c.length>1&&(0,A.jsx)("div",{className:n.overlayAction,children:(0,A.jsx)(T.Z,{size:"small",onClick:function(){var e=c.filter((function(e,n){return n!==a}));t((0,_.bF)(e))},children:(0,A.jsx)(I.HFL,{})})})]})]},"affinity-keyVal-".concat(a.toString()))}))})]})]}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:n.affinityConfigField,children:(0,A.jsxs)(l.ZP,{item:!0,className:n.affinityFieldLabel,children:[(0,A.jsx)("h3",{children:"Tolerations"}),(0,A.jsx)("span",{className:n.error,children:x.tolerations}),(0,A.jsx)(l.ZP,{container:!0,children:u&&u.map((function(e,a){var i;return(0,A.jsxs)(l.ZP,{item:!0,xs:12,className:n.affinityRow,children:[(0,A.jsx)(L.Z,{effect:e.effect,onEffectChange:function(e){W(a,"effect",e)},tolerationKey:e.key,onTolerationKeyChange:function(e){W(a,"key",e)},operator:e.operator,onOperatorChange:function(e){W(a,"operator",e)},value:e.value,onValueChange:function(e){W(a,"value",e)},tolerationSeconds:(null===(i=e.tolerationSeconds)||void 0===i?void 0:i.seconds)||0,onSecondsChange:function(e){W(a,"tolerationSeconds",{seconds:e})},index:a}),(0,A.jsx)("div",{className:n.overlayAction,children:(0,A.jsx)(T.Z,{size:"small",onClick:function(){t((0,_.hw)())},disabled:a!==u.length-1,children:(0,A.jsx)(I.dtP,{})})}),(0,A.jsx)("div",{className:n.overlayAction,children:(0,A.jsx)(T.Z,{size:"small",onClick:function(){return t((0,_.GF)(a))},disabled:u.length<=1,children:(0,A.jsx)(I.HFL,{})})})]},"affinity-keyVal-".concat(a.toString()))}))})]})})]})})),U=t(85617),q=function(){var e=(0,b.TL)(),n=(0,C.v9)((function(e){return e.addPool.setup.storageClass})),t=(0,C.v9)((function(e){return e.addPool.validPages})),a=!(0,C.v9)((function(e){return e.addPool.sending}))&&""!==n&&["setup","affinity","configure"].every((function(e){return t.includes(e)}));return(0,A.jsx)(I.zxk,{id:"wizard-button-Create",variant:"callAction",onClick:function(){e((0,U.P)())},disabled:!a,label:"Create"},"button-AddTenant-Create")},K=(0,t(72455).Z)((function(e){return(0,s.Z)((0,a.Z)((0,a.Z)({bottomContainer:{display:"flex",flexGrow:1,alignItems:"center",margin:"auto",justifyContent:"center","& div":{width:150,"@media (max-width: 900px)":{flexFlow:"column"}}},pageBox:{border:"1px solid #EAEAEA",borderTop:0},addPoolTitle:{border:"1px solid #EAEAEA",borderBottom:0}},r.DF),r.ID))})),M=function(){var e=(0,b.TL)(),n=(0,o.s0)(),t=K(),a=(0,C.v9)((function(e){return e.tenants.tenantInfo})),s=(0,C.v9)((function(e){return e.addPool.sending})),r=(0,C.v9)((function(e){return e.addPool.navigateTo})),m="/namespaces/".concat((null===a||void 0===a?void 0:a.namespace)||"","/tenants/").concat((null===a||void 0===a?void 0:a.name)||"","/pools");(0,i.useEffect)((function(){if(""!==r){var t="".concat(r);e((0,_.bU)()),n(t)}}),[r,n,e]);var x={label:"Cancel",type:"other",enabled:!0,action:function(){e((0,_.bU)()),n(m)}},p={componentRender:(0,A.jsx)(q,{},"add-pool-crate")},v=[{label:"Setup",componentRender:(0,A.jsx)(S,{}),buttons:[x,p]},{label:"Configuration",advancedOnly:!0,componentRender:(0,A.jsx)(R,{}),buttons:[x,p]},{label:"Pod Placement",advancedOnly:!0,componentRender:(0,A.jsx)(O,{}),buttons:[x,p]}];return(0,A.jsx)(i.Fragment,{children:(0,A.jsxs)(l.ZP,{item:!0,xs:12,children:[(0,A.jsx)(I.mr1,{label:(0,A.jsx)(i.Fragment,{children:(0,A.jsx)(I.hbI,{label:"Tenant Pools",onClick:function(){return n(m)}})})}),(0,A.jsxs)(d.Z,{children:[(0,A.jsx)(l.ZP,{item:!0,xs:12,className:t.addPoolTitle,children:(0,A.jsx)(k.Z,{icon:(0,A.jsx)(I.zb0,{}),title:"Add New Pool to ".concat((null===a||void 0===a?void 0:a.name)||""),subTitle:(0,A.jsxs)(i.Fragment,{children:["Namespace: ",(null===a||void 0===a?void 0:a.namespace)||""," / Current Capacity:"," ",(0,c.ae)(((null===a||void 0===a?void 0:a.total_size)||0).toString(10))]})})}),s&&(0,A.jsx)(l.ZP,{item:!0,xs:12,children:(0,A.jsx)(u.Z,{})}),(0,A.jsx)(l.ZP,{item:!0,xs:12,className:t.pageBox,children:(0,A.jsx)(f.Z,{wizardSteps:v})})]})]})})}}}]);
//# sourceMappingURL=692.1bb8a682.chunk.js.map