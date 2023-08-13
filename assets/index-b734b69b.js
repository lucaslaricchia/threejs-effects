function r0(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function o0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Gm={exports:{}},Wl={},Vm={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),s0=Symbol.for("react.portal"),a0=Symbol.for("react.fragment"),l0=Symbol.for("react.strict_mode"),u0=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),f0=Symbol.for("react.context"),d0=Symbol.for("react.forward_ref"),h0=Symbol.for("react.suspense"),p0=Symbol.for("react.memo"),m0=Symbol.for("react.lazy"),Vd=Symbol.iterator;function g0(t){return t===null||typeof t!="object"?null:(t=Vd&&t[Vd]||t["@@iterator"],typeof t=="function"?t:null)}var Wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xm=Object.assign,jm={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Wm}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ym(){}Ym.prototype=Yo.prototype;function Df(t,e,n){this.props=t,this.context=e,this.refs=jm,this.updater=n||Wm}var Uf=Df.prototype=new Ym;Uf.constructor=Df;Xm(Uf,Yo.prototype);Uf.isPureReactComponent=!0;var Wd=Array.isArray,qm=Object.prototype.hasOwnProperty,Nf={current:null},$m={key:!0,ref:!0,__self:!0,__source:!0};function Km(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)qm.call(e,i)&&!$m.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sa,type:t,key:o,ref:s,props:r,_owner:Nf.current}}function v0(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function If(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function _0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xd=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_0(""+t.key):e.toString(36)}function nl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case sa:case s0:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+_u(s,0):i,Wd(r)?(n="",t!=null&&(n=t.replace(Xd,"$&/")+"/"),nl(r,e,n,"",function(u){return u})):r!=null&&(If(r)&&(r=v0(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Xd,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Wd(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+_u(o,a);s+=nl(o,e,n,l,r)}else if(l=g0(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+_u(o,a++),s+=nl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ma(t,e,n){if(t==null)return t;var i=[],r=0;return nl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function x0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},il={transition:null},y0={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:il,ReactCurrentOwner:Nf};je.Children={map:ma,forEach:function(t,e,n){ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ma(t,function(){e++}),e},toArray:function(t){return ma(t,function(e){return e})||[]},only:function(t){if(!If(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Yo;je.Fragment=a0;je.Profiler=u0;je.PureComponent=Df;je.StrictMode=l0;je.Suspense=h0;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y0;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Xm({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Nf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qm.call(e,l)&&!$m.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:sa,type:t.type,key:r,ref:o,props:i,_owner:s}};je.createContext=function(t){return t={$$typeof:f0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:c0,_context:t},t.Consumer=t};je.createElement=Km;je.createFactory=function(t){var e=Km.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:d0,render:t}};je.isValidElement=If;je.lazy=function(t){return{$$typeof:m0,_payload:{_status:-1,_result:t},_init:x0}};je.memo=function(t,e){return{$$typeof:p0,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};je.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};je.useCallback=function(t,e){return Qt.current.useCallback(t,e)};je.useContext=function(t){return Qt.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};je.useEffect=function(t,e){return Qt.current.useEffect(t,e)};je.useId=function(){return Qt.current.useId()};je.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return Qt.current.useMemo(t,e)};je.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};je.useRef=function(t){return Qt.current.useRef(t)};je.useState=function(t){return Qt.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return Qt.current.useTransition()};je.version="18.2.0";Vm.exports=je;var ye=Vm.exports;const Zm=o0(ye),S0=r0({__proto__:null,default:Zm},[ye]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0=ye,E0=Symbol.for("react.element"),T0=Symbol.for("react.fragment"),w0=Object.prototype.hasOwnProperty,A0=M0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R0={key:!0,ref:!0,__self:!0,__source:!0};function Qm(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)w0.call(e,i)&&!R0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:E0,type:t,key:o,ref:s,props:r,_owner:A0.current}}Wl.Fragment=T0;Wl.jsx=Qm;Wl.jsxs=Qm;Gm.exports=Wl;var en=Gm.exports,Tc={},Jm={exports:{}},yn={},eg={exports:{}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,$){var X=F.length;F.push($);e:for(;0<X;){var B=X-1>>>1,W=F[B];if(0<r(W,$))F[B]=$,F[X]=W,X=B;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var $=F[0],X=F.pop();if(X!==$){F[0]=X;e:for(var B=0,W=F.length,he=W>>>1;B<he;){var ae=2*(B+1)-1,me=F[ae],xe=ae+1,Re=F[xe];if(0>r(me,X))xe<W&&0>r(Re,me)?(F[B]=Re,F[xe]=X,B=xe):(F[B]=me,F[ae]=X,B=ae);else if(xe<W&&0>r(Re,X))F[B]=Re,F[xe]=X,B=xe;else break e}}return $}function r(F,$){var X=F.sortIndex-$.sortIndex;return X!==0?X:F.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,m=!1,x=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(F){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=F)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function g(F){if(y=!1,v(F),!x)if(n(l)!==null)x=!0,ie(M);else{var $=n(u);$!==null&&ee(g,$.startTime-F)}}function M(F,$){x=!1,y&&(y=!1,f(U),U=-1),m=!0;var X=h;try{for(v($),d=n(l);d!==null&&(!(d.expirationTime>$)||F&&!te());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var W=B(d.expirationTime<=$);$=t.unstable_now(),typeof W=="function"?d.callback=W:d===n(l)&&i(l),v($)}else i(l);d=n(l)}if(d!==null)var he=!0;else{var ae=n(u);ae!==null&&ee(g,ae.startTime-$),he=!1}return he}finally{d=null,h=X,m=!1}}var R=!1,T=null,U=-1,S=5,w=-1;function te(){return!(t.unstable_now()-w<S)}function Z(){if(T!==null){var F=t.unstable_now();w=F;var $=!0;try{$=T(!0,F)}finally{$?H():(R=!1,T=null)}}else R=!1}var H;if(typeof _=="function")H=function(){_(Z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,q=j.port2;j.port1.onmessage=Z,H=function(){q.postMessage(null)}}else H=function(){p(Z,0)};function ie(F){T=F,R||(R=!0,H())}function ee(F,$){U=p(function(){F(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,ie(M))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var X=h;h=$;try{return F()}finally{h=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=h;h=F;try{return $()}finally{h=X}},t.unstable_scheduleCallback=function(F,$,X){var B=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?B+X:B):X=B,F){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=X+W,F={id:c++,callback:$,priorityLevel:F,startTime:X,expirationTime:W,sortIndex:-1},X>B?(F.sortIndex=X,e(u,F),n(l)===null&&F===n(u)&&(y?(f(U),U=-1):y=!0,ee(g,X-B))):(F.sortIndex=W,e(l,F),x||m||(x=!0,ie(M))),F},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(F){var $=h;return function(){var X=h;h=$;try{return F.apply(this,arguments)}finally{h=X}}}})(tg);eg.exports=tg;var C0=eg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng=ye,xn=C0;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ig=new Set,zs={};function Ir(t,e){No(t,e),No(t+"Capture",e)}function No(t,e){for(zs[t]=e,t=0;t<e.length;t++)ig.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=Object.prototype.hasOwnProperty,b0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jd={},Yd={};function P0(t){return wc.call(Yd,t)?!0:wc.call(jd,t)?!1:b0.test(t)?Yd[t]=!0:(jd[t]=!0,!1)}function L0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function D0(t,e,n,i){if(e===null||typeof e>"u"||L0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ff=/[\-:]([a-z])/g;function Of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ff,Of);Ot[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ff,Of);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ff,Of);Ot[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function zf(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(D0(e,n,r,i)&&(n=null),i||r===null?P0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),uo=Symbol.for("react.portal"),co=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),rg=Symbol.for("react.provider"),og=Symbol.for("react.context"),Bf=Symbol.for("react.forward_ref"),Rc=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),Hf=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),sg=Symbol.for("react.offscreen"),qd=Symbol.iterator;function ts(t){return t===null||typeof t!="object"?null:(t=qd&&t[qd]||t["@@iterator"],typeof t=="function"?t:null)}var ut=Object.assign,xu;function _s(t){if(xu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xu=e&&e[1]||""}return`
`+xu+t}var yu=!1;function Su(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_s(t):""}function U0(t){switch(t.tag){case 5:return _s(t.type);case 16:return _s("Lazy");case 13:return _s("Suspense");case 19:return _s("SuspenseList");case 0:case 2:case 15:return t=Su(t.type,!1),t;case 11:return t=Su(t.type.render,!1),t;case 1:return t=Su(t.type,!0),t;default:return""}}function bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case co:return"Fragment";case uo:return"Portal";case Ac:return"Profiler";case kf:return"StrictMode";case Rc:return"Suspense";case Cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case og:return(t.displayName||"Context")+".Consumer";case rg:return(t._context.displayName||"Context")+".Provider";case Bf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hf:return e=t.displayName||null,e!==null?e:bc(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return bc(t(e))}catch{}}return null}function N0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bc(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I0(t){var e=ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function va(t){t._valueTracker||(t._valueTracker=I0(t))}function lg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pc(t,e){var n=e.checked;return ut({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $d(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ug(t,e){e=e.checked,e!=null&&zf(t,"checked",e,!1)}function Lc(t,e){ug(t,e);var n=ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dc(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xs=Array.isArray;function wo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return ut({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(xs(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function cg(t,e){var n=ir(e.value),i=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _a,dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_a=_a||document.createElement("div"),_a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},F0=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(t){F0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ts[e]=Ts[t]})});function hg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ts.hasOwnProperty(t)&&Ts[t]?(""+e).trim():e+"px"}function pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var O0=ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ic(t,e){if(e){if(O0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oc=null;function Gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zc=null,Ao=null,Ro=null;function Jd(t){if(t=ua(t)){if(typeof zc!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=$l(e),zc(t.stateNode,t.type,e))}}function mg(t){Ao?Ro?Ro.push(t):Ro=[t]:Ao=t}function gg(){if(Ao){var t=Ao,e=Ro;if(Ro=Ao=null,Jd(t),e)for(t=0;t<e.length;t++)Jd(e[t])}}function vg(t,e){return t(e)}function _g(){}var Mu=!1;function xg(t,e,n){if(Mu)return t(e,n);Mu=!0;try{return vg(t,e,n)}finally{Mu=!1,(Ao!==null||Ro!==null)&&(_g(),gg())}}function Bs(t,e){var n=t.stateNode;if(n===null)return null;var i=$l(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var kc=!1;if(Ti)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){kc=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{kc=!1}function z0(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ws=!1,gl=null,vl=!1,Bc=null,k0={onError:function(t){ws=!0,gl=t}};function B0(t,e,n,i,r,o,s,a,l){ws=!1,gl=null,z0.apply(k0,arguments)}function H0(t,e,n,i,r,o,s,a,l){if(B0.apply(this,arguments),ws){if(ws){var u=gl;ws=!1,gl=null}else throw Error(ue(198));vl||(vl=!0,Bc=u)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eh(t){if(Fr(t)!==t)throw Error(ue(188))}function G0(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return eh(r),t;if(o===i)return eh(r),e;o=o.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function Sg(t){return t=G0(t),t!==null?Mg(t):null}function Mg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mg(t);if(e!==null)return e;t=t.sibling}return null}var Eg=xn.unstable_scheduleCallback,th=xn.unstable_cancelCallback,V0=xn.unstable_shouldYield,W0=xn.unstable_requestPaint,_t=xn.unstable_now,X0=xn.unstable_getCurrentPriorityLevel,Vf=xn.unstable_ImmediatePriority,Tg=xn.unstable_UserBlockingPriority,_l=xn.unstable_NormalPriority,j0=xn.unstable_LowPriority,wg=xn.unstable_IdlePriority,Xl=null,ni=null;function Y0(t){if(ni&&typeof ni.onCommitFiberRoot=="function")try{ni.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:K0,q0=Math.log,$0=Math.LN2;function K0(t){return t>>>=0,t===0?32:31-(q0(t)/$0|0)|0}var xa=64,ya=4194304;function ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ys(a):(o&=s,o!==0&&(i=ys(o)))}else s=n&~r,s!==0?i=ys(s):o!==0&&(i=ys(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function Z0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Yn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Z0(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ag(){var t=xa;return xa<<=1,!(xa&4194240)&&(xa=64),t}function Eu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function J0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cg,Xf,bg,Pg,Lg,Gc=!1,Sa=[],ji=null,Yi=null,qi=null,Hs=new Map,Gs=new Map,Bi=[],ex="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nh(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function is(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=ua(e),e!==null&&Xf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function tx(t,e,n,i,r){switch(e){case"focusin":return ji=is(ji,t,e,n,i,r),!0;case"dragenter":return Yi=is(Yi,t,e,n,i,r),!0;case"mouseover":return qi=is(qi,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Hs.set(o,is(Hs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Gs.set(o,is(Gs.get(o)||null,t,e,n,i,r)),!0}return!1}function Dg(t){var e=xr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=yg(n),e!==null){t.blockedOn=e,Lg(t.priority,function(){bg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Oc=i,n.target.dispatchEvent(i),Oc=null}else return e=ua(n),e!==null&&Xf(e),t.blockedOn=n,!1;e.shift()}return!0}function ih(t,e,n){rl(t)&&n.delete(e)}function nx(){Gc=!1,ji!==null&&rl(ji)&&(ji=null),Yi!==null&&rl(Yi)&&(Yi=null),qi!==null&&rl(qi)&&(qi=null),Hs.forEach(ih),Gs.forEach(ih)}function rs(t,e){t.blockedOn===e&&(t.blockedOn=null,Gc||(Gc=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,nx)))}function Vs(t){function e(r){return rs(r,t)}if(0<Sa.length){rs(Sa[0],t);for(var n=1;n<Sa.length;n++){var i=Sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&rs(ji,t),Yi!==null&&rs(Yi,t),qi!==null&&rs(qi,t),Hs.forEach(e),Gs.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)Dg(n),n.blockedOn===null&&Bi.shift()}var Co=Ci.ReactCurrentBatchConfig,yl=!0;function ix(t,e,n,i){var r=Je,o=Co.transition;Co.transition=null;try{Je=1,jf(t,e,n,i)}finally{Je=r,Co.transition=o}}function rx(t,e,n,i){var r=Je,o=Co.transition;Co.transition=null;try{Je=4,jf(t,e,n,i)}finally{Je=r,Co.transition=o}}function jf(t,e,n,i){if(yl){var r=Vc(t,e,n,i);if(r===null)Uu(t,e,i,Sl,n),nh(t,i);else if(tx(r,t,e,n,i))i.stopPropagation();else if(nh(t,i),e&4&&-1<ex.indexOf(t)){for(;r!==null;){var o=ua(r);if(o!==null&&Cg(o),o=Vc(t,e,n,i),o===null&&Uu(t,e,i,Sl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Uu(t,e,i,null,n)}}var Sl=null;function Vc(t,e,n,i){if(Sl=null,t=Gf(i),t=xr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function Ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X0()){case Vf:return 1;case Tg:return 4;case _l:case j0:return 16;case wg:return 536870912;default:return 16}default:return 16}}var Gi=null,Yf=null,ol=null;function Ng(){if(ol)return ol;var t,e=Yf,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return ol=r.slice(t,1<i?1-i:void 0)}function sl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function rh(){return!1}function Sn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ma:rh,this.isPropagationStopped=rh,this}return ut(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qf=Sn(qo),la=ut({},qo,{view:0,detail:0}),ox=Sn(la),Tu,wu,os,jl=ut({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==os&&(os&&t.type==="mousemove"?(Tu=t.screenX-os.screenX,wu=t.screenY-os.screenY):wu=Tu=0,os=t),Tu)},movementY:function(t){return"movementY"in t?t.movementY:wu}}),oh=Sn(jl),sx=ut({},jl,{dataTransfer:0}),ax=Sn(sx),lx=ut({},la,{relatedTarget:0}),Au=Sn(lx),ux=ut({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=Sn(ux),fx=ut({},qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=Sn(fx),hx=ut({},qo,{data:0}),sh=Sn(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gx[t])?!!e[t]:!1}function $f(){return vx}var _x=ut({},la,{key:function(t){if(t.key){var e=px[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(t){return t.type==="keypress"?sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xx=Sn(_x),yx=ut({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=Sn(yx),Sx=ut({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),Mx=Sn(Sx),Ex=ut({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Sn(Ex),wx=ut({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=Sn(wx),Rx=[9,13,27,32],Kf=Ti&&"CompositionEvent"in window,As=null;Ti&&"documentMode"in document&&(As=document.documentMode);var Cx=Ti&&"TextEvent"in window&&!As,Ig=Ti&&(!Kf||As&&8<As&&11>=As),lh=String.fromCharCode(32),uh=!1;function Fg(t,e){switch(t){case"keyup":return Rx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fo=!1;function bx(t,e){switch(t){case"compositionend":return Og(e);case"keypress":return e.which!==32?null:(uh=!0,lh);case"textInput":return t=e.data,t===lh&&uh?null:t;default:return null}}function Px(t,e){if(fo)return t==="compositionend"||!Kf&&Fg(t,e)?(t=Ng(),ol=Yf=Gi=null,fo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ig&&e.locale!=="ko"?null:e.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Lx[t.type]:e==="textarea"}function zg(t,e,n,i){mg(i),e=Ml(e,"onChange"),0<e.length&&(n=new qf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Rs=null,Ws=null;function Dx(t){$g(t,0)}function Yl(t){var e=mo(t);if(lg(e))return t}function Ux(t,e){if(t==="change")return e}var kg=!1;if(Ti){var Ru;if(Ti){var Cu="oninput"in document;if(!Cu){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),Cu=typeof fh.oninput=="function"}Ru=Cu}else Ru=!1;kg=Ru&&(!document.documentMode||9<document.documentMode)}function dh(){Rs&&(Rs.detachEvent("onpropertychange",Bg),Ws=Rs=null)}function Bg(t){if(t.propertyName==="value"&&Yl(Ws)){var e=[];zg(e,Ws,t,Gf(t)),xg(Dx,e)}}function Nx(t,e,n){t==="focusin"?(dh(),Rs=e,Ws=n,Rs.attachEvent("onpropertychange",Bg)):t==="focusout"&&dh()}function Ix(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Ws)}function Fx(t,e){if(t==="click")return Yl(e)}function Ox(t,e){if(t==="input"||t==="change")return Yl(e)}function zx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:zx;function Xs(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wc.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ph(t,e){var n=hh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hh(n)}}function Hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gg(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function Zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function kx(t){var e=Gg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hg(n.ownerDocument.documentElement,n)){if(i!==null&&Zf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=ph(n,o);var s=ph(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bx=Ti&&"documentMode"in document&&11>=document.documentMode,ho=null,Wc=null,Cs=null,Xc=!1;function mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||ho==null||ho!==ml(i)||(i=ho,"selectionStart"in i&&Zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Cs&&Xs(Cs,i)||(Cs=i,i=Ml(Wc,"onSelect"),0<i.length&&(e=new qf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ho)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var po={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},bu={},Vg={};Ti&&(Vg=document.createElement("div").style,"AnimationEvent"in window||(delete po.animationend.animation,delete po.animationiteration.animation,delete po.animationstart.animation),"TransitionEvent"in window||delete po.transitionend.transition);function ql(t){if(bu[t])return bu[t];if(!po[t])return t;var e=po[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vg)return bu[t]=e[n];return t}var Wg=ql("animationend"),Xg=ql("animationiteration"),jg=ql("animationstart"),Yg=ql("transitionend"),qg=new Map,gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){qg.set(t,e),Ir(e,[t])}for(var Pu=0;Pu<gh.length;Pu++){var Lu=gh[Pu],Hx=Lu.toLowerCase(),Gx=Lu[0].toUpperCase()+Lu.slice(1);sr(Hx,"on"+Gx)}sr(Wg,"onAnimationEnd");sr(Xg,"onAnimationIteration");sr(jg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(Yg,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ss));function vh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,H0(i,e,void 0,t),t.currentTarget=null}function $g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;vh(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;vh(r,a,u),o=l}}}if(vl)throw t=Bc,vl=!1,Bc=null,t}function nt(t,e){var n=e[Kc];n===void 0&&(n=e[Kc]=new Set);var i=t+"__bubble";n.has(i)||(Kg(e,t,2,!1),n.add(i))}function Du(t,e,n){var i=0;e&&(i|=4),Kg(n,t,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function js(t){if(!t[Ta]){t[Ta]=!0,ig.forEach(function(n){n!=="selectionchange"&&(Vx.has(n)||Du(n,!1,t),Du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Du("selectionchange",!1,e))}}function Kg(t,e,n,i){switch(Ug(e)){case 1:var r=ix;break;case 4:r=rx;break;default:r=jf}n=r.bind(null,e,n,t),r=void 0,!kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=xr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}xg(function(){var u=o,c=Gf(n),d=[];e:{var h=qg.get(t);if(h!==void 0){var m=qf,x=t;switch(t){case"keypress":if(sl(n)===0)break e;case"keydown":case"keyup":m=xx;break;case"focusin":x="focus",m=Au;break;case"focusout":x="blur",m=Au;break;case"beforeblur":case"afterblur":m=Au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ax;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Mx;break;case Wg:case Xg:case jg:m=cx;break;case Yg:m=Tx;break;case"scroll":m=ox;break;case"wheel":m=Ax;break;case"copy":case"cut":case"paste":m=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ah}var y=(e&4)!==0,p=!y&&t==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var _=u,v;_!==null;){v=_;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,f!==null&&(g=Bs(_,f),g!=null&&y.push(Ys(_,g,v)))),p)break;_=_.return}0<y.length&&(h=new m(h,x,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Oc&&(x=n.relatedTarget||n.fromElement)&&(xr(x)||x[wi]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?xr(x):null,x!==null&&(p=Fr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(y=oh,g="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=ah,g="onPointerLeave",f="onPointerEnter",_="pointer"),p=m==null?h:mo(m),v=x==null?h:mo(x),h=new y(g,_+"leave",m,n,c),h.target=p,h.relatedTarget=v,g=null,xr(c)===u&&(y=new y(f,_+"enter",x,n,c),y.target=v,y.relatedTarget=p,g=y),p=g,m&&x)t:{for(y=m,f=x,_=0,v=y;v;v=Hr(v))_++;for(v=0,g=f;g;g=Hr(g))v++;for(;0<_-v;)y=Hr(y),_--;for(;0<v-_;)f=Hr(f),v--;for(;_--;){if(y===f||f!==null&&y===f.alternate)break t;y=Hr(y),f=Hr(f)}y=null}else y=null;m!==null&&_h(d,h,m,y,!1),x!==null&&p!==null&&_h(d,p,x,y,!0)}}e:{if(h=u?mo(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var M=Ux;else if(ch(h))if(kg)M=Ox;else{M=Ix;var R=Nx}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(M=Fx);if(M&&(M=M(t,u))){zg(d,M,n,c);break e}R&&R(t,h,u),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&Dc(h,"number",h.value)}switch(R=u?mo(u):window,t){case"focusin":(ch(R)||R.contentEditable==="true")&&(ho=R,Wc=u,Cs=null);break;case"focusout":Cs=Wc=ho=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,mh(d,n,c);break;case"selectionchange":if(Bx)break;case"keydown":case"keyup":mh(d,n,c)}var T;if(Kf)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else fo?Fg(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Ig&&n.locale!=="ko"&&(fo||U!=="onCompositionStart"?U==="onCompositionEnd"&&fo&&(T=Ng()):(Gi=c,Yf="value"in Gi?Gi.value:Gi.textContent,fo=!0)),R=Ml(u,U),0<R.length&&(U=new sh(U,t,null,n,c),d.push({event:U,listeners:R}),T?U.data=T:(T=Og(n),T!==null&&(U.data=T)))),(T=Cx?bx(t,n):Px(t,n))&&(u=Ml(u,"onBeforeInput"),0<u.length&&(c=new sh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=T))}$g(d,e)})}function Ys(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Bs(t,n),o!=null&&i.unshift(Ys(t,o,r)),o=Bs(t,e),o!=null&&i.push(Ys(t,o,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _h(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Bs(n,o),l!=null&&s.unshift(Ys(n,l,a))):r||(l=Bs(n,o),l!=null&&s.push(Ys(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Wx=/\r\n?/g,Xx=/\u0000|\uFFFD/g;function xh(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(Xx,"")}function wa(t,e,n){if(e=xh(e),xh(t)!==e&&n)throw Error(ue(425))}function El(){}var jc=null,Yc=null;function qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $c=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,Yx=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(t){return yh.resolve(null).then(t).catch(qx)}:$c;function qx(t){setTimeout(function(){throw t})}function Nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Vs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Vs(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $o=Math.random().toString(36).slice(2),ti="__reactFiber$"+$o,qs="__reactProps$"+$o,wi="__reactContainer$"+$o,Kc="__reactEvents$"+$o,$x="__reactListeners$"+$o,Kx="__reactHandles$"+$o;function xr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sh(t);t!==null;){if(n=t[ti])return n;t=Sh(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[ti]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function mo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function $l(t){return t[qs]||null}var Zc=[],go=-1;function ar(t){return{current:t}}function it(t){0>go||(t.current=Zc[go],Zc[go]=null,go--)}function tt(t,e){go++,Zc[go]=t.current,t.current=e}var rr={},Wt=ar(rr),rn=ar(!1),br=rr;function Io(t,e){var n=t.type.contextTypes;if(!n)return rr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function on(t){return t=t.childContextTypes,t!=null}function Tl(){it(rn),it(Wt)}function Mh(t,e,n){if(Wt.current!==rr)throw Error(ue(168));tt(Wt,e),tt(rn,n)}function Zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,N0(t)||"Unknown",r));return ut({},n,i)}function wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,br=Wt.current,tt(Wt,t),tt(rn,rn.current),!0}function Eh(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=Zg(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,it(rn),it(Wt),tt(Wt,t)):it(rn),tt(rn,n)}var vi=null,Kl=!1,Iu=!1;function Qg(t){vi===null?vi=[t]:vi.push(t)}function Zx(t){Kl=!0,Qg(t)}function lr(){if(!Iu&&vi!==null){Iu=!0;var t=0,e=Je;try{var n=vi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Kl=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),Eg(Vf,lr),r}finally{Je=e,Iu=!1}}return null}var vo=[],_o=0,Al=null,Rl=0,An=[],Rn=0,Pr=null,_i=1,xi="";function mr(t,e){vo[_o++]=Rl,vo[_o++]=Al,Al=t,Rl=e}function Jg(t,e,n){An[Rn++]=_i,An[Rn++]=xi,An[Rn++]=Pr,Pr=t;var i=_i;t=xi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var o=32-Yn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,_i=1<<32-Yn(e)+r|n<<r|i,xi=o+t}else _i=1<<o|n<<r|i,xi=t}function Qf(t){t.return!==null&&(mr(t,1),Jg(t,1,0))}function Jf(t){for(;t===Al;)Al=vo[--_o],vo[_o]=null,Rl=vo[--_o],vo[_o]=null;for(;t===Pr;)Pr=An[--Rn],An[Rn]=null,xi=An[--Rn],An[Rn]=null,_i=An[--Rn],An[Rn]=null}var _n=null,gn=null,ot=!1,Vn=null;function ev(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Th(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,gn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Pr!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,gn=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jc(t){if(ot){var e=gn;if(e){var n=e;if(!Th(t,e)){if(Qc(t))throw Error(ue(418));e=$i(n.nextSibling);var i=_n;e&&Th(t,e)?ev(i,n):(t.flags=t.flags&-4097|2,ot=!1,_n=t)}}else{if(Qc(t))throw Error(ue(418));t.flags=t.flags&-4097|2,ot=!1,_n=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Aa(t){if(t!==_n)return!1;if(!ot)return wh(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qc(t.type,t.memoizedProps)),e&&(e=gn)){if(Qc(t))throw tv(),Error(ue(418));for(;e;)ev(t,e),e=$i(e.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=_n?$i(t.stateNode.nextSibling):null;return!0}function tv(){for(var t=gn;t;)t=$i(t.nextSibling)}function Fo(){gn=_n=null,ot=!1}function ed(t){Vn===null?Vn=[t]:Vn.push(t)}var Qx=Ci.ReactCurrentBatchConfig;function Bn(t,e){if(t&&t.defaultProps){e=ut({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Cl=ar(null),bl=null,xo=null,td=null;function nd(){td=xo=bl=null}function id(t){var e=Cl.current;it(Cl),t._currentValue=e}function ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bo(t,e){bl=t,td=xo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(td!==t)if(t={context:t,memoizedValue:e,next:null},xo===null){if(bl===null)throw Error(ue(308));xo=t,bl.dependencies={lanes:0,firstContext:t}}else xo=xo.next=t;return e}var yr=null;function rd(t){yr===null?yr=[t]:yr.push(t)}function nv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,rd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,rd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wf(t,n)}}function Ah(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pl(t,e,n,i){var r=t.updateQueue;zi=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,m=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(h=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){d=x.call(m,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,h=typeof x=="function"?x.call(m,d,h):x,h==null)break e;d=ut({},d,h);break e;case 2:zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Dr|=s,t.lanes=s,t.memoizedState=d}}function Rh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var rv=new ng.Component().refs;function tf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ut({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Qi(t),o=Si(i,r);o.payload=e,n!=null&&(o.callback=n),e=Ki(t,o,r),e!==null&&(qn(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Qi(t),o=Si(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ki(t,o,r),e!==null&&(qn(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Qi(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&(qn(e,t,i,n),al(e,t,i))}};function Ch(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,i)||!Xs(r,o):!0}function ov(t,e,n){var i=!1,r=rr,o=e.contextType;return typeof o=="object"&&o!==null?o=Dn(o):(r=on(e)?br:Wt.current,i=e.contextTypes,o=(i=i!=null)?Io(t,r):rr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function bh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function nf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=rv,od(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Dn(o):(o=on(e)?br:Wt.current,r.context=Io(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(tf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zl.enqueueReplaceState(r,r.state,null),Pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;a===rv&&(a=r.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ph(t){var e=t._init;return e(t._payload)}function sv(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Ji(f,_),f.index=0,f.sibling=null,f}function o(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,g){return _===null||_.tag!==6?(_=Gu(v,f.mode,g),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,g){var M=v.type;return M===co?c(f,_,v.props.children,g,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oi&&Ph(M)===_.type)?(g=r(_,v.props),g.ref=ss(f,_,v),g.return=f,g):(g=hl(v.type,v.key,v.props,null,f.mode,g),g.ref=ss(f,_,v),g.return=f,g)}function u(f,_,v,g){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Vu(v,f.mode,g),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function c(f,_,v,g,M){return _===null||_.tag!==7?(_=Tr(v,f.mode,g,M),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Gu(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ga:return v=hl(_.type,_.key,_.props,null,f.mode,v),v.ref=ss(f,null,_),v.return=f,v;case uo:return _=Vu(_,f.mode,v),_.return=f,_;case Oi:var g=_._init;return d(f,g(_._payload),v)}if(xs(_)||ts(_))return _=Tr(_,f.mode,v,null),_.return=f,_;Ra(f,_)}return null}function h(f,_,v,g){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(f,_,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ga:return v.key===M?l(f,_,v,g):null;case uo:return v.key===M?u(f,_,v,g):null;case Oi:return M=v._init,h(f,_,M(v._payload),g)}if(xs(v)||ts(v))return M!==null?null:c(f,_,v,g,null);Ra(f,v)}return null}function m(f,_,v,g,M){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(v)||null,a(_,f,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ga:return f=f.get(g.key===null?v:g.key)||null,l(_,f,g,M);case uo:return f=f.get(g.key===null?v:g.key)||null,u(_,f,g,M);case Oi:var R=g._init;return m(f,_,v,R(g._payload),M)}if(xs(g)||ts(g))return f=f.get(v)||null,c(_,f,g,M,null);Ra(_,g)}return null}function x(f,_,v,g){for(var M=null,R=null,T=_,U=_=0,S=null;T!==null&&U<v.length;U++){T.index>U?(S=T,T=null):S=T.sibling;var w=h(f,T,v[U],g);if(w===null){T===null&&(T=S);break}t&&T&&w.alternate===null&&e(f,T),_=o(w,_,U),R===null?M=w:R.sibling=w,R=w,T=S}if(U===v.length)return n(f,T),ot&&mr(f,U),M;if(T===null){for(;U<v.length;U++)T=d(f,v[U],g),T!==null&&(_=o(T,_,U),R===null?M=T:R.sibling=T,R=T);return ot&&mr(f,U),M}for(T=i(f,T);U<v.length;U++)S=m(T,f,U,v[U],g),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?U:S.key),_=o(S,_,U),R===null?M=S:R.sibling=S,R=S);return t&&T.forEach(function(te){return e(f,te)}),ot&&mr(f,U),M}function y(f,_,v,g){var M=ts(v);if(typeof M!="function")throw Error(ue(150));if(v=M.call(v),v==null)throw Error(ue(151));for(var R=M=null,T=_,U=_=0,S=null,w=v.next();T!==null&&!w.done;U++,w=v.next()){T.index>U?(S=T,T=null):S=T.sibling;var te=h(f,T,w.value,g);if(te===null){T===null&&(T=S);break}t&&T&&te.alternate===null&&e(f,T),_=o(te,_,U),R===null?M=te:R.sibling=te,R=te,T=S}if(w.done)return n(f,T),ot&&mr(f,U),M;if(T===null){for(;!w.done;U++,w=v.next())w=d(f,w.value,g),w!==null&&(_=o(w,_,U),R===null?M=w:R.sibling=w,R=w);return ot&&mr(f,U),M}for(T=i(f,T);!w.done;U++,w=v.next())w=m(T,f,U,w.value,g),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?U:w.key),_=o(w,_,U),R===null?M=w:R.sibling=w,R=w);return t&&T.forEach(function(Z){return e(f,Z)}),ot&&mr(f,U),M}function p(f,_,v,g){if(typeof v=="object"&&v!==null&&v.type===co&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ga:e:{for(var M=v.key,R=_;R!==null;){if(R.key===M){if(M=v.type,M===co){if(R.tag===7){n(f,R.sibling),_=r(R,v.props.children),_.return=f,f=_;break e}}else if(R.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Oi&&Ph(M)===R.type){n(f,R.sibling),_=r(R,v.props),_.ref=ss(f,R,v),_.return=f,f=_;break e}n(f,R);break}else e(f,R);R=R.sibling}v.type===co?(_=Tr(v.props.children,f.mode,g,v.key),_.return=f,f=_):(g=hl(v.type,v.key,v.props,null,f.mode,g),g.ref=ss(f,_,v),g.return=f,f=g)}return s(f);case uo:e:{for(R=v.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Vu(v,f.mode,g),_.return=f,f=_}return s(f);case Oi:return R=v._init,p(f,_,R(v._payload),g)}if(xs(v))return x(f,_,v,g);if(ts(v))return y(f,_,v,g);Ra(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=Gu(v,f.mode,g),_.return=f,f=_),s(f)):n(f,_)}return p}var Oo=sv(!0),av=sv(!1),ca={},ii=ar(ca),$s=ar(ca),Ks=ar(ca);function Sr(t){if(t===ca)throw Error(ue(174));return t}function sd(t,e){switch(tt(Ks,e),tt($s,t),tt(ii,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nc(e,t)}it(ii),tt(ii,e)}function zo(){it(ii),it($s),it(Ks)}function lv(t){Sr(Ks.current);var e=Sr(ii.current),n=Nc(e,t.type);e!==n&&(tt($s,t),tt(ii,n))}function ad(t){$s.current===t&&(it(ii),it($s))}var at=ar(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function ld(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var ll=Ci.ReactCurrentDispatcher,Ou=Ci.ReactCurrentBatchConfig,Lr=0,lt=null,At=null,Dt=null,Dl=!1,bs=!1,Zs=0,Jx=0;function zt(){throw Error(ue(321))}function ud(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function cd(t,e,n,i,r,o){if(Lr=o,lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?iy:ry,t=n(i,r),bs){o=0;do{if(bs=!1,Zs=0,25<=o)throw Error(ue(301));o+=1,Dt=At=null,e.updateQueue=null,ll.current=oy,t=n(i,r)}while(bs)}if(ll.current=Ul,e=At!==null&&At.next!==null,Lr=0,Dt=At=lt=null,Dl=!1,e)throw Error(ue(300));return t}function fd(){var t=Zs!==0;return Zs=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?lt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Un(){if(At===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?lt.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(ue(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?lt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Qs(t,e){return typeof e=="function"?e(t):e}function zu(t){var e=Un(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Lr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,lt.lanes|=c,Dr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Kn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,lt.lanes|=o,Dr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ku(t){var e=Un(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Kn(o,e.memoizedState)||(nn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function uv(){}function cv(t,e){var n=lt,i=Un(),r=e(),o=!Kn(i.memoizedState,r);if(o&&(i.memoizedState=r,nn=!0),i=i.queue,dd(hv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Js(9,dv.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ue(349));Lr&30||fv(n,e,r)}return r}function fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dv(t,e,n,i){e.value=n,e.getSnapshot=i,pv(e)&&mv(t)}function hv(t,e,n){return n(function(){pv(e)&&mv(t)})}function pv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function mv(t){var e=Ai(t,1);e!==null&&qn(e,t,1,-1)}function Lh(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:t},e.queue=t,t=t.dispatch=ny.bind(null,lt,t),[e.memoizedState,t]}function Js(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=lt.updateQueue,e===null?(e={lastEffect:null,stores:null},lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gv(){return Un().memoizedState}function ul(t,e,n,i){var r=Jn();lt.flags|=t,r.memoizedState=Js(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=Un();i=i===void 0?null:i;var o=void 0;if(At!==null){var s=At.memoizedState;if(o=s.destroy,i!==null&&ud(i,s.deps)){r.memoizedState=Js(e,n,o,i);return}}lt.flags|=t,r.memoizedState=Js(1|e,n,o,i)}function Dh(t,e){return ul(8390656,8,t,e)}function dd(t,e){return Ql(2048,8,t,e)}function vv(t,e){return Ql(4,2,t,e)}function _v(t,e){return Ql(4,4,t,e)}function xv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yv(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,xv.bind(null,e,t),n)}function hd(){}function Sv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Mv(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ud(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Ev(t,e,n){return Lr&21?(Kn(n,e)||(n=Ag(),lt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function ey(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Ou.transition;Ou.transition={};try{t(!1),e()}finally{Je=n,Ou.transition=i}}function Tv(){return Un().memoizedState}function ty(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},wv(t))Av(e,n);else if(n=nv(t,e,n,i),n!==null){var r=Kt();qn(n,t,i,r),Rv(n,e,i)}}function ny(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(wv(t))Av(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,s)){var l=e.interleaved;l===null?(r.next=r,rd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=nv(t,e,r,i),n!==null&&(r=Kt(),qn(n,t,i,r),Rv(n,e,i))}}function wv(t){var e=t.alternate;return t===lt||e!==null&&e===lt}function Av(t,e){bs=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wf(t,n)}}var Ul={readContext:Dn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},iy={readContext:Dn,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Dh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,xv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ty.bind(null,lt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Lh,useDebugValue:hd,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Lh(!1),e=t[0];return t=ey.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=lt,r=Jn();if(ot){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),Nt===null)throw Error(ue(349));Lr&30||fv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Dh(hv.bind(null,i,o,t),[t]),i.flags|=2048,Js(9,dv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Nt.identifierPrefix;if(ot){var n=xi,i=_i;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ry={readContext:Dn,useCallback:Sv,useContext:Dn,useEffect:dd,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Mv,useReducer:zu,useRef:gv,useState:function(){return zu(Qs)},useDebugValue:hd,useDeferredValue:function(t){var e=Un();return Ev(e,At.memoizedState,t)},useTransition:function(){var t=zu(Qs)[0],e=Un().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:cv,useId:Tv,unstable_isNewReconciler:!1},oy={readContext:Dn,useCallback:Sv,useContext:Dn,useEffect:dd,useImperativeHandle:yv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Mv,useReducer:ku,useRef:gv,useState:function(){return ku(Qs)},useDebugValue:hd,useDeferredValue:function(t){var e=Un();return At===null?e.memoizedState=t:Ev(e,At.memoizedState,t)},useTransition:function(){var t=ku(Qs)[0],e=Un().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:cv,useId:Tv,unstable_isNewReconciler:!1};function ko(t,e){try{var n="",i=e;do n+=U0(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function Cv(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,pf=i),rf(t,e)},n}function bv(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){rf(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Uh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new sy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=yy.bind(null,t,e,n),e.then(t,t))}function Nh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ih(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var ay=Ci.ReactCurrentOwner,nn=!1;function qt(t,e,n,i){e.child=t===null?av(e,null,n,i):Oo(e,t.child,n,i)}function Fh(t,e,n,i,r){n=n.render;var o=e.ref;return bo(e,r),i=cd(t,e,n,i,o,r),n=fd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ot&&n&&Qf(e),e.flags|=1,qt(t,e,i,r),e.child)}function Oh(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!Sd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Pv(t,e,o,i,r)):(t=hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(s,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=Ji(o,i),t.ref=e.ref,t.return=e,e.child=t}function Pv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Xs(o,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return of(t,e,n,i,r)}function Lv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(So,pn),pn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(So,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,tt(So,pn),pn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,tt(So,pn),pn|=i;return qt(t,e,r,n),e.child}function Dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function of(t,e,n,i,r){var o=on(n)?br:Wt.current;return o=Io(e,o),bo(e,r),n=cd(t,e,n,i,o,r),i=fd(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ot&&i&&Qf(e),e.flags|=1,qt(t,e,n,r),e.child)}function zh(t,e,n,i,r){if(on(n)){var o=!0;wl(e)}else o=!1;if(bo(e,r),e.stateNode===null)cl(t,e),ov(e,n,i),nf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dn(u):(u=on(n)?br:Wt.current,u=Io(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&bh(e,s,i,u),zi=!1;var h=e.memoizedState;s.state=h,Pl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||rn.current||zi?(typeof c=="function"&&(tf(e,n,c,i),l=e.memoizedState),(a=zi||Ch(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,iv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=on(n)?br:Wt.current,l=Io(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&bh(e,s,i,l),zi=!1,h=e.memoizedState,s.state=h,Pl(e,i,s,r);var x=e.memoizedState;a!==d||h!==x||rn.current||zi?(typeof m=="function"&&(tf(e,n,m,i),x=e.memoizedState),(u=zi||Ch(e,n,u,i,h,x,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,x,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),s.props=i,s.state=x,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return sf(t,e,n,i,o,r)}function sf(t,e,n,i,r,o){Dv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Eh(e,n,!1),Ri(t,e,o);i=e.stateNode,ay.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Oo(e,t.child,null,o),e.child=Oo(e,null,a,o)):qt(t,e,a,o),e.memoizedState=i.state,r&&Eh(e,n,!0),e.child}function Uv(t){var e=t.stateNode;e.pendingContext?Mh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mh(t,e.context,!1),sd(t,e.containerInfo)}function kh(t,e,n,i,r){return Fo(),ed(r),e.flags|=256,qt(t,e,n,i),e.child}var af={dehydrated:null,treeContext:null,retryLane:0};function lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nv(t,e,n){var i=e.pendingProps,r=at.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(at,r&1),t===null)return Jc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=tu(s,i,0,null),t=Tr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=lf(n),e.memoizedState=af,t):pd(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ly(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Ji(a,o):(o=Tr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?lf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=af,i}return o=t.child,t=o.sibling,i=Ji(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function pd(t,e){return e=tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ca(t,e,n,i){return i!==null&&ed(i),Oo(e,t.child,null,n),t=pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ly(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Bu(Error(ue(422))),Ca(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=tu({mode:"visible",children:i.children},r,0,null),o=Tr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Oo(e,t.child,null,s),e.child.memoizedState=lf(s),e.memoizedState=af,o);if(!(e.mode&1))return Ca(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ue(419)),i=Bu(o,i,void 0),Ca(t,e,s,i)}if(a=(s&t.childLanes)!==0,nn||a){if(i=Nt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ai(t,r),qn(i,t,r,-1))}return yd(),i=Bu(Error(ue(421))),Ca(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Sy.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,gn=$i(r.nextSibling),_n=e,ot=!0,Vn=null,t!==null&&(An[Rn++]=_i,An[Rn++]=xi,An[Rn++]=Pr,_i=t.id,xi=t.overflow,Pr=e),e=pd(e,i.children),e.flags|=4096,e)}function Bh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ef(t.return,e,n)}function Hu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Iv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(qt(t,e,i.children,n),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,n,e);else if(t.tag===19)Bh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ll(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hu(e,!0,n,null,o);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uy(t,e,n){switch(e.tag){case 3:Uv(e),Fo();break;case 5:lv(e);break;case 1:on(e.type)&&wl(e);break;case 4:sd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Cl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(at,at.current&1),e.flags|=128,null):n&e.child.childLanes?Nv(t,e,n):(tt(at,at.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);tt(at,at.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Iv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,Lv(t,e,n)}return Ri(t,e,n)}var Fv,uf,Ov,zv;Fv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uf=function(){};Ov=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Sr(ii.current);var o=null;switch(n){case"input":r=Pc(t,r),i=Pc(t,i),o=[];break;case"select":r=ut({},r,{value:void 0}),i=ut({},i,{value:void 0}),o=[];break;case"textarea":r=Uc(t,r),i=Uc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=El)}Ic(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};zv=function(t,e,n,i){n!==i&&(e.flags|=4)};function as(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cy(t,e,n){var i=e.pendingProps;switch(Jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return on(e.type)&&Tl(),kt(e),null;case 3:return i=e.stateNode,zo(),it(rn),it(Wt),ld(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(vf(Vn),Vn=null))),uf(t,e),kt(e),null;case 5:ad(e);var r=Sr(Ks.current);if(n=e.type,t!==null&&e.stateNode!=null)Ov(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return kt(e),null}if(t=Sr(ii.current),Aa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ti]=e,i[qs]=o,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Ss.length;r++)nt(Ss[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":$d(i,o),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},nt("invalid",i);break;case"textarea":Zd(i,o),nt("invalid",i)}Ic(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",""+a]):zs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&nt("scroll",i)}switch(n){case"input":va(i),Kd(i,o,!0);break;case"textarea":va(i),Qd(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=El)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ti]=e,t[qs]=i,Fv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Fc(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ss.length;r++)nt(Ss[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":$d(t,i),r=Pc(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ut({},i,{value:void 0}),nt("invalid",t);break;case"textarea":Zd(t,i),r=Uc(t,i),nt("invalid",t);break;default:r=i}Ic(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?pg(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dg(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ks(t,l):typeof l=="number"&&ks(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&nt("scroll",t):l!=null&&zf(t,o,l,s))}switch(n){case"input":va(t),Kd(t,i,!1);break;case"textarea":va(t),Qd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ir(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?wo(t,!!i.multiple,o,!1):i.defaultValue!=null&&wo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=El)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)zv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Sr(Ks.current),Sr(ii.current),Aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(o=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:wa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return kt(e),null;case 13:if(it(at),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&gn!==null&&e.mode&1&&!(e.flags&128))tv(),Fo(),e.flags|=98560,o=!1;else if(o=Aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ue(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ue(317));o[ti]=e}else Fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),o=!1}else Vn!==null&&(vf(Vn),Vn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||at.current&1?Rt===0&&(Rt=3):yd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return zo(),uf(t,e),t===null&&js(e.stateNode.containerInfo),kt(e),null;case 10:return id(e.type._context),kt(e),null;case 17:return on(e.type)&&Tl(),kt(e),null;case 19:if(it(at),o=e.memoizedState,o===null)return kt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)as(o,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ll(t),s!==null){for(e.flags|=128,as(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(at,at.current&1|2),e.child}t=t.sibling}o.tail!==null&&_t()>Bo&&(e.flags|=128,i=!0,as(o,!1),e.lanes=4194304)}else{if(!i)if(t=Ll(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),as(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ot)return kt(e),null}else 2*_t()-o.renderingStartTime>Bo&&n!==1073741824&&(e.flags|=128,i=!0,as(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=_t(),e.sibling=null,n=at.current,tt(at,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return xd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function fy(t,e){switch(Jf(e),e.tag){case 1:return on(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zo(),it(rn),it(Wt),ld(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ad(e),null;case 13:if(it(at),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return it(at),null;case 4:return zo(),null;case 10:return id(e.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var ba=!1,Gt=!1,dy=typeof WeakSet=="function"?WeakSet:Set,ve=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function cf(t,e,n){try{n()}catch(i){dt(t,e,i)}}var Hh=!1;function hy(t,e){if(jc=yl,t=Gg(),Zf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yc={focusedElem:t,selectionRange:n},yl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,p=x.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Bn(e.type,y),p);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(g){dt(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return x=Hh,Hh=!1,x}function Ps(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&cf(e,n,o)}r=r.next}while(r!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kv(t){var e=t.alternate;e!==null&&(t.alternate=null,kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[qs],delete e[Kc],delete e[$x],delete e[Kx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bv(t){return t.tag===5||t.tag===3||t.tag===4}function Gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=El));else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}function hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}var It=null,Hn=!1;function Li(t,e,n){for(n=n.child;n!==null;)Hv(t,e,n),n=n.sibling}function Hv(t,e,n){if(ni&&typeof ni.onCommitFiberUnmount=="function")try{ni.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Gt||yo(n,e);case 6:var i=It,r=Hn;It=null,Li(t,e,n),It=i,Hn=r,It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(Hn?(t=It,n=n.stateNode,t.nodeType===8?Nu(t.parentNode,n):t.nodeType===1&&Nu(t,n),Vs(t)):Nu(It,n.stateNode));break;case 4:i=It,r=Hn,It=n.stateNode.containerInfo,Hn=!0,Li(t,e,n),It=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&cf(n,e,s),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Gt&&(yo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){dt(n,e,a)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Li(t,e,n),Gt=i):Li(t,e,n);break;default:Li(t,e,n)}}function Vh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dy),e.forEach(function(i){var r=My.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,Hn=!1;break e;case 3:It=a.stateNode.containerInfo,Hn=!0;break e;case 4:It=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(It===null)throw Error(ue(160));Hv(o,s,r),It=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Qn(t),i&4){try{Ps(3,t,t.return),Jl(3,t)}catch(y){dt(t,t.return,y)}try{Ps(5,t,t.return)}catch(y){dt(t,t.return,y)}}break;case 1:In(e,t),Qn(t),i&512&&n!==null&&yo(n,n.return);break;case 5:if(In(e,t),Qn(t),i&512&&n!==null&&yo(n,n.return),t.flags&32){var r=t.stateNode;try{ks(r,"")}catch(y){dt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ug(r,o),Fc(a,s);var u=Fc(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?pg(r,d):c==="dangerouslySetInnerHTML"?dg(r,d):c==="children"?ks(r,d):zf(r,c,d,u)}switch(a){case"input":Lc(r,o);break;case"textarea":cg(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?wo(r,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?wo(r,!!o.multiple,o.defaultValue,!0):wo(r,!!o.multiple,o.multiple?[]:"",!1))}r[qs]=o}catch(y){dt(t,t.return,y)}}break;case 6:if(In(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){dt(t,t.return,y)}}break;case 3:if(In(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vs(e.containerInfo)}catch(y){dt(t,t.return,y)}break;case 4:In(e,t),Qn(t);break;case 13:In(e,t),Qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(vd=_t())),i&4&&Vh(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||c,In(e,t),Gt=u):In(e,t),Qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ve=t,c=t.child;c!==null;){for(d=ve=c;ve!==null;){switch(h=ve,m=h.child,h.tag){case 0:case 11:case 14:case 15:Ps(4,h,h.return);break;case 1:yo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){dt(i,n,y)}}break;case 5:yo(h,h.return);break;case 22:if(h.memoizedState!==null){Xh(d);continue}}m!==null?(m.return=h,ve=m):Xh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hg("display",s))}catch(y){dt(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){dt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:In(e,t),Qn(t),i&4&&Vh(t);break;case 21:break;default:In(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Bv(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ks(r,""),i.flags&=-33);var o=Gh(t);hf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Gh(t);df(t,a,s);break;default:throw Error(ue(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function py(t,e,n){ve=t,Vv(t)}function Vv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||ba;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=ba;var u=Gt;if(ba=s,(Gt=l)&&!u)for(ve=r;ve!==null;)s=ve,l=s.child,s.tag===22&&s.memoizedState!==null?jh(r):l!==null?(l.return=s,ve=l):jh(r);for(;o!==null;)ve=o,Vv(o),o=o.sibling;ve=r,ba=a,Gt=u}Wh(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ve=o):Wh(t)}}function Wh(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Rh(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rh(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Vs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Gt||e.flags&512&&ff(e)}catch(h){dt(e,e.return,h)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Xh(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function jh(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var o=e.return;try{ff(e)}catch(l){dt(e,o,l)}break;case 5:var s=e.return;try{ff(e)}catch(l){dt(e,s,l)}}}catch(l){dt(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var my=Math.ceil,Nl=Ci.ReactCurrentDispatcher,md=Ci.ReactCurrentOwner,Ln=Ci.ReactCurrentBatchConfig,$e=0,Nt=null,Et=null,Ft=0,pn=0,So=ar(0),Rt=0,ea=null,Dr=0,eu=0,gd=0,Ls=null,tn=null,vd=0,Bo=1/0,gi=null,Il=!1,pf=null,Zi=null,Pa=!1,Vi=null,Fl=0,Ds=0,mf=null,fl=-1,dl=0;function Kt(){return $e&6?_t():fl!==-1?fl:fl=_t()}function Qi(t){return t.mode&1?$e&2&&Ft!==0?Ft&-Ft:Qx.transition!==null?(dl===0&&(dl=Ag()),dl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Ug(t.type)),t):1}function qn(t,e,n,i){if(50<Ds)throw Ds=0,mf=null,Error(ue(185));aa(t,n,i),(!($e&2)||t!==Nt)&&(t===Nt&&(!($e&2)&&(eu|=n),Rt===4&&Hi(t,Ft)),sn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Bo=_t()+500,Kl&&lr()))}function sn(t,e){var n=t.callbackNode;Q0(t,e);var i=xl(t,t===Nt?Ft:0);if(i===0)n!==null&&th(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&th(n),e===1)t.tag===0?Zx(Yh.bind(null,t)):Qg(Yh.bind(null,t)),Yx(function(){!($e&6)&&lr()}),n=null;else{switch(Rg(i)){case 1:n=Vf;break;case 4:n=Tg;break;case 16:n=_l;break;case 536870912:n=wg;break;default:n=_l}n=Zv(n,Wv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wv(t,e){if(fl=-1,dl=0,$e&6)throw Error(ue(327));var n=t.callbackNode;if(Po()&&t.callbackNode!==n)return null;var i=xl(t,t===Nt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ol(t,i);else{e=i;var r=$e;$e|=2;var o=jv();(Nt!==t||Ft!==e)&&(gi=null,Bo=_t()+500,Er(t,e));do try{_y();break}catch(a){Xv(t,a)}while(1);nd(),Nl.current=o,$e=r,Et!==null?e=0:(Nt=null,Ft=0,e=Rt)}if(e!==0){if(e===2&&(r=Hc(t),r!==0&&(i=r,e=gf(t,r))),e===1)throw n=ea,Er(t,0),Hi(t,i),sn(t,_t()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!gy(r)&&(e=Ol(t,i),e===2&&(o=Hc(t),o!==0&&(i=o,e=gf(t,o))),e===1))throw n=ea,Er(t,0),Hi(t,i),sn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:gr(t,tn,gi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=vd+500-_t(),10<e)){if(xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$c(gr.bind(null,t,tn,gi),e);break}gr(t,tn,gi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Yn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*my(i/1960))-i,10<i){t.timeoutHandle=$c(gr.bind(null,t,tn,gi),i);break}gr(t,tn,gi);break;case 5:gr(t,tn,gi);break;default:throw Error(ue(329))}}}return sn(t,_t()),t.callbackNode===n?Wv.bind(null,t):null}function gf(t,e){var n=Ls;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=Ol(t,e),t!==2&&(e=tn,tn=n,e!==null&&vf(e)),t}function vf(t){tn===null?tn=t:tn.push.apply(tn,t)}function gy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Kn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~gd,e&=~eu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function Yh(t){if($e&6)throw Error(ue(327));Po();var e=xl(t,0);if(!(e&1))return sn(t,_t()),null;var n=Ol(t,e);if(t.tag!==0&&n===2){var i=Hc(t);i!==0&&(e=i,n=gf(t,i))}if(n===1)throw n=ea,Er(t,0),Hi(t,e),sn(t,_t()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,tn,gi),sn(t,_t()),null}function _d(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Bo=_t()+500,Kl&&lr())}}function Ur(t){Vi!==null&&Vi.tag===0&&!($e&6)&&Po();var e=$e;$e|=1;var n=Ln.transition,i=Je;try{if(Ln.transition=null,Je=1,t)return t()}finally{Je=i,Ln.transition=n,$e=e,!($e&6)&&lr()}}function xd(){pn=So.current,it(So)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,jx(n)),Et!==null)for(n=Et.return;n!==null;){var i=n;switch(Jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tl();break;case 3:zo(),it(rn),it(Wt),ld();break;case 5:ad(i);break;case 4:zo();break;case 13:it(at);break;case 19:it(at);break;case 10:id(i.type._context);break;case 22:case 23:xd()}n=n.return}if(Nt=t,Et=t=Ji(t.current,null),Ft=pn=e,Rt=0,ea=null,gd=eu=Dr=0,tn=Ls=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}yr=null}return t}function Xv(t,e){do{var n=Et;try{if(nd(),ll.current=Ul,Dl){for(var i=lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(Lr=0,Dt=At=lt=null,bs=!1,Zs=0,md.current=null,n===null||n.return===null){Rt=1,ea=e,Et=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Nh(s);if(m!==null){m.flags&=-257,Ih(m,s,a,o,e),m.mode&1&&Uh(o,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Uh(o,u,e),yd();break e}l=Error(ue(426))}}else if(ot&&a.mode&1){var p=Nh(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ih(p,s,a,o,e),ed(ko(l,a));break e}}o=l=ko(l,a),Rt!==4&&(Rt=2),Ls===null?Ls=[o]:Ls.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=Cv(o,l,e);Ah(o,f);break e;case 1:a=l;var _=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Zi===null||!Zi.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var g=bv(o,a,e);Ah(o,g);break e}}o=o.return}while(o!==null)}qv(n)}catch(M){e=M,Et===n&&n!==null&&(Et=n=n.return);continue}break}while(1)}function jv(){var t=Nl.current;return Nl.current=Ul,t===null?Ul:t}function yd(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Nt===null||!(Dr&268435455)&&!(eu&268435455)||Hi(Nt,Ft)}function Ol(t,e){var n=$e;$e|=2;var i=jv();(Nt!==t||Ft!==e)&&(gi=null,Er(t,e));do try{vy();break}catch(r){Xv(t,r)}while(1);if(nd(),$e=n,Nl.current=i,Et!==null)throw Error(ue(261));return Nt=null,Ft=0,Rt}function vy(){for(;Et!==null;)Yv(Et)}function _y(){for(;Et!==null&&!V0();)Yv(Et)}function Yv(t){var e=Kv(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?qv(t):Et=e,md.current=null}function qv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fy(n,e),n!==null){n.flags&=32767,Et=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Et=null;return}}else if(n=cy(n,e,pn),n!==null){Et=n;return}if(e=e.sibling,e!==null){Et=e;return}Et=e=t}while(e!==null);Rt===0&&(Rt=5)}function gr(t,e,n){var i=Je,r=Ln.transition;try{Ln.transition=null,Je=1,xy(t,e,n,i)}finally{Ln.transition=r,Je=i}return null}function xy(t,e,n,i){do Po();while(Vi!==null);if($e&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(J0(t,o),t===Nt&&(Et=Nt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,Zv(_l,function(){return Po(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ln.transition,Ln.transition=null;var s=Je;Je=1;var a=$e;$e|=4,md.current=null,hy(t,n),Gv(n,t),kx(Yc),yl=!!jc,Yc=jc=null,t.current=n,py(n),W0(),$e=a,Je=s,Ln.transition=o}else t.current=n;if(Pa&&(Pa=!1,Vi=t,Fl=r),o=t.pendingLanes,o===0&&(Zi=null),Y0(n.stateNode),sn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Il)throw Il=!1,t=pf,pf=null,t;return Fl&1&&t.tag!==0&&Po(),o=t.pendingLanes,o&1?t===mf?Ds++:(Ds=0,mf=t):Ds=0,lr(),null}function Po(){if(Vi!==null){var t=Rg(Fl),e=Ln.transition,n=Je;try{if(Ln.transition=null,Je=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Fl=0,$e&6)throw Error(ue(331));var r=$e;for($e|=4,ve=t.current;ve!==null;){var o=ve,s=o.child;if(ve.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ve=u;ve!==null;){var c=ve;switch(c.tag){case 0:case 11:case 15:Ps(8,c,o)}var d=c.child;if(d!==null)d.return=c,ve=d;else for(;ve!==null;){c=ve;var h=c.sibling,m=c.return;if(kv(c),c===u){ve=null;break}if(h!==null){h.return=m,ve=h;break}ve=m}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}ve=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ve=s;else e:for(;ve!==null;){if(o=ve,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ps(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,ve=f;break e}ve=o.return}}var _=t.current;for(ve=_;ve!==null;){s=ve;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ve=v;else e:for(s=_;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jl(9,a)}}catch(M){dt(a,a.return,M)}if(a===s){ve=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,ve=g;break e}ve=a.return}}if($e=r,lr(),ni&&typeof ni.onPostCommitFiberRoot=="function")try{ni.onPostCommitFiberRoot(Xl,t)}catch{}i=!0}return i}finally{Je=n,Ln.transition=e}}return!1}function qh(t,e,n){e=ko(n,e),e=Cv(t,e,1),t=Ki(t,e,1),e=Kt(),t!==null&&(aa(t,1,e),sn(t,e))}function dt(t,e,n){if(t.tag===3)qh(t,t,n);else for(;e!==null;){if(e.tag===3){qh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=ko(n,t),t=bv(e,t,1),e=Ki(e,t,1),t=Kt(),e!==null&&(aa(e,1,t),sn(e,t));break}}e=e.return}}function yy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ft&n)===n&&(Rt===4||Rt===3&&(Ft&130023424)===Ft&&500>_t()-vd?Er(t,0):gd|=n),sn(t,e)}function $v(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=Kt();t=Ai(t,e),t!==null&&(aa(t,e,n),sn(t,n))}function Sy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$v(t,n)}function My(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),$v(t,n)}var Kv;Kv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,uy(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ot&&e.flags&1048576&&Jg(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=Io(e,Wt.current);bo(e,n),r=cd(null,e,i,t,r,n);var o=fd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,on(i)?(o=!0,wl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,od(e),r.updater=Zl,e.stateNode=r,r._reactInternals=e,nf(e,i,t,n),e=sf(null,e,i,!0,o,n)):(e.tag=0,ot&&o&&Qf(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ty(i),t=Bn(i,t),r){case 0:e=of(null,e,i,t,n);break e;case 1:e=zh(null,e,i,t,n);break e;case 11:e=Fh(null,e,i,t,n);break e;case 14:e=Oh(null,e,i,Bn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),zh(t,e,i,r,n);case 3:e:{if(Uv(e),t===null)throw Error(ue(387));i=e.pendingProps,o=e.memoizedState,r=o.element,iv(t,e),Pl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ko(Error(ue(423)),e),e=kh(t,e,i,n,r);break e}else if(i!==r){r=ko(Error(ue(424)),e),e=kh(t,e,i,n,r);break e}else for(gn=$i(e.stateNode.containerInfo.firstChild),_n=e,ot=!0,Vn=null,n=av(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fo(),i===r){e=Ri(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return lv(e),t===null&&Jc(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,qc(i,r)?s=null:o!==null&&qc(i,o)&&(e.flags|=32),Dv(t,e),qt(t,e,s,n),e.child;case 6:return t===null&&Jc(e),null;case 13:return Nv(t,e,n);case 4:return sd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Oo(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Fh(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,tt(Cl,i._currentValue),i._currentValue=s,o!==null)if(Kn(o.value,s)){if(o.children===r.children&&!rn.current){e=Ri(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Si(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ef(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ue(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ef(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bo(e,n),r=Dn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),Oh(t,e,i,r,n);case 15:return Pv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),cl(t,e),e.tag=1,on(i)?(t=!0,wl(e)):t=!1,bo(e,n),ov(e,i,r),nf(e,i,r,n),sf(null,e,i,!0,t,n);case 19:return Iv(t,e,n);case 22:return Lv(t,e,n)}throw Error(ue(156,e.tag))};function Zv(t,e){return Eg(t,e)}function Ey(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new Ey(t,e,n,i)}function Sd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ty(t){if(typeof t=="function")return Sd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bf)return 11;if(t===Hf)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")Sd(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case co:return Tr(n.children,r,o,e);case kf:s=8,r|=8;break;case Ac:return t=Pn(12,n,e,r|2),t.elementType=Ac,t.lanes=o,t;case Rc:return t=Pn(13,n,e,r),t.elementType=Rc,t.lanes=o,t;case Cc:return t=Pn(19,n,e,r),t.elementType=Cc,t.lanes=o,t;case sg:return tu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rg:s=10;break e;case og:s=9;break e;case Bf:s=11;break e;case Hf:s=14;break e;case Oi:s=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=Pn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Tr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function tu(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=sg,t.lanes=n,t.stateNode={isHidden:!1},t}function Gu(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Vu(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eu(0),this.expirationTimes=Eu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Md(t,e,n,i,r,o,s,a,l){return t=new wy(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Pn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(o),t}function Ay(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:uo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qv(t){if(!t)return rr;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(on(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(on(n))return Zg(t,n,e)}return e}function Jv(t,e,n,i,r,o,s,a,l){return t=Md(n,i,!0,t,r,o,s,a,l),t.context=Qv(null),n=t.current,i=Kt(),r=Qi(n),o=Si(i,r),o.callback=e??null,Ki(n,o,r),t.current.lanes=r,aa(t,r,i),sn(t,i),t}function nu(t,e,n,i){var r=e.current,o=Kt(),s=Qi(r);return n=Qv(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,s),t!==null&&(qn(t,r,s,o),al(t,r,s)),s}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $h(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ed(t,e){$h(t,e),(t=t.alternate)&&$h(t,e)}function Ry(){return null}var e_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Td(t){this._internalRoot=t}iu.prototype.render=Td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));nu(t,e,null,null)};iu.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){nu(null,t,null,null)}),e[wi]=null}};function iu(t){this._internalRoot=t}iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Pg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&Dg(t)}};function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kh(){}function Cy(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=zl(s);o.call(u)}}var s=Jv(e,i,t,0,null,!1,!1,"",Kh);return t._reactRootContainer=s,t[wi]=s.current,js(t.nodeType===8?t.parentNode:t),Ur(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=zl(l);a.call(u)}}var l=Md(t,0,!1,null,null,!1,!1,"",Kh);return t._reactRootContainer=l,t[wi]=l.current,js(t.nodeType===8?t.parentNode:t),Ur(function(){nu(e,l,n,i)}),l}function ou(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=zl(s);a.call(l)}}nu(e,s,t,r)}else s=Cy(n,e,t,r,i);return zl(s)}Cg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ys(e.pendingLanes);n!==0&&(Wf(e,n|1),sn(e,_t()),!($e&6)&&(Bo=_t()+500,lr()))}break;case 13:Ur(function(){var i=Ai(t,1);if(i!==null){var r=Kt();qn(i,t,1,r)}}),Ed(t,1)}};Xf=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=Kt();qn(e,t,134217728,n)}Ed(t,134217728)}};bg=function(t){if(t.tag===13){var e=Qi(t),n=Ai(t,e);if(n!==null){var i=Kt();qn(n,t,e,i)}Ed(t,e)}};Pg=function(){return Je};Lg=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};zc=function(t,e,n){switch(e){case"input":if(Lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=$l(i);if(!r)throw Error(ue(90));lg(i),Lc(i,r)}}}break;case"textarea":cg(t,n);break;case"select":e=n.value,e!=null&&wo(t,!!n.multiple,e,!1)}};vg=_d;_g=Ur;var by={usingClientEntryPoint:!1,Events:[ua,mo,$l,mg,gg,_d]},ls={findFiberByHostInstance:xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Py={bundleType:ls.bundleType,version:ls.version,rendererPackageName:ls.rendererPackageName,rendererConfig:ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sg(t),t===null?null:t.stateNode},findFiberByHostInstance:ls.findFiberByHostInstance||Ry,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{Xl=La.inject(Py),ni=La}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(e))throw Error(ue(200));return Ay(t,e,null,n)};yn.createRoot=function(t,e){if(!wd(t))throw Error(ue(299));var n=!1,i="",r=e_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Md(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,js(t.nodeType===8?t.parentNode:t),new Td(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=Sg(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Ur(t)};yn.hydrate=function(t,e,n){if(!ru(e))throw Error(ue(200));return ou(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!wd(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=e_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Jv(e,null,t,1,n??null,r,!1,o,s),t[wi]=e.current,js(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new iu(e)};yn.render=function(t,e,n){if(!ru(e))throw Error(ue(200));return ou(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!ru(t))throw Error(ue(40));return t._reactRootContainer?(Ur(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};yn.unstable_batchedUpdates=_d;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ru(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return ou(t,e,n,!1,i)};yn.version="18.2.0-next-9e3b772b8-20220608";function t_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t_)}catch(t){console.error(t)}}t_(),Jm.exports=yn;var Ly=Jm.exports,Zh=Ly;Tc.createRoot=Zh.createRoot,Tc.hydrateRoot=Zh.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rt(){return rt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},rt.apply(this,arguments)}var Mt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mt||(Mt={}));const Qh="popstate";function Dy(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return ta("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:fa(r)}return Ny(e,n,null,t)}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Ho(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Uy(){return Math.random().toString(36).substr(2,8)}function Jh(t,e){return{usr:t.state,key:t.key,idx:e}}function ta(t,e,n,i){return n===void 0&&(n=null),rt({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?bi(e):e,{state:n,key:e&&e.key||i||Uy()})}function fa(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function bi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function Ny(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=Mt.Pop,l=null,u=c();u==null&&(u=0,s.replaceState(rt({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function d(){a=Mt.Pop;let p=c(),f=p==null?null:p-u;u=p,l&&l({action:a,location:y.location,delta:f})}function h(p,f){a=Mt.Push;let _=ta(y.location,p,f);n&&n(_,p),u=c()+1;let v=Jh(_,u),g=y.createHref(_);try{s.pushState(v,"",g)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(g)}o&&l&&l({action:a,location:y.location,delta:1})}function m(p,f){a=Mt.Replace;let _=ta(y.location,p,f);n&&n(_,p),u=c();let v=Jh(_,u),g=y.createHref(_);s.replaceState(v,"",g),o&&l&&l({action:a,location:y.location,delta:0})}function x(p){let f=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof p=="string"?p:fa(p);return Xe(f,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,f)}let y={get action(){return a},get location(){return t(r,s)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Qh,d),l=p,()=>{r.removeEventListener(Qh,d),l=null}},createHref(p){return e(r,p)},createURL:x,encodeLocation(p){let f=x(p);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(p){return s.go(p)}};return y}var vt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vt||(vt={}));const Iy=new Set(["lazy","caseSensitive","path","id","index","children"]);function Fy(t){return t.index===!0}function _f(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,o)=>{let s=[...n,o],a=typeof r.id=="string"?r.id:s.join("-");if(Xe(r.index!==!0||!r.children,"Cannot specify children on an index route"),Xe(!i[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Fy(r)){let l=rt({},r,e(r),{id:a});return i[a]=l,l}else{let l=rt({},r,e(r),{id:a,children:void 0});return i[a]=l,r.children&&(l.children=_f(r.children,e,s,i)),l}})}function Mo(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?bi(e):e,r=da(i.pathname||"/",n);if(r==null)return null;let o=n_(t);Oy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=jy(o[a],$y(r));return s}function n_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Xe(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=er([i,l.relativePath]),c=n.concat(l);o.children&&o.children.length>0&&(Xe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),n_(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Wy(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of i_(o.path))r(o,s,l)}),e}function i_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=i_(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Oy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Xy(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const zy=/^:\w+$/,ky=3,By=2,Hy=1,Gy=10,Vy=-2,ep=t=>t==="*";function Wy(t,e){let n=t.split("/"),i=n.length;return n.some(ep)&&(i+=Vy),e&&(i+=By),n.filter(r=>!ep(r)).reduce((r,o)=>r+(zy.test(o)?ky:o===""?Hy:Gy),i)}function Xy(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function jy(t,e){let{routesMeta:n}=t,i={},r="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=Yy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=a.route;o.push({params:i,pathname:er([r,c.pathname]),pathnameBase:Jy(er([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=er([r,c.pathnameBase]))}return o}function Yy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=qy(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=Ky(a[d]||"",c),u},{}),pathname:o,pathnameBase:s,pattern:t}}function qy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ho(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function $y(t){try{return decodeURI(t)}catch(e){return Ho(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ky(t,e){try{return decodeURIComponent(t)}catch(n){return Ho(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function da(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function Zy(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?bi(t):t;return{pathname:n?n.startsWith("/")?n:Qy(n,e):e,search:eS(i),hash:tS(r)}}function Qy(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Wu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ad(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function r_(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=bi(t):(r=rt({},t),Xe(!r.pathname||!r.pathname.includes("?"),Wu("?","pathname","search",r)),Xe(!r.pathname||!r.pathname.includes("#"),Wu("#","pathname","hash",r)),Xe(!r.search||!r.search.includes("#"),Wu("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(i||s==null)a=n;else{let d=e.length-1;if(s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=Zy(r,a),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const er=t=>t.join("/").replace(/\/\/+/g,"/"),Jy=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),eS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,tS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Rd{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function o_(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const s_=["post","put","patch","delete"],nS=new Set(s_),iS=["get",...s_],rS=new Set(iS),oS=new Set([301,302,303,307,308]),sS=new Set([307,308]),Xu={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},aS={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},us={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},a_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lS=t=>({hasErrorBoundary:!!t.hasErrorBoundary});function uS(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!n;Xe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(t.mapRouteProperties)r=t.mapRouteProperties;else if(t.detectErrorBoundary){let L=t.detectErrorBoundary;r=D=>({hasErrorBoundary:L(D)})}else r=lS;let o={},s=_f(t.routes,r,void 0,o),a,l=t.basename||"/",u=rt({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,h=null,m=null,x=null,y=t.hydrationData!=null,p=Mo(s,t.history.location,l),f=null;if(p==null){let L=wn(404,{pathname:t.history.location.pathname}),{matches:D,route:O}=lp(s);p=D,f={[O.id]:L}}let _=!p.some(L=>L.route.lazy)&&(!p.some(L=>L.route.loader)||t.hydrationData!=null),v,g={historyAction:t.history.action,location:t.history.location,matches:p,initialized:_,navigation:Xu,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||f,fetchers:new Map,blockers:new Map},M=Mt.Pop,R=!1,T,U=!1,S=!1,w=[],te=[],Z=new Map,H=0,j=-1,q=new Map,ie=new Set,ee=new Map,F=new Map,$=new Map,X=!1;function B(){return c=t.history.listen(L=>{let{action:D,location:O,delta:oe}=L;if(X){X=!1;return}Ho($.size===0||oe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let pe=le({currentLocation:g.location,nextLocation:O,historyAction:D});if(pe&&oe!=null){X=!0,t.history.go(oe*-1),ce(pe,{state:"blocked",location:O,proceed(){ce(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:O}),t.history.go(oe)},reset(){let b=new Map(g.blockers);b.set(pe,us),ae({blockers:b})}});return}return Se(D,O)}),g.initialized||Se(Mt.Pop,g.location),v}function W(){c&&c(),d.clear(),T&&T.abort(),g.fetchers.forEach((L,D)=>De(D)),g.blockers.forEach((L,D)=>Y(D))}function he(L){return d.add(L),()=>d.delete(L)}function ae(L){g=rt({},g,L),d.forEach(D=>D(g))}function me(L,D){var O,oe;let pe=g.actionData!=null&&g.navigation.formMethod!=null&&Gn(g.navigation.formMethod)&&g.navigation.state==="loading"&&((O=L.state)==null?void 0:O._isRedirect)!==!0,b;D.actionData?Object.keys(D.actionData).length>0?b=D.actionData:b=null:pe?b=g.actionData:b=null;let ne=D.loaderData?ap(g.loaderData,D.loaderData,D.matches||[],D.errors):g.loaderData,N=g.blockers;N.size>0&&(N=new Map(N),N.forEach((se,Te)=>N.set(Te,us)));let V=R===!0||g.navigation.formMethod!=null&&Gn(g.navigation.formMethod)&&((oe=L.state)==null?void 0:oe._isRedirect)!==!0;a&&(s=a,a=void 0),U||M===Mt.Pop||(M===Mt.Push?t.history.push(L,L.state):M===Mt.Replace&&t.history.replace(L,L.state)),ae(rt({},D,{actionData:b,loaderData:ne,historyAction:M,location:L,initialized:!0,navigation:Xu,revalidation:"idle",restoreScrollPosition:P(L,D.matches||g.matches),preventScrollReset:V,blockers:N})),M=Mt.Pop,R=!1,U=!1,S=!1,w=[],te=[]}async function xe(L,D){if(typeof L=="number"){t.history.go(L);return}let O=xf(g.location,g.matches,l,u.v7_prependBasename,L,D==null?void 0:D.fromRouteId,D==null?void 0:D.relative),{path:oe,submission:pe,error:b}=tp(u.v7_normalizeFormMethod,!1,O,D),ne=g.location,N=ta(g.location,oe,D&&D.state);N=rt({},N,t.history.encodeLocation(N));let V=D&&D.replace!=null?D.replace:void 0,se=Mt.Push;V===!0?se=Mt.Replace:V===!1||pe!=null&&Gn(pe.formMethod)&&pe.formAction===g.location.pathname+g.location.search&&(se=Mt.Replace);let Te=D&&"preventScrollReset"in D?D.preventScrollReset===!0:void 0,Ee=le({currentLocation:ne,nextLocation:N,historyAction:se});if(Ee){ce(Ee,{state:"blocked",location:N,proceed(){ce(Ee,{state:"proceeding",proceed:void 0,reset:void 0,location:N}),xe(L,D)},reset(){let Le=new Map(g.blockers);Le.set(Ee,us),ae({blockers:Le})}});return}return await Se(se,N,{submission:pe,pendingError:b,preventScrollReset:Te,replace:D&&D.replace})}function Re(){if(Qe(),ae({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Se(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Se(M||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function Se(L,D,O){T&&T.abort(),T=null,M=L,U=(O&&O.startUninterruptedRevalidation)===!0,K(g.location,g.matches),R=(O&&O.preventScrollReset)===!0;let oe=a||s,pe=O&&O.overrideNavigation,b=Mo(oe,D,l);if(!b){let Le=wn(404,{pathname:D.pathname}),{matches:et,route:qe}=lp(oe);fe(),me(D,{matches:et,loaderData:{},errors:{[qe.id]:Le}});return}if(g.initialized&&!S&&pS(g.location,D)&&!(O&&O.submission&&Gn(O.submission.formMethod))){me(D,{matches:b});return}T=new AbortController;let ne=fs(t.history,D,T.signal,O&&O.submission),N,V;if(O&&O.pendingError)V={[Eo(b).route.id]:O.pendingError};else if(O&&O.submission&&Gn(O.submission.formMethod)){let Le=await Ye(ne,D,O.submission,b,{replace:O.replace});if(Le.shortCircuited)return;N=Le.pendingActionData,V=Le.pendingActionError,pe=Da(D,O.submission),ne=new Request(ne.url,{signal:ne.signal})}let{shortCircuited:se,loaderData:Te,errors:Ee}=await wt(ne,D,b,pe,O&&O.submission,O&&O.fetcherSubmission,O&&O.replace,N,V);se||(T=null,me(D,rt({matches:b},N?{actionData:N}:{},{loaderData:Te,errors:Ee})))}async function Ye(L,D,O,oe,pe){pe===void 0&&(pe={}),Qe();let b=xS(D,O);ae({navigation:b});let ne,N=Sf(oe,D);if(!N.route.action&&!N.route.lazy)ne={type:vt.error,error:wn(405,{method:L.method,pathname:D.pathname,routeId:N.route.id})};else if(ne=await cs("action",L,N,oe,o,r,l),L.signal.aborted)return{shortCircuited:!0};if(Lo(ne)){let V;return pe&&pe.replace!=null?V=pe.replace:V=ne.location===g.location.pathname+g.location.search,await be(g,ne,{submission:O,replace:V}),{shortCircuited:!0}}if(Us(ne)){let V=Eo(oe,N.route.id);return(pe&&pe.replace)!==!0&&(M=Mt.Push),{pendingActionData:{},pendingActionError:{[V.route.id]:ne.error}}}if(Mr(ne))throw wn(400,{type:"defer-action"});return{pendingActionData:{[N.route.id]:ne.data}}}async function wt(L,D,O,oe,pe,b,ne,N,V){let se=oe||Da(D,pe),Te=pe||b||fp(se),Ee=a||s,[Le,et]=np(t.history,g,O,Te,D,S,w,te,ee,ie,Ee,l,N,V);if(fe(Ke=>!(O&&O.some(cn=>cn.route.id===Ke))||Le&&Le.some(cn=>cn.route.id===Ke)),j=++H,Le.length===0&&et.length===0){let Ke=pt();return me(D,rt({matches:O,loaderData:{},errors:V||null},N?{actionData:N}:{},Ke?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!U){et.forEach(cn=>{let Zn=g.fetchers.get(cn.key),A=ds(void 0,Zn?Zn.data:void 0);g.fetchers.set(cn.key,A)});let Ke=N||g.actionData;ae(rt({navigation:se},Ke?Object.keys(Ke).length===0?{actionData:null}:{actionData:Ke}:{},et.length>0?{fetchers:new Map(g.fetchers)}:{}))}et.forEach(Ke=>{Z.has(Ke.key)&&ze(Ke.key),Ke.controller&&Z.set(Ke.key,Ke.controller)});let qe=()=>et.forEach(Ke=>ze(Ke.key));T&&T.signal.addEventListener("abort",qe);let{results:Pt,loaderResults:mt,fetcherResults:zr}=await Pe(g.matches,O,Le,et,L);if(L.signal.aborted)return{shortCircuited:!0};T&&T.signal.removeEventListener("abort",qe),et.forEach(Ke=>Z.delete(Ke.key));let Mn=up(Pt);if(Mn){if(Mn.idx>=Le.length){let Ke=et[Mn.idx-Le.length].key;ie.add(Ke)}return await be(g,Mn.result,{replace:ne}),{shortCircuited:!0}}let{loaderData:Nn,errors:ai}=sp(g,O,Le,mt,V,et,zr,F);F.forEach((Ke,cn)=>{Ke.subscribe(Zn=>{(Zn||Ke.done)&&F.delete(cn)})});let kr=pt(),Pi=C(j),Br=kr||Pi||et.length>0;return rt({loaderData:Nn,errors:ai},Br?{fetchers:new Map(g.fetchers)}:{})}function Fe(L){return g.fetchers.get(L)||aS}function G(L,D,O,oe){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");Z.has(L)&&ze(L);let pe=a||s,b=xf(g.location,g.matches,l,u.v7_prependBasename,O,D,oe==null?void 0:oe.relative),ne=Mo(pe,b,l);if(!ne){Oe(L,D,wn(404,{pathname:b}));return}let{path:N,submission:V,error:se}=tp(u.v7_normalizeFormMethod,!0,b,oe);if(se){Oe(L,D,se);return}let Te=Sf(ne,N);if(R=(oe&&oe.preventScrollReset)===!0,V&&Gn(V.formMethod)){ht(L,D,N,Te,ne,V);return}ee.set(L,{routeId:D,path:N}),Ae(L,D,N,Te,ne,V)}async function ht(L,D,O,oe,pe,b){if(Qe(),ee.delete(L),!oe.route.action&&!oe.route.lazy){let z=wn(405,{method:b.formMethod,pathname:O,routeId:D});Oe(L,D,z);return}let ne=g.fetchers.get(L),N=yS(b,ne);g.fetchers.set(L,N),ae({fetchers:new Map(g.fetchers)});let V=new AbortController,se=fs(t.history,O,V.signal,b);Z.set(L,V);let Te=H,Ee=await cs("action",se,oe,pe,o,r,l);if(se.signal.aborted){Z.get(L)===V&&Z.delete(L);return}if(Lo(Ee))if(Z.delete(L),j>Te){let z=so(void 0);g.fetchers.set(L,z),ae({fetchers:new Map(g.fetchers)});return}else{ie.add(L);let z=ds(b);return g.fetchers.set(L,z),ae({fetchers:new Map(g.fetchers)}),be(g,Ee,{submission:b,isFetchActionRedirect:!0})}if(Us(Ee)){Oe(L,D,Ee.error);return}if(Mr(Ee))throw wn(400,{type:"defer-action"});let Le=g.navigation.location||g.location,et=fs(t.history,Le,V.signal),qe=a||s,Pt=g.navigation.state!=="idle"?Mo(qe,g.navigation.location,l):g.matches;Xe(Pt,"Didn't find any matches after fetcher action");let mt=++H;q.set(L,mt);let zr=ds(b,Ee.data);g.fetchers.set(L,zr);let[Mn,Nn]=np(t.history,g,Pt,b,Le,S,w,te,ee,ie,qe,l,{[oe.route.id]:Ee.data},void 0);Nn.filter(z=>z.key!==L).forEach(z=>{let Q=z.key,k=g.fetchers.get(Q),J=ds(void 0,k?k.data:void 0);g.fetchers.set(Q,J),Z.has(Q)&&ze(Q),z.controller&&Z.set(Q,z.controller)}),ae({fetchers:new Map(g.fetchers)});let ai=()=>Nn.forEach(z=>ze(z.key));V.signal.addEventListener("abort",ai);let{results:kr,loaderResults:Pi,fetcherResults:Br}=await Pe(g.matches,Pt,Mn,Nn,et);if(V.signal.aborted)return;V.signal.removeEventListener("abort",ai),q.delete(L),Z.delete(L),Nn.forEach(z=>Z.delete(z.key));let Ke=up(kr);if(Ke){if(Ke.idx>=Mn.length){let z=Nn[Ke.idx-Mn.length].key;ie.add(z)}return be(g,Ke.result)}let{loaderData:cn,errors:Zn}=sp(g,g.matches,Mn,Pi,void 0,Nn,Br,F);if(g.fetchers.has(L)){let z=so(Ee.data);g.fetchers.set(L,z)}let A=C(mt);g.navigation.state==="loading"&&mt>j?(Xe(M,"Expected pending action"),T&&T.abort(),me(g.navigation.location,{matches:Pt,loaderData:cn,errors:Zn,fetchers:new Map(g.fetchers)})):(ae(rt({errors:Zn,loaderData:ap(g.loaderData,cn,Pt,Zn)},A||Nn.length>0?{fetchers:new Map(g.fetchers)}:{})),S=!1)}async function Ae(L,D,O,oe,pe,b){let ne=g.fetchers.get(L),N=ds(b,ne?ne.data:void 0);g.fetchers.set(L,N),ae({fetchers:new Map(g.fetchers)});let V=new AbortController,se=fs(t.history,O,V.signal);Z.set(L,V);let Te=H,Ee=await cs("loader",se,oe,pe,o,r,l);if(Mr(Ee)&&(Ee=await c_(Ee,se.signal,!0)||Ee),Z.get(L)===V&&Z.delete(L),se.signal.aborted)return;if(Lo(Ee))if(j>Te){let et=so(void 0);g.fetchers.set(L,et),ae({fetchers:new Map(g.fetchers)});return}else{ie.add(L),await be(g,Ee);return}if(Us(Ee)){let et=Eo(g.matches,D);g.fetchers.delete(L),ae({fetchers:new Map(g.fetchers),errors:{[et.route.id]:Ee.error}});return}Xe(!Mr(Ee),"Unhandled fetcher deferred data");let Le=so(Ee.data);g.fetchers.set(L,Le),ae({fetchers:new Map(g.fetchers)})}async function be(L,D,O){let{submission:oe,replace:pe,isFetchActionRedirect:b}=O===void 0?{}:O;D.revalidate&&(S=!0);let ne=ta(L.location,D.location,rt({_isRedirect:!0},b?{_isFetchActionRedirect:!0}:{}));if(Xe(ne,"Expected a location on the redirect navigation"),n){let se=!1;if(D.reloadDocument)se=!0;else if(a_.test(D.location)){const Te=t.history.createURL(D.location);se=Te.origin!==e.location.origin||da(Te.pathname,l)==null}if(se){pe?e.location.replace(D.location):e.location.assign(D.location);return}}T=null;let N=pe===!0?Mt.Replace:Mt.Push,V=oe||fp(L.navigation);if(sS.has(D.status)&&V&&Gn(V.formMethod))await Se(N,ne,{submission:rt({},V,{formAction:D.location}),preventScrollReset:R});else if(b)await Se(N,ne,{overrideNavigation:Da(ne),fetcherSubmission:V,preventScrollReset:R});else{let se=Da(ne,V);await Se(N,ne,{overrideNavigation:se,preventScrollReset:R})}}async function Pe(L,D,O,oe,pe){let b=await Promise.all([...O.map(V=>cs("loader",pe,V,D,o,r,l)),...oe.map(V=>V.matches&&V.match&&V.controller?cs("loader",fs(t.history,V.path,V.controller.signal),V.match,V.matches,o,r,l):{type:vt.error,error:wn(404,{pathname:V.path})})]),ne=b.slice(0,O.length),N=b.slice(O.length);return await Promise.all([cp(L,O,ne,ne.map(()=>pe.signal),!1,g.loaderData),cp(L,oe.map(V=>V.match),N,oe.map(V=>V.controller?V.controller.signal:null),!0)]),{results:b,loaderResults:ne,fetcherResults:N}}function Qe(){S=!0,w.push(...fe()),ee.forEach((L,D)=>{Z.has(D)&&(te.push(D),ze(D))})}function Oe(L,D,O){let oe=Eo(g.matches,D);De(L),ae({errors:{[oe.route.id]:O},fetchers:new Map(g.fetchers)})}function De(L){let D=g.fetchers.get(L);Z.has(L)&&!(D&&D.state==="loading"&&q.has(L))&&ze(L),ee.delete(L),q.delete(L),ie.delete(L),g.fetchers.delete(L)}function ze(L){let D=Z.get(L);Xe(D,"Expected fetch controller: "+L),D.abort(),Z.delete(L)}function ct(L){for(let D of L){let O=Fe(D),oe=so(O.data);g.fetchers.set(D,oe)}}function pt(){let L=[],D=!1;for(let O of ie){let oe=g.fetchers.get(O);Xe(oe,"Expected fetcher: "+O),oe.state==="loading"&&(ie.delete(O),L.push(O),D=!0)}return ct(L),D}function C(L){let D=[];for(let[O,oe]of q)if(oe<L){let pe=g.fetchers.get(O);Xe(pe,"Expected fetcher: "+O),pe.state==="loading"&&(ze(O),q.delete(O),D.push(O))}return ct(D),D.length>0}function E(L,D){let O=g.blockers.get(L)||us;return $.get(L)!==D&&$.set(L,D),O}function Y(L){g.blockers.delete(L),$.delete(L)}function ce(L,D){let O=g.blockers.get(L)||us;Xe(O.state==="unblocked"&&D.state==="blocked"||O.state==="blocked"&&D.state==="blocked"||O.state==="blocked"&&D.state==="proceeding"||O.state==="blocked"&&D.state==="unblocked"||O.state==="proceeding"&&D.state==="unblocked","Invalid blocker state transition: "+O.state+" -> "+D.state);let oe=new Map(g.blockers);oe.set(L,D),ae({blockers:oe})}function le(L){let{currentLocation:D,nextLocation:O,historyAction:oe}=L;if($.size===0)return;$.size>1&&Ho(!1,"A router only supports one blocker at a time");let pe=Array.from($.entries()),[b,ne]=pe[pe.length-1],N=g.blockers.get(b);if(!(N&&N.state==="proceeding")&&ne({currentLocation:D,nextLocation:O,historyAction:oe}))return b}function fe(L){let D=[];return F.forEach((O,oe)=>{(!L||L(oe))&&(O.cancel(),D.push(oe),F.delete(oe))}),D}function Me(L,D,O){if(h=L,x=D,m=O||null,!y&&g.navigation===Xu){y=!0;let oe=P(g.location,g.matches);oe!=null&&ae({restoreScrollPosition:oe})}return()=>{h=null,x=null,m=null}}function de(L,D){return m&&m(L,D.map(oe=>_S(oe,g.loaderData)))||L.key}function K(L,D){if(h&&x){let O=de(L,D);h[O]=x()}}function P(L,D){if(h){let O=de(L,D),oe=h[O];if(typeof oe=="number")return oe}return null}function re(L){o={},a=_f(L,r,void 0,o)}return v={get basename(){return l},get state(){return g},get routes(){return s},initialize:B,subscribe:he,enableScrollRestoration:Me,navigate:xe,fetch:G,revalidate:Re,createHref:L=>t.history.createHref(L),encodeLocation:L=>t.history.encodeLocation(L),getFetcher:Fe,deleteFetcher:De,dispose:W,getBlocker:E,deleteBlocker:Y,_internalFetchControllers:Z,_internalActiveDeferreds:F,_internalSetRoutes:re},v}function cS(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function xf(t,e,n,i,r,o,s){let a,l;if(o!=null&&s!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===o){l=c;break}}else a=e,l=e[e.length-1];let u=r_(r||".",Ad(a).map(c=>c.pathnameBase),da(t.pathname,n)||t.pathname,s==="path");return r==null&&(u.search=t.search,u.hash=t.hash),(r==null||r===""||r===".")&&l&&l.route.index&&!Cd(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(u.pathname=u.pathname==="/"?n:er([n,u.pathname])),fa(u)}function tp(t,e,n,i){if(!i||!cS(i))return{path:n};if(i.formMethod&&!vS(i.formMethod))return{path:n,error:wn(405,{method:i.formMethod})};let r=()=>({path:n,error:wn(400,{type:"invalid-body"})}),o=i.formMethod||"get",s=t?o.toUpperCase():o.toLowerCase(),a=u_(n);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!Gn(s))return r();let h=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((m,x)=>{let[y,p]=x;return""+m+y+"="+p+`
`},""):String(i.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:i.formEncType,formData:void 0,json:void 0,text:h}}}else if(i.formEncType==="application/json"){if(!Gn(s))return r();try{let h=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:i.formEncType,formData:void 0,json:h,text:void 0}}}catch{return r()}}}Xe(typeof FormData=="function","FormData is not available in this environment");let l,u;if(i.formData)l=yf(i.formData),u=i.formData;else if(i.body instanceof FormData)l=yf(i.body),u=i.body;else if(i.body instanceof URLSearchParams)l=i.body,u=op(l);else if(i.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(i.body),u=op(l)}catch{return r()}let c={formMethod:s,formAction:a,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Gn(c.formMethod))return{path:n,submission:c};let d=bi(n);return e&&d.search&&Cd(d.search)&&l.append("index",""),d.search="?"+l,{path:fa(d),submission:c}}function fS(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function np(t,e,n,i,r,o,s,a,l,u,c,d,h,m){let x=m?Object.values(m)[0]:h?Object.values(h)[0]:void 0,y=t.createURL(e.location),p=t.createURL(r),f=m?Object.keys(m)[0]:void 0,v=fS(n,f).filter((M,R)=>{if(M.route.lazy)return!0;if(M.route.loader==null)return!1;if(dS(e.loaderData,e.matches[R],M)||s.some(S=>S===M.route.id))return!0;let T=e.matches[R],U=M;return ip(M,rt({currentUrl:y,currentParams:T.params,nextUrl:p,nextParams:U.params},i,{actionResult:x,defaultShouldRevalidate:o||y.pathname+y.search===p.pathname+p.search||y.search!==p.search||l_(T,U)}))}),g=[];return l.forEach((M,R)=>{if(!n.some(te=>te.route.id===M.routeId))return;let T=Mo(c,M.path,d);if(!T){g.push({key:R,routeId:M.routeId,path:M.path,matches:null,match:null,controller:null});return}let U=e.fetchers.get(R),S=Sf(T,M.path),w=!1;u.has(R)?w=!1:a.includes(R)?w=!0:U&&U.state!=="idle"&&U.data===void 0?w=o:w=ip(S,rt({currentUrl:y,currentParams:e.matches[e.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},i,{actionResult:x,defaultShouldRevalidate:o})),w&&g.push({key:R,routeId:M.routeId,path:M.path,matches:T,match:S,controller:new AbortController})}),[v,g]}function dS(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function l_(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function ip(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function rp(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];Xe(r,"No route found in manifest");let o={};for(let s in i){let l=r[s]!==void 0&&s!=="hasErrorBoundary";Ho(!l,'Route "'+r.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!Iy.has(s)&&(o[s]=i[s])}Object.assign(r,o),Object.assign(r,rt({},e(r),{lazy:void 0}))}async function cs(t,e,n,i,r,o,s,a){a===void 0&&(a={});let l,u,c,d=x=>{let y,p=new Promise((f,_)=>y=_);return c=()=>y(),e.signal.addEventListener("abort",c),Promise.race([x({request:e,params:n.params,context:a.requestContext}),p])};try{let x=n.route[t];if(n.route.lazy)if(x)u=(await Promise.all([d(x),rp(n.route,o,r)]))[0];else if(await rp(n.route,o,r),x=n.route[t],x)u=await d(x);else if(t==="action"){let y=new URL(e.url),p=y.pathname+y.search;throw wn(405,{method:e.method,pathname:p,routeId:n.route.id})}else return{type:vt.data,data:void 0};else if(x)u=await d(x);else{let y=new URL(e.url),p=y.pathname+y.search;throw wn(404,{pathname:p})}Xe(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(x){l=vt.error,u=x}finally{c&&e.signal.removeEventListener("abort",c)}if(gS(u)){let x=u.status;if(oS.has(x)){let f=u.headers.get("Location");if(Xe(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!a_.test(f))f=xf(new URL(e.url),i.slice(0,i.indexOf(n)+1),s,!0,f);else if(!a.isStaticRequest){let _=new URL(e.url),v=f.startsWith("//")?new URL(_.protocol+f):new URL(f),g=da(v.pathname,s)!=null;v.origin===_.origin&&g&&(f=v.pathname+v.search+v.hash)}if(a.isStaticRequest)throw u.headers.set("Location",f),u;return{type:vt.redirect,status:x,location:f,revalidate:u.headers.get("X-Remix-Revalidate")!==null,reloadDocument:u.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:l===vt.error?vt.error:vt.data,response:u};let y,p=u.headers.get("Content-Type");return p&&/\bapplication\/json\b/.test(p)?y=await u.json():y=await u.text(),l===vt.error?{type:l,error:new Rd(x,u.statusText,y),headers:u.headers}:{type:vt.data,data:y,statusCode:u.status,headers:u.headers}}if(l===vt.error)return{type:l,error:u};if(mS(u)){var h,m;return{type:vt.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:vt.data,data:u}}function fs(t,e,n,i){let r=t.createURL(u_(e)).toString(),o={signal:n};if(i&&Gn(i.formMethod)){let{formMethod:s,formEncType:a}=i;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(i.json)):a==="text/plain"?o.body=i.text:a==="application/x-www-form-urlencoded"&&i.formData?o.body=yf(i.formData):o.body=i.formData}return new Request(r,o)}function yf(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function op(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function hS(t,e,n,i,r){let o={},s=null,a,l=!1,u={};return n.forEach((c,d)=>{let h=e[d].route.id;if(Xe(!Lo(c),"Cannot handle redirect results in processLoaderData"),Us(c)){let m=Eo(t,h),x=c.error;i&&(x=Object.values(i)[0],i=void 0),s=s||{},s[m.route.id]==null&&(s[m.route.id]=x),o[h]=void 0,l||(l=!0,a=o_(c.error)?c.error.status:500),c.headers&&(u[h]=c.headers)}else Mr(c)?(r.set(h,c.deferredData),o[h]=c.deferredData.data):o[h]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[h]=c.headers)}),i&&(s=i,o[Object.keys(i)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function sp(t,e,n,i,r,o,s,a){let{loaderData:l,errors:u}=hS(e,n,i,r,a);for(let c=0;c<o.length;c++){let{key:d,match:h,controller:m}=o[c];Xe(s!==void 0&&s[c]!==void 0,"Did not find corresponding fetcher result");let x=s[c];if(!(m&&m.signal.aborted))if(Us(x)){let y=Eo(t.matches,h==null?void 0:h.route.id);u&&u[y.route.id]||(u=rt({},u,{[y.route.id]:x.error})),t.fetchers.delete(d)}else if(Lo(x))Xe(!1,"Unhandled fetcher revalidation redirect");else if(Mr(x))Xe(!1,"Unhandled fetcher deferred data");else{let y=so(x.data);t.fetchers.set(d,y)}}return{loaderData:l,errors:u}}function ap(t,e,n,i){let r=rt({},e);for(let o of n){let s=o.route.id;if(e.hasOwnProperty(s)?e[s]!==void 0&&(r[s]=e[s]):t[s]!==void 0&&o.route.loader&&(r[s]=t[s]),i&&i.hasOwnProperty(s))break}return r}function Eo(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function lp(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function wn(t,e){let{pathname:n,routeId:i,method:r,type:o}=e===void 0?{}:e,s="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(s="Bad Request",r&&n&&i?a="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):t===403?(s="Forbidden",a='Route "'+i+'" does not match URL "'+n+'"'):t===404?(s="Not Found",a='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",r&&n&&i?a="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(a='Invalid request method "'+r.toUpperCase()+'"')),new Rd(t||500,s,new Error(a),!0)}function up(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Lo(n))return{result:n,idx:e}}}function u_(t){let e=typeof t=="string"?bi(t):t;return fa(rt({},e,{hash:""}))}function pS(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function Mr(t){return t.type===vt.deferred}function Us(t){return t.type===vt.error}function Lo(t){return(t&&t.type)===vt.redirect}function mS(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function gS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function vS(t){return rS.has(t.toLowerCase())}function Gn(t){return nS.has(t.toLowerCase())}async function cp(t,e,n,i,r,o){for(let s=0;s<n.length;s++){let a=n[s],l=e[s];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!l_(u,l)&&(o&&o[l.route.id])!==void 0;if(Mr(a)&&(r||c)){let d=i[s];Xe(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await c_(a,d,r).then(h=>{h&&(n[s]=h||n[s])})}}}async function c_(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:vt.data,data:t.deferredData.unwrappedData}}catch(r){return{type:vt.error,error:r}}return{type:vt.data,data:t.deferredData.data}}}function Cd(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function _S(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function Sf(t,e){let n=typeof e=="string"?bi(e).search:e.search;if(t[t.length-1].route.index&&Cd(n||""))return t[t.length-1];let i=Ad(t);return i[i.length-1]}function fp(t){let{formMethod:e,formAction:n,formEncType:i,text:r,formData:o,json:s}=t;if(!(!e||!n||!i)){if(r!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(o!=null)return{formMethod:e,formAction:n,formEncType:i,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:s,text:void 0}}}function Da(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function xS(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function ds(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function yS(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function so(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},kl.apply(this,arguments)}const su=ye.createContext(null),f_=ye.createContext(null),au=ye.createContext(null),lu=ye.createContext(null),Ko=ye.createContext({outlet:null,matches:[],isDataRoute:!1}),d_=ye.createContext(null);function uu(){return ye.useContext(lu)!=null}function h_(){return uu()||Xe(!1),ye.useContext(lu).location}function p_(t){ye.useContext(au).static||ye.useLayoutEffect(t)}function SS(){let{isDataRoute:t}=ye.useContext(Ko);return t?US():MS()}function MS(){uu()||Xe(!1);let t=ye.useContext(su),{basename:e,navigator:n}=ye.useContext(au),{matches:i}=ye.useContext(Ko),{pathname:r}=h_(),o=JSON.stringify(Ad(i).map(l=>l.pathnameBase)),s=ye.useRef(!1);return p_(()=>{s.current=!0}),ye.useCallback(function(l,u){if(u===void 0&&(u={}),!s.current)return;if(typeof l=="number"){n.go(l);return}let c=r_(l,JSON.parse(o),r,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:er([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,o,r,t])}function ES(t,e,n){uu()||Xe(!1);let{navigator:i}=ye.useContext(au),{matches:r}=ye.useContext(Ko),o=r[r.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=h_(),u;if(e){var c;let y=typeof e=="string"?bi(e):e;a==="/"||(c=y.pathname)!=null&&c.startsWith(a)||Xe(!1),u=y}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",m=Mo(t,{pathname:h}),x=CS(m&&m.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:er([a,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?a:er([a,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),r,n);return e&&x?ye.createElement(lu.Provider,{value:{location:kl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Mt.Pop}},x):x}function TS(){let t=DS(),e=o_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return ye.createElement(ye.Fragment,null,ye.createElement("h2",null,"Unexpected Application Error!"),ye.createElement("h3",{style:{fontStyle:"italic"}},e),n?ye.createElement("pre",{style:r},n):null,o)}const wS=ye.createElement(TS,null);class AS extends ye.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ye.createElement(Ko.Provider,{value:this.props.routeContext},ye.createElement(d_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function RS(t){let{routeContext:e,match:n,children:i}=t,r=ye.useContext(su);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ye.createElement(Ko.Provider,{value:e},i)}function CS(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let o=t,s=(i=n)==null?void 0:i.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||Xe(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let c=l.route.id?s==null?void 0:s[l.route.id]:null,d=null;n&&(d=l.route.errorElement||wS);let h=e.concat(o.slice(0,u+1)),m=()=>{let x;return c?x=d:l.route.Component?x=ye.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=a,ye.createElement(RS,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:x})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?ye.createElement(AS,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var m_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(m_||{}),Bl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Bl||{});function bS(t){let e=ye.useContext(su);return e||Xe(!1),e}function PS(t){let e=ye.useContext(f_);return e||Xe(!1),e}function LS(t){let e=ye.useContext(Ko);return e||Xe(!1),e}function g_(t){let e=LS(),n=e.matches[e.matches.length-1];return n.route.id||Xe(!1),n.route.id}function DS(){var t;let e=ye.useContext(d_),n=PS(Bl.UseRouteError),i=g_(Bl.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function US(){let{router:t}=bS(m_.UseNavigateStable),e=g_(Bl.UseNavigateStable),n=ye.useRef(!1);return p_(()=>{n.current=!0}),ye.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,kl({fromRouteId:e},o)))},[t,e])}const NS="startTransition",dp=S0[NS];function IS(t){let{fallbackElement:e,router:n,future:i}=t,[r,o]=ye.useState(n.state),{v7_startTransition:s}=i||{},a=ye.useCallback(d=>{s&&dp?dp(()=>o(d)):o(d)},[o,s]);ye.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=ye.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,h,m)=>n.navigate(d,{state:h,preventScrollReset:m==null?void 0:m.preventScrollReset}),replace:(d,h,m)=>n.navigate(d,{replace:!0,state:h,preventScrollReset:m==null?void 0:m.preventScrollReset})}),[n]),u=n.basename||"/",c=ye.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return ye.createElement(ye.Fragment,null,ye.createElement(su.Provider,{value:c},ye.createElement(f_.Provider,{value:r},ye.createElement(OS,{basename:u,location:r.location,navigationType:r.historyAction,navigator:l},r.initialized?ye.createElement(FS,{routes:n.routes,state:r}):e))),null)}function FS(t){let{routes:e,state:n}=t;return ES(e,void 0,n)}function OS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Mt.Pop,navigator:o,static:s=!1}=t;uu()&&Xe(!1);let a=e.replace(/^\/*/,"/"),l=ye.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof i=="string"&&(i=bi(i));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:m="default"}=i,x=ye.useMemo(()=>{let y=da(u,a);return y==null?null:{location:{pathname:y,search:c,hash:d,state:h,key:m},navigationType:r}},[a,u,c,d,h,m,r]);return x==null?null:ye.createElement(au.Provider,{value:l},ye.createElement(lu.Provider,{children:n,value:x}))}new Promise(()=>{});function zS(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:ye.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:ye.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hl(){return Hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Hl.apply(this,arguments)}function kS(t,e){return uS({basename:e==null?void 0:e.basename,future:Hl({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:Dy({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||BS(),routes:t,mapRouteProperties:zS}).initialize()}function BS(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Hl({},e,{errors:HS(e.errors)})),e}function HS(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new Rd(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let o=window[r.__subType];if(typeof o=="function")try{let s=new o(r.message);s.stack="",n[i]=s}catch{}}if(n[i]==null){let o=new Error(r.message);o.stack="",n[i]=o}}else n[i]=r;return n}var hp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(hp||(hp={}));var pp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pp||(pp={}));function GS(){const t=SS();return en.jsx("section",{className:"home-container",children:en.jsxs("div",{className:"home-wrapper",children:[en.jsx("h1",{children:"Welcome to the Effects Playground"}),en.jsxs("div",{className:"buttons-div",children:[en.jsx("button",{className:"navigation-button",onClick:()=>t("/flame-effect"),children:"Flame Effect"}),en.jsx("button",{className:"navigation-button",children:"Next Effect"})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="155",Gr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},VS=0,mp=1,WS=2,v_=1,XS=2,mi=3,or=0,an=1,bn=2,Mi=0,Do=1,Mf=2,gp=3,vp=4,jS=5,ao=100,YS=101,qS=102,_p=103,xp=104,$S=200,KS=201,ZS=202,QS=203,__=204,x_=205,JS=206,eM=207,tM=208,nM=209,iM=210,rM=0,oM=1,sM=2,Ef=3,aM=4,lM=5,uM=6,cM=7,y_=0,fM=1,dM=2,tr=0,S_=1,M_=2,E_=3,T_=4,hM=5,w_=300,Go=301,Vo=302,Tf=303,wf=304,cu=306,Af=1e3,Xn=1001,Rf=1002,$t=1003,yp=1004,ju=1005,Cn=1006,pM=1007,na=1008,nr=1009,mM=1010,gM=1011,Pd=1012,A_=1013,Wi=1014,Xi=1015,Ei=1016,R_=1017,C_=1018,wr=1020,vM=1021,jn=1023,_M=1024,xM=1025,Ar=1026,Wo=1027,yM=1028,b_=1029,SM=1030,P_=1031,L_=1033,Yu=33776,qu=33777,$u=33778,Ku=33779,Sp=35840,Mp=35841,Ep=35842,Tp=35843,MM=36196,wp=37492,Ap=37496,Rp=37808,Cp=37809,bp=37810,Pp=37811,Lp=37812,Dp=37813,Up=37814,Np=37815,Ip=37816,Fp=37817,Op=37818,zp=37819,kp=37820,Bp=37821,Zu=36492,EM=36283,Hp=36284,Gp=36285,Vp=36286,D_=3e3,Rr=3001,TM=3200,wM=3201,AM=0,RM=1,Cr="",Be="srgb",oi="srgb-linear",U_="display-p3",Qu=7680,CM=519,bM=512,PM=513,LM=514,DM=515,UM=516,NM=517,IM=518,FM=519,Wp=35044,Xp="300 es",Cf=1035,yi=2e3,Gl=2001;class Or{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jp=1234567;const Ns=Math.PI/180,ia=180/Math.PI;function Zo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function Ld(t,e){return(t%e+e)%e}function OM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function zM(t,e,n){return t!==e?(n-t)/(e-t):0}function Is(t,e,n){return(1-n)*t+n*e}function kM(t,e,n,i){return Is(t,e,1-Math.exp(-n*i))}function BM(t,e=1){return e-Math.abs(Ld(t,e*2)-e)}function HM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function GM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function VM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function WM(t,e){return t+Math.random()*(e-t)}function XM(t){return t*(.5-Math.random())}function jM(t){t!==void 0&&(jp=t);let e=jp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function YM(t){return t*Ns}function qM(t){return t*ia}function bf(t){return(t&t-1)===0&&t!==0}function $M(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Vl(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function KM(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),u=o((e+i)/2),c=s((e+i)/2),d=o((e-i)/2),h=s((e-i)/2),m=o((i-e)/2),x=s((i-e)/2);switch(r){case"XYX":t.set(a*c,l*d,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*d,a*u);break;case"ZXZ":t.set(l*d,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*x,l*m,a*u);break;case"YXY":t.set(l*m,a*c,l*x,a*u);break;case"ZYZ":t.set(l*x,l*m,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function lo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const ZM={DEG2RAD:Ns,RAD2DEG:ia,generateUUID:Zo,clamp:Vt,euclideanModulo:Ld,mapLinear:OM,inverseLerp:zM,lerp:Is,damp:kM,pingpong:BM,smoothstep:HM,smootherstep:GM,randInt:VM,randFloat:WM,randFloatSpread:XM,seededRandom:jM,degToRad:YM,radToDeg:qM,isPowerOfTwo:bf,ceilPowerOfTwo:$M,floorPowerOfTwo:Vl,setQuaternionFromProperEuler:KM,normalize:jt,denormalize:lo};class we{constructor(e=0,n=0){we.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,o,s,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],m=i[5],x=i[8],y=r[0],p=r[3],f=r[6],_=r[1],v=r[4],g=r[7],M=r[2],R=r[5],T=r[8];return o[0]=s*y+a*_+l*M,o[3]=s*p+a*v+l*R,o[6]=s*f+a*g+l*T,o[1]=u*y+c*_+d*M,o[4]=u*p+c*v+d*R,o[7]=u*f+c*g+d*T,o[2]=h*y+m*_+x*M,o[5]=h*p+m*v+x*R,o[8]=h*f+m*g+x*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,h=a*l-c*o,m=u*o-s*l,x=n*d+i*h+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=d*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*s)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=m*y,e[7]=(i*l-u*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ju.makeScale(e,n)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ju.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ju=new Ge;function N_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ra(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Yp={};function Fs(t){t in Yp||(Yp[t]=!0,console.warn(t))}function Uo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ec(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const QM=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),JM=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function eE(t){return t.convertSRGBToLinear().applyMatrix3(JM)}function tE(t){return t.applyMatrix3(QM).convertLinearToSRGB()}const nE={[oi]:t=>t,[Be]:t=>t.convertSRGBToLinear(),[U_]:eE},iE={[oi]:t=>t,[Be]:t=>t.convertLinearToSRGB(),[U_]:tE},Fn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return oi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=nE[e],r=iE[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Wr;class I_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wr===void 0&&(Wr=ra("canvas")),Wr.width=e.width,Wr.height=e.height;const i=Wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Wr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ra("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Uo(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Uo(n[i]/255)*255):n[i]=Uo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rE=0;class F_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Zo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(tc(r[s].image)):o.push(tc(r[s]))}else o=tc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?I_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oE=0;class ln extends Or{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Xn,r=Xn,o=Cn,s=na,a=jn,l=nr,u=ln.DEFAULT_ANISOTROPY,c=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=Zo(),this.name="",this.source=new F_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Rr?Be:Cr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==w_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Af:e.x=e.x-Math.floor(e.x);break;case Xn:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Af:e.y=e.y-Math.floor(e.y);break;case Xn:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Be?Rr:D_}set encoding(e){Fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Rr?Be:Cr}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=w_;ln.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,n=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],m=l[5],x=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,g=(m+1)/2,M=(f+1)/2,R=(c+h)/4,T=(d+y)/4,U=(x+p)/4;return v>g&&v>M?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=R/i,o=T/i):g>M?g<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(g),i=R/r,o=U/r):M<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),i=T/o,r=U/o),this.set(i,r,o,n),this}let _=Math.sqrt((p-x)*(p-x)+(d-y)*(d-y)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-y)/_,this.z=(h-c)/_,this.w=Math.acos((u+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends Or{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new st(0,0,e,n),this.scissorTest=!1,this.viewport=new st(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Rr?Be:Cr),this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Cn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new F_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends sE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class O_ extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aE extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],x=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=y;return}if(d!==y||l!==h||u!==m||c!==x){let p=1-a;const f=l*h+u*m+c*x+d*y,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),R=Math.atan2(M,f*_);p=Math.sin(p*R)/M,a=Math.sin(a*R)/M}const g=a*_;if(l=l*p+h*g,u=u*p+m*g,c=c*p+x*g,d=d*p+y*g,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],h=o[s+1],m=o[s+2],x=o[s+3];return e[n]=a*x+c*d+l*m-u*h,e[n+1]=l*x+c*h+u*d-a*m,e[n+2]=u*x+c*m+a*h-l*d,e[n+3]=c*x-a*d-l*h-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),x=l(o/2);switch(s){case"XYZ":this._x=h*c*d+u*m*x,this._y=u*m*d-h*c*x,this._z=u*c*x+h*m*d,this._w=u*c*d-h*m*x;break;case"YXZ":this._x=h*c*d+u*m*x,this._y=u*m*d-h*c*x,this._z=u*c*x-h*m*d,this._w=u*c*d+h*m*x;break;case"ZXY":this._x=h*c*d-u*m*x,this._y=u*m*d+h*c*x,this._z=u*c*x+h*m*d,this._w=u*c*d-h*m*x;break;case"ZYX":this._x=h*c*d-u*m*x,this._y=u*m*d+h*c*x,this._z=u*c*x-h*m*d,this._w=u*c*d+h*m*x;break;case"YZX":this._x=h*c*d+u*m*x,this._y=u*m*d+h*c*x,this._z=u*c*x-h*m*d,this._w=u*c*d-h*m*x;break;case"XZY":this._x=h*c*d-u*m*x,this._y=u*m*d-h*c*x,this._z=u*c*x+h*m*d,this._w=u*c*d+h*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(c-l)*m,this._y=(o-u)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-u)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(o),i*Math.cos(o),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,n=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=l*n+s*r-a*i,c=l*i+a*n-o*r,d=l*r+o*i-s*n,h=-o*n-s*i-a*r;return this.x=u*l+h*-o+c*-a-d*-s,this.y=c*l+h*-s+d*-o-u*-a,this.z=d*l+h*-a+u*-s-c*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new I,qp=new Nr;class ha{constructor(e=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const o=r.attributes.position;for(let s=0,a=o.count;s<a;s++)ci.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(ci)}else r.boundingBox===null&&r.computeBoundingBox(),Xr.copy(r.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),Ua.subVectors(this.max,hs),jr.subVectors(e.a,hs),Yr.subVectors(e.b,hs),qr.subVectors(e.c,hs),Di.subVectors(Yr,jr),Ui.subVectors(qr,Yr),fr.subVectors(jr,qr);let n=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-fr.z,fr.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,fr.z,0,-fr.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-fr.y,fr.x,0];return!ic(n,jr,Yr,qr,Ua)||(n=[1,0,0,0,1,0,0,0,1],!ic(n,jr,Yr,qr,Ua))?!1:(Na.crossVectors(Di,Ui),n=[Na.x,Na.y,Na.z],ic(n,jr,Yr,qr,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new I,new I,new I,new I,new I,new I,new I,new I],ci=new I,Xr=new ha,jr=new I,Yr=new I,qr=new I,Di=new I,Ui=new I,fr=new I,hs=new I,Ua=new I,Na=new I,dr=new I;function ic(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){dr.fromArray(t,o);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),u=n.dot(dr),c=i.dot(dr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const lE=new ha,ps=new I,rc=new I;class Dd{constructor(e=new I,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lE.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const n=ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(rc)),this.expandByPoint(ps.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new I,oc=new I,Ia=new I,Ni=new I,sc=new I,Fa=new I,ac=new I;class z_{constructor(e=new I,n=new I(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){oc.copy(e).add(n).multiplyScalar(.5),Ia.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(oc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ia),a=Ni.dot(this.direction),l=-Ni.dot(Ia),u=Ni.lengthSq(),c=Math.abs(1-s*s);let d,h,m,x;if(c>0)if(d=s*l-a,h=s*a-l,x=o*c,d>=0)if(h>=-x)if(h<=x){const y=1/c;d*=y,h*=y,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(oc).addScaledVector(Ia,h),m}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,o){sc.subVectors(n,e),Fa.subVectors(i,e),ac.crossVectors(sc,Fa);let s=this.direction.dot(ac),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(Ni,Fa));if(l<0)return null;const u=a*this.direction.dot(sc.cross(Ni));if(u<0||l+u>s)return null;const c=-a*Ni.dot(ac);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,o,s,a,l,u,c,d,h,m,x,y,p){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,h,m,x,y,p)}set(e,n,i,r,o,s,a,l,u,c,d,h,m,x,y,p){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=m,f[7]=x,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$r.setFromMatrixColumn(e,0).length(),o=1/$r.setFromMatrixColumn(e,1).length(),s=1/$r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*c,m=s*d,x=a*c,y=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=m+x*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=x+m*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,m=l*d,x=u*c,y=u*d;n[0]=h+y*a,n[4]=x*a-m,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=m*a-x,n[6]=y+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,m=l*d,x=u*c,y=u*d;n[0]=h-y*a,n[4]=-s*d,n[8]=x+m*a,n[1]=m+x*a,n[5]=s*c,n[9]=y-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,m=s*d,x=a*c,y=a*d;n[0]=l*c,n[4]=x*u-m,n[8]=h*u+y,n[1]=l*d,n[5]=y*u+h,n[9]=m*u-x,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*u,x=a*l,y=a*u;n[0]=l*c,n[4]=y-h*d,n[8]=x*d+m,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*d+x,n[10]=h-y*d}else if(e.order==="XZY"){const h=s*l,m=s*u,x=a*l,y=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+y,n[5]=s*c,n[9]=m*d-x,n[2]=x*d-m,n[6]=a*c,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uE,e,cE)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ii.crossVectors(i,dn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ii.crossVectors(i,dn)),Ii.normalize(),Oa.crossVectors(dn,Ii),r[0]=Ii.x,r[4]=Oa.x,r[8]=dn.x,r[1]=Ii.y,r[5]=Oa.y,r[9]=dn.y,r[2]=Ii.z,r[6]=Oa.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],m=i[13],x=i[2],y=i[6],p=i[10],f=i[14],_=i[3],v=i[7],g=i[11],M=i[15],R=r[0],T=r[4],U=r[8],S=r[12],w=r[1],te=r[5],Z=r[9],H=r[13],j=r[2],q=r[6],ie=r[10],ee=r[14],F=r[3],$=r[7],X=r[11],B=r[15];return o[0]=s*R+a*w+l*j+u*F,o[4]=s*T+a*te+l*q+u*$,o[8]=s*U+a*Z+l*ie+u*X,o[12]=s*S+a*H+l*ee+u*B,o[1]=c*R+d*w+h*j+m*F,o[5]=c*T+d*te+h*q+m*$,o[9]=c*U+d*Z+h*ie+m*X,o[13]=c*S+d*H+h*ee+m*B,o[2]=x*R+y*w+p*j+f*F,o[6]=x*T+y*te+p*q+f*$,o[10]=x*U+y*Z+p*ie+f*X,o[14]=x*S+y*H+p*ee+f*B,o[3]=_*R+v*w+g*j+M*F,o[7]=_*T+v*te+g*q+M*$,o[11]=_*U+v*Z+g*ie+M*X,o[15]=_*S+v*H+g*ee+M*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],m=e[14],x=e[3],y=e[7],p=e[11],f=e[15];return x*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*m-i*l*m)+y*(+n*l*m-n*u*h+o*s*h-r*s*m+r*u*c-o*l*c)+p*(+n*u*d-n*a*m-o*s*d+i*s*m+o*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*s*d-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],m=e[11],x=e[12],y=e[13],p=e[14],f=e[15],_=d*p*u-y*h*u+y*l*m-a*p*m-d*l*f+a*h*f,v=x*h*u-c*p*u-x*l*m+s*p*m+c*l*f-s*h*f,g=c*y*u-x*d*u+x*a*m-s*y*m-c*a*f+s*d*f,M=x*d*l-c*y*l-x*a*h+s*y*h+c*a*p-s*d*p,R=n*_+i*v+r*g+o*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=_*T,e[1]=(y*h*o-d*p*o-y*r*m+i*p*m+d*r*f-i*h*f)*T,e[2]=(a*p*o-y*l*o+y*r*u-i*p*u-a*r*f+i*l*f)*T,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*m-i*l*m)*T,e[4]=v*T,e[5]=(c*p*o-x*h*o+x*r*m-n*p*m-c*r*f+n*h*f)*T,e[6]=(x*l*o-s*p*o-x*r*u+n*p*u+s*r*f-n*l*f)*T,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*m+n*l*m)*T,e[8]=g*T,e[9]=(x*d*o-c*y*o-x*i*m+n*y*m+c*i*f-n*d*f)*T,e[10]=(s*y*o-x*a*o+x*i*u-n*y*u-s*i*f+n*a*f)*T,e[11]=(c*a*o-s*d*o-c*i*u+n*d*u+s*i*m-n*a*m)*T,e[12]=M*T,e[13]=(c*y*r-x*d*r+x*i*h-n*y*h-c*i*p+n*d*p)*T,e[14]=(x*a*r-s*y*r-x*i*l+n*y*l+s*i*p-n*a*p)*T,e[15]=(s*d*r-c*a*r+c*i*l-n*d*l-s*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,h=o*u,m=o*c,x=o*d,y=s*c,p=s*d,f=a*d,_=l*u,v=l*c,g=l*d,M=i.x,R=i.y,T=i.z;return r[0]=(1-(y+f))*M,r[1]=(m+g)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(m-g)*R,r[5]=(1-(h+f))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(x+v)*T,r[9]=(p-_)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=$r.set(r[0],r[1],r[2]).length();const s=$r.set(r[4],r[5],r[6]).length(),a=$r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/o,c=1/s,d=1/a;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,n.setFromRotationMatrix(On),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=yi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,x;if(a===yi)m=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===Gl)m=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=yi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(s-o),h=(n+e)*u,m=(i+r)*c;let x,y;if(a===yi)x=(s+o)*d,y=-2*d;else if(a===Gl)x=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $r=new I,On=new Tt,uE=new I(0,0,0),cE=new I(1,1,1),Ii=new I,Oa=new I,dn=new I,$p=new Tt,Kp=new Nr;class fu{constructor(e=0,n=0,i=0,r=fu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $p.makeRotationFromQuaternion(e),this.setFromRotationMatrix($p,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kp.setFromEuler(this),this.setFromQuaternion(Kp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fu.DEFAULT_ORDER="XYZ";class k_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fE=0;const Zp=new I,Kr=new Nr,di=new Tt,za=new I,ms=new I,dE=new I,hE=new Nr,Qp=new I(1,0,0),Jp=new I(0,1,0),em=new I(0,0,1),pE={type:"added"},tm={type:"removed"};class un extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new I,n=new fu,i=new Nr,r=new I(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ge}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new k_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,n){return Kr.setFromAxisAngle(e,n),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?za.copy(e):za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ms,za,this.up):di.lookAt(za,ms,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Kr.setFromRotationMatrix(di),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tm)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(tm)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const s=this.children[r].getObjectsByProperty(e,n);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,dE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,hE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const o=n[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++){const a=r[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),x=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new I(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new I,hi=new I,lc=new I,pi=new I,Zr=new I,Qr=new I,nm=new I,uc=new I,cc=new I,fc=new I;let ka=!1;class Wn{constructor(e=new I,n=new I,i=new I){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){zn.subVectors(r,n),hi.subVectors(i,n),lc.subVectors(e,n);const s=zn.dot(zn),a=zn.dot(hi),l=zn.dot(lc),u=hi.dot(hi),c=hi.dot(lc),d=s*u-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,m=(u*l-a*c)*h,x=(s*c-a*l)*h;return o.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,o,s,a,l){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),this.getInterpolation(e,n,i,r,o,s,a,l)}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,pi),l.setScalar(0),l.addScaledVector(o,pi.x),l.addScaledVector(s,pi.y),l.addScaledVector(a,pi.z),l}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),hi.subVectors(e,n),zn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),zn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,o){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}getInterpolation(e,n,i,r,o){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Zr.subVectors(r,i),Qr.subVectors(o,i),uc.subVectors(e,i);const l=Zr.dot(uc),u=Qr.dot(uc);if(l<=0&&u<=0)return n.copy(i);cc.subVectors(e,r);const c=Zr.dot(cc),d=Qr.dot(cc);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(Zr,s);fc.subVectors(e,o);const m=Zr.dot(fc),x=Qr.dot(fc);if(x>=0&&m<=x)return n.copy(o);const y=m*u-l*x;if(y<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Qr,a);const p=c*x-m*d;if(p<=0&&d-c>=0&&m-x>=0)return nm.subVectors(o,r),a=(d-c)/(d-c+(m-x)),n.copy(r).addScaledVector(nm,a);const f=1/(p+y+h);return s=y*f,a=h*f,n.copy(i).addScaledVector(Zr,s).addScaledVector(Qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let mE=0;class du extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=Do,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=__,this.blendDst=x_,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ef,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=CM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qu,this.stencilZFail=Qu,this.stencilZPass=Qu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function dc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Fn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Fn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Fn.workingColorSpace){if(e=Ld(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=dc(s,o,e+1/3),this.g=dc(s,o,e),this.b=dc(s,o,e-1/3)}return Fn.toWorkingColorSpace(this,r),this}setStyle(e,n=Be){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Be){const i=B_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}copyLinearToSRGB(e){return this.r=ec(e.r),this.g=ec(e.g),this.b=ec(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return Fn.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Vt(Ht.r*255,0,255))*65536+Math.round(Vt(Ht.g*255,0,255))*256+Math.round(Vt(Ht.b*255,0,255))}getHexString(e=Be){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Fn.workingColorSpace){Fn.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,o=Ht.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Fn.workingColorSpace){return Fn.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Be){Fn.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Be?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(kn),kn.h+=e,kn.s+=n,kn.l+=i,this.setHSL(kn.h,kn.s,kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(kn),e.getHSL(Ba);const i=Is(kn.h,Ba.h,n),r=Is(kn.s,Ba.s,n),o=Is(kn.l,Ba.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Ze;Ze.NAMES=B_;class Ud extends du{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new I,Ha=new we;class ri{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wp,this.updateRange={offset:0,count:-1},this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ha.fromBufferAttribute(this,n),Ha.applyMatrix3(e),this.setXY(n,Ha.x,Ha.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=lo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),o=jt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class H_ extends ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class G_ extends ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zt extends ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}let gE=0;const Tn=new Tt,hc=new un,Jr=new I,hn=new ha,gs=new ha,Lt=new I;class si extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N_(e)?G_:H_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ge().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];hn.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(hn.min,gs.min),hn.expandByPoint(Lt),Lt.addVectors(hn.max,gs.max),hn.expandByPoint(Lt)):(hn.expandByPoint(gs.min),hn.expandByPoint(gs.max))}hn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Lt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Lt.fromBufferAttribute(a,u),l&&(Jr.fromBufferAttribute(e,u),Lt.add(Jr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,o=n.normal.array,s=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new I,c[w]=new I;const d=new I,h=new I,m=new I,x=new we,y=new we,p=new we,f=new I,_=new I;function v(w,te,Z){d.fromArray(r,w*3),h.fromArray(r,te*3),m.fromArray(r,Z*3),x.fromArray(s,w*2),y.fromArray(s,te*2),p.fromArray(s,Z*2),h.sub(d),m.sub(d),y.sub(x),p.sub(x);const H=1/(y.x*p.y-p.x*y.y);isFinite(H)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(H),_.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(H),u[w].add(f),u[te].add(f),u[Z].add(f),c[w].add(_),c[te].add(_),c[Z].add(_))}let g=this.groups;g.length===0&&(g=[{start:0,count:i.length}]);for(let w=0,te=g.length;w<te;++w){const Z=g[w],H=Z.start,j=Z.count;for(let q=H,ie=H+j;q<ie;q+=3)v(i[q+0],i[q+1],i[q+2])}const M=new I,R=new I,T=new I,U=new I;function S(w){T.fromArray(o,w*3),U.copy(T);const te=u[w];M.copy(te),M.sub(T.multiplyScalar(T.dot(te))).normalize(),R.crossVectors(U,te);const H=R.dot(c[w])<0?-1:1;l[w*4]=M.x,l[w*4+1]=M.y,l[w*4+2]=M.z,l[w*4+3]=H}for(let w=0,te=g.length;w<te;++w){const Z=g[w],H=Z.start,j=Z.count;for(let q=H,ie=H+j;q<ie;q+=3)S(i[q+0]),S(i[q+1]),S(i[q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new I,o=new I,s=new I,a=new I,l=new I,u=new I,c=new I,d=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const x=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,p),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let m=0,x=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*c;for(let f=0;f<c;f++)h[x++]=u[m++]}return new ri(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new si,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,m=d.length;h<m;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new Tt,hr=new z_,Ga=new Dd,rm=new I,eo=new I,to=new I,no=new I,pc=new I,Va=new I,Wa=new we,Xa=new we,ja=new we,om=new I,sm=new I,am=new I,Ya=new I,qa=new I;class vn extends un{constructor(e=new si,n=new Ud){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Va.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(pc.fromBufferAttribute(d,e),s?Va.addScaledVector(pc,c):Va.addScaledVector(pc.sub(n),c))}n.add(Va)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(o),hr.copy(e.ray).recast(e.near),!(Ga.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Ga,rm)===null||hr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(o).invert(),hr.copy(e.ray).applyMatrix4(im),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,y=h.length;x<y;x++){const p=h[x],f=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let g=_,M=v;g<M;g+=3){const R=a.getX(g),T=a.getX(g+1),U=a.getX(g+2);r=$a(this,f,e,i,u,c,d,R,T,U),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=x,f=y;p<f;p+=3){const _=a.getX(p),v=a.getX(p+1),g=a.getX(p+2);r=$a(this,s,e,i,u,c,d,_,v,g),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,y=h.length;x<y;x++){const p=h[x],f=s[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let g=_,M=v;g<M;g+=3){const R=g,T=g+1,U=g+2;r=$a(this,f,e,i,u,c,d,R,T,U),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=x,f=y;p<f;p+=3){const _=p,v=p+1,g=p+2;r=$a(this,s,e,i,u,c,d,_,v,g),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function vE(t,e,n,i,r,o,s,a){let l;if(e.side===an?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===or,a),l===null)return null;qa.copy(a),qa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(qa);return u<n.near||u>n.far?null:{distance:u,point:qa.clone(),object:t}}function $a(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,eo),t.getVertexPosition(l,to),t.getVertexPosition(u,no);const c=vE(t,e,n,i,eo,to,no,Ya);if(c){r&&(Wa.fromBufferAttribute(r,a),Xa.fromBufferAttribute(r,l),ja.fromBufferAttribute(r,u),c.uv=Wn.getInterpolation(Ya,eo,to,no,Wa,Xa,ja,new we)),o&&(Wa.fromBufferAttribute(o,a),Xa.fromBufferAttribute(o,l),ja.fromBufferAttribute(o,u),c.uv1=Wn.getInterpolation(Ya,eo,to,no,Wa,Xa,ja,new we),c.uv2=c.uv1),s&&(om.fromBufferAttribute(s,a),sm.fromBufferAttribute(s,l),am.fromBufferAttribute(s,u),c.normal=Wn.getInterpolation(Ya,eo,to,no,om,sm,am,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new I,materialIndex:0};Wn.getNormal(eo,to,no,d.normal),c.face=d}return c}class pa extends si{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let h=0,m=0;x("z","y","x",-1,-1,i,n,e,s,o,0),x("z","y","x",1,-1,i,n,-e,s,o,1),x("x","z","y",1,1,e,i,n,r,s,2),x("x","z","y",1,-1,e,i,-n,r,s,3),x("x","y","z",1,-1,e,n,i,r,o,4),x("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(d,2));function x(y,p,f,_,v,g,M,R,T,U,S){const w=g/T,te=M/U,Z=g/2,H=M/2,j=R/2,q=T+1,ie=U+1;let ee=0,F=0;const $=new I;for(let X=0;X<ie;X++){const B=X*te-H;for(let W=0;W<q;W++){const he=W*w-Z;$[y]=he*_,$[p]=B*v,$[f]=j,u.push($.x,$.y,$.z),$[y]=0,$[p]=0,$[f]=R>0?1:-1,c.push($.x,$.y,$.z),d.push(W/T),d.push(1-X/U),ee+=1}}for(let X=0;X<U;X++)for(let B=0;B<T;B++){const W=h+B+q*X,he=h+B+q*(X+1),ae=h+(B+1)+q*(X+1),me=h+(B+1)+q*X;l.push(W,he,me),l.push(he,ae,me),F+=6}a.addGroup(m,F,S),m+=F,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Xo(t[n]);for(const r in i)e[r]=i[r]}return e}function _E(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function V_(t){return t.getRenderTarget()===null?t.outputColorSpace:oi}const oa={clone:Xo,merge:Yt};var xE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ut extends du{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xE,this.fragmentShader=yE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=_E(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class W_ extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=yi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mn extends W_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const io=-90,ro=1;class SE extends un{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new mn(io,ro,e,n);r.layers=this.layers,this.add(r);const o=new mn(io,ro,e,n);o.layers=this.layers,this.add(o);const s=new mn(io,ro,e,n);s.layers=this.layers,this.add(s);const a=new mn(io,ro,e,n);a.layers=this.layers,this.add(a);const l=new mn(io,ro,e,n);l.layers=this.layers,this.add(l);const u=new mn(io,ro,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,s,a,l,u]=this.children,c=e.getRenderTarget(),d=e.xr.enabled;e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,o),e.setRenderTarget(i,2),e.render(n,s),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class X_ extends ln{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Go,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ME extends $n{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Rr?Be:Cr),this.texture=new X_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pa(5,5,5),o=new Ut({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Mi});o.uniforms.tEquirect.value=n;const s=new vn(r,o),a=n.minFilter;return n.minFilter===na&&(n.minFilter=Cn),new SE(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const mc=new I,EE=new I,TE=new Ge;class ki{constructor(e=new I(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mc.subVectors(i,n).cross(EE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||TE.getNormalMatrix(e),r=this.coplanarPoint(mc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new Dd,Ka=new I;class Nd{constructor(e=new ki,n=new ki,i=new ki,r=new ki,o=new ki,s=new ki){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],m=r[8],x=r[9],y=r[10],p=r[11],f=r[12],_=r[13],v=r[14],g=r[15];if(i[0].setComponents(l-o,h-u,p-m,g-f).normalize(),i[1].setComponents(l+o,h+u,p+m,g+f).normalize(),i[2].setComponents(l+s,h+c,p+x,g+_).normalize(),i[3].setComponents(l-s,h-c,p-x,g-_).normalize(),i[4].setComponents(l-a,h-d,p-y,g-v).normalize(),n===yi)i[5].setComponents(l+a,h+d,p+y,g+v).normalize();else if(n===Gl)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function j_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function wE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function o(u,c,d){const h=c.array,m=c.updateRange;t.bindBuffer(d,u),m.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(o(d.buffer,u,c),d.version=u.version)}return{get:s,remove:a,update:l}}class Id extends si{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,m=[],x=[],y=[],p=[];for(let f=0;f<c;f++){const _=f*h-s;for(let v=0;v<u;v++){const g=v*d-o;x.push(g,-_,0),y.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+u*f,g=_+u*(f+1),M=_+1+u*(f+1),R=_+1+u*f;m.push(v,g,R),m.push(g,M,R)}this.setIndex(m),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Id(e.width,e.height,e.widthSegments,e.heightSegments)}}var AE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,LE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,YE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$E=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eT="gl_FragColor = linearToOutputTexel( gl_FragColor );",tT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,hT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_T=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,ET=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,RT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,PT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,LT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,DT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,BT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,HT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,GT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$T=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ew=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,fw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_w=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ew=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Lw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ow=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ww=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,t1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:AE,alphahash_pars_fragment:RE,alphamap_fragment:CE,alphamap_pars_fragment:bE,alphatest_fragment:PE,alphatest_pars_fragment:LE,aomap_fragment:DE,aomap_pars_fragment:UE,begin_vertex:NE,beginnormal_vertex:IE,bsdfs:FE,iridescence_fragment:OE,bumpmap_pars_fragment:zE,clipping_planes_fragment:kE,clipping_planes_pars_fragment:BE,clipping_planes_pars_vertex:HE,clipping_planes_vertex:GE,color_fragment:VE,color_pars_fragment:WE,color_pars_vertex:XE,color_vertex:jE,common:YE,cube_uv_reflection_fragment:qE,defaultnormal_vertex:$E,displacementmap_pars_vertex:KE,displacementmap_vertex:ZE,emissivemap_fragment:QE,emissivemap_pars_fragment:JE,colorspace_fragment:eT,colorspace_pars_fragment:tT,envmap_fragment:nT,envmap_common_pars_fragment:iT,envmap_pars_fragment:rT,envmap_pars_vertex:oT,envmap_physical_pars_fragment:vT,envmap_vertex:sT,fog_vertex:aT,fog_pars_vertex:lT,fog_fragment:uT,fog_pars_fragment:cT,gradientmap_pars_fragment:fT,lightmap_fragment:dT,lightmap_pars_fragment:hT,lights_lambert_fragment:pT,lights_lambert_pars_fragment:mT,lights_pars_begin:gT,lights_toon_fragment:_T,lights_toon_pars_fragment:xT,lights_phong_fragment:yT,lights_phong_pars_fragment:ST,lights_physical_fragment:MT,lights_physical_pars_fragment:ET,lights_fragment_begin:TT,lights_fragment_maps:wT,lights_fragment_end:AT,logdepthbuf_fragment:RT,logdepthbuf_pars_fragment:CT,logdepthbuf_pars_vertex:bT,logdepthbuf_vertex:PT,map_fragment:LT,map_pars_fragment:DT,map_particle_fragment:UT,map_particle_pars_fragment:NT,metalnessmap_fragment:IT,metalnessmap_pars_fragment:FT,morphcolor_vertex:OT,morphnormal_vertex:zT,morphtarget_pars_vertex:kT,morphtarget_vertex:BT,normal_fragment_begin:HT,normal_fragment_maps:GT,normal_pars_fragment:VT,normal_pars_vertex:WT,normal_vertex:XT,normalmap_pars_fragment:jT,clearcoat_normal_fragment_begin:YT,clearcoat_normal_fragment_maps:qT,clearcoat_pars_fragment:$T,iridescence_pars_fragment:KT,opaque_fragment:ZT,packing:QT,premultiplied_alpha_fragment:JT,project_vertex:ew,dithering_fragment:tw,dithering_pars_fragment:nw,roughnessmap_fragment:iw,roughnessmap_pars_fragment:rw,shadowmap_pars_fragment:ow,shadowmap_pars_vertex:sw,shadowmap_vertex:aw,shadowmask_pars_fragment:lw,skinbase_vertex:uw,skinning_pars_vertex:cw,skinning_vertex:fw,skinnormal_vertex:dw,specularmap_fragment:hw,specularmap_pars_fragment:pw,tonemapping_fragment:mw,tonemapping_pars_fragment:gw,transmission_fragment:vw,transmission_pars_fragment:_w,uv_pars_fragment:xw,uv_pars_vertex:yw,uv_vertex:Sw,worldpos_vertex:Mw,background_vert:Ew,background_frag:Tw,backgroundCube_vert:ww,backgroundCube_frag:Aw,cube_vert:Rw,cube_frag:Cw,depth_vert:bw,depth_frag:Pw,distanceRGBA_vert:Lw,distanceRGBA_frag:Dw,equirect_vert:Uw,equirect_frag:Nw,linedashed_vert:Iw,linedashed_frag:Fw,meshbasic_vert:Ow,meshbasic_frag:zw,meshlambert_vert:kw,meshlambert_frag:Bw,meshmatcap_vert:Hw,meshmatcap_frag:Gw,meshnormal_vert:Vw,meshnormal_frag:Ww,meshphong_vert:Xw,meshphong_frag:jw,meshphysical_vert:Yw,meshphysical_frag:qw,meshtoon_vert:$w,meshtoon_frag:Kw,points_vert:Zw,points_frag:Qw,shadow_vert:Jw,shadow_frag:e1,sprite_vert:t1,sprite_frag:n1},ge={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ei={basic:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Yt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Yt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Yt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Yt([ge.points,ge.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Yt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Yt([ge.common,ge.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Yt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Yt([ge.sprite,ge.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Yt([ge.common,ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Yt([ge.lights,ge.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ei.physical={uniforms:Yt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Za={r:0,b:0,g:0};function i1(t,e,n,i,r,o,s){const a=new Ze(0);let l=o===!0?0:1,u,c,d=null,h=0,m=null;function x(p,f){let _=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,s),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,s),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cu)?(c===void 0&&(c=new vn(new pa(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Xo(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Be,(d!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new vn(new Id(2,2),new Ut({name:"BackgroundMaterial",uniforms:Xo(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Be,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function y(p,f){p.getRGB(Za,V_(t)),i.buffers.color.setClear(Za.r,Za.g,Za.b,f,s)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:x}}function r1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=p(null);let u=l,c=!1;function d(j,q,ie,ee,F){let $=!1;if(s){const X=y(ee,ie,q);u!==X&&(u=X,m(u.object)),$=f(j,ee,ie,F),$&&_(j,ee,ie,F)}else{const X=q.wireframe===!0;(u.geometry!==ee.id||u.program!==ie.id||u.wireframe!==X)&&(u.geometry=ee.id,u.program=ie.id,u.wireframe=X,$=!0)}F!==null&&n.update(F,t.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,U(j,q,ie,ee),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(F).buffer))}function h(){return i.isWebGL2?t.createVertexArray():o.createVertexArrayOES()}function m(j){return i.isWebGL2?t.bindVertexArray(j):o.bindVertexArrayOES(j)}function x(j){return i.isWebGL2?t.deleteVertexArray(j):o.deleteVertexArrayOES(j)}function y(j,q,ie){const ee=ie.wireframe===!0;let F=a[j.id];F===void 0&&(F={},a[j.id]=F);let $=F[q.id];$===void 0&&($={},F[q.id]=$);let X=$[ee];return X===void 0&&(X=p(h()),$[ee]=X),X}function p(j){const q=[],ie=[],ee=[];for(let F=0;F<r;F++)q[F]=0,ie[F]=0,ee[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ie,attributeDivisors:ee,object:j,attributes:{},index:null}}function f(j,q,ie,ee){const F=u.attributes,$=q.attributes;let X=0;const B=ie.getAttributes();for(const W in B)if(B[W].location>=0){const ae=F[W];let me=$[W];if(me===void 0&&(W==="instanceMatrix"&&j.instanceMatrix&&(me=j.instanceMatrix),W==="instanceColor"&&j.instanceColor&&(me=j.instanceColor)),ae===void 0||ae.attribute!==me||me&&ae.data!==me.data)return!0;X++}return u.attributesNum!==X||u.index!==ee}function _(j,q,ie,ee){const F={},$=q.attributes;let X=0;const B=ie.getAttributes();for(const W in B)if(B[W].location>=0){let ae=$[W];ae===void 0&&(W==="instanceMatrix"&&j.instanceMatrix&&(ae=j.instanceMatrix),W==="instanceColor"&&j.instanceColor&&(ae=j.instanceColor));const me={};me.attribute=ae,ae&&ae.data&&(me.data=ae.data),F[W]=me,X++}u.attributes=F,u.attributesNum=X,u.index=ee}function v(){const j=u.newAttributes;for(let q=0,ie=j.length;q<ie;q++)j[q]=0}function g(j){M(j,0)}function M(j,q){const ie=u.newAttributes,ee=u.enabledAttributes,F=u.attributeDivisors;ie[j]=1,ee[j]===0&&(t.enableVertexAttribArray(j),ee[j]=1),F[j]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,q),F[j]=q)}function R(){const j=u.newAttributes,q=u.enabledAttributes;for(let ie=0,ee=q.length;ie<ee;ie++)q[ie]!==j[ie]&&(t.disableVertexAttribArray(ie),q[ie]=0)}function T(j,q,ie,ee,F,$,X){X===!0?t.vertexAttribIPointer(j,q,ie,F,$):t.vertexAttribPointer(j,q,ie,ee,F,$)}function U(j,q,ie,ee){if(i.isWebGL2===!1&&(j.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const F=ee.attributes,$=ie.getAttributes(),X=q.defaultAttributeValues;for(const B in $){const W=$[B];if(W.location>=0){let he=F[B];if(he===void 0&&(B==="instanceMatrix"&&j.instanceMatrix&&(he=j.instanceMatrix),B==="instanceColor"&&j.instanceColor&&(he=j.instanceColor)),he!==void 0){const ae=he.normalized,me=he.itemSize,xe=n.get(he);if(xe===void 0)continue;const Re=xe.buffer,Se=xe.type,Ye=xe.bytesPerElement,wt=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||he.gpuType===A_);if(he.isInterleavedBufferAttribute){const Fe=he.data,G=Fe.stride,ht=he.offset;if(Fe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<W.locationSize;Ae++)M(W.location+Ae,Fe.meshPerAttribute);j.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)g(W.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let Ae=0;Ae<W.locationSize;Ae++)T(W.location+Ae,me/W.locationSize,Se,ae,G*Ye,(ht+me/W.locationSize*Ae)*Ye,wt)}else{if(he.isInstancedBufferAttribute){for(let Fe=0;Fe<W.locationSize;Fe++)M(W.location+Fe,he.meshPerAttribute);j.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)g(W.location+Fe);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let Fe=0;Fe<W.locationSize;Fe++)T(W.location+Fe,me/W.locationSize,Se,ae,me*Ye,me/W.locationSize*Fe*Ye,wt)}}else if(X!==void 0){const ae=X[B];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(W.location,ae);break;case 3:t.vertexAttrib3fv(W.location,ae);break;case 4:t.vertexAttrib4fv(W.location,ae);break;default:t.vertexAttrib1fv(W.location,ae)}}}}R()}function S(){Z();for(const j in a){const q=a[j];for(const ie in q){const ee=q[ie];for(const F in ee)x(ee[F].object),delete ee[F];delete q[ie]}delete a[j]}}function w(j){if(a[j.id]===void 0)return;const q=a[j.id];for(const ie in q){const ee=q[ie];for(const F in ee)x(ee[F].object),delete ee[F];delete q[ie]}delete a[j.id]}function te(j){for(const q in a){const ie=a[q];if(ie[j.id]===void 0)continue;const ee=ie[j.id];for(const F in ee)x(ee[F].object),delete ee[F];delete ie[j.id]}}function Z(){H(),c=!0,u!==l&&(u=l,m(u.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:H,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:te,initAttributes:v,enableAttribute:g,disableUnusedAttributes:R}}function o1(t,e,n,i){const r=i.isWebGL2;let o;function s(u){o=u}function a(u,c){t.drawArrays(o,u,c),n.update(c,o,1)}function l(u,c,d){if(d===0)return;let h,m;if(r)h=t,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](o,u,c,d),n.update(c,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function s1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=s||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,g=s||e.has("OES_texture_float"),M=v&&g,R=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:g,floatVertexTextures:M,maxSamples:R}}function a1(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new ki,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,m){const x=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=t.get(d);if(!r||x===null||x.length===0||o&&!p)o?c(null):u();else{const _=o?0:i,v=_*4;let g=f.clippingState||null;l.value=g,g=c(x,h,v,m);for(let M=0;M!==v;++M)g[M]=n[M];f.clippingState=g,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,m,x){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,x!==!0||p===null){const f=m+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,g=m;v!==y;++v,g+=4)s.copy(d[v]).applyMatrix4(_,a),s.normal.toArray(p,g),p[g+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function l1(t){let e=new WeakMap;function n(s,a){return a===Tf?s.mapping=Go:a===wf&&(s.mapping=Vo),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Tf||a===wf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new ME(l.height/2);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Y_ extends W_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const To=4,lm=[.125,.215,.35,.446,.526,.582],_r=20,gc=new Y_,um=new Ze;let vc=null;const vr=(1+Math.sqrt(5))/2,oo=1/vr,cm=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,vr,oo),new I(0,vr,-oo),new I(oo,0,vr),new I(-oo,0,vr),new I(vr,oo,0),new I(-vr,oo,0)];class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){vc=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc),e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Go||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ei,format:jn,colorSpace:oi,depthBuffer:!1},r=dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u1(o)),this._blurMaterial=c1(o,e,n)}return r}_compileMaterial(e){const n=new vn(this._lodPlanes[0],e);this._renderer.compile(n,gc)}_sceneToCubeUV(e,n,i,r){const a=new mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(um),c.toneMapping=tr,c.autoClear=!1;const m=new Ud({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),x=new vn(new pa,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(um),y=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;Qa(r,_*v,f>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Go||e.mapping===Vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new vn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Qa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,gc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=cm[(r-1)%cm.length];this._blur(e,r-1,r,o,s)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new vn(this._lodPlanes[r],u),h=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*_r-1),y=o/x,p=isFinite(o)?1+Math.floor(c*y):_r;p>_r&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_r}`);const f=[];let _=0;for(let T=0;T<_r;++T){const U=T/y,S=Math.exp(-U*U/2);f.push(S),T===0?_+=S:T<p&&(_+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const g=this._sizeLods[r],M=3*g*(r>v-To?r-v+To:0),R=4*(this._cubeSize-g);Qa(n,M,R,3*g,2*g),l.setRenderTarget(n),l.render(d,gc)}}function u1(t){const e=[],n=[],i=[];let r=t;const o=t-To+1+lm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-To?l=lm[s-t+To-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,x=6,y=3,p=2,f=1,_=new Float32Array(y*x*m),v=new Float32Array(p*x*m),g=new Float32Array(f*x*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,U=R>2?0:-1,S=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];_.set(S,y*x*R),v.set(h,p*x*R);const w=[R,R,R,R,R,R];g.set(w,f*x*R)}const M=new si;M.setAttribute("position",new ri(_,y)),M.setAttribute("uv",new ri(v,p)),M.setAttribute("faceIndex",new ri(g,f)),e.push(M),r>To&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dm(t,e,n){const i=new $n(t,e,n);return i.texture.mapping=cu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function c1(t,e,n){const i=new Float32Array(_r),r=new I(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function hm(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function pm(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Fd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Tf||l===wf,c=l===Go||l===Vo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new fm(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new fm(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function d1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function h1(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const y=h.morphAttributes[x];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const x in m){const y=m[x];for(let p=0,f=y.length;p<f;p++)e.update(y[p],t.ARRAY_BUFFER)}}function u(d){const h=[],m=d.index,x=d.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let v=0,g=_.length;v<g;v+=3){const M=_[v+0],R=_[v+1],T=_[v+2];h.push(M,R,R,T,T,M)}}else if(x!==void 0){const _=x.array;y=x.version;for(let v=0,g=_.length/3-1;v<g;v+=3){const M=v+0,R=v+1,T=v+2;h.push(M,R,R,T,T,M)}}else return;const p=new(N_(h)?G_:H_)(h,1);p.version=y;const f=o.get(d);f&&e.remove(f),o.set(d,p)}function c(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function p1(t,e,n,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,m){t.drawElements(o,m,a,h*l),n.update(m,o,1)}function d(h,m,x){if(x===0)return;let y,p;if(r)y=t,p="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[p](o,m,a,h*l,x),n.update(m,o,x)}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=d}function m1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function g1(t,e){return t[0]-e[0]}function v1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function _1(t,e,n){const i={},r=new Float32Array(8),o=new WeakMap,s=new st,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=x!==void 0?x.length:0;let p=o.get(c);if(p===void 0||p.count!==y){let q=function(){H.dispose(),o.delete(c),c.removeEventListener("dispose",q)};var m=q;p!==void 0&&p.texture.dispose();const v=c.morphAttributes.position!==void 0,g=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let S=0;v===!0&&(S=1),g===!0&&(S=2),M===!0&&(S=3);let w=c.attributes.position.count*S,te=1;w>e.maxTextureSize&&(te=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Z=new Float32Array(w*te*4*y),H=new O_(Z,w,te,y);H.type=Xi,H.needsUpdate=!0;const j=S*4;for(let ie=0;ie<y;ie++){const ee=R[ie],F=T[ie],$=U[ie],X=w*te*4*ie;for(let B=0;B<ee.count;B++){const W=B*j;v===!0&&(s.fromBufferAttribute(ee,B),Z[X+W+0]=s.x,Z[X+W+1]=s.y,Z[X+W+2]=s.z,Z[X+W+3]=0),g===!0&&(s.fromBufferAttribute(F,B),Z[X+W+4]=s.x,Z[X+W+5]=s.y,Z[X+W+6]=s.z,Z[X+W+7]=0),M===!0&&(s.fromBufferAttribute($,B),Z[X+W+8]=s.x,Z[X+W+9]=s.y,Z[X+W+10]=s.z,Z[X+W+11]=$.itemSize===4?s.w:1)}}p={count:y,texture:H,size:new we(w,te)},o.set(c,p),c.addEventListener("dispose",q)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const x=h===void 0?0:h.length;let y=i[c.id];if(y===void 0||y.length!==x){y=[];for(let g=0;g<x;g++)y[g]=[g,0];i[c.id]=y}for(let g=0;g<x;g++){const M=y[g];M[0]=g,M[1]=h[g]}y.sort(v1);for(let g=0;g<8;g++)g<x&&y[g][1]?(a[g][0]=y[g][0],a[g][1]=y[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(g1);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let g=0;g<8;g++){const M=a[g],R=M[0],T=M[1];R!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+g)!==p[R]&&c.setAttribute("morphTarget"+g,p[R]),f&&c.getAttribute("morphNormal"+g)!==f[R]&&c.setAttribute("morphNormal"+g,f[R]),r[g]=T,_+=T):(p&&c.hasAttribute("morphTarget"+g)===!0&&c.deleteAttribute("morphTarget"+g),f&&c.hasAttribute("morphNormal"+g)===!0&&c.deleteAttribute("morphNormal"+g),r[g]=0)}const v=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function x1(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}const q_=new ln,$_=new O_,K_=new aE,Z_=new X_,mm=[],gm=[],vm=new Float32Array(16),_m=new Float32Array(9),xm=new Float32Array(4);function Qo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=mm[r];if(o===void 0&&(o=new Float32Array(r),mm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hu(t,e){let n=gm[e];n===void 0&&(n=new Int32Array(e),gm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function y1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function S1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function M1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function E1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function T1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),bt(n,i)}}function w1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;_m.set(i),t.uniformMatrix3fv(this.addr,!1,_m),bt(n,i)}}function A1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Ct(n,i))return;vm.set(i),t.uniformMatrix4fv(this.addr,!1,vm),bt(n,i)}}function R1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function C1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function P1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function L1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function U1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function N1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function I1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||q_,r)}function F1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||K_,r)}function O1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Z_,r)}function z1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$_,r)}function k1(t){switch(t){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return T1;case 35675:return w1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return b1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return D1;case 36295:return U1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return z1}}function B1(t,e){t.uniform1fv(this.addr,e)}function H1(t,e){const n=Qo(e,this.size,2);t.uniform2fv(this.addr,n)}function G1(t,e){const n=Qo(e,this.size,3);t.uniform3fv(this.addr,n)}function V1(t,e){const n=Qo(e,this.size,4);t.uniform4fv(this.addr,n)}function W1(t,e){const n=Qo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function X1(t,e){const n=Qo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function j1(t,e){const n=Qo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Y1(t,e){t.uniform1iv(this.addr,e)}function q1(t,e){t.uniform2iv(this.addr,e)}function $1(t,e){t.uniform3iv(this.addr,e)}function K1(t,e){t.uniform4iv(this.addr,e)}function Z1(t,e){t.uniform1uiv(this.addr,e)}function Q1(t,e){t.uniform2uiv(this.addr,e)}function J1(t,e){t.uniform3uiv(this.addr,e)}function eA(t,e){t.uniform4uiv(this.addr,e)}function tA(t,e,n){const i=this.cache,r=e.length,o=hu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||q_,o[s])}function nA(t,e,n){const i=this.cache,r=e.length,o=hu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||K_,o[s])}function iA(t,e,n){const i=this.cache,r=e.length,o=hu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Z_,o[s])}function rA(t,e,n){const i=this.cache,r=e.length,o=hu(n,r);Ct(i,o)||(t.uniform1iv(this.addr,o),bt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||$_,o[s])}function oA(t){switch(t){case 5126:return B1;case 35664:return H1;case 35665:return G1;case 35666:return V1;case 35674:return W1;case 35675:return X1;case 35676:return j1;case 5124:case 35670:return Y1;case 35667:case 35671:return q1;case 35668:case 35672:return $1;case 35669:case 35673:return K1;case 5125:return Z1;case 36294:return Q1;case 36295:return J1;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}class sA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=k1(n.type)}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=oA(n.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function ym(t,e){t.seq.push(e),t.map[e.id]=e}function uA(t,e,n){const i=t.name,r=i.length;for(_c.lastIndex=0;;){const o=_c.exec(i),s=_c.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){ym(n,u===void 0?new sA(a,t,e):new aA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new lA(a),ym(n,d)),n=d}}}class pl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);uA(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let cA=0;function fA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function dA(t){switch(t){case oi:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+fA(t.getShaderSource(e),s)}else return r}function hA(t,e){const n=dA(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function pA(t,e){let n;switch(e){case S_:n="Linear";break;case M_:n="Reinhard";break;case E_:n="OptimizedCineon";break;case T_:n="ACESFilmic";break;case hM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function mA(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function gA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ms(t){return t!==""}function Em(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(t){return t.replace(_A,yA)}const xA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yA(t,e){let n=ke[e];if(n===void 0){const i=xA.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pf(n)}const SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(t){return t.replace(SA,MA)}function MA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Am(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function EA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===XS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function TA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Go:case Vo:e="ENVMAP_TYPE_CUBE";break;case cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vo:e="ENVMAP_MODE_REFRACTION";break}return e}function AA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case y_:e="ENVMAP_BLENDING_MULTIPLY";break;case fM:e="ENVMAP_BLENDING_MIX";break;case dM:e="ENVMAP_BLENDING_ADD";break}return e}function RA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function CA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=EA(n),u=TA(n),c=wA(n),d=AA(n),h=RA(n),m=n.isWebGL2?"":mA(n),x=gA(o),y=r.createProgram();let p,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ms).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ms).join(`
`),f.length>0&&(f+=`
`)):(p=[Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),f=[m,Am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?ke.tonemapping_pars_fragment:"",n.toneMapping!==tr?pA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,hA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ms).join(`
`)),s=Pf(s),s=Em(s,n),s=Tm(s,n),a=Pf(a),a=Em(a,n),a=Tm(a,n),s=wm(s),a=wm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+p+s,g=_+f+a,M=Sm(r,r.VERTEX_SHADER,v),R=Sm(r,r.FRAGMENT_SHADER,g);if(r.attachShader(y,M),r.attachShader(y,R),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(y).trim(),w=r.getShaderInfoLog(M).trim(),te=r.getShaderInfoLog(R).trim();let Z=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,M,R);else{const j=Mm(r,M,"vertex"),q=Mm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+j+`
`+q)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(w===""||te==="")&&(H=!1);H&&(this.diagnostics={runnable:Z,programLog:S,vertexShader:{log:w,prefix:p},fragmentShader:{log:te,prefix:f}})}r.deleteShader(M),r.deleteShader(R);let T;this.getUniforms=function(){return T===void 0&&(T=new pl(r,y)),T};let U;return this.getAttributes=function(){return U===void 0&&(U=vA(r,y)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=R,this}let bA=0;class PA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LA(e),n.set(e,i)),i}}class LA{constructor(e){this.id=bA++,this.code=e,this.usedTimes=0}}function DA(t,e,n,i,r,o,s){const a=new k_,l=new PA,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function p(S,w,te,Z,H){const j=Z.fog,q=H.geometry,ie=S.isMeshStandardMaterial?Z.environment:null,ee=(S.isMeshStandardMaterial?n:e).get(S.envMap||ie),F=ee&&ee.mapping===cu?ee.image.height:null,$=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const X=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,B=X!==void 0?X.length:0;let W=0;q.morphAttributes.position!==void 0&&(W=1),q.morphAttributes.normal!==void 0&&(W=2),q.morphAttributes.color!==void 0&&(W=3);let he,ae,me,xe;if($){const qe=ei[$];he=qe.vertexShader,ae=qe.fragmentShader}else he=S.vertexShader,ae=S.fragmentShader,l.update(S),me=l.getVertexShaderID(S),xe=l.getFragmentShaderID(S);const Re=t.getRenderTarget(),Se=H.isInstancedMesh===!0,Ye=!!S.map,wt=!!S.matcap,Fe=!!ee,G=!!S.aoMap,ht=!!S.lightMap,Ae=!!S.bumpMap,be=!!S.normalMap,Pe=!!S.displacementMap,Qe=!!S.emissiveMap,Oe=!!S.metalnessMap,De=!!S.roughnessMap,ze=S.anisotropy>0,ct=S.clearcoat>0,pt=S.iridescence>0,C=S.sheen>0,E=S.transmission>0,Y=ze&&!!S.anisotropyMap,ce=ct&&!!S.clearcoatMap,le=ct&&!!S.clearcoatNormalMap,fe=ct&&!!S.clearcoatRoughnessMap,Me=pt&&!!S.iridescenceMap,de=pt&&!!S.iridescenceThicknessMap,K=C&&!!S.sheenColorMap,P=C&&!!S.sheenRoughnessMap,re=!!S.specularMap,L=!!S.specularColorMap,D=!!S.specularIntensityMap,O=E&&!!S.transmissionMap,oe=E&&!!S.thicknessMap,pe=!!S.gradientMap,b=!!S.alphaMap,ne=S.alphaTest>0,N=!!S.alphaHash,V=!!S.extensions,se=!!q.attributes.uv1,Te=!!q.attributes.uv2,Ee=!!q.attributes.uv3;let Le=tr;return S.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Le=t.toneMapping),{isWebGL2:c,shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:ae,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:Se,instancingColor:Se&&H.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Re===null?t.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:oi,map:Ye,matcap:wt,envMap:Fe,envMapMode:Fe&&ee.mapping,envMapCubeUVHeight:F,aoMap:G,lightMap:ht,bumpMap:Ae,normalMap:be,displacementMap:h&&Pe,emissiveMap:Qe,normalMapObjectSpace:be&&S.normalMapType===RM,normalMapTangentSpace:be&&S.normalMapType===AM,metalnessMap:Oe,roughnessMap:De,anisotropy:ze,anisotropyMap:Y,clearcoat:ct,clearcoatMap:ce,clearcoatNormalMap:le,clearcoatRoughnessMap:fe,iridescence:pt,iridescenceMap:Me,iridescenceThicknessMap:de,sheen:C,sheenColorMap:K,sheenRoughnessMap:P,specularMap:re,specularColorMap:L,specularIntensityMap:D,transmission:E,transmissionMap:O,thicknessMap:oe,gradientMap:pe,opaque:S.transparent===!1&&S.blending===Do,alphaMap:b,alphaTest:ne,alphaHash:N,combine:S.combine,mapUv:Ye&&y(S.map.channel),aoMapUv:G&&y(S.aoMap.channel),lightMapUv:ht&&y(S.lightMap.channel),bumpMapUv:Ae&&y(S.bumpMap.channel),normalMapUv:be&&y(S.normalMap.channel),displacementMapUv:Pe&&y(S.displacementMap.channel),emissiveMapUv:Qe&&y(S.emissiveMap.channel),metalnessMapUv:Oe&&y(S.metalnessMap.channel),roughnessMapUv:De&&y(S.roughnessMap.channel),anisotropyMapUv:Y&&y(S.anisotropyMap.channel),clearcoatMapUv:ce&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:de&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:K&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:P&&y(S.sheenRoughnessMap.channel),specularMapUv:re&&y(S.specularMap.channel),specularColorMapUv:L&&y(S.specularColorMap.channel),specularIntensityMapUv:D&&y(S.specularIntensityMap.channel),transmissionMapUv:O&&y(S.transmissionMap.channel),thicknessMapUv:oe&&y(S.thicknessMap.channel),alphaMapUv:b&&y(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(be||ze),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:Te,vertexUv3s:Ee,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(Ye||b),fog:!!j,useFog:S.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:W,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,useLegacyLights:t._useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===bn,flipSided:S.side===an,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:V&&S.extensions.derivatives===!0,extensionFragDepth:V&&S.extensions.fragDepth===!0,extensionDrawBuffers:V&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:V&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const te in S.defines)w.push(te),w.push(S.defines[te]);return S.isRawShaderMaterial===!1&&(_(w,S),v(w,S),w.push(t.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function _(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),S.push(a.mask)}function g(S){const w=x[S.type];let te;if(w){const Z=ei[w];te=oa.clone(Z.uniforms)}else te=S.uniforms;return te}function M(S,w){let te;for(let Z=0,H=u.length;Z<H;Z++){const j=u[Z];if(j.cacheKey===w){te=j,++te.usedTimes;break}}return te===void 0&&(te=new CA(t,w,S,o),u.push(te)),te}function R(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:g,acquireProgram:M,releaseProgram:R,releaseShaderCache:T,programs:u,dispose:U}}function UA(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function NA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,m,x,y,p){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:x,renderOrder:d.renderOrder,z:y,group:p},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function a(d,h,m,x,y,p){const f=s(d,h,m,x,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):n.push(f)}function l(d,h,m,x,y,p){const f=s(d,h,m,x,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||NA),i.length>1&&i.sort(h||Rm),r.length>1&&r.sort(h||Rm)}function c(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function IA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Cm,t.set(i,[s])):r>=o.length?(s=new Cm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function FA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new I,color:new Ze};break;case"SpotLight":n={position:new I,direction:new I,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new I,halfWidth:new I,halfHeight:new I};break}return t[e.id]=n,n}}}function OA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zA=0;function kA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function BA(t,e){const n=new FA,i=OA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new I);const o=new I,s=new Tt,a=new Tt;function l(c,d){let h=0,m=0,x=0;for(let te=0;te<9;te++)r.probe[te].set(0,0,0);let y=0,p=0,f=0,_=0,v=0,g=0,M=0,R=0,T=0,U=0;c.sort(kA);const S=d===!0?Math.PI:1;for(let te=0,Z=c.length;te<Z;te++){const H=c[te],j=H.color,q=H.intensity,ie=H.distance,ee=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=j.r*q*S,m+=j.g*q*S,x+=j.b*q*S;else if(H.isLightProbe)for(let F=0;F<9;F++)r.probe[F].addScaledVector(H.sh.coefficients[F],q);else if(H.isDirectionalLight){const F=n.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity*S),H.castShadow){const $=H.shadow,X=i.get(H);X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,r.directionalShadow[y]=X,r.directionalShadowMap[y]=ee,r.directionalShadowMatrix[y]=H.shadow.matrix,g++}r.directional[y]=F,y++}else if(H.isSpotLight){const F=n.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(j).multiplyScalar(q*S),F.distance=ie,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,r.spot[f]=F;const $=H.shadow;if(H.map&&(r.spotLightMap[T]=H.map,T++,$.updateMatrices(H),H.castShadow&&U++),r.spotLightMatrix[f]=$.matrix,H.castShadow){const X=i.get(H);X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,r.spotShadow[f]=X,r.spotShadowMap[f]=ee,R++}f++}else if(H.isRectAreaLight){const F=n.get(H);F.color.copy(j).multiplyScalar(q),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=F,_++}else if(H.isPointLight){const F=n.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity*S),F.distance=H.distance,F.decay=H.decay,H.castShadow){const $=H.shadow,X=i.get(H);X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,r.pointShadow[p]=X,r.pointShadowMap[p]=ee,r.pointShadowMatrix[p]=H.shadow.matrix,M++}r.point[p]=F,p++}else if(H.isHemisphereLight){const F=n.get(H);F.skyColor.copy(H.color).multiplyScalar(q*S),F.groundColor.copy(H.groundColor).multiplyScalar(q*S),r.hemi[v]=F,v++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_FLOAT_1,r.rectAreaLTC2=ge.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ge.LTC_HALF_1,r.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=x;const w=r.hash;(w.directionalLength!==y||w.pointLength!==p||w.spotLength!==f||w.rectAreaLength!==_||w.hemiLength!==v||w.numDirectionalShadows!==g||w.numPointShadows!==M||w.numSpotShadows!==R||w.numSpotMaps!==T)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=g,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=R+T-U,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=U,w.directionalLength=y,w.pointLength=p,w.spotLength=f,w.rectAreaLength=_,w.hemiLength=v,w.numDirectionalShadows=g,w.numPointShadows=M,w.numSpotShadows=R,w.numSpotMaps=T,r.version=zA++)}function u(c,d){let h=0,m=0,x=0,y=0,p=0;const f=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const g=c[_];if(g.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(f),h++}else if(g.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(g.matrixWorld),o.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(f),x++}else if(g.isRectAreaLight){const M=r.rectArea[y];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(g.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(f),m++}else if(g.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(f),p++}}}return{setup:l,setupView:u,state:r}}function bm(t,e){const n=new BA(t,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:a}}function HA(t,e){let n=new WeakMap;function i(o,s=0){const a=n.get(o);let l;return a===void 0?(l=new bm(t,e),n.set(o,[l])):s>=a.length?(l=new bm(t,e),a.push(l)):l=a[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class GA extends du{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VA extends du{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jA(t,e,n){let i=new Nd;const r=new we,o=new we,s=new st,a=new GA({depthPacking:wM}),l=new VA,u={},c=n.maxTextureSize,d={[or]:an,[an]:or,[bn]:bn},h=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:WA,fragmentShader:XA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const x=new si;x.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new vn(x,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v_;let f=this.type;this.render=function(M,R,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const U=t.getRenderTarget(),S=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),te=t.state;te.setBlending(Mi),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Z=f!==mi&&this.type===mi,H=f===mi&&this.type!==mi;for(let j=0,q=M.length;j<q;j++){const ie=M[j],ee=ie.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const F=ee.getFrameExtents();if(r.multiply(F),o.copy(ee.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/F.x),r.x=o.x*F.x,ee.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/F.y),r.y=o.y*F.y,ee.mapSize.y=o.y)),ee.map===null||Z===!0||H===!0){const X=this.type!==mi?{minFilter:$t,magFilter:$t}:{};ee.map!==null&&ee.map.dispose(),ee.map=new $n(r.x,r.y,X),ee.map.texture.name=ie.name+".shadowMap",ee.camera.updateProjectionMatrix()}t.setRenderTarget(ee.map),t.clear();const $=ee.getViewportCount();for(let X=0;X<$;X++){const B=ee.getViewport(X);s.set(o.x*B.x,o.y*B.y,o.x*B.z,o.y*B.w),te.viewport(s),ee.updateMatrices(ie,X),i=ee.getFrustum(),g(R,T,ee.camera,ie,this.type)}ee.isPointLightShadow!==!0&&this.type===mi&&_(ee,T),ee.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(U,S,w)};function _(M,R){const T=e.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new $n(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(R,null,T,h,y,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(R,null,T,m,y,null)}function v(M,R,T,U){let S=null;const w=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)S=w;else if(S=T.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const te=S.uuid,Z=R.uuid;let H=u[te];H===void 0&&(H={},u[te]=H);let j=H[Z];j===void 0&&(j=S.clone(),H[Z]=j),S=j}if(S.visible=R.visible,S.wireframe=R.wireframe,U===mi?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const te=t.properties.get(S);te.light=T}return S}function g(M,R,T,U,S){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===mi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const Z=e.update(M),H=M.material;if(Array.isArray(H)){const j=Z.groups;for(let q=0,ie=j.length;q<ie;q++){const ee=j[q],F=H[ee.materialIndex];if(F&&F.visible){const $=v(M,F,U,S);t.renderBufferDirect(T,null,Z,$,M,ee)}}}else if(H.visible){const j=v(M,H,U,S);t.renderBufferDirect(T,null,Z,j,M,null)}}const te=M.children;for(let Z=0,H=te.length;Z<H;Z++)g(te[Z],R,T,U,S)}}function YA(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const ne=new st;let N=null;const V=new st(0,0,0,0);return{setMask:function(se){N!==se&&!b&&(t.colorMask(se,se,se,se),N=se)},setLocked:function(se){b=se},setClear:function(se,Te,Ee,Le,et){et===!0&&(se*=Le,Te*=Le,Ee*=Le),ne.set(se,Te,Ee,Le),V.equals(ne)===!1&&(t.clearColor(se,Te,Ee,Le),V.copy(ne))},reset:function(){b=!1,N=null,V.set(-1,0,0,0)}}}function o(){let b=!1,ne=null,N=null,V=null;return{setTest:function(se){se?Re(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(se){ne!==se&&!b&&(t.depthMask(se),ne=se)},setFunc:function(se){if(N!==se){switch(se){case rM:t.depthFunc(t.NEVER);break;case oM:t.depthFunc(t.ALWAYS);break;case sM:t.depthFunc(t.LESS);break;case Ef:t.depthFunc(t.LEQUAL);break;case aM:t.depthFunc(t.EQUAL);break;case lM:t.depthFunc(t.GEQUAL);break;case uM:t.depthFunc(t.GREATER);break;case cM:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}N=se}},setLocked:function(se){b=se},setClear:function(se){V!==se&&(t.clearDepth(se),V=se)},reset:function(){b=!1,ne=null,N=null,V=null}}}function s(){let b=!1,ne=null,N=null,V=null,se=null,Te=null,Ee=null,Le=null,et=null;return{setTest:function(qe){b||(qe?Re(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(qe){ne!==qe&&!b&&(t.stencilMask(qe),ne=qe)},setFunc:function(qe,Pt,mt){(N!==qe||V!==Pt||se!==mt)&&(t.stencilFunc(qe,Pt,mt),N=qe,V=Pt,se=mt)},setOp:function(qe,Pt,mt){(Te!==qe||Ee!==Pt||Le!==mt)&&(t.stencilOp(qe,Pt,mt),Te=qe,Ee=Pt,Le=mt)},setLocked:function(qe){b=qe},setClear:function(qe){et!==qe&&(t.clearStencil(qe),et=qe)},reset:function(){b=!1,ne=null,N=null,V=null,se=null,Te=null,Ee=null,Le=null,et=null}}}const a=new r,l=new o,u=new s,c=new WeakMap,d=new WeakMap;let h={},m={},x=new WeakMap,y=[],p=null,f=!1,_=null,v=null,g=null,M=null,R=null,T=null,U=null,S=!1,w=null,te=null,Z=null,H=null,j=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ee=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(F)[1]),ie=ee>=1):F.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),ie=ee>=2);let $=null,X={};const B=t.getParameter(t.SCISSOR_BOX),W=t.getParameter(t.VIEWPORT),he=new st().fromArray(B),ae=new st().fromArray(W);function me(b,ne,N,V){const se=new Uint8Array(4),Te=t.createTexture();t.bindTexture(b,Te),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<N;Ee++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(ne,0,t.RGBA,1,1,V,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(ne+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return Te}const xe={};xe[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(xe[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Re(t.DEPTH_TEST),l.setFunc(Ef),Pe(!1),Qe(mp),Re(t.CULL_FACE),Ae(Mi);function Re(b){h[b]!==!0&&(t.enable(b),h[b]=!0)}function Se(b){h[b]!==!1&&(t.disable(b),h[b]=!1)}function Ye(b,ne){return m[b]!==ne?(t.bindFramebuffer(b,ne),m[b]=ne,i&&(b===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ne),b===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ne)),!0):!1}function wt(b,ne){let N=y,V=!1;if(b)if(N=x.get(ne),N===void 0&&(N=[],x.set(ne,N)),b.isWebGLMultipleRenderTargets){const se=b.texture;if(N.length!==se.length||N[0]!==t.COLOR_ATTACHMENT0){for(let Te=0,Ee=se.length;Te<Ee;Te++)N[Te]=t.COLOR_ATTACHMENT0+Te;N.length=se.length,V=!0}}else N[0]!==t.COLOR_ATTACHMENT0&&(N[0]=t.COLOR_ATTACHMENT0,V=!0);else N[0]!==t.BACK&&(N[0]=t.BACK,V=!0);V&&(n.isWebGL2?t.drawBuffers(N):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(N))}function Fe(b){return p!==b?(t.useProgram(b),p=b,!0):!1}const G={[ao]:t.FUNC_ADD,[YS]:t.FUNC_SUBTRACT,[qS]:t.FUNC_REVERSE_SUBTRACT};if(i)G[_p]=t.MIN,G[xp]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(G[_p]=b.MIN_EXT,G[xp]=b.MAX_EXT)}const ht={[$S]:t.ZERO,[KS]:t.ONE,[ZS]:t.SRC_COLOR,[__]:t.SRC_ALPHA,[iM]:t.SRC_ALPHA_SATURATE,[tM]:t.DST_COLOR,[JS]:t.DST_ALPHA,[QS]:t.ONE_MINUS_SRC_COLOR,[x_]:t.ONE_MINUS_SRC_ALPHA,[nM]:t.ONE_MINUS_DST_COLOR,[eM]:t.ONE_MINUS_DST_ALPHA};function Ae(b,ne,N,V,se,Te,Ee,Le){if(b===Mi){f===!0&&(Se(t.BLEND),f=!1);return}if(f===!1&&(Re(t.BLEND),f=!0),b!==jS){if(b!==_||Le!==S){if((v!==ao||R!==ao)&&(t.blendEquation(t.FUNC_ADD),v=ao,R=ao),Le)switch(b){case Do:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mf:t.blendFunc(t.ONE,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Do:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Mf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}g=null,M=null,T=null,U=null,_=b,S=Le}return}se=se||ne,Te=Te||N,Ee=Ee||V,(ne!==v||se!==R)&&(t.blendEquationSeparate(G[ne],G[se]),v=ne,R=se),(N!==g||V!==M||Te!==T||Ee!==U)&&(t.blendFuncSeparate(ht[N],ht[V],ht[Te],ht[Ee]),g=N,M=V,T=Te,U=Ee),_=b,S=!1}function be(b,ne){b.side===bn?Se(t.CULL_FACE):Re(t.CULL_FACE);let N=b.side===an;ne&&(N=!N),Pe(N),b.blending===Do&&b.transparent===!1?Ae(Mi):Ae(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const V=b.stencilWrite;u.setTest(V),V&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),De(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Re(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(b){w!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),w=b)}function Qe(b){b!==VS?(Re(t.CULL_FACE),b!==te&&(b===mp?t.cullFace(t.BACK):b===WS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),te=b}function Oe(b){b!==Z&&(ie&&t.lineWidth(b),Z=b)}function De(b,ne,N){b?(Re(t.POLYGON_OFFSET_FILL),(H!==ne||j!==N)&&(t.polygonOffset(ne,N),H=ne,j=N)):Se(t.POLYGON_OFFSET_FILL)}function ze(b){b?Re(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function ct(b){b===void 0&&(b=t.TEXTURE0+q-1),$!==b&&(t.activeTexture(b),$=b)}function pt(b,ne,N){N===void 0&&($===null?N=t.TEXTURE0+q-1:N=$);let V=X[N];V===void 0&&(V={type:void 0,texture:void 0},X[N]=V),(V.type!==b||V.texture!==ne)&&($!==N&&(t.activeTexture(N),$=N),t.bindTexture(b,ne||xe[b]),V.type=b,V.texture=ne)}function C(){const b=X[$];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Y(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function de(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function K(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function P(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function re(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function L(b){he.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),he.copy(b))}function D(b){ae.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),ae.copy(b))}function O(b,ne){let N=d.get(ne);N===void 0&&(N=new WeakMap,d.set(ne,N));let V=N.get(b);V===void 0&&(V=t.getUniformBlockIndex(ne,b.name),N.set(b,V))}function oe(b,ne){const V=d.get(ne).get(b);c.get(ne)!==V&&(t.uniformBlockBinding(ne,V,b.__bindingPointIndex),c.set(ne,V))}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},$=null,X={},m={},x=new WeakMap,y=[],p=null,f=!1,_=null,v=null,g=null,M=null,R=null,T=null,U=null,S=!1,w=null,te=null,Z=null,H=null,j=null,he.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Re,disable:Se,bindFramebuffer:Ye,drawBuffers:wt,useProgram:Fe,setBlending:Ae,setMaterial:be,setFlipSided:Pe,setCullFace:Qe,setLineWidth:Oe,setPolygonOffset:De,setScissorTest:ze,activeTexture:ct,bindTexture:pt,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:P,texImage3D:re,updateUBOMapping:O,uniformBlockBinding:oe,texStorage2D:de,texStorage3D:K,texSubImage2D:ce,texSubImage3D:le,compressedTexSubImage2D:fe,compressedTexSubImage3D:Me,scissor:L,viewport:D,reset:pe}}function qA(t,e,n,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let y;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return f?new OffscreenCanvas(C,E):ra("canvas")}function v(C,E,Y,ce){let le=1;if((C.width>ce||C.height>ce)&&(le=ce/Math.max(C.width,C.height)),le<1||E===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const fe=E?Vl:Math.floor,Me=fe(le*C.width),de=fe(le*C.height);y===void 0&&(y=_(Me,de));const K=Y?_(Me,de):y;return K.width=Me,K.height=de,K.getContext("2d").drawImage(C,0,0,Me,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Me+"x"+de+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function g(C){return bf(C.width)&&bf(C.height)}function M(C){return a?!1:C.wrapS!==Xn||C.wrapT!==Xn||C.minFilter!==$t&&C.minFilter!==Cn}function R(C,E){return C.generateMipmaps&&E&&C.minFilter!==$t&&C.minFilter!==Cn}function T(C){t.generateMipmap(C)}function U(C,E,Y,ce,le=!1){if(a===!1)return E;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe=E;return E===t.RED&&(Y===t.FLOAT&&(fe=t.R32F),Y===t.HALF_FLOAT&&(fe=t.R16F),Y===t.UNSIGNED_BYTE&&(fe=t.R8)),E===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(fe=t.R8UI),Y===t.UNSIGNED_SHORT&&(fe=t.R16UI),Y===t.UNSIGNED_INT&&(fe=t.R32UI),Y===t.BYTE&&(fe=t.R8I),Y===t.SHORT&&(fe=t.R16I),Y===t.INT&&(fe=t.R32I)),E===t.RG&&(Y===t.FLOAT&&(fe=t.RG32F),Y===t.HALF_FLOAT&&(fe=t.RG16F),Y===t.UNSIGNED_BYTE&&(fe=t.RG8)),E===t.RGBA&&(Y===t.FLOAT&&(fe=t.RGBA32F),Y===t.HALF_FLOAT&&(fe=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(fe=ce===Be&&le===!1?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)),(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function S(C,E,Y){return R(C,Y)===!0||C.isFramebufferTexture&&C.minFilter!==$t&&C.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){return C===$t||C===yp||C===ju?t.NEAREST:t.LINEAR}function te(C){const E=C.target;E.removeEventListener("dispose",te),H(E),E.isVideoTexture&&x.delete(E)}function Z(C){const E=C.target;E.removeEventListener("dispose",Z),q(E)}function H(C){const E=i.get(C);if(E.__webglInit===void 0)return;const Y=C.source,ce=p.get(Y);if(ce){const le=ce[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&j(C),Object.keys(ce).length===0&&p.delete(Y)}i.remove(C)}function j(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const Y=C.source,ce=p.get(Y);delete ce[E.__cacheKey],s.memory.textures--}function q(C){const E=C.texture,Y=i.get(C),ce=i.get(E);if(ce.__webglTexture!==void 0&&(t.deleteTexture(ce.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(Y.__webglFramebuffer[le]))for(let fe=0;fe<Y.__webglFramebuffer[le].length;fe++)t.deleteFramebuffer(Y.__webglFramebuffer[le][fe]);else t.deleteFramebuffer(Y.__webglFramebuffer[le]);Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer[le])}else{if(Array.isArray(Y.__webglFramebuffer))for(let le=0;le<Y.__webglFramebuffer.length;le++)t.deleteFramebuffer(Y.__webglFramebuffer[le]);else t.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&t.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let le=0;le<Y.__webglColorRenderbuffer.length;le++)Y.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(Y.__webglColorRenderbuffer[le]);Y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let le=0,fe=E.length;le<fe;le++){const Me=i.get(E[le]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),s.memory.textures--),i.remove(E[le])}i.remove(E),i.remove(C)}let ie=0;function ee(){ie=0}function F(){const C=ie;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),ie+=1,C}function $(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function X(C,E){const Y=i.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(Y,C,E);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+E)}function B(C,E){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Ye(Y,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+E)}function W(C,E){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Ye(Y,C,E);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+E)}function he(C,E){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){wt(Y,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+E)}const ae={[Af]:t.REPEAT,[Xn]:t.CLAMP_TO_EDGE,[Rf]:t.MIRRORED_REPEAT},me={[$t]:t.NEAREST,[yp]:t.NEAREST_MIPMAP_NEAREST,[ju]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[pM]:t.LINEAR_MIPMAP_NEAREST,[na]:t.LINEAR_MIPMAP_LINEAR},xe={[bM]:t.NEVER,[FM]:t.ALWAYS,[PM]:t.LESS,[DM]:t.LEQUAL,[LM]:t.EQUAL,[IM]:t.GEQUAL,[UM]:t.GREATER,[NM]:t.NOTEQUAL};function Re(C,E,Y){if(Y?(t.texParameteri(C,t.TEXTURE_WRAP_S,ae[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ae[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ae[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,me[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,me[E.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Xn||E.wrapT!==Xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,w(E.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==$t&&E.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ce=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===$t||E.minFilter!==ju&&E.minFilter!==na||E.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Ei&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Se(C,E){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",te));const ce=E.source;let le=p.get(ce);le===void 0&&(le={},p.set(ce,le));const fe=$(E);if(fe!==C.__cacheKey){le[fe]===void 0&&(le[fe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),le[fe].usedTimes++;const Me=le[C.__cacheKey];Me!==void 0&&(le[C.__cacheKey].usedTimes--,Me.usedTimes===0&&j(E)),C.__cacheKey=fe,C.__webglTexture=le[fe].texture}return Y}function Ye(C,E,Y){let ce=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=t.TEXTURE_3D);const le=Se(C,E),fe=E.source;n.bindTexture(ce,C.__webglTexture,t.TEXTURE0+Y);const Me=i.get(fe);if(fe.version!==Me.__version||le===!0){n.activeTexture(t.TEXTURE0+Y),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const de=M(E)&&g(E.image)===!1;let K=v(E.image,de,!1,c);K=pt(E,K);const P=g(K)||a,re=o.convert(E.format,E.colorSpace);let L=o.convert(E.type),D=U(E.internalFormat,re,L,E.colorSpace);Re(ce,E,P);let O;const oe=E.mipmaps,pe=a&&E.isVideoTexture!==!0,b=Me.__version===void 0||le===!0,ne=S(E,K,P);if(E.isDepthTexture)D=t.DEPTH_COMPONENT,a?E.type===Xi?D=t.DEPTH_COMPONENT32F:E.type===Wi?D=t.DEPTH_COMPONENT24:E.type===wr?D=t.DEPTH24_STENCIL8:D=t.DEPTH_COMPONENT16:E.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Ar&&D===t.DEPTH_COMPONENT&&E.type!==Pd&&E.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Wi,L=o.convert(E.type)),E.format===Wo&&D===t.DEPTH_COMPONENT&&(D=t.DEPTH_STENCIL,E.type!==wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=wr,L=o.convert(E.type))),b&&(pe?n.texStorage2D(t.TEXTURE_2D,1,D,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,D,K.width,K.height,0,re,L,null));else if(E.isDataTexture)if(oe.length>0&&P){pe&&b&&n.texStorage2D(t.TEXTURE_2D,ne,D,oe[0].width,oe[0].height);for(let N=0,V=oe.length;N<V;N++)O=oe[N],pe?n.texSubImage2D(t.TEXTURE_2D,N,0,0,O.width,O.height,re,L,O.data):n.texImage2D(t.TEXTURE_2D,N,D,O.width,O.height,0,re,L,O.data);E.generateMipmaps=!1}else pe?(b&&n.texStorage2D(t.TEXTURE_2D,ne,D,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,re,L,K.data)):n.texImage2D(t.TEXTURE_2D,0,D,K.width,K.height,0,re,L,K.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&b&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,D,oe[0].width,oe[0].height,K.depth);for(let N=0,V=oe.length;N<V;N++)O=oe[N],E.format!==jn?re!==null?pe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,O.width,O.height,K.depth,re,O.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,N,D,O.width,O.height,K.depth,0,O.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,N,0,0,0,O.width,O.height,K.depth,re,L,O.data):n.texImage3D(t.TEXTURE_2D_ARRAY,N,D,O.width,O.height,K.depth,0,re,L,O.data)}else{pe&&b&&n.texStorage2D(t.TEXTURE_2D,ne,D,oe[0].width,oe[0].height);for(let N=0,V=oe.length;N<V;N++)O=oe[N],E.format!==jn?re!==null?pe?n.compressedTexSubImage2D(t.TEXTURE_2D,N,0,0,O.width,O.height,re,O.data):n.compressedTexImage2D(t.TEXTURE_2D,N,D,O.width,O.height,0,O.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?n.texSubImage2D(t.TEXTURE_2D,N,0,0,O.width,O.height,re,L,O.data):n.texImage2D(t.TEXTURE_2D,N,D,O.width,O.height,0,re,L,O.data)}else if(E.isDataArrayTexture)pe?(b&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ne,D,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,re,L,K.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,D,K.width,K.height,K.depth,0,re,L,K.data);else if(E.isData3DTexture)pe?(b&&n.texStorage3D(t.TEXTURE_3D,ne,D,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,re,L,K.data)):n.texImage3D(t.TEXTURE_3D,0,D,K.width,K.height,K.depth,0,re,L,K.data);else if(E.isFramebufferTexture){if(b)if(pe)n.texStorage2D(t.TEXTURE_2D,ne,D,K.width,K.height);else{let N=K.width,V=K.height;for(let se=0;se<ne;se++)n.texImage2D(t.TEXTURE_2D,se,D,N,V,0,re,L,null),N>>=1,V>>=1}}else if(oe.length>0&&P){pe&&b&&n.texStorage2D(t.TEXTURE_2D,ne,D,oe[0].width,oe[0].height);for(let N=0,V=oe.length;N<V;N++)O=oe[N],pe?n.texSubImage2D(t.TEXTURE_2D,N,0,0,re,L,O):n.texImage2D(t.TEXTURE_2D,N,D,re,L,O);E.generateMipmaps=!1}else pe?(b&&n.texStorage2D(t.TEXTURE_2D,ne,D,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,re,L,K)):n.texImage2D(t.TEXTURE_2D,0,D,re,L,K);R(E,P)&&T(ce),Me.__version=fe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function wt(C,E,Y){if(E.image.length!==6)return;const ce=Se(C,E),le=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+Y);const fe=i.get(le);if(le.version!==fe.__version||ce===!0){n.activeTexture(t.TEXTURE0+Y),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const Me=E.isCompressedTexture||E.image[0].isCompressedTexture,de=E.image[0]&&E.image[0].isDataTexture,K=[];for(let N=0;N<6;N++)!Me&&!de?K[N]=v(E.image[N],!1,!0,u):K[N]=de?E.image[N].image:E.image[N],K[N]=pt(E,K[N]);const P=K[0],re=g(P)||a,L=o.convert(E.format,E.colorSpace),D=o.convert(E.type),O=U(E.internalFormat,L,D,E.colorSpace),oe=a&&E.isVideoTexture!==!0,pe=fe.__version===void 0||ce===!0;let b=S(E,P,re);Re(t.TEXTURE_CUBE_MAP,E,re);let ne;if(Me){oe&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,b,O,P.width,P.height);for(let N=0;N<6;N++){ne=K[N].mipmaps;for(let V=0;V<ne.length;V++){const se=ne[V];E.format!==jn?L!==null?oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,V,0,0,se.width,se.height,L,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,V,O,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,V,0,0,se.width,se.height,L,D,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,V,O,se.width,se.height,0,L,D,se.data)}}}else{ne=E.mipmaps,oe&&pe&&(ne.length>0&&b++,n.texStorage2D(t.TEXTURE_CUBE_MAP,b,O,K[0].width,K[0].height));for(let N=0;N<6;N++)if(de){oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,K[N].width,K[N].height,L,D,K[N].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,O,K[N].width,K[N].height,0,L,D,K[N].data);for(let V=0;V<ne.length;V++){const Te=ne[V].image[N].image;oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,V+1,0,0,Te.width,Te.height,L,D,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,V+1,O,Te.width,Te.height,0,L,D,Te.data)}}else{oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,0,0,L,D,K[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0,O,L,D,K[N]);for(let V=0;V<ne.length;V++){const se=ne[V];oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,V+1,0,0,L,D,se.image[N]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+N,V+1,O,L,D,se.image[N])}}}R(E,re)&&T(t.TEXTURE_CUBE_MAP),fe.__version=le.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Fe(C,E,Y,ce,le,fe){const Me=o.convert(Y.format,Y.colorSpace),de=o.convert(Y.type),K=U(Y.internalFormat,Me,de,Y.colorSpace);if(!i.get(E).__hasExternalTextures){const re=Math.max(1,E.width>>fe),L=Math.max(1,E.height>>fe);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,fe,K,re,L,E.depth,0,Me,de,null):n.texImage2D(le,fe,K,re,L,0,Me,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ze(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,le,i.get(Y).__webglTexture,0,De(E)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ce,le,i.get(Y).__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(C,E,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer&&!E.stencilBuffer){let ce=t.DEPTH_COMPONENT16;if(Y||ze(E)){const le=E.depthTexture;le&&le.isDepthTexture&&(le.type===Xi?ce=t.DEPTH_COMPONENT32F:le.type===Wi&&(ce=t.DEPTH_COMPONENT24));const fe=De(E);ze(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,ce,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,ce,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ce,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(E.depthBuffer&&E.stencilBuffer){const ce=De(E);Y&&ze(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,E.width,E.height):ze(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const ce=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let le=0;le<ce.length;le++){const fe=ce[le],Me=o.convert(fe.format,fe.colorSpace),de=o.convert(fe.type),K=U(fe.internalFormat,Me,de,fe.colorSpace),P=De(E);Y&&ze(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,P,K,E.width,E.height):ze(E)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P,K,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,K,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ht(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ce=i.get(E.depthTexture).__webglTexture,le=De(E);if(E.depthTexture.format===Ar)ze(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ce,0);else if(E.depthTexture.format===Wo)ze(E)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const E=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ht(E.__webglFramebuffer,C)}else if(Y){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]=t.createRenderbuffer(),G(E.__webglDepthbuffer[ce],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),G(E.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(C,E,Y){const ce=i.get(C);E!==void 0&&Fe(ce.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&Ae(C)}function Pe(C){const E=C.texture,Y=i.get(C),ce=i.get(E);C.addEventListener("dispose",Z),C.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture()),ce.__version=E.version,s.memory.textures++);const le=C.isWebGLCubeRenderTarget===!0,fe=C.isWebGLMultipleRenderTargets===!0,Me=g(C)||a;if(le){Y.__webglFramebuffer=[];for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[de]=[];for(let K=0;K<E.mipmaps.length;K++)Y.__webglFramebuffer[de][K]=t.createFramebuffer()}else Y.__webglFramebuffer[de]=t.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)Y.__webglFramebuffer[de]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(fe)if(r.drawBuffers){const de=C.texture;for(let K=0,P=de.length;K<P;K++){const re=i.get(de[K]);re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ze(C)===!1){const de=fe?E:[E];Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let K=0;K<de.length;K++){const P=de[K];Y.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[K]);const re=o.convert(P.format,P.colorSpace),L=o.convert(P.type),D=U(P.internalFormat,re,L,P.colorSpace,C.isXRRenderTarget===!0),O=De(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,O,D,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,Y.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),G(Y.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,ce.__webglTexture),Re(t.TEXTURE_CUBE_MAP,E,Me);for(let de=0;de<6;de++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)Fe(Y.__webglFramebuffer[de][K],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,K);else Fe(Y.__webglFramebuffer[de],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);R(E,Me)&&T(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){const de=C.texture;for(let K=0,P=de.length;K<P;K++){const re=de[K],L=i.get(re);n.bindTexture(t.TEXTURE_2D,L.__webglTexture),Re(t.TEXTURE_2D,re,Me),Fe(Y.__webglFramebuffer,C,re,t.COLOR_ATTACHMENT0+K,t.TEXTURE_2D,0),R(re,Me)&&T(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,ce.__webglTexture),Re(de,E,Me),a&&E.mipmaps&&E.mipmaps.length>0)for(let K=0;K<E.mipmaps.length;K++)Fe(Y.__webglFramebuffer[K],C,E,t.COLOR_ATTACHMENT0,de,K);else Fe(Y.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,de,0);R(E,Me)&&T(de),n.unbindTexture()}C.depthBuffer&&Ae(C)}function Qe(C){const E=g(C)||a,Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ce=0,le=Y.length;ce<le;ce++){const fe=Y[ce];if(R(fe,E)){const Me=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,de=i.get(fe).__webglTexture;n.bindTexture(Me,de),T(Me),n.unbindTexture()}}}function Oe(C){if(a&&C.samples>0&&ze(C)===!1){const E=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],Y=C.width,ce=C.height;let le=t.COLOR_BUFFER_BIT;const fe=[],Me=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(C),K=C.isWebGLMultipleRenderTargets===!0;if(K)for(let P=0;P<E.length;P++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+P,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+P,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let P=0;P<E.length;P++){fe.push(t.COLOR_ATTACHMENT0+P),C.depthBuffer&&fe.push(Me);const re=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(re===!1&&(C.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),K&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[P]),re===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Me])),K){const L=i.get(E[P]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,L,0)}t.blitFramebuffer(0,0,Y,ce,0,0,Y,ce,le,t.NEAREST),m&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let P=0;P<E.length;P++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+P,t.RENDERBUFFER,de.__webglColorRenderbuffer[P]);const re=i.get(E[P]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+P,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}}function De(C){return Math.min(d,C.samples)}function ze(C){const E=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(C){const E=s.render.frame;x.get(C)!==E&&(x.set(C,E),C.update())}function pt(C,E){const Y=C.colorSpace,ce=C.format,le=C.type;return C.isCompressedTexture===!0||C.format===Cf||Y!==oi&&Y!==Cr&&(Y===Be?a===!1?e.has("EXT_sRGB")===!0&&ce===jn?(C.format=Cf,C.minFilter=Cn,C.generateMipmaps=!1):E=I_.sRGBToLinear(E):(ce!==jn||le!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}this.allocateTextureUnit=F,this.resetTextureUnits=ee,this.setTexture2D=X,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=he,this.rebindTextures=be,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=ze}function $A(t,e,n){const i=n.isWebGL2;function r(o,s=Cr){let a;if(o===nr)return t.UNSIGNED_BYTE;if(o===R_)return t.UNSIGNED_SHORT_4_4_4_4;if(o===C_)return t.UNSIGNED_SHORT_5_5_5_1;if(o===mM)return t.BYTE;if(o===gM)return t.SHORT;if(o===Pd)return t.UNSIGNED_SHORT;if(o===A_)return t.INT;if(o===Wi)return t.UNSIGNED_INT;if(o===Xi)return t.FLOAT;if(o===Ei)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===vM)return t.ALPHA;if(o===jn)return t.RGBA;if(o===_M)return t.LUMINANCE;if(o===xM)return t.LUMINANCE_ALPHA;if(o===Ar)return t.DEPTH_COMPONENT;if(o===Wo)return t.DEPTH_STENCIL;if(o===Cf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===yM)return t.RED;if(o===b_)return t.RED_INTEGER;if(o===SM)return t.RG;if(o===P_)return t.RG_INTEGER;if(o===L_)return t.RGBA_INTEGER;if(o===Yu||o===qu||o===$u||o===Ku)if(s===Be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Yu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===$u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Yu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===qu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===$u)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ku)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Sp||o===Mp||o===Ep||o===Tp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Sp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Mp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Ep)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Tp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===MM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===wp||o===Ap)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===wp)return s===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Ap)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Rp||o===Cp||o===bp||o===Pp||o===Lp||o===Dp||o===Up||o===Np||o===Ip||o===Fp||o===Op||o===zp||o===kp||o===Bp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Rp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Cp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===bp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Pp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Lp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Dp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Up)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Np)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Ip)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Fp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Op)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===zp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===kp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Bp)return s===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Zu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Zu)return s===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(o===EM||o===Hp||o===Gp||o===Vp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Zu)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Hp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Gp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Vp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===wr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[o]!==void 0?t[o]:null}return{convert:r}}class KA extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Es extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZA={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),f=this._getHandJoint(u,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),m=.02,x=.005;u.inputState.pinching&&h>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class QA extends ln{constructor(e,n,i,r,o,s,a,l,u,c){if(c=c!==void 0?c:Ar,c!==Ar&&c!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ar&&(i=Wi),i===void 0&&c===Wo&&(i=wr),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class JA extends Or{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,m=null,x=null;const y=n.getContextAttributes();let p=null,f=null;const _=[],v=[],g=new mn;g.layers.enable(1),g.viewport=new st;const M=new mn;M.layers.enable(2),M.viewport=new st;const R=[g,M],T=new KA;T.layers.enable(1),T.layers.enable(2);let U=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let W=_[B];return W===void 0&&(W=new xc,_[B]=W),W.getTargetRaySpace()},this.getControllerGrip=function(B){let W=_[B];return W===void 0&&(W=new xc,_[B]=W),W.getGripSpace()},this.getHand=function(B){let W=_[B];return W===void 0&&(W=new xc,_[B]=W),W.getHandSpace()};function w(B){const W=v.indexOf(B.inputSource);if(W===-1)return;const he=_[W];he!==void 0&&(he.update(B.inputSource,B.frame,u||s),he.dispatchEvent({type:B.type,data:B.inputSource}))}function te(){r.removeEventListener("select",w),r.removeEventListener("selectstart",w),r.removeEventListener("selectend",w),r.removeEventListener("squeeze",w),r.removeEventListener("squeezestart",w),r.removeEventListener("squeezeend",w),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",Z);for(let B=0;B<_.length;B++){const W=v[B];W!==null&&(v[B]=null,_[B].disconnect(W))}U=null,S=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,f=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",w),r.addEventListener("selectstart",w),r.addEventListener("selectend",w),r.addEventListener("squeeze",w),r.addEventListener("squeezestart",w),r.addEventListener("squeezeend",w),r.addEventListener("end",te),r.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,W),r.updateRenderState({baseLayer:m}),f=new $n(m.framebufferWidth,m.framebufferHeight,{format:jn,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let W=null,he=null,ae=null;y.depth&&(ae=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=y.stencil?Wo:Ar,he=y.stencil?wr:Wi);const me={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(me),r.updateRenderState({layers:[h]}),f=new $n(h.textureWidth,h.textureHeight,{format:jn,type:nr,depthTexture:new QA(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const xe=e.properties.get(f);xe.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Z(B){for(let W=0;W<B.removed.length;W++){const he=B.removed[W],ae=v.indexOf(he);ae>=0&&(v[ae]=null,_[ae].disconnect(he))}for(let W=0;W<B.added.length;W++){const he=B.added[W];let ae=v.indexOf(he);if(ae===-1){for(let xe=0;xe<_.length;xe++)if(xe>=v.length){v.push(he),ae=xe;break}else if(v[xe]===null){v[xe]=he,ae=xe;break}if(ae===-1)break}const me=_[ae];me&&me.connect(he)}}const H=new I,j=new I;function q(B,W,he){H.setFromMatrixPosition(W.matrixWorld),j.setFromMatrixPosition(he.matrixWorld);const ae=H.distanceTo(j),me=W.projectionMatrix.elements,xe=he.projectionMatrix.elements,Re=me[14]/(me[10]-1),Se=me[14]/(me[10]+1),Ye=(me[9]+1)/me[5],wt=(me[9]-1)/me[5],Fe=(me[8]-1)/me[0],G=(xe[8]+1)/xe[0],ht=Re*Fe,Ae=Re*G,be=ae/(-Fe+G),Pe=be*-Fe;W.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Pe),B.translateZ(be),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Qe=Re+be,Oe=Se+be,De=ht-Pe,ze=Ae+(ae-Pe),ct=Ye*Se/Oe*Qe,pt=wt*Se/Oe*Qe;B.projectionMatrix.makePerspective(De,ze,ct,pt,Qe,Oe),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function ie(B,W){W===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(W.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;T.near=M.near=g.near=B.near,T.far=M.far=g.far=B.far,(U!==T.near||S!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,S=T.far);const W=B.parent,he=T.cameras;ie(T,W);for(let ae=0;ae<he.length;ae++)ie(he[ae],W);he.length===2?q(T,g,M):T.projectionMatrix.copy(g.projectionMatrix),ee(B,T,W)};function ee(B,W,he){he===null?B.matrix.copy(W.matrixWorld):(B.matrix.copy(he.matrixWorld),B.matrix.invert(),B.matrix.multiply(W.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0);const ae=B.children;for(let me=0,xe=ae.length;me<xe;me++)ae[me].updateMatrixWorld(!0);B.projectionMatrix.copy(W.projectionMatrix),B.projectionMatrixInverse.copy(W.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ia*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let F=null;function $(B,W){if(c=W.getViewerPose(u||s),x=W,c!==null){const he=c.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ae=!1;he.length!==T.cameras.length&&(T.cameras.length=0,ae=!0);for(let me=0;me<he.length;me++){const xe=he[me];let Re=null;if(m!==null)Re=m.getViewport(xe);else{const Ye=d.getViewSubImage(h,xe);Re=Ye.viewport,me===0&&(e.setRenderTargetTextures(f,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(f))}let Se=R[me];Se===void 0&&(Se=new mn,Se.layers.enable(me),Se.viewport=new st,R[me]=Se),Se.matrix.fromArray(xe.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(xe.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Re.x,Re.y,Re.width,Re.height),me===0&&(T.matrix.copy(Se.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ae===!0&&T.cameras.push(Se)}}for(let he=0;he<_.length;he++){const ae=v[he],me=_[he];ae!==null&&me!==void 0&&me.update(ae,W,u||s)}F&&F(B,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),x=null}const X=new j_;X.setAnimationLoop($),this.setAnimationLoop=function(B){F=B},this.dispose=function(){}}}function eR(t,e){function n(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,V_(t)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,_,v,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(p,f):f.isMeshToonMaterial?(o(p,f),d(p,f)):f.isMeshPhongMaterial?(o(p,f),c(p,f)):f.isMeshStandardMaterial?(o(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,g)):f.isMeshMatcapMaterial?(o(p,f),x(p,f)):f.isMeshDepthMaterial?o(p,f):f.isMeshDistanceMaterial?(o(p,f),y(p,f)):f.isMeshNormalMaterial?o(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,_,v):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===an&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===an&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,n(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,_,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=v*.5,f.map&&(p.map.value=f.map,n(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,n(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const _=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function tR(t,e,n,i){let r={},o={},s=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const g=v.program;i.uniformBlockBinding(_,g)}function u(_,v){let g=r[_.id];g===void 0&&(x(_),g=c(_),r[_.id]=g,_.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(_,M);const R=e.render.frame;o[_.id]!==R&&(h(_),o[_.id]=R)}function c(_){const v=d();_.__bindingPointIndex=v;const g=t.createBuffer(),M=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,g),t.bufferData(t.UNIFORM_BUFFER,M,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,g),g}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],g=_.uniforms,M=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,T=g.length;R<T;R++){const U=g[R];if(m(U,R,M)===!0){const S=U.__offset,w=Array.isArray(U.value)?U.value:[U.value];let te=0;for(let Z=0;Z<w.length;Z++){const H=w[Z],j=y(H);typeof H=="number"?(U.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,S+te,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=H.elements[0],U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=H.elements[0],U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=H.elements[0]):(H.toArray(U.__data,te),te+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,U.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(_,v,g){const M=_.value;if(g[v]===void 0){if(typeof M=="number")g[v]=M;else{const R=Array.isArray(M)?M:[M],T=[];for(let U=0;U<R.length;U++)T.push(R[U].clone());g[v]=T}return!0}else if(typeof M=="number"){if(g[v]!==M)return g[v]=M,!0}else{const R=Array.isArray(g[v])?g[v]:[g[v]],T=Array.isArray(M)?M:[M];for(let U=0;U<R.length;U++){const S=R[U];if(S.equals(T[U])===!1)return S.copy(T[U]),!0}}return!1}function x(_){const v=_.uniforms;let g=0;const M=16;let R=0;for(let T=0,U=v.length;T<U;T++){const S=v[T],w={boundary:0,storage:0},te=Array.isArray(S.value)?S.value:[S.value];for(let Z=0,H=te.length;Z<H;Z++){const j=te[Z],q=y(j);w.boundary+=q.boundary,w.storage+=q.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=g,T>0){R=g%M;const Z=M-R;R!==0&&Z-w.boundary<0&&(g+=M-R,S.__offset=g)}g+=w.storage}return R=g%M,R>0&&(g+=M-R),_.__size=g,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const g=s.indexOf(v.__bindingPointIndex);s.splice(g,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}function nR(){const t=ra("canvas");return t.style.display="block",t}class Q_{constructor(e={}){const{canvas:n=nR(),context:i=null,depth:r=!0,stencil:o=!0,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),x=new Int32Array(4);let y=null,p=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Be,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const v=this;let g=!1,M=0,R=0,T=null,U=-1,S=null;const w=new st,te=new st;let Z=null;const H=new Ze(0);let j=0,q=n.width,ie=n.height,ee=1,F=null,$=null;const X=new st(0,0,q,ie),B=new st(0,0,q,ie);let W=!1;const he=new Nd;let ae=!1,me=!1,xe=null;const Re=new Tt,Se=new we,Ye=new I,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return T===null?ee:1}let G=i;function ht(A,z){for(let Q=0;Q<A.length;Q++){const k=A[Q],J=n.getContext(k,z);if(J!==null)return J}return null}try{const A={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${bd}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",N,!1),n.addEventListener("webglcontextcreationerror",V,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),G=ht(z,A),G===null)throw ht(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ae,be,Pe,Qe,Oe,De,ze,ct,pt,C,E,Y,ce,le,fe,Me,de,K,P,re,L,D,O,oe;function pe(){Ae=new d1(G),be=new s1(G,Ae,e),Ae.init(be),D=new $A(G,Ae,be),Pe=new YA(G,Ae,be),Qe=new m1(G),Oe=new UA,De=new qA(G,Ae,Pe,Oe,be,D,Qe),ze=new l1(v),ct=new f1(v),pt=new wE(G,be),O=new r1(G,Ae,pt,be),C=new h1(G,pt,Qe,O),E=new x1(G,C,pt,Qe),P=new _1(G,be,De),Me=new a1(Oe),Y=new DA(v,ze,ct,Ae,be,O,Me),ce=new eR(v,Oe),le=new IA,fe=new HA(Ae,be),K=new i1(v,ze,ct,Pe,E,h,l),de=new jA(v,E,be),oe=new tR(G,Qe,be,Pe),re=new o1(G,Ae,Qe,be),L=new p1(G,Ae,Qe,be),Qe.programs=Y.programs,v.capabilities=be,v.extensions=Ae,v.properties=Oe,v.renderLists=le,v.shadowMap=de,v.state=Pe,v.info=Qe}pe();const b=new JA(v,G);this.xr=b,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(q,ie,!1))},this.getSize=function(A){return A.set(q,ie)},this.setSize=function(A,z,Q=!0){if(b.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,ie=z,n.width=Math.floor(A*ee),n.height=Math.floor(z*ee),Q===!0&&(n.style.width=A+"px",n.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(q*ee,ie*ee).floor()},this.setDrawingBufferSize=function(A,z,Q){q=A,ie=z,ee=Q,n.width=Math.floor(A*Q),n.height=Math.floor(z*Q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(X)},this.setViewport=function(A,z,Q,k){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,z,Q,k),Pe.viewport(w.copy(X).multiplyScalar(ee).floor())},this.getScissor=function(A){return A.copy(B)},this.setScissor=function(A,z,Q,k){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,z,Q,k),Pe.scissor(te.copy(B).multiplyScalar(ee).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(A){Pe.setScissorTest(W=A)},this.setOpaqueSort=function(A){F=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(A=!0,z=!0,Q=!0){let k=0;if(A){let J=!1;if(T!==null){const _e=T.texture.format;J=_e===L_||_e===P_||_e===b_}if(J){const _e=T.texture.type,Ce=_e===nr||_e===Wi||_e===Pd||_e===wr||_e===R_||_e===C_,Ne=K.getClearColor(),Ie=K.getClearAlpha(),Ve=Ne.r,Ue=Ne.g,He=Ne.b;Ce?(m[0]=Ve,m[1]=Ue,m[2]=He,m[3]=Ie,G.clearBufferuiv(G.COLOR,0,m)):(x[0]=Ve,x[1]=Ue,x[2]=He,x[3]=Ie,G.clearBufferiv(G.COLOR,0,x))}else k|=G.COLOR_BUFFER_BIT}z&&(k|=G.DEPTH_BUFFER_BIT),Q&&(k|=G.STENCIL_BUFFER_BIT),G.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",N,!1),n.removeEventListener("webglcontextcreationerror",V,!1),le.dispose(),fe.dispose(),Oe.dispose(),ze.dispose(),ct.dispose(),E.dispose(),O.dispose(),oe.dispose(),Y.dispose(),b.dispose(),b.removeEventListener("sessionstart",qe),b.removeEventListener("sessionend",Pt),xe&&(xe.dispose(),xe=null),mt.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function N(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const A=Qe.autoReset,z=de.enabled,Q=de.autoUpdate,k=de.needsUpdate,J=de.type;pe(),Qe.autoReset=A,de.enabled=z,de.autoUpdate=Q,de.needsUpdate=k,de.type=J}function V(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const z=A.target;z.removeEventListener("dispose",se),Te(z)}function Te(A){Ee(A),Oe.remove(A)}function Ee(A){const z=Oe.get(A).programs;z!==void 0&&(z.forEach(function(Q){Y.releaseProgram(Q)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Q,k,J,_e){z===null&&(z=wt);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,Ne=Ke(A,z,Q,k,J);Pe.setMaterial(k,Ce);let Ie=Q.index,Ve=1;if(k.wireframe===!0){if(Ie=C.getWireframeAttribute(Q),Ie===void 0)return;Ve=2}const Ue=Q.drawRange,He=Q.attributes.position;let ft=Ue.start*Ve,gt=(Ue.start+Ue.count)*Ve;_e!==null&&(ft=Math.max(ft,_e.start*Ve),gt=Math.min(gt,(_e.start+_e.count)*Ve)),Ie!==null?(ft=Math.max(ft,0),gt=Math.min(gt,Ie.count)):He!=null&&(ft=Math.max(ft,0),gt=Math.min(gt,He.count));const En=gt-ft;if(En<0||En===1/0)return;O.setup(J,k,Ne,Q,Ie);let li,xt=re;if(Ie!==null&&(li=pt.get(Ie),xt=L,xt.setIndex(li)),J.isMesh)k.wireframe===!0?(Pe.setLineWidth(k.wireframeLinewidth*Fe()),xt.setMode(G.LINES)):xt.setMode(G.TRIANGLES);else if(J.isLine){let We=k.linewidth;We===void 0&&(We=1),Pe.setLineWidth(We*Fe()),J.isLineSegments?xt.setMode(G.LINES):J.isLineLoop?xt.setMode(G.LINE_LOOP):xt.setMode(G.LINE_STRIP)}else J.isPoints?xt.setMode(G.POINTS):J.isSprite&&xt.setMode(G.TRIANGLES);if(J.isInstancedMesh)xt.renderInstances(ft,En,J.count);else if(Q.isInstancedBufferGeometry){const We=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,pu=Math.min(Q.instanceCount,We);xt.renderInstances(ft,En,pu)}else xt.render(ft,En)},this.compile=function(A,z){function Q(k,J,_e){k.transparent===!0&&k.side===bn&&k.forceSinglePass===!1?(k.side=an,k.needsUpdate=!0,Pi(k,J,_e),k.side=or,k.needsUpdate=!0,Pi(k,J,_e),k.side=bn):Pi(k,J,_e)}p=fe.get(A),p.init(),_.push(p),A.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights),A.traverse(function(k){const J=k.material;if(J)if(Array.isArray(J))for(let _e=0;_e<J.length;_e++){const Ce=J[_e];Q(Ce,A,k)}else Q(J,A,k)}),_.pop(),p=null};let Le=null;function et(A){Le&&Le(A)}function qe(){mt.stop()}function Pt(){mt.start()}const mt=new j_;mt.setAnimationLoop(et),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(A){Le=A,b.setAnimationLoop(A),A===null?mt.stop():mt.start()},b.addEventListener("sessionstart",qe),b.addEventListener("sessionend",Pt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),b.enabled===!0&&b.isPresenting===!0&&(b.cameraAutoUpdate===!0&&b.updateCamera(z),z=b.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,T),p=fe.get(A,_.length),p.init(),_.push(p),Re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),he.setFromProjectionMatrix(Re),me=this.localClippingEnabled,ae=Me.init(this.clippingPlanes,me),y=le.get(A,f.length),y.init(),f.push(y),zr(A,z,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(F,$),this.info.render.frame++,ae===!0&&Me.beginShadows();const Q=p.state.shadowsArray;if(de.render(Q,A,z),ae===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(y,A),p.setupLights(v._useLegacyLights),z.isArrayCamera){const k=z.cameras;for(let J=0,_e=k.length;J<_e;J++){const Ce=k[J];Mn(y,A,Ce,Ce.viewport)}}else Mn(y,A,z);T!==null&&(De.updateMultisampleRenderTarget(T),De.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(v,A,z),O.resetDefaultState(),U=-1,S=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function zr(A,z,Q,k){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||he.intersectsSprite(A)){k&&Ye.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Re);const Ce=E.update(A),Ne=A.material;Ne.visible&&y.push(A,Ce,Ne,Q,Ye.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||he.intersectsObject(A))){const Ce=E.update(A),Ne=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ye.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ye.copy(Ce.boundingSphere.center)),Ye.applyMatrix4(A.matrixWorld).applyMatrix4(Re)),Array.isArray(Ne)){const Ie=Ce.groups;for(let Ve=0,Ue=Ie.length;Ve<Ue;Ve++){const He=Ie[Ve],ft=Ne[He.materialIndex];ft&&ft.visible&&y.push(A,Ce,ft,Q,Ye.z,He)}}else Ne.visible&&y.push(A,Ce,Ne,Q,Ye.z,null)}}const _e=A.children;for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++)zr(_e[Ce],z,Q,k)}function Mn(A,z,Q,k){const J=A.opaque,_e=A.transmissive,Ce=A.transparent;p.setupLightsView(Q),ae===!0&&Me.setGlobalState(v.clippingPlanes,Q),_e.length>0&&Nn(J,_e,z,Q),k&&Pe.viewport(w.copy(k)),J.length>0&&ai(J,z,Q),_e.length>0&&ai(_e,z,Q),Ce.length>0&&ai(Ce,z,Q),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Nn(A,z,Q,k){const J=be.isWebGL2;xe===null&&(xe=new $n(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?Ei:nr,minFilter:na,samples:J?4:0})),v.getDrawingBufferSize(Se),J?xe.setSize(Se.x,Se.y):xe.setSize(Vl(Se.x),Vl(Se.y));const _e=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(H),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear();const Ce=v.toneMapping;v.toneMapping=tr,ai(A,Q,k),De.updateMultisampleRenderTarget(xe),De.updateRenderTargetMipmap(xe);let Ne=!1;for(let Ie=0,Ve=z.length;Ie<Ve;Ie++){const Ue=z[Ie],He=Ue.object,ft=Ue.geometry,gt=Ue.material,En=Ue.group;if(gt.side===bn&&He.layers.test(k.layers)){const li=gt.side;gt.side=an,gt.needsUpdate=!0,kr(He,Q,k,ft,gt,En),gt.side=li,gt.needsUpdate=!0,Ne=!0}}Ne===!0&&(De.updateMultisampleRenderTarget(xe),De.updateRenderTargetMipmap(xe)),v.setRenderTarget(_e),v.setClearColor(H,j),v.toneMapping=Ce}function ai(A,z,Q){const k=z.isScene===!0?z.overrideMaterial:null;for(let J=0,_e=A.length;J<_e;J++){const Ce=A[J],Ne=Ce.object,Ie=Ce.geometry,Ve=k===null?Ce.material:k,Ue=Ce.group;Ne.layers.test(Q.layers)&&kr(Ne,z,Q,Ie,Ve,Ue)}}function kr(A,z,Q,k,J,_e){A.onBeforeRender(v,z,Q,k,J,_e),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(v,z,Q,k,A,_e),J.transparent===!0&&J.side===bn&&J.forceSinglePass===!1?(J.side=an,J.needsUpdate=!0,v.renderBufferDirect(Q,z,k,J,A,_e),J.side=or,J.needsUpdate=!0,v.renderBufferDirect(Q,z,k,J,A,_e),J.side=bn):v.renderBufferDirect(Q,z,k,J,A,_e),A.onAfterRender(v,z,Q,k,J,_e)}function Pi(A,z,Q){z.isScene!==!0&&(z=wt);const k=Oe.get(A),J=p.state.lights,_e=p.state.shadowsArray,Ce=J.state.version,Ne=Y.getParameters(A,J.state,_e,z,Q),Ie=Y.getProgramCacheKey(Ne);let Ve=k.programs;k.environment=A.isMeshStandardMaterial?z.environment:null,k.fog=z.fog,k.envMap=(A.isMeshStandardMaterial?ct:ze).get(A.envMap||k.environment),Ve===void 0&&(A.addEventListener("dispose",se),Ve=new Map,k.programs=Ve);let Ue=Ve.get(Ie);if(Ue!==void 0){if(k.currentProgram===Ue&&k.lightsStateVersion===Ce)return Br(A,Ne),Ue}else Ne.uniforms=Y.getUniforms(A),A.onBuild(Q,Ne,v),A.onBeforeCompile(Ne,v),Ue=Y.acquireProgram(Ne,Ie),Ve.set(Ie,Ue),k.uniforms=Ne.uniforms;const He=k.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Me.uniform),Br(A,Ne),k.needsLights=Zn(A),k.lightsStateVersion=Ce,k.needsLights&&(He.ambientLightColor.value=J.state.ambient,He.lightProbe.value=J.state.probe,He.directionalLights.value=J.state.directional,He.directionalLightShadows.value=J.state.directionalShadow,He.spotLights.value=J.state.spot,He.spotLightShadows.value=J.state.spotShadow,He.rectAreaLights.value=J.state.rectArea,He.ltc_1.value=J.state.rectAreaLTC1,He.ltc_2.value=J.state.rectAreaLTC2,He.pointLights.value=J.state.point,He.pointLightShadows.value=J.state.pointShadow,He.hemisphereLights.value=J.state.hemi,He.directionalShadowMap.value=J.state.directionalShadowMap,He.directionalShadowMatrix.value=J.state.directionalShadowMatrix,He.spotShadowMap.value=J.state.spotShadowMap,He.spotLightMatrix.value=J.state.spotLightMatrix,He.spotLightMap.value=J.state.spotLightMap,He.pointShadowMap.value=J.state.pointShadowMap,He.pointShadowMatrix.value=J.state.pointShadowMatrix);const ft=Ue.getUniforms(),gt=pl.seqWithValue(ft.seq,He);return k.currentProgram=Ue,k.uniformsList=gt,Ue}function Br(A,z){const Q=Oe.get(A);Q.outputColorSpace=z.outputColorSpace,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function Ke(A,z,Q,k,J){z.isScene!==!0&&(z=wt),De.resetTextureUnits();const _e=z.fog,Ce=k.isMeshStandardMaterial?z.environment:null,Ne=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:oi,Ie=(k.isMeshStandardMaterial?ct:ze).get(k.envMap||Ce),Ve=k.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ue=!!Q.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),He=!!Q.morphAttributes.position,ft=!!Q.morphAttributes.normal,gt=!!Q.morphAttributes.color;let En=tr;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(En=v.toneMapping);const li=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,xt=li!==void 0?li.length:0,We=Oe.get(k),pu=p.state.lights;if(ae===!0&&(me===!0||A!==S)){const fn=A===S&&k.id===U;Me.setState(k,A,fn)}let yt=!1;k.version===We.__version?(We.needsLights&&We.lightsStateVersion!==pu.state.version||We.outputColorSpace!==Ne||J.isInstancedMesh&&We.instancing===!1||!J.isInstancedMesh&&We.instancing===!0||J.isSkinnedMesh&&We.skinning===!1||!J.isSkinnedMesh&&We.skinning===!0||J.isInstancedMesh&&We.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&We.instancingColor===!1&&J.instanceColor!==null||We.envMap!==Ie||k.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Me.numPlanes||We.numIntersection!==Me.numIntersection)||We.vertexAlphas!==Ve||We.vertexTangents!==Ue||We.morphTargets!==He||We.morphNormals!==ft||We.morphColors!==gt||We.toneMapping!==En||be.isWebGL2===!0&&We.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,We.__version=k.version);let ur=We.currentProgram;yt===!0&&(ur=Pi(k,z,J));let Hd=!1,es=!1,mu=!1;const Xt=ur.getUniforms(),cr=We.uniforms;if(Pe.useProgram(ur.program)&&(Hd=!0,es=!0,mu=!0),k.id!==U&&(U=k.id,es=!0),Hd||S!==A){if(Xt.setValue(G,"projectionMatrix",A.projectionMatrix),be.logarithmicDepthBuffer&&Xt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),S!==A&&(S=A,es=!0,mu=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const fn=Xt.map.cameraPosition;fn!==void 0&&fn.setValue(G,Ye.setFromMatrixPosition(A.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Xt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||J.isSkinnedMesh)&&Xt.setValue(G,"viewMatrix",A.matrixWorldInverse)}if(J.isSkinnedMesh){Xt.setOptional(G,J,"bindMatrix"),Xt.setOptional(G,J,"bindMatrixInverse");const fn=J.skeleton;fn&&(be.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),Xt.setValue(G,"boneTexture",fn.boneTexture,De),Xt.setValue(G,"boneTextureSize",fn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gu=Q.morphAttributes;if((gu.position!==void 0||gu.normal!==void 0||gu.color!==void 0&&be.isWebGL2===!0)&&P.update(J,Q,ur),(es||We.receiveShadow!==J.receiveShadow)&&(We.receiveShadow=J.receiveShadow,Xt.setValue(G,"receiveShadow",J.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(cr.envMap.value=Ie,cr.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),es&&(Xt.setValue(G,"toneMappingExposure",v.toneMappingExposure),We.needsLights&&cn(cr,mu),_e&&k.fog===!0&&ce.refreshFogUniforms(cr,_e),ce.refreshMaterialUniforms(cr,k,ee,ie,xe),pl.upload(G,We.uniformsList,cr,De)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(pl.upload(G,We.uniformsList,cr,De),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Xt.setValue(G,"center",J.center),Xt.setValue(G,"modelViewMatrix",J.modelViewMatrix),Xt.setValue(G,"normalMatrix",J.normalMatrix),Xt.setValue(G,"modelMatrix",J.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const fn=k.uniformsGroups;for(let vu=0,i0=fn.length;vu<i0;vu++)if(be.isWebGL2){const Gd=fn[vu];oe.update(Gd,ur),oe.bind(Gd,ur)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ur}function cn(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Zn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,z,Q){Oe.get(A.texture).__webglTexture=z,Oe.get(A.depthTexture).__webglTexture=Q;const k=Oe.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=Q===void 0,k.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,z){const Q=Oe.get(A);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Q=0){T=A,M=z,R=Q;let k=!0,J=null,_e=!1,Ce=!1;if(A){const Ie=Oe.get(A);Ie.__useDefaultFramebuffer!==void 0?(Pe.bindFramebuffer(G.FRAMEBUFFER,null),k=!1):Ie.__webglFramebuffer===void 0?De.setupRenderTarget(A):Ie.__hasExternalTextures&&De.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ce=!0);const Ue=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[z])?J=Ue[z][Q]:J=Ue[z],_e=!0):be.isWebGL2&&A.samples>0&&De.useMultisampledRTT(A)===!1?J=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?J=Ue[Q]:J=Ue,w.copy(A.viewport),te.copy(A.scissor),Z=A.scissorTest}else w.copy(X).multiplyScalar(ee).floor(),te.copy(B).multiplyScalar(ee).floor(),Z=W;if(Pe.bindFramebuffer(G.FRAMEBUFFER,J)&&be.drawBuffers&&k&&Pe.drawBuffers(A,J),Pe.viewport(w),Pe.scissor(te),Pe.setScissorTest(Z),_e){const Ie=Oe.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,Q)}else if(Ce){const Ie=Oe.get(A.texture),Ve=z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ie.__webglTexture,Q||0,Ve)}U=-1},this.readRenderTargetPixels=function(A,z,Q,k,J,_e,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Pe.bindFramebuffer(G.FRAMEBUFFER,Ne);try{const Ie=A.texture,Ve=Ie.format,Ue=Ie.type;if(Ve!==jn&&D.convert(Ve)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ue===Ei&&(Ae.has("EXT_color_buffer_half_float")||be.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Ue!==nr&&D.convert(Ue)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Xi&&(be.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-k&&Q>=0&&Q<=A.height-J&&G.readPixels(z,Q,k,J,D.convert(Ve),D.convert(Ue),_e)}finally{const Ie=T!==null?Oe.get(T).__webglFramebuffer:null;Pe.bindFramebuffer(G.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(A,z,Q=0){const k=Math.pow(2,-Q),J=Math.floor(z.image.width*k),_e=Math.floor(z.image.height*k);De.setTexture2D(z,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,A.x,A.y,J,_e),Pe.unbindTexture()},this.copyTextureToTexture=function(A,z,Q,k=0){const J=z.image.width,_e=z.image.height,Ce=D.convert(Q.format),Ne=D.convert(Q.type);De.setTexture2D(Q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment),z.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,k,A.x,A.y,J,_e,Ce,Ne,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,k,A.x,A.y,z.mipmaps[0].width,z.mipmaps[0].height,Ce,z.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,k,A.x,A.y,Ce,Ne,z.image),k===0&&Q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Pe.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Q,k,J=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=A.max.x-A.min.x+1,Ce=A.max.y-A.min.y+1,Ne=A.max.z-A.min.z+1,Ie=D.convert(k.format),Ve=D.convert(k.type);let Ue;if(k.isData3DTexture)De.setTexture3D(k,0),Ue=G.TEXTURE_3D;else if(k.isDataArrayTexture)De.setTexture2DArray(k,0),Ue=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const He=G.getParameter(G.UNPACK_ROW_LENGTH),ft=G.getParameter(G.UNPACK_IMAGE_HEIGHT),gt=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),li=G.getParameter(G.UNPACK_SKIP_IMAGES),xt=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,xt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,A.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,A.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,A.min.z),Q.isDataTexture||Q.isData3DTexture?G.texSubImage3D(Ue,J,z.x,z.y,z.z,_e,Ce,Ne,Ie,Ve,xt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ue,J,z.x,z.y,z.z,_e,Ce,Ne,Ie,xt.data)):G.texSubImage3D(Ue,J,z.x,z.y,z.z,_e,Ce,Ne,Ie,Ve,xt),G.pixelStorei(G.UNPACK_ROW_LENGTH,He),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft),G.pixelStorei(G.UNPACK_SKIP_PIXELS,gt),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,li),J===0&&k.generateMipmaps&&G.generateMipmap(Ue),Pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?De.setTextureCube(A,0):A.isData3DTexture?De.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?De.setTexture2DArray(A,0):De.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){M=0,R=0,T=null,Pe.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Be?Rr:D_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Rr?Be:oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class iR extends Q_{}iR.prototype.isWebGL1Renderer=!0;class rR extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Os extends si{constructor(e=1,n=1,i=1,r=32,o=1,s=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:s,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),o=Math.floor(o);const c=[],d=[],h=[],m=[];let x=0;const y=[],p=i/2;let f=0;_(),s===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(m,2));function _(){const g=new I,M=new I;let R=0;const T=(n-e)/i;for(let U=0;U<=o;U++){const S=[],w=U/o,te=w*(n-e)+e;for(let Z=0;Z<=r;Z++){const H=Z/r,j=H*l+a,q=Math.sin(j),ie=Math.cos(j);M.x=te*q,M.y=-w*i+p,M.z=te*ie,d.push(M.x,M.y,M.z),g.set(q,T,ie).normalize(),h.push(g.x,g.y,g.z),m.push(H,1-w),S.push(x++)}y.push(S)}for(let U=0;U<r;U++)for(let S=0;S<o;S++){const w=y[S][U],te=y[S+1][U],Z=y[S+1][U+1],H=y[S][U+1];c.push(w,te,H),c.push(te,Z,H),R+=6}u.addGroup(f,R,0),f+=R}function v(g){const M=x,R=new we,T=new I;let U=0;const S=g===!0?e:n,w=g===!0?1:-1;for(let Z=1;Z<=r;Z++)d.push(0,p*w,0),h.push(0,w,0),m.push(.5,.5),x++;const te=x;for(let Z=0;Z<=r;Z++){const j=Z/r*l+a,q=Math.cos(j),ie=Math.sin(j);T.x=S*ie,T.y=p*w,T.z=S*q,d.push(T.x,T.y,T.z),h.push(0,w,0),R.x=q*.5+.5,R.y=ie*.5*w+.5,m.push(R.x,R.y),x++}for(let Z=0;Z<r;Z++){const H=M+Z,j=te+Z;g===!0?c.push(j,j+1,H):c.push(j+1,j,H),U+=3}u.addGroup(f,U,g===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Od extends si{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const c=[],d=new I,h=new I,m=[],x=[],y=[],p=[];for(let f=0;f<=i;f++){const _=[],v=f/i;let g=0;f===0&&s===0?g=.5/n:f===i&&l===Math.PI&&(g=-.5/n);for(let M=0;M<=n;M++){const R=M/n;d.x=-e*Math.cos(r+R*o)*Math.sin(s+v*a),d.y=e*Math.cos(s+v*a),d.z=e*Math.sin(r+R*o)*Math.sin(s+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(R+g,1-v),_.push(u++)}c.push(_)}for(let f=0;f<i;f++)for(let _=0;_<n;_++){const v=c[f][_+1],g=c[f][_],M=c[f+1][_],R=c[f+1][_+1];(f!==0||s>0)&&m.push(v,g,R),(f!==i-1||l<Math.PI)&&m.push(g,M,R)}this.setIndex(m),this.setAttribute("position",new Zt(x,3)),this.setAttribute("normal",new Zt(y,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oR extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const Pm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class sR{constructor(e,n,i){const r=this;let o=!1,s=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,o===!1&&r.onStart!==void 0&&r.onStart(c,s,a),o=!0},this.itemEnd=function(c){s++,r.onProgress!==void 0&&r.onProgress(c,s,a),s===a&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const m=u[d],x=u[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return x}return null}}}const aR=new sR;class zd{constructor(e){this.manager=e!==void 0?e:aR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zd.DEFAULT_MATERIAL_NAME="__DEFAULT";class lR extends zd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Pm.get(e);if(s!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(s),o.manager.itemEnd(e)},0),s;const a=ra("img");function l(){c(),Pm.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(d){c(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),o.manager.itemStart(e),a.src=e,a}}class Fi extends zd{constructor(e){super(e)}load(e,n,i,r){const o=new ln,s=new lR(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(a){o.image=a,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class J_ extends un{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const yc=new Tt,Lm=new I,Dm=new I;class uR{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Lm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Lm),Dm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Dm),n.updateMatrixWorld(),yc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Um=new Tt,vs=new I,Sc=new I;class cR extends uR{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,o=e.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),vs.setFromMatrixPosition(e.matrixWorld),i.position.copy(vs),Sc.copy(i.position),Sc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Sc),i.updateMatrixWorld(),r.makeTranslation(-vs.x,-vs.y,-vs.z),Um.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Um)}}class fR extends J_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dR extends J_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class e0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Nm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Nm(){return(typeof performance>"u"?Date:performance).now()}class Im{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);function hR(){const t=new mn(100,window.innerWidth/window.innerHeight,1,1e3);t.position.set(16.855729119467718,17.281954620123585,14.687406233597498),window.camera=t}const t0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Jo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const pR=new Y_(-1,1,1,-1,0,1),kd=new si;kd.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3));kd.setAttribute("uv",new Zt([0,2,0,0,2,0],2));class Bd{constructor(e){this._mesh=new vn(kd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class mR extends Jo{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oa.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Bd(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fm extends Jo{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,a;this.inverse?(s=0,a=1):(s=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class gR extends Jo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class vR{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new we);this._width=i.width,this._height=i.height,n=new $n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ei}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mR(t0),this.copyPass.material.blending=Mi,this.clock=new e0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fm!==void 0&&(s instanceof Fm?i=!0:s instanceof gR&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _R extends Jo{constructor(e,n,i,r,o){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o!==void 0?o:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==void 0&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),o=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,o),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=s),e.autoClear=r}}const xR={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class jo extends Jo{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new $n(o,s,{type:Ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new $n(o,s,{type:Ei});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new $n(o,s,{type:Ei});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),s=Math.round(s/2)}const a=xR;this.highPassUniforms=oa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new we(1/o,1/s),o=Math.round(o/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const c=t0;this.copyUniforms=oa.clone(c.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Mf,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new Ud,this.fsQuad=new Bd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,r),this.renderTargetsVertical[o].setSize(i,r),this.separableBlurMaterials[o].uniforms.invSize.value=new we(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=jo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=jo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}jo.BlurDirectionX=new we(1,0);jo.BlurDirectionY=new we(0,1);const yR={uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		`+ke.tonemapping_pars_fragment+ke.colorspace_pars_fragment+`

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_COLOR_SPACE

				gl_FragColor = LinearTosRGB( gl_FragColor );

			#endif

		}`};class SR extends Jo{constructor(){super();const e=yR;this.uniforms=oa.clone(e.uniforms),this.material=new oR({uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Bd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},this._outputColorSpace==Be&&(this.material.defines.SRGB_COLOR_SPACE=""),this._toneMapping===S_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===M_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===E_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===T_&&(this.material.defines.ACES_FILMIC_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function MR(){const t=new Q_({canvas:document.getElementById("canvas"),antialias:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio),window.renderer=t;const e=new _R(window.scene,window.camera),n=new jo(new we(window.innerWidth,window.innerHeight),1.5,.4,.85);n.threshold=0,n.strength=.5,n.radius=.39;const i=new SR,r=new vR(t);r.addPass(e),r.addPass(n),r.addPass(i),window.composer=r}function ER(){const t=new rR,e=new dR(16777215,.5),n=new fR(16777215,1);n.position.set(0,10,0),t.add(n),t.add(e),window.scene=t}const Om={type:"change"},Mc={type:"start"},zm={type:"end"},Ja=new z_,km=new ki,TR=Math.cos(70*ZM.DEG2RAD);class wR extends Or{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gr.ROTATE,MIDDLE:Gr.DOLLY,RIGHT:Gr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",E),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Om),i.update(),o=r.NONE},this.update=function(){const P=new I,re=new Nr().setFromUnitVectors(e.up,new I(0,1,0)),L=re.clone().invert(),D=new I,O=new Nr,oe=new I,pe=2*Math.PI;return function(){const ne=i.object.position;P.copy(ne).sub(i.target),P.applyQuaternion(re),a.setFromVector3(P),i.autoRotate&&o===r.NONE&&te(S()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let N=i.minAzimuthAngle,V=i.maxAzimuthAngle;isFinite(N)&&isFinite(V)&&(N<-Math.PI?N+=pe:N>Math.PI&&(N-=pe),V<-Math.PI?V+=pe:V>Math.PI&&(V-=pe),N<=V?a.theta=Math.max(N,Math.min(V,a.theta)):a.theta=a.theta>(N+V)/2?Math.max(N,a.theta):Math.min(V,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=$(a.radius):a.radius=$(a.radius*u),P.setFromSpherical(a),P.applyQuaternion(L),ne.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let se=!1;if(i.zoomToCursor&&R){let Te=null;if(i.object.isPerspectiveCamera){const Ee=P.length();Te=$(Ee*u);const Le=Ee-Te;i.object.position.addScaledVector(g,Le),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Ee=new I(M.x,M.y,0);Ee.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),se=!0;const Le=new I(M.x,M.y,0);Le.unproject(i.object),i.object.position.sub(Le).add(Ee),i.object.updateMatrixWorld(),Te=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Te!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Te).add(i.object.position):(Ja.origin.copy(i.object.position),Ja.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ja.direction))<TR?e.lookAt(i.target):(km.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ja.intersectPlane(km,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),se=!0);return u=1,R=!1,se||D.distanceToSquared(i.object.position)>s||8*(1-O.dot(i.object.quaternion))>s||oe.distanceToSquared(i.target)>0?(i.dispatchEvent(Om),D.copy(i.object.position),O.copy(i.object.quaternion),oe.copy(i.target),se=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",le),i.domElement.removeEventListener("pointerdown",Oe),i.domElement.removeEventListener("pointercancel",ze),i.domElement.removeEventListener("wheel",C),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",ze),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",E),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const s=1e-6,a=new Im,l=new Im;let u=1;const c=new I,d=new we,h=new we,m=new we,x=new we,y=new we,p=new we,f=new we,_=new we,v=new we,g=new I,M=new we;let R=!1;const T=[],U={};function S(){return 2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function te(P){l.theta-=P}function Z(P){l.phi-=P}const H=function(){const P=new I;return function(L,D){P.setFromMatrixColumn(D,0),P.multiplyScalar(-L),c.add(P)}}(),j=function(){const P=new I;return function(L,D){i.screenSpacePanning===!0?P.setFromMatrixColumn(D,1):(P.setFromMatrixColumn(D,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(L),c.add(P)}}(),q=function(){const P=new I;return function(L,D){const O=i.domElement;if(i.object.isPerspectiveCamera){const oe=i.object.position;P.copy(oe).sub(i.target);let pe=P.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),H(2*L*pe/O.clientHeight,i.object.matrix),j(2*D*pe/O.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(L*(i.object.right-i.object.left)/i.object.zoom/O.clientWidth,i.object.matrix),j(D*(i.object.top-i.object.bottom)/i.object.zoom/O.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ie(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ee(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(P){if(!i.zoomToCursor)return;R=!0;const re=i.domElement.getBoundingClientRect(),L=P.clientX-re.left,D=P.clientY-re.top,O=re.width,oe=re.height;M.x=L/O*2-1,M.y=-(D/oe)*2+1,g.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function $(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function X(P){d.set(P.clientX,P.clientY)}function B(P){F(P),f.set(P.clientX,P.clientY)}function W(P){x.set(P.clientX,P.clientY)}function he(P){h.set(P.clientX,P.clientY),m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const re=i.domElement;te(2*Math.PI*m.x/re.clientHeight),Z(2*Math.PI*m.y/re.clientHeight),d.copy(h),i.update()}function ae(P){_.set(P.clientX,P.clientY),v.subVectors(_,f),v.y>0?ie(w()):v.y<0&&ee(w()),f.copy(_),i.update()}function me(P){y.set(P.clientX,P.clientY),p.subVectors(y,x).multiplyScalar(i.panSpeed),q(p.x,p.y),x.copy(y),i.update()}function xe(P){F(P),P.deltaY<0?ee(w()):P.deltaY>0&&ie(w()),i.update()}function Re(P){let re=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,i.keyPanSpeed),re=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(0,-i.keyPanSpeed),re=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?te(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(i.keyPanSpeed,0),re=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?te(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):q(-i.keyPanSpeed,0),re=!0;break}re&&(P.preventDefault(),i.update())}function Se(){if(T.length===1)d.set(T[0].pageX,T[0].pageY);else{const P=.5*(T[0].pageX+T[1].pageX),re=.5*(T[0].pageY+T[1].pageY);d.set(P,re)}}function Ye(){if(T.length===1)x.set(T[0].pageX,T[0].pageY);else{const P=.5*(T[0].pageX+T[1].pageX),re=.5*(T[0].pageY+T[1].pageY);x.set(P,re)}}function wt(){const P=T[0].pageX-T[1].pageX,re=T[0].pageY-T[1].pageY,L=Math.sqrt(P*P+re*re);f.set(0,L)}function Fe(){i.enableZoom&&wt(),i.enablePan&&Ye()}function G(){i.enableZoom&&wt(),i.enableRotate&&Se()}function ht(P){if(T.length==1)h.set(P.pageX,P.pageY);else{const L=K(P),D=.5*(P.pageX+L.x),O=.5*(P.pageY+L.y);h.set(D,O)}m.subVectors(h,d).multiplyScalar(i.rotateSpeed);const re=i.domElement;te(2*Math.PI*m.x/re.clientHeight),Z(2*Math.PI*m.y/re.clientHeight),d.copy(h)}function Ae(P){if(T.length===1)y.set(P.pageX,P.pageY);else{const re=K(P),L=.5*(P.pageX+re.x),D=.5*(P.pageY+re.y);y.set(L,D)}p.subVectors(y,x).multiplyScalar(i.panSpeed),q(p.x,p.y),x.copy(y)}function be(P){const re=K(P),L=P.pageX-re.x,D=P.pageY-re.y,O=Math.sqrt(L*L+D*D);_.set(0,O),v.set(0,Math.pow(_.y/f.y,i.zoomSpeed)),ie(v.y),f.copy(_)}function Pe(P){i.enableZoom&&be(P),i.enablePan&&Ae(P)}function Qe(P){i.enableZoom&&be(P),i.enableRotate&&ht(P)}function Oe(P){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",De),i.domElement.addEventListener("pointerup",ze)),fe(P),P.pointerType==="touch"?Y(P):ct(P))}function De(P){i.enabled!==!1&&(P.pointerType==="touch"?ce(P):pt(P))}function ze(P){Me(P),T.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",ze)),i.dispatchEvent(zm),o=r.NONE}function ct(P){let re;switch(P.button){case 0:re=i.mouseButtons.LEFT;break;case 1:re=i.mouseButtons.MIDDLE;break;case 2:re=i.mouseButtons.RIGHT;break;default:re=-1}switch(re){case Gr.DOLLY:if(i.enableZoom===!1)return;B(P),o=r.DOLLY;break;case Gr.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;W(P),o=r.PAN}else{if(i.enableRotate===!1)return;X(P),o=r.ROTATE}break;case Gr.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;X(P),o=r.ROTATE}else{if(i.enablePan===!1)return;W(P),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Mc)}function pt(P){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;he(P);break;case r.DOLLY:if(i.enableZoom===!1)return;ae(P);break;case r.PAN:if(i.enablePan===!1)return;me(P);break}}function C(P){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(P.preventDefault(),i.dispatchEvent(Mc),xe(P),i.dispatchEvent(zm))}function E(P){i.enabled===!1||i.enablePan===!1||Re(P)}function Y(P){switch(de(P),T.length){case 1:switch(i.touches.ONE){case Vr.ROTATE:if(i.enableRotate===!1)return;Se(),o=r.TOUCH_ROTATE;break;case Vr.PAN:if(i.enablePan===!1)return;Ye(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Vr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(),o=r.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;G(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Mc)}function ce(P){switch(de(P),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ht(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ae(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Qe(P),i.update();break;default:o=r.NONE}}function le(P){i.enabled!==!1&&P.preventDefault()}function fe(P){T.push(P)}function Me(P){delete U[P.pointerId];for(let re=0;re<T.length;re++)if(T[re].pointerId==P.pointerId){T.splice(re,1);return}}function de(P){let re=U[P.pointerId];re===void 0&&(re=new we,U[P.pointerId]=re),re.set(P.pageX,P.pageY)}function K(P){const re=P.pointerId===T[0].pointerId?T[1]:T[0];return U[re.pointerId]}i.domElement.addEventListener("contextmenu",le),i.domElement.addEventListener("pointerdown",Oe),i.domElement.addEventListener("pointercancel",ze),i.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}function AR(){const t=new wR(window.camera,window.renderer.domElement);t.target.set(0,0,0),t.update(),window.controls=t}const RR=`
    varying vec2 vUv;

    void main() {
        vUv = uv;
        vec3 pos = vec3(position.x/1.,position.y,position.z/1.);
        if(pos.y >= 1.87){
            pos = vec3(position.x*(sin((position.y - 0.6)*1.27)-0.16),position.y,position.z*(sin((position.y - 0.6)*1.27)-0.16));
        } else{
            pos = vec3(position.x*(sin((position.y/2. -  .01)*.11)+0.75),position.y,position.z*(sin((position.y/2. -  .01)*.11)+0.75));
        }
        gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
    }
`,CR=`
    varying vec2 vUv;
    uniform sampler2D perlinnoise;
    uniform vec3 color4;
    uniform float time;
    varying vec3 vNormal;

    vec3 rgbcol(vec3 col) {
        return vec3(col.r/255.0,col.g/255.0,col.b/255.0);
    }

    void main() {
        vec3 noisetex = texture2D(perlinnoise,mod(1.*vec2(vUv.y-time*2.,vUv.x + time*1.),1.)).rgb;    
        gl_FragColor = vec4(noisetex.r);

        if(gl_FragColor.r >= 0.5){
            gl_FragColor = vec4(rgbcol(color4),gl_FragColor.r);
        }else{
            gl_FragColor = vec4(0.);
        }
        gl_FragColor *= vec4(sin(vUv.y) - 0.1);
        gl_FragColor *= vec4(smoothstep(0.3,0.628,vUv.y));

    }

`,Bm=`
    varying vec2 vUv;
    uniform sampler2D perlinnoise;
    uniform sampler2D noise;
    uniform vec3 color4;
    uniform float time;
    varying vec3 camPos;
    varying vec3 vNormal;
    varying vec3 nois;

    vec3 rgbcol(vec3 col) {
        return vec3(col.r/255.0,col.g/255.0,col.b/255.0);
    }

      
    void main() {
        // vec3 noisetex = texture2D(perlinnoise,mod(1.*vec2(vUv.y-time*2.,vUv.x + time*1.),1.)).rgb;    
        // gl_FragColor += vec4(sin((vUv.y - time)*(20. + vUv.y)));
        vec3 noisetex = texture2D(noise,mod(1.*vec2(vUv.y-time*2.,vUv.x + time*1.),1.)).rgb;
        // nois = noisetex;
        gl_FragColor = vec4(noisetex.r);

        if(gl_FragColor.r >= 0.44){
            gl_FragColor = vec4(rgbcol(color4),gl_FragColor.r);
        }
        // else if(gl_FragColor.r >= 0.9){
        //     // gl_FragColor = vec4(rgbcol(color4),gl_FragColor.r)*0.5;
        // }
        else{
            gl_FragColor = vec4(0.);
        }
        gl_FragColor *= vec4(smoothstep(0.2,0.628,vUv.y));
        // gl_FragColor = vec4(vUv.y - 0.3 );
        // gl_FragColor = 1. - vec4(dot(normalize(vNormal),normalize(camPos)).r);
    }
`,Hm=`
    varying vec2 vUv;
    varying vec3 camPos;
    varying vec3 vNormal;
    varying vec3 nois;
    uniform sampler2D noise;
    uniform float time;

    void main() {
        vUv = uv;
        camPos = cameraPosition;
        vNormal = normal;
        vec3 pos = vec3(position.x/1.,position.y,position.z/1.);
        vec3 noisetex = texture2D(noise,mod(1.*vec2(vUv.y-time*2.,vUv.x + time*1.),1.)).rgb;
        if(pos.y >= 1.87){
            pos = vec3(position.x*(sin((position.y - 0.64)*1.27)-0.12),position.y,position.z*(sin((position.y - 0.64)*1.27)-0.12));
        } else{
            pos = vec3(position.x*(sin((position.y/2. -  .01)*.11)+0.79),position.y,position.z*(sin((position.y/2. -  .01)*.11)+0.79));
        }
        pos.xz *= noisetex.r;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( pos, 1.0 );
    }
`,bR=`
#define NUM_OCTAVES 5
#define M_PI 3.1415926535897932384626433832795
uniform vec4 resolution;
varying vec3 vNormal;
uniform sampler2D perlinnoise;
uniform sampler2D sparknoise;
uniform float time;
uniform vec3 color0;
uniform vec3 color1;
uniform vec3 color2;
uniform vec3 color3;
uniform vec3 color4;
uniform vec3 color5;
varying vec3 camPos;
varying vec2 vUv;

float setOpacity(float r, float g, float b, float tonethreshold) {
  float tone = (r + g + b) / 3.0;
  float alpha = 1.0;
  if(tone<tonethreshold) {
    alpha = 0.0;
  }
  return alpha;
}

vec3 rgbcol(vec3 col) {
  return vec3(col.r/255.0,col.g/255.0,col.b/255.0);
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, -s, s, c);
  return m * v;
}

vec2 UnityPolarCoordinates (vec2 UV, vec2 Center, float RadialScale, float LengthScale){
  //https://twitter.com/Cyanilux/status/1123950519133908995/photo/1
  vec2 delta = UV - Center;
  float radius = length(delta) * 2. * RadialScale;
  float angle = atan(delta.x, delta.y) * 1.0/6.28 * LengthScale;
  return vec2(radius, angle);
}

void main() {
  vec2 olduv = gl_FragCoord.xy/resolution.xy ;
  vec2 uv = vUv ; 
  vec2 imguv = uv;
  float scale = 1.;
  olduv *= 0.5 + time; 
  olduv.y = olduv.y ;
  vec2 p = olduv*scale;
  vec4 txt = texture2D(perlinnoise, olduv);
  float gradient = dot(normalize( -camPos ), normalize( vNormal ));
  float pct = distance(vUv,vec2(0.5));

  vec3 rgbcolor0 = rgbcol(color0);
  vec3 rgbcolor1 = rgbcol(color1);
  vec3 rgbcolor2 = rgbcol(color2);
  vec3 rgbcolor5 = rgbcol(color5);

  // set solid background
  float y = smoothstep(0.16,0.525,pct);
  vec3 backcolor = mix(rgbcolor0, rgbcolor5, y);

  gl_FragColor = vec4(backcolor,1.);

  // set polar coords
  vec2 center = vec2(0.5);
  vec2 cor = UnityPolarCoordinates(vec2(vUv.x,vUv.y), center, 1., 1.);

  // set textures
  vec2 newUv = vec2(cor.x + time,cor.x*0.2+cor.y);
  vec3 noisetex = texture2D(perlinnoise,mod(newUv,1.)).rgb;    
  vec3 noisetex2 = texture2D(sparknoise,mod(newUv,1.)).rgb;    


  // set textures tones
  float tone0 =  1. - smoothstep(0.3,0.6,noisetex.r);
  float tone1 =  smoothstep(0.3,0.6,noisetex2.r);


  // set opacity for each tone
  float opacity0 = setOpacity(tone0,tone0,tone0,.29);
  float opacity1 = setOpacity(tone1,tone1,tone1,.49);

  //set final render
  if(opacity1>0.0){
    gl_FragColor = vec4(rgbcolor2,0.)*vec4(opacity1);
  } else if(opacity0>0.0){
    gl_FragColor = vec4(rgbcolor1,0.)*vec4(opacity0);
}   
}
`,PR=`
    varying vec3 vNormal;
    varying vec3 camPos;
    varying vec2 vUv;

    void main() {
    vNormal = normal;
    vUv = uv;
    camPos = cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`,Ec="/threejs-effects/assets/water-min-cc22e63d.jpg",el="/threejs-effects/assets/noise9-f6fe66cd.jpg",LR="/threejs-effects/assets/sparklenoise-634d3faf.jpg";function tl(t){window.uniforms.push(t)}function DR(){const t=new Es;function e(){const o={perlinnoise:{type:"t",value:new Fi().load(Ec)},color4:{value:new I(...options.color3)},time:{type:"f",value:0},noise:{type:"t",value:new Fi().load(el)}},s=new Os(1.11,0,5.3,50,50,!0),a=new Ut({uniforms:o,vertexShader:RR,fragmentShader:CR,transparent:!0,depthWrite:!1,side:bn}),l=new vn(s,a);l.rotation.set(0,0,-Math.PI/2),l.position.set(-4,0,0),l.scale.set(1.5,1.7,1.5),t.add(l),tl(o)}function n(){const o={perlinnoise:{type:"t",value:new Fi().load(Ec)},color4:{value:new I(...options.color4)},time:{type:"f",value:0},noise:{type:"t",value:new Fi().load(el)}},s=new Os(1,0,5.3,50,50,!0),a=new Ut({uniforms:o,vertexShader:Hm,fragmentShader:Bm,transparent:!0,depthWrite:!1,side:bn}),l=new vn(s,a);l.rotation.set(0,0,-Math.PI/2),l.position.set(-4.85,0,0),l.scale.set(2,2,2),t.add(l),tl(o)}function i(){const o={time:{type:"f",value:0},perlinnoise:{type:"t",value:new Fi().load(el)},sparknoise:{type:"t",value:new Fi().load(LR)},color5:{value:new I(...options.color5)},color4:{value:new I(...options.color4)},color3:{value:new I(...options.color3)},color2:{value:new I(...options.color2)},color1:{value:new I(...options.color1)},color0:{value:new I(...options.color0)},resolution:{value:new we(window.width,window.height)}},s=new Od(1,30,30),a=new Ut({uniforms:o,vertexShader:PR,fragmentShader:bR}),l=new vn(s,a);l.scale.set(.78,.78,.78),l.position.set(0,0,0),t.add(l),tl(o)}function r(){const o={perlinnoise:{type:"t",value:new Fi().load(Ec)},color4:{value:new I(...options.color4)},time:{type:"f",value:0},noise:{type:"t",value:new Fi().load(el)}},s=new Os(3,3,3,50,50,!0),a=new Ut({uniforms:o,vertexShader:Hm,fragmentShader:Bm,transparent:!0,depthWrite:!1,side:bn}),l=new vn(s,a);l.rotation.set(0,Math.PI/2,0),l.position.set(0,0,0),l.scale.set(2,1,2),scene.add(l),tl(o)}return e(),n(),i(),r(),t.rotateZ(-Math.PI/2),t.position.y=20,t.scale.set(2,2,2),scene.add(t),t}function UR(){return hR(),ER(),MR(),AR(),DR()}let NR={exposure:2.8,bloomStrength:3.5,bloomRadius:.39,color0:[0,0,0],color1:[81,14,5],color2:[181,156,24],color3:[255,255,255],color4:[200,79,0],color5:[64,27,0]};window.options=NR;window.uniforms=[];let Lf;function IR(){Lf=UR(),n0()}function n0(t=new e0){renderer.render(scene,camera),composer.render();const e=t.getDelta();window.uniforms.forEach(n=>{n.time.value+=e/12}),Lf.position.y>=0&&(Lf.position.y-=e*1),requestAnimationFrame(()=>n0(t))}function FR(){return ye.useEffect(()=>{IR()},[]),en.jsx("div",{className:"flame-container",children:en.jsx("div",{className:"flame-wrapper",children:en.jsx("canvas",{id:"canvas"})})})}const OR=kS([{path:"/",element:en.jsx(GS,{})},{path:"/flame-effect",element:en.jsx(FR,{})}]);function zR(){return en.jsx(IS,{router:OR})}Tc.createRoot(document.getElementById("root")).render(en.jsx(Zm.StrictMode,{children:en.jsx(zR,{})}));
