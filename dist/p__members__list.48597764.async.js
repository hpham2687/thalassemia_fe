(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[137,595],{34540:function(M,v,e){"use strict";var h=e(28991),f=e(81253),T=e(85893),x=e(86190),Z=e(67294),g=e(66758),P=e(88305),C=["fieldProps","proFieldProps"],F="dateRange",m=Z.forwardRef(function(E,l){var i=E.fieldProps,u=E.proFieldProps,c=(0,f.Z)(E,C),b=(0,Z.useContext)(g.Z);return(0,T.jsx)(P.Z,(0,h.Z)({ref:l,fieldProps:(0,h.Z)({getPopupContainer:b.getPopupContainer},i),valueType:F,proFieldProps:u,filedConfig:{valueType:F,lightFilterLabelFormatter:function(N){return(0,x.Z)(N,(i==null?void 0:i.format)||"YYYY-MM-DD")}}},c))});v.Z=m},5966:function(M,v,e){"use strict";var h=e(28991),f=e(81253),T=e(85893),x=e(88305),Z=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],P="text",C=function(l){var i=l.fieldProps,u=l.proFieldProps,c=(0,f.Z)(l,Z);return(0,T.jsx)(x.Z,(0,h.Z)({valueType:P,fieldProps:i,filedConfig:{valueType:P},proFieldProps:u},c))},F=function(l){var i=l.fieldProps,u=l.proFieldProps,c=(0,f.Z)(l,g);return(0,T.jsx)(x.Z,(0,h.Z)({valueType:"password",fieldProps:i,proFieldProps:u,filedConfig:{valueType:P}},c))},m=C;m.Password=F,m.displayName="ProFormComponent",v.Z=m},27428:function(M){M.exports={main:"main___3vk7l",headerList:"headerList___XMTEq",stepDescription:"stepDescription___261Kl",pageHeader:"pageHeader___3c_bR",moreInfo:"moreInfo___Kam62"}},56980:function(M,v,e){"use strict";e.r(v),e.d(v,{default:function(){return Ze}});var h=e(58024),f=e(91894),T=e(8963),x=e(42020),Z=e(57663),g=e(71577),P=e(34792),C=e(48086),F=e(71194),m=e(48889),E=e(9715),l=e(16579),i=e(2824),u=e(20310),c=e(47957),b=e(62819),V=e(57119),N=e(76570),ce=e(1977),pe=e(34540),me=e(5966),ue=e(85296),ve=e(21349),he=e(30381),B=e.n(he),y=e(67294),fe=e(12788),xe=e(73727),ge=e(13752),I=e(39428),X=e(3182),be=e(28604),Q=e(42174),J=e(70594),k=e(63305),W=[(0,J.L)().start,(0,J.L)().end],Pe=10;function w(o){return K.apply(this,arguments)}function K(){return K=(0,X.Z)((0,I.Z)().mark(function o(r){var s,a,O,R,G,S;return(0,I.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return s=r.page,a=r.startDate,O=a===void 0?W[0]:a,R=r.endDate,G=R===void 0?W[1]:R,S=r.fullName,D.abrupt("return",(0,Q.Z)("/patients",{headers:{Authorization:"Bearer ".concat(k.Z.get().accessToken)},params:{page:s,fullName:S,limit:Pe,startDate:B()(O).startOf("day").toISOString(),endDate:B()(G).endOf("day").toISOString()},method:"GET"}));case 2:case"end":return D.stop()}},o)})),K.apply(this,arguments)}function Ne(o){return U.apply(this,arguments)}function U(){return U=_asyncToGenerator(_regeneratorRuntime().mark(function o(r){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/patients/"+r));case 1:case"end":return a.stop()}},o)})),U.apply(this,arguments)}function Be(o){return Y.apply(this,arguments)}function Y(){return Y=_asyncToGenerator(_regeneratorRuntime().mark(function o(r){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request(getCreateDeleteTestResultEndpoint(r.testName,r.patientId),{data:r,method:"DELETE",headers:{Authorization:"Bearer ".concat(token.get().accessToken)}}));case 1:case"end":return a.stop()}},o)})),Y.apply(this,arguments)}function Ee(o){return $.apply(this,arguments)}function $(){return $=(0,X.Z)((0,I.Z)().mark(function o(r){return(0,I.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,Q.Z)("/patients/"+r,{method:"DELETE",headers:{Authorization:"Bearer ".concat(k.Z.get().accessToken)}}));case 1:case"end":return a.stop()}},o)})),$.apply(this,arguments)}var ye=e(27428),q=e.n(ye),_=e(36495),t=e(85893),ee,De=fe.ZP.div(ee||(ee=(0,u.Z)([`
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  align-items: center;

  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    #search-button,
    label[for='filter-form_fullName'] {
      margin-left: 16px;
    }
    .ant-form-item {
      margin-bottom: 0;
    }
    @media (max-width: `,`px) {
      .ant-form-item {
        margin-bottom: 24px !important;
      }
      #search-button,
      label[for='filter-form_fullName'] {
        margin-left: 0;
      }
    }
  }
  @media (max-width: `,`px) {
    flex-direction: column-reverse;
    gap: 24px;
    align-items: end !important;
    .action-cell {
      display: flex;
    }
  }
`])),_.O.PHONE,_.O.PHONE),te=function(r){return r.map(function(s){return{key:s.id,patientId:s.id,name:s.fullName,dateOfBirth:s.dateOfBirth,address:s.address,action:s}})},Te=function(){var r=(0,c.Z)(),s=r.run,a=r.isLoading,O=(0,c.Z)(),R=O.run,G=O.isLoading,S=(0,y.useState)([]),H=(0,i.Z)(S,2),D=H[0],ae=H[1],Ce=(0,y.useState)(0),ne=(0,i.Z)(Ce,2),Fe=ne[0],re=ne[1],Oe=(0,y.useState)(0),se=(0,i.Z)(Oe,2),A=se[0],Re=se[1],je=(0,y.useState)(null),ie=(0,i.Z)(je,2),oe=ie[0],le=ie[1],Le=l.Z.useForm(),Me=(0,i.Z)(Le,1),j=Me[0],z=(0,y.useCallback)(function(){var d=j.getFieldValue("dateRange"),n=j.getFieldValue("fullName"),p=d[0],L=d[1];s(w({page:A,startDate:p,endDate:L,fullName:n})).then(function(de){ae(te(de.results)),re(de.total)})},[A,j]);(0,y.useEffect)(function(){z()},[A,z]);var Ie=function(n){m.Z.confirm({title:"X\xE1c nh\u1EADn",icon:(0,t.jsx)(V.Z,{"data-inspector-line":"93","data-inspector-column":"12","data-inspector-relative-path":"src/pages/members/list/index.tsx"}),content:"B\u1EA1n c\xF3 ch\u1EAFc l\xE0 mu\u1ED1n x\xF3a b\u1EC7nh nh\xE2n ".concat(n.fullName," ch\u1EE9?"),okText:"C\xF3",cancelText:"Kh\xF4ng",onOk:function(){R(Ee(n.id)).then(function(L){C.ZP.success("X\xF3a b\u1EC7nh nh\xE2n th\xE0nh c\xF4ng!"),console.log(L),z()})}})},Se=[{title:"STT",dataIndex:"key",key:"key",width:60,render:function(n,p,L){return L+1}},{key:"patientId",title:"M\xE3 b\u1EC7nh nh\xE2n",width:150,dataIndex:"patientId"},{title:"H\u1ECD v\xE0 t\xEAn",dataIndex:"name",key:"name"},{title:"\u0110\u1ECBa ch\u1EC9",dataIndex:"address",key:"address"},{key:"dateOfBirth",title:"Ng\xE0y sinh",dataIndex:"dateOfBirth",render:function(n){return B()(n).format("DD-MM-YYYY")}},{title:"H\xE0nh \u0111\u1ED9ng",dataIndex:"action",key:"action",render:function(n){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{"data-inspector-line":"146","data-inspector-column":"12","data-inspector-relative-path":"src/pages/members/list/index.tsx",className:"action-cell",children:[(0,t.jsx)("span",{"data-inspector-line":"147","data-inspector-column":"14","data-inspector-relative-path":"src/pages/members/list/index.tsx",style:{cursor:"pointer",color:"var(--ant-primary-color)"},onClick:function(){le(n.id)},children:"Chi ti\u1EBFt"}),(0,t.jsx)(xe.rU,{"data-inspector-line":"155","data-inspector-column":"14","data-inspector-relative-path":"src/pages/members/list/index.tsx",to:"/patients/".concat(n.id,"/edit"),style:{marginLeft:8,cursor:"pointer",color:"var(--ant-primary-color)"},children:"S\u1EEDa"}),(0,t.jsx)("span",{"data-inspector-line":"161","data-inspector-column":"14","data-inspector-relative-path":"src/pages/members/list/index.tsx",onClick:function(){return Ie(n)},style:{marginLeft:8,color:"red",cursor:"pointer"},children:"X\xF3a"})," "]})})}}];if(oe)return(0,t.jsx)(b.default,{"data-inspector-line":"175","data-inspector-column":"11","data-inspector-relative-path":"src/pages/members/list/index.tsx",patientId:oe,setSelectedPatient:le});var Ae=function(){j.validateFields().then(function(n){s(w({page:A,startDate:n.dateRange[0],endDate:n.dateRange[1],fullName:n.fullName})).then(function(p){ae(te(p.results)),re(p.total)})}).catch(function(n){console.log("Validate Failed:",n)})};return(0,t.jsx)(ue.ZP,{"data-inspector-line":"200","data-inspector-column":"4","data-inspector-relative-path":"src/pages/members/list/index.tsx",children:(0,t.jsx)("div",{"data-inspector-line":"201","data-inspector-column":"6","data-inspector-relative-path":"src/pages/members/list/index.tsx",className:q().main,children:(0,t.jsx)(ve.Z,{"data-inspector-line":"202","data-inspector-column":"8","data-inspector-relative-path":"src/pages/members/list/index.tsx",children:(0,t.jsxs)(f.Z,{"data-inspector-line":"203","data-inspector-column":"10","data-inspector-relative-path":"src/pages/members/list/index.tsx",className:q().tabsCard,bordered:!1,children:[(0,t.jsx)(l.Z,{"data-inspector-line":"204","data-inspector-column":"12","data-inspector-relative-path":"src/pages/members/list/index.tsx",name:"filter-form",form:j,initialValues:{dateRange:W,fullName:""},children:(0,t.jsxs)(De,{"data-inspector-line":"212","data-inspector-column":"14","data-inspector-relative-path":"src/pages/members/list/index.tsx",children:[(0,t.jsxs)("div",{"data-inspector-line":"213","data-inspector-column":"16","data-inspector-relative-path":"src/pages/members/list/index.tsx",id:"filter-wrapper",children:[(0,t.jsx)(pe.Z,{"data-inspector-line":"214","data-inspector-column":"18","data-inspector-relative-path":"src/pages/members/list/index.tsx",name:"dateRange",label:"L\u1ECDc theo ng\xE0y",placeholder:["T\u1EEB ng\xE0y","\u0110\u1EBFn ng\xE0y"]}),(0,t.jsx)(me.Z,{"data-inspector-line":"219","data-inspector-column":"18","data-inspector-relative-path":"src/pages/members/list/index.tsx",name:"fullName",id:"name-input",label:"L\u1ECDc theo t\xEAn",placeholder:"L\u1ECDc theo t\xEAn"}),(0,t.jsx)(g.Z,{"data-inspector-line":"226","data-inspector-column":"18","data-inspector-relative-path":"src/pages/members/list/index.tsx",type:"primary",id:"search-button",icon:(0,t.jsx)(N.Z,{"data-inspector-line":"229","data-inspector-column":"26","data-inspector-relative-path":"src/pages/members/list/index.tsx"}),onClick:Ae,children:"T\xECm ki\u1EBFm"})]}),(0,t.jsx)(g.Z,{"data-inspector-line":"235","data-inspector-column":"16","data-inspector-relative-path":"src/pages/members/list/index.tsx",type:"primary",icon:(0,t.jsx)(ce.Z,{"data-inspector-line":"237","data-inspector-column":"24","data-inspector-relative-path":"src/pages/members/list/index.tsx"}),onClick:function(){ge.m8.push("/patients/add")},children:"Th\xEAm th\xE0nh vi\xEAn"})]})}),(0,t.jsx)(x.Z,{"data-inspector-line":"246","data-inspector-column":"12","data-inspector-relative-path":"src/pages/members/list/index.tsx",pagination:{position:["bottomRight"],total:Fe,pageSize:10,onChange:function(n){Re(n-1)}},loading:a,dataSource:D,columns:Se})]})})})})},Ze=Te}}]);
