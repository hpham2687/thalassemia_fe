(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[531],{63434:function(Pe,ie,e){"use strict";var qe=e(63185),H=e(9676),u=e(28991),o=e(81253),le=e(85893),U=e(22270),Y=e(67294),De=e(32185),ce=e(96869),b=["options","fieldProps","proFieldProps","valueEnum"],q=Y.forwardRef(function(g,Q){var j=g.options,I=g.fieldProps,h=g.proFieldProps,me=g.valueEnum,ee=(0,o.Z)(g,b);return(0,le.jsx)(ce.Z,(0,u.Z)({ref:Q,valueType:"checkbox",valueEnum:(0,U.h)(me,void 0),fieldProps:(0,u.Z)({options:j},I),lightProps:(0,u.Z)({labelFormatter:function(){return(0,le.jsx)(ce.Z,(0,u.Z)({ref:Q,valueType:"checkbox",mode:"read",valueEnum:(0,U.h)(me,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,u.Z)({options:j},I),proFieldProps:h},ee))}},ee.lightProps),proFieldProps:h},ee))}),_=Y.forwardRef(function(g,Q){var j=g.fieldProps,I=g.children;return(0,le.jsx)(H.Z,(0,u.Z)((0,u.Z)({ref:Q},j),{},{children:I}))}),Fe=(0,De.G)(_,{valuePropName:"checked"}),Ae=Fe;Ae.Group=q,ie.Z=Ae},43291:function(Pe,ie,e){"use strict";e.d(ie,{A:function(){return O}});var qe=e(9715),H=e(16579),u=e(28991),o=e(85893),le=e(88374),U=e(96156),Y=e(49111),De=e(19650),ce=e(84305),b=e(87769),q=e(28481),_=e(8812),Fe=e(56725),Ae=e(22385),g=e(45777),Q=e(68628),j=e(94184),I=e.n(j),h=e(67294),me=e(47369),ee=function(B){var R=B.label,f=B.tooltip,d=B.ellipsis,X=B.subTitle,ue=(0,h.useContext)(b.ZP.ConfigContext),xe=ue.getPrefixCls;if(!f&&!X)return(0,o.jsx)(o.Fragment,{children:R});var W=xe("pro-core-label-tip"),J=typeof f=="string"||h.isValidElement(f)?{title:f}:f,de=(J==null?void 0:J.icon)||(0,o.jsx)(Q.Z,{});return(0,o.jsxs)("div",{className:W,onMouseDown:function(T){return T.stopPropagation()},onMouseLeave:function(T){return T.stopPropagation()},onMouseMove:function(T){return T.stopPropagation()},children:[(0,o.jsx)("div",{className:I()("".concat(W,"-title"),(0,U.Z)({},"".concat(W,"-title-ellipsis"),d)),children:R}),X&&(0,o.jsx)("div",{className:"".concat(W,"-subtitle"),children:X}),f&&(0,o.jsx)(g.Z,(0,u.Z)((0,u.Z)({},J),{},{children:(0,o.jsx)("span",{className:"".concat(W,"-icon"),children:de})}))]})},Me=h.memo(ee),ze=e(66758),Ve=e(2514),_e=e(96138),Ie=h.forwardRef(function(r,B){var R=h.useContext(ze.Z),f=R.groupProps,d=(0,u.Z)((0,u.Z)({},f),r),X=d.children,ue=d.collapsible,xe=d.defaultCollapsed,W=d.style,J=d.labelLayout,de=d.title,k=de===void 0?r.label:de,T=d.tooltip,Be=d.align,ge=Be===void 0?"start":Be,fe=d.direction,F=d.size,Te=F===void 0?32:F,Ge=d.titleStyle,Ne=d.titleRender,A=d.spaceProps,pe=d.extra,ve=d.autoFocus,et=(0,Fe.Z)(function(){return xe||!1},{value:r.collapsed,onChange:r.onCollapse}),Se=(0,q.Z)(et,2),Ce=Se[0],t=Se[1],He=(0,h.useContext)(b.ZP.ConfigContext),Ue=He.getPrefixCls,Ye=(0,Ve.zx)(r),Qe=Ye.ColWrapper,be=Ye.RowWrapper,N=Ue("pro-form-group"),Oe=ue&&(0,o.jsx)(_.Z,{style:{marginRight:8},rotate:Ce?void 0:90}),M=(0,o.jsx)(Me,{label:Oe?(0,o.jsxs)("div",{children:[Oe,k]}):k,tooltip:T}),Re=(0,h.useCallback)(function($){var ne=$.children;return(0,o.jsx)(De.Z,(0,u.Z)((0,u.Z)({},A),{},{className:I()("".concat(N,"-container"),A==null?void 0:A.className),size:Te,align:ge,direction:fe,style:(0,u.Z)({rowGap:0},A==null?void 0:A.style),children:ne}))},[ge,N,fe,Te,A]),We=Ne?Ne(M,r):M,Xe=(0,h.useMemo)(function(){var $=[],ne=h.Children.toArray(X).map(function(L,ke){var ye;return h.isValidElement(L)&&(L==null||(ye=L.props)===null||ye===void 0?void 0:ye.hidden)?($.push(L),null):ke===0&&h.isValidElement(L)&&ve?h.cloneElement(L,(0,u.Z)((0,u.Z)({},L.props),{},{autoFocus:ve})):L});return[(0,o.jsx)(be,{Wrapper:Re,children:ne},"children"),$.length>0?(0,o.jsx)("div",{style:{display:"none"},children:$}):null]},[X,be,Re,ve]),S=(0,q.Z)(Xe,2),Je=S[0],te=S[1];return(0,o.jsx)(Qe,{children:(0,o.jsxs)("div",{className:I()(N,(0,U.Z)({},"".concat(N,"-twoLine"),J==="twoLine")),style:W,ref:B,children:[te,(k||T||pe)&&(0,o.jsx)("div",{className:"".concat(N,"-title"),style:Ge,onClick:function(){t(!Ce)},children:pe?(0,o.jsxs)("div",{style:{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between"},children:[We,(0,o.jsx)("span",{onClick:function(ne){return ne.stopPropagation()},children:pe})]}):We}),ue&&Ce?null:Je]})})});Ie.displayName="ProForm-Group";var Ke=Ie,Ee=e(71234);function O(r){return(0,o.jsx)(le.I,(0,u.Z)({layout:"vertical",submitter:{render:function(R,f){return f.reverse()}},contentRender:function(R,f){return(0,o.jsxs)(o.Fragment,{children:[R,f]})}},r))}O.Group=Ke,O.useForm=H.Z.useForm,O.Item=Ee.Z,O.useWatch=H.Z.useWatch,O.ErrorList=H.Z.ErrorList,O.Provider=H.Z.Provider},85017:function(Pe){Pe.exports={container:"container___3v_qv",lang:"lang___pX_bW",content:"content___3I7mQ",icon:"icon___1Oj2m","ant-pro-form-login-title":"ant-pro-form-login-title___11sBq"}},96138:function(){},32384:function(){},47369:function(){},3178:function(){},59845:function(Pe,ie,e){"use strict";e.r(ie),e.d(ie,{default:function(){return ye}});var qe=e(13062),H=e(71230),u=e(18106),o=e(51752),le=e(89032),U=e(15746),Y=e(39428),De=e(34792),ce=e(48086),b=e(11849),q=e(3182),_=e(2824),Fe=e(38663),Ae=e(3178),g=e(22122),Q=e(28481),j=e(96156),I=e(38819),h=e(15873),me=e(43061),ee=e(73218),Me=e(54549),ze=e(68855),Ve=e(57119),_e=e(40847),Ie=e(68628),Ke=e(94184),Ee=e.n(Ke),O=e(63441),r=e(67294),B=e(53124),R=e(5467),f=e(96159),d=e(6610),X=e(5991),ue=e(10379),xe=e(54070),W=function(l){(0,ue.Z)(s,l);var n=(0,xe.Z)(s);function s(){var a;return(0,d.Z)(this,s),a=n.apply(this,arguments),a.state={error:void 0,info:{componentStack:""}},a}return(0,X.Z)(s,[{key:"componentDidCatch",value:function(i,p){this.setState({error:i,info:p})}},{key:"render",value:function(){var i=this.props,p=i.message,m=i.description,P=i.children,z=this.state,c=z.error,V=z.info,ae=V&&V.componentStack?V.componentStack:null,se=typeof p=="undefined"?(c||"").toString():p,he=typeof m=="undefined"?ae:m;return c?r.createElement(fe,{type:"error",message:se,description:r.createElement("pre",null,he)}):P}}]),s}(r.Component),J=function(l,n){var s={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&n.indexOf(a)<0&&(s[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(l);i<a.length;i++)n.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(l,a[i])&&(s[a[i]]=l[a[i]]);return s},de={success:I.Z,info:_e.Z,error:me.Z,warning:ze.Z},k={success:h.Z,info:Ie.Z,error:ee.Z,warning:Ve.Z},T=function(n){var s=n.description,a=n.icon,i=n.prefixCls,p=n.type,m=(s?k:de)[p]||null;return a?(0,f.wm)(a,r.createElement("span",{className:"".concat(i,"-icon")},a),function(){return{className:Ee()("".concat(i,"-icon"),(0,j.Z)({},a.props.className,a.props.className))}}):r.createElement(m,{className:"".concat(i,"-icon")})},Be=function(n){var s=n.isClosable,a=n.closeText,i=n.prefixCls,p=n.closeIcon,m=n.handleClose;return s?r.createElement("button",{type:"button",onClick:m,className:"".concat(i,"-close-icon"),tabIndex:0},a?r.createElement("span",{className:"".concat(i,"-close-text")},a):p):null},ge=function(n){var s,a=n.description,i=n.prefixCls,p=n.message,m=n.banner,P=n.className,z=P===void 0?"":P,c=n.style,V=n.onMouseEnter,ae=n.onMouseLeave,se=n.onClick,he=n.afterClose,y=n.showIcon,re=n.closable,oe=n.closeText,K=n.closeIcon,G=K===void 0?r.createElement(Me.Z,null):K,x=n.action,D=J(n,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),E=r.useState(!1),C=(0,Q.Z)(E,2),Ze=C[0],$e=C[1],tt=r.useRef(),v=r.useContext(B.E_),we=v.getPrefixCls,st=v.direction,Z=we("alert",i),rt=function(w){var Le;$e(!0),(Le=D.onClose)===null||Le===void 0||Le.call(D,w)},ot=function(){var w=D.type;return w!==void 0?w:m?"warning":"info"},it=oe?!0:re,nt=ot(),at=m&&y===void 0?!0:y,lt=Ee()(Z,"".concat(Z,"-").concat(nt),(s={},(0,j.Z)(s,"".concat(Z,"-with-description"),!!a),(0,j.Z)(s,"".concat(Z,"-no-icon"),!at),(0,j.Z)(s,"".concat(Z,"-banner"),!!m),(0,j.Z)(s,"".concat(Z,"-rtl"),st==="rtl"),s),z),ct=(0,R.Z)(D);return r.createElement(O.Z,{visible:!Ze,motionName:"".concat(Z,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(w){return{maxHeight:w.offsetHeight}},onLeaveEnd:he},function(je){var w=je.className,Le=je.style;return r.createElement("div",(0,g.Z)({ref:tt,"data-show":!Ze,className:Ee()(lt,w),style:(0,g.Z)((0,g.Z)({},c),Le),onMouseEnter:V,onMouseLeave:ae,onClick:se,role:"alert"},ct),at?r.createElement(T,{description:a,icon:D.icon,prefixCls:Z,type:nt}):null,r.createElement("div",{className:"".concat(Z,"-content")},p?r.createElement("div",{className:"".concat(Z,"-message")},p):null,a?r.createElement("div",{className:"".concat(Z,"-description")},a):null),x?r.createElement("div",{className:"".concat(Z,"-action")},x):null,r.createElement(Be,{isClosable:!!it,closeText:oe,prefixCls:Z,closeIcon:G,handleClose:rt}))})};ge.ErrorBoundary=W;var fe=ge,F=e(28991),Te={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},Ge=Te,Ne=e(27029),A=function(n,s){return r.createElement(Ne.Z,(0,F.Z)((0,F.Z)({},n),{},{ref:s,icon:Ge}))};A.displayName="LockOutlined";var pe=r.forwardRef(A),ve=e(89366),et=e(84305),Se=e(87769),Ce=e(81253),t=e(85893),He=e(78775),Ue=e(43291),Ye=e(32384),Qe=["logo","message","contentStyle","title","subTitle","actions","children"];function be(l){var n,s=l.logo,a=l.message,i=l.contentStyle,p=l.title,m=l.subTitle,P=l.actions,z=l.children,c=(0,Ce.Z)(l,Qe),V=(0,He.YB)(),ae=c.submitter===!1?!1:(0,F.Z)((0,F.Z)({searchConfig:{submitText:V.getMessage("loginForm.submitText","\u767B\u5F55")}},c.submitter),{},{submitButtonProps:(0,F.Z)({size:"large",style:{width:"100%"}},(n=c.submitter)===null||n===void 0?void 0:n.submitButtonProps),render:function(K,G){var x,D=G.pop();if(typeof(c==null||(x=c.submitter)===null||x===void 0?void 0:x.render)=="function"){var E,C;return c==null||(E=c.submitter)===null||E===void 0||(C=E.render)===null||C===void 0?void 0:C.call(E,K,G)}return D}}),se=(0,r.useContext)(Se.ZP.ConfigContext),he=se.getPrefixCls("pro-form-login"),y=function(K){return"".concat(he,"-").concat(K)},re=(0,r.useMemo)(function(){return s?typeof s=="string"?(0,t.jsx)("img",{src:s}):s:null},[s]);return(0,t.jsxs)("div",{className:y("container"),children:[(0,t.jsxs)("div",{className:y("top"),children:[p||re?(0,t.jsxs)("div",{className:y("header"),children:[re?(0,t.jsx)("span",{className:y("logo"),children:re}):null,p?(0,t.jsx)("span",{className:y("title"),children:p}):null]}):null,m?(0,t.jsx)("div",{className:y("desc"),children:m}):null]}),(0,t.jsxs)("div",{className:y("main"),style:(0,F.Z)({width:328},i),children:[(0,t.jsxs)(Ue.A,(0,F.Z)((0,F.Z)({isKeyPressSubmit:!0},c),{},{submitter:ae,children:[a,z]})),P?(0,t.jsx)("div",{className:y("other"),children:P}):null]})]})}var N=e(5966),Oe=e(63434),M=e(13752),Re=e(71390),We=e(36571),Xe=e(85017),S=e.n(Xe),Je=e(63305),te={TRISOMY:"TRISOMY",THALASSEMIA:"THALASSEMIA"};function $(l){var n=(0,r.useState)(te.TRISOMY),s=(0,_.Z)(n,2),a=s[0],i=s[1],p=function(P){console.log(P),i(P)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.Z,{"data-inspector-line":"18","data-inspector-column":"6","data-inspector-relative-path":"src/pages/user/Login/Introduction.tsx",onChange:i,activeKey:a,children:[(0,t.jsx)(o.Z.TabPane,{"data-inspector-line":"19","data-inspector-column":"8","data-inspector-relative-path":"src/pages/user/Login/Introduction.tsx",tab:(0,t.jsx)(t.Fragment,{children:"Trisomy 21, 18, 13"})},te.TRISOMY),(0,t.jsx)(o.Z.TabPane,{"data-inspector-line":"20","data-inspector-column":"8","data-inspector-relative-path":"src/pages/user/Login/Introduction.tsx",tab:(0,t.jsx)(t.Fragment,{children:"B\u1EC7nh tan m\xE1u thalassemia"})},te.THALASSEMIA)]}),a===te.TRISOMY&&(0,t.jsxs)(t.Fragment,{children:["Th\u1EC3 tam nhi\u1EC5m, Trisomy, l\xE0 t\xECnh tr\u1EA1ng c\u1EB7p nhi\u1EC5m s\u1EAFc th\u1EC3 nh\u1EA5t \u0111\u1ECBnh c\xF3 th\xEAm m\u1ED9t nhi\u1EC5m s\u1EAFc th\u1EC3 b\u1ED5 sung.",(0,t.jsx)("br",{"data-inspector-line":"27","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/Introduction.tsx"}),(0,t.jsx)("br",{"data-inspector-line":"28","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/Introduction.tsx"}),"Th\u1EC3 tam nhi\u1EC5m l\xE0 m\u1ED9t lo\u1EA1i \u0111a nhi\u1EC5m trong \u0111\xF3 c\xF3 ba b\u1EA3n sao c\u1EE7a m\u1ED9t nhi\u1EC5m s\u1EAFc th\u1EC3, thay v\xEC hai b\u1EA3n sao nh\u01B0 b\xECnh th\u01B0\u1EDDng. Th\u1EC3 tam nhi\u1EC5m l\xE0 m\u1ED9t d\u1EA1ng d\u1ECB b\u1ED9i (b\u1EA5t th\u01B0\u1EDDng v\u1EC1 s\u1ED1 l\u01B0\u1EE3ng nhi\u1EC5m s\u1EAFc th\u1EC3).",(0,t.jsx)("br",{"data-inspector-line":"32","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/Introduction.tsx"}),(0,t.jsx)("br",{"data-inspector-line":"33","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/Introduction.tsx"}),"V\u1EDBi \u0111\u1EB7c \u0111i\u1EC3m nh\u01B0 v\u1EADy, m\u1ED9t ng\u01B0\u1EDDi b\u1ECB m\u1EAFc th\u1EC3 tam nhi\u1EC5m s\u1EBD c\xF3 t\u1ED5ng s\u1ED1 47 nhi\u1EC5m s\u1EAFc th\u1EC3, thay v\xEC 46. N\u1EBFu c\xE1c c\u1EB7p nhi\u1EC5m s\u1EAFc th\u1EC3 kh\xF4ng ph\xE2n ly \u0111\xFAng c\xE1ch trong qu\xE1 tr\xECnh ph\xE2n b\xE0o, tr\u1EE9ng ho\u1EB7c tinh tr\xF9ng c\xF3 th\u1EC3 t\u1EA1o ra b\u1EA3n sao th\u1EE9 hai c\u1EE7a m\u1ED9t trong c\xE1c nhi\u1EC5m s\u1EAFc th\u1EC3. N\u1EBFu m\u1ED9t giao t\u1EED nh\u01B0 v\u1EADy d\u1EABn \u0111\u1EBFn th\u1EE5 tinh v\xE0 t\u1EA1o th\xE0nh ph\xF4i, th\xEC ph\xF4i t\u1EA1o th\xE0nh c\u0169ng c\xF3 th\u1EC3 c\xF3 to\xE0n b\u1ED9 b\u1EA3n sao c\u1EE7a nhi\u1EC5m s\u1EAFc th\u1EC3 ph\u1EE5.",(0,t.jsx)("br",{"data-inspector-line":"39","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/Introduction.tsx"}),(0,t.jsx)("br",{"data-inspector-line":"40","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/Introduction.tsx"}),"H\u1ED9i ch\u1EE9ng Down, h\u1ED9i ch\u1EE9ng Edwards v\xE0 h\u1ED9i ch\u1EE9ng Patau l\xE0 nh\u1EEFng d\u1EA1ng tam nhi\u1EC5m th\u01B0\u1EDDng g\u1EB7p nh\u1EA5t. Tr\u1EBB em b\u1ECB \u1EA3nh h\u01B0\u1EDFng b\u1EDFi trisomy th\u01B0\u1EDDng c\xF3 m\u1ED9t lo\u1EA1t c\xE1c d\u1ECB t\u1EADt b\u1EA9m sinh, bao g\u1ED3m ch\u1EADm ph\xE1t tri\u1EC3n v\xE0 khuy\u1EBFt t\u1EADt tr\xED tu\u1EC7."]}),a===te.THALASSEMIA&&(0,t.jsx)(t.Fragment,{children:"B\u1EC7nh tan m\xE1u b\u1EA9m sinh (thalassemia) l\xE0 m\u1ED9t nh\xF3m b\u1EC7nh huy\u1EBFt s\u1EAFc t\u1ED1 g\xE2y thi\u1EBFu m\xE1u, tan m\xE1u di truy\u1EC1n. M\u1ED7i th\u1EC3 b\u1EC7nh l\xE0 do b\u1EA5t th\u01B0\u1EDDng t\u1ED5ng h\u1EE3p m\u1ED9t lo\u1EA1i chu\u1ED7i globin; C\xF3 hai th\u1EC3 b\u1EC7nh ch\xEDnh l\xE0 alpha thalassemia v\xE0 beta thalassemia; ngo\xE0i ra c\xF3 c\xE1c th\u1EC3 ph\u1ED1i h\u1EE3p kh\xE1c nh\u01B0 thalassemia v\xE0 b\u1EC7nh huy\u1EBFt s\u1EAFc t\u1ED1."})]})}var ne=$,L=function(n){var s=n.content;return(0,t.jsx)(fe,{"data-inspector-line":"27","data-inspector-column":"2","data-inspector-relative-path":"src/pages/user/Login/index.tsx",style:{marginBottom:24},message:s,type:"error",showIcon:!0})},ke=function(n){var s=n.index,a=(0,r.useState)({}),i=(0,_.Z)(a,2),p=i[0],m=i[1],P=(0,r.useState)("doctor"),z=(0,_.Z)(P,2),c=z[0],V=z[1],ae=(0,M.tT)("@@initialState"),se=ae.setInitialState,he=s.name,y=(0,M.YB)(),re=function(){var G=(0,q.Z)((0,Y.Z)().mark(function x(D){var E,C,Ze,$e;return(0,Y.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,v.next=3,(0,We.x4)((0,b.Z)((0,b.Z)({},D),{},{type:c}));case 3:if(E=v.sent,!(E!=null&&E.user)){v.next=15;break}return Je.Z.save(E.accessToken,E.refreshToken),ce.ZP.success("\u0110\u0103ng nh\u1EADp th\xE0nh c\xF4ng!"),v.next=9,se(function(we){return(0,b.Z)((0,b.Z)({},we),{},{currentUser:E.user})});case 9:if(M.m8){v.next=11;break}return v.abrupt("return");case 11:return C=M.m8.location.query,Ze=C,$e=Ze.redirect,M.m8.push($e||"/"),v.abrupt("return");case 15:m(E),v.next=22;break;case 18:v.prev=18,v.t0=v.catch(0),console.log("login error",v.t0),ce.ZP.error("\u0110\u0103ng nh\u1EADp th\u1EA5t b\u1EA1i!");case 22:case"end":return v.stop()}},x,null,[[0,18]])}));return function(D){return G.apply(this,arguments)}}(),oe=p.status,K=p.type;return(0,t.jsxs)("div",{"data-inspector-line":"72","data-inspector-column":"4","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:S().container,children:[(0,t.jsx)("div",{"data-inspector-line":"73","data-inspector-column":"6","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:S().lang,"data-lang":!0,id:"lang-select",children:M.pD&&(0,t.jsx)(M.pD,{"data-inspector-line":"74","data-inspector-column":"23","data-inspector-relative-path":"src/pages/user/Login/index.tsx"})}),(0,t.jsx)("div",{"data-inspector-line":"76","data-inspector-column":"6","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:S().content,children:(0,t.jsxs)(H.Z,{"data-inspector-line":"77","data-inspector-column":"8","data-inspector-relative-path":"src/pages/user/Login/index.tsx",children:[(0,t.jsx)(U.Z,{"data-inspector-line":"78","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",md:12,xs:24,children:(0,t.jsx)(ne,{"data-inspector-line":"79","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx"})}),(0,t.jsx)(U.Z,{"data-inspector-line":"81","data-inspector-column":"10","data-inspector-relative-path":"src/pages/user/Login/index.tsx",md:12,xs:24,children:(0,t.jsxs)(be,{"data-inspector-line":"82","data-inspector-column":"12","data-inspector-relative-path":"src/pages/user/Login/index.tsx",submitter:{searchConfig:{submitText:"\u0110\u0103ng nh\u1EADp"}},logo:(0,t.jsx)("img",{"data-inspector-line":"88","data-inspector-column":"20","data-inspector-relative-path":"src/pages/user/Login/index.tsx",alt:"logo",src:"/logo.svg"}),title:"\u0110\u1EA1i h\u1ECDc B\xE1ch Khoa HN",subTitle:"T\u1EA7m so\xE1t b\u1EC7nh di truy\u1EC1n \u1EDF thai nhi",initialValues:{autoLogin:!0},onFinish:function(){var G=(0,q.Z)((0,Y.Z)().mark(function x(D){return(0,Y.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,re(D);case 2:case"end":return C.stop()}},x)}));return function(x){return G.apply(this,arguments)}}(),children:[(0,t.jsxs)(o.Z,{"data-inspector-line":"98","data-inspector-column":"14","data-inspector-relative-path":"src/pages/user/Login/index.tsx",activeKey:c,onChange:function(x){console.log(x),V(x)},children:[(0,t.jsx)(o.Z.TabPane,{"data-inspector-line":"106","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",tab:"B\xE1c s\u0129"},"doctor"),(0,t.jsx)(o.Z.TabPane,{"data-inspector-line":"107","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",tab:"Qu\u1EA3n tr\u1ECB vi\xEAn"},"admin")]}),oe==="error"&&K==="account"&&(0,t.jsx)(L,{"data-inspector-line":"111","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",content:y.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(admin/ant.design)"})}),c==="doctor"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N.Z,{"data-inspector-line":"120","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",name:"email",fieldProps:{size:"large",prefix:(0,t.jsx)(ve.Z,{"data-inspector-line":"124","data-inspector-column":"30","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:S().prefixIcon})},placeholder:"Nh\u1EADp email c\u1EE7a b\xE1c s\u0129",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADp email c\u1EE7a b\xE1c s\u0129"}]}),(0,t.jsx)(N.Z.Password,{"data-inspector-line":"134","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",name:"password",fieldProps:{size:"large",prefix:(0,t.jsx)(pe,{"data-inspector-line":"138","data-inspector-column":"30","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:S().prefixIcon})},placeholder:"Nh\u1EADp m\u1EADt kh\u1EA9u",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADn m\u1EADt kh\u1EA9u"}]})]}),oe==="error"&&K==="mobile"&&(0,t.jsx)(L,{"data-inspector-line":"152","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),c==="admin"&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(N.Z,{"data-inspector-line":"156","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",name:"email",fieldProps:{size:"large",prefix:(0,t.jsx)(ve.Z,{"data-inspector-line":"160","data-inspector-column":"30","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:S().prefixIcon})},placeholder:"Nh\u1EADp email c\u1EE7a b\xE1c s\u0129",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADp email c\u1EE7a b\xE1c s\u0129"}]}),(0,t.jsx)(N.Z.Password,{"data-inspector-line":"170","data-inspector-column":"18","data-inspector-relative-path":"src/pages/user/Login/index.tsx",name:"password",fieldProps:{size:"large",prefix:(0,t.jsx)(pe,{"data-inspector-line":"174","data-inspector-column":"30","data-inspector-relative-path":"src/pages/user/Login/index.tsx",className:S().prefixIcon})},placeholder:"Nh\u1EADp m\u1EADt kh\u1EA9u",rules:[{required:!0,message:"Vui l\xF2ng nh\u1EADn m\u1EADt kh\u1EA9u"}]})]}),(0,t.jsxs)("div",{"data-inspector-line":"186","data-inspector-column":"14","data-inspector-relative-path":"src/pages/user/Login/index.tsx",style:{marginBottom:24},children:[(0,t.jsx)(Oe.Z,{"data-inspector-line":"191","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",noStyle:!0,name:"autoLogin",children:"Nh\u1EDB m\u1EADt kh\u1EA9u"}),(0,t.jsx)("a",{"data-inspector-line":"194","data-inspector-column":"16","data-inspector-relative-path":"src/pages/user/Login/index.tsx",style:{float:"right"},children:"Qu\xEAn m\u1EADt kh\u1EA9u"})]})]})})]})}),(0,t.jsx)(Re.Z,{"data-inspector-line":"206","data-inspector-column":"6","data-inspector-relative-path":"src/pages/user/Login/index.tsx"})]})},ye=(0,M.$j)(function(l){var n=l.index,s=l.loading;return{index:n,loading:s.models.index}})(ke)}}]);
