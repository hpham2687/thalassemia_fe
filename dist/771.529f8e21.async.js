(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[771],{64335:function(fe,W,i){"use strict";var q=i(67294),G=(0,q.createContext)({});W.Z=G},21349:function(fe,W,i){"use strict";var q=i(84305),G=i(87769),p=i(85893),B=i(94184),_=i.n(B),k=i(67294),ee=i(64335),te=i(53645),re=i.n(te),ne=function(O){var ae=(0,k.useContext)(ee.Z),d=O.children,U=O.contentWidth,oe=O.className,X=O.style,ie=(0,k.useContext)(G.ZP.ConfigContext),Y=ie.getPrefixCls,V=O.prefixCls||Y("pro"),L=U||ae.contentWidth,J="".concat(V,"-grid-content");return(0,p.jsx)("div",{className:_()(J,oe,{wide:L==="Fixed"}),style:X,children:(0,p.jsx)("div",{className:"".concat(V,"-grid-content-children"),children:d})})};W.Z=ne},4771:function(fe,W,i){"use strict";i.d(W,{ZP:function(){return Pt}});var q=i(38663),G=i(70883),p=i(22122),B=i(96156),_=i(6610),k=i(5991),ee=i(10379),te=i(54070),re=i(90484),ne=i(94184),j=i.n(ne),O=i(48717),ae=i(98423),d=i(67294),U=i(53124),oe=i(85061),X=i(75164);function ie(a){var e,t=function(o){return function(){e=null,a.apply(void 0,(0,oe.Z)(o))}},r=function(){if(e==null){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];e=(0,X.Z)(t(s))}};return r.cancel=function(){X.Z.cancel(e),e=null},r}function Y(){return function(e,t,r){var n=r.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(t))return n;var c=ie(n.bind(this));return o=!0,Object.defineProperty(this,t,{value:c,configurable:!0,writable:!0}),o=!1,c}}}}var V=i(64019);function L(a){return a!==window?a.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function J(a,e,t){if(t!==void 0&&e.top>a.top-t)return t+e.top}function ue(a,e,t){if(t!==void 0&&e.bottom<a.bottom+t){var r=window.innerHeight-e.bottom;return t+r}}var ve=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],H=[];function Ft(){return H}function he(a,e){if(!!a){var t=H.find(function(r){return r.target===a});t?t.affixList.push(e):(t={target:a,affixList:[e],eventHandlers:{}},H.push(t),ve.forEach(function(r){t.eventHandlers[r]=(0,V.Z)(a,r,function(){t.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function me(a){var e=H.find(function(t){var r=t.affixList.some(function(n){return n===a});return r&&(t.affixList=t.affixList.filter(function(n){return n!==a})),r});e&&e.affixList.length===0&&(H=H.filter(function(t){return t!==e}),ve.forEach(function(t){var r=e.eventHandlers[t];r&&r.remove&&r.remove()}))}var ge=function(a,e,t,r){var n=arguments.length,o=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if((typeof Reflect=="undefined"?"undefined":(0,re.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(a,e,t,r);else for(var c=a.length-1;c>=0;c--)(s=a[c])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};function je(){return typeof window!="undefined"?window:null}var w;(function(a){a[a.None=0]="None",a[a.Prepare=1]="Prepare"})(w||(w={}));var Q=function(a){(0,ee.Z)(t,a);var e=(0,te.Z)(t);function t(){var r;return(0,_.Z)(this,t),r=e.apply(this,arguments),r.state={status:w.None,lastAffix:!1,prevTarget:null},r.getOffsetTop=function(){var n=r.props,o=n.offsetBottom,s=n.offsetTop;return o===void 0&&s===void 0?0:s},r.getOffsetBottom=function(){return r.props.offsetBottom},r.savePlaceholderNode=function(n){r.placeholderNode=n},r.saveFixedNode=function(n){r.fixedNode=n},r.measure=function(){var n=r.state,o=n.status,s=n.lastAffix,c=r.props.onChange,f=r.getTargetFunc();if(!(o!==w.Prepare||!r.fixedNode||!r.placeholderNode||!f)){var m=r.getOffsetTop(),v=r.getOffsetBottom(),g=f();if(!!g){var l={status:w.None},P=L(g),h=L(r.placeholderNode),C=J(h,P,m),b=ue(h,P,v);C!==void 0?(l.affixStyle={position:"fixed",top:C,width:h.width,height:h.height},l.placeholderStyle={width:h.width,height:h.height}):b!==void 0&&(l.affixStyle={position:"fixed",bottom:b,width:h.width,height:h.height},l.placeholderStyle={width:h.width,height:h.height}),l.lastAffix=!!l.affixStyle,c&&s!==l.lastAffix&&c(l.lastAffix),r.setState(l)}}},r.prepareMeasure=function(){if(r.setState({status:w.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},r}return(0,k.Z)(t,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,o=this.props.target;return o!==void 0?o:n||je}},{key:"componentDidMount",value:function(){var n=this,o=this.getTargetFunc();o&&(this.timeout=setTimeout(function(){he(o(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var o=this.state.prevTarget,s=this.getTargetFunc(),c=(s==null?void 0:s())||null;o!==c&&(me(this),c&&(he(c,this),this.updatePosition()),this.setState({prevTarget:c})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),me(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),o=this.state.affixStyle;if(n&&o){var s=this.getOffsetTop(),c=this.getOffsetBottom(),f=n();if(f&&this.placeholderNode){var m=L(f),v=L(this.placeholderNode),g=J(v,m,s),l=ue(v,m,c);if(g!==void 0&&o.top===g||l!==void 0&&o.bottom===l)return}}this.prepareMeasure()}},{key:"render",value:function(){var n=this,o=this.state,s=o.affixStyle,c=o.placeholderStyle,f=this.props,m=f.affixPrefixCls,v=f.children,g=j()((0,B.Z)({},m,!!s)),l=(0,ae.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return d.createElement(O.Z,{onResize:function(){n.updatePosition()}},d.createElement("div",(0,p.Z)({},l,{ref:this.savePlaceholderNode}),s&&d.createElement("div",{style:c,"aria-hidden":"true"}),d.createElement("div",{className:g,ref:this.saveFixedNode,style:s},d.createElement(O.Z,{onResize:function(){n.updatePosition()}},v))))}}]),t}(d.Component);Q.contextType=U.E_,ge([Y()],Q.prototype,"updatePosition",null),ge([Y()],Q.prototype,"lazyUpdatePosition",null);var Ae=d.forwardRef(function(a,e){var t=a.prefixCls,r=d.useContext(U.E_),n=r.getPrefixCls,o=n("affix",t),s=(0,p.Z)((0,p.Z)({},a),{affixPrefixCls:o});return d.createElement(Q,(0,p.Z)({},s,{ref:e}))}),De=Ae,Lt=i(84305),le=i(87769),Ht=i(59903),wt=i(94233),It=i(36017),zt=i(49111),xe=i(28481),u=i(28991),Fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Le=Fe,Ce=i(27029),ye=function(e,t){return d.createElement(Ce.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:Le}))};ye.displayName="ArrowLeftOutlined";var He=d.forwardRef(ye),we={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Ie=we,Pe=function(e,t){return d.createElement(Ce.Z,(0,u.Z)((0,u.Z)({},e),{},{ref:t,icon:Ie}))};Pe.displayName="ArrowRightOutlined";var ze=d.forwardRef(Pe),We=i(30470),Ue=i(51890),$e=i(35247),Ke=i(42051),Ge=i(19650),be=i(15105),ke=function(a,e){var t={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(t[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(a);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(a,r[n])&&(t[r[n]]=a[r[n]]);return t},Xe={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Ye=d.forwardRef(function(a,e){var t=function(v){var g=v.keyCode;g===be.Z.ENTER&&v.preventDefault()},r=function(v){var g=v.keyCode,l=a.onClick;g===be.Z.ENTER&&l&&l()},n=a.style,o=a.noStyle,s=a.disabled,c=ke(a,["style","noStyle","disabled"]),f={};return o||(f=(0,p.Z)({},Xe)),s&&(f.pointerEvents="none"),f=(0,p.Z)((0,p.Z)({},f),n),d.createElement("div",(0,p.Z)({role:"button",tabIndex:0,ref:e},c,{onKeyDown:t,onKeyUp:r,style:f}))}),Ve=Ye,Je=function(e,t,r){return!t||!r?null:d.createElement(Ke.Z,{componentName:"PageHeader"},function(n){var o=n.back;return d.createElement("div",{className:"".concat(e,"-back")},d.createElement(Ve,{onClick:function(c){r==null||r(c)},className:"".concat(e,"-back-button"),"aria-label":o},t))})},Qe=function(e){return d.createElement($e.Z,(0,p.Z)({},e))},qe=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:t==="rtl"?d.createElement(ze,null):d.createElement(He,null)},_e=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=t.title,o=t.avatar,s=t.subTitle,c=t.tags,f=t.extra,m=t.onBack,v="".concat(e,"-heading"),g=n||s||c||f;if(!g)return null;var l=qe(t,r),P=Je(e,l,m),h=P||o||g;return d.createElement("div",{className:v},h&&d.createElement("div",{className:"".concat(v,"-left")},P,o&&d.createElement(Ue.C,(0,p.Z)({},o)),n&&d.createElement("span",{className:"".concat(v,"-title"),title:typeof n=="string"?n:void 0},n),s&&d.createElement("span",{className:"".concat(v,"-sub-title"),title:typeof s=="string"?s:void 0},s),c&&d.createElement("span",{className:"".concat(v,"-tags")},c)),f&&d.createElement("span",{className:"".concat(v,"-extra")},d.createElement(Ge.Z,null,f)))},et=function(e,t){return t?d.createElement("div",{className:"".concat(e,"-footer")},t):null},tt=function(e,t){return d.createElement("div",{className:"".concat(e,"-content")},t)},rt=function(e){var t=(0,We.Z)(!1),r=(0,xe.Z)(t,2),n=r[0],o=r[1],s=function(f){var m=f.width;o(m<768,!0)};return d.createElement(U.C,null,function(c){var f,m=c.getPrefixCls,v=c.pageHeader,g=c.direction,l,P=e.prefixCls,h=e.style,C=e.footer,b=e.children,y=e.breadcrumb,E=e.breadcrumbRender,T=e.className,N=!0;"ghost"in e?N=e.ghost:v&&"ghost"in v&&(N=v.ghost);var R=m("page-header",P),I=function(){return(y==null?void 0:y.routes)?Qe(y):null},S=I(),A=y&&"props"in y,D=(l=E==null?void 0:E(e,S))!==null&&l!==void 0?l:S,Z=A?y:D,z=j()(R,T,(f={"has-breadcrumb":!!Z,"has-footer":!!C},(0,B.Z)(f,"".concat(R,"-ghost"),N),(0,B.Z)(f,"".concat(R,"-rtl"),g==="rtl"),(0,B.Z)(f,"".concat(R,"-compact"),n),f));return d.createElement(O.Z,{onResize:s},d.createElement("div",{className:z,style:h},Z,_e(R,e,g),b&&tt(R,b),et(R,C)))})},nt=rt,se=i(81253),Wt=i(18106),Ze=i(51752),x=i(85893),de=i(64335),at=i(97435),Ut=i(56264),ot=["children","className","extra","style","renderContent"],it=function(e){var t=e.children,r=e.className,n=e.extra,o=e.style,s=e.renderContent,c=(0,se.Z)(e,ot),f=(0,d.useContext)(le.ZP.ConfigContext),m=f.getPrefixCls,v=e.prefixCls||m("pro"),g="".concat(v,"-footer-bar"),l=(0,d.useContext)(de.Z),P=(0,d.useMemo)(function(){var C=l.hasSiderMenu,b=l.isMobile,y=l.siderWidth;if(!!C)return y?b?"100%":"calc(100% - ".concat(y,"px)"):"100%"},[l.collapsed,l.hasSiderMenu,l.isMobile,l.siderWidth]),h=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"".concat(g,"-left"),children:n}),(0,x.jsx)("div",{className:"".concat(g,"-right"),children:t})]});return(0,d.useEffect)(function(){return!l||!(l==null?void 0:l.setHasFooterToolbar)?function(){}:(l==null||l.setHasFooterToolbar(!0),function(){var C;l==null||(C=l.setHasFooterToolbar)===null||C===void 0||C.call(l,!1)})},[]),(0,x.jsx)("div",(0,u.Z)((0,u.Z)({className:j()(r,"".concat(g)),style:(0,u.Z)({width:P},o)},(0,at.Z)(c,["prefixCls"])),{},{children:s?s((0,u.Z)((0,u.Z)((0,u.Z)({},e),l),{},{leftWidth:P}),h):h}))},lt=it,st=i(21349),dt=i(83832),ct=function(e){if(!e)return 1;var t=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/t},ft=function(e){var t=e.children,r=e.style,n=e.className,o=e.markStyle,s=e.markClassName,c=e.zIndex,f=c===void 0?9:c,m=e.gapX,v=m===void 0?212:m,g=e.gapY,l=g===void 0?222:g,P=e.width,h=P===void 0?120:P,C=e.height,b=C===void 0?64:C,y=e.rotate,E=y===void 0?-22:y,T=e.image,N=e.content,R=e.offsetLeft,I=e.offsetTop,S=e.fontStyle,A=S===void 0?"normal":S,D=e.fontWeight,Z=D===void 0?"normal":D,z=e.fontColor,ce=z===void 0?"rgba(0,0,0,.15)":z,pe=e.fontSize,Ee=pe===void 0?16:pe,Ne=e.fontFamily,Re=Ne===void 0?"sans-serif":Ne,bt=e.prefixCls,Zt=(0,d.useContext)(le.ZP.ConfigContext),pt=Zt.getPrefixCls,Te=pt("pro-layout-watermark",bt),Et=j()("".concat(Te,"-wrapper"),n),Nt=j()(Te,s),Rt=(0,d.useState)(""),Oe=(0,xe.Z)(Rt,2),Se=Oe[0],Me=Oe[1];return(0,d.useEffect)(function(){var $=document.createElement("canvas"),M=$.getContext("2d"),F=ct(M),Tt="".concat((v+h)*F,"px"),Ot="".concat((l+b)*F,"px"),St=R||v/2,Mt=I||l/2;if($.setAttribute("width",Tt),$.setAttribute("height",Ot),M){M.translate(St*F,Mt*F),M.rotate(Math.PI/180*Number(E));var Bt=h*F,Be=b*F;if(T){var K=new Image;K.crossOrigin="anonymous",K.referrerPolicy="no-referrer",K.src=T,K.onload=function(){M.drawImage(K,0,0,Bt,Be),Me($.toDataURL())}}else if(N){var jt=Number(Ee)*F;M.font="".concat(A," normal ").concat(Z," ").concat(jt,"px/").concat(Be,"px ").concat(Re),M.fillStyle=ce,Array.isArray(N)?N==null||N.forEach(function(At,Dt){return M.fillText(At,0,Dt*50)}):M.fillText(N,0,0),Me($.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[v,l,R,I,E,A,Z,h,b,Re,ce,T,N,Ee]),(0,x.jsxs)("div",{style:(0,u.Z)({position:"relative"},r),className:Et,children:[t,(0,x.jsx)("div",{className:Nt,style:(0,u.Z)((0,u.Z)({zIndex:f,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(v+h,"px"),pointerEvents:"none",backgroundRepeat:"repeat"},Se?{backgroundImage:"url('".concat(Se,"')")}:null),o)})]})},ut=ft,$t=i(12395),vt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],ht=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function mt(a){return(0,re.Z)(a)==="object"?a:{spinning:a}}var gt=function(e){var t=e.tabList,r=e.tabActiveKey,n=e.onTabChange,o=e.tabBarExtraContent,s=e.tabProps,c=e.prefixedClassName;return Array.isArray(t)||o?(0,x.jsx)(Ze.Z,(0,u.Z)((0,u.Z)({className:"".concat(c,"-tabs"),activeKey:r,onChange:function(m){n&&n(m)},tabBarExtraContent:o},s),{},{children:t==null?void 0:t.map(function(f,m){return(0,d.createElement)(Ze.Z.TabPane,(0,u.Z)((0,u.Z)({},f),{},{tab:f.tab,key:f.key||m}))})})):null},xt=function(e,t,r){return!e&&!t?null:(0,x.jsx)("div",{className:"".concat(r,"-detail"),children:(0,x.jsx)("div",{className:"".concat(r,"-main"),children:(0,x.jsxs)("div",{className:"".concat(r,"-row"),children:[e&&(0,x.jsx)("div",{className:"".concat(r,"-content"),children:e}),t&&(0,x.jsx)("div",{className:"".concat(r,"-extraContent"),children:t})]})})})},Kt=function(e){var t=useContext(RouteContext);return _jsx("div",{style:{height:"100%",display:"flex",alignItems:"center"},children:_jsx(_Breadcrumb,_objectSpread(_objectSpread(_objectSpread({},t==null?void 0:t.breadcrumb),t==null?void 0:t.breadcrumbProps),e))})},Ct=function(e){var t,r=(0,d.useContext)(de.Z),n=e.title,o=e.content,s=e.pageHeaderRender,c=e.header,f=e.prefixedClassName,m=e.extraContent,v=e.style,g=e.prefixCls,l=e.breadcrumbRender,P=(0,se.Z)(e,vt),h=(0,d.useMemo)(function(){if(!!l)return l},[l]);if(s===!1)return null;if(s)return(0,x.jsxs)(x.Fragment,{children:[" ",s((0,u.Z)((0,u.Z)({},e),r))]});var C=n;!n&&n!==!1&&(C=r.title);var b=(0,u.Z)((0,u.Z)((0,u.Z)({},r),{},{title:C},P),{},{footer:gt((0,u.Z)((0,u.Z)({},P),{},{breadcrumbRender:l,prefixedClassName:f}))},c),y=b.breadcrumb,E=(!y||!(y==null?void 0:y.itemRender)&&!(y==null||(t=y.routes)===null||t===void 0?void 0:t.length))&&!l;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(T){return!b[T]})&&E&&!o&&!m?null:(0,x.jsx)("div",{className:"".concat(f,"-warp"),children:(0,x.jsx)(nt,(0,u.Z)((0,u.Z)({},b),{},{breadcrumb:l===!1?void 0:(0,u.Z)((0,u.Z)({},b.breadcrumb),r.breadcrumbProps),breadcrumbRender:h,prefixCls:g,children:(c==null?void 0:c.children)||xt(o,m,f)}))})},yt=function(e){var t,r,n=e.children,o=e.loading,s=o===void 0?!1:o,c=e.className,f=e.style,m=e.footer,v=e.affixProps,g=e.ghost,l=e.fixedHeader,P=e.breadcrumbRender,h=(0,se.Z)(e,ht),C=(0,d.useContext)(de.Z),b=(0,d.useContext)(le.ZP.ConfigContext),y=b.getPrefixCls,E=e.prefixCls||y("pro"),T="".concat(E,"-page-container"),N=j()(T,c,(t={},(0,B.Z)(t,"".concat(E,"-page-container-ghost"),g),(0,B.Z)(t,"".concat(E,"-page-container-with-footer"),m),t)),R=(0,d.useMemo)(function(){return n?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"".concat(T,"-children-content"),children:n}),C.hasFooterToolbar&&(0,x.jsx)("div",{style:{height:48,marginTop:24}})]}):null},[n,T,C.hasFooterToolbar]),I=(0,d.useMemo)(function(){var Z;return P==!1?!1:P||(h==null||(Z=h.header)===null||Z===void 0?void 0:Z.breadcrumbRender)},[P,h==null||(r=h.header)===null||r===void 0?void 0:r.breadcrumbRender]),S=(0,x.jsx)(Ct,(0,u.Z)((0,u.Z)({},h),{},{breadcrumbRender:I,ghost:g,prefixCls:void 0,prefixedClassName:T})),A=(0,d.useMemo)(function(){if(d.isValidElement(s))return s;if(typeof s=="boolean"&&!s)return null;var Z=mt(s);return Z.spinning?(0,x.jsx)(dt.Z,(0,u.Z)({},Z)):null},[s]),D=(0,d.useMemo)(function(){var Z=A||R;if(e.waterMarkProps||C.waterMarkProps){var z=(0,u.Z)((0,u.Z)({},C.waterMarkProps),e.waterMarkProps);return(0,x.jsx)(ut,(0,u.Z)((0,u.Z)({},z),{},{children:Z}))}return Z},[e.waterMarkProps,C.waterMarkProps,A,R]);return(0,x.jsxs)("div",{style:f,className:N,children:[l&&S?(0,x.jsx)(De,(0,u.Z)((0,u.Z)({offsetTop:C.hasHeader&&C.fixedHeader?C.headerHeight:0},v),{},{children:S})):S,D&&(0,x.jsx)(st.Z,{children:D}),m&&(0,x.jsx)(lt,{prefixCls:E,children:m})]})},Pt=yt},56264:function(){},53645:function(){},12395:function(){},70883:function(){},59903:function(){}}]);