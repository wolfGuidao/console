"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[51],{51:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var i=t(29439),r=t(72791),a=t(26181),o=t.n(a),s=t(29945),l=t(78687),c=t(31776),u=t(38442),d=t(56087),x=t(9859),p=t(57689),f=t(87995),h=t(81551),v=t(82342),y=t(23508),m=t(80184),g=function(e){var n=e.onCloseAndRefresh,t=e.deleteOpen,a=e.bucket,o=e.id,l=(0,h.TL)(),u=(0,r.useState)(!1),d=(0,i.Z)(u,2),x=d[0],p=d[1];(0,r.useEffect)((function(){x&&c.h.buckets.deleteBucketLifecycleRule(a,o).then((function(){p(!1),n(!0)})).catch((function(e){p(!1),l((0,f.Ih)((0,v.g)(e.error)))}))}),[x,a,o,n,l]);return(0,m.jsx)(y.Z,{title:"Delete Lifecycle Rule",confirmText:"Delete",isOpen:t,isLoading:x,onConfirm:function(){p(!0)},titleIcon:(0,m.jsx)(s.NvT,{}),onClose:function(){return n(!1)},confirmationContent:(0,m.jsxs)(r.Fragment,{children:["Are you sure you want to delete the ",(0,m.jsx)("strong",{children:o})," rule?"]})})},j=t(1413),b=t(89673),_=t(55818),Z=t(20890),C=t(3721),S=t(40986),k=t(23814),F=t(56028),E=t(17420),T=function(e){var n,t,a,l,u,d=e.closeModalAndRefresh,x=e.selectedBucket,p=e.lifecycleRule,v=e.open,y=(0,h.TL)(),g=(0,r.useState)(!0),T=(0,i.Z)(g,2),I=T[0],L=T[1],O=(0,r.useState)(!1),N=(0,i.Z)(O,2),A=N[0],P=N[1],R=(0,r.useState)(""),w=(0,i.Z)(R,2),z=w[0],B=w[1],V=(0,r.useState)(!1),D=(0,i.Z)(V,2),W=D[0],M=D[1],Y=(0,r.useState)([]),K=(0,i.Z)(Y,2),U=K[0],G=K[1],Q=(0,r.useState)(""),$=(0,i.Z)(Q,2),q=$[0],H=$[1],X=(0,r.useState)(""),J=(0,i.Z)(X,2),ee=J[0],ne=J[1],te=(0,r.useState)(""),ie=(0,i.Z)(te,2),re=ie[0],ae=ie[1],oe=(0,r.useState)(!1),se=(0,i.Z)(oe,2),le=se[0],ce=se[1],ue=(0,r.useState)("0"),de=(0,i.Z)(ue,2),xe=de[0],pe=de[1],fe=(0,r.useState)("0"),he=(0,i.Z)(fe,2),ve=he[0],ye=he[1],me=(0,r.useState)("expiry"),ge=(0,i.Z)(me,2),je=ge[0],be=ge[1],_e=(0,r.useState)("0"),Ze=(0,i.Z)(_e,2),Ce=Ze[0],Se=Ze[1],ke=(0,r.useState)("0"),Fe=(0,i.Z)(ke,2),Ee=Fe[0],Te=Fe[1],Ie=(0,r.useState)(!1),Le=(0,i.Z)(Ie,2),Oe=Le[0],Ne=Le[1],Ae={"& .MuiPaper-root":{padding:0}};(0,r.useEffect)((function(){I&&c.h.admin.tiersList().then((function(e){var n=o()(e.data,"items",[]);if(null!==n&&n.length>=1){var t=n.map((function(e){var n=e.type,t=o()(e,"".concat(n,".name"),"");return{label:t,value:t}}));G(t),t.length>0&&ne(t[0].value)}L(!1)})).catch((function(){L(!1)}))}),[I]),(0,r.useEffect)((function(){var e=!0;"expiry"!==je&&""===ee&&(e=!1),Ne(e)}),[je,Ce,Ee,ee]),(0,r.useEffect)((function(){var e;"Enabled"===p.status&&M(!0);var n,t,i,r,a,o,s=!1;(p.transition&&(p.transition.days&&0!==p.transition.days&&(Te(p.transition.days.toString()),be("transition"),s=!0),p.transition.noncurrent_transition_days&&0!==p.transition.noncurrent_transition_days&&(ye(p.transition.noncurrent_transition_days.toString()),be("transition"),s=!0),p.transition.date&&"0001-01-01T00:00:00Z"!==p.transition.date&&(be("transition"),s=!0)),p.expiration&&(p.expiration.days&&0!==p.expiration.days&&(Se(p.expiration.days.toString()),be("expiry"),s=!1),p.expiration.noncurrent_expiration_days&&0!==p.expiration.noncurrent_expiration_days&&(pe(p.expiration.noncurrent_expiration_days.toString()),be("expiry"),s=!1),p.expiration.date&&"0001-01-01T00:00:00Z"!==p.expiration.date&&(be("expiry"),s=!1)),s)?(ne((null===(n=p.transition)||void 0===n?void 0:n.storage_class)||""),ye((null===(t=p.transition)||void 0===t||null===(i=t.noncurrent_transition_days)||void 0===i?void 0:i.toString())||"0"),ae((null===(r=p.transition)||void 0===r?void 0:r.noncurrent_storage_class)||"")):pe((null===(a=p.expiration)||void 0===a||null===(o=a.noncurrent_expiration_days)||void 0===o?void 0:o.toString())||"0");if(ce(!(null===(e=p.expiration)||void 0===e||!e.delete_marker)),H(p.prefix||""),p.tags){var l=p.tags.reduce((function(e,n,t){return"".concat(e).concat(0!==t?"&":"").concat(n.key,"=").concat(n.value)}),"");B(l)}}),[p]);var Pe="";return p.expiration&&(p.expiration.days>0?Pe="Current Version":p.expiration.noncurrent_expiration_days&&(Pe="Non-Current Version")),p.transition&&(p.transition.days>0?Pe="Current Version":p.transition.noncurrent_transition_days&&(Pe="Non-Current Version")),(0,m.jsx)(F.Z,{onClose:function(){d(!1)},modalOpen:v,title:"Edit Lifecycle Configuration",titleIcon:(0,m.jsx)(s.QIv,{}),children:(0,m.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),!A&&(P(!0),null!==x&&null!==p)){var n={};if("expiry"===je){var t,i,r,a={};null!==(t=p.expiration)&&void 0!==t&&t.days&&(null===(i=p.expiration)||void 0===i?void 0:i.days)>0&&(a.expiry_days=parseInt(Ce)),null!==(r=p.expiration)&&void 0!==r&&r.noncurrent_expiration_days&&(a.noncurrentversion_expiration_days=parseInt(xe)),n=(0,j.Z)({},a)}else{var o,s,l,u={};null!==(o=p.expiration)&&void 0!==o&&o.days&&(null===(s=p.expiration)||void 0===s?void 0:s.days)>0&&(u.transition_days=parseInt(Ce),u.storage_class=ee),null!==(l=p.expiration)&&void 0!==l&&l.noncurrent_expiration_days&&(u.noncurrentversion_transition_days=parseInt(xe),u.noncurrentversion_transition_storage_class=re),n=(0,j.Z)({},u)}var h=(0,j.Z)({type:je,disable:!W,prefix:q,tags:z,expired_object_delete_marker:le},n);c.h.buckets.updateBucketLifecycle(x,p.id,h).then((function(e){P(!1),d(!0)})).catch((function(e){P(!1),y((0,f.zb)(e))}))}}(e)},children:(0,m.jsxs)(s.ltY,{containerPadding:!1,withBorders:!1,children:[(0,m.jsx)(s.rsf,{label:"Status",indicatorLabels:["Enabled","Disabled"],checked:W,value:"user_enabled",id:"rule_status",name:"rule_status",onChange:function(e){M(e.target.checked)}}),(0,m.jsx)(s.Wzg,{id:"id",name:"id",label:"Id",value:p.id,onChange:function(){},disabled:!0}),(0,m.jsx)(s.Eep,{currentValue:je,id:"rule_type",name:"rule_type",label:"Rule Type",selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}],onChange:function(){},disableOptions:!0}),(0,m.jsx)(s.Wzg,{id:"object-version",name:"object-version",label:"Object Version",value:Pe,onChange:function(){},disabled:!0}),"expiry"===je&&(null===(n=p.expiration)||void 0===n?void 0:n.days)&&(0,m.jsx)(s.Wzg,{type:"number",id:"expiry_days",name:"expiry_days",onChange:function(e){Se(e.target.value)},label:"Expiry Days",value:Ce,min:"0"}),"expiry"===je&&(null===(t=p.expiration)||void 0===t?void 0:t.noncurrent_expiration_days)&&(0,m.jsx)(s.Wzg,{type:"number",id:"noncurrentversion_expiration_days",name:"noncurrentversion_expiration_days",onChange:function(e){pe(e.target.value)},label:"Non-current Expiration Days",value:xe,min:"0"}),"transition"===je&&(null===(a=p.transition)||void 0===a?void 0:a.days)&&(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(s.Wzg,{type:"number",id:"transition_days",name:"transition_days",onChange:function(e){Te(e.target.value)},label:"Transition Days",value:Ee,min:"0"}),(0,m.jsx)(s.PhF,{label:"Storage Class",id:"storage_class",name:"storage_class",value:ee,onChange:function(e){ne(e)},options:U})]}),"transition"===je&&(null===(l=p.transition)||void 0===l?void 0:l.noncurrent_transition_days)&&(0,m.jsxs)(r.Fragment,{children:[(0,m.jsx)(s.Wzg,{type:"number",id:"noncurrentversion_transition_days",name:"noncurrentversion_transition_days",onChange:function(e){ye(e.target.value)},label:"Non-current Transition Days",value:ve,min:"0"}),(0,m.jsx)(s.Wzg,{id:"noncurrentversion_t_SC",name:"noncurrentversion_t_SC",onChange:function(e){ae(e.target.value)},placeholder:"Set Non-current Version Transition Storage Class",label:"Non-current Version Transition Storage Class",value:re})]}),(0,m.jsx)(s.rjZ,{item:!0,xs:12,sx:Ae,children:(0,m.jsxs)(b.Z,{children:[(0,m.jsx)(_.Z,{children:(0,m.jsx)(Z.Z,{children:"Filters"})}),(0,m.jsxs)(C.Z,{children:[(0,m.jsx)(s.Wzg,{id:"prefix",name:"prefix",onChange:function(e){H(e.target.value)},label:"Prefix",value:q}),(0,m.jsx)(E.Z,{name:"tags",label:"Tags",elements:z,onChange:function(e){B(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})]})]})}),"expiry"===je&&(null===(u=p.expiration)||void 0===u?void 0:u.noncurrent_expiration_days)&&(0,m.jsx)(s.rjZ,{item:!0,xs:12,sx:Ae,children:(0,m.jsxs)(b.Z,{children:[(0,m.jsx)(_.Z,{children:(0,m.jsx)(Z.Z,{children:"Advanced"})}),(0,m.jsx)(C.Z,{children:(0,m.jsx)(s.rsf,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:le,onChange:function(e){ce(e.target.checked)},label:"Expired Object Delete Marker"})})]})}),(0,m.jsxs)(s.rjZ,{item:!0,xs:12,sx:k.ID.modalButtonBar,children:[(0,m.jsx)(s.zxk,{id:"cancel",type:"button",variant:"regular",disabled:A,onClick:function(){d(!1)},label:"Cancel"}),(0,m.jsx)(s.zxk,{id:"save",type:"submit",variant:"callAction",color:"primary",disabled:A||!Oe,label:"Save"})]}),A&&(0,m.jsx)(s.rjZ,{item:!0,xs:12,children:(0,m.jsx)(S.Z,{})})]})})})},I=t(84741),L=t(81159),O=function(e){var n=e.open,t=e.closeModalAndRefresh,a=e.bucketName,u=(0,h.TL)(),d=(0,l.v9)(f.N5),x=(0,r.useState)(!0),p=(0,i.Z)(x,2),y=p[0],g=p[1],T=(0,r.useState)([]),O=(0,i.Z)(T,2),N=O[0],A=O[1],P=(0,r.useState)(!1),R=(0,i.Z)(P,2),w=R[0],z=R[1],B=(0,r.useState)(null),V=(0,i.Z)(B,2),D=V[0],W=V[1],M=(0,r.useState)(""),Y=(0,i.Z)(M,2),K=Y[0],U=Y[1],G=(0,r.useState)(""),Q=(0,i.Z)(G,2),$=Q[0],q=Q[1],H=(0,r.useState)(""),X=(0,i.Z)(H,2),J=X[0],ee=X[1],ne=(0,r.useState)("expiry"),te=(0,i.Z)(ne,2),ie=te[0],re=te[1],ae=(0,r.useState)("current"),oe=(0,i.Z)(ae,2),se=oe[0],le=oe[1],ce=(0,r.useState)(""),ue=(0,i.Z)(ce,2),de=ue[0],xe=ue[1],pe=(0,r.useState)(!1),fe=(0,i.Z)(pe,2),he=fe[0],ve=fe[1],ye=(0,r.useState)(!1),me=(0,i.Z)(ye,2),ge=me[0],je=me[1],be=(0,r.useState)(!0),_e=(0,i.Z)(be,2),Ze=_e[0],Ce=_e[1],Se={"& .MuiPaper-root":{padding:0}};(0,r.useEffect)((function(){y&&c.h.admin.tiersList().then((function(e){var n=o()(e.data,"items",[]);if(null!==n&&n.length>=1){var t=n.map((function(e){var n=e.type,t=o()(e,"".concat(n,".name"),"");return{label:t,value:t}}));A(t),t.length>0&&ee(t[0].value)}g(!1)})).catch((function(){g(!1)}))}),[y]),(0,r.useEffect)((function(){var e=!0;"expiry"!==ie&&""===J&&(e=!1),ve(e)}),[ie,de,J]),(0,r.useEffect)((function(){Ze&&d&&c.h.buckets.getBucketVersioning(a).then((function(e){W(e.data),Ce(!1)})).catch((function(e){u((0,f.zb)((0,v.g)(e))),Ce(!1)}))}),[Ze,u,a,d]);return(0,m.jsxs)(F.Z,{modalOpen:n,onClose:function(){t(!1)},title:"Add Lifecycle Rule",titleIcon:(0,m.jsx)(s.QIv,{}),children:[y&&(0,m.jsx)(s.rjZ,{container:!0,children:(0,m.jsx)(s.rjZ,{item:!0,xs:12,children:(0,m.jsx)(S.Z,{})})}),!y&&(0,m.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),z(!0),function(){var e={};if("expiry"===ie){var n={};"current"===se?n.expiry_days=parseInt(de):n.noncurrentversion_expiration_days=parseInt(de),e=(0,j.Z)({},n)}else{var i={};"current"===se?(i.transition_days=parseInt(de),i.storage_class=J):(i.noncurrentversion_transition_days=parseInt(de),i.noncurrentversion_transition_storage_class=J),e=(0,j.Z)({},i)}var r=(0,j.Z)({type:ie,prefix:K,tags:$,expired_object_delete_marker:ge},e);c.h.buckets.addBucketLifecycle(a,r).then((function(){z(!1),t(!0)})).catch((function(e){z(!1),u((0,f.zb)((0,v.g)(e)))}))}()},children:(0,m.jsxs)(s.ltY,{withBorders:!1,containerPadding:!1,children:[(0,m.jsx)(s.Eep,{currentValue:ie,id:"ilm_type",name:"ilm_type",label:"Type of lifecycle",onChange:function(e){re(e.target.value)},selectorOptions:[{value:"expiry",label:"Expiry"},{value:"transition",label:"Transition"}]}),"Enabled"===(null===D||void 0===D?void 0:D.status)&&(0,m.jsx)(s.PhF,{value:se,id:"object_version",name:"object_version",label:"Object Version",onChange:function(e){le(e)},options:[{value:"current",label:"Current Version"},{value:"noncurrent",label:"Non-Current Version"}]}),(0,m.jsx)(s.Wzg,{id:"expiry_days",name:"expiry_days",onChange:function(e){e.target.validity.valid&&xe(e.target.value)},pattern:"[0-9]*",label:"After",value:de,overlayObject:(0,m.jsx)(I.Z,{id:"expire-current-unit",unitSelected:"days",unitsList:[{label:"Days",value:"days"}],disabled:!0})}),"expiry"===ie?(0,m.jsx)(r.Fragment,{}):(0,m.jsx)(s.PhF,{label:"To Tier",id:"storage_class",name:"storage_class",value:J,onChange:function(e){ee(e)},options:N}),(0,m.jsx)(s.rjZ,{item:!0,xs:12,sx:Se,children:(0,m.jsxs)(b.Z,{children:[(0,m.jsx)(_.Z,{children:(0,m.jsx)(Z.Z,{children:"Filters"})}),(0,m.jsxs)(C.Z,{children:[(0,m.jsx)(s.rjZ,{item:!0,xs:12,children:(0,m.jsx)(s.Wzg,{id:"prefix",name:"prefix",onChange:function(e){U(e.target.value)},label:"Prefix",value:K})}),(0,m.jsx)(s.rjZ,{item:!0,xs:12,children:(0,m.jsx)(E.Z,{name:"tags",label:"Tags",elements:"",onChange:function(e){q(e)},keyPlaceholder:"Tag Key",valuePlaceholder:"Tag Value",withBorder:!0})})]})]})}),"expiry"===ie&&"noncurrent"===se&&(0,m.jsx)(s.rjZ,{item:!0,xs:12,sx:Se,children:(0,m.jsxs)(b.Z,{children:[(0,m.jsx)(_.Z,{children:(0,m.jsx)(Z.Z,{children:"Advanced"})}),(0,m.jsx)(C.Z,{children:(0,m.jsx)(s.rjZ,{item:!0,xs:12,children:(0,m.jsx)(L.Z,{value:"expired_delete_marker",id:"expired_delete_marker",name:"expired_delete_marker",checked:ge,onChange:function(e){je(e.target.checked)},label:"Expire Delete Marker",description:"Remove the reference to the object if no versions are left"})})})]})}),(0,m.jsxs)(s.rjZ,{item:!0,xs:12,sx:k.ID.modalButtonBar,children:[(0,m.jsx)(s.zxk,{id:"reset",type:"button",variant:"regular",disabled:w,onClick:function(){t(!1)},label:"Cancel"}),(0,m.jsx)(s.zxk,{id:"save-lifecycle",type:"submit",variant:"callAction",color:"primary",disabled:w||!he,label:"Save"})]}),w&&(0,m.jsx)(s.rjZ,{item:!0,xs:12,children:(0,m.jsx)(S.Z,{})})]})})]})},N=t(27454),A=function(){var e=(0,l.v9)(x.HQ),n=(0,p.UO)(),t=(0,r.useState)(!0),a=(0,i.Z)(t,2),v=a[0],y=a[1],j=(0,r.useState)([]),b=(0,i.Z)(j,2),_=b[0],Z=b[1],C=(0,r.useState)(!1),S=(0,i.Z)(C,2),k=S[0],F=S[1],E=(0,r.useState)(!1),I=(0,i.Z)(E,2),L=I[0],A=I[1],P=(0,r.useState)(null),R=(0,i.Z)(P,2),w=R[0],z=R[1],B=(0,r.useState)(!1),V=(0,i.Z)(B,2),D=V[0],W=V[1],M=(0,r.useState)(null),Y=(0,i.Z)(M,2),K=Y[0],U=Y[1],G=(0,h.TL)(),Q=n.bucketName||"",$=(0,u.F)(Q,[d.Ft.S3_GET_LIFECYCLE_CONFIGURATION,d.Ft.S3_GET_ACTIONS]);(0,r.useEffect)((function(){e&&y(!0)}),[e,y]),(0,r.useEffect)((function(){G((0,f.Sc)("bucket_detail_lifecycle"))}),[]),(0,r.useEffect)((function(){v&&($?c.h.buckets.getBucketLifecycle(Q).then((function(e){var n=o()(e.data,"lifecycle",[]);Z(n||[]),y(!1)})).catch((function(e){console.error(e.error),Z([]),y(!1)})):y(!1))}),[v,y,Q,$]);var q=[{label:"Type",renderFullObject:!0,renderFunction:function(e){return e?e.expiration&&(e.expiration.days>0||e.expiration.noncurrent_expiration_days)?(0,m.jsx)("span",{children:"Expiry"}):e.transition&&(e.transition.days>0||e.transition.noncurrent_transition_days)?(0,m.jsx)("span",{children:"Transition"}):(0,m.jsx)(r.Fragment,{}):(0,m.jsx)(r.Fragment,{})}},{label:"Version",renderFullObject:!0,renderFunction:function(e){if(!e)return(0,m.jsx)(r.Fragment,{});if(e.expiration){if(e.expiration.days>0)return(0,m.jsx)("span",{children:"Current"});if(e.expiration.noncurrent_expiration_days)return(0,m.jsx)("span",{children:"Non-Current"})}if(e.transition){if(e.transition.days>0)return(0,m.jsx)("span",{children:"Current"});if(e.transition.noncurrent_transition_days)return(0,m.jsx)("span",{children:"Non-Current"})}}},{label:"Tier",elementKey:"storage_class",renderFunction:function(e){var n=o()(e,"transition.storage_class","");return n=o()(e,"transition.noncurrent_storage_class",n)},renderFullObject:!0},{label:"Prefix",elementKey:"prefix"},{label:"After",renderFullObject:!0,renderFunction:function(e){if(!e)return(0,m.jsx)(r.Fragment,{});if(e.expiration){if(e.expiration.days>0)return(0,m.jsxs)("span",{children:[e.expiration.days," days"]});if(e.expiration.noncurrent_expiration_days)return(0,m.jsxs)("span",{children:[e.expiration.noncurrent_expiration_days," days"]})}if(e.transition){if(e.transition.days>0)return(0,m.jsxs)("span",{children:[e.transition.days," days"]});if(e.transition.noncurrent_transition_days)return(0,m.jsxs)("span",{children:[e.transition.noncurrent_transition_days," days"]})}}},{label:"Status",elementKey:"status"}],H=[{type:"view",onClick:function(e){z(e),A(!0)}},{type:"delete",onClick:function(e){U(e),W(!0)},sendOnlyId:!0}];return(0,m.jsxs)(r.Fragment,{children:[L&&w&&(0,m.jsx)(T,{open:L,closeModalAndRefresh:function(e){A(!1),z(null),e&&y(!0)},selectedBucket:Q,lifecycleRule:w}),k&&(0,m.jsx)(O,{open:k,bucketName:Q,closeModalAndRefresh:function(e){F(!1),e&&y(!0)}}),D&&K&&(0,m.jsx)(g,{id:K,bucket:Q,deleteOpen:D,onCloseAndRefresh:function(e){W(!1),U(null),e&&y(!0)}}),(0,m.jsx)(s.NZf,{separator:!0,sx:{marginBottom:15},actions:(0,m.jsx)(u.s,{scopes:[d.Ft.S3_PUT_LIFECYCLE_CONFIGURATION,d.Ft.S3_PUT_ACTIONS],resource:Q,matchAll:!0,errorProps:{disabled:!0},children:(0,m.jsx)(N.Z,{tooltip:"Add Lifecycle Rule",children:(0,m.jsx)(s.zxk,{id:"add-bucket-lifecycle-rule",onClick:function(){F(!0)},label:"Add Lifecycle Rule",icon:(0,m.jsx)(s.dtP,{}),variant:"callAction"})})}),children:"Lifecycle Rules"}),(0,m.jsxs)(s.rjZ,{container:!0,children:[(0,m.jsx)(s.rjZ,{item:!0,xs:12,children:(0,m.jsx)(u.s,{scopes:[d.Ft.S3_GET_LIFECYCLE_CONFIGURATION,d.Ft.S3_GET_ACTIONS],resource:Q,errorProps:{disabled:!0},children:(0,m.jsx)(s.wQF,{itemActions:H,columns:q,isLoading:v,records:_,entityName:"Lifecycle",customEmptyMessage:"There are no Lifecycle rules yet",idField:"id",customPaperHeight:"400px"})})}),!v&&(0,m.jsxs)(s.rjZ,{item:!0,xs:12,children:[(0,m.jsx)("br",{}),(0,m.jsx)(s.KfX,{title:"Lifecycle Rules",iconComponent:(0,m.jsx)(s.y2Y,{}),help:(0,m.jsxs)(r.Fragment,{children:["MinIO Object Lifecycle Management allows creating rules for time or date based automatic transition or expiry of objects. For object transition, MinIO automatically moves the object to a configured remote storage tier.",(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),"You can learn more at our"," ",(0,m.jsx)("a",{href:"https://min.io/docs/minio/linux/administration/object-management/object-lifecycle-management.html?ref=con",target:"_blank",rel:"noopener",children:"documentation"}),"."]})})]})]})]})}},81159:function(e,n,t){var i=t(4942),r=t(1413),a=t(72791),o=t(11135),s=t(25787),l=t(9955),c=t(30829),u=t(20068),d=t(20890),x=t(61889),p=t(23814),f=t(29945),h=t(28182),v=t(80184),y=(0,s.Z)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(l.Z);n.Z=(0,s.Z)((function(e){return(0,o.Z)((0,r.Z)((0,r.Z)({indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},p.OR),p.YI))}))((function(e){var n=e.label,t=void 0===n?"":n,o=e.onChange,s=e.value,l=e.id,p=e.name,m=e.checked,g=void 0!==m&&m,j=e.disabled,b=void 0!==j&&j,_=e.switchOnly,Z=void 0!==_&&_,C=e.tooltip,S=void 0===C?"":C,k=e.description,F=void 0===k?"":k,E=e.classes,T=e.indicatorLabels,I=e.extraInputProps,L=void 0===I?{}:I,O=(0,v.jsxs)(a.Fragment,{children:[!Z&&(0,v.jsx)("span",{className:(0,h.Z)(E.indicatorLabel,(0,i.Z)({},E.indicatorLabelOn,!g)),children:T&&T.length>1?T[1]:"OFF"}),(0,v.jsx)(y,{checked:g,onChange:o,color:"primary",name:p,inputProps:(0,r.Z)({"aria-label":"primary checkbox"},L),disabled:b,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:s,id:l}),!Z&&(0,v.jsx)("span",{className:(0,h.Z)(E.indicatorLabel,(0,i.Z)({},E.indicatorLabelOn,g)),children:T?T[0]:"ON"})]});return Z?O:(0,v.jsx)("div",{children:(0,v.jsxs)(x.ZP,{container:!0,alignItems:"center",children:[(0,v.jsx)(x.ZP,{item:!0,xs:12,sm:8,md:8,children:""!==t&&(0,v.jsxs)(c.Z,{htmlFor:l,className:E.inputLabel,children:[(0,v.jsx)("span",{children:t}),""!==S&&(0,v.jsx)("div",{className:E.tooltipContainer,children:(0,v.jsx)(u.Z,{title:S,placement:"top-start",children:(0,v.jsx)("div",{className:E.tooltip,children:(0,v.jsx)(f.byK,{})})})})]})}),(0,v.jsx)(x.ZP,{item:!0,xs:12,sm:""!==t?4:12,md:""!==t?4:12,textAlign:"right",justifyContent:"end",className:E.switchContainer,children:O}),""!==F&&(0,v.jsx)(x.ZP,{item:!0,xs:12,textAlign:"left",children:(0,v.jsx)(d.Z,{component:"p",className:E.fieldDescription,children:F})})]})})}))},84741:function(e,n,t){var i=t(29439),r=t(72791),a=t(11135),o=t(25787),s=t(71715),l=t(77865),c=t(80184);n.Z=(0,o.Z)((function(e){return(0,a.Z)({buttonTrigger:{border:"#F0F2F2 1px solid",borderRadius:3,color:"#838383",backgroundColor:"#fff",fontSize:12}})}))((function(e){var n=e.classes,t=e.id,a=e.unitSelected,o=e.unitsList,u=e.disabled,d=void 0!==u&&u,x=e.onUnitChange,p=r.useState(null),f=(0,i.Z)(p,2),h=f[0],v=f[1],y=Boolean(h),m=function(e){v(null),""!==e&&x&&x(e)};return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)("button",{id:"".concat(t,"-button"),"aria-controls":"".concat(t,"-menu"),"aria-haspopup":"true","aria-expanded":y?"true":void 0,onClick:function(e){v(e.currentTarget)},className:n.buttonTrigger,disabled:d,type:"button",children:a}),(0,c.jsx)(s.Z,{id:"".concat(t,"-menu"),"aria-labelledby":"".concat(t,"-button"),anchorEl:h,open:y,onClose:function(){m("")},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:o.map((function(e){return(0,c.jsx)(l.Z,{onClick:function(){return m(e.value)},children:e.label},"itemUnit-".concat(e.value,"-").concat(e.label))}))})]})}))},17420:function(e,n,t){var i=t(93433),r=t(29439),a=t(72791),o=t(26181),s=t.n(o),l=t(48573),c=t.n(l),u=t(29945),d=t(80184);n.Z=function(e){var n=e.elements,t=e.name,o=e.label,l=e.tooltip,x=void 0===l?"":l,p=e.keyPlaceholder,f=void 0===p?"":p,h=e.valuePlaceholder,v=void 0===h?"":h,y=e.onChange,m=e.withBorder,g=void 0!==m&&m,j=(0,a.useState)([""]),b=(0,r.Z)(j,2),_=b[0],Z=b[1],C=(0,a.useState)([""]),S=(0,r.Z)(C,2),k=S[0],F=S[1],E=(0,a.createRef)();(0,a.useEffect)((function(){if(1===_.length&&""===_[0]&&1===k.length&&""===k[0]&&n&&""!==n){var e=n.split("&"),t=[],i=[];e.forEach((function(e){var n=e.split("=");2===n.length&&(t.push(n[0]),i.push(n[1]))})),t.push(""),i.push(""),Z(t),F(i)}}),[_,k,n]),(0,a.useEffect)((function(){var e=E.current;e&&_.length>1&&e.scrollIntoView(!1)}),[_]);var T=(0,a.useRef)(!0);(0,a.useLayoutEffect)((function(){T.current?T.current=!1:O()}),[_,k]);var I=function(e){e.persist();var n=(0,i.Z)(_),t=s()(e.target,"dataset.index","0");n[parseInt(t)]=e.target.value,Z(n)},L=function(e){e.persist();var n=(0,i.Z)(k),t=s()(e.target,"dataset.index","0");n[parseInt(t)]=e.target.value,F(n)},O=c()((function(){var e="";_.forEach((function(n,t){if(_[t]&&k[t]){var i="".concat(n,"=").concat(k[t]);0!==t&&(i="&".concat(i)),e="".concat(e).concat(i)}})),y(e)}),500),N=k.map((function(e,n){return(0,d.jsxs)(u.rjZ,{item:!0,xs:12,className:"lineInputBoxes inputItem",children:[(0,d.jsx)(u.Wzg,{id:"".concat(t,"-key-").concat(n.toString()),label:"",name:"".concat(t,"-").concat(n.toString()),value:_[n],onChange:I,index:n,placeholder:f}),(0,d.jsx)("span",{className:"queryDiv",children:":"}),(0,d.jsx)(u.Wzg,{id:"".concat(t,"-value-").concat(n.toString()),label:"",name:"".concat(t,"-").concat(n.toString()),value:k[n],onChange:L,index:n,placeholder:v,overlayIcon:n===k.length-1?(0,d.jsx)(u.dtP,{}):null,overlayAction:function(){!function(){if(""!==_[_.length-1].trim()&&""!==k[k.length-1].trim()){var e=(0,i.Z)(_),n=(0,i.Z)(k);e.push(""),n.push(""),Z(e),F(n)}}()}})]},"query-pair-".concat(t,"-").concat(n.toString()))}));return(0,d.jsx)(a.Fragment,{children:(0,d.jsxs)(u.rjZ,{item:!0,xs:12,sx:{"& .lineInputBoxes":{display:"flex"},"& .queryDiv":{alignSelf:"center",margin:"-15px 4px 0",fontWeight:600}},children:[(0,d.jsxs)(u.AZs,{children:[o,""!==x&&(0,d.jsx)(u.xuv,{sx:{marginLeft:5,display:"flex",alignItems:"center","& .min-icon":{width:13}},children:(0,d.jsx)(u.ua7,{tooltip:x,placement:"top",children:(0,d.jsx)(u.byK,{style:{width:13,height:13}})})})]}),(0,d.jsxs)(u.xuv,{withBorders:g,sx:{padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},children:[N,(0,d.jsx)("div",{ref:E})]})]})})}}}]);
//# sourceMappingURL=51.8430c021.chunk.js.map