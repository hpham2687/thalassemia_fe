(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[819],{40321:function(U){U.exports={main:"main___v2Z5L",headerList:"headerList___Mnegm",stepDescription:"stepDescription___4Ib3o",pageHeader:"pageHeader___B__A4",moreInfo:"moreInfo___3RsSn"}},36495:function(U,g,e){"use strict";e.d(g,{O:function(){return l}});var l={PHONE:576,LARGE_PHONE:768,TABLET:992,LARGE_TABLET:1200,DESKTOP:1520},y={PHONE_UP:"@media only screen and (min-width: ".concat(l.PHONE,"px)"),LARGE_PHONE_UP:"@media only screen and (min-width: ".concat(l.LARGE_PHONE,"px)"),TABLET_UP:"@media only screen and (min-width: ".concat(l.TABLET,"px)"),LARGE_TABLET_UP:"@media only screen and (min-width: ".concat(l.LARGE_TABLET,"px)"),DESKTOP_UP:"@media only screen and (min-width: ".concat(l.DESKTOP,"px)")}},62819:function(U,g,e){"use strict";e.r(g);var l=e(20310),y=e(58024),M=e(91894),x=e(8963),H=e(42020),G=e(13062),k=e(71230),q=e(89032),h=e(15746),nt=e(63185),D=e(9676),$=e(98858),P=e(4914),X=e(9715),I=e(16579),T=e(39428),Y=e(3182),z=e(57663),o=e(71577),p=e(34792),C=e(48086),c=e(71194),V=e(48889),j=e(93224),v=e(11849),B=e(2824),L=e(32059),K=e(43358),tt=e(34041),et=e(57117),O=e(28604),st=e(47957),it=e(74622),vt=e(57119),gt=e(49101),rt=e(25240),xt=e(95357),lt=e(952),ot=e(90672),Tt=e(85296),Ot=e(21349),ft=e(30381),b=e.n(ft),W=e(67294),ct=e(13752),yt=e(43934),Mt=e(40321),at=e.n(Mt),Ct=e(12788),Lt=e(36495),t=e(85893),_t,At=["blood_test","hemoglobin_test","serum_iron_test","double_test","triple_test","untrasound_test"],Rt=tt.Z.Option,It=function(u){return u.map(function(r){return{key:r.id,testId:r.id,testName:r.test_name,createdDate:b()(r.created_at).format("DD-MM-YYYY"),testDate:r.test_date,action:r}})},dt=function(u){var r=[],f={};return u==null||u.forEach(function(Q){var A=Q.testDate;f[A]||(f[A]=Q,r.push((0,t.jsx)(Rt,{"data-inspector-line":"56","data-inspector-column":"23","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",children:b()(Number(A)).format("DD-MM-YYYY")},A)))}),r},Zt=[{key:"tab1",tab:"X\xE9t nghi\u1EC7m"},{key:"tab2",tab:"Thai nhi"}],pt=function(u,r){return u.find(function(f){return f.testName===r}).action},ut=function(u){var r,f=(r={},(0,L.Z)(r,O.XH.BLOOD_TEST,"INPUT_BLOOD_TEST_RESULT"),(0,L.Z)(r,O.XH.SERUM_IRON_TEST,"INPUT_SERUM_IRON_TEST_RESULT"),(0,L.Z)(r,O.XH.HEMOGLOBIN_TEST,"INPUT_HEMOGLOBIN_TEST_RESULT"),(0,L.Z)(r,O.XH.DOUBLE_TEST,"INPUT_DOUBLE_TEST_RESULT"),(0,L.Z)(r,O.XH.TRIPLE_TEST,"INPUT_TRIPLE_TEST_RESULT"),(0,L.Z)(r,O.XH.UNTRASOUND_TEST,"INPUT_UNTRASOUND_TEST"),r);return f[u]};function Ut(){var N=(0,W.useState)({operationKey:"tab1",tabActiveKey:"detail"}),u=(0,B.Z)(N,2),r=u[0],f=u[1],Q=(0,W.useState)(null),A=(0,B.Z)(Q,2),_=A[0],mt=A[1],Et=(0,st.Z)(),Bt=Et.run,ht=Et.isLoading,Dt=(0,st.Z)(),Kt=Dt.run,bt=Dt.isLoading,S=(0,ct.I0)(),F=(0,W.useRef)(),Wt=(0,yt.UO)(),Z=Wt.patientId,Nt=function(a){f((0,v.Z)((0,v.Z)({},r),{},{operationKey:a}))},J=(0,W.useCallback)(function(){Bt((0,it.zn)(Z)).then(function(s){console.log(s);var a=s.blood_test,n=s.hemoglobin_test,i=s.serum_iron_test,m=s.double_test,d=s.triple_test,E=s.untrasound_test,w=(0,j.Z)(s,At),R=[];a&&R.push(a),n&&R.push(n),i&&R.push(s.serum_iron_test),m&&(console.log(m),R.push(m)),d&&R.push(s.triple_test),E&&(console.log(E),R.push(s.untrasound_test)),mt((0,v.Z)((0,v.Z)({},w),{},{tests:It(R)}))})},[Z]);(0,W.useEffect)(function(){Z&&J()},[Z]);var St=[{title:"STT",dataIndex:"index",key:"index",render:function(a,n,i){return i+1}},{title:"T\xEAn x\xE9t nghi\u1EC7m",dataIndex:"testName",key:"testName",render:function(a,n,i){var m=n.action.test_name;return(0,t.jsxs)("span",{"data-inspector-line":"164","data-inspector-column":"10","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",style:{cursor:"pointer"},onClick:function(){var E=pt(_.tests,m);E.test_date=b()(Number(E.test_date)),S({type:"modal/showModal",payload:{modalKey:ut(m),customProps:{patientDetail:_,editingData:E,readonly:!0,getPatientDetail:function(){J()}}}})},children:[(0,O.jw)(a)," "]})}},{title:"Ng\xE0y th\xEAm k\u1EBFt qu\u1EA3",dataIndex:"createdDate",key:"createdDate"},{title:"Ng\xE0y x\xE9t nghi\u1EC7m",dataIndex:"testDate",key:"testDate",sorter:function(a,n){return Number(a.testDate)-Number(n.testDate)},render:function(a){return b()(Number(a)).format("DD-MM-YYYY")}},{title:"H\xE0nh \u0111\u1ED9ng",dataIndex:"action",key:"action",render:function(a){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{"data-inspector-line":"210","data-inspector-column":"12","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",style:{marginLeft:8,cursor:"pointer",color:"var(--ant-primary-color)"},onClick:function(){var i=pt(_.tests,a.test_name);i.test_date=b()(Number(i.test_date)),S({type:"modal/showModal",payload:{modalKey:ut(a.test_name),customProps:{patientDetail:_,editingData:i,getPatientDetail:function(){J()}}}})},children:"S\u1EEDa"}),(0,t.jsx)("span",{"data-inspector-line":"232","data-inspector-column":"12","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",onClick:function(){return Ft(a)},style:{marginLeft:8,color:"red",cursor:"pointer"},children:"X\xF3a"})]})}}],Ft=function(a){V.Z.confirm({title:"X\xE1c nh\u1EADn",icon:(0,t.jsx)(vt.Z,{"data-inspector-line":"247","data-inspector-column":"12","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx"}),content:"B\u1EA1n c\xF3 ch\u1EAFc l\xE0 mu\u1ED1n x\xF3a k\u1EBFt qu\u1EA3 ".concat((0,O.jw)(a.test_name)," ng\xE0y ch\u1EE9?"),okText:"C\xF3",cancelText:"Kh\xF4ng",onOk:function(){var i=a.test_name;Kt((0,it.dG)({patientId:Z,testName:i})).then(function(){C.ZP.success("X\xF3a k\u1EBFt qu\u1EA3 ".concat(i," th\xE0nh c\xF4ng!")),mt(function(m){var d,E=m.tests;return((d=E)===null||d===void 0?void 0:d.length)>0&&(E=E.filter(function(w){return w.testName!==i})),(0,v.Z)((0,v.Z)({},m),{},{tests:E})})})}})},Pt=function(a){console.log("Selected: ".concat(a))},Ht={tab1:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(jt,{"data-inspector-line":"279","data-inspector-column":"8","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",children:[(0,t.jsxs)(o.Z,{"data-inspector-line":"280","data-inspector-column":"10","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",className:"ai-diagnosis-button",type:"primary",style:{marginBottom:24},onClick:function(){S({type:"modal/showModal",payload:{modalKey:et.$.ADD_TEST_RESULT,customProps:{patientDetail:_,getPatientDetail:J}}})},children:[(0,t.jsx)(gt.Z,{"data-inspector-line":"297","data-inspector-column":"12","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx"}),"Th\xEAm x\xE9t nghi\u1EC7m"]}),(0,t.jsxs)(o.Z,{"data-inspector-line":"300","data-inspector-column":"10","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",className:"ai-diagnosis-button",type:"primary",style:{marginBottom:24,marginLeft:8},onClick:function(){S({type:"modal/showModal",payload:{modalKey:et.$.GENERAL_INFO,customProps:{footer:null,body:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(lt.ZP,{"data-inspector-line":"313","data-inspector-column":"24","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",name:"validate_other",initialValues:{doctor_selection:"trisomy21"},onValuesChange:function(n,i){console.log(i)},formRef:F,onFinish:function(){var a=(0,Y.Z)((0,T.Z)().mark(function n(i){return(0,T.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",console.log(i));case 1:case"end":return d.stop()}},n)}));return function(n){return a.apply(this,arguments)}}(),submitter:{render:function(){return null}},children:[(0,t.jsx)(I.Z.Item,{"data-inspector-line":"325","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",name:"dates",label:"Ch\u1ECDn c\xE1c ng\xE0y XN",children:(0,t.jsx)(tt.Z,{"data-inspector-line":"326","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",mode:"multiple",size:"middle",placeholder:"Ch\u1ECDn c\xE1c ng\xE0y x\xE9t nghi\u1EC7m",onChange:Pt,style:{width:"100%"},children:dt(_==null?void 0:_.tests)})}),(0,t.jsx)(o.Z,{"data-inspector-line":"336","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",type:"primary",onClick:function(){var n;(n=F.current)===null||n===void 0||n.validateFields().then(function(i){console.log(i)})},children:"Chu\u1EA9n \u0111o\xE1n"}),(0,t.jsxs)(P.Z,{"data-inspector-line":"347","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",layout:"vertical",style:{marginBottom:16},children:[(0,t.jsx)(P.Z.Item,{"data-inspector-line":"348","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",label:"Thalassemia alpha",children:"0.3"}),(0,t.jsx)(P.Z.Item,{"data-inspector-line":"349","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",label:"Thalassemia beta",children:"0.3"}),(0,t.jsx)(P.Z.Item,{"data-inspector-line":"350","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",label:"Kh\xF4ng mang b\u1EC7nh",children:"0.4"})]}),(0,t.jsxs)("div",{"data-inspector-line":"353","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",style:{marginBottom:16},children:[(0,t.jsx)("p",{"data-inspector-line":"354","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",children:"K\u1EBFt lu\u1EADn c\u1EE7a b\xE1c s\u0129"}),(0,t.jsx)(I.Z.Item,{"data-inspector-line":"355","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",name:"diseaseName",children:(0,t.jsx)(D.Z.Group,{"data-inspector-line":"356","data-inspector-column":"30","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",style:{width:"100%"},children:(0,t.jsxs)(k.Z,{"data-inspector-line":"357","data-inspector-column":"32","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",children:[(0,t.jsx)(h.Z,{"data-inspector-line":"358","data-inspector-column":"34","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",span:8,children:(0,t.jsx)(D.Z,{"data-inspector-line":"359","data-inspector-column":"36","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",value:"trisomy21",style:{lineHeight:"32px"},children:"Alpha"})}),(0,t.jsx)(h.Z,{"data-inspector-line":"363","data-inspector-column":"34","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",span:8,children:(0,t.jsx)(D.Z,{"data-inspector-line":"364","data-inspector-column":"36","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",value:"trisomy18",style:{lineHeight:"32px"},children:"Beta"})}),(0,t.jsx)(h.Z,{"data-inspector-line":"368","data-inspector-column":"34","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",span:8,children:(0,t.jsx)(D.Z,{"data-inspector-line":"369","data-inspector-column":"36","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",value:"trisomy13",style:{lineHeight:"32px"},children:"Kh\xF4ng mang b\u1EC7nh"})})]})})})]}),(0,t.jsx)(ot.Z,{"data-inspector-line":"377","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",label:"Ch\u1EA9n \u0111o\xE1n c\u1EE7a b\xE1c s\u1EF9",name:"doctorComment",placeholder:"Nh\u1EADp ch\u1EA9n \u0111o\xE1n c\u1EE7a b\xE1c s\u1EF9"}),(0,t.jsx)(o.Z,{"data-inspector-line":"382","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",type:"primary",onClick:function(){var n;(n=F.current)===null||n===void 0||n.validateFields().then(function(i){console.log(i)})},children:"L\u01B0u k\u1EBFt qu\u1EA3"})]})})}}})},children:[(0,t.jsx)(rt.Z,{"data-inspector-line":"400","data-inspector-column":"12","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx"}),"AI ch\u1EA9n \u0111o\xE1n Thalassemia"]}),(0,t.jsxs)(o.Z,{"data-inspector-line":"403","data-inspector-column":"10","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",className:"ai-diagnosis-button",type:"primary",style:{marginBottom:24,marginLeft:8},onClick:function(){S({type:"modal/showModal",payload:{modalKey:et.$.GENERAL_INFO,customProps:{body:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(lt.ZP,{"data-inspector-line":"415","data-inspector-column":"24","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",readonly:!1,name:"validate_other",initialValues:{doctor_selection:"trisomy21"},formRef:F,onFinish:function(){var a=(0,Y.Z)((0,T.Z)().mark(function n(i){return(0,T.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.abrupt("return",console.log(i));case 1:case"end":return d.stop()}},n)}));return function(n){return a.apply(this,arguments)}}(),submitter:{render:function(){return null}},children:[(0,t.jsx)(I.Z.Item,{"data-inspector-line":"430","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",name:"dates",label:"Ch\u1ECDn c\xE1c ng\xE0y XN",children:(0,t.jsx)(tt.Z,{"data-inspector-line":"431","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",mode:"multiple",size:"middle",placeholder:"Ch\u1ECDn c\xE1c ng\xE0y x\xE9t nghi\u1EC7m",onChange:Pt,style:{width:"100%"},children:dt(_==null?void 0:_.tests)})}),(0,t.jsx)(o.Z,{"data-inspector-line":"441","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",type:"primary",onClick:function(){var n;(n=F.current)===null||n===void 0||n.validateFields().then(function(i){console.log(i)})},children:"Chu\u1EA9n \u0111o\xE1n"}),(0,t.jsxs)(P.Z,{"data-inspector-line":"452","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",layout:"horizontal",style:{marginBottom:16},children:[(0,t.jsx)(P.Z.Item,{"data-inspector-line":"453","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",label:"Trisomy 21",children:"0.32"}),(0,t.jsx)(P.Z.Item,{"data-inspector-line":"454","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",label:"Trisomy 18",children:"0.44"}),(0,t.jsx)(P.Z.Item,{"data-inspector-line":"455","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",label:"Trisomy 13",children:"0.2"})]}),(0,t.jsxs)("div",{"data-inspector-line":"457","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",style:{marginBottom:16},children:[(0,t.jsx)("p",{"data-inspector-line":"458","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",children:"K\u1EBFt lu\u1EADn c\u1EE7a b\xE1c s\u0129"}),(0,t.jsx)(I.Z.Item,{"data-inspector-line":"459","data-inspector-column":"28","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",name:"diseaseName",children:(0,t.jsx)(D.Z.Group,{"data-inspector-line":"460","data-inspector-column":"30","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",children:(0,t.jsxs)(k.Z,{"data-inspector-line":"461","data-inspector-column":"32","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",children:[(0,t.jsx)(h.Z,{"data-inspector-line":"462","data-inspector-column":"34","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",span:8,children:(0,t.jsx)(D.Z,{"data-inspector-line":"463","data-inspector-column":"36","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",value:"trisomy21",style:{lineHeight:"32px"},children:"Trisomy 21"})}),(0,t.jsx)(h.Z,{"data-inspector-line":"467","data-inspector-column":"34","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",span:8,children:(0,t.jsx)(D.Z,{"data-inspector-line":"468","data-inspector-column":"36","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",value:"trisomy18",style:{lineHeight:"32px"},children:"Trisomy 18"})}),(0,t.jsx)(h.Z,{"data-inspector-line":"472","data-inspector-column":"34","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",span:8,children:(0,t.jsx)(D.Z,{"data-inspector-line":"473","data-inspector-column":"36","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",value:"trisomy13",style:{lineHeight:"32px"},children:"Trisomy 13"})})]})})})]}),(0,t.jsx)(ot.Z,{"data-inspector-line":"481","data-inspector-column":"26","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",label:"Ch\u1EA9n \u0111o\xE1n c\u1EE7a b\xE1c s\u1EF9",name:"invoiceType",placeholder:"Nh\u1EADp ch\u1EA9n \u0111o\xE1n c\u1EE7a b\xE1c s\u1EF9"})]})})}}})},children:[(0,t.jsx)(rt.Z,{"data-inspector-line":"494","data-inspector-column":"12","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx"}),"AI ch\u1EA9n \u0111o\xE1n Trisomy"]})]}),(0,t.jsx)(H.Z,{"data-inspector-line":"498","data-inspector-column":"8","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",loading:ht||bt,dataSource:(_==null?void 0:_.tests)||[],columns:St,rowKey:function(a){return a.test_name},pagination:{position:["bottomRight"]}})]}),tab2:(0,t.jsx)(t.Fragment,{children:"sdf"}),tab3:(0,t.jsx)(t.Fragment,{children:"sdf"})};return ht||!_?(0,t.jsx)(t.Fragment,{children:"Loading..."}):(0,t.jsx)(Tt.ZP,{"data-inspector-line":"522","data-inspector-column":"4","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",title:"B\u1EC7nh nh\xE2n \uFF1A".concat(_==null?void 0:_.fullName),className:at().pageHeader,extra:[(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o.Z,{"data-inspector-line":"529","data-inspector-column":"10","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",style:{display:"flex",alignItems:"center",padding:0},type:"link",onClick:function(){ct.m8.push("/patients/".concat(Z,"/view"))},icon:(0,t.jsx)(xt.Z,{"data-inspector-line":"535","data-inspector-column":"18","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",style:{fontSize:24}}),children:"Chi ti\u1EBFt"})})],children:(0,t.jsx)("div",{"data-inspector-line":"542","data-inspector-column":"6","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",className:at().main,children:(0,t.jsx)(Ot.Z,{"data-inspector-line":"543","data-inspector-column":"8","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",children:(0,t.jsx)(M.Z,{"data-inspector-line":"544","data-inspector-column":"10","data-inspector-relative-path":"src/pages/patients/list/PatientDetail.tsx",className:at().tabsCard,bordered:!1,tabList:Zt,onTabChange:Nt,children:Ht[r.operationKey]})})})})}g.default=Ut;var jt=Ct.ZP.div(_t||(_t=(0,l.Z)([`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: `,`px) {
    .ai-diagnosis-button {
      margin-left: 0 !important;
    }
  }
`])),Lt.O.PHONE)},74622:function(U,g,e){"use strict";e.d(g,{Zk:function(){return h},sH:function(){return D},zn:function(){return P},dG:function(){return I},hT:function(){return Y}});var l=e(39428),y=e(3182),M=e(28604),x=e(42174),H=e(70594),G=e(63305),k=e(30381),q=e.n(k),h=[(0,H.L)().start,(0,H.L)().end],nt=10;function D(o){return $.apply(this,arguments)}function $(){return $=(0,y.Z)((0,l.Z)().mark(function o(p){var C,c,V,j,v,B;return(0,l.Z)().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return C=p.page,c=p.startDate,V=c===void 0?h[0]:c,j=p.endDate,v=j===void 0?h[1]:j,B=p.fullName,K.abrupt("return",(0,x.Z)("/patients",{headers:{Authorization:"Bearer ".concat(G.Z.get().accessToken)},params:{page:C,fullName:B,limit:nt,startDate:q()(V).startOf("day").toISOString(),endDate:q()(v).endOf("day").toISOString()},method:"GET"}));case 2:case"end":return K.stop()}},o)})),$.apply(this,arguments)}function P(o){return X.apply(this,arguments)}function X(){return X=(0,y.Z)((0,l.Z)().mark(function o(p){return(0,l.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,x.Z)("/patients/"+p));case 1:case"end":return c.stop()}},o)})),X.apply(this,arguments)}function I(o){return T.apply(this,arguments)}function T(){return T=(0,y.Z)((0,l.Z)().mark(function o(p){return(0,l.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,x.Z)((0,M.T$)(p.testName,p.patientId),{data:p,method:"DELETE",headers:{Authorization:"Bearer ".concat(G.Z.get().accessToken)}}));case 1:case"end":return c.stop()}},o)})),T.apply(this,arguments)}function Y(o){return z.apply(this,arguments)}function z(){return z=(0,y.Z)((0,l.Z)().mark(function o(p){return(0,l.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,x.Z)("/patients/"+p,{method:"DELETE",headers:{Authorization:"Bearer ".concat(G.Z.get().accessToken)}}));case 1:case"end":return c.stop()}},o)})),z.apply(this,arguments)}},70594:function(U,g,e){"use strict";e.d(g,{L:function(){return l}});var l=function(){var M=new Date;M.setDate(-30),M.setUTCHours(0,0,0,0);var x=new Date;return x.setUTCHours(23,59,59,999),{start:M.toISOString(),end:x.toISOString()}}}}]);