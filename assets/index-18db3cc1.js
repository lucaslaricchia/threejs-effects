function VS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function WS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ev={exports:{}},Mc={},Tv={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var El=Symbol.for("react.element"),KS=Symbol.for("react.portal"),XS=Symbol.for("react.fragment"),jS=Symbol.for("react.strict_mode"),YS=Symbol.for("react.profiler"),qS=Symbol.for("react.provider"),$S=Symbol.for("react.context"),ZS=Symbol.for("react.forward_ref"),QS=Symbol.for("react.suspense"),JS=Symbol.for("react.memo"),eM=Symbol.for("react.lazy"),pm=Symbol.iterator;function tM(t){return t===null||typeof t!="object"?null:(t=pm&&t[pm]||t["@@iterator"],typeof t=="function"?t:null)}var wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Av=Object.assign,Cv={};function Qo(t,e,n){this.props=t,this.context=e,this.refs=Cv,this.updater=n||wv}Qo.prototype.isReactComponent={};Qo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rv(){}Rv.prototype=Qo.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=Cv,this.updater=n||wv}var kd=Fd.prototype=new Rv;kd.constructor=Fd;Av(kd,Qo.prototype);kd.isPureReactComponent=!0;var mm=Array.isArray,Pv=Object.prototype.hasOwnProperty,zd={current:null},bv={key:!0,ref:!0,__self:!0,__source:!0};function Lv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Pv.call(e,i)&&!bv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:El,type:t,key:s,ref:o,props:r,_owner:zd.current}}function nM(t,e){return{$$typeof:El,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===El}function iM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gm=/\/+/g;function tf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iM(""+t.key):e.toString(36)}function Su(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case El:case KS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+tf(o,0):i,mm(r)?(n="",t!=null&&(n=t.replace(gm,"$&/")+"/"),Su(r,e,n,"",function(u){return u})):r!=null&&(Bd(r)&&(r=nM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",mm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+tf(s,a);o+=Su(s,e,n,l,r)}else if(l=tM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+tf(s,a++),o+=Su(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Il(t,e,n){if(t==null)return t;var i=[],r=0;return Su(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xn={current:null},Mu={transition:null},sM={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:Mu,ReactCurrentOwner:zd};Ve.Children={map:Il,forEach:function(t,e,n){Il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Il(t,function(){e++}),e},toArray:function(t){return Il(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Qo;Ve.Fragment=XS;Ve.Profiler=YS;Ve.PureComponent=Fd;Ve.StrictMode=jS;Ve.Suspense=QS;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sM;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Av({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Pv.call(e,l)&&!bv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:El,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:$S,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qS,_context:t},t.Consumer=t};Ve.createElement=Lv;Ve.createFactory=function(t){var e=Lv.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:ZS,render:t}};Ve.isValidElement=Bd;Ve.lazy=function(t){return{$$typeof:eM,_payload:{_status:-1,_result:t},_init:rM}};Ve.memo=function(t,e){return{$$typeof:JS,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Mu.transition;Mu.transition={};try{t()}finally{Mu.transition=e}};Ve.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ve.useCallback=function(t,e){return xn.current.useCallback(t,e)};Ve.useContext=function(t){return xn.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return xn.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return xn.current.useEffect(t,e)};Ve.useId=function(){return xn.current.useId()};Ve.useImperativeHandle=function(t,e,n){return xn.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return xn.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return xn.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return xn.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return xn.current.useReducer(t,e,n)};Ve.useRef=function(t){return xn.current.useRef(t)};Ve.useState=function(t){return xn.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return xn.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return xn.current.useTransition()};Ve.version="18.2.0";Tv.exports=Ve;var ye=Tv.exports;const Dv=WS(ye),oM=VS({__proto__:null,default:Dv},[ye]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aM=ye,lM=Symbol.for("react.element"),uM=Symbol.for("react.fragment"),cM=Object.prototype.hasOwnProperty,fM=aM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hM={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cM.call(e,i)&&!hM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:lM,type:t,key:s,ref:o,props:r,_owner:fM.current}}Mc.Fragment=uM;Mc.jsx=Uv;Mc.jsxs=Uv;Ev.exports=Mc;var Bt=Ev.exports,vh={},Iv={exports:{}},jn={},Nv={exports:{}},Ov={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,j){var H=D.length;D.push(j);e:for(;0<H;){var N=H-1>>>1,z=D[N];if(0<r(z,j))D[N]=j,D[H]=z,H=N;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],H=D.pop();if(H!==j){D[0]=H;e:for(var N=0,z=D.length,ae=z>>>1;N<ae;){var ie=2*(N+1)-1,le=D[ie],ve=ie+1,Te=D[ve];if(0>r(le,H))ve<z&&0>r(Te,le)?(D[N]=Te,D[ve]=H,N=ve):(D[N]=le,D[ie]=H,N=ie);else if(ve<z&&0>r(Te,H))D[N]=Te,D[ve]=H,N=ve;else break e}}return j}function r(D,j){var H=D.sortIndex-j.sortIndex;return H!==0?H:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,x=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var j=n(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=D)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function y(D){if(g=!1,v(D),!x)if(n(l)!==null)x=!0,Z(M);else{var j=n(u);j!==null&&K(y,j.startTime-D)}}function M(D,j){x=!1,g&&(g=!1,h(R),R=-1),p=!0;var H=d;try{for(v(j),f=n(l);f!==null&&(!(f.expirationTime>j)||D&&!V());){var N=f.callback;if(typeof N=="function"){f.callback=null,d=f.priorityLevel;var z=N(f.expirationTime<=j);j=t.unstable_now(),typeof z=="function"?f.callback=z:f===n(l)&&i(l),v(j)}else i(l);f=n(l)}if(f!==null)var ae=!0;else{var ie=n(u);ie!==null&&K(y,ie.startTime-j),ae=!1}return ae}finally{f=null,d=H,p=!1}}var T=!1,E=null,R=-1,S=5,A=-1;function V(){return!(t.unstable_now()-A<S)}function Y(){if(E!==null){var D=t.unstable_now();A=D;var j=!0;try{j=E(!0,D)}finally{j?I():(T=!1,E=null)}}else T=!1}var I;if(typeof _=="function")I=function(){_(Y)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,k=O.port2;O.port1.onmessage=Y,I=function(){k.postMessage(null)}}else I=function(){m(Y,0)};function Z(D){E=D,T||(T=!0,I())}function K(D,j){R=m(function(){D(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,Z(M))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var H=d;d=j;try{return D()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=d;d=D;try{return j()}finally{d=H}},t.unstable_scheduleCallback=function(D,j,H){var N=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?N+H:N):H=N,D){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=H+z,D={id:c++,callback:j,priorityLevel:D,startTime:H,expirationTime:z,sortIndex:-1},H>N?(D.sortIndex=H,e(u,D),n(l)===null&&D===n(u)&&(g?(h(R),R=-1):g=!0,K(y,H-N))):(D.sortIndex=z,e(l,D),x||p||(x=!0,Z(M))),D},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(D){var j=d;return function(){var H=d;d=j;try{return D.apply(this,arguments)}finally{d=H}}}})(Ov);Nv.exports=Ov;var dM=Nv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=ye,Kn=dM;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kv=new Set,Ya={};function ks(t,e){Fo(t,e),Fo(t+"Capture",e)}function Fo(t,e){for(Ya[t]=e,t=0;t<e.length;t++)kv.add(e[t])}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xh=Object.prototype.hasOwnProperty,pM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_m={},vm={};function mM(t){return xh.call(vm,t)?!0:xh.call(_m,t)?!1:pM.test(t)?vm[t]=!0:(_m[t]=!0,!1)}function gM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _M(t,e,n,i){if(e===null||typeof e>"u"||gM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hd=/[\-:]([a-z])/g;function Gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hd,Gd);$t[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hd,Gd);$t[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hd,Gd);$t[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(_M(e,n,r,i)&&(n=null),i||r===null?mM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pr=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nl=Symbol.for("react.element"),co=Symbol.for("react.portal"),fo=Symbol.for("react.fragment"),Wd=Symbol.for("react.strict_mode"),yh=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Bv=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),Mh=Symbol.for("react.suspense_list"),Xd=Symbol.for("react.memo"),Tr=Symbol.for("react.lazy"),Hv=Symbol.for("react.offscreen"),xm=Symbol.iterator;function aa(t){return t===null||typeof t!="object"?null:(t=xm&&t[xm]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,nf;function Ma(t){if(nf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nf=e&&e[1]||""}return`
`+nf+t}var rf=!1;function sf(t,e){if(!t||rf)return"";rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ma(t):""}function vM(t){switch(t.tag){case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return t=sf(t.type,!1),t;case 11:return t=sf(t.type.render,!1),t;case 1:return t=sf(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fo:return"Fragment";case co:return"Portal";case yh:return"Profiler";case Wd:return"StrictMode";case Sh:return"Suspense";case Mh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Bv:return(t.displayName||"Context")+".Consumer";case zv:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xd:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case Tr:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function xM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===Wd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yM(t){var e=Gv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ol(t){t._valueTracker||(t._valueTracker=yM(t))}function Vv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Gv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ym(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Wv(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function wh(t,e){Wv(t,e);var n=Yr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ah(t,e.type,Yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ah(t,e,n){(e!=="number"||Fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ea=Array.isArray;function Ao(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Yr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Ea(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Yr(n)}}function Kv(t,e){var n=Yr(e.value),i=Yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fl,jv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SM=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(t){SM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),La[e]=La[t]})});function Yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||La.hasOwnProperty(t)&&La[t]?(""+e).trim():e+"px"}function qv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Yv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var MM=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ph(t,e){if(e){if(MM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function bh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lh=null;function jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dh=null,Co=null,Ro=null;function Tm(t){if(t=Al(t)){if(typeof Dh!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Cc(e),Dh(t.stateNode,t.type,e))}}function $v(t){Co?Ro?Ro.push(t):Ro=[t]:Co=t}function Zv(){if(Co){var t=Co,e=Ro;if(Ro=Co=null,Tm(t),e)for(t=0;t<e.length;t++)Tm(e[t])}}function Qv(t,e){return t(e)}function Jv(){}var of=!1;function e0(t,e,n){if(of)return t(e,n);of=!0;try{return Qv(t,e,n)}finally{of=!1,(Co!==null||Ro!==null)&&(Jv(),Zv())}}function $a(t,e){var n=t.stateNode;if(n===null)return null;var i=Cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Uh=!1;if(ar)try{var la={};Object.defineProperty(la,"passive",{get:function(){Uh=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{Uh=!1}function EM(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Da=!1,ku=null,zu=!1,Ih=null,TM={onError:function(t){Da=!0,ku=t}};function wM(t,e,n,i,r,s,o,a,l){Da=!1,ku=null,EM.apply(TM,arguments)}function AM(t,e,n,i,r,s,o,a,l){if(wM.apply(this,arguments),Da){if(Da){var u=ku;Da=!1,ku=null}else throw Error(te(198));zu||(zu=!0,Ih=u)}}function zs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wm(t){if(zs(t)!==t)throw Error(te(188))}function CM(t){var e=t.alternate;if(!e){if(e=zs(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return wm(r),t;if(s===i)return wm(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function n0(t){return t=CM(t),t!==null?i0(t):null}function i0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=i0(t);if(e!==null)return e;t=t.sibling}return null}var r0=Kn.unstable_scheduleCallback,Am=Kn.unstable_cancelCallback,RM=Kn.unstable_shouldYield,PM=Kn.unstable_requestPaint,yt=Kn.unstable_now,bM=Kn.unstable_getCurrentPriorityLevel,Yd=Kn.unstable_ImmediatePriority,s0=Kn.unstable_UserBlockingPriority,Bu=Kn.unstable_NormalPriority,LM=Kn.unstable_LowPriority,o0=Kn.unstable_IdlePriority,Ec=null,Ui=null;function DM(t){if(Ui&&typeof Ui.onCommitFiberRoot=="function")try{Ui.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var Si=Math.clz32?Math.clz32:NM,UM=Math.log,IM=Math.LN2;function NM(t){return t>>>=0,t===0?32:31-(UM(t)/IM|0)|0}var kl=64,zl=4194304;function Ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ta(a):(s&=o,s!==0&&(i=Ta(s)))}else o=n&~r,o!==0?i=Ta(o):s!==0&&(i=Ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Si(e),r=1<<n,i|=t[n],e&=~r;return i}function OM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Si(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=OM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a0(){var t=kl;return kl<<=1,!(kl&4194240)&&(kl=64),t}function af(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Si(e),t[e]=n}function kM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function l0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u0,$d,c0,f0,h0,Oh=!1,Bl=[],Nr=null,Or=null,Fr=null,Za=new Map,Qa=new Map,Cr=[],zM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(t,e){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function ua(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Al(e),e!==null&&$d(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function BM(t,e,n,i,r){switch(e){case"focusin":return Nr=ua(Nr,t,e,n,i,r),!0;case"dragenter":return Or=ua(Or,t,e,n,i,r),!0;case"mouseover":return Fr=ua(Fr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Za.set(s,ua(Za.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qa.set(s,ua(Qa.get(s)||null,t,e,n,i,r)),!0}return!1}function d0(t){var e=ms(t.target);if(e!==null){var n=zs(e);if(n!==null){if(e=n.tag,e===13){if(e=t0(n),e!==null){t.blockedOn=e,h0(t.priority,function(){c0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lh=i,n.target.dispatchEvent(i),Lh=null}else return e=Al(n),e!==null&&$d(e),t.blockedOn=n,!1;e.shift()}return!0}function Rm(t,e,n){Eu(t)&&n.delete(e)}function HM(){Oh=!1,Nr!==null&&Eu(Nr)&&(Nr=null),Or!==null&&Eu(Or)&&(Or=null),Fr!==null&&Eu(Fr)&&(Fr=null),Za.forEach(Rm),Qa.forEach(Rm)}function ca(t,e){t.blockedOn===e&&(t.blockedOn=null,Oh||(Oh=!0,Kn.unstable_scheduleCallback(Kn.unstable_NormalPriority,HM)))}function Ja(t){function e(r){return ca(r,t)}if(0<Bl.length){ca(Bl[0],t);for(var n=1;n<Bl.length;n++){var i=Bl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Nr!==null&&ca(Nr,t),Or!==null&&ca(Or,t),Fr!==null&&ca(Fr,t),Za.forEach(e),Qa.forEach(e),n=0;n<Cr.length;n++)i=Cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)d0(n),n.blockedOn===null&&Cr.shift()}var Po=pr.ReactCurrentBatchConfig,Gu=!0;function GM(t,e,n,i){var r=Qe,s=Po.transition;Po.transition=null;try{Qe=1,Zd(t,e,n,i)}finally{Qe=r,Po.transition=s}}function VM(t,e,n,i){var r=Qe,s=Po.transition;Po.transition=null;try{Qe=4,Zd(t,e,n,i)}finally{Qe=r,Po.transition=s}}function Zd(t,e,n,i){if(Gu){var r=Fh(t,e,n,i);if(r===null)_f(t,e,i,Vu,n),Cm(t,i);else if(BM(r,t,e,n,i))i.stopPropagation();else if(Cm(t,i),e&4&&-1<zM.indexOf(t)){for(;r!==null;){var s=Al(r);if(s!==null&&u0(s),s=Fh(t,e,n,i),s===null&&_f(t,e,i,Vu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else _f(t,e,i,null,n)}}var Vu=null;function Fh(t,e,n,i){if(Vu=null,t=jd(i),t=ms(t),t!==null)if(e=zs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Vu=t,null}function p0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bM()){case Yd:return 1;case s0:return 4;case Bu:case LM:return 16;case o0:return 536870912;default:return 16}default:return 16}}var Pr=null,Qd=null,Tu=null;function m0(){if(Tu)return Tu;var t,e=Qd,n=e.length,i,r="value"in Pr?Pr.value:Pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Tu=r.slice(t,1<i?1-i:void 0)}function wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function Pm(){return!1}function Yn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hl:Pm,this.isPropagationStopped=Pm,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),e}var Jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=Yn(Jo),wl=dt({},Jo,{view:0,detail:0}),WM=Yn(wl),lf,uf,fa,Tc=dt({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(lf=t.screenX-fa.screenX,uf=t.screenY-fa.screenY):uf=lf=0,fa=t),lf)},movementY:function(t){return"movementY"in t?t.movementY:uf}}),bm=Yn(Tc),KM=dt({},Tc,{dataTransfer:0}),XM=Yn(KM),jM=dt({},wl,{relatedTarget:0}),cf=Yn(jM),YM=dt({},Jo,{animationName:0,elapsedTime:0,pseudoElement:0}),qM=Yn(YM),$M=dt({},Jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZM=Yn($M),QM=dt({},Jo,{data:0}),Lm=Yn(QM),JM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tE[t])?!!e[t]:!1}function ep(){return nE}var iE=dt({},wl,{key:function(t){if(t.key){var e=JM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?eE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ep,charCode:function(t){return t.type==="keypress"?wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rE=Yn(iE),sE=dt({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=Yn(sE),oE=dt({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ep}),aE=Yn(oE),lE=dt({},Jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),uE=Yn(lE),cE=dt({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fE=Yn(cE),hE=[9,13,27,32],tp=ar&&"CompositionEvent"in window,Ua=null;ar&&"documentMode"in document&&(Ua=document.documentMode);var dE=ar&&"TextEvent"in window&&!Ua,g0=ar&&(!tp||Ua&&8<Ua&&11>=Ua),Um=String.fromCharCode(32),Im=!1;function _0(t,e){switch(t){case"keyup":return hE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ho=!1;function pE(t,e){switch(t){case"compositionend":return v0(e);case"keypress":return e.which!==32?null:(Im=!0,Um);case"textInput":return t=e.data,t===Um&&Im?null:t;default:return null}}function mE(t,e){if(ho)return t==="compositionend"||!tp&&_0(t,e)?(t=m0(),Tu=Qd=Pr=null,ho=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g0&&e.locale!=="ko"?null:e.data;default:return null}}var gE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gE[t.type]:e==="textarea"}function x0(t,e,n,i){$v(i),e=Wu(e,"onChange"),0<e.length&&(n=new Jd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ia=null,el=null;function _E(t){b0(t,0)}function wc(t){var e=go(t);if(Vv(e))return t}function vE(t,e){if(t==="change")return e}var y0=!1;if(ar){var ff;if(ar){var hf="oninput"in document;if(!hf){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),hf=typeof Om.oninput=="function"}ff=hf}else ff=!1;y0=ff&&(!document.documentMode||9<document.documentMode)}function Fm(){Ia&&(Ia.detachEvent("onpropertychange",S0),el=Ia=null)}function S0(t){if(t.propertyName==="value"&&wc(el)){var e=[];x0(e,el,t,jd(t)),e0(_E,e)}}function xE(t,e,n){t==="focusin"?(Fm(),Ia=e,el=n,Ia.attachEvent("onpropertychange",S0)):t==="focusout"&&Fm()}function yE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wc(el)}function SE(t,e){if(t==="click")return wc(e)}function ME(t,e){if(t==="input"||t==="change")return wc(e)}function EE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ti=typeof Object.is=="function"?Object.is:EE;function tl(t,e){if(Ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!xh.call(e,r)||!Ti(t[r],e[r]))return!1}return!0}function km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zm(t,e){var n=km(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=km(n)}}function M0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?M0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E0(){for(var t=window,e=Fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fu(t.document)}return e}function np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function TE(t){var e=E0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&M0(n.ownerDocument.documentElement,n)){if(i!==null&&np(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=zm(n,s);var o=zm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wE=ar&&"documentMode"in document&&11>=document.documentMode,po=null,kh=null,Na=null,zh=!1;function Bm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||po==null||po!==Fu(i)||(i=po,"selectionStart"in i&&np(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Na&&tl(Na,i)||(Na=i,i=Wu(kh,"onSelect"),0<i.length&&(e=new Jd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=po)))}function Gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mo={animationend:Gl("Animation","AnimationEnd"),animationiteration:Gl("Animation","AnimationIteration"),animationstart:Gl("Animation","AnimationStart"),transitionend:Gl("Transition","TransitionEnd")},df={},T0={};ar&&(T0=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function Ac(t){if(df[t])return df[t];if(!mo[t])return t;var e=mo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in T0)return df[t]=e[n];return t}var w0=Ac("animationend"),A0=Ac("animationiteration"),C0=Ac("animationstart"),R0=Ac("transitionend"),P0=new Map,Hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(t,e){P0.set(t,e),ks(e,[t])}for(var pf=0;pf<Hm.length;pf++){var mf=Hm[pf],AE=mf.toLowerCase(),CE=mf[0].toUpperCase()+mf.slice(1);Qr(AE,"on"+CE)}Qr(w0,"onAnimationEnd");Qr(A0,"onAnimationIteration");Qr(C0,"onAnimationStart");Qr("dblclick","onDoubleClick");Qr("focusin","onFocus");Qr("focusout","onBlur");Qr(R0,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);ks("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ks("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ks("onBeforeInput",["compositionend","keypress","textInput","paste"]);ks("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ks("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ks("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RE=new Set("cancel close invalid load scroll toggle".split(" ").concat(wa));function Gm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,AM(i,e,void 0,t),t.currentTarget=null}function b0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gm(r,a,u),s=l}}}if(zu)throw t=Ih,zu=!1,Ih=null,t}function ot(t,e){var n=e[Wh];n===void 0&&(n=e[Wh]=new Set);var i=t+"__bubble";n.has(i)||(L0(e,t,2,!1),n.add(i))}function gf(t,e,n){var i=0;e&&(i|=4),L0(n,t,i,e)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function nl(t){if(!t[Vl]){t[Vl]=!0,kv.forEach(function(n){n!=="selectionchange"&&(RE.has(n)||gf(n,!1,t),gf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vl]||(e[Vl]=!0,gf("selectionchange",!1,e))}}function L0(t,e,n,i){switch(p0(e)){case 1:var r=GM;break;case 4:r=VM;break;default:r=Zd}n=r.bind(null,e,n,t),r=void 0,!Uh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function _f(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ms(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}e0(function(){var u=s,c=jd(n),f=[];e:{var d=P0.get(t);if(d!==void 0){var p=Jd,x=t;switch(t){case"keypress":if(wu(n)===0)break e;case"keydown":case"keyup":p=rE;break;case"focusin":x="focus",p=cf;break;case"focusout":x="blur",p=cf;break;case"beforeblur":case"afterblur":p=cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=XM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=aE;break;case w0:case A0:case C0:p=qM;break;case R0:p=uE;break;case"scroll":p=WM;break;case"wheel":p=fE;break;case"copy":case"cut":case"paste":p=ZM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dm}var g=(e&4)!==0,m=!g&&t==="scroll",h=g?d!==null?d+"Capture":null:d;g=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,h!==null&&(y=$a(_,h),y!=null&&g.push(il(_,y,v)))),m)break;_=_.return}0<g.length&&(d=new p(d,x,null,n,c),f.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Lh&&(x=n.relatedTarget||n.fromElement)&&(ms(x)||x[lr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=u,x=x?ms(x):null,x!==null&&(m=zs(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(g=bm,y="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(g=Dm,y="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?d:go(p),v=x==null?d:go(x),d=new g(y,_+"leave",p,n,c),d.target=m,d.relatedTarget=v,y=null,ms(c)===u&&(g=new g(h,_+"enter",x,n,c),g.target=v,g.relatedTarget=m,y=g),m=y,p&&x)t:{for(g=p,h=x,_=0,v=g;v;v=Gs(v))_++;for(v=0,y=h;y;y=Gs(y))v++;for(;0<_-v;)g=Gs(g),_--;for(;0<v-_;)h=Gs(h),v--;for(;_--;){if(g===h||h!==null&&g===h.alternate)break t;g=Gs(g),h=Gs(h)}g=null}else g=null;p!==null&&Vm(f,d,p,g,!1),x!==null&&m!==null&&Vm(f,m,x,g,!0)}}e:{if(d=u?go(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var M=vE;else if(Nm(d))if(y0)M=ME;else{M=yE;var T=xE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=SE);if(M&&(M=M(t,u))){x0(f,M,n,c);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Ah(d,"number",d.value)}switch(T=u?go(u):window,t){case"focusin":(Nm(T)||T.contentEditable==="true")&&(po=T,kh=u,Na=null);break;case"focusout":Na=kh=po=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,Bm(f,n,c);break;case"selectionchange":if(wE)break;case"keydown":case"keyup":Bm(f,n,c)}var E;if(tp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ho?_0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(g0&&n.locale!=="ko"&&(ho||R!=="onCompositionStart"?R==="onCompositionEnd"&&ho&&(E=m0()):(Pr=c,Qd="value"in Pr?Pr.value:Pr.textContent,ho=!0)),T=Wu(u,R),0<T.length&&(R=new Lm(R,t,null,n,c),f.push({event:R,listeners:T}),E?R.data=E:(E=v0(n),E!==null&&(R.data=E)))),(E=dE?pE(t,n):mE(t,n))&&(u=Wu(u,"onBeforeInput"),0<u.length&&(c=new Lm("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=E))}b0(f,e)})}function il(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$a(t,n),s!=null&&i.unshift(il(t,s,r)),s=$a(t,e),s!=null&&i.push(il(t,s,r))),t=t.return}return i}function Gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=$a(n,s),l!=null&&o.unshift(il(n,l,a))):r||(l=$a(n,s),l!=null&&o.push(il(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var PE=/\r\n?/g,bE=/\u0000|\uFFFD/g;function Wm(t){return(typeof t=="string"?t:""+t).replace(PE,`
`).replace(bE,"")}function Wl(t,e,n){if(e=Wm(e),Wm(t)!==e&&n)throw Error(te(425))}function Ku(){}var Bh=null,Hh=null;function Gh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vh=typeof setTimeout=="function"?setTimeout:void 0,LE=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,DE=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(UE)}:Vh;function UE(t){setTimeout(function(){throw t})}function vf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ja(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),Pi="__reactFiber$"+ea,rl="__reactProps$"+ea,lr="__reactContainer$"+ea,Wh="__reactEvents$"+ea,IE="__reactListeners$"+ea,NE="__reactHandles$"+ea;function ms(t){var e=t[Pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[lr]||n[Pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Xm(t);t!==null;){if(n=t[Pi])return n;t=Xm(t)}return e}t=n,n=t.parentNode}return null}function Al(t){return t=t[Pi]||t[lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Cc(t){return t[rl]||null}var Kh=[],_o=-1;function Jr(t){return{current:t}}function at(t){0>_o||(t.current=Kh[_o],Kh[_o]=null,_o--)}function nt(t,e){_o++,Kh[_o]=t.current,t.current=e}var qr={},fn=Jr(qr),An=Jr(!1),Rs=qr;function ko(t,e){var n=t.type.contextTypes;if(!n)return qr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Cn(t){return t=t.childContextTypes,t!=null}function Xu(){at(An),at(fn)}function jm(t,e,n){if(fn.current!==qr)throw Error(te(168));nt(fn,e),nt(An,n)}function D0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,xM(t)||"Unknown",r));return dt({},n,i)}function ju(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qr,Rs=fn.current,nt(fn,t),nt(An,An.current),!0}function Ym(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=D0(t,e,Rs),i.__reactInternalMemoizedMergedChildContext=t,at(An),at(fn),nt(fn,t)):at(An),nt(An,n)}var Qi=null,Rc=!1,xf=!1;function U0(t){Qi===null?Qi=[t]:Qi.push(t)}function OE(t){Rc=!0,U0(t)}function es(){if(!xf&&Qi!==null){xf=!0;var t=0,e=Qe;try{var n=Qi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Qi=null,Rc=!1}catch(r){throw Qi!==null&&(Qi=Qi.slice(t+1)),r0(Yd,es),r}finally{Qe=e,xf=!1}}return null}var vo=[],xo=0,Yu=null,qu=0,ei=[],ti=0,Ps=null,er=1,tr="";function cs(t,e){vo[xo++]=qu,vo[xo++]=Yu,Yu=t,qu=e}function I0(t,e,n){ei[ti++]=er,ei[ti++]=tr,ei[ti++]=Ps,Ps=t;var i=er;t=tr;var r=32-Si(i)-1;i&=~(1<<r),n+=1;var s=32-Si(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,er=1<<32-Si(e)+r|n<<r|i,tr=s+t}else er=1<<s|n<<r|i,tr=t}function ip(t){t.return!==null&&(cs(t,1),I0(t,1,0))}function rp(t){for(;t===Yu;)Yu=vo[--xo],vo[xo]=null,qu=vo[--xo],vo[xo]=null;for(;t===Ps;)Ps=ei[--ti],ei[ti]=null,tr=ei[--ti],ei[ti]=null,er=ei[--ti],ei[ti]=null}var Gn=null,Bn=null,lt=!1,_i=null;function N0(t,e){var n=ni(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gn=t,Bn=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ps!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ni(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gn=t,Bn=null,!0):!1;default:return!1}}function Xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jh(t){if(lt){var e=Bn;if(e){var n=e;if(!qm(t,e)){if(Xh(t))throw Error(te(418));e=kr(n.nextSibling);var i=Gn;e&&qm(t,e)?N0(i,n):(t.flags=t.flags&-4097|2,lt=!1,Gn=t)}}else{if(Xh(t))throw Error(te(418));t.flags=t.flags&-4097|2,lt=!1,Gn=t}}}function $m(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gn=t}function Kl(t){if(t!==Gn)return!1;if(!lt)return $m(t),lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Gh(t.type,t.memoizedProps)),e&&(e=Bn)){if(Xh(t))throw O0(),Error(te(418));for(;e;)N0(t,e),e=kr(e.nextSibling)}if($m(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=Gn?kr(t.stateNode.nextSibling):null;return!0}function O0(){for(var t=Bn;t;)t=kr(t.nextSibling)}function zo(){Bn=Gn=null,lt=!1}function sp(t){_i===null?_i=[t]:_i.push(t)}var FE=pr.ReactCurrentBatchConfig;function mi(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var $u=Jr(null),Zu=null,yo=null,op=null;function ap(){op=yo=Zu=null}function lp(t){var e=$u.current;at($u),t._currentValue=e}function Yh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bo(t,e){Zu=t,op=yo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function ai(t){var e=t._currentValue;if(op!==t)if(t={context:t,memoizedValue:e,next:null},yo===null){if(Zu===null)throw Error(te(308));yo=t,Zu.dependencies={lanes:0,firstContext:t}}else yo=yo.next=t;return e}var gs=null;function up(t){gs===null?gs=[t]:gs.push(t)}function F0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,up(e)):(n.next=r.next,r.next=n),e.interleaved=n,ur(t,i)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wr=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function rr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ur(t,n)}return r=i.interleaved,r===null?(e.next=e,up(i)):(e.next=r.next,r.next=e),i.interleaved=e,ur(t,n)}function Au(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qd(t,n)}}function Zm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qu(t,e,n,i){var r=t.updateQueue;wr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,g=a;switch(d=e,p=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){f=x.call(p,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,d=typeof x=="function"?x.call(p,f,d):x,d==null)break e;f=dt({},f,d);break e;case 2:wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ls|=o,t.lanes=o,t.memoizedState=f}}function Qm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var z0=new Fv.Component().refs;function qh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pc={isMounted:function(t){return(t=t._reactInternals)?zs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=vn(),r=Hr(t),s=rr(i,r);s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,r),e!==null&&(Mi(e,t,r,i),Au(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=vn(),r=Hr(t),s=rr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zr(t,s,r),e!==null&&(Mi(e,t,r,i),Au(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),i=Hr(t),r=rr(n,i);r.tag=2,e!=null&&(r.callback=e),e=zr(t,r,i),e!==null&&(Mi(e,t,i,n),Au(e,t,i))}};function Jm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!tl(n,i)||!tl(r,s):!0}function B0(t,e,n){var i=!1,r=qr,s=e.contextType;return typeof s=="object"&&s!==null?s=ai(s):(r=Cn(e)?Rs:fn.current,i=e.contextTypes,s=(i=i!=null)?ko(t,r):qr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function eg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function $h(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=z0,cp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ai(s):(s=Cn(e)?Rs:fn.current,r.context=ko(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Pc.enqueueReplaceState(r,r.state,null),Qu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===z0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Xl(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tg(t){var e=t._init;return e(t._payload)}function H0(t){function e(h,_){if(t){var v=h.deletions;v===null?(h.deletions=[_],h.flags|=16):v.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Gr(h,_),h.index=0,h.sibling=null,h}function s(h,_,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<_?(h.flags|=2,_):v):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,v,y){return _===null||_.tag!==6?(_=Af(v,h.mode,y),_.return=h,_):(_=r(_,v),_.return=h,_)}function l(h,_,v,y){var M=v.type;return M===fo?c(h,_,v.props.children,y,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Tr&&tg(M)===_.type)?(y=r(_,v.props),y.ref=ha(h,_,v),y.return=h,y):(y=Du(v.type,v.key,v.props,null,h.mode,y),y.ref=ha(h,_,v),y.return=h,y)}function u(h,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Cf(v,h.mode,y),_.return=h,_):(_=r(_,v.children||[]),_.return=h,_)}function c(h,_,v,y,M){return _===null||_.tag!==7?(_=ys(v,h.mode,y,M),_.return=h,_):(_=r(_,v),_.return=h,_)}function f(h,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Af(""+_,h.mode,v),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Nl:return v=Du(_.type,_.key,_.props,null,h.mode,v),v.ref=ha(h,null,_),v.return=h,v;case co:return _=Cf(_,h.mode,v),_.return=h,_;case Tr:var y=_._init;return f(h,y(_._payload),v)}if(Ea(_)||aa(_))return _=ys(_,h.mode,v,null),_.return=h,_;Xl(h,_)}return null}function d(h,_,v,y){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(h,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Nl:return v.key===M?l(h,_,v,y):null;case co:return v.key===M?u(h,_,v,y):null;case Tr:return M=v._init,d(h,_,M(v._payload),y)}if(Ea(v)||aa(v))return M!==null?null:c(h,_,v,y,null);Xl(h,v)}return null}function p(h,_,v,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(v)||null,a(_,h,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Nl:return h=h.get(y.key===null?v:y.key)||null,l(_,h,y,M);case co:return h=h.get(y.key===null?v:y.key)||null,u(_,h,y,M);case Tr:var T=y._init;return p(h,_,v,T(y._payload),M)}if(Ea(y)||aa(y))return h=h.get(v)||null,c(_,h,y,M,null);Xl(_,y)}return null}function x(h,_,v,y){for(var M=null,T=null,E=_,R=_=0,S=null;E!==null&&R<v.length;R++){E.index>R?(S=E,E=null):S=E.sibling;var A=d(h,E,v[R],y);if(A===null){E===null&&(E=S);break}t&&E&&A.alternate===null&&e(h,E),_=s(A,_,R),T===null?M=A:T.sibling=A,T=A,E=S}if(R===v.length)return n(h,E),lt&&cs(h,R),M;if(E===null){for(;R<v.length;R++)E=f(h,v[R],y),E!==null&&(_=s(E,_,R),T===null?M=E:T.sibling=E,T=E);return lt&&cs(h,R),M}for(E=i(h,E);R<v.length;R++)S=p(E,h,R,v[R],y),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?R:S.key),_=s(S,_,R),T===null?M=S:T.sibling=S,T=S);return t&&E.forEach(function(V){return e(h,V)}),lt&&cs(h,R),M}function g(h,_,v,y){var M=aa(v);if(typeof M!="function")throw Error(te(150));if(v=M.call(v),v==null)throw Error(te(151));for(var T=M=null,E=_,R=_=0,S=null,A=v.next();E!==null&&!A.done;R++,A=v.next()){E.index>R?(S=E,E=null):S=E.sibling;var V=d(h,E,A.value,y);if(V===null){E===null&&(E=S);break}t&&E&&V.alternate===null&&e(h,E),_=s(V,_,R),T===null?M=V:T.sibling=V,T=V,E=S}if(A.done)return n(h,E),lt&&cs(h,R),M;if(E===null){for(;!A.done;R++,A=v.next())A=f(h,A.value,y),A!==null&&(_=s(A,_,R),T===null?M=A:T.sibling=A,T=A);return lt&&cs(h,R),M}for(E=i(h,E);!A.done;R++,A=v.next())A=p(E,h,R,A.value,y),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?R:A.key),_=s(A,_,R),T===null?M=A:T.sibling=A,T=A);return t&&E.forEach(function(Y){return e(h,Y)}),lt&&cs(h,R),M}function m(h,_,v,y){if(typeof v=="object"&&v!==null&&v.type===fo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Nl:e:{for(var M=v.key,T=_;T!==null;){if(T.key===M){if(M=v.type,M===fo){if(T.tag===7){n(h,T.sibling),_=r(T,v.props.children),_.return=h,h=_;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Tr&&tg(M)===T.type){n(h,T.sibling),_=r(T,v.props),_.ref=ha(h,T,v),_.return=h,h=_;break e}n(h,T);break}else e(h,T);T=T.sibling}v.type===fo?(_=ys(v.props.children,h.mode,y,v.key),_.return=h,h=_):(y=Du(v.type,v.key,v.props,null,h.mode,y),y.ref=ha(h,_,v),y.return=h,h=y)}return o(h);case co:e:{for(T=v.key;_!==null;){if(_.key===T)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(h,_.sibling),_=r(_,v.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Cf(v,h.mode,y),_.return=h,h=_}return o(h);case Tr:return T=v._init,m(h,_,T(v._payload),y)}if(Ea(v))return x(h,_,v,y);if(aa(v))return g(h,_,v,y);Xl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,v),_.return=h,h=_):(n(h,_),_=Af(v,h.mode,y),_.return=h,h=_),o(h)):n(h,_)}return m}var Bo=H0(!0),G0=H0(!1),Cl={},Ii=Jr(Cl),sl=Jr(Cl),ol=Jr(Cl);function _s(t){if(t===Cl)throw Error(te(174));return t}function fp(t,e){switch(nt(ol,e),nt(sl,t),nt(Ii,Cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rh(e,t)}at(Ii),nt(Ii,e)}function Ho(){at(Ii),at(sl),at(ol)}function V0(t){_s(ol.current);var e=_s(Ii.current),n=Rh(e,t.type);e!==n&&(nt(sl,t),nt(Ii,n))}function hp(t){sl.current===t&&(at(Ii),at(sl))}var ut=Jr(0);function Ju(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yf=[];function dp(){for(var t=0;t<yf.length;t++)yf[t]._workInProgressVersionPrimary=null;yf.length=0}var Cu=pr.ReactCurrentDispatcher,Sf=pr.ReactCurrentBatchConfig,bs=0,ht=null,Lt=null,zt=null,ec=!1,Oa=!1,al=0,kE=0;function Zt(){throw Error(te(321))}function pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ti(t[n],e[n]))return!1;return!0}function mp(t,e,n,i,r,s){if(bs=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cu.current=t===null||t.memoizedState===null?GE:VE,t=n(i,r),Oa){s=0;do{if(Oa=!1,al=0,25<=s)throw Error(te(301));s+=1,zt=Lt=null,e.updateQueue=null,Cu.current=WE,t=n(i,r)}while(Oa)}if(Cu.current=tc,e=Lt!==null&&Lt.next!==null,bs=0,zt=Lt=ht=null,ec=!1,e)throw Error(te(300));return t}function gp(){var t=al!==0;return al=0,t}function Ci(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?ht.memoizedState=zt=t:zt=zt.next=t,zt}function li(){if(Lt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=zt===null?ht.memoizedState:zt.next;if(e!==null)zt=e,Lt=t;else{if(t===null)throw Error(te(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},zt===null?ht.memoizedState=zt=t:zt=zt.next=t}return zt}function ll(t,e){return typeof e=="function"?e(t):e}function Mf(t){var e=li(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((bs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,ht.lanes|=c,Ls|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Ti(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Ls|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ef(t){var e=li(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ti(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function W0(){}function K0(t,e){var n=ht,i=li(),r=e(),s=!Ti(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,_p(Y0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,ul(9,j0.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(te(349));bs&30||X0(n,e,r)}return r}function X0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function j0(t,e,n,i){e.value=n,e.getSnapshot=i,q0(e)&&$0(t)}function Y0(t,e,n){return n(function(){q0(e)&&$0(t)})}function q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ti(t,n)}catch{return!0}}function $0(t){var e=ur(t,1);e!==null&&Mi(e,t,1,-1)}function ng(t){var e=Ci();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ll,lastRenderedState:t},e.queue=t,t=t.dispatch=HE.bind(null,ht,t),[e.memoizedState,t]}function ul(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Z0(){return li().memoizedState}function Ru(t,e,n,i){var r=Ci();ht.flags|=t,r.memoizedState=ul(1|e,n,void 0,i===void 0?null:i)}function bc(t,e,n,i){var r=li();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&pp(i,o.deps)){r.memoizedState=ul(e,n,s,i);return}}ht.flags|=t,r.memoizedState=ul(1|e,n,s,i)}function ig(t,e){return Ru(8390656,8,t,e)}function _p(t,e){return bc(2048,8,t,e)}function Q0(t,e){return bc(4,2,t,e)}function J0(t,e){return bc(4,4,t,e)}function ex(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function tx(t,e,n){return n=n!=null?n.concat([t]):null,bc(4,4,ex.bind(null,e,t),n)}function vp(){}function nx(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function ix(t,e){var n=li();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&pp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function rx(t,e,n){return bs&21?(Ti(n,e)||(n=a0(),ht.lanes|=n,Ls|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function zE(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Sf.transition;Sf.transition={};try{t(!1),e()}finally{Qe=n,Sf.transition=i}}function sx(){return li().memoizedState}function BE(t,e,n){var i=Hr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ox(t))ax(e,n);else if(n=F0(t,e,n,i),n!==null){var r=vn();Mi(n,t,i,r),lx(n,e,i)}}function HE(t,e,n){var i=Hr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ox(t))ax(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ti(a,o)){var l=e.interleaved;l===null?(r.next=r,up(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=F0(t,e,r,i),n!==null&&(r=vn(),Mi(n,t,i,r),lx(n,e,i))}}function ox(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function ax(t,e){Oa=ec=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function lx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qd(t,n)}}var tc={readContext:ai,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},GE={readContext:ai,useCallback:function(t,e){return Ci().memoizedState=[t,e===void 0?null:e],t},useContext:ai,useEffect:ig,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ru(4194308,4,ex.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ru(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ru(4,2,t,e)},useMemo:function(t,e){var n=Ci();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ci();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=BE.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Ci();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:vp,useDeferredValue:function(t){return Ci().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=zE.bind(null,t[1]),Ci().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Ci();if(lt){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Gt===null)throw Error(te(349));bs&30||X0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ig(Y0.bind(null,i,s,t),[t]),i.flags|=2048,ul(9,j0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ci(),e=Gt.identifierPrefix;if(lt){var n=tr,i=er;n=(i&~(1<<32-Si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=al++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VE={readContext:ai,useCallback:nx,useContext:ai,useEffect:_p,useImperativeHandle:tx,useInsertionEffect:Q0,useLayoutEffect:J0,useMemo:ix,useReducer:Mf,useRef:Z0,useState:function(){return Mf(ll)},useDebugValue:vp,useDeferredValue:function(t){var e=li();return rx(e,Lt.memoizedState,t)},useTransition:function(){var t=Mf(ll)[0],e=li().memoizedState;return[t,e]},useMutableSource:W0,useSyncExternalStore:K0,useId:sx,unstable_isNewReconciler:!1},WE={readContext:ai,useCallback:nx,useContext:ai,useEffect:_p,useImperativeHandle:tx,useInsertionEffect:Q0,useLayoutEffect:J0,useMemo:ix,useReducer:Ef,useRef:Z0,useState:function(){return Ef(ll)},useDebugValue:vp,useDeferredValue:function(t){var e=li();return Lt===null?e.memoizedState=t:rx(e,Lt.memoizedState,t)},useTransition:function(){var t=Ef(ll)[0],e=li().memoizedState;return[t,e]},useMutableSource:W0,useSyncExternalStore:K0,useId:sx,unstable_isNewReconciler:!1};function Go(t,e){try{var n="",i=e;do n+=vM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Tf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KE=typeof WeakMap=="function"?WeakMap:Map;function ux(t,e,n){n=rr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ic||(ic=!0,ad=i),Zh(t,e)},n}function cx(t,e,n){n=rr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zh(t,e),typeof i!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new KE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sT.bind(null,t,e,n),e.then(t,t))}function sg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function og(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=rr(-1,1),e.tag=2,zr(n,e,1))),n.lanes|=1),t)}var XE=pr.ReactCurrentOwner,En=!1;function gn(t,e,n,i){e.child=t===null?G0(e,null,n,i):Bo(e,t.child,n,i)}function ag(t,e,n,i,r){n=n.render;var s=e.ref;return bo(e,r),i=mp(t,e,n,i,s,r),n=gp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cr(t,e,r)):(lt&&n&&ip(e),e.flags|=1,gn(t,e,i,r),e.child)}function lg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,fx(t,e,s,i,r)):(t=Du(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:tl,n(o,i)&&t.ref===e.ref)return cr(t,e,r)}return e.flags|=1,t=Gr(s,i),t.ref=e.ref,t.return=e,e.child=t}function fx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(tl(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,cr(t,e,r)}return Qh(t,e,n,i,r)}function hx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Mo,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Mo,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Mo,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Mo,Fn),Fn|=i;return gn(t,e,r,n),e.child}function dx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qh(t,e,n,i,r){var s=Cn(n)?Rs:fn.current;return s=ko(e,s),bo(e,r),n=mp(t,e,n,i,s,r),i=gp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,cr(t,e,r)):(lt&&i&&ip(e),e.flags|=1,gn(t,e,n,r),e.child)}function ug(t,e,n,i,r){if(Cn(n)){var s=!0;ju(e)}else s=!1;if(bo(e,r),e.stateNode===null)Pu(t,e),B0(e,n,i),$h(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ai(u):(u=Cn(n)?Rs:fn.current,u=ko(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&eg(e,o,i,u),wr=!1;var d=e.memoizedState;o.state=d,Qu(e,i,o,r),l=e.memoizedState,a!==i||d!==l||An.current||wr?(typeof c=="function"&&(qh(e,n,c,i),l=e.memoizedState),(a=wr||Jm(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,k0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mi(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ai(l):(l=Cn(n)?Rs:fn.current,l=ko(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&eg(e,o,i,l),wr=!1,d=e.memoizedState,o.state=d,Qu(e,i,o,r);var x=e.memoizedState;a!==f||d!==x||An.current||wr?(typeof p=="function"&&(qh(e,n,p,i),x=e.memoizedState),(u=wr||Jm(e,n,u,i,d,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Jh(t,e,n,i,s,r)}function Jh(t,e,n,i,r,s){dx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ym(e,n,!1),cr(t,e,s);i=e.stateNode,XE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Bo(e,t.child,null,s),e.child=Bo(e,null,a,s)):gn(t,e,a,s),e.memoizedState=i.state,r&&Ym(e,n,!0),e.child}function px(t){var e=t.stateNode;e.pendingContext?jm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jm(t,e.context,!1),fp(t,e.containerInfo)}function cg(t,e,n,i,r){return zo(),sp(r),e.flags|=256,gn(t,e,n,i),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function mx(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ut,r&1),t===null)return jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,i,0,null),t=ys(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=td(n),e.memoizedState=ed,t):xp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Gr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Gr(a,s):(s=ys(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ed,i}return s=t.child,t=s.sibling,i=Gr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xp(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jl(t,e,n,i){return i!==null&&sp(i),Bo(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Tf(Error(te(422))),jl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),s=ys(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Bo(e,t.child,null,o),e.child.memoizedState=td(o),e.memoizedState=ed,s);if(!(e.mode&1))return jl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Tf(s,i,void 0),jl(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ur(t,r),Mi(i,t,r,-1))}return wp(),i=Tf(Error(te(421))),jl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Bn=kr(r.nextSibling),Gn=e,lt=!0,_i=null,t!==null&&(ei[ti++]=er,ei[ti++]=tr,ei[ti++]=Ps,er=t.id,tr=t.overflow,Ps=e),e=xp(e,i.children),e.flags|=4096,e)}function fg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yh(t.return,e,n)}function wf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function gx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(gn(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,n,e);else if(t.tag===19)fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ju(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ju(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wf(e,!0,n,null,s);break;case"together":wf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function cr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ls|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function YE(t,e,n){switch(e.tag){case 3:px(e),zo();break;case 5:V0(e);break;case 1:Cn(e.type)&&ju(e);break;case 4:fp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt($u,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?mx(t,e,n):(nt(ut,ut.current&1),t=cr(t,e,n),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return gx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,hx(t,e,n)}return cr(t,e,n)}var _x,nd,vx,xx;_x=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};vx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_s(Ii.current);var s=null;switch(n){case"input":r=Th(t,r),i=Th(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=Ch(t,r),i=Ch(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ku)}Ph(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ya.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ot("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};xx=function(t,e,n,i){n!==i&&(e.flags|=4)};function da(t,e){if(!lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qE(t,e,n){var i=e.pendingProps;switch(rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return Cn(e.type)&&Xu(),Qt(e),null;case 3:return i=e.stateNode,Ho(),at(An),at(fn),dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_i!==null&&(cd(_i),_i=null))),nd(t,e),Qt(e),null;case 5:hp(e);var r=_s(ol.current);if(n=e.type,t!==null&&e.stateNode!=null)vx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Qt(e),null}if(t=_s(Ii.current),Kl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Pi]=e,i[rl]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<wa.length;r++)ot(wa[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":ym(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":Mm(i,s),ot("invalid",i)}Ph(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",""+a]):Ya.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":Ol(i),Sm(i,s,!0);break;case"textarea":Ol(i),Em(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ku)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Pi]=e,t[rl]=i,_x(t,e,!1,!1),e.stateNode=t;e:{switch(o=bh(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<wa.length;r++)ot(wa[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":ym(t,i),r=Th(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":Mm(t,i),r=Ch(t,i),ot("invalid",t);break;default:r=i}Ph(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&jv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qa(t,l):typeof l=="number"&&qa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ot("scroll",t):l!=null&&Vd(t,s,l,o))}switch(n){case"input":Ol(t),Sm(t,i,!1);break;case"textarea":Ol(t),Em(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Yr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ao(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ao(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ku)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)xx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=_s(ol.current),_s(Ii.current),Kl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Pi]=e,(s=i.nodeValue!==n)&&(t=Gn,t!==null))switch(t.tag){case 3:Wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Pi]=e,e.stateNode=i}return Qt(e),null;case 13:if(at(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&Bn!==null&&e.mode&1&&!(e.flags&128))O0(),zo(),e.flags|=98560,s=!1;else if(s=Kl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Pi]=e}else zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else _i!==null&&(cd(_i),_i=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Ut===0&&(Ut=3):wp())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Ho(),nd(t,e),t===null&&nl(e.stateNode.containerInfo),Qt(e),null;case 10:return lp(e.type._context),Qt(e),null;case 17:return Cn(e.type)&&Xu(),Qt(e),null;case 19:if(at(ut),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)da(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ju(t),o!==null){for(e.flags|=128,da(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Vo&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ju(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),da(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return Qt(e),null}else 2*yt()-s.renderingStartTime>Vo&&n!==1073741824&&(e.flags|=128,i=!0,da(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ut.current,nt(ut,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Tp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function $E(t,e){switch(rp(e),e.tag){case 1:return Cn(e.type)&&Xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),at(An),at(fn),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hp(e),null;case 13:if(at(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(ut),null;case 4:return Ho(),null;case 10:return lp(e.type._context),null;case 22:case 23:return Tp(),null;case 24:return null;default:return null}}var Yl=!1,tn=!1,ZE=typeof WeakSet=="function"?WeakSet:Set,me=null;function So(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function id(t,e,n){try{n()}catch(i){mt(t,e,i)}}var hg=!1;function QE(t,e){if(Bh=Gu,t=E0(),np(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hh={focusedElem:t,selectionRange:n},Gu=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,m=x.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:mi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){mt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return x=hg,hg=!1,x}function Fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&id(e,n,s)}r=r.next}while(r!==i)}}function Lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function yx(t){var e=t.alternate;e!==null&&(t.alternate=null,yx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pi],delete e[rl],delete e[Wh],delete e[IE],delete e[NE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sx(t){return t.tag===5||t.tag===3||t.tag===4}function dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ku));else if(i!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}function od(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var Xt=null,gi=!1;function gr(t,e,n){for(n=n.child;n!==null;)Mx(t,e,n),n=n.sibling}function Mx(t,e,n){if(Ui&&typeof Ui.onCommitFiberUnmount=="function")try{Ui.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:tn||So(n,e);case 6:var i=Xt,r=gi;Xt=null,gr(t,e,n),Xt=i,gi=r,Xt!==null&&(gi?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(gi?(t=Xt,n=n.stateNode,t.nodeType===8?vf(t.parentNode,n):t.nodeType===1&&vf(t,n),Ja(t)):vf(Xt,n.stateNode));break;case 4:i=Xt,r=gi,Xt=n.stateNode.containerInfo,gi=!0,gr(t,e,n),Xt=i,gi=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&id(n,e,o),r=r.next}while(r!==i)}gr(t,e,n);break;case 1:if(!tn&&(So(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}gr(t,e,n);break;case 21:gr(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,gr(t,e,n),tn=i):gr(t,e,n);break;default:gr(t,e,n)}}function pg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZE),e.forEach(function(i){var r=aT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ci(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,gi=!1;break e;case 3:Xt=a.stateNode.containerInfo,gi=!0;break e;case 4:Xt=a.stateNode.containerInfo,gi=!0;break e}a=a.return}if(Xt===null)throw Error(te(160));Mx(s,o,r),Xt=null,gi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ex(e,t),e=e.sibling}function Ex(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ci(e,t),Ai(t),i&4){try{Fa(3,t,t.return),Lc(3,t)}catch(g){mt(t,t.return,g)}try{Fa(5,t,t.return)}catch(g){mt(t,t.return,g)}}break;case 1:ci(e,t),Ai(t),i&512&&n!==null&&So(n,n.return);break;case 5:if(ci(e,t),Ai(t),i&512&&n!==null&&So(n,n.return),t.flags&32){var r=t.stateNode;try{qa(r,"")}catch(g){mt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Wv(r,s),bh(a,o);var u=bh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?qv(r,f):c==="dangerouslySetInnerHTML"?jv(r,f):c==="children"?qa(r,f):Vd(r,c,f,u)}switch(a){case"input":wh(r,s);break;case"textarea":Kv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ao(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ao(r,!!s.multiple,s.defaultValue,!0):Ao(r,!!s.multiple,s.multiple?[]:"",!1))}r[rl]=s}catch(g){mt(t,t.return,g)}}break;case 6:if(ci(e,t),Ai(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){mt(t,t.return,g)}}break;case 3:if(ci(e,t),Ai(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ja(e.containerInfo)}catch(g){mt(t,t.return,g)}break;case 4:ci(e,t),Ai(t);break;case 13:ci(e,t),Ai(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Mp=yt())),i&4&&pg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(u=tn)||c,ci(e,t),tn=u):ci(e,t),Ai(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(me=t,c=t.child;c!==null;){for(f=me=c;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Fa(4,d,d.return);break;case 1:So(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){mt(i,n,g)}}break;case 5:So(d,d.return);break;case 22:if(d.memoizedState!==null){gg(f);continue}}p!==null?(p.return=d,me=p):gg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Yv("display",o))}catch(g){mt(t,t.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){mt(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ci(e,t),Ai(t),i&4&&pg(t);break;case 21:break;default:ci(e,t),Ai(t)}}function Ai(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sx(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qa(r,""),i.flags&=-33);var s=dg(t);od(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dg(t);sd(t,a,o);break;default:throw Error(te(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JE(t,e,n){me=t,Tx(t)}function Tx(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=Yl;var u=tn;if(Yl=o,(tn=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?_g(r):l!==null?(l.return=o,me=l):_g(r);for(;s!==null;)me=s,Tx(s),s=s.sibling;me=r,Yl=a,tn=u}mg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):mg(t)}}function mg(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||Lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:mi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Qm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Qm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ja(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}tn||e.flags&512&&rd(e)}catch(d){mt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function gg(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function _g(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Lc(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{rd(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{rd(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var eT=Math.ceil,nc=pr.ReactCurrentDispatcher,yp=pr.ReactCurrentOwner,oi=pr.ReactCurrentBatchConfig,je=0,Gt=null,wt=null,Yt=0,Fn=0,Mo=Jr(0),Ut=0,cl=null,Ls=0,Dc=0,Sp=0,ka=null,Sn=null,Mp=0,Vo=1/0,$i=null,ic=!1,ad=null,Br=null,ql=!1,br=null,rc=0,za=0,ld=null,bu=-1,Lu=0;function vn(){return je&6?yt():bu!==-1?bu:bu=yt()}function Hr(t){return t.mode&1?je&2&&Yt!==0?Yt&-Yt:FE.transition!==null?(Lu===0&&(Lu=a0()),Lu):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:p0(t.type)),t):1}function Mi(t,e,n,i){if(50<za)throw za=0,ld=null,Error(te(185));Tl(t,n,i),(!(je&2)||t!==Gt)&&(t===Gt&&(!(je&2)&&(Dc|=n),Ut===4&&Rr(t,Yt)),Rn(t,i),n===1&&je===0&&!(e.mode&1)&&(Vo=yt()+500,Rc&&es()))}function Rn(t,e){var n=t.callbackNode;FM(t,e);var i=Hu(t,t===Gt?Yt:0);if(i===0)n!==null&&Am(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Am(n),e===1)t.tag===0?OE(vg.bind(null,t)):U0(vg.bind(null,t)),DE(function(){!(je&6)&&es()}),n=null;else{switch(l0(i)){case 1:n=Yd;break;case 4:n=s0;break;case 16:n=Bu;break;case 536870912:n=o0;break;default:n=Bu}n=Dx(n,wx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wx(t,e){if(bu=-1,Lu=0,je&6)throw Error(te(327));var n=t.callbackNode;if(Lo()&&t.callbackNode!==n)return null;var i=Hu(t,t===Gt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=sc(t,i);else{e=i;var r=je;je|=2;var s=Cx();(Gt!==t||Yt!==e)&&($i=null,Vo=yt()+500,xs(t,e));do try{iT();break}catch(a){Ax(t,a)}while(1);ap(),nc.current=s,je=r,wt!==null?e=0:(Gt=null,Yt=0,e=Ut)}if(e!==0){if(e===2&&(r=Nh(t),r!==0&&(i=r,e=ud(t,r))),e===1)throw n=cl,xs(t,0),Rr(t,i),Rn(t,yt()),n;if(e===6)Rr(t,i);else{if(r=t.current.alternate,!(i&30)&&!tT(r)&&(e=sc(t,i),e===2&&(s=Nh(t),s!==0&&(i=s,e=ud(t,s))),e===1))throw n=cl,xs(t,0),Rr(t,i),Rn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:fs(t,Sn,$i);break;case 3:if(Rr(t,i),(i&130023424)===i&&(e=Mp+500-yt(),10<e)){if(Hu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){vn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vh(fs.bind(null,t,Sn,$i),e);break}fs(t,Sn,$i);break;case 4:if(Rr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Si(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eT(i/1960))-i,10<i){t.timeoutHandle=Vh(fs.bind(null,t,Sn,$i),i);break}fs(t,Sn,$i);break;case 5:fs(t,Sn,$i);break;default:throw Error(te(329))}}}return Rn(t,yt()),t.callbackNode===n?wx.bind(null,t):null}function ud(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(xs(t,e).flags|=256),t=sc(t,e),t!==2&&(e=Sn,Sn=n,e!==null&&cd(e)),t}function cd(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function tT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Rr(t,e){for(e&=~Sp,e&=~Dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Si(e),i=1<<n;t[n]=-1,e&=~i}}function vg(t){if(je&6)throw Error(te(327));Lo();var e=Hu(t,0);if(!(e&1))return Rn(t,yt()),null;var n=sc(t,e);if(t.tag!==0&&n===2){var i=Nh(t);i!==0&&(e=i,n=ud(t,i))}if(n===1)throw n=cl,xs(t,0),Rr(t,e),Rn(t,yt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fs(t,Sn,$i),Rn(t,yt()),null}function Ep(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Vo=yt()+500,Rc&&es())}}function Ds(t){br!==null&&br.tag===0&&!(je&6)&&Lo();var e=je;je|=1;var n=oi.transition,i=Qe;try{if(oi.transition=null,Qe=1,t)return t()}finally{Qe=i,oi.transition=n,je=e,!(je&6)&&es()}}function Tp(){Fn=Mo.current,at(Mo)}function xs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,LE(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(rp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xu();break;case 3:Ho(),at(An),at(fn),dp();break;case 5:hp(i);break;case 4:Ho();break;case 13:at(ut);break;case 19:at(ut);break;case 10:lp(i.type._context);break;case 22:case 23:Tp()}n=n.return}if(Gt=t,wt=t=Gr(t.current,null),Yt=Fn=e,Ut=0,cl=null,Sp=Dc=Ls=0,Sn=ka=null,gs!==null){for(e=0;e<gs.length;e++)if(n=gs[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}gs=null}return t}function Ax(t,e){do{var n=wt;try{if(ap(),Cu.current=tc,ec){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ec=!1}if(bs=0,zt=Lt=ht=null,Oa=!1,al=0,yp.current=null,n===null||n.return===null){Ut=1,cl=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=sg(o);if(p!==null){p.flags&=-257,og(p,o,a,s,e),p.mode&1&&rg(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){rg(s,u,e),wp();break e}l=Error(te(426))}}else if(lt&&a.mode&1){var m=sg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),og(m,o,a,s,e),sp(Go(l,a));break e}}s=l=Go(l,a),Ut!==4&&(Ut=2),ka===null?ka=[s]:ka.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=ux(s,l,e);Zm(s,h);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Br===null||!Br.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=cx(s,a,e);Zm(s,y);break e}}s=s.return}while(s!==null)}Px(n)}catch(M){e=M,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(1)}function Cx(){var t=nc.current;return nc.current=tc,t===null?tc:t}function wp(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Gt===null||!(Ls&268435455)&&!(Dc&268435455)||Rr(Gt,Yt)}function sc(t,e){var n=je;je|=2;var i=Cx();(Gt!==t||Yt!==e)&&($i=null,xs(t,e));do try{nT();break}catch(r){Ax(t,r)}while(1);if(ap(),je=n,nc.current=i,wt!==null)throw Error(te(261));return Gt=null,Yt=0,Ut}function nT(){for(;wt!==null;)Rx(wt)}function iT(){for(;wt!==null&&!RM();)Rx(wt)}function Rx(t){var e=Lx(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?Px(t):wt=e,yp.current=null}function Px(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$E(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,wt=null;return}}else if(n=qE(n,e,Fn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ut===0&&(Ut=5)}function fs(t,e,n){var i=Qe,r=oi.transition;try{oi.transition=null,Qe=1,rT(t,e,n,i)}finally{oi.transition=r,Qe=i}return null}function rT(t,e,n,i){do Lo();while(br!==null);if(je&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kM(t,s),t===Gt&&(wt=Gt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ql||(ql=!0,Dx(Bu,function(){return Lo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=oi.transition,oi.transition=null;var o=Qe;Qe=1;var a=je;je|=4,yp.current=null,QE(t,n),Ex(n,t),TE(Hh),Gu=!!Bh,Hh=Bh=null,t.current=n,JE(n),PM(),je=a,Qe=o,oi.transition=s}else t.current=n;if(ql&&(ql=!1,br=t,rc=r),s=t.pendingLanes,s===0&&(Br=null),DM(n.stateNode),Rn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ic)throw ic=!1,t=ad,ad=null,t;return rc&1&&t.tag!==0&&Lo(),s=t.pendingLanes,s&1?t===ld?za++:(za=0,ld=t):za=0,es(),null}function Lo(){if(br!==null){var t=l0(rc),e=oi.transition,n=Qe;try{if(oi.transition=null,Qe=16>t?16:t,br===null)var i=!1;else{if(t=br,br=null,rc=0,je&6)throw Error(te(331));var r=je;for(je|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:Fa(8,c,s)}var f=c.child;if(f!==null)f.return=c,me=f;else for(;me!==null;){c=me;var d=c.sibling,p=c.return;if(yx(c),c===u){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var _=t.current;for(me=_;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=_;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Lc(9,a)}}catch(M){mt(a,a.return,M)}if(a===o){me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,me=y;break e}me=a.return}}if(je=r,es(),Ui&&typeof Ui.onPostCommitFiberRoot=="function")try{Ui.onPostCommitFiberRoot(Ec,t)}catch{}i=!0}return i}finally{Qe=n,oi.transition=e}}return!1}function xg(t,e,n){e=Go(n,e),e=ux(t,e,1),t=zr(t,e,1),e=vn(),t!==null&&(Tl(t,1,e),Rn(t,e))}function mt(t,e,n){if(t.tag===3)xg(t,t,n);else for(;e!==null;){if(e.tag===3){xg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Br===null||!Br.has(i))){t=Go(n,t),t=cx(e,t,1),e=zr(e,t,1),t=vn(),e!==null&&(Tl(e,1,t),Rn(e,t));break}}e=e.return}}function sT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Yt&n)===n&&(Ut===4||Ut===3&&(Yt&130023424)===Yt&&500>yt()-Mp?xs(t,0):Sp|=n),Rn(t,e)}function bx(t,e){e===0&&(t.mode&1?(e=zl,zl<<=1,!(zl&130023424)&&(zl=4194304)):e=1);var n=vn();t=ur(t,e),t!==null&&(Tl(t,e,n),Rn(t,n))}function oT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bx(t,n)}function aT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),bx(t,n)}var Lx;Lx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||An.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,YE(t,e,n);En=!!(t.flags&131072)}else En=!1,lt&&e.flags&1048576&&I0(e,qu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pu(t,e),t=e.pendingProps;var r=ko(e,fn.current);bo(e,n),r=mp(null,e,i,t,r,n);var s=gp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Cn(i)?(s=!0,ju(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cp(e),r.updater=Pc,e.stateNode=r,r._reactInternals=e,$h(e,i,t,n),e=Jh(null,e,i,!0,s,n)):(e.tag=0,lt&&s&&ip(e),gn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=uT(i),t=mi(i,t),r){case 0:e=Qh(null,e,i,t,n);break e;case 1:e=ug(null,e,i,t,n);break e;case 11:e=ag(null,e,i,t,n);break e;case 14:e=lg(null,e,i,mi(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Qh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),ug(t,e,i,r,n);case 3:e:{if(px(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,k0(t,e),Qu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Go(Error(te(423)),e),e=cg(t,e,i,n,r);break e}else if(i!==r){r=Go(Error(te(424)),e),e=cg(t,e,i,n,r);break e}else for(Bn=kr(e.stateNode.containerInfo.firstChild),Gn=e,lt=!0,_i=null,n=G0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zo(),i===r){e=cr(t,e,n);break e}gn(t,e,i,n)}e=e.child}return e;case 5:return V0(e),t===null&&jh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Gh(i,r)?o=null:s!==null&&Gh(i,s)&&(e.flags|=32),dx(t,e),gn(t,e,o,n),e.child;case 6:return t===null&&jh(e),null;case 13:return mx(t,e,n);case 4:return fp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bo(e,null,i,n):gn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),ag(t,e,i,r,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt($u,i._currentValue),i._currentValue=o,s!==null)if(Ti(s.value,o)){if(s.children===r.children&&!An.current){e=cr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=rr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}gn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bo(e,n),r=ai(r),i=i(r),e.flags|=1,gn(t,e,i,n),e.child;case 14:return i=e.type,r=mi(i,e.pendingProps),r=mi(i.type,r),lg(t,e,i,r,n);case 15:return fx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Pu(t,e),e.tag=1,Cn(i)?(t=!0,ju(e)):t=!1,bo(e,n),B0(e,i,r),$h(e,i,r,n),Jh(null,e,i,!0,t,n);case 19:return gx(t,e,n);case 22:return hx(t,e,n)}throw Error(te(156,e.tag))};function Dx(t,e){return r0(t,e)}function lT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,e,n,i){return new lT(t,e,n,i)}function Ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uT(t){if(typeof t=="function")return Ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Xd)return 14}return 2}function Gr(t,e){var n=t.alternate;return n===null?(n=ni(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Du(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fo:return ys(n.children,r,s,e);case Wd:o=8,r|=8;break;case yh:return t=ni(12,n,e,r|2),t.elementType=yh,t.lanes=s,t;case Sh:return t=ni(13,n,e,r),t.elementType=Sh,t.lanes=s,t;case Mh:return t=ni(19,n,e,r),t.elementType=Mh,t.lanes=s,t;case Hv:return Uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zv:o=10;break e;case Bv:o=9;break e;case Kd:o=11;break e;case Xd:o=14;break e;case Tr:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=ni(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ys(t,e,n,i){return t=ni(7,t,i,e),t.lanes=n,t}function Uc(t,e,n,i){return t=ni(22,t,i,e),t.elementType=Hv,t.lanes=n,t.stateNode={isHidden:!1},t}function Af(t,e,n){return t=ni(6,t,null,e),t.lanes=n,t}function Cf(t,e,n){return e=ni(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=af(0),this.expirationTimes=af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=af(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Cp(t,e,n,i,r,s,o,a,l){return t=new cT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ni(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(s),t}function fT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:co,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ux(t){if(!t)return qr;t=t._reactInternals;e:{if(zs(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Cn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(Cn(n))return D0(t,n,e)}return e}function Ix(t,e,n,i,r,s,o,a,l){return t=Cp(n,i,!0,t,r,s,o,a,l),t.context=Ux(null),n=t.current,i=vn(),r=Hr(n),s=rr(i,r),s.callback=e??null,zr(n,s,r),t.current.lanes=r,Tl(t,r,i),Rn(t,i),t}function Ic(t,e,n,i){var r=e.current,s=vn(),o=Hr(r);return n=Ux(n),e.context===null?e.context=n:e.pendingContext=n,e=rr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zr(r,e,o),t!==null&&(Mi(t,r,o,s),Au(t,r,o)),o}function oc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Rp(t,e){yg(t,e),(t=t.alternate)&&yg(t,e)}function hT(){return null}var Nx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pp(t){this._internalRoot=t}Nc.prototype.render=Pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Ic(t,e,null,null)};Nc.prototype.unmount=Pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ds(function(){Ic(null,t,null,null)}),e[lr]=null}};function Nc(t){this._internalRoot=t}Nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=f0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Cr.length&&e!==0&&e<Cr[n].priority;n++);Cr.splice(n,0,t),n===0&&d0(t)}};function bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sg(){}function dT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=oc(o);s.call(u)}}var o=Ix(e,i,t,0,null,!1,!1,"",Sg);return t._reactRootContainer=o,t[lr]=o.current,nl(t.nodeType===8?t.parentNode:t),Ds(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=oc(l);a.call(u)}}var l=Cp(t,0,!1,null,null,!1,!1,"",Sg);return t._reactRootContainer=l,t[lr]=l.current,nl(t.nodeType===8?t.parentNode:t),Ds(function(){Ic(e,l,n,i)}),l}function Fc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=oc(o);a.call(l)}}Ic(e,o,t,r)}else o=dT(n,e,t,r,i);return oc(o)}u0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ta(e.pendingLanes);n!==0&&(qd(e,n|1),Rn(e,yt()),!(je&6)&&(Vo=yt()+500,es()))}break;case 13:Ds(function(){var i=ur(t,1);if(i!==null){var r=vn();Mi(i,t,1,r)}}),Rp(t,1)}};$d=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=vn();Mi(e,t,134217728,n)}Rp(t,134217728)}};c0=function(t){if(t.tag===13){var e=Hr(t),n=ur(t,e);if(n!==null){var i=vn();Mi(n,t,e,i)}Rp(t,e)}};f0=function(){return Qe};h0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Dh=function(t,e,n){switch(e){case"input":if(wh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cc(i);if(!r)throw Error(te(90));Vv(i),wh(i,r)}}}break;case"textarea":Kv(t,n);break;case"select":e=n.value,e!=null&&Ao(t,!!n.multiple,e,!1)}};Qv=Ep;Jv=Ds;var pT={usingClientEntryPoint:!1,Events:[Al,go,Cc,$v,Zv,Ep]},pa={findFiberByHostInstance:ms,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mT={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n0(t),t===null?null:t.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||hT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Ec=$l.inject(mT),Ui=$l}catch{}}jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pT;jn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bp(e))throw Error(te(200));return fT(t,e,null,n)};jn.createRoot=function(t,e){if(!bp(t))throw Error(te(299));var n=!1,i="",r=Nx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Cp(t,1,!1,null,null,n,!1,i,r),t[lr]=e.current,nl(t.nodeType===8?t.parentNode:t),new Pp(e)};jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=n0(e),t=t===null?null:t.stateNode,t};jn.flushSync=function(t){return Ds(t)};jn.hydrate=function(t,e,n){if(!Oc(e))throw Error(te(200));return Fc(null,t,e,!0,n)};jn.hydrateRoot=function(t,e,n){if(!bp(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Nx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ix(e,null,t,1,n??null,r,!1,s,o),t[lr]=e.current,nl(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Nc(e)};jn.render=function(t,e,n){if(!Oc(e))throw Error(te(200));return Fc(null,t,e,!1,n)};jn.unmountComponentAtNode=function(t){if(!Oc(t))throw Error(te(40));return t._reactRootContainer?(Ds(function(){Fc(null,null,t,!1,function(){t._reactRootContainer=null,t[lr]=null})}),!0):!1};jn.unstable_batchedUpdates=Ep;jn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Oc(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Fc(t,e,n,!1,i)};jn.version="18.2.0-next-9e3b772b8-20220608";function Ox(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ox)}catch(t){console.error(t)}}Ox(),Iv.exports=jn;var gT=Iv.exports,Mg=gT;vh.createRoot=Mg.createRoot,vh.hydrateRoot=Mg.hydrateRoot;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fl(){return fl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fl.apply(this,arguments)}var Lr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Lr||(Lr={}));const Eg="popstate";function _T(t){t===void 0&&(t={});function e(r,s){let{pathname:o="/",search:a="",hash:l=""}=Bs(r.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),fd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let o=r.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=r.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Fx(s))}function i(r,s){kc(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return xT(e,n,i,t)}function It(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vT(){return Math.random().toString(36).substr(2,8)}function Tg(t,e){return{usr:t.state,key:t.key,idx:e}}function fd(t,e,n,i){return n===void 0&&(n=null),fl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bs(e):e,{state:n,key:e&&e.key||i||vT()})}function Fx(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Bs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function xT(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Lr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(fl({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=Lr.Pop;let m=c(),h=m==null?null:m-u;u=m,l&&l({action:a,location:g.location,delta:h})}function d(m,h){a=Lr.Push;let _=fd(g.location,m,h);n&&n(_,m),u=c()+1;let v=Tg(_,u),y=g.createHref(_);try{o.pushState(v,"",y)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(y)}s&&l&&l({action:a,location:g.location,delta:1})}function p(m,h){a=Lr.Replace;let _=fd(g.location,m,h);n&&n(_,m),u=c();let v=Tg(_,u),y=g.createHref(_);o.replaceState(v,"",y),s&&l&&l({action:a,location:g.location,delta:0})}function x(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:Fx(m);return It(h,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,h)}let g={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Eg,f),l=m,()=>{r.removeEventListener(Eg,f),l=null}},createHref(m){return e(r,m)},createURL:x,encodeLocation(m){let h=x(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return o.go(m)}};return g}var wg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(wg||(wg={}));function yT(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Bs(e):e,r=Bx(i.pathname||"/",n);if(r==null)return null;let s=kx(t);ST(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=bT(s[a],UT(r));return o}function kx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(It(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Ss([i,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(It(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kx(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:RT(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of zx(s.path))r(s,o,l)}),e}function zx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=zx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ST(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PT(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const MT=/^:\w+$/,ET=3,TT=2,wT=1,AT=10,CT=-2,Ag=t=>t==="*";function RT(t,e){let n=t.split("/"),i=n.length;return n.some(Ag)&&(i+=CT),e&&(i+=TT),n.filter(r=>!Ag(r)).reduce((r,s)=>r+(MT.test(s)?ET:s===""?wT:AT),i)}function PT(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function bT(t,e){let{routesMeta:n}=t,i={},r="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=LT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let f=a.route;s.push({params:i,pathname:Ss([r,c.pathname]),pathnameBase:zT(Ss([r,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(r=Ss([r,c.pathnameBase]))}return s}function LT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=DT(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=IT(a[f]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function DT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),kc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function UT(t){try{return decodeURI(t)}catch(e){return kc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function IT(t,e){try{return decodeURIComponent(t)}catch(n){return kc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Bx(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function NT(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Bs(t):t;return{pathname:n?n.startsWith("/")?n:OT(n,e):e,search:BT(i),hash:HT(r)}}function OT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Rf(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function kT(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Bs(t):(r=fl({},t),It(!r.pathname||!r.pathname.includes("?"),Rf("?","pathname","search",r)),It(!r.pathname||!r.pathname.includes("#"),Rf("#","pathname","hash",r)),It(!r.search||!r.search.includes("#"),Rf("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(i||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=NT(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ss=t=>t.join("/").replace(/\/\/+/g,"/"),zT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function GT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Hx=["post","put","patch","delete"];new Set(Hx);const VT=["get",...Hx];new Set(VT);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ac(){return ac=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ac.apply(this,arguments)}const Lp=ye.createContext(null),WT=ye.createContext(null),zc=ye.createContext(null),Bc=ye.createContext(null),ta=ye.createContext({outlet:null,matches:[],isDataRoute:!1}),Gx=ye.createContext(null);function Hc(){return ye.useContext(Bc)!=null}function Vx(){return Hc()||It(!1),ye.useContext(Bc).location}function Wx(t){ye.useContext(zc).static||ye.useLayoutEffect(t)}function Kx(){let{isDataRoute:t}=ye.useContext(ta);return t?i1():KT()}function KT(){Hc()||It(!1);let t=ye.useContext(Lp),{basename:e,navigator:n}=ye.useContext(zc),{matches:i}=ye.useContext(ta),{pathname:r}=Vx(),s=JSON.stringify(FT(i).map(l=>l.pathnameBase)),o=ye.useRef(!1);return Wx(()=>{o.current=!0}),ye.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=kT(l,JSON.parse(s),r,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Ss([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,r,t])}function XT(t,e){return jT(t,e)}function jT(t,e,n){Hc()||It(!1);let{navigator:i}=ye.useContext(zc),{matches:r}=ye.useContext(ta),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Vx(),u;if(e){var c;let g=typeof e=="string"?Bs(e):e;a==="/"||(c=g.pathname)!=null&&c.startsWith(a)||It(!1),u=g}else u=l;let f=u.pathname||"/",d=a==="/"?f:f.slice(a.length)||"/",p=yT(t,{pathname:d}),x=QT(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:Ss([a,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:Ss([a,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),r,n);return e&&x?ye.createElement(Bc.Provider,{value:{location:ac({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Lr.Pop}},x):x}function YT(){let t=n1(),e=GT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return ye.createElement(ye.Fragment,null,ye.createElement("h2",null,"Unexpected Application Error!"),ye.createElement("h3",{style:{fontStyle:"italic"}},e),n?ye.createElement("pre",{style:r},n):null,s)}const qT=ye.createElement(YT,null);class $T extends ye.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?ye.createElement(ta.Provider,{value:this.props.routeContext},ye.createElement(Gx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ZT(t){let{routeContext:e,match:n,children:i}=t,r=ye.useContext(Lp);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),ye.createElement(ta.Provider,{value:e},i)}function QT(t,e,n){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var r;if((r=n)!=null&&r.errors)t=n.matches;else return null}let s=t,o=(i=n)==null?void 0:i.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||It(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||qT);let d=e.concat(s.slice(0,u+1)),p=()=>{let x;return c?x=f:l.route.Component?x=ye.createElement(l.route.Component,null):l.route.element?x=l.route.element:x=a,ye.createElement(ZT,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:x})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?ye.createElement($T,{location:n.location,revalidation:n.revalidation,component:f,error:c,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):p()},null)}var Xx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Xx||{}),lc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(lc||{});function JT(t){let e=ye.useContext(Lp);return e||It(!1),e}function e1(t){let e=ye.useContext(WT);return e||It(!1),e}function t1(t){let e=ye.useContext(ta);return e||It(!1),e}function jx(t){let e=t1(),n=e.matches[e.matches.length-1];return n.route.id||It(!1),n.route.id}function n1(){var t;let e=ye.useContext(Gx),n=e1(lc.UseRouteError),i=jx(lc.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function i1(){let{router:t}=JT(Xx.UseNavigateStable),e=jx(lc.UseNavigateStable),n=ye.useRef(!1);return Wx(()=>{n.current=!0}),ye.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,ac({fromRouteId:e},s)))},[t,e])}function hd(t){It(!1)}function r1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Lr.Pop,navigator:s,static:o=!1}=t;Hc()&&It(!1);let a=e.replace(/^\/*/,"/"),l=ye.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=Bs(i));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:p="default"}=i,x=ye.useMemo(()=>{let g=Bx(u,a);return g==null?null:{location:{pathname:g,search:c,hash:f,state:d,key:p},navigationType:r}},[a,u,c,f,d,p,r]);return x==null?null:ye.createElement(zc.Provider,{value:l},ye.createElement(Bc.Provider,{children:n,value:x}))}function s1(t){let{children:e,location:n}=t;return XT(dd(e),n)}new Promise(()=>{});function dd(t,e){e===void 0&&(e=[]);let n=[];return ye.Children.forEach(t,(i,r)=>{if(!ye.isValidElement(i))return;let s=[...e,r];if(i.type===ye.Fragment){n.push.apply(n,dd(i.props.children,s));return}i.type!==hd&&It(!1),!i.props.index||!i.props.children||It(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=dd(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const o1="startTransition",Cg=oM[o1];function a1(t){let{basename:e,children:n,future:i,window:r}=t,s=ye.useRef();s.current==null&&(s.current=_T({window:r,v5Compat:!0}));let o=s.current,[a,l]=ye.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=ye.useCallback(f=>{u&&Cg?Cg(()=>l(f)):l(f)},[l,u]);return ye.useLayoutEffect(()=>o.listen(c),[o,c]),ye.createElement(r1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}var Rg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Rg||(Rg={}));var Pg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Pg||(Pg={}));function l1(){const t=Kx();return Bt.jsx("section",{className:"home-container",children:Bt.jsxs("div",{className:"home-wrapper",children:[Bt.jsx("h1",{children:"Welcome to the Effects Playground"}),Bt.jsxs("div",{className:"buttons-div",children:[Bt.jsx("button",{className:"navigation-button",onClick:()=>t("/meteor-effect"),children:"Meteor Effect"}),Bt.jsx("button",{className:"navigation-button",children:"Next Effect"})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const na="155",Vs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},u1=0,bg=1,c1=2,Yx=1,f1=2,Yi=3,fr=0,Ht=1,sn=2,an=0,Do=1,Lg=2,Dg=3,Ug=4,h1=5,lo=100,d1=101,p1=102,Ig=103,Ng=104,m1=200,g1=201,_1=202,v1=203,qx=204,$x=205,x1=206,y1=207,S1=208,M1=209,E1=210,Zx=0,Qx=1,pd=2,uc=3,cc=4,Jx=5,ey=6,Dp=7,ty=0,T1=1,w1=2,Vr=0,A1=1,C1=2,R1=3,P1=4,b1=5,ny=300,Wo=301,Ko=302,md=303,gd=304,Gc=306,fc=1e3,xi=1001,_d=1002,Dt=1003,Og=1004,Pf=1005,nn=1006,L1=1007,hl=1008,qt=1009,D1=1010,U1=1011,Up=1012,iy=1013,nr=1014,Li=1015,dl=1016,ry=1017,sy=1018,Wr=1020,I1=1021,yi=1023,N1=1024,O1=1025,Ms=1026,Us=1027,F1=1028,oy=1029,k1=1030,ay=1031,ly=1033,bf=33776,Lf=33777,Df=33778,Uf=33779,Fg=35840,kg=35841,zg=35842,Bg=35843,z1=36196,Hg=37492,Gg=37496,Vg=37808,Wg=37809,Kg=37810,Xg=37811,jg=37812,Yg=37813,qg=37814,$g=37815,Zg=37816,Qg=37817,Jg=37818,e_=37819,t_=37820,n_=37821,If=36492,B1=36283,i_=36284,r_=36285,s_=36286,Vc=3e3,sr=3001,Oi=3200,Is=3201,H1=0,G1=1,Es="",Oe="srgb",Fi="srgb-linear",uy="display-p3",Nf=7680,V1=519,W1=512,K1=513,X1=514,j1=515,Y1=516,q1=517,$1=518,Z1=519,o_=35044,a_="300 es",vd=1035,ir=2e3,hc=2001;class zi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let l_=1234567;const Ba=Math.PI/180,pl=180/Math.PI;function ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function Ip(t,e){return(t%e+e)%e}function Q1(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function J1(t,e,n){return t!==e?(n-t)/(e-t):0}function Ha(t,e,n){return(1-n)*t+n*e}function ew(t,e,n,i){return Ha(t,e,1-Math.exp(-n*i))}function tw(t,e=1){return e-Math.abs(Ip(t,e*2)-e)}function nw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function iw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function rw(t,e){return t+Math.floor(Math.random()*(e-t+1))}function sw(t,e){return t+Math.random()*(e-t)}function ow(t){return t*(.5-Math.random())}function aw(t){t!==void 0&&(l_=t);let e=l_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lw(t){return t*Ba}function uw(t){return t*pl}function xd(t){return(t&t-1)===0&&t!==0}function cw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function dc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function fw(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*f,l*d,a*u);break;case"YZY":t.set(l*d,a*c,l*f,a*u);break;case"ZXZ":t.set(l*f,l*d,a*c,a*u);break;case"XZX":t.set(a*c,l*x,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*x,a*u);break;case"ZYZ":t.set(l*x,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function uo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const hw={DEG2RAD:Ba,RAD2DEG:pl,generateUUID:ia,clamp:rn,euclideanModulo:Ip,mapLinear:Q1,inverseLerp:J1,lerp:Ha,damp:ew,pingpong:tw,smoothstep:nw,smootherstep:iw,randInt:rw,randFloat:sw,randFloatSpread:ow,seededRandom:aw,degToRad:lw,radToDeg:uw,isPowerOfTwo:xd,ceilPowerOfTwo:cw,floorPowerOfTwo:dc,setQuaternionFromProperEuler:fw,normalize:pn,denormalize:uo};class _e{constructor(e=0,n=0){_e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,o,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],x=i[8],g=r[0],m=r[3],h=r[6],_=r[1],v=r[4],y=r[7],M=r[2],T=r[5],E=r[8];return s[0]=o*g+a*_+l*M,s[3]=o*m+a*v+l*T,s[6]=o*h+a*y+l*E,s[1]=u*g+c*_+f*M,s[4]=u*m+c*v+f*T,s[7]=u*h+c*y+f*E,s[2]=d*g+p*_+x*M,s[5]=d*m+p*v+x*T,s[8]=d*h+p*y+x*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,x=n*f+i*d+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=f*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(c*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=p*g,e[7]=(i*l-u*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Of.makeScale(e,n)),this}rotate(e){return this.premultiply(Of.makeRotation(-e)),this}translate(e,n){return this.premultiply(Of.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Of=new ze;function cy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ml(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const u_={};function Ga(t){t in u_||(u_[t]=!0,console.warn(t))}function Uo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ff(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const dw=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),pw=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function mw(t){return t.convertSRGBToLinear().applyMatrix3(pw)}function gw(t){return t.applyMatrix3(dw).convertLinearToSRGB()}const _w={[Fi]:t=>t,[Oe]:t=>t.convertSRGBToLinear(),[uy]:mw},vw={[Fi]:t=>t,[Oe]:t=>t.convertLinearToSRGB(),[uy]:gw},fi={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Fi},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=_w[e],r=vw[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let Ks;class fy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ks===void 0&&(Ks=ml("canvas")),Ks.width=e.width,Ks.height=e.height;const i=Ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ks}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ml("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Uo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Uo(n[i]/255)*255):n[i]=Uo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xw=0;class hy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=ia(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kf(r[o].image)):s.push(kf(r[o]))}else s=kf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function kf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yw=0;class ln extends zi{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=xi,r=xi,s=nn,o=hl,a=yi,l=qt,u=ln.DEFAULT_ANISOTROPY,c=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=ia(),this.name="",this.source=new hy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===sr?Oe:Es),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ny)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fc:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fc:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?sr:Vc}set encoding(e){Ga("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?Oe:Es}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ny;ln.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,n=0,i=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],x=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+g)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,y=(p+1)/2,M=(h+1)/2,T=(c+d)/4,E=(f+g)/4,R=(x+m)/4;return v>y&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=E/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=R/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=E/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-x)*(m-x)+(f-g)*(f-g)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(f-g)/_,this.z=(d-c)/_,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sw extends zi{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new tt(0,0,e,n),this.scissorTest=!1,this.viewport=new tt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ga("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?Oe:Es),this.texture=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:nn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new hy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vt extends Sw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dy extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mw extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ns{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=x,e[n+3]=g;return}if(f!==g||l!==d||u!==p||c!==x){let m=1-a;const h=l*d+u*p+c*x+f*g,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const M=Math.sqrt(v),T=Math.atan2(M,h*_);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}const y=a*_;if(l=l*m+d*y,u=u*m+p*y,c=c*m+x*y,f=f*m+g*y,m===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+c*f+l*p-u*d,e[n+1]=l*x+c*d+u*f-a*p,e[n+2]=u*x+c*p+a*d-l*f,e[n+3]=c*x-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*x,this._y=u*p*f-d*c*x,this._z=u*c*x+d*p*f,this._w=u*c*f-d*p*x;break;case"YXZ":this._x=d*c*f+u*p*x,this._y=u*p*f-d*c*x,this._z=u*c*x-d*p*f,this._w=u*c*f+d*p*x;break;case"ZXY":this._x=d*c*f-u*p*x,this._y=u*p*f+d*c*x,this._z=u*c*x+d*p*f,this._w=u*c*f-d*p*x;break;case"ZYX":this._x=d*c*f-u*p*x,this._y=u*p*f+d*c*x,this._z=u*c*x-d*p*f,this._w=u*c*f+d*p*x;break;case"YZX":this._x=d*c*f+u*p*x,this._y=u*p*f+d*c*x,this._z=u*c*x-d*p*f,this._w=u*c*f-d*p*x;break;case"XZY":this._x=d*c*f-u*p*x,this._y=u*p*f-d*c*x,this._z=u*c*x+d*p*f,this._w=u*c*f+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(c_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(c_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zf.copy(this).projectOnVector(e),this.sub(zf)}reflect(e){return this.sub(zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zf=new U,c_=new Ns;class Rl{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox),Xs.applyMatrix4(e.matrixWorld),this.union(Xs);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Vi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Vi)}else r.boundingBox===null&&r.computeBoundingBox(),Xs.copy(r.boundingBox),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Zl.subVectors(this.max,ma),js.subVectors(e.a,ma),Ys.subVectors(e.b,ma),qs.subVectors(e.c,ma),_r.subVectors(Ys,js),vr.subVectors(qs,Ys),rs.subVectors(js,qs);let n=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-rs.z,rs.y,_r.z,0,-_r.x,vr.z,0,-vr.x,rs.z,0,-rs.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-rs.y,rs.x,0];return!Bf(n,js,Ys,qs,Zl)||(n=[1,0,0,0,1,0,0,0,1],!Bf(n,js,Ys,qs,Zl))?!1:(Ql.crossVectors(_r,vr),n=[Ql.x,Ql.y,Ql.z],Bf(n,js,Ys,qs,Zl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new U,new U,new U,new U,new U,new U,new U,new U],Vi=new U,Xs=new Rl,js=new U,Ys=new U,qs=new U,_r=new U,vr=new U,rs=new U,ma=new U,Zl=new U,Ql=new U,ss=new U;function Bf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ss.fromArray(t,s);const a=r.x*Math.abs(ss.x)+r.y*Math.abs(ss.y)+r.z*Math.abs(ss.z),l=e.dot(ss),u=n.dot(ss),c=i.dot(ss);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Ew=new Rl,ga=new U,Hf=new U;class Np{constructor(e=new U,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ew.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const n=ga.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ga,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Hf)),this.expandByPoint(ga.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new U,Gf=new U,Jl=new U,xr=new U,Vf=new U,eu=new U,Wf=new U;class py{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,n),Wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gf.copy(e).add(n).multiplyScalar(.5),Jl.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(Gf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Jl),a=xr.dot(this.direction),l=-xr.dot(Jl),u=xr.lengthSq(),c=Math.abs(1-o*o);let f,d,p,x;if(c>0)if(f=o*l-a,d=o*a-l,x=s*c,f>=0)if(d>=-x)if(d<=x){const g=1/c;f*=g,d*=g,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Gf).addScaledVector(Jl,d),p}intersectSphere(e,n){Wi.subVectors(e.center,this.origin);const i=Wi.dot(this.direction),r=Wi.dot(Wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,n,i,r,s){Vf.subVectors(n,e),eu.subVectors(i,e),Wf.crossVectors(Vf,eu);let o=this.direction.dot(Wf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xr.subVectors(this.origin,e);const l=a*this.direction.dot(eu.crossVectors(xr,eu));if(l<0)return null;const u=a*this.direction.dot(Vf.cross(xr));if(u<0||l+u>o)return null;const c=-a*xr.dot(Wf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,s,o,a,l,u,c,f,d,p,x,g,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,p,x,g,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,p,x,g,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=x,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/$s.setFromMatrixColumn(e,0).length(),s=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,x=a*c,g=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+x*u,n[5]=d-g*u,n[9]=-a*l,n[2]=g-d*u,n[6]=x+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,x=u*c,g=u*f;n[0]=d+g*a,n[4]=x*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-x,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,x=u*c,g=u*f;n[0]=d-g*a,n[4]=-o*f,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*c,n[9]=g-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,x=a*c,g=a*f;n[0]=l*c,n[4]=x*u-p,n[8]=d*u+g,n[1]=l*f,n[5]=g*u+d,n[9]=p*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,x=a*l,g=a*u;n[0]=l*c,n[4]=g-d*f,n[8]=x*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+x,n[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,p=o*u,x=a*l,g=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+g,n[5]=o*c,n[9]=p*f-x,n[2]=x*f-p,n[6]=a*c,n[10]=g*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tw,e,ww)}lookAt(e,n,i){const r=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),yr.crossVectors(i,Nn),yr.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),yr.crossVectors(i,Nn)),yr.normalize(),tu.crossVectors(Nn,yr),r[0]=yr.x,r[4]=tu.x,r[8]=Nn.x,r[1]=yr.y,r[5]=tu.y,r[9]=Nn.y,r[2]=yr.z,r[6]=tu.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],x=i[2],g=i[6],m=i[10],h=i[14],_=i[3],v=i[7],y=i[11],M=i[15],T=r[0],E=r[4],R=r[8],S=r[12],A=r[1],V=r[5],Y=r[9],I=r[13],O=r[2],k=r[6],Z=r[10],K=r[14],D=r[3],j=r[7],H=r[11],N=r[15];return s[0]=o*T+a*A+l*O+u*D,s[4]=o*E+a*V+l*k+u*j,s[8]=o*R+a*Y+l*Z+u*H,s[12]=o*S+a*I+l*K+u*N,s[1]=c*T+f*A+d*O+p*D,s[5]=c*E+f*V+d*k+p*j,s[9]=c*R+f*Y+d*Z+p*H,s[13]=c*S+f*I+d*K+p*N,s[2]=x*T+g*A+m*O+h*D,s[6]=x*E+g*V+m*k+h*j,s[10]=x*R+g*Y+m*Z+h*H,s[14]=x*S+g*I+m*K+h*N,s[3]=_*T+v*A+y*O+M*D,s[7]=_*E+v*V+y*k+M*j,s[11]=_*R+v*Y+y*Z+M*H,s[15]=_*S+v*I+y*K+M*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],x=e[3],g=e[7],m=e[11],h=e[15];return x*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+g*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],x=e[12],g=e[13],m=e[14],h=e[15],_=f*m*u-g*d*u+g*l*p-a*m*p-f*l*h+a*d*h,v=x*d*u-c*m*u-x*l*p+o*m*p+c*l*h-o*d*h,y=c*g*u-x*f*u+x*a*p-o*g*p-c*a*h+o*f*h,M=x*f*l-c*g*l-x*a*d+o*g*d+c*a*m-o*f*m,T=n*_+i*v+r*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=_*E,e[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*E,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*E,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*E,e[4]=v*E,e[5]=(c*m*s-x*d*s+x*r*p-n*m*p-c*r*h+n*d*h)*E,e[6]=(x*l*s-o*m*s-x*r*u+n*m*u+o*r*h-n*l*h)*E,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*E,e[8]=y*E,e[9]=(x*f*s-c*g*s-x*i*p+n*g*p+c*i*h-n*f*h)*E,e[10]=(o*g*s-x*a*s+x*i*u-n*g*u-o*i*h+n*a*h)*E,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*E,e[12]=M*E,e[13]=(c*g*r-x*f*r+x*i*d-n*g*d-c*i*m+n*f*m)*E,e[14]=(x*a*r-o*g*r-x*i*l+n*g*l+o*i*m-n*a*m)*E,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,x=s*f,g=o*c,m=o*f,h=a*f,_=l*u,v=l*c,y=l*f,M=i.x,T=i.y,E=i.z;return r[0]=(1-(g+h))*M,r[1]=(p+y)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+h))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(x+v)*E,r[9]=(m-_)*E,r[10]=(1-(d+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=$s.set(r[0],r[1],r[2]).length();const o=$s.set(r[4],r[5],r[6]).length(),a=$s.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);const u=1/s,c=1/o,f=1/a;return hi.elements[0]*=u,hi.elements[1]*=u,hi.elements[2]*=u,hi.elements[4]*=c,hi.elements[5]*=c,hi.elements[6]*=c,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,n.setFromRotationMatrix(hi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ir){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,x;if(a===ir)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===hc)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ir){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*c;let x,g;if(a===ir)x=(o+s)*f,g=-2*f;else if(a===hc)x=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const $s=new U,hi=new Rt,Tw=new U(0,0,0),ww=new U(1,1,1),yr=new U,tu=new U,Nn=new U,f_=new Rt,h_=new Ns;class Wc{constructor(e=0,n=0,i=0,r=Wc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return f_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return h_.setFromEuler(this),this.setFromQuaternion(h_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wc.DEFAULT_ORDER="XYZ";class my{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Aw=0;const d_=new U,Zs=new Ns,Ki=new Rt,nu=new U,_a=new U,Cw=new U,Rw=new Ns,p_=new U(1,0,0),m_=new U(0,1,0),g_=new U(0,0,1),Pw={type:"added"},__={type:"removed"};class Pn extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new U,n=new Wc,i=new Ns,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ze}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new my,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,n){return Zs.setFromAxisAngle(e,n),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(p_,e)}rotateY(e){return this.rotateOnAxis(m_,e)}rotateZ(e){return this.rotateOnAxis(g_,e)}translateOnAxis(e,n){return d_.copy(e).applyQuaternion(this.quaternion),this.position.add(d_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(p_,e)}translateY(e){return this.translateOnAxis(m_,e)}translateZ(e){return this.translateOnAxis(g_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?nu.copy(e):nu.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(_a,nu,this.up):Ki.lookAt(nu,_a,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),Zs.setFromRotationMatrix(Ki),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(__)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(__)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,Cw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,Rw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new U(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new U,Xi=new U,Kf=new U,ji=new U,Qs=new U,Js=new U,v_=new U,Xf=new U,jf=new U,Yf=new U;let iu=!1;class vi{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),di.subVectors(e,n),r.cross(di);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){di.subVectors(r,n),Xi.subVectors(i,n),Kf.subVectors(e,n);const o=di.dot(di),a=di.dot(Xi),l=di.dot(Kf),u=Xi.dot(Xi),c=Xi.dot(Kf),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(u*l-a*c)*d,x=(o*c-a*l)*d;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ji),ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getUV(e,n,i,r,s,o,a,l){return iu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),iu=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ji),l.setScalar(0),l.addScaledVector(s,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l}static isFrontFacing(e,n,i,r){return di.subVectors(i,n),Xi.subVectors(e,n),di.cross(Xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),di.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return iu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),iu=!0),vi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Qs.subVectors(r,i),Js.subVectors(s,i),Xf.subVectors(e,i);const l=Qs.dot(Xf),u=Js.dot(Xf);if(l<=0&&u<=0)return n.copy(i);jf.subVectors(e,r);const c=Qs.dot(jf),f=Js.dot(jf);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Qs,o);Yf.subVectors(e,s);const p=Qs.dot(Yf),x=Js.dot(Yf);if(x>=0&&p<=x)return n.copy(s);const g=p*u-l*x;if(g<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Js,a);const m=c*x-p*f;if(m<=0&&f-c>=0&&p-x>=0)return v_.subVectors(s,r),a=(f-c)/(f-c+(p-x)),n.copy(r).addScaledVector(v_,a);const h=1/(m+g+d);return o=g*h,a=d*h,n.copy(i).addScaledVector(Qs,o).addScaledVector(Js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let bw=0;class ra extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Do,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qx,this.blendDst=$x,this.blendEquation=lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=uc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nf,this.stencilZFail=Nf,this.stencilZPass=Nf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(i.blending=this.blending),this.side!==fr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},ru={h:0,s:0,l:0};function qf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fi.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=fi.workingColorSpace){return this.r=e,this.g=n,this.b=i,fi.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=fi.workingColorSpace){if(e=Ip(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=qf(o,s,e+1/3),this.g=qf(o,s,e),this.b=qf(o,s,e-1/3)}return fi.toWorkingColorSpace(this,r),this}setStyle(e,n=Oe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Oe){const i=gy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}copyLinearToSRGB(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return fi.fromWorkingColorSpace(en.copy(this),e),Math.round(rn(en.r*255,0,255))*65536+Math.round(rn(en.g*255,0,255))*256+Math.round(rn(en.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=fi.workingColorSpace){fi.fromWorkingColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=fi.workingColorSpace){return fi.fromWorkingColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Oe){fi.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==Oe?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(pi),pi.h+=e,pi.s+=n,pi.l+=i,this.setHSL(pi.h,pi.s,pi.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pi),e.getHSL(ru);const i=Ha(pi.h,ru.h,n),r=Ha(pi.s,ru.s,n),s=Ha(pi.l,ru.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ze;Ze.NAMES=gy;class Op extends ra{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ty,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new U,su=new _e;class Tn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=o_,this.updateRange={offset:0,count:-1},this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)su.fromBufferAttribute(this,n),su.applyMatrix3(e),this.setXY(n,su.x,su.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=uo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=uo(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=uo(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=uo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=uo(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o_&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class _y extends Tn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vy extends Tn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vn extends Tn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Lw=0;const Zn=new Rt,$f=new Pn,eo=new U,On=new Rl,va=new Rl,kt=new U;class Bi extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cy(e)?vy:_y)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,i){return Zn.makeTranslation(e,n,i),this.applyMatrix4(Zn),this}scale(e,n,i){return Zn.makeScale(e,n,i),this.applyMatrix4(Zn),this}lookAt(e){return $f.lookAt(e),$f.updateMatrix(),this.applyMatrix4($f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Vn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];On.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Np);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(On.min,va.min),On.expandByPoint(kt),kt.addVectors(On.max,va.max),On.expandByPoint(kt)):(On.expandByPoint(va.min),On.expandByPoint(va.max))}On.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)kt.fromBufferAttribute(a,u),l&&(eo.fromBufferAttribute(e,u),kt.add(eo)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new U,c[A]=new U;const f=new U,d=new U,p=new U,x=new _e,g=new _e,m=new _e,h=new U,_=new U;function v(A,V,Y){f.fromArray(r,A*3),d.fromArray(r,V*3),p.fromArray(r,Y*3),x.fromArray(o,A*2),g.fromArray(o,V*2),m.fromArray(o,Y*2),d.sub(f),p.sub(f),g.sub(x),m.sub(x);const I=1/(g.x*m.y-m.x*g.y);isFinite(I)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(I),_.copy(p).multiplyScalar(g.x).addScaledVector(d,-m.x).multiplyScalar(I),u[A].add(h),u[V].add(h),u[Y].add(h),c[A].add(_),c[V].add(_),c[Y].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,V=y.length;A<V;++A){const Y=y[A],I=Y.start,O=Y.count;for(let k=I,Z=I+O;k<Z;k+=3)v(i[k+0],i[k+1],i[k+2])}const M=new U,T=new U,E=new U,R=new U;function S(A){E.fromArray(s,A*3),R.copy(E);const V=u[A];M.copy(V),M.sub(E.multiplyScalar(E.dot(V))).normalize(),T.crossVectors(R,V);const I=T.dot(c[A])<0?-1:1;l[A*4]=M.x,l[A*4+1]=M.y,l[A*4+2]=M.z,l[A*4+3]=I}for(let A=0,V=y.length;A<V;++A){const Y=y[A],I=Y.start,O=Y.count;for(let k=I,Z=I+O;k<Z;k+=3)S(i[k+0]),S(i[k+1]),S(i[k+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,u=new U,c=new U,f=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)d[x++]=u[p++]}return new Tn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const x_=new Rt,os=new py,ou=new Np,y_=new U,to=new U,no=new U,io=new U,Zf=new U,au=new U,lu=new _e,uu=new _e,cu=new _e,S_=new U,M_=new U,E_=new U,fu=new U,hu=new U;class wn extends Pn{constructor(e=new Bi,n=new Op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){au.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Zf.fromBufferAttribute(f,e),o?au.addScaledVector(Zf,c):au.addScaledVector(Zf.sub(n),c))}n.add(au)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ou.copy(i.boundingSphere),ou.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(ou.containsPoint(os.origin)===!1&&(os.intersectSphere(ou,y_)===null||os.origin.distanceToSquared(y_)>(e.far-e.near)**2))&&(x_.copy(s).invert(),os.copy(e.ray).applyMatrix4(x_),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,os)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){const m=d[x],h=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=v;y<M;y+=3){const T=a.getX(y),E=a.getX(y+1),R=a.getX(y+2);r=du(this,h,e,i,u,c,f,T,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,h=g;m<h;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=du(this,o,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=d.length;x<g;x++){const m=d[x],h=o[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,M=v;y<M;y+=3){const T=y,E=y+1,R=y+2;r=du(this,h,e,i,u,c,f,T,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,h=g;m<h;m+=3){const _=m,v=m+1,y=m+2;r=du(this,o,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Dw(t,e,n,i,r,s,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===fr,a),l===null)return null;hu.copy(a),hu.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(hu);return u<n.near||u>n.far?null:{distance:u,point:hu.clone(),object:t}}function du(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,to),t.getVertexPosition(l,no),t.getVertexPosition(u,io);const c=Dw(t,e,n,i,to,no,io,fu);if(c){r&&(lu.fromBufferAttribute(r,a),uu.fromBufferAttribute(r,l),cu.fromBufferAttribute(r,u),c.uv=vi.getInterpolation(fu,to,no,io,lu,uu,cu,new _e)),s&&(lu.fromBufferAttribute(s,a),uu.fromBufferAttribute(s,l),cu.fromBufferAttribute(s,u),c.uv1=vi.getInterpolation(fu,to,no,io,lu,uu,cu,new _e),c.uv2=c.uv1),o&&(S_.fromBufferAttribute(o,a),M_.fromBufferAttribute(o,l),E_.fromBufferAttribute(o,u),c.normal=vi.getInterpolation(fu,to,no,io,S_,M_,E_,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new U,materialIndex:0};vi.getNormal(to,no,io,f.normal),c.face=f}return c}class Pl extends Bi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vn(u,3)),this.setAttribute("normal",new Vn(c,3)),this.setAttribute("uv",new Vn(f,2));function x(g,m,h,_,v,y,M,T,E,R,S){const A=y/E,V=M/R,Y=y/2,I=M/2,O=T/2,k=E+1,Z=R+1;let K=0,D=0;const j=new U;for(let H=0;H<Z;H++){const N=H*V-I;for(let z=0;z<k;z++){const ae=z*A-Y;j[g]=ae*_,j[m]=N*v,j[h]=O,u.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[h]=T>0?1:-1,c.push(j.x,j.y,j.z),f.push(z/E),f.push(1-H/R),K+=1}}for(let H=0;H<R;H++)for(let N=0;N<E;N++){const z=d+N+k*H,ae=d+N+k*(H+1),ie=d+(N+1)+k*(H+1),le=d+(N+1)+k*H;l.push(z,ae,le),l.push(ae,ie,le),D+=6}a.addGroup(p,D,S),p+=D,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function mn(t){const e={};for(let n=0;n<t.length;n++){const i=Xo(t[n]);for(const r in i)e[r]=i[r]}return e}function Uw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function xy(t){return t.getRenderTarget()===null?t.outputColorSpace:Fi}const Iw={clone:Xo,merge:mn};var Nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ow=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends ra{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nw,this.fragmentShader=Ow,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=Uw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Fp extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=ir}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends Fp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=pl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pl*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ro=-90,so=1;class Fw extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new _n(ro,so,e,n);r.layers=this.layers,this.add(r);const s=new _n(ro,so,e,n);s.layers=this.layers,this.add(s);const o=new _n(ro,so,e,n);o.layers=this.layers,this.add(o);const a=new _n(ro,so,e,n);a.layers=this.layers,this.add(a);const l=new _n(ro,so,e,n);l.layers=this.layers,this.add(l);const u=new _n(ro,so,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ir)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class yy extends ln{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Wo,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kw extends Vt{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ga("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sr?Oe:Es),this.texture=new yy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:nn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pl(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:Xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:an});s.uniforms.tEquirect.value=n;const o=new wn(r,s),a=n.minFilter;return n.minFilter===hl&&(n.minFilter=nn),new Fw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Qf=new U,zw=new U,Bw=new ze;class Ar{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qf.subVectors(i,n).cross(zw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Bw.getNormalMatrix(e),r=this.coplanarPoint(Qf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new Np,pu=new U;class kp{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,s=new Ar,o=new Ar){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ir){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],x=r[9],g=r[10],m=r[11],h=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,m-p,y-h).normalize(),i[1].setComponents(l+s,d+u,m+p,y+h).normalize(),i[2].setComponents(l+o,d+c,m+x,y+_).normalize(),i[3].setComponents(l-o,d-c,m-x,y-_).normalize(),i[4].setComponents(l-a,d-f,m-g,y-v).normalize(),n===ir)i[5].setComponents(l+a,d+f,m+g,y+v).normalize();else if(n===hc)i[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pu.x=r.normal.x>0?e.max.x:e.min.x,pu.y=r.normal.y>0?e.max.y:e.min.y,pu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Hw(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,f,d),u.onUploadCallback();let x;if(f instanceof Float32Array)x=t.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=t.SHORT;else if(f instanceof Uint32Array)x=t.UNSIGNED_INT;else if(f instanceof Int32Array)x=t.INT;else if(f instanceof Int8Array)x=t.BYTE;else if(f instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,p=c.updateRange;t.bindBuffer(f,u),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Kc extends Bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],x=[],g=[],m=[];for(let h=0;h<c;h++){const _=h*d-o;for(let v=0;v<u;v++){const y=v*f-s;x.push(y,-_,0),g.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const v=_+u*h,y=_+u*(h+1),M=_+1+u*(h+1),T=_+1+u*h;p.push(v,y,T),p.push(y,M,T)}this.setIndex(p),this.setAttribute("position",new Vn(x,3)),this.setAttribute("normal",new Vn(g,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vw=`#ifdef USE_ALPHAHASH
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
#endif`,Ww=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xw=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$w=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jw=`#ifdef USE_IRIDESCENCE
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
#endif`,eA=`#ifdef USE_BUMPMAP
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
#endif`,tA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uA=`#define PI 3.141592653589793
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
} // validated`,cA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fA=`vec3 transformedNormal = objectNormal;
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
#endif`,hA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gA="gl_FragColor = linearToOutputTexel( gl_FragColor );",_A=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vA=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yA=`#ifdef USE_ENVMAP
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
#endif`,SA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
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
#endif`,EA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CA=`#ifdef USE_GRADIENTMAP
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
}`,RA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,PA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DA=`uniform bool receiveShadow;
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
#endif`,UA=`#ifdef USE_ENVMAP
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
#endif`,IA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kA=`PhysicalMaterial material;
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
#endif`,zA=`struct PhysicalMaterial {
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
}`,BA=`
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
#endif`,HA=`#if defined( RE_IndirectDiffuse )
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
#endif`,GA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,VA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,XA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jA=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,YA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$A=`#if defined( USE_POINTS_UV )
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
#endif`,ZA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eC=`#ifdef USE_MORPHNORMALS
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
#endif`,tC=`#ifdef USE_MORPHTARGETS
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
#endif`,nC=`#ifdef USE_MORPHTARGETS
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
#endif`,iC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,rC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lC=`#ifdef USE_NORMALMAP
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
#endif`,uC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,cC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_C=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TC=`float getShadowMask() {
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
}`,wC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AC=`#ifdef USE_SKINNING
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
#endif`,CC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RC=`#ifdef USE_SKINNING
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
#endif`,PC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UC=`#ifdef USE_TRANSMISSION
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
#endif`,IC=`#ifdef USE_TRANSMISSION
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
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KC=`#include <common>
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
}`,XC=`#if DEPTH_PACKING == 3200
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
}`,jC=`#define DISTANCE
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
}`,YC=`#define DISTANCE
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
}`,qC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$C=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZC=`uniform float scale;
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
}`,QC=`uniform vec3 diffuse;
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
}`,JC=`#include <common>
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
}`,eR=`uniform vec3 diffuse;
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
}`,tR=`#define LAMBERT
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
}`,nR=`#define LAMBERT
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
}`,iR=`#define MATCAP
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
}`,rR=`#define MATCAP
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
}`,sR=`#define NORMAL
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
}`,oR=`#define NORMAL
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
}`,aR=`#define PHONG
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
}`,lR=`#define PHONG
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
}`,uR=`#define STANDARD
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
}`,cR=`#define STANDARD
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
}`,fR=`#define TOON
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
}`,hR=`#define TOON
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
}`,dR=`uniform float size;
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
}`,pR=`uniform vec3 diffuse;
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
}`,mR=`#include <common>
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
}`,gR=`uniform vec3 color;
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
}`,_R=`uniform float rotation;
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
}`,vR=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:Gw,alphahash_pars_fragment:Vw,alphamap_fragment:Ww,alphamap_pars_fragment:Kw,alphatest_fragment:Xw,alphatest_pars_fragment:jw,aomap_fragment:Yw,aomap_pars_fragment:qw,begin_vertex:$w,beginnormal_vertex:Zw,bsdfs:Qw,iridescence_fragment:Jw,bumpmap_pars_fragment:eA,clipping_planes_fragment:tA,clipping_planes_pars_fragment:nA,clipping_planes_pars_vertex:iA,clipping_planes_vertex:rA,color_fragment:sA,color_pars_fragment:oA,color_pars_vertex:aA,color_vertex:lA,common:uA,cube_uv_reflection_fragment:cA,defaultnormal_vertex:fA,displacementmap_pars_vertex:hA,displacementmap_vertex:dA,emissivemap_fragment:pA,emissivemap_pars_fragment:mA,colorspace_fragment:gA,colorspace_pars_fragment:_A,envmap_fragment:vA,envmap_common_pars_fragment:xA,envmap_pars_fragment:yA,envmap_pars_vertex:SA,envmap_physical_pars_fragment:UA,envmap_vertex:MA,fog_vertex:EA,fog_pars_vertex:TA,fog_fragment:wA,fog_pars_fragment:AA,gradientmap_pars_fragment:CA,lightmap_fragment:RA,lightmap_pars_fragment:PA,lights_lambert_fragment:bA,lights_lambert_pars_fragment:LA,lights_pars_begin:DA,lights_toon_fragment:IA,lights_toon_pars_fragment:NA,lights_phong_fragment:OA,lights_phong_pars_fragment:FA,lights_physical_fragment:kA,lights_physical_pars_fragment:zA,lights_fragment_begin:BA,lights_fragment_maps:HA,lights_fragment_end:GA,logdepthbuf_fragment:VA,logdepthbuf_pars_fragment:WA,logdepthbuf_pars_vertex:KA,logdepthbuf_vertex:XA,map_fragment:jA,map_pars_fragment:YA,map_particle_fragment:qA,map_particle_pars_fragment:$A,metalnessmap_fragment:ZA,metalnessmap_pars_fragment:QA,morphcolor_vertex:JA,morphnormal_vertex:eC,morphtarget_pars_vertex:tC,morphtarget_vertex:nC,normal_fragment_begin:iC,normal_fragment_maps:rC,normal_pars_fragment:sC,normal_pars_vertex:oC,normal_vertex:aC,normalmap_pars_fragment:lC,clearcoat_normal_fragment_begin:uC,clearcoat_normal_fragment_maps:cC,clearcoat_pars_fragment:fC,iridescence_pars_fragment:hC,opaque_fragment:dC,packing:pC,premultiplied_alpha_fragment:mC,project_vertex:gC,dithering_fragment:_C,dithering_pars_fragment:vC,roughnessmap_fragment:xC,roughnessmap_pars_fragment:yC,shadowmap_pars_fragment:SC,shadowmap_pars_vertex:MC,shadowmap_vertex:EC,shadowmask_pars_fragment:TC,skinbase_vertex:wC,skinning_pars_vertex:AC,skinning_vertex:CC,skinnormal_vertex:RC,specularmap_fragment:PC,specularmap_pars_fragment:bC,tonemapping_fragment:LC,tonemapping_pars_fragment:DC,transmission_fragment:UC,transmission_pars_fragment:IC,uv_pars_fragment:NC,uv_pars_vertex:OC,uv_vertex:FC,worldpos_vertex:kC,background_vert:zC,background_frag:BC,backgroundCube_vert:HC,backgroundCube_frag:GC,cube_vert:VC,cube_frag:WC,depth_vert:KC,depth_frag:XC,distanceRGBA_vert:jC,distanceRGBA_frag:YC,equirect_vert:qC,equirect_frag:$C,linedashed_vert:ZC,linedashed_frag:QC,meshbasic_vert:JC,meshbasic_frag:eR,meshlambert_vert:tR,meshlambert_frag:nR,meshmatcap_vert:iR,meshmatcap_frag:rR,meshnormal_vert:sR,meshnormal_frag:oR,meshphong_vert:aR,meshphong_frag:lR,meshphysical_vert:uR,meshphysical_frag:cR,meshtoon_vert:fR,meshtoon_frag:hR,points_vert:dR,points_frag:pR,shadow_vert:mR,shadow_frag:gR,sprite_vert:_R,sprite_frag:vR},ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Ri={basic:{uniforms:mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:mn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:mn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:mn([ce.points,ce.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:mn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:mn([ce.common,ce.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:mn([ce.sprite,ce.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:mn([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:mn([ce.lights,ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Ri.physical={uniforms:mn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const mu={r:0,b:0,g:0};function xR(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function x(m,h){let _=!1,v=h.isScene===!0?h.background:null;switch(v&&v.isTexture&&(v=(h.backgroundBlurriness>0?n:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Gc)?(c===void 0&&(c=new wn(new Pl(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Xo(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Oe,(f!==v||d!==v.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=v,d=v.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new wn(new Kc(2,2),new Ct({name:"BackgroundMaterial",uniforms:Xo(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,h){m.getRGB(mu,xy(t)),i.buffers.color.setClear(mu.r,mu.g,mu.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function yR(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(O,k,Z,K,D){let j=!1;if(o){const H=g(K,Z,k);u!==H&&(u=H,p(u.object)),j=h(O,K,Z,D),j&&_(O,K,Z,D)}else{const H=k.wireframe===!0;(u.geometry!==K.id||u.program!==Z.id||u.wireframe!==H)&&(u.geometry=K.id,u.program=Z.id,u.wireframe=H,j=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(j||c)&&(c=!1,R(O,k,Z,K),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(O){return i.isWebGL2?t.bindVertexArray(O):s.bindVertexArrayOES(O)}function x(O){return i.isWebGL2?t.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function g(O,k,Z){const K=Z.wireframe===!0;let D=a[O.id];D===void 0&&(D={},a[O.id]=D);let j=D[k.id];j===void 0&&(j={},D[k.id]=j);let H=j[K];return H===void 0&&(H=m(d()),j[K]=H),H}function m(O){const k=[],Z=[],K=[];for(let D=0;D<r;D++)k[D]=0,Z[D]=0,K[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Z,attributeDivisors:K,object:O,attributes:{},index:null}}function h(O,k,Z,K){const D=u.attributes,j=k.attributes;let H=0;const N=Z.getAttributes();for(const z in N)if(N[z].location>=0){const ie=D[z];let le=j[z];if(le===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;H++}return u.attributesNum!==H||u.index!==K}function _(O,k,Z,K){const D={},j=k.attributes;let H=0;const N=Z.getAttributes();for(const z in N)if(N[z].location>=0){let ie=j[z];ie===void 0&&(z==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),z==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor));const le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),D[z]=le,H++}u.attributes=D,u.attributesNum=H,u.index=K}function v(){const O=u.newAttributes;for(let k=0,Z=O.length;k<Z;k++)O[k]=0}function y(O){M(O,0)}function M(O,k){const Z=u.newAttributes,K=u.enabledAttributes,D=u.attributeDivisors;Z[O]=1,K[O]===0&&(t.enableVertexAttribArray(O),K[O]=1),D[O]!==k&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,k),D[O]=k)}function T(){const O=u.newAttributes,k=u.enabledAttributes;for(let Z=0,K=k.length;Z<K;Z++)k[Z]!==O[Z]&&(t.disableVertexAttribArray(Z),k[Z]=0)}function E(O,k,Z,K,D,j,H){H===!0?t.vertexAttribIPointer(O,k,Z,D,j):t.vertexAttribPointer(O,k,Z,K,D,j)}function R(O,k,Z,K){if(i.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=K.attributes,j=Z.getAttributes(),H=k.defaultAttributeValues;for(const N in j){const z=j[N];if(z.location>=0){let ae=D[N];if(ae===void 0&&(N==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),N==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),ae!==void 0){const ie=ae.normalized,le=ae.itemSize,ve=n.get(ae);if(ve===void 0)continue;const Te=ve.buffer,Se=ve.type,Ye=ve.bytesPerElement,Kt=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||ae.gpuType===iy);if(ae.isInterleavedBufferAttribute){const Ue=ae.data,G=Ue.stride,Pt=ae.offset;if(Ue.isInstancedInterleavedBuffer){for(let Me=0;Me<z.locationSize;Me++)M(z.location+Me,Ue.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Me=0;Me<z.locationSize;Me++)y(z.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let Me=0;Me<z.locationSize;Me++)E(z.location+Me,le/z.locationSize,Se,ie,G*Ye,(Pt+le/z.locationSize*Me)*Ye,Kt)}else{if(ae.isInstancedBufferAttribute){for(let Ue=0;Ue<z.locationSize;Ue++)M(z.location+Ue,ae.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ue=0;Ue<z.locationSize;Ue++)y(z.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Te);for(let Ue=0;Ue<z.locationSize;Ue++)E(z.location+Ue,le/z.locationSize,Se,ie,le*Ye,le/z.locationSize*Ue*Ye,Kt)}}else if(H!==void 0){const ie=H[N];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(z.location,ie);break;case 3:t.vertexAttrib3fv(z.location,ie);break;case 4:t.vertexAttrib4fv(z.location,ie);break;default:t.vertexAttrib1fv(z.location,ie)}}}}T()}function S(){Y();for(const O in a){const k=a[O];for(const Z in k){const K=k[Z];for(const D in K)x(K[D].object),delete K[D];delete k[Z]}delete a[O]}}function A(O){if(a[O.id]===void 0)return;const k=a[O.id];for(const Z in k){const K=k[Z];for(const D in K)x(K[D].object),delete K[D];delete k[Z]}delete a[O.id]}function V(O){for(const k in a){const Z=a[k];if(Z[O.id]===void 0)continue;const K=Z[O.id];for(const D in K)x(K[D].object),delete K[D];delete Z[O.id]}}function Y(){I(),c=!0,u!==l&&(u=l,p(u.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:I,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:y,disableUnusedAttributes:T}}function SR(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,c,f),n.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function MR(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||e.has("OES_texture_float"),M=v&&y,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function ER(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ar,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,v=_*4;let y=h.clippingState||null;l.value=y,y=c(x,d,v,p);for(let M=0;M!==v;++M)y[M]=n[M];h.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,x){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const h=p+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,y=p;v!==g;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function TR(t){let e=new WeakMap;function n(o,a){return a===md?o.mapping=Wo:a===gd&&(o.mapping=Ko),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===md||a===gd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new kw(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class wR extends Fp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Eo=4,T_=[.125,.215,.35,.446,.526,.582],ps=20,Jf=new wR,w_=new Ze;let eh=null;const hs=(1+Math.sqrt(5))/2,oo=1/hs,A_=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,hs,oo),new U(0,hs,-oo),new U(oo,0,hs),new U(-oo,0,hs),new U(hs,oo,0),new U(-hs,oo,0)];class C_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){eh=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=P_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eh),e.scissorTest=!1,gu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wo||e.mapping===Ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:dl,format:yi,colorSpace:Fi,depthBuffer:!1},r=R_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R_(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AR(s)),this._blurMaterial=CR(s,e,n)}return r}_compileMaterial(e){const n=new wn(this._lodPlanes[0],e);this._renderer.compile(n,Jf)}_sceneToCubeUV(e,n,i,r){const a=new _n(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(w_),c.toneMapping=Vr,c.autoClear=!1;const p=new Op({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),x=new wn(new Pl,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(w_),g=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;gu(r,_*v,h>2?v:0,v,v),c.setRenderTarget(r),g&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Wo||e.mapping===Ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=P_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gu(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Jf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=A_[(r-1)%A_.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new wn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ps-1),g=s/x,m=isFinite(s)?1+Math.floor(c*g):ps;m>ps&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);const h=[];let _=0;for(let E=0;E<ps;++E){const R=E/g,S=Math.exp(-R*R/2);h.push(S),E===0?_+=S:E<m&&(_+=2*S)}for(let E=0;E<h.length;E++)h[E]=h[E]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const y=this._sizeLods[r],M=3*y*(r>v-Eo?r-v+Eo:0),T=4*(this._cubeSize-y);gu(n,M,T,3*y,2*y),l.setRenderTarget(n),l.render(f,Jf)}}function AR(t){const e=[],n=[],i=[];let r=t;const s=t-Eo+1+T_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Eo?l=T_[o-t+Eo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,x=6,g=3,m=2,h=1,_=new Float32Array(g*x*p),v=new Float32Array(m*x*p),y=new Float32Array(h*x*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,R=T>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(S,g*x*T),v.set(d,m*x*T);const A=[T,T,T,T,T,T];y.set(A,h*x*T)}const M=new Bi;M.setAttribute("position",new Tn(_,g)),M.setAttribute("uv",new Tn(v,m)),M.setAttribute("faceIndex",new Tn(y,h)),e.push(M),r>Eo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function R_(t,e,n){const i=new Vt(t,e,n);return i.texture.mapping=Gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gu(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CR(t,e,n){const i=new Float32Array(ps),r=new U(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zp(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function P_(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zp(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function b_(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function zp(){return`

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
	`}function RR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===md||l===gd,c=l===Wo||l===Ko;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new C_(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new C_(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function PR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bR(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const g=d.morphAttributes[x];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const g=p[x];for(let m=0,h=g.length;m<h;m++)e.update(g[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,x=f.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let v=0,y=_.length;v<y;v+=3){const M=_[v+0],T=_[v+1],E=_[v+2];d.push(M,T,T,E,E,M)}}else if(x!==void 0){const _=x.array;g=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const M=v+0,T=v+1,E=v+2;d.push(M,T,T,E,E,M)}}else return;const m=new(cy(d)?vy:_y)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function LR(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,p){t.drawElements(s,p,a,d*l),n.update(p,s,1)}function f(d,p,x){if(x===0)return;let g,m;if(r)g=t,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,d*l,x),n.update(p,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function DR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UR(t,e){return t[0]-e[0]}function IR(t,e){return Math.abs(e[1])-Math.abs(t[1])}function NR(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new tt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=x!==void 0?x.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let k=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",k)};var p=k;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),M===!0&&(S=3);let A=c.attributes.position.count*S,V=1;A>e.maxTextureSize&&(V=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const Y=new Float32Array(A*V*4*g),I=new dy(Y,A,V,g);I.type=Li,I.needsUpdate=!0;const O=S*4;for(let Z=0;Z<g;Z++){const K=T[Z],D=E[Z],j=R[Z],H=A*V*4*Z;for(let N=0;N<K.count;N++){const z=N*O;v===!0&&(o.fromBufferAttribute(K,N),Y[H+z+0]=o.x,Y[H+z+1]=o.y,Y[H+z+2]=o.z,Y[H+z+3]=0),y===!0&&(o.fromBufferAttribute(D,N),Y[H+z+4]=o.x,Y[H+z+5]=o.y,Y[H+z+6]=o.z,Y[H+z+7]=0),M===!0&&(o.fromBufferAttribute(j,N),Y[H+z+8]=o.x,Y[H+z+9]=o.y,Y[H+z+10]=o.z,Y[H+z+11]=j.itemSize===4?o.w:1)}}m={count:g,texture:I,size:new _e(A,V)},s.set(c,m),c.addEventListener("dispose",k)}let h=0;for(let v=0;v<d.length;v++)h+=d[v];const _=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=d===void 0?0:d.length;let g=i[c.id];if(g===void 0||g.length!==x){g=[];for(let y=0;y<x;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<x;y++){const M=g[y];M[0]=y,M[1]=d[y]}g.sort(IR);for(let y=0;y<8;y++)y<x&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(UR);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const M=a[y],T=M[0],E=M[1];T!==Number.MAX_SAFE_INTEGER&&E?(m&&c.getAttribute("morphTarget"+y)!==m[T]&&c.setAttribute("morphTarget"+y,m[T]),h&&c.getAttribute("morphNormal"+y)!==h[T]&&c.setAttribute("morphNormal"+y,h[T]),r[y]=E,_+=E):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),h&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function OR(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const My=new ln,Ey=new dy,Ty=new Mw,wy=new yy,L_=[],D_=[],U_=new Float32Array(16),I_=new Float32Array(9),N_=new Float32Array(4);function sa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=L_[r];if(s===void 0&&(s=new Float32Array(r),L_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xc(t,e){let n=D_[e];n===void 0&&(n=new Int32Array(e),D_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function zR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function BR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function HR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Nt(n,i))return;N_.set(i),t.uniformMatrix2fv(this.addr,!1,N_),Ot(n,i)}}function GR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Nt(n,i))return;I_.set(i),t.uniformMatrix3fv(this.addr,!1,I_),Ot(n,i)}}function VR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Nt(n,i))return;U_.set(i),t.uniformMatrix4fv(this.addr,!1,U_),Ot(n,i)}}function WR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function KR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function XR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function jR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function YR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function $R(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function ZR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function QR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||My,r)}function JR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ty,r)}function eP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||wy,r)}function tP(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ey,r)}function nP(t){switch(t){case 5126:return FR;case 35664:return kR;case 35665:return zR;case 35666:return BR;case 35674:return HR;case 35675:return GR;case 35676:return VR;case 5124:case 35670:return WR;case 35667:case 35671:return KR;case 35668:case 35672:return XR;case 35669:case 35673:return jR;case 5125:return YR;case 36294:return qR;case 36295:return $R;case 36296:return ZR;case 35678:case 36198:case 36298:case 36306:case 35682:return QR;case 35679:case 36299:case 36307:return JR;case 35680:case 36300:case 36308:case 36293:return eP;case 36289:case 36303:case 36311:case 36292:return tP}}function iP(t,e){t.uniform1fv(this.addr,e)}function rP(t,e){const n=sa(e,this.size,2);t.uniform2fv(this.addr,n)}function sP(t,e){const n=sa(e,this.size,3);t.uniform3fv(this.addr,n)}function oP(t,e){const n=sa(e,this.size,4);t.uniform4fv(this.addr,n)}function aP(t,e){const n=sa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lP(t,e){const n=sa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function uP(t,e){const n=sa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cP(t,e){t.uniform1iv(this.addr,e)}function fP(t,e){t.uniform2iv(this.addr,e)}function hP(t,e){t.uniform3iv(this.addr,e)}function dP(t,e){t.uniform4iv(this.addr,e)}function pP(t,e){t.uniform1uiv(this.addr,e)}function mP(t,e){t.uniform2uiv(this.addr,e)}function gP(t,e){t.uniform3uiv(this.addr,e)}function _P(t,e){t.uniform4uiv(this.addr,e)}function vP(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||My,s[o])}function xP(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ty,s[o])}function yP(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||wy,s[o])}function SP(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Ey,s[o])}function MP(t){switch(t){case 5126:return iP;case 35664:return rP;case 35665:return sP;case 35666:return oP;case 35674:return aP;case 35675:return lP;case 35676:return uP;case 5124:case 35670:return cP;case 35667:case 35671:return fP;case 35668:case 35672:return hP;case 35669:case 35673:return dP;case 5125:return pP;case 36294:return mP;case 36295:return gP;case 36296:return _P;case 35678:case 36198:case 36298:case 36306:case 35682:return vP;case 35679:case 36299:case 36307:return xP;case 35680:case 36300:case 36308:case 36293:return yP;case 36289:case 36303:case 36311:case 36292:return SP}}class EP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=nP(n.type)}}class TP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=MP(n.type)}}class wP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const th=/(\w+)(\])?(\[|\.)?/g;function O_(t,e){t.seq.push(e),t.map[e.id]=e}function AP(t,e,n){const i=t.name,r=i.length;for(th.lastIndex=0;;){const s=th.exec(i),o=th.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){O_(n,u===void 0?new EP(a,t,e):new TP(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new wP(a),O_(n,f)),n=f}}}class Uu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);AP(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function F_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let CP=0;function RP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function PP(t){switch(t){case Fi:return["Linear","( value )"];case Oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function k_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+RP(t.getShaderSource(e),o)}else return r}function bP(t,e){const n=PP(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function LP(t,e){let n;switch(e){case A1:n="Linear";break;case C1:n="Reinhard";break;case R1:n="OptimizedCineon";break;case P1:n="ACESFilmic";break;case b1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function DP(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Aa).join(`
`)}function UP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function IP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Aa(t){return t!==""}function z_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function B_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NP=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(t){return t.replace(NP,FP)}const OP=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function FP(t,e){let n=Ne[e];if(n===void 0){const i=OP.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yd(n)}const kP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function H_(t){return t.replace(kP,zP)}function zP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function G_(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===f1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function HP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Wo:case Ko:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ko:e="ENVMAP_MODE_REFRACTION";break}return e}function VP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ty:e="ENVMAP_BLENDING_MULTIPLY";break;case T1:e="ENVMAP_BLENDING_MIX";break;case w1:e="ENVMAP_BLENDING_ADD";break}return e}function WP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function KP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=BP(n),u=HP(n),c=GP(n),f=VP(n),d=WP(n),p=n.isWebGL2?"":DP(n),x=UP(s),g=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Aa).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Aa).join(`
`),h.length>0&&(h+=`
`)):(m=[G_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),h=[p,G_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vr?"#define TONE_MAPPING":"",n.toneMapping!==Vr?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Vr?LP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,bP("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Aa).join(`
`)),o=yd(o),o=z_(o,n),o=B_(o,n),a=yd(a),a=z_(a,n),a=B_(a,n),o=H_(o),a=H_(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=_+m+o,y=_+h+a,M=F_(r,r.VERTEX_SHADER,v),T=F_(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,M),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(g).trim(),A=r.getShaderInfoLog(M).trim(),V=r.getShaderInfoLog(T).trim();let Y=!0,I=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,M,T);else{const O=k_(r,M,"vertex"),k=k_(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+O+`
`+k)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||V==="")&&(I=!1);I&&(this.diagnostics={runnable:Y,programLog:S,vertexShader:{log:A,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(M),r.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new Uu(r,g)),E};let R;return this.getAttributes=function(){return R===void 0&&(R=IP(r,g)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}let XP=0;class jP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new YP(e),n.set(e,i)),i}}class YP{constructor(e){this.id=XP++,this.code=e,this.usedTimes=0}}function qP(t,e,n,i,r,s,o){const a=new my,l=new jP,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return S===0?"uv":`uv${S}`}function m(S,A,V,Y,I){const O=Y.fog,k=I.geometry,Z=S.isMeshStandardMaterial?Y.environment:null,K=(S.isMeshStandardMaterial?n:e).get(S.envMap||Z),D=K&&K.mapping===Gc?K.image.height:null,j=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const H=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,N=H!==void 0?H.length:0;let z=0;k.morphAttributes.position!==void 0&&(z=1),k.morphAttributes.normal!==void 0&&(z=2),k.morphAttributes.color!==void 0&&(z=3);let ae,ie,le,ve;if(j){const st=Ri[j];ae=st.vertexShader,ie=st.fragmentShader}else ae=S.vertexShader,ie=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),ve=l.getFragmentShaderID(S);const Te=t.getRenderTarget(),Se=I.isInstancedMesh===!0,Ye=!!S.map,Kt=!!S.matcap,Ue=!!K,G=!!S.aoMap,Pt=!!S.lightMap,Me=!!S.bumpMap,be=!!S.normalMap,Ae=!!S.displacementMap,it=!!S.emissiveMap,Fe=!!S.metalnessMap,De=!!S.roughnessMap,Xe=S.anisotropy>0,bt=S.clearcoat>0,Ft=S.iridescence>0,P=S.sheen>0,w=S.transmission>0,X=Xe&&!!S.anisotropyMap,re=bt&&!!S.clearcoatMap,ee=bt&&!!S.clearcoatNormalMap,se=bt&&!!S.clearcoatRoughnessMap,xe=Ft&&!!S.iridescenceMap,oe=Ft&&!!S.iridescenceThicknessMap,q=P&&!!S.sheenColorMap,b=P&&!!S.sheenRoughnessMap,J=!!S.specularMap,pe=!!S.specularColorMap,ue=!!S.specularIntensityMap,de=w&&!!S.transmissionMap,Pe=w&&!!S.thicknessMap,We=!!S.gradientMap,L=!!S.alphaMap,fe=S.alphaTest>0,W=!!S.alphaHash,ne=!!S.extensions,he=!!k.attributes.uv1,ke=!!k.attributes.uv2,$e=!!k.attributes.uv3;let rt=Vr;return S.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(rt=t.toneMapping),{isWebGL2:c,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:ae,fragmentShader:ie,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:ve,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Se,instancingColor:Se&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Te===null?t.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:Fi,map:Ye,matcap:Kt,envMap:Ue,envMapMode:Ue&&K.mapping,envMapCubeUVHeight:D,aoMap:G,lightMap:Pt,bumpMap:Me,normalMap:be,displacementMap:d&&Ae,emissiveMap:it,normalMapObjectSpace:be&&S.normalMapType===G1,normalMapTangentSpace:be&&S.normalMapType===H1,metalnessMap:Fe,roughnessMap:De,anisotropy:Xe,anisotropyMap:X,clearcoat:bt,clearcoatMap:re,clearcoatNormalMap:ee,clearcoatRoughnessMap:se,iridescence:Ft,iridescenceMap:xe,iridescenceThicknessMap:oe,sheen:P,sheenColorMap:q,sheenRoughnessMap:b,specularMap:J,specularColorMap:pe,specularIntensityMap:ue,transmission:w,transmissionMap:de,thicknessMap:Pe,gradientMap:We,opaque:S.transparent===!1&&S.blending===Do,alphaMap:L,alphaTest:fe,alphaHash:W,combine:S.combine,mapUv:Ye&&g(S.map.channel),aoMapUv:G&&g(S.aoMap.channel),lightMapUv:Pt&&g(S.lightMap.channel),bumpMapUv:Me&&g(S.bumpMap.channel),normalMapUv:be&&g(S.normalMap.channel),displacementMapUv:Ae&&g(S.displacementMap.channel),emissiveMapUv:it&&g(S.emissiveMap.channel),metalnessMapUv:Fe&&g(S.metalnessMap.channel),roughnessMapUv:De&&g(S.roughnessMap.channel),anisotropyMapUv:X&&g(S.anisotropyMap.channel),clearcoatMapUv:re&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:q&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:b&&g(S.sheenRoughnessMap.channel),specularMapUv:J&&g(S.specularMap.channel),specularColorMapUv:pe&&g(S.specularColorMap.channel),specularIntensityMapUv:ue&&g(S.specularIntensityMap.channel),transmissionMapUv:de&&g(S.transmissionMap.channel),thicknessMapUv:Pe&&g(S.thicknessMap.channel),alphaMapUv:L&&g(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(be||Xe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:he,vertexUv2s:ke,vertexUv3s:$e,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(Ye||L),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:rt,useLegacyLights:t._useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ne&&S.extensions.derivatives===!0,extensionFragDepth:ne&&S.extensions.fragDepth===!0,extensionDrawBuffers:ne&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)A.push(V),A.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(_(A,S),v(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),S.push(a.mask)}function y(S){const A=x[S.type];let V;if(A){const Y=Ri[A];V=Iw.clone(Y.uniforms)}else V=S.uniforms;return V}function M(S,A){let V;for(let Y=0,I=u.length;Y<I;Y++){const O=u[Y];if(O.cacheKey===A){V=O,++V.usedTimes;break}}return V===void 0&&(V=new KP(t,A,S,s),u.push(V)),V}function T(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:R}}function $P(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ZP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function V_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function W_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,x,g,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function a(f,d,p,x,g,m){const h=o(f,d,p,x,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,x,g,m){const h=o(f,d,p,x,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||ZP),i.length>1&&i.sort(d||V_),r.length>1&&r.sort(d||V_)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function QP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new W_,t.set(i,[o])):r>=s.length?(o=new W_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function JP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Ze};break;case"SpotLight":n={position:new U,direction:new U,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function eb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tb=0;function nb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ib(t,e){const n=new JP,i=eb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new U);const s=new U,o=new Rt,a=new Rt;function l(c,f){let d=0,p=0,x=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let g=0,m=0,h=0,_=0,v=0,y=0,M=0,T=0,E=0,R=0;c.sort(nb);const S=f===!0?Math.PI:1;for(let V=0,Y=c.length;V<Y;V++){const I=c[V],O=I.color,k=I.intensity,Z=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=O.r*k*S,p+=O.g*k*S,x+=O.b*k*S;else if(I.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(I.sh.coefficients[D],k);else if(I.isDirectionalLight){const D=n.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const j=I.shadow,H=i.get(I);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,r.directionalShadow[g]=H,r.directionalShadowMap[g]=K,r.directionalShadowMatrix[g]=I.shadow.matrix,y++}r.directional[g]=D,g++}else if(I.isSpotLight){const D=n.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(O).multiplyScalar(k*S),D.distance=Z,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,r.spot[h]=D;const j=I.shadow;if(I.map&&(r.spotLightMap[E]=I.map,E++,j.updateMatrices(I),I.castShadow&&R++),r.spotLightMatrix[h]=j.matrix,I.castShadow){const H=i.get(I);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,r.spotShadow[h]=H,r.spotShadowMap[h]=K,T++}h++}else if(I.isRectAreaLight){const D=n.get(I);D.color.copy(O).multiplyScalar(k),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),r.rectArea[_]=D,_++}else if(I.isPointLight){const D=n.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity*S),D.distance=I.distance,D.decay=I.decay,I.castShadow){const j=I.shadow,H=i.get(I);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,r.pointShadow[m]=H,r.pointShadowMap[m]=K,r.pointShadowMatrix[m]=I.shadow.matrix,M++}r.point[m]=D,m++}else if(I.isHemisphereLight){const D=n.get(I);D.skyColor.copy(I.color).multiplyScalar(k*S),D.groundColor.copy(I.groundColor).multiplyScalar(k*S),r.hemi[v]=D,v++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=x;const A=r.hash;(A.directionalLength!==g||A.pointLength!==m||A.spotLength!==h||A.rectAreaLength!==_||A.hemiLength!==v||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==T||A.numSpotMaps!==E)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=_,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=T+E-R,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=R,A.directionalLength=g,A.pointLength=m,A.spotLength=h,A.rectAreaLength=_,A.hemiLength=v,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=T,A.numSpotMaps=E,r.version=tb++)}function u(c,f){let d=0,p=0,x=0,g=0,m=0;const h=f.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),d++}else if(y.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),x++}else if(y.isRectAreaLight){const M=r.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function K_(t,e){const n=new ib(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function rb(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new K_(t,e),n.set(s,[l])):o>=a.length?(l=new K_(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class Ay extends ra{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sb extends ra{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ab=`uniform sampler2D shadow_pass;
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
}`;function lb(t,e,n){let i=new kp;const r=new _e,s=new _e,o=new tt,a=new Ay({depthPacking:Is}),l=new sb,u={},c=n.maxTextureSize,f={[fr]:Ht,[Ht]:fr,[sn]:sn},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ob,fragmentShader:ab}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Bi;x.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yx;let h=this.type;this.render=function(M,T,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const R=t.getRenderTarget(),S=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),V=t.state;V.setBlending(an),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const Y=h!==Yi&&this.type===Yi,I=h===Yi&&this.type!==Yi;for(let O=0,k=M.length;O<k;O++){const Z=M[O],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const D=K.getFrameExtents();if(r.multiply(D),s.copy(K.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/D.x),r.x=s.x*D.x,K.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/D.y),r.y=s.y*D.y,K.mapSize.y=s.y)),K.map===null||Y===!0||I===!0){const H=this.type!==Yi?{minFilter:Dt,magFilter:Dt}:{};K.map!==null&&K.map.dispose(),K.map=new Vt(r.x,r.y,H),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}t.setRenderTarget(K.map),t.clear();const j=K.getViewportCount();for(let H=0;H<j;H++){const N=K.getViewport(H);o.set(s.x*N.x,s.y*N.y,s.x*N.z,s.y*N.w),V.viewport(o),K.updateMatrices(Z,H),i=K.getFrustum(),y(T,E,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===Yi&&_(K,E),K.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(R,S,A)};function _(M,T){const E=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Vt(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(T,null,E,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(T,null,E,p,g,null)}function v(M,T,E,R){let S=null;const A=E.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(A!==void 0)S=A;else if(S=E.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=S.uuid,Y=T.uuid;let I=u[V];I===void 0&&(I={},u[V]=I);let O=I[Y];O===void 0&&(O=S.clone(),I[Y]=O),S=O}if(S.visible=T.visible,S.wireframe=T.wireframe,R===Yi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,E.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const V=t.properties.get(S);V.light=E}return S}function y(M,T,E,R,S){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===Yi)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,M.matrixWorld);const Y=e.update(M),I=M.material;if(Array.isArray(I)){const O=Y.groups;for(let k=0,Z=O.length;k<Z;k++){const K=O[k],D=I[K.materialIndex];if(D&&D.visible){const j=v(M,D,R,S);t.renderBufferDirect(E,null,Y,j,M,K)}}}else if(I.visible){const O=v(M,I,R,S);t.renderBufferDirect(E,null,Y,O,M,null)}}const V=M.children;for(let Y=0,I=V.length;Y<I;Y++)y(V[Y],T,E,R,S)}}function ub(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const fe=new tt;let W=null;const ne=new tt(0,0,0,0);return{setMask:function(he){W!==he&&!L&&(t.colorMask(he,he,he,he),W=he)},setLocked:function(he){L=he},setClear:function(he,ke,$e,rt,mr){mr===!0&&(he*=rt,ke*=rt,$e*=rt),fe.set(he,ke,$e,rt),ne.equals(fe)===!1&&(t.clearColor(he,ke,$e,rt),ne.copy(fe))},reset:function(){L=!1,W=null,ne.set(-1,0,0,0)}}}function s(){let L=!1,fe=null,W=null,ne=null;return{setTest:function(he){he?Te(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(he){fe!==he&&!L&&(t.depthMask(he),fe=he)},setFunc:function(he){if(W!==he){switch(he){case Zx:t.depthFunc(t.NEVER);break;case Qx:t.depthFunc(t.ALWAYS);break;case pd:t.depthFunc(t.LESS);break;case uc:t.depthFunc(t.LEQUAL);break;case cc:t.depthFunc(t.EQUAL);break;case Jx:t.depthFunc(t.GEQUAL);break;case ey:t.depthFunc(t.GREATER);break;case Dp:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}W=he}},setLocked:function(he){L=he},setClear:function(he){ne!==he&&(t.clearDepth(he),ne=he)},reset:function(){L=!1,fe=null,W=null,ne=null}}}function o(){let L=!1,fe=null,W=null,ne=null,he=null,ke=null,$e=null,rt=null,mr=null;return{setTest:function(st){L||(st?Te(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(st){fe!==st&&!L&&(t.stencilMask(st),fe=st)},setFunc:function(st,wi,hn){(W!==st||ne!==wi||he!==hn)&&(t.stencilFunc(st,wi,hn),W=st,ne=wi,he=hn)},setOp:function(st,wi,hn){(ke!==st||$e!==wi||rt!==hn)&&(t.stencilOp(st,wi,hn),ke=st,$e=wi,rt=hn)},setLocked:function(st){L=st},setClear:function(st){mr!==st&&(t.clearStencil(st),mr=st)},reset:function(){L=!1,fe=null,W=null,ne=null,he=null,ke=null,$e=null,rt=null,mr=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},x=new WeakMap,g=[],m=null,h=!1,_=null,v=null,y=null,M=null,T=null,E=null,R=null,S=!1,A=null,V=null,Y=null,I=null,O=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),Z=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Z=K>=2);let j=null,H={};const N=t.getParameter(t.SCISSOR_BOX),z=t.getParameter(t.VIEWPORT),ae=new tt().fromArray(N),ie=new tt().fromArray(z);function le(L,fe,W,ne){const he=new Uint8Array(4),ke=t.createTexture();t.bindTexture(L,ke),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<W;$e++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(fe,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,he):t.texImage2D(fe+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,he);return ke}const ve={};ve[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Te(t.DEPTH_TEST),l.setFunc(uc),Ae(!1),it(bg),Te(t.CULL_FACE),Me(an);function Te(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Se(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ye(L,fe){return p[L]!==fe?(t.bindFramebuffer(L,fe),p[L]=fe,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=fe),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=fe)),!0):!1}function Kt(L,fe){let W=g,ne=!1;if(L)if(W=x.get(fe),W===void 0&&(W=[],x.set(fe,W)),L.isWebGLMultipleRenderTargets){const he=L.texture;if(W.length!==he.length||W[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,$e=he.length;ke<$e;ke++)W[ke]=t.COLOR_ATTACHMENT0+ke;W.length=he.length,ne=!0}}else W[0]!==t.COLOR_ATTACHMENT0&&(W[0]=t.COLOR_ATTACHMENT0,ne=!0);else W[0]!==t.BACK&&(W[0]=t.BACK,ne=!0);ne&&(n.isWebGL2?t.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Ue(L){return m!==L?(t.useProgram(L),m=L,!0):!1}const G={[lo]:t.FUNC_ADD,[d1]:t.FUNC_SUBTRACT,[p1]:t.FUNC_REVERSE_SUBTRACT};if(i)G[Ig]=t.MIN,G[Ng]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(G[Ig]=L.MIN_EXT,G[Ng]=L.MAX_EXT)}const Pt={[m1]:t.ZERO,[g1]:t.ONE,[_1]:t.SRC_COLOR,[qx]:t.SRC_ALPHA,[E1]:t.SRC_ALPHA_SATURATE,[S1]:t.DST_COLOR,[x1]:t.DST_ALPHA,[v1]:t.ONE_MINUS_SRC_COLOR,[$x]:t.ONE_MINUS_SRC_ALPHA,[M1]:t.ONE_MINUS_DST_COLOR,[y1]:t.ONE_MINUS_DST_ALPHA};function Me(L,fe,W,ne,he,ke,$e,rt){if(L===an){h===!0&&(Se(t.BLEND),h=!1);return}if(h===!1&&(Te(t.BLEND),h=!0),L!==h1){if(L!==_||rt!==S){if((v!==lo||T!==lo)&&(t.blendEquation(t.FUNC_ADD),v=lo,T=lo),rt)switch(L){case Do:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.ONE,t.ONE);break;case Dg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ug:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Do:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Dg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ug:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,M=null,E=null,R=null,_=L,S=rt}return}he=he||fe,ke=ke||W,$e=$e||ne,(fe!==v||he!==T)&&(t.blendEquationSeparate(G[fe],G[he]),v=fe,T=he),(W!==y||ne!==M||ke!==E||$e!==R)&&(t.blendFuncSeparate(Pt[W],Pt[ne],Pt[ke],Pt[$e]),y=W,M=ne,E=ke,R=$e),_=L,S=!1}function be(L,fe){L.side===sn?Se(t.CULL_FACE):Te(t.CULL_FACE);let W=L.side===Ht;fe&&(W=!W),Ae(W),L.blending===Do&&L.transparent===!1?Me(an):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ne=L.stencilWrite;u.setTest(ne),ne&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),De(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Te(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){A!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),A=L)}function it(L){L!==u1?(Te(t.CULL_FACE),L!==V&&(L===bg?t.cullFace(t.BACK):L===c1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),V=L}function Fe(L){L!==Y&&(Z&&t.lineWidth(L),Y=L)}function De(L,fe,W){L?(Te(t.POLYGON_OFFSET_FILL),(I!==fe||O!==W)&&(t.polygonOffset(fe,W),I=fe,O=W)):Se(t.POLYGON_OFFSET_FILL)}function Xe(L){L?Te(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function bt(L){L===void 0&&(L=t.TEXTURE0+k-1),j!==L&&(t.activeTexture(L),j=L)}function Ft(L,fe,W){W===void 0&&(j===null?W=t.TEXTURE0+k-1:W=j);let ne=H[W];ne===void 0&&(ne={type:void 0,texture:void 0},H[W]=ne),(ne.type!==L||ne.texture!==fe)&&(j!==W&&(t.activeTexture(W),j=W),t.bindTexture(L,fe||ve[L]),ne.type=L,ne.texture=fe)}function P(){const L=H[j];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function w(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function b(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){ae.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function ue(L){ie.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function de(L,fe){let W=f.get(fe);W===void 0&&(W=new WeakMap,f.set(fe,W));let ne=W.get(L);ne===void 0&&(ne=t.getUniformBlockIndex(fe,L.name),W.set(L,ne))}function Pe(L,fe){const ne=f.get(fe).get(L);c.get(fe)!==ne&&(t.uniformBlockBinding(fe,ne,L.__bindingPointIndex),c.set(fe,ne))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},j=null,H={},p={},x=new WeakMap,g=[],m=null,h=!1,_=null,v=null,y=null,M=null,T=null,E=null,R=null,S=!1,A=null,V=null,Y=null,I=null,O=null,ae.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Te,disable:Se,bindFramebuffer:Ye,drawBuffers:Kt,useProgram:Ue,setBlending:Me,setMaterial:be,setFlipSided:Ae,setCullFace:it,setLineWidth:Fe,setPolygonOffset:De,setScissorTest:Xe,activeTexture:bt,bindTexture:Ft,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:X,texImage2D:b,texImage3D:J,updateUBOMapping:de,uniformBlockBinding:Pe,texStorage2D:oe,texStorage3D:q,texSubImage2D:re,texSubImage3D:ee,compressedTexSubImage2D:se,compressedTexSubImage3D:xe,scissor:pe,viewport:ue,reset:We}}function cb(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let g;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,w){return h?new OffscreenCanvas(P,w):ml("canvas")}function v(P,w,X,re){let ee=1;if((P.width>re||P.height>re)&&(ee=re/Math.max(P.width,P.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const se=w?dc:Math.floor,xe=se(ee*P.width),oe=se(ee*P.height);g===void 0&&(g=_(xe,oe));const q=X?_(xe,oe):g;return q.width=xe,q.height=oe,q.getContext("2d").drawImage(P,0,0,xe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+xe+"x"+oe+")."),q}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function y(P){return xd(P.width)&&xd(P.height)}function M(P){return a?!1:P.wrapS!==xi||P.wrapT!==xi||P.minFilter!==Dt&&P.minFilter!==nn}function T(P,w){return P.generateMipmaps&&w&&P.minFilter!==Dt&&P.minFilter!==nn}function E(P){t.generateMipmap(P)}function R(P,w,X,re,ee=!1){if(a===!1)return w;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let se=w;return w===t.RED&&(X===t.FLOAT&&(se=t.R32F),X===t.HALF_FLOAT&&(se=t.R16F),X===t.UNSIGNED_BYTE&&(se=t.R8)),w===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(se=t.R8UI),X===t.UNSIGNED_SHORT&&(se=t.R16UI),X===t.UNSIGNED_INT&&(se=t.R32UI),X===t.BYTE&&(se=t.R8I),X===t.SHORT&&(se=t.R16I),X===t.INT&&(se=t.R32I)),w===t.RG&&(X===t.FLOAT&&(se=t.RG32F),X===t.HALF_FLOAT&&(se=t.RG16F),X===t.UNSIGNED_BYTE&&(se=t.RG8)),w===t.RGBA&&(X===t.FLOAT&&(se=t.RGBA32F),X===t.HALF_FLOAT&&(se=t.RGBA16F),X===t.UNSIGNED_BYTE&&(se=re===Oe&&ee===!1?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)),(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function S(P,w,X){return T(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==Dt&&P.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function A(P){return P===Dt||P===Og||P===Pf?t.NEAREST:t.LINEAR}function V(P){const w=P.target;w.removeEventListener("dispose",V),I(w),w.isVideoTexture&&x.delete(w)}function Y(P){const w=P.target;w.removeEventListener("dispose",Y),k(w)}function I(P){const w=i.get(P);if(w.__webglInit===void 0)return;const X=P.source,re=m.get(X);if(re){const ee=re[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&O(P),Object.keys(re).length===0&&m.delete(X)}i.remove(P)}function O(P){const w=i.get(P);t.deleteTexture(w.__webglTexture);const X=P.source,re=m.get(X);delete re[w.__cacheKey],o.memory.textures--}function k(P){const w=P.texture,X=i.get(P),re=i.get(w);if(re.__webglTexture!==void 0&&(t.deleteTexture(re.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(X.__webglFramebuffer[ee]))for(let se=0;se<X.__webglFramebuffer[ee].length;se++)t.deleteFramebuffer(X.__webglFramebuffer[ee][se]);else t.deleteFramebuffer(X.__webglFramebuffer[ee]);X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[ee])}else{if(Array.isArray(X.__webglFramebuffer))for(let ee=0;ee<X.__webglFramebuffer.length;ee++)t.deleteFramebuffer(X.__webglFramebuffer[ee]);else t.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ee=0;ee<X.__webglColorRenderbuffer.length;ee++)X.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[ee]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ee=0,se=w.length;ee<se;ee++){const xe=i.get(w[ee]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(w[ee])}i.remove(w),i.remove(P)}let Z=0;function K(){Z=0}function D(){const P=Z;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),Z+=1,P}function j(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function H(P,w){const X=i.get(P);if(P.isVideoTexture&&bt(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(X,P,w);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+w)}function N(P,w){const X=i.get(P);if(P.version>0&&X.__version!==P.version){Ye(X,P,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+w)}function z(P,w){const X=i.get(P);if(P.version>0&&X.__version!==P.version){Ye(X,P,w);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+w)}function ae(P,w){const X=i.get(P);if(P.version>0&&X.__version!==P.version){Kt(X,P,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+w)}const ie={[fc]:t.REPEAT,[xi]:t.CLAMP_TO_EDGE,[_d]:t.MIRRORED_REPEAT},le={[Dt]:t.NEAREST,[Og]:t.NEAREST_MIPMAP_NEAREST,[Pf]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[L1]:t.LINEAR_MIPMAP_NEAREST,[hl]:t.LINEAR_MIPMAP_LINEAR},ve={[W1]:t.NEVER,[Z1]:t.ALWAYS,[K1]:t.LESS,[j1]:t.LEQUAL,[X1]:t.EQUAL,[$1]:t.GEQUAL,[Y1]:t.GREATER,[q1]:t.NOTEQUAL};function Te(P,w,X){if(X?(t.texParameteri(P,t.TEXTURE_WRAP_S,ie[w.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,ie[w.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,ie[w.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,le[w.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,le[w.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==xi||w.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,A(w.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,A(w.minFilter)),w.minFilter!==Dt&&w.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ve[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Dt||w.minFilter!==Pf&&w.minFilter!==hl||w.type===Li&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===dl&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(P,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Se(P,w){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",V));const re=w.source;let ee=m.get(re);ee===void 0&&(ee={},m.set(re,ee));const se=j(w);if(se!==P.__cacheKey){ee[se]===void 0&&(ee[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ee[se].usedTimes++;const xe=ee[P.__cacheKey];xe!==void 0&&(ee[P.__cacheKey].usedTimes--,xe.usedTimes===0&&O(w)),P.__cacheKey=se,P.__webglTexture=ee[se].texture}return X}function Ye(P,w,X){let re=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(re=t.TEXTURE_3D);const ee=Se(P,w),se=w.source;n.bindTexture(re,P.__webglTexture,t.TEXTURE0+X);const xe=i.get(se);if(se.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const oe=M(w)&&y(w.image)===!1;let q=v(w.image,oe,!1,c);q=Ft(w,q);const b=y(q)||a,J=s.convert(w.format,w.colorSpace);let pe=s.convert(w.type),ue=R(w.internalFormat,J,pe,w.colorSpace);Te(re,w,b);let de;const Pe=w.mipmaps,We=a&&w.isVideoTexture!==!0,L=xe.__version===void 0||ee===!0,fe=S(w,q,b);if(w.isDepthTexture)ue=t.DEPTH_COMPONENT,a?w.type===Li?ue=t.DEPTH_COMPONENT32F:w.type===nr?ue=t.DEPTH_COMPONENT24:w.type===Wr?ue=t.DEPTH24_STENCIL8:ue=t.DEPTH_COMPONENT16:w.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ms&&ue===t.DEPTH_COMPONENT&&w.type!==Up&&w.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=nr,pe=s.convert(w.type)),w.format===Us&&ue===t.DEPTH_COMPONENT&&(ue=t.DEPTH_STENCIL,w.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Wr,pe=s.convert(w.type))),L&&(We?n.texStorage2D(t.TEXTURE_2D,1,ue,q.width,q.height):n.texImage2D(t.TEXTURE_2D,0,ue,q.width,q.height,0,J,pe,null));else if(w.isDataTexture)if(Pe.length>0&&b){We&&L&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Pe[0].width,Pe[0].height);for(let W=0,ne=Pe.length;W<ne;W++)de=Pe[W],We?n.texSubImage2D(t.TEXTURE_2D,W,0,0,de.width,de.height,J,pe,de.data):n.texImage2D(t.TEXTURE_2D,W,ue,de.width,de.height,0,J,pe,de.data);w.generateMipmaps=!1}else We?(L&&n.texStorage2D(t.TEXTURE_2D,fe,ue,q.width,q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,q.width,q.height,J,pe,q.data)):n.texImage2D(t.TEXTURE_2D,0,ue,q.width,q.height,0,J,pe,q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){We&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,Pe[0].width,Pe[0].height,q.depth);for(let W=0,ne=Pe.length;W<ne;W++)de=Pe[W],w.format!==yi?J!==null?We?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,q.depth,J,de.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,ue,de.width,de.height,q.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,de.width,de.height,q.depth,J,pe,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,ue,de.width,de.height,q.depth,0,J,pe,de.data)}else{We&&L&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Pe[0].width,Pe[0].height);for(let W=0,ne=Pe.length;W<ne;W++)de=Pe[W],w.format!==yi?J!==null?We?n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,de.width,de.height,J,de.data):n.compressedTexImage2D(t.TEXTURE_2D,W,ue,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage2D(t.TEXTURE_2D,W,0,0,de.width,de.height,J,pe,de.data):n.texImage2D(t.TEXTURE_2D,W,ue,de.width,de.height,0,J,pe,de.data)}else if(w.isDataArrayTexture)We?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ue,q.width,q.height,q.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,J,pe,q.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ue,q.width,q.height,q.depth,0,J,pe,q.data);else if(w.isData3DTexture)We?(L&&n.texStorage3D(t.TEXTURE_3D,fe,ue,q.width,q.height,q.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,J,pe,q.data)):n.texImage3D(t.TEXTURE_3D,0,ue,q.width,q.height,q.depth,0,J,pe,q.data);else if(w.isFramebufferTexture){if(L)if(We)n.texStorage2D(t.TEXTURE_2D,fe,ue,q.width,q.height);else{let W=q.width,ne=q.height;for(let he=0;he<fe;he++)n.texImage2D(t.TEXTURE_2D,he,ue,W,ne,0,J,pe,null),W>>=1,ne>>=1}}else if(Pe.length>0&&b){We&&L&&n.texStorage2D(t.TEXTURE_2D,fe,ue,Pe[0].width,Pe[0].height);for(let W=0,ne=Pe.length;W<ne;W++)de=Pe[W],We?n.texSubImage2D(t.TEXTURE_2D,W,0,0,J,pe,de):n.texImage2D(t.TEXTURE_2D,W,ue,J,pe,de);w.generateMipmaps=!1}else We?(L&&n.texStorage2D(t.TEXTURE_2D,fe,ue,q.width,q.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J,pe,q)):n.texImage2D(t.TEXTURE_2D,0,ue,J,pe,q);T(w,b)&&E(re),xe.__version=se.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Kt(P,w,X){if(w.image.length!==6)return;const re=Se(P,w),ee=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+X);const se=i.get(ee);if(ee.version!==se.__version||re===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const xe=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,q=[];for(let W=0;W<6;W++)!xe&&!oe?q[W]=v(w.image[W],!1,!0,u):q[W]=oe?w.image[W].image:w.image[W],q[W]=Ft(w,q[W]);const b=q[0],J=y(b)||a,pe=s.convert(w.format,w.colorSpace),ue=s.convert(w.type),de=R(w.internalFormat,pe,ue,w.colorSpace),Pe=a&&w.isVideoTexture!==!0,We=se.__version===void 0||re===!0;let L=S(w,b,J);Te(t.TEXTURE_CUBE_MAP,w,J);let fe;if(xe){Pe&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,de,b.width,b.height);for(let W=0;W<6;W++){fe=q[W].mipmaps;for(let ne=0;ne<fe.length;ne++){const he=fe[ne];w.format!==yi?pe!==null?Pe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,0,0,he.width,he.height,pe,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,0,0,he.width,he.height,pe,ue,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne,de,he.width,he.height,0,pe,ue,he.data)}}}else{fe=w.mipmaps,Pe&&We&&(fe.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,de,q[0].width,q[0].height));for(let W=0;W<6;W++)if(oe){Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,q[W].width,q[W].height,pe,ue,q[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,de,q[W].width,q[W].height,0,pe,ue,q[W].data);for(let ne=0;ne<fe.length;ne++){const ke=fe[ne].image[W].image;Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,0,0,ke.width,ke.height,pe,ue,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,de,ke.width,ke.height,0,pe,ue,ke.data)}}else{Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,pe,ue,q[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,de,pe,ue,q[W]);for(let ne=0;ne<fe.length;ne++){const he=fe[ne];Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,0,0,pe,ue,he.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ne+1,de,pe,ue,he.image[W])}}}T(w,J)&&E(t.TEXTURE_CUBE_MAP),se.__version=ee.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ue(P,w,X,re,ee,se){const xe=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),q=R(X.internalFormat,xe,oe,X.colorSpace);if(!i.get(w).__hasExternalTextures){const J=Math.max(1,w.width>>se),pe=Math.max(1,w.height>>se);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,se,q,J,pe,w.depth,0,xe,oe,null):n.texImage2D(ee,se,q,J,pe,0,xe,oe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Xe(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ee,i.get(X).__webglTexture,0,De(w)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ee,i.get(X).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(P,w,X){if(t.bindRenderbuffer(t.RENDERBUFFER,P),w.depthBuffer&&!w.stencilBuffer){let re=t.DEPTH_COMPONENT16;if(X||Xe(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Li?re=t.DEPTH_COMPONENT32F:ee.type===nr&&(re=t.DEPTH_COMPONENT24));const se=De(w);Xe(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,re,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,re,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,re,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(w.depthBuffer&&w.stencilBuffer){const re=De(w);X&&Xe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,w.width,w.height):Xe(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const re=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<re.length;ee++){const se=re[ee],xe=s.convert(se.format,se.colorSpace),oe=s.convert(se.type),q=R(se.internalFormat,xe,oe,se.colorSpace),b=De(w);X&&Xe(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,b,q,w.width,w.height):Xe(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b,q,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,q,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const re=i.get(w.depthTexture).__webglTexture,ee=De(w);if(w.depthTexture.format===Ms)Xe(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(w.depthTexture.format===Us)Xe(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Me(P){const w=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Pt(w.__webglFramebuffer,P)}else if(X){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]=t.createRenderbuffer(),G(w.__webglDepthbuffer[re],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),G(w.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(P,w,X){const re=i.get(P);w!==void 0&&Ue(re.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Me(P)}function Ae(P){const w=P.texture,X=i.get(P),re=i.get(w);P.addEventListener("dispose",Y),P.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=w.version,o.memory.textures++);const ee=P.isWebGLCubeRenderTarget===!0,se=P.isWebGLMultipleRenderTargets===!0,xe=y(P)||a;if(ee){X.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[oe]=[];for(let q=0;q<w.mipmaps.length;q++)X.__webglFramebuffer[oe][q]=t.createFramebuffer()}else X.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)X.__webglFramebuffer[oe]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const oe=P.texture;for(let q=0,b=oe.length;q<b;q++){const J=i.get(oe[q]);J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Xe(P)===!1){const oe=se?w:[w];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<oe.length;q++){const b=oe[q];X.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[q]);const J=s.convert(b.format,b.colorSpace),pe=s.convert(b.type),ue=R(b.internalFormat,J,pe,b.colorSpace,P.isXRRenderTarget===!0),de=De(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ue,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,X.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),G(X.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),Te(t.TEXTURE_CUBE_MAP,w,xe);for(let oe=0;oe<6;oe++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let q=0;q<w.mipmaps.length;q++)Ue(X.__webglFramebuffer[oe][q],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,q);else Ue(X.__webglFramebuffer[oe],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);T(w,xe)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const oe=P.texture;for(let q=0,b=oe.length;q<b;q++){const J=oe[q],pe=i.get(J);n.bindTexture(t.TEXTURE_2D,pe.__webglTexture),Te(t.TEXTURE_2D,J,xe),Ue(X.__webglFramebuffer,P,J,t.COLOR_ATTACHMENT0+q,t.TEXTURE_2D,0),T(J,xe)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?oe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,re.__webglTexture),Te(oe,w,xe),a&&w.mipmaps&&w.mipmaps.length>0)for(let q=0;q<w.mipmaps.length;q++)Ue(X.__webglFramebuffer[q],P,w,t.COLOR_ATTACHMENT0,oe,q);else Ue(X.__webglFramebuffer,P,w,t.COLOR_ATTACHMENT0,oe,0);T(w,xe)&&E(oe),n.unbindTexture()}P.depthBuffer&&Me(P)}function it(P){const w=y(P)||a,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let re=0,ee=X.length;re<ee;re++){const se=X[re];if(T(se,w)){const xe=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,oe=i.get(se).__webglTexture;n.bindTexture(xe,oe),E(xe),n.unbindTexture()}}}function Fe(P){if(a&&P.samples>0&&Xe(P)===!1){const w=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,re=P.height;let ee=t.COLOR_BUFFER_BIT;const se=[],xe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=i.get(P),q=P.isWebGLMultipleRenderTargets===!0;if(q)for(let b=0;b<w.length;b++)n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+b,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+b,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let b=0;b<w.length;b++){se.push(t.COLOR_ATTACHMENT0+b),P.depthBuffer&&se.push(xe);const J=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(J===!1&&(P.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),q&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,oe.__webglColorRenderbuffer[b]),J===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),q){const pe=i.get(w[b]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,X,re,0,0,X,re,ee,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let b=0;b<w.length;b++){n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+b,t.RENDERBUFFER,oe.__webglColorRenderbuffer[b]);const J=i.get(w[b]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,oe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+b,t.TEXTURE_2D,J,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function De(P){return Math.min(f,P.samples)}function Xe(P){const w=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function bt(P){const w=o.render.frame;x.get(P)!==w&&(x.set(P,w),P.update())}function Ft(P,w){const X=P.colorSpace,re=P.format,ee=P.type;return P.isCompressedTexture===!0||P.format===vd||X!==Fi&&X!==Es&&(X===Oe?a===!1?e.has("EXT_sRGB")===!0&&re===yi?(P.format=vd,P.minFilter=nn,P.generateMipmaps=!1):w=fy.sRGBToLinear(w):(re!==yi||ee!==qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}this.allocateTextureUnit=D,this.resetTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=ae,this.rebindTextures=be,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Xe}function fb(t,e,n){const i=n.isWebGL2;function r(s,o=Es){let a;if(s===qt)return t.UNSIGNED_BYTE;if(s===ry)return t.UNSIGNED_SHORT_4_4_4_4;if(s===sy)return t.UNSIGNED_SHORT_5_5_5_1;if(s===D1)return t.BYTE;if(s===U1)return t.SHORT;if(s===Up)return t.UNSIGNED_SHORT;if(s===iy)return t.INT;if(s===nr)return t.UNSIGNED_INT;if(s===Li)return t.FLOAT;if(s===dl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===I1)return t.ALPHA;if(s===yi)return t.RGBA;if(s===N1)return t.LUMINANCE;if(s===O1)return t.LUMINANCE_ALPHA;if(s===Ms)return t.DEPTH_COMPONENT;if(s===Us)return t.DEPTH_STENCIL;if(s===vd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===F1)return t.RED;if(s===oy)return t.RED_INTEGER;if(s===k1)return t.RG;if(s===ay)return t.RG_INTEGER;if(s===ly)return t.RGBA_INTEGER;if(s===bf||s===Lf||s===Df||s===Uf)if(o===Oe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===bf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Df)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Uf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===bf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Df)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Uf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fg||s===kg||s===zg||s===Bg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Fg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===z1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Hg||s===Gg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Hg)return o===Oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Gg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vg||s===Wg||s===Kg||s===Xg||s===jg||s===Yg||s===qg||s===$g||s===Zg||s===Qg||s===Jg||s===e_||s===t_||s===n_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Wg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===qg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$g)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jg)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===e_)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===t_)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===n_)return o===Oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===If)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===If)return o===Oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===B1||s===i_||s===r_||s===s_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===If)return a.COMPRESSED_RED_RGTC1_EXT;if(s===i_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===r_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===s_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class hb extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ca extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&d>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(db)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Cy extends ln{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Ms,c!==Ms&&c!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ms&&(i=nr),i===void 0&&c===Us&&(i=Wr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pb extends zi{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,x=null;const g=n.getContextAttributes();let m=null,h=null;const _=[],v=[],y=new _n;y.layers.enable(1),y.viewport=new tt;const M=new _n;M.layers.enable(2),M.viewport=new tt;const T=[y,M],E=new hb;E.layers.enable(1),E.layers.enable(2);let R=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let z=_[N];return z===void 0&&(z=new nh,_[N]=z),z.getTargetRaySpace()},this.getControllerGrip=function(N){let z=_[N];return z===void 0&&(z=new nh,_[N]=z),z.getGripSpace()},this.getHand=function(N){let z=_[N];return z===void 0&&(z=new nh,_[N]=z),z.getHandSpace()};function A(N){const z=v.indexOf(N.inputSource);if(z===-1)return;const ae=_[z];ae!==void 0&&(ae.update(N.inputSource,N.frame,u||o),ae.dispatchEvent({type:N.type,data:N.inputSource}))}function V(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Y);for(let N=0;N<_.length;N++){const z=v[N];z!==null&&(v[N]=null,_[N].disconnect(z))}R=null,S=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(N){u=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,z),r.updateRenderState({baseLayer:p}),h=new Vt(p.framebufferWidth,p.framebufferHeight,{format:yi,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let z=null,ae=null,ie=null;g.depth&&(ie=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,z=g.stencil?Us:Ms,ae=g.stencil?Wr:nr);const le={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(le),r.updateRenderState({layers:[d]}),h=new Vt(d.textureWidth,d.textureHeight,{format:yi,type:qt,depthTexture:new Cy(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ve=e.properties.get(h);ve.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(N){for(let z=0;z<N.removed.length;z++){const ae=N.removed[z],ie=v.indexOf(ae);ie>=0&&(v[ie]=null,_[ie].disconnect(ae))}for(let z=0;z<N.added.length;z++){const ae=N.added[z];let ie=v.indexOf(ae);if(ie===-1){for(let ve=0;ve<_.length;ve++)if(ve>=v.length){v.push(ae),ie=ve;break}else if(v[ve]===null){v[ve]=ae,ie=ve;break}if(ie===-1)break}const le=_[ie];le&&le.connect(ae)}}const I=new U,O=new U;function k(N,z,ae){I.setFromMatrixPosition(z.matrixWorld),O.setFromMatrixPosition(ae.matrixWorld);const ie=I.distanceTo(O),le=z.projectionMatrix.elements,ve=ae.projectionMatrix.elements,Te=le[14]/(le[10]-1),Se=le[14]/(le[10]+1),Ye=(le[9]+1)/le[5],Kt=(le[9]-1)/le[5],Ue=(le[8]-1)/le[0],G=(ve[8]+1)/ve[0],Pt=Te*Ue,Me=Te*G,be=ie/(-Ue+G),Ae=be*-Ue;z.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Ae),N.translateZ(be),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const it=Te+be,Fe=Se+be,De=Pt-Ae,Xe=Me+(ie-Ae),bt=Ye*Se/Fe*it,Ft=Kt*Se/Fe*it;N.projectionMatrix.makePerspective(De,Xe,bt,Ft,it,Fe),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function Z(N,z){z===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(z.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;E.near=M.near=y.near=N.near,E.far=M.far=y.far=N.far,(R!==E.near||S!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,S=E.far);const z=N.parent,ae=E.cameras;Z(E,z);for(let ie=0;ie<ae.length;ie++)Z(ae[ie],z);ae.length===2?k(E,y,M):E.projectionMatrix.copy(y.projectionMatrix),K(N,E,z)};function K(N,z,ae){ae===null?N.matrix.copy(z.matrixWorld):(N.matrix.copy(ae.matrixWorld),N.matrix.invert(),N.matrix.multiply(z.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0);const ie=N.children;for(let le=0,ve=ie.length;le<ve;le++)ie[le].updateMatrixWorld(!0);N.projectionMatrix.copy(z.projectionMatrix),N.projectionMatrixInverse.copy(z.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=pl*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let D=null;function j(N,z){if(c=z.getViewerPose(u||o),x=z,c!==null){const ae=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ie=!1;ae.length!==E.cameras.length&&(E.cameras.length=0,ie=!0);for(let le=0;le<ae.length;le++){const ve=ae[le];let Te=null;if(p!==null)Te=p.getViewport(ve);else{const Ye=f.getViewSubImage(d,ve);Te=Ye.viewport,le===0&&(e.setRenderTargetTextures(h,Ye.colorTexture,d.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(h))}let Se=T[le];Se===void 0&&(Se=new _n,Se.layers.enable(le),Se.viewport=new tt,T[le]=Se),Se.matrix.fromArray(ve.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(ve.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Te.x,Te.y,Te.width,Te.height),le===0&&(E.matrix.copy(Se.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ie===!0&&E.cameras.push(Se)}}for(let ae=0;ae<_.length;ae++){const ie=v[ae],le=_[ae];ie!==null&&le!==void 0&&le.update(ie,z,u||o)}D&&D(N,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),x=null}const H=new Sy;H.setAnimationLoop(j),this.setAnimationLoop=function(N){D=N},this.dispose=function(){}}}function mb(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,xy(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,v,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ht&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ht&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*v,n(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ht&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gb(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(x(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const M=v.program;i.updateUBOMapping(_,M);const T=e.render.frame;s[_.id]!==T&&(d(_),s[_.id]=T)}function c(_){const v=f();_.__bindingPointIndex=v;const y=t.createBuffer(),M=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,M,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=r[_.id],y=_.uniforms,M=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,E=y.length;T<E;T++){const R=y[T];if(p(R,T,M)===!0){const S=R.__offset,A=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let Y=0;Y<A.length;Y++){const I=A[Y],O=g(I);typeof I=="number"?(R.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,S+V,R.__data)):I.isMatrix3?(R.__data[0]=I.elements[0],R.__data[1]=I.elements[1],R.__data[2]=I.elements[2],R.__data[3]=I.elements[0],R.__data[4]=I.elements[3],R.__data[5]=I.elements[4],R.__data[6]=I.elements[5],R.__data[7]=I.elements[0],R.__data[8]=I.elements[6],R.__data[9]=I.elements[7],R.__data[10]=I.elements[8],R.__data[11]=I.elements[0]):(I.toArray(R.__data,V),V+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,S,R.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,y){const M=_.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const T=Array.isArray(M)?M:[M],E=[];for(let R=0;R<T.length;R++)E.push(T[R].clone());y[v]=E}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const T=Array.isArray(y[v])?y[v]:[y[v]],E=Array.isArray(M)?M:[M];for(let R=0;R<T.length;R++){const S=T[R];if(S.equals(E[R])===!1)return S.copy(E[R]),!0}}return!1}function x(_){const v=_.uniforms;let y=0;const M=16;let T=0;for(let E=0,R=v.length;E<R;E++){const S=v[E],A={boundary:0,storage:0},V=Array.isArray(S.value)?S.value:[S.value];for(let Y=0,I=V.length;Y<I;Y++){const O=V[Y],k=g(O);A.boundary+=k.boundary,A.storage+=k.storage}if(S.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,E>0){T=y%M;const Y=M-T;T!==0&&Y-A.boundary<0&&(y+=M-T,S.__offset=y)}y+=A.storage}return T=y%M,T>0&&(y+=M-T),_.__size=y,_.__cache={},this}function g(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}function _b(){const t=ml("canvas");return t.style.display="block",t}class Ry{constructor(e={}){const{canvas:n=_b(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Oe,this._useLegacyLights=!1,this.toneMapping=Vr,this.toneMappingExposure=1;const v=this;let y=!1,M=0,T=0,E=null,R=-1,S=null;const A=new tt,V=new tt;let Y=null;const I=new Ze(0);let O=0,k=n.width,Z=n.height,K=1,D=null,j=null;const H=new tt(0,0,k,Z),N=new tt(0,0,k,Z);let z=!1;const ae=new kp;let ie=!1,le=!1,ve=null;const Te=new Rt,Se=new _e,Ye=new U,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return E===null?K:1}let G=i;function Pt(C,B){for(let Q=0;Q<C.length;Q++){const F=C[Q],$=n.getContext(F,B);if($!==null)return $}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${na}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",W,!1),n.addEventListener("webglcontextcreationerror",ne,!1),G===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),G=Pt(B,C),G===null)throw Pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Me,be,Ae,it,Fe,De,Xe,bt,Ft,P,w,X,re,ee,se,xe,oe,q,b,J,pe,ue,de,Pe;function We(){Me=new PR(G),be=new MR(G,Me,e),Me.init(be),ue=new fb(G,Me,be),Ae=new ub(G,Me,be),it=new DR(G),Fe=new $P,De=new cb(G,Me,Ae,Fe,be,ue,it),Xe=new TR(v),bt=new RR(v),Ft=new Hw(G,be),de=new yR(G,Me,Ft,be),P=new bR(G,Ft,it,de),w=new OR(G,P,Ft,it),b=new NR(G,be,De),xe=new ER(Fe),X=new qP(v,Xe,bt,Me,be,de,xe),re=new mb(v,Fe),ee=new QP,se=new rb(Me,be),q=new xR(v,Xe,bt,Ae,w,d,l),oe=new lb(v,w,be),Pe=new gb(G,it,be,Ae),J=new SR(G,Me,it,be),pe=new LR(G,Me,it,be),it.programs=X.programs,v.capabilities=be,v.extensions=Me,v.properties=Fe,v.renderLists=ee,v.shadowMap=oe,v.state=Ae,v.info=it}We();const L=new pb(v,G);this.xr=L,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const C=Me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(k,Z,!1))},this.getSize=function(C){return C.set(k,Z)},this.setSize=function(C,B,Q=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,Z=B,n.width=Math.floor(C*K),n.height=Math.floor(B*K),Q===!0&&(n.style.width=C+"px",n.style.height=B+"px"),this.setViewport(0,0,C,B)},this.getDrawingBufferSize=function(C){return C.set(k*K,Z*K).floor()},this.setDrawingBufferSize=function(C,B,Q){k=C,Z=B,K=Q,n.width=Math.floor(C*Q),n.height=Math.floor(B*Q),this.setViewport(0,0,C,B)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(H)},this.setViewport=function(C,B,Q,F){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,B,Q,F),Ae.viewport(A.copy(H).multiplyScalar(K).floor())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,B,Q,F){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,B,Q,F),Ae.scissor(V.copy(N).multiplyScalar(K).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(C){Ae.setScissorTest(z=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){j=C},this.getClearColor=function(C){return C.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(C=!0,B=!0,Q=!0){let F=0;if(C){let $=!1;if(E!==null){const ge=E.texture.format;$=ge===ly||ge===ay||ge===oy}if($){const ge=E.texture.type,Ee=ge===qt||ge===nr||ge===Up||ge===Wr||ge===ry||ge===sy,Ce=q.getClearColor(),Re=q.getClearAlpha(),Be=Ce.r,we=Ce.g,Ie=Ce.b;Ee?(p[0]=Be,p[1]=we,p[2]=Ie,p[3]=Re,G.clearBufferuiv(G.COLOR,0,p)):(x[0]=Be,x[1]=we,x[2]=Ie,x[3]=Re,G.clearBufferiv(G.COLOR,0,x))}else F|=G.COLOR_BUFFER_BIT}B&&(F|=G.DEPTH_BUFFER_BIT),Q&&(F|=G.STENCIL_BUFFER_BIT),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",W,!1),n.removeEventListener("webglcontextcreationerror",ne,!1),ee.dispose(),se.dispose(),Fe.dispose(),Xe.dispose(),bt.dispose(),w.dispose(),de.dispose(),Pe.dispose(),X.dispose(),L.dispose(),L.removeEventListener("sessionstart",st),L.removeEventListener("sessionend",wi),ve&&(ve.dispose(),ve=null),hn.stop()};function fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=it.autoReset,B=oe.enabled,Q=oe.autoUpdate,F=oe.needsUpdate,$=oe.type;We(),it.autoReset=C,oe.enabled=B,oe.autoUpdate=Q,oe.needsUpdate=F,oe.type=$}function ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function he(C){const B=C.target;B.removeEventListener("dispose",he),ke(B)}function ke(C){$e(C),Fe.remove(C)}function $e(C){const B=Fe.get(C).programs;B!==void 0&&(B.forEach(function(Q){X.releaseProgram(Q)}),C.isShaderMaterial&&X.releaseShaderCache(C))}this.renderBufferDirect=function(C,B,Q,F,$,ge){B===null&&(B=Kt);const Ee=$.isMesh&&$.matrixWorld.determinant()<0,Ce=zS(C,B,Q,F,$);Ae.setMaterial(F,Ee);let Re=Q.index,Be=1;if(F.wireframe===!0){if(Re=P.getWireframeAttribute(Q),Re===void 0)return;Be=2}const we=Q.drawRange,Ie=Q.attributes.position;let pt=we.start*Be,vt=(we.start+we.count)*Be;ge!==null&&(pt=Math.max(pt,ge.start*Be),vt=Math.min(vt,(ge.start+ge.count)*Be)),Re!==null?(pt=Math.max(pt,0),vt=Math.min(vt,Re.count)):Ie!=null&&(pt=Math.max(pt,0),vt=Math.min(vt,Ie.count));const $n=vt-pt;if($n<0||$n===1/0)return;de.setup($,F,Ce,Q,Re);let Hi,St=J;if(Re!==null&&(Hi=Ft.get(Re),St=pe,St.setIndex(Hi)),$.isMesh)F.wireframe===!0?(Ae.setLineWidth(F.wireframeLinewidth*Ue()),St.setMode(G.LINES)):St.setMode(G.TRIANGLES);else if($.isLine){let Ge=F.linewidth;Ge===void 0&&(Ge=1),Ae.setLineWidth(Ge*Ue()),$.isLineSegments?St.setMode(G.LINES):$.isLineLoop?St.setMode(G.LINE_LOOP):St.setMode(G.LINE_STRIP)}else $.isPoints?St.setMode(G.POINTS):$.isSprite&&St.setMode(G.TRIANGLES);if($.isInstancedMesh)St.renderInstances(pt,$n,$.count);else if(Q.isInstancedBufferGeometry){const Ge=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Zc=Math.min(Q.instanceCount,Ge);St.renderInstances(pt,$n,Zc)}else St.render(pt,$n)},this.compile=function(C,B){function Q(F,$,ge){F.transparent===!0&&F.side===sn&&F.forceSinglePass===!1?(F.side=Ht,F.needsUpdate=!0,Ul(F,$,ge),F.side=fr,F.needsUpdate=!0,Ul(F,$,ge),F.side=sn):Ul(F,$,ge)}m=se.get(C),m.init(),_.push(m),C.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v._useLegacyLights),C.traverse(function(F){const $=F.material;if($)if(Array.isArray($))for(let ge=0;ge<$.length;ge++){const Ee=$[ge];Q(Ee,C,F)}else Q($,C,F)}),_.pop(),m=null};let rt=null;function mr(C){rt&&rt(C)}function st(){hn.stop()}function wi(){hn.start()}const hn=new Sy;hn.setAnimationLoop(mr),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(C){rt=C,L.setAnimationLoop(C),C===null?hn.stop():hn.start()},L.addEventListener("sessionstart",st),L.addEventListener("sessionend",wi),this.render=function(C,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(B),B=L.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,B,E),m=se.get(C,_.length),m.init(),_.push(m),Te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ae.setFromProjectionMatrix(Te),le=this.localClippingEnabled,ie=xe.init(this.clippingPlanes,le),g=ee.get(C,h.length),g.init(),h.push(g),lm(C,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(D,j),this.info.render.frame++,ie===!0&&xe.beginShadows();const Q=m.state.shadowsArray;if(oe.render(Q,C,B),ie===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(g,C),m.setupLights(v._useLegacyLights),B.isArrayCamera){const F=B.cameras;for(let $=0,ge=F.length;$<ge;$++){const Ee=F[$];um(g,C,Ee,Ee.viewport)}}else um(g,C,B);E!==null&&(De.updateMultisampleRenderTarget(E),De.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(v,C,B),de.resetDefaultState(),R=-1,S=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function lm(C,B,Q,F){if(C.visible===!1)return;if(C.layers.test(B.layers)){if(C.isGroup)Q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(B);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ae.intersectsSprite(C)){F&&Ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Te);const Ee=w.update(C),Ce=C.material;Ce.visible&&g.push(C,Ee,Ce,Q,Ye.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ae.intersectsObject(C))){const Ee=w.update(C),Ce=C.material;if(F&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ye.copy(C.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ye.copy(Ee.boundingSphere.center)),Ye.applyMatrix4(C.matrixWorld).applyMatrix4(Te)),Array.isArray(Ce)){const Re=Ee.groups;for(let Be=0,we=Re.length;Be<we;Be++){const Ie=Re[Be],pt=Ce[Ie.materialIndex];pt&&pt.visible&&g.push(C,Ee,pt,Q,Ye.z,Ie)}}else Ce.visible&&g.push(C,Ee,Ce,Q,Ye.z,null)}}const ge=C.children;for(let Ee=0,Ce=ge.length;Ee<Ce;Ee++)lm(ge[Ee],B,Q,F)}function um(C,B,Q,F){const $=C.opaque,ge=C.transmissive,Ee=C.transparent;m.setupLightsView(Q),ie===!0&&xe.setGlobalState(v.clippingPlanes,Q),ge.length>0&&kS($,ge,B,Q),F&&Ae.viewport(A.copy(F)),$.length>0&&Dl($,B,Q),ge.length>0&&Dl(ge,B,Q),Ee.length>0&&Dl(Ee,B,Q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function kS(C,B,Q,F){const $=be.isWebGL2;ve===null&&(ve=new Vt(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?dl:qt,minFilter:hl,samples:$?4:0})),v.getDrawingBufferSize(Se),$?ve.setSize(Se.x,Se.y):ve.setSize(dc(Se.x),dc(Se.y));const ge=v.getRenderTarget();v.setRenderTarget(ve),v.getClearColor(I),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear();const Ee=v.toneMapping;v.toneMapping=Vr,Dl(C,Q,F),De.updateMultisampleRenderTarget(ve),De.updateRenderTargetMipmap(ve);let Ce=!1;for(let Re=0,Be=B.length;Re<Be;Re++){const we=B[Re],Ie=we.object,pt=we.geometry,vt=we.material,$n=we.group;if(vt.side===sn&&Ie.layers.test(F.layers)){const Hi=vt.side;vt.side=Ht,vt.needsUpdate=!0,cm(Ie,Q,F,pt,vt,$n),vt.side=Hi,vt.needsUpdate=!0,Ce=!0}}Ce===!0&&(De.updateMultisampleRenderTarget(ve),De.updateRenderTargetMipmap(ve)),v.setRenderTarget(ge),v.setClearColor(I,O),v.toneMapping=Ee}function Dl(C,B,Q){const F=B.isScene===!0?B.overrideMaterial:null;for(let $=0,ge=C.length;$<ge;$++){const Ee=C[$],Ce=Ee.object,Re=Ee.geometry,Be=F===null?Ee.material:F,we=Ee.group;Ce.layers.test(Q.layers)&&cm(Ce,B,Q,Re,Be,we)}}function cm(C,B,Q,F,$,ge){C.onBeforeRender(v,B,Q,F,$,ge),C.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),$.onBeforeRender(v,B,Q,F,C,ge),$.transparent===!0&&$.side===sn&&$.forceSinglePass===!1?($.side=Ht,$.needsUpdate=!0,v.renderBufferDirect(Q,B,F,$,C,ge),$.side=fr,$.needsUpdate=!0,v.renderBufferDirect(Q,B,F,$,C,ge),$.side=sn):v.renderBufferDirect(Q,B,F,$,C,ge),C.onAfterRender(v,B,Q,F,$,ge)}function Ul(C,B,Q){B.isScene!==!0&&(B=Kt);const F=Fe.get(C),$=m.state.lights,ge=m.state.shadowsArray,Ee=$.state.version,Ce=X.getParameters(C,$.state,ge,B,Q),Re=X.getProgramCacheKey(Ce);let Be=F.programs;F.environment=C.isMeshStandardMaterial?B.environment:null,F.fog=B.fog,F.envMap=(C.isMeshStandardMaterial?bt:Xe).get(C.envMap||F.environment),Be===void 0&&(C.addEventListener("dispose",he),Be=new Map,F.programs=Be);let we=Be.get(Re);if(we!==void 0){if(F.currentProgram===we&&F.lightsStateVersion===Ee)return fm(C,Ce),we}else Ce.uniforms=X.getUniforms(C),C.onBuild(Q,Ce,v),C.onBeforeCompile(Ce,v),we=X.acquireProgram(Ce,Re),Be.set(Re,we),F.uniforms=Ce.uniforms;const Ie=F.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=xe.uniform),fm(C,Ce),F.needsLights=HS(C),F.lightsStateVersion=Ee,F.needsLights&&(Ie.ambientLightColor.value=$.state.ambient,Ie.lightProbe.value=$.state.probe,Ie.directionalLights.value=$.state.directional,Ie.directionalLightShadows.value=$.state.directionalShadow,Ie.spotLights.value=$.state.spot,Ie.spotLightShadows.value=$.state.spotShadow,Ie.rectAreaLights.value=$.state.rectArea,Ie.ltc_1.value=$.state.rectAreaLTC1,Ie.ltc_2.value=$.state.rectAreaLTC2,Ie.pointLights.value=$.state.point,Ie.pointLightShadows.value=$.state.pointShadow,Ie.hemisphereLights.value=$.state.hemi,Ie.directionalShadowMap.value=$.state.directionalShadowMap,Ie.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ie.spotShadowMap.value=$.state.spotShadowMap,Ie.spotLightMatrix.value=$.state.spotLightMatrix,Ie.spotLightMap.value=$.state.spotLightMap,Ie.pointShadowMap.value=$.state.pointShadowMap,Ie.pointShadowMatrix.value=$.state.pointShadowMatrix);const pt=we.getUniforms(),vt=Uu.seqWithValue(pt.seq,Ie);return F.currentProgram=we,F.uniformsList=vt,we}function fm(C,B){const Q=Fe.get(C);Q.outputColorSpace=B.outputColorSpace,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function zS(C,B,Q,F,$){B.isScene!==!0&&(B=Kt),De.resetTextureUnits();const ge=B.fog,Ee=F.isMeshStandardMaterial?B.environment:null,Ce=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Fi,Re=(F.isMeshStandardMaterial?bt:Xe).get(F.envMap||Ee),Be=F.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,we=!!Q.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ie=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,vt=!!Q.morphAttributes.color;let $n=Vr;F.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&($n=v.toneMapping);const Hi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,St=Hi!==void 0?Hi.length:0,Ge=Fe.get(F),Zc=m.state.lights;if(ie===!0&&(le===!0||C!==S)){const In=C===S&&F.id===R;xe.setState(F,C,In)}let Mt=!1;F.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Zc.state.version||Ge.outputColorSpace!==Ce||$.isInstancedMesh&&Ge.instancing===!1||!$.isInstancedMesh&&Ge.instancing===!0||$.isSkinnedMesh&&Ge.skinning===!1||!$.isSkinnedMesh&&Ge.skinning===!0||$.isInstancedMesh&&Ge.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ge.instancingColor===!1&&$.instanceColor!==null||Ge.envMap!==Re||F.fog===!0&&Ge.fog!==ge||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==xe.numPlanes||Ge.numIntersection!==xe.numIntersection)||Ge.vertexAlphas!==Be||Ge.vertexTangents!==we||Ge.morphTargets!==Ie||Ge.morphNormals!==pt||Ge.morphColors!==vt||Ge.toneMapping!==$n||be.isWebGL2===!0&&Ge.morphTargetsCount!==St)&&(Mt=!0):(Mt=!0,Ge.__version=F.version);let ns=Ge.currentProgram;Mt===!0&&(ns=Ul(F,B,$));let hm=!1,oa=!1,Qc=!1;const dn=ns.getUniforms(),is=Ge.uniforms;if(Ae.useProgram(ns.program)&&(hm=!0,oa=!0,Qc=!0),F.id!==R&&(R=F.id,oa=!0),hm||S!==C){if(dn.setValue(G,"projectionMatrix",C.projectionMatrix),be.logarithmicDepthBuffer&&dn.setValue(G,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),S!==C&&(S=C,oa=!0,Qc=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const In=dn.map.cameraPosition;In!==void 0&&In.setValue(G,Ye.setFromMatrixPosition(C.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&dn.setValue(G,"isOrthographic",C.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||$.isSkinnedMesh)&&dn.setValue(G,"viewMatrix",C.matrixWorldInverse)}if($.isSkinnedMesh){dn.setOptional(G,$,"bindMatrix"),dn.setOptional(G,$,"bindMatrixInverse");const In=$.skeleton;In&&(be.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),dn.setValue(G,"boneTexture",In.boneTexture,De),dn.setValue(G,"boneTextureSize",In.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jc=Q.morphAttributes;if((Jc.position!==void 0||Jc.normal!==void 0||Jc.color!==void 0&&be.isWebGL2===!0)&&b.update($,Q,ns),(oa||Ge.receiveShadow!==$.receiveShadow)&&(Ge.receiveShadow=$.receiveShadow,dn.setValue(G,"receiveShadow",$.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(is.envMap.value=Re,is.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),oa&&(dn.setValue(G,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&BS(is,Qc),ge&&F.fog===!0&&re.refreshFogUniforms(is,ge),re.refreshMaterialUniforms(is,F,K,Z,ve),Uu.upload(G,Ge.uniformsList,is,De)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Uu.upload(G,Ge.uniformsList,is,De),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&dn.setValue(G,"center",$.center),dn.setValue(G,"modelViewMatrix",$.modelViewMatrix),dn.setValue(G,"normalMatrix",$.normalMatrix),dn.setValue(G,"modelMatrix",$.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const In=F.uniformsGroups;for(let ef=0,GS=In.length;ef<GS;ef++)if(be.isWebGL2){const dm=In[ef];Pe.update(dm,ns),Pe.bind(dm,ns)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ns}function BS(C,B){C.ambientLightColor.needsUpdate=B,C.lightProbe.needsUpdate=B,C.directionalLights.needsUpdate=B,C.directionalLightShadows.needsUpdate=B,C.pointLights.needsUpdate=B,C.pointLightShadows.needsUpdate=B,C.spotLights.needsUpdate=B,C.spotLightShadows.needsUpdate=B,C.rectAreaLights.needsUpdate=B,C.hemisphereLights.needsUpdate=B}function HS(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,B,Q){Fe.get(C.texture).__webglTexture=B,Fe.get(C.depthTexture).__webglTexture=Q;const F=Fe.get(C);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=Q===void 0,F.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,B){const Q=Fe.get(C);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(C,B=0,Q=0){E=C,M=B,T=Q;let F=!0,$=null,ge=!1,Ee=!1;if(C){const Re=Fe.get(C);Re.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(G.FRAMEBUFFER,null),F=!1):Re.__webglFramebuffer===void 0?De.setupRenderTarget(C):Re.__hasExternalTextures&&De.rebindTextures(C,Fe.get(C.texture).__webglTexture,Fe.get(C.depthTexture).__webglTexture);const Be=C.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ee=!0);const we=Fe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(we[B])?$=we[B][Q]:$=we[B],ge=!0):be.isWebGL2&&C.samples>0&&De.useMultisampledRTT(C)===!1?$=Fe.get(C).__webglMultisampledFramebuffer:Array.isArray(we)?$=we[Q]:$=we,A.copy(C.viewport),V.copy(C.scissor),Y=C.scissorTest}else A.copy(H).multiplyScalar(K).floor(),V.copy(N).multiplyScalar(K).floor(),Y=z;if(Ae.bindFramebuffer(G.FRAMEBUFFER,$)&&be.drawBuffers&&F&&Ae.drawBuffers(C,$),Ae.viewport(A),Ae.scissor(V),Ae.setScissorTest(Y),ge){const Re=Fe.get(C.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Re.__webglTexture,Q)}else if(Ee){const Re=Fe.get(C.texture),Be=B||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Re.__webglTexture,Q||0,Be)}R=-1},this.readRenderTargetPixels=function(C,B,Q,F,$,ge,Ee){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Fe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){Ae.bindFramebuffer(G.FRAMEBUFFER,Ce);try{const Re=C.texture,Be=Re.format,we=Re.type;if(Be!==yi&&ue.convert(Be)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=we===dl&&(Me.has("EXT_color_buffer_half_float")||be.isWebGL2&&Me.has("EXT_color_buffer_float"));if(we!==qt&&ue.convert(we)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===Li&&(be.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=C.width-F&&Q>=0&&Q<=C.height-$&&G.readPixels(B,Q,F,$,ue.convert(Be),ue.convert(we),ge)}finally{const Re=E!==null?Fe.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(G.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(C,B,Q=0){const F=Math.pow(2,-Q),$=Math.floor(B.image.width*F),ge=Math.floor(B.image.height*F);De.setTexture2D(B,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,C.x,C.y,$,ge),Ae.unbindTexture()},this.copyTextureToTexture=function(C,B,Q,F=0){const $=B.image.width,ge=B.image.height,Ee=ue.convert(Q.format),Ce=ue.convert(Q.type);De.setTexture2D(Q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment),B.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,F,C.x,C.y,$,ge,Ee,Ce,B.image.data):B.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,F,C.x,C.y,B.mipmaps[0].width,B.mipmaps[0].height,Ee,B.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,F,C.x,C.y,Ee,Ce,B.image),F===0&&Q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(C,B,Q,F,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=C.max.x-C.min.x+1,Ee=C.max.y-C.min.y+1,Ce=C.max.z-C.min.z+1,Re=ue.convert(F.format),Be=ue.convert(F.type);let we;if(F.isData3DTexture)De.setTexture3D(F,0),we=G.TEXTURE_3D;else if(F.isDataArrayTexture)De.setTexture2DArray(F,0),we=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,F.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,F.unpackAlignment);const Ie=G.getParameter(G.UNPACK_ROW_LENGTH),pt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),vt=G.getParameter(G.UNPACK_SKIP_PIXELS),$n=G.getParameter(G.UNPACK_SKIP_ROWS),Hi=G.getParameter(G.UNPACK_SKIP_IMAGES),St=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,St.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,St.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,C.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,C.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C.min.z),Q.isDataTexture||Q.isData3DTexture?G.texSubImage3D(we,$,B.x,B.y,B.z,ge,Ee,Ce,Re,Be,St.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(we,$,B.x,B.y,B.z,ge,Ee,Ce,Re,St.data)):G.texSubImage3D(we,$,B.x,B.y,B.z,ge,Ee,Ce,Re,Be,St),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ie),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,vt),G.pixelStorei(G.UNPACK_SKIP_ROWS,$n),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Hi),$===0&&F.generateMipmaps&&G.generateMipmap(we),Ae.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?De.setTextureCube(C,0):C.isData3DTexture?De.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?De.setTexture2DArray(C,0):De.setTexture2D(C,0),Ae.unbindTexture()},this.resetState=function(){M=0,T=0,E=null,Ae.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?sr:Vc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?Oe:Fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vb extends Ry{}vb.prototype.isWebGL1Renderer=!0;class Sd extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Va extends Bi{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],p=[];let x=0;const g=[],m=i/2;let h=0;_(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(c),this.setAttribute("position",new Vn(f,3)),this.setAttribute("normal",new Vn(d,3)),this.setAttribute("uv",new Vn(p,2));function _(){const y=new U,M=new U;let T=0;const E=(n-e)/i;for(let R=0;R<=s;R++){const S=[],A=R/s,V=A*(n-e)+e;for(let Y=0;Y<=r;Y++){const I=Y/r,O=I*l+a,k=Math.sin(O),Z=Math.cos(O);M.x=V*k,M.y=-A*i+m,M.z=V*Z,f.push(M.x,M.y,M.z),y.set(k,E,Z).normalize(),d.push(y.x,y.y,y.z),p.push(I,1-A),S.push(x++)}g.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const A=g[S][R],V=g[S+1][R],Y=g[S+1][R+1],I=g[S][R+1];c.push(A,V,I),c.push(V,Y,I),T+=6}u.addGroup(h,T,0),h+=T}function v(y){const M=x,T=new _e,E=new U;let R=0;const S=y===!0?e:n,A=y===!0?1:-1;for(let Y=1;Y<=r;Y++)f.push(0,m*A,0),d.push(0,A,0),p.push(.5,.5),x++;const V=x;for(let Y=0;Y<=r;Y++){const O=Y/r*l+a,k=Math.cos(O),Z=Math.sin(O);E.x=S*Z,E.y=m*A,E.z=S*k,f.push(E.x,E.y,E.z),d.push(0,A,0),T.x=k*.5+.5,T.y=Z*.5*A+.5,p.push(T.x,T.y),x++}for(let Y=0;Y<r;Y++){const I=M+Y,O=V+Y;y===!0?c.push(O,O+1,I):c.push(O+1,O,I),R+=3}u.addGroup(h,R,y===!0?1:2),h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Va(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bp extends Bi{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new U,d=new U,p=[],x=[],g=[],m=[];for(let h=0;h<=i;h++){const _=[],v=h/i;let y=0;h===0&&o===0?y=.5/n:h===i&&l===Math.PI&&(y=-.5/n);for(let M=0;M<=n;M++){const T=M/n;f.x=-e*Math.cos(r+T*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+v*a),x.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),m.push(T+y,1-v),_.push(u++)}c.push(_)}for(let h=0;h<i;h++)for(let _=0;_<n;_++){const v=c[h][_+1],y=c[h][_],M=c[h+1][_],T=c[h+1][_+1];(h!==0||o>0)&&p.push(v,y,T),(h!==i-1||l<Math.PI)&&p.push(y,M,T)}this.setIndex(p),this.setAttribute("position",new Vn(x,3)),this.setAttribute("normal",new Vn(g,3)),this.setAttribute("uv",new Vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const X_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class xb{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],x=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return x}return null}}}const yb=new xb;class Hp{constructor(e){this.manager=e!==void 0?e:yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hp.DEFAULT_MATERIAL_NAME="__DEFAULT";class Sb extends Hp{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=X_.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ml("img");function l(){c(),X_.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class qi extends Hp{constructor(e){super(e)}load(e,n,i,r){const s=new ln,o=new Sb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Py extends Pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const ih=new Rt,j_=new U,Y_=new U;class Mb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;j_.setFromMatrixPosition(e.matrixWorld),n.position.copy(j_),Y_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Y_),n.updateMatrixWorld(),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ih)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const q_=new Rt,xa=new U,rh=new U;class Eb extends Mb{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _e(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xa.setFromMatrixPosition(e.matrixWorld),i.position.copy(xa),rh.copy(i.position),rh.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(rh),i.updateMatrixWorld(),r.makeTranslation(-xa.x,-xa.y,-xa.z),q_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(q_)}}class Tb extends Py{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Eb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wb extends Py{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ab{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=$_();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function $_(){return(typeof performance>"u"?Date:performance).now()}class Le{constructor(e){this.value=e}clone(){return new Le(this.value.clone===void 0?this.value:this.value.clone())}}class Z_{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:na}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=na);function Cb(){const t=new _n(100,window.innerWidth/window.innerHeight,1,1e3);t.position.set(19.855729119467718,20,19.6874062335975),window.camera=t}/**
 * postprocessing v6.33.0 build Fri Aug 11 2023
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2023 Raoul van Rüschen
 * @license Zlib
 */var Gp="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",He={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},by="",At="srgb",jc="srgb-linear",Ra={FULL:0,SINGLE:1},Wa={DEFAULT:0,KEEP_MAX_DEPTH:1,DISCARD_MAX_DEPTH:2},Kr={NONE:0,DEPTH:1,CONVOLUTION:2},qe={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Vp={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},Ly=Number(na.replace(/\D+/g,"")),Dy=Ly>=152,Rb=new Map([[Vc,jc],[sr,At]]),Pb=new Map([[jc,Vc],[At,sr]]);function Os(t){return t===null?null:Dy?t.outputColorSpace:Rb.get(t.outputEncoding)}function or(t,e){t!==null&&(Dy?t.colorSpace=e:t.encoding=Pb.get(e))}function bl(t){return Ly<154?t.replace("colorspace_fragment","encodings_fragment"):t}var bb=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,Lb="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",Db=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],Ub=class extends Ct{constructor(t=new tt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Le(null),texelSize:new Le(new tt),scale:new Le(1),kernel:new Le(0)},blending:an,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:bb,vertexShader:Lb}),this.fragmentShader=bl(this.fragmentShader),this.setTexelSize(t.x,t.y),this.kernelSize=Vp.MEDIUM}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.inputBuffer=t}get kernelSequence(){return Db[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(){return this.uniforms.scale.value}setScale(t){this.uniforms.scale.value=t}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(t){this.uniforms.kernel.value=t}setKernel(t){this.kernel=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e,t*.5,e*.5)}setSize(t,e){const n=1/t,i=1/e;this.uniforms.texelSize.value.set(n,i,n*.5,i*.5)}},Ib=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,Uy=class extends Ct{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new Le(null),opacity:new Le(1)},blending:an,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Ib,vertexShader:Gp}),this.fragmentShader=bl(this.fragmentShader)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},Nb=`#include <packing>
varying vec2 vUv;
#ifdef NORMAL_DEPTH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D normalDepthBuffer;
#else
uniform mediump sampler2D normalDepthBuffer;
#endif
float readDepth(const in vec2 uv){return texture2D(normalDepthBuffer,uv).a;}
#else
#if INPUT_DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if INPUT_DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
void main(){
#if INPUT_DEPTH_PACKING == OUTPUT_DEPTH_PACKING
gl_FragColor=texture2D(depthBuffer,vUv);
#else
float depth=readDepth(vUv);
#if OUTPUT_DEPTH_PACKING == 3201
gl_FragColor=(depth==1.0)?vec4(1.0):packDepthToRGBA(depth);
#else
gl_FragColor=vec4(vec3(depth),1.0);
#endif
#endif
}`,Ob=`varying vec2 vUv;
#if DEPTH_COPY_MODE == 1
uniform vec2 texelPosition;
#endif
void main(){
#if DEPTH_COPY_MODE == 1
vUv=texelPosition;
#else
vUv=position.xy*0.5+0.5;
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,Fb=class extends Ct{constructor(){super({name:"DepthCopyMaterial",defines:{INPUT_DEPTH_PACKING:"0",OUTPUT_DEPTH_PACKING:"0",DEPTH_COPY_MODE:"0"},uniforms:{depthBuffer:new Le(null),texelPosition:new Le(new _e)},blending:an,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Nb,vertexShader:Ob}),this.depthCopyMode=Ra.FULL}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}set inputDepthPacking(t){this.defines.INPUT_DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get outputDepthPacking(){return Number(this.defines.OUTPUT_DEPTH_PACKING)}set outputDepthPacking(t){this.defines.OUTPUT_DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=Oi){this.depthBuffer=t,this.inputDepthPacking=e}getInputDepthPacking(){return Number(this.defines.INPUT_DEPTH_PACKING)}setInputDepthPacking(t){this.defines.INPUT_DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}getOutputDepthPacking(){return Number(this.defines.OUTPUT_DEPTH_PACKING)}setOutputDepthPacking(t){this.defines.OUTPUT_DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get texelPosition(){return this.uniforms.texelPosition.value}getTexelPosition(){return this.uniforms.texelPosition.value}setTexelPosition(t){this.uniforms.texelPosition.value=t}get mode(){return this.depthCopyMode}set mode(t){this.depthCopyMode=t,this.defines.DEPTH_COPY_MODE=t.toFixed(0),this.needsUpdate=!0}getMode(){return this.mode}setMode(t){this.mode=t}},kb=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer0;uniform highp sampler2D depthBuffer1;
#else
uniform mediump sampler2D depthBuffer0;uniform mediump sampler2D depthBuffer1;
#endif
uniform sampler2D inputBuffer;uniform vec2 cameraNearFar;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}varying vec2 vUv;void main(){vec2 depth;
#if DEPTH_PACKING_0 == 3201
depth.x=unpackRGBAToDepth(texture2D(depthBuffer0,vUv));
#else
depth.x=texture2D(depthBuffer0,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.x*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.x=a+b/d;
#endif
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.y*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.y=a+b/d;
#endif
#endif
bool isMaxDepth=(depth.x==1.0);
#ifdef PERSPECTIVE_CAMERA
depth.x=viewZToOrthographicDepth(getViewZ(depth.x),cameraNearFar.x,cameraNearFar.y);depth.y=viewZToOrthographicDepth(getViewZ(depth.y),cameraNearFar.x,cameraNearFar.y);
#endif
#if DEPTH_TEST_STRATEGY == 0
bool keep=depthTest(depth.x,depth.y);
#elif DEPTH_TEST_STRATEGY == 1
bool keep=isMaxDepth||depthTest(depth.x,depth.y);
#else
bool keep=!isMaxDepth&&depthTest(depth.x,depth.y);
#endif
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`,zb=class extends Ct{constructor(){super({name:"DepthMaskMaterial",defines:{DEPTH_EPSILON:"0.0001",DEPTH_PACKING_0:"0",DEPTH_PACKING_1:"0",DEPTH_TEST_STRATEGY:Wa.KEEP_MAX_DEPTH},uniforms:{inputBuffer:new Le(null),depthBuffer0:new Le(null),depthBuffer1:new Le(null),cameraNearFar:new Le(new _e(1,1))},blending:an,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:kb,vertexShader:Gp}),this.depthMode=pd}set depthBuffer0(t){this.uniforms.depthBuffer0.value=t}set depthPacking0(t){this.defines.DEPTH_PACKING_0=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer0(t,e=Oi){this.depthBuffer0=t,this.depthPacking0=e}set depthBuffer1(t){this.uniforms.depthBuffer1.value=t}set depthPacking1(t){this.defines.DEPTH_PACKING_1=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer1(t,e=Oi){this.depthBuffer1=t,this.depthPacking1=e}get maxDepthStrategy(){return Number(this.defines.DEPTH_TEST_STRATEGY)}set maxDepthStrategy(t){this.defines.DEPTH_TEST_STRATEGY=t.toFixed(0),this.needsUpdate=!0}get keepFar(){return this.maxDepthStrategy}set keepFar(t){this.maxDepthStrategy=t?Wa.KEEP_MAX_DEPTH:Wa.DISCARD_MAX_DEPTH}getMaxDepthStrategy(){return this.maxDepthStrategy}setMaxDepthStrategy(t){this.maxDepthStrategy=t}get epsilon(){return Number(this.defines.DEPTH_EPSILON)}set epsilon(t){this.defines.DEPTH_EPSILON=t.toFixed(16),this.needsUpdate=!0}getEpsilon(){return this.epsilon}setEpsilon(t){this.epsilon=t}get depthMode(){return Number(this.defines.DEPTH_MODE)}set depthMode(t){let e;switch(t){case Zx:e="false";break;case Qx:e="true";break;case cc:e="abs(d1 - d0) <= DEPTH_EPSILON";break;case Dp:e="abs(d1 - d0) > DEPTH_EPSILON";break;case pd:e="d0 > d1";break;case uc:e="d0 >= d1";break;case Jx:e="d0 <= d1";break;case ey:default:e="d0 < d1";break}this.defines.DEPTH_MODE=t.toFixed(0),this.defines["depthTest(d0, d1)"]=e,this.needsUpdate=!0}getDepthMode(){return this.depthMode}setDepthMode(t){this.depthMode=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNearFar.value.set(t.near,t.far),t instanceof _n?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},Bb=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,Hb="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Gb=class extends Ct{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Le(null),texelSize:new Le(new _e)},blending:an,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Bb,vertexShader:Hb}),this.fragmentShader=bl(this.fragmentShader)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},Vb=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,Wb="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Kb=class extends Ct{constructor(t,e,n,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:na.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Le(null),depthBuffer:new Le(null),resolution:new Le(new _e),texelSize:new Le(new _e),cameraNear:new Le(.3),cameraFar:new Le(1e3),aspect:new Le(1),time:new Le(0)},blending:an,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=Oi){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=Vb.replace(qe.FRAGMENT_HEAD,t.get(qe.FRAGMENT_HEAD)||"").replace(qe.FRAGMENT_MAIN_UV,t.get(qe.FRAGMENT_MAIN_UV)||"").replace(qe.FRAGMENT_MAIN_IMAGE,t.get(qe.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=Wb.replace(qe.VERTEX_HEAD,t.get(qe.VERTEX_HEAD)||"").replace(qe.VERTEX_MAIN_SUPPORT,t.get(qe.VERTEX_MAIN_SUPPORT)||""),this.fragmentShader=bl(this.fragmentShader),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof _n?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return qe}},Xb=`#include <common>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,jb=class extends Ct{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:na.replace(/\D+/g,"")},uniforms:{inputBuffer:new Le(null),threshold:new Le(0),smoothing:new Le(1),range:new Le(null)},blending:an,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Xb,vertexShader:Gp}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},Yb=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,qb="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",$b=class extends Ct{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Le(null),supportBuffer:new Le(null),texelSize:new Le(new _e),radius:new Le(.85)},blending:an,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Yb,vertexShader:qb}),this.fragmentShader=bl(this.fragmentShader)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}set supportBuffer(t){this.uniforms.supportBuffer.value=t}get radius(){return this.uniforms.radius.value}set radius(t){this.uniforms.radius.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},Zb=new Fp,Sr=null;function Qb(){if(Sr===null){const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Sr=new Bi,Sr.setAttribute!==void 0?(Sr.setAttribute("position",new Tn(t,3)),Sr.setAttribute("uv",new Tn(e,2))):(Sr.addAttribute("position",new Tn(t,3)),Sr.addAttribute("uv",new Tn(e,2)))}return Sr}var qn=class Iy{constructor(e="Pass",n=new Sd,i=Zb){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new wn(Qb(),e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Sd),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=Oi){}render(e,n,i,r,s){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof Vt||n instanceof ra||n instanceof ln||n instanceof Iy)&&this[e].dispose()}}},Jb=class extends qn{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new Uy,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new Vt(1,1,{minFilter:nn,magFilter:nn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,r){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==qt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":Os(t)===At&&or(this.renderTarget.texture,At))}},e2=class extends qn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,r){const s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},Q_=new Ze,Wp=class extends qn{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,r){const s=this.overrideClearColor,o=this.overrideClearAlpha,a=t.getClearAlpha(),l=s!==null,u=o>=0;l?(t.getClearColor(Q_),t.setClearColor(s,u?o:a)):u&&t.setClearAlpha(o),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(Q_,a):u&&t.setClearAlpha(a)}},Ny=class extends qn{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.clearPass=new Wp,this.overrideMaterialManager=n===null?null:new ev(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new ev(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,r){const s=this.scene,o=this.camera,a=this.selection,l=o.layers.mask,u=s.background,c=t.shadowMap.autoUpdate,f=this.renderToScreen?null:e;a!==null&&o.layers.set(a.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(f),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,o):t.render(s,o),o.layers.mask=l,s.background=u,t.shadowMap.autoUpdate=c}},t2=class extends qn{constructor(t,e,{renderTarget:n,resolutionScale:i=1,width:r=Hn.AUTO_SIZE,height:s=Hn.AUTO_SIZE,resolutionX:o=r,resolutionY:a=s}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new Ny(t,e,new Ay({depthPacking:Is}));const l=this.renderPass;l.skipShadowMapUpdate=!0,l.ignoreBackground=!0;const u=l.clearPass;u.overrideClearColor=new Ze(16777215),u.overrideClearAlpha=1,this.renderTarget=n,this.renderTarget===void 0&&(this.renderTarget=new Vt(1,1,{minFilter:Dt,magFilter:Dt}),this.renderTarget.texture.name="DepthPass.Target");const c=this.resolution=new Hn(this,o,a,i);c.addEventListener("change",f=>this.setSize(c.baseWidth,c.baseHeight))}set mainScene(t){this.renderPass.mainScene=t}set mainCamera(t){this.renderPass.mainCamera=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,r){const s=this.renderToScreen?null:this.renderTarget;this.renderPass.render(t,s)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height)}},n2=class extends qn{constructor({depthPacking:t=Is}={}){super("DepthCopyPass");const e=new Fb;e.outputDepthPacking=t,this.fullscreenMaterial=e,this.needsDepthTexture=!0,this.needsSwap=!1,this.renderTarget=new Vt(1,1,{type:t===Is?qt:Li,minFilter:Dt,magFilter:Dt,depthBuffer:!1}),this.renderTarget.texture.name="DepthCopyPass.Target"}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}get depthPacking(){return this.fullscreenMaterial.outputDepthPacking}getDepthPacking(){return this.fullscreenMaterial.outputDepthPacking}setDepthTexture(t,e=Oi){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.inputDepthPacking=e}render(t,e,n,i,r){t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.renderTarget.setSize(t,e)}},_u=new Float32Array([255/256/256**3,255/256/256**2,255/256/256,255/256]);function i2(t){return(t[0]*_u[0]+t[1]*_u[1]+t[2]*_u[2]+t[3]*_u[3])/255}var r2=class extends n2{constructor({depthPacking:t=Is,mode:e=Ra.SINGLE}={}){super({depthPacking:t}),this.name="DepthPickingPass",this.fullscreenMaterial.mode=e,this.pixelBuffer=t===Is?new Uint8Array(4):new Float32Array(4),this.callback=null}readDepth(t){return this.fullscreenMaterial.texelPosition.set(t.x*.5+.5,t.y*.5+.5),new Promise(e=>{this.callback=e})}render(t,e,n,i,r){const s=this.fullscreenMaterial,o=s.mode;if(o===Ra.FULL&&super.render(t),this.callback!==null){const a=this.renderTarget,l=this.pixelBuffer,u=a.texture.type!==Li;let c=0,f=0;if(o===Ra.SINGLE)super.render(t);else{const d=s.texelPosition;c=Math.round(d.x*a.width),f=Math.round(d.y*a.height)}t.readRenderTargetPixels(a,c,f,1,1,l),this.callback(u?i2(l):l[0]),this.callback=null}}setSize(t,e){this.fullscreenMaterial.mode===Ra.FULL&&super.setSize(t,e)}};function J_(t,e,n){for(const i of e){const r="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const o of n.entries())o[1]!==null&&n.set(o[0],o[1].replace(s,r))}}function s2(t,e,n){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),o=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(o&&n.attributes&Kr.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!o)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const a=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts;let u=l.get(qe.FRAGMENT_HEAD)||"",c=l.get(qe.FRAGMENT_MAIN_UV)||"",f=l.get(qe.FRAGMENT_MAIN_IMAGE)||"",d=l.get(qe.VERTEX_HEAD)||"",p=l.get(qe.VERTEX_MAIN_SUPPORT)||"";const x=new Set,g=new Set;if(o&&(c+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const _=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);p+=`	${t}MainSupport(`,p+=_?`vUv);
`:`);
`;for(const v of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const y of v[1].split(/\s*,\s*/))n.varyings.add(y),x.add(y),g.add(y);for(const v of r.matchAll(a))g.add(v[1])}for(const _ of i.matchAll(a))g.add(_[1]);for(const _ of e.defines.keys())g.add(_.replace(/\([\w\s,]*\)/g,""));for(const _ of e.uniforms.keys())g.add(_);g.delete("while"),g.delete("for"),g.delete("if"),e.uniforms.forEach((_,v)=>n.uniforms.set(t+v.charAt(0).toUpperCase()+v.slice(1),_)),e.defines.forEach((_,v)=>n.defines.set(t+v.charAt(0).toUpperCase()+v.slice(1),_));const m=new Map([["fragment",i],["vertex",r]]);J_(t,g,n.defines),J_(t,g,m),i=m.get("fragment"),r=m.get("vertex");const h=e.blendMode;if(n.blendModes.set(h.blendFunction,h),s){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(f+=e.inputColorSpace===At?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==by?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const _=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;f+=`${t}MainImage(color0, UV, `,n.attributes&Kr.DEPTH&&_.test(i)&&(f+="depth, ",n.readDepth=!0),f+=`color1);
	`;const v=t+"BlendOpacity";n.uniforms.set(v,h.opacity),f+=`color0 = blend${h.blendFunction}(color0, color1, ${v});

	`,u+=`uniform float ${v};

`}if(u+=i+`
`,r!==null&&(d+=r+`
`),l.set(qe.FRAGMENT_HEAD,u),l.set(qe.FRAGMENT_MAIN_UV,c),l.set(qe.FRAGMENT_MAIN_IMAGE,f),l.set(qe.VERTEX_HEAD,d),l.set(qe.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const _ of e.extensions)n.extensions.add(_)}}var Oy=class extends qn{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new Kb(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new p2;let e=0;for(const o of this.effects)if(o.blendMode.blendFunction===He.DST)t.attributes|=o.getAttributes()&Kr.DEPTH;else{if(t.attributes&o.getAttributes()&Kr.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${o.name})`);s2("e"+e++,o,t)}let n=t.shaderParts.get(qe.FRAGMENT_HEAD),i=t.shaderParts.get(qe.FRAGMENT_MAIN_IMAGE),r=t.shaderParts.get(qe.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const o of t.blendModes.values())n+=o.getShaderCode().replace(s,`blend${o.blendFunction}`)+`
`;t.attributes&Kr.DEPTH?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===At&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(qe.FRAGMENT_HEAD,n),t.shaderParts.set(qe.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(qe.FRAGMENT_MAIN_UV,r);for(const[o,a]of t.shaderParts)a!==null&&t.shaderParts.set(o,a.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=Oi){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,r){for(const s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==qt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}},o2=class extends qn{constructor({kernelSize:t=Vp.MEDIUM,resolutionScale:e=.5,width:n=Hn.AUTO_SIZE,height:i=Hn.AUTO_SIZE,resolutionX:r=n,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new Vt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const o=this.resolution=new Hn(this,r,s,e);o.addEventListener("change",a=>this.setSize(o.baseWidth,o.baseHeight)),this._blurMaterial=new Ub,this._blurMaterial.kernelSize=t,this.copyMaterial=new Uy}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(t){this._blurMaterial=t}get dithering(){return this.copyMaterial.dithering}set dithering(t){this.copyMaterial.dithering=t}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(t){this.blurMaterial.kernelSize=t}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get scale(){return this.blurMaterial.scale}set scale(t){this.blurMaterial.scale=t}getScale(){return this.blurMaterial.scale}setScale(t){this.blurMaterial.scale=t}getKernelSize(){return this.kernelSize}setKernelSize(t){this.kernelSize=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,r){const s=this.scene,o=this.camera,a=this.renderTargetA,l=this.renderTargetB,u=this.blurMaterial,c=u.kernelSequence;let f=e;this.fullscreenMaterial=u;for(let d=0,p=c.length;d<p;++d){const x=d&1?l:a;u.kernel=c[d],u.inputBuffer=f.texture,t.setRenderTarget(x),t.render(s,o),f=x}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=f.texture,t.setRenderTarget(this.renderToScreen?null:n),t.render(s,o)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e);const i=n.width,r=n.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==qt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):Os(t)===At&&(or(this.renderTargetA.texture,At),or(this.renderTargetB.texture,At)))}static get AUTO_SIZE(){return Hn.AUTO_SIZE}},a2=class extends qn{constructor({renderTarget:t,luminanceRange:e,colorOutput:n,resolutionScale:i=1,width:r=Hn.AUTO_SIZE,height:s=Hn.AUTO_SIZE,resolutionX:o=r,resolutionY:a=s}={}){super("LuminancePass"),this.fullscreenMaterial=new jb(n,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new Vt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new Hn(this,o,a,i);l.addEventListener("change",u=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,n,i,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height)}initialize(t,e,n){n!==void 0&&n!==qt&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},l2=class extends qn{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new Wp(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,r){const s=t.getContext(),o=t.state.buffers,a=this.scene,l=this.camera,u=this.clearPass,c=this.inverted?0:1,f=1-c;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.stencil.setFunc(s.ALWAYS,c,4294967295),o.stencil.setClear(f),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?u.render(t,null):(u.render(t,e),u.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(a,l)):(t.setRenderTarget(e),t.render(a,l),t.setRenderTarget(n),t.render(a,l)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(s.EQUAL,1,4294967295),o.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.stencil.setLocked(!0)}},u2=class extends qn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Vt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Gb,this.upsamplingMaterial=new $b,this.resolution=new _e}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(t){if(this.levels!==t){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<t;++n){const i=e.clone();i.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let n=1,i=t-1;n<i;++n){const r=e.clone();r.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(t){this.upsamplingMaterial.radius=t}render(t,e,n,i,r){const{scene:s,camera:o}=this,{downsamplingMaterial:a,upsamplingMaterial:l}=this,{downsamplingMipmaps:u,upsamplingMipmaps:c}=this;let f=e;this.fullscreenMaterial=a;for(let d=0,p=u.length;d<p;++d){const x=u[d];a.setSize(f.width,f.height),a.inputBuffer=f.texture,t.setRenderTarget(x),t.render(s,o),f=x}this.fullscreenMaterial=l;for(let d=c.length-1;d>=0;--d){const p=c[d];l.setSize(f.width,f.height),l.inputBuffer=f.texture,l.supportBuffer=u[d].texture,t.setRenderTarget(p),t.render(s,o),f=p}}setSize(t,e){const n=this.resolution;n.set(t,e);let i=n.width,r=n.height;for(let s=0,o=this.downsamplingMipmaps.length;s<o;++s)i=Math.round(i*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(i,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,r)}initialize(t,e,n){if(n!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of i)r.texture.type=n;if(n!==qt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(Os(t)===At)for(const r of i)or(r.texture,At)}}dispose(){super.dispose();for(const t of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))t.dispose()}},c2=class extends qn{constructor(t,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=t,this.input=e}setInput(t){this.input=t}render(t,e,n,i,r){const s=this.fullscreenMaterial.uniforms;e!==null&&s!==void 0&&s[this.input]!==void 0&&(s[this.input].value=e.texture),t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}initialize(t,e,n){n!==void 0&&n!==qt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},sh=1/1e3,f2=1e3,h2=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*sh}get fixedDelta(){return this._fixedDelta*sh}set fixedDelta(t){this._fixedDelta=t*f2}get elapsed(){return this._elapsed*sh}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},d2=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Jb,this.depthTexture=null,this.passes=[],this.timer=new h2,this.autoRenderToScreen=!0,this.setRenderer(t)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(t){const e=this.inputBuffer,n=this.multisampling;n>0&&t>0?(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==t&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,t),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new _e),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===qt&&Os(t)===At&&(or(this.inputBuffer.texture,At),or(this.outputBuffer.texture,At),this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(t,n,i)}}replaceRenderer(t,e=!0){const n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){const t=this.depthTexture=new Cy;return this.inputBuffer.depthTexture=t,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(t.format=Us,t.type=Wr):t.type=nr,t}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const t of this.passes)t.setDepthTexture(null)}}createBuffer(t,e,n,i){const r=this.renderer,s=r===null?new _e:r.getDrawingBufferSize(new _e),o={minFilter:nn,magFilter:nn,stencilBuffer:e,depthBuffer:t,type:n},a=new Vt(s.width,s.height,o);return i>0&&(a.ignoreDepthForMultisampleCopy=!1,a.samples=i),n===qt&&Os(r)===At&&or(a.texture,At),a.texture.name="EffectComposer.Buffer",a.texture.generateMipmaps=!1,a}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const n=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new _e),s=i.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(t.setRenderer(i),t.setSize(r.width,r.height),t.initialize(i,s,o),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const a=this.createDepthTexture();for(t of n)t.setDepthTexture(a)}else t.setDepthTexture(this.depthTexture)}removePass(t){const e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const s=(a,l)=>a||l.needsDepthTexture;e.reduce(s,!1)||(t.getDepthTexture()===this.depthTexture&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,n=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s=!1,o,a,l;t===void 0&&(this.timer.update(),t=this.timer.delta);for(const u of this.passes)u.enabled&&(u.render(e,i,r,t,s),u.needsSwap&&(s&&(n.renderToScreen=u.renderToScreen,o=e.getContext(),a=e.state.buffers.stencil,a.setFunc(o.NOTEQUAL,1,4294967295),n.render(e,i,r,t,s),a.setFunc(o.EQUAL,1,4294967295)),l=i,i=r,r=l),u instanceof l2?s=!0:u instanceof e2&&(s=!1))}setSize(t,e,n){const i=this.renderer,r=i.getSize(new _e);(t===void 0||e===void 0)&&(t=r.width,e=r.height),(r.width!==t||r.height!==e)&&i.setSize(t,e,n);const s=i.getDrawingBufferSize(new _e);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const o of this.passes)o.setSize(s.width,s.height)}reset(){const t=this.timer.autoReset;this.dispose(),this.autoRenderToScreen=!0,this.timer.autoReset=t}dispose(){for(const t of this.passes)t.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},p2=class{constructor(){this.shaderParts=new Map([[qe.FRAGMENT_HEAD,null],[qe.FRAGMENT_MAIN_UV,null],[qe.FRAGMENT_MAIN_IMAGE,null],[qe.VERTEX_HEAD,null],[qe.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Kr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=jc}},oh=!1,ev=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case sn:n=this.materialsFlatShadedDoubleSide;break;case Ht:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case sn:n=this.materialsDoubleSide;break;case Ht:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof Ct))return t.clone();const e=t.uniforms,n=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,n.set(r,s))}const i=t.clone();for(const r of n)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=fr;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Ht,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=sn,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Ht,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=sn,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,oh){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=r}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return oh}static set workaroundEnabled(t){oh=t}},Mr=-1,Hn=class extends zi{constructor(t,e=Mr,n=Mr,i=1){super(),this.resizable=t,this.baseSize=new _e(1,1),this.preferredSize=new _e(e,n),this.target=this.preferredSize,this.s=i,this.effectiveSize=new _e,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const t=this.baseSize,e=this.preferredSize,n=this.effectiveSize,i=this.scale;e.width!==Mr?n.width=e.width:e.height!==Mr?n.width=Math.round(e.height*(t.width/Math.max(t.height,1))):n.width=Math.round(t.width*i),e.height!==Mr?n.height=e.height:e.width!==Mr?n.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):n.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(Mr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Mr}},m2=class extends Set{constructor(t,e=10){super(),this.l=e,this.exclusive=!1,t!==void 0&&this.set(t)}get layer(){return this.l}set layer(t){const e=this.l;for(const n of this)n.layers.disable(e),n.layers.enable(t);this.l=t}getLayer(){return this.layer}setLayer(t){this.layer=t}isExclusive(){return this.exclusive}setExclusive(t){this.exclusive=t}clear(){const t=this.layer;for(const e of this)e.layers.disable(t);return super.clear()}set(t){this.clear();for(const e of t)this.add(e);return this}indexOf(t){return this.has(t)?0:-1}add(t){return this.exclusive?t.layers.set(this.layer):t.layers.enable(this.layer),super.add(t)}delete(t){return this.has(t)&&t.layers.disable(this.layer),super.delete(t)}toggle(t){let e;return this.has(t)?(this.delete(t),e=!1):(this.add(t),e=!0),e}setVisible(t){for(const e of this)t?e.layers.enable(0):e.layers.disable(0);return this}},g2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",_2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",v2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",x2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",y2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",S2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",M2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",E2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",T2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",w2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",A2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",C2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",R2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",P2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",b2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",L2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",D2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",U2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",I2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",N2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",O2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",F2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",k2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",z2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",B2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",H2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",G2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",V2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",W2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",K2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",X2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",j2="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",Y2=new Map([[He.ADD,g2],[He.ALPHA,_2],[He.AVERAGE,v2],[He.COLOR,x2],[He.COLOR_BURN,y2],[He.COLOR_DODGE,S2],[He.DARKEN,M2],[He.DIFFERENCE,E2],[He.DIVIDE,T2],[He.DST,null],[He.EXCLUSION,w2],[He.HARD_LIGHT,A2],[He.HARD_MIX,C2],[He.HUE,R2],[He.INVERT,P2],[He.INVERT_RGB,b2],[He.LIGHTEN,L2],[He.LINEAR_BURN,D2],[He.LINEAR_DODGE,U2],[He.LINEAR_LIGHT,I2],[He.LUMINOSITY,N2],[He.MULTIPLY,O2],[He.NEGATION,F2],[He.NORMAL,k2],[He.OVERLAY,z2],[He.PIN_LIGHT,B2],[He.REFLECT,H2],[He.SATURATION,G2],[He.SCREEN,V2],[He.SOFT_LIGHT,W2],[He.SRC,K2],[He.SUBTRACT,X2],[He.VIVID_LIGHT,j2]]),q2=class extends zi{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new Le(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return Y2.get(this.blendFunction)}},Fy=class extends zi{constructor(t,e,{attributes:n=Kr.NONE,blendFunction:i=He.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:o=null,vertexShader:a=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=a,this.defines=r,this.uniforms=s,this.extensions=o,this.blendMode=new q2(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=jc,this._outputColorSpace=by}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Oi){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof Vt||e instanceof ra||e instanceof ln||e instanceof qn)&&this[t].dispose()}}},$2=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,Z2=class extends Fy{constructor({blendFunction:t=He.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:n=.025,mipmapBlur:i=!1,intensity:r=1,radius:s=.85,levels:o=8,kernelSize:a=Vp.LARGE,resolutionScale:l=.5,width:u=Hn.AUTO_SIZE,height:c=Hn.AUTO_SIZE,resolutionX:f=u,resolutionY:d=c}={}){super("BloomEffect",$2,{blendFunction:t,uniforms:new Map([["map",new Le(null)],["intensity",new Le(r)]])}),this.renderTarget=new Vt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new o2({kernelSize:a}),this.luminancePass=new a2({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new u2,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=o,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new Hn(this,f,d,l);p.addEventListener("change",x=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get dithering(){return this.blurPass.dithering}set dithering(t){this.blurPass.dithering=t}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(t){this.blurPass.kernelSize=t}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(t){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}getIntensity(){return this.intensity}setIntensity(t){this.intensity=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}update(t,e,n){const i=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(t,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,r.renderTarget):this.blurPass.render(t,r.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,e):this.blurPass.render(t,e,i)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(t,e),this.mipmapBlurPass.setSize(t,e)}initialize(t,e,n){this.blurPass.initialize(t,e,n),this.luminancePass.initialize(t,e,n),this.mipmapBlurPass.initialize(t,e,n),n!==void 0&&(this.renderTarget.texture.type=n,Os(t)===At&&or(this.renderTarget.texture,At))}},Q2="uniform bool active;uniform vec2 center;uniform float waveSize;uniform float radius;uniform float maxRadius;uniform float amplitude;varying float vSize;void mainUv(inout vec2 uv){if(active){vec2 aspectCorrection=vec2(aspect,1.0);vec2 difference=uv*aspectCorrection-center*aspectCorrection;float distance=sqrt(dot(difference,difference))*vSize;if(distance>radius){if(distance<radius+waveSize){float angle=(distance-radius)*PI2/waveSize;float cosSin=(1.0-cos(angle))*0.5;float extent=maxRadius+waveSize;float decay=max(extent-distance*distance,0.0)/extent;uv-=((cosSin*amplitude*difference)/distance)*decay;}}}}",J2="uniform float size;uniform float cameraDistance;varying float vSize;void mainSupport(){vSize=(0.1*cameraDistance)/size;}",eL=Math.PI*.5,ya=new U,tv=new U,tL=class extends Fy{constructor(t,e=new U,{speed:n=2,maxRadius:i=1,waveSize:r=.2,amplitude:s=.05}={}){super("ShockWaveEffect",Q2,{vertexShader:J2,uniforms:new Map([["active",new Le(!1)],["center",new Le(new _e(.5,.5))],["cameraDistance",new Le(1)],["size",new Le(1)],["radius",new Le(-r)],["maxRadius",new Le(i)],["waveSize",new Le(r)],["amplitude",new Le(s)]])}),this.position=e,this.speed=n,this.camera=t,this.screenPosition=this.uniforms.get("center").value,this.time=0,this.active=!1}set mainCamera(t){this.camera=t}get amplitude(){return this.uniforms.get("amplitude").value}set amplitude(t){this.uniforms.get("amplitude").value=t}get waveSize(){return this.uniforms.get("waveSize").value}set waveSize(t){this.uniforms.get("waveSize").value=t}get maxRadius(){return this.uniforms.get("maxRadius").value}set maxRadius(t){this.uniforms.get("maxRadius").value=t}get epicenter(){return this.position}set epicenter(t){this.position=t}getPosition(){return this.position}setPosition(t){this.position=t}getSpeed(){return this.speed}setSpeed(t){this.speed=t}explode(){this.time=0,this.active=!0,this.uniforms.get("active").value=!0}update(t,e,n){const i=this.position,r=this.camera,s=this.uniforms,o=s.get("active");if(this.active){const a=s.get("waveSize").value;r.getWorldDirection(ya),tv.copy(r.position).sub(i),o.value=ya.angleTo(tv)>eL,o.value&&(s.get("cameraDistance").value=r.position.distanceTo(i),ya.copy(i).project(r),this.screenPosition.set((ya.x+1)*.5,(ya.y+1)*.5)),this.time+=n*this.speed;const l=this.time-a;s.get("radius").value=l,l>=(s.get("maxRadius").value+a)*2&&(this.active=!1,o.value=!1)}}},nL=class extends Z2{constructor(t,e,n){super(n),this.setAttributes(this.getAttributes()|Kr.DEPTH),this.camera=e,this.depthPass=new t2(t,e),this.clearPass=new Wp(!0,!1,!1),this.clearPass.overrideClearColor=new Ze(0),this.depthMaskPass=new c2(new zb);const i=this.depthMaskMaterial;i.copyCameraSettings(e),i.depthBuffer1=this.depthPass.texture,i.depthPacking1=Is,i.depthMode=cc,this.renderTargetMasked=new Vt(1,1,{depthBuffer:!1}),this.renderTargetMasked.texture.name="Bloom.Masked",this.selection=new m2,this.selection.layer=11,this._inverted=!1,this._ignoreBackground=!1}set mainScene(t){this.depthPass.mainScene=t}set mainCamera(t){this.camera=t,this.depthPass.mainCamera=t,this.depthMaskMaterial.copyCameraSettings(t)}getSelection(){return this.selection}get depthMaskMaterial(){return this.depthMaskPass.fullscreenMaterial}get inverted(){return this._inverted}set inverted(t){this._inverted=t,this.depthMaskMaterial.depthMode=t?Dp:cc}isInverted(){return this.inverted}setInverted(t){this.inverted=t}get ignoreBackground(){return this._ignoreBackground}set ignoreBackground(t){this._ignoreBackground=t,this.depthMaskMaterial.maxDepthStrategy=t?Wa.DISCARD_MAX_DEPTH:Wa.KEEP_MAX_DEPTH}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}setDepthTexture(t,e=Oi){this.depthMaskMaterial.depthBuffer0=t,this.depthMaskMaterial.depthPacking0=e}update(t,e,n){const i=this.camera,r=this.selection,s=this.inverted;let o=e;if(this.ignoreBackground||!s||r.size>0){const a=i.layers.mask;i.layers.set(r.layer),this.depthPass.render(t),i.layers.mask=a,o=this.renderTargetMasked,this.clearPass.render(t,o),this.depthMaskPass.render(t,e,o)}super.update(t,o,n)}setSize(t,e){super.setSize(t,e),this.renderTargetMasked.setSize(t,e),this.depthPass.setSize(t,e)}initialize(t,e,n){super.initialize(t,e,n),this.clearPass.initialize(t,e,n),this.depthPass.initialize(t,e,n),this.depthMaskPass.initialize(t,e,n),t.capabilities.logarithmicDepthBuffer&&(this.depthMaskPass.fullscreenMaterial.defines.LOG_DEPTH="1"),n!==void 0&&(this.renderTargetMasked.texture.type=n,Os(t)===At&&or(this.renderTargetMasked.texture,At))}};function iL(){const t=new Ry({canvas:document.getElementById("canvas"),antialias:!0});t.setSize(window.innerWidth,window.innerHeight),t.setPixelRatio(window.devicePixelRatio),window.renderer=t;const e=new Ny(scene,camera),n=new nL(scene,camera,{blendFunction:He.ADD,mipmapBlur:!0,luminanceThreshold:0,luminanceSmoothing:.2,intensity:6}),i=new Oy(camera,n),r=new d2(t),s=new r2;r.addPass(e),r.addPass(s),r.addPass(i),window.bloomEffect=n,window.composer=r}function rL(){const t=new Sd,e=new wb(16777215,.5),n=new Tb(16777215,1);n.position.set(0,10,0),t.add(n),t.add(e),window.scene=t}const nv={type:"change"},ah={type:"start"},iv={type:"end"},vu=new py,rv=new Ar,sL=Math.cos(70*hw.DEG2RAD);class oL extends zi{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vs.ROTATE,MIDDLE:Vs.DOLLY,RIGHT:Vs.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",w),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",w),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(nv),i.update(),s=r.NONE},this.update=function(){const b=new U,J=new Ns().setFromUnitVectors(e.up,new U(0,1,0)),pe=J.clone().invert(),ue=new U,de=new Ns,Pe=new U,We=2*Math.PI;return function(){const fe=i.object.position;b.copy(fe).sub(i.target),b.applyQuaternion(J),a.setFromVector3(b),i.autoRotate&&s===r.NONE&&V(S()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let W=i.minAzimuthAngle,ne=i.maxAzimuthAngle;isFinite(W)&&isFinite(ne)&&(W<-Math.PI?W+=We:W>Math.PI&&(W-=We),ne<-Math.PI?ne+=We:ne>Math.PI&&(ne-=We),W<=ne?a.theta=Math.max(W,Math.min(ne,a.theta)):a.theta=a.theta>(W+ne)/2?Math.max(W,a.theta):Math.min(ne,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=j(a.radius):a.radius=j(a.radius*u),b.setFromSpherical(a),b.applyQuaternion(pe),fe.copy(i.target).add(b),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let he=!1;if(i.zoomToCursor&&T){let ke=null;if(i.object.isPerspectiveCamera){const $e=b.length();ke=j($e*u);const rt=$e-ke;i.object.position.addScaledVector(y,rt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const $e=new U(M.x,M.y,0);$e.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),he=!0;const rt=new U(M.x,M.y,0);rt.unproject(i.object),i.object.position.sub(rt).add($e),i.object.updateMatrixWorld(),ke=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;ke!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(ke).add(i.object.position):(vu.origin.copy(i.object.position),vu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(vu.direction))<sL?e.lookAt(i.target):(rv.setFromNormalAndCoplanarPoint(i.object.up,i.target),vu.intersectPlane(rv,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),he=!0);return u=1,T=!1,he||ue.distanceToSquared(i.object.position)>o||8*(1-de.dot(i.object.quaternion))>o||Pe.distanceToSquared(i.target)>0?(i.dispatchEvent(nv),ue.copy(i.object.position),de.copy(i.object.quaternion),Pe.copy(i.target),he=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ee),i.domElement.removeEventListener("pointerdown",Fe),i.domElement.removeEventListener("pointercancel",Xe),i.domElement.removeEventListener("wheel",P),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",Xe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",w),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Z_,l=new Z_;let u=1;const c=new U,f=new _e,d=new _e,p=new _e,x=new _e,g=new _e,m=new _e,h=new _e,_=new _e,v=new _e,y=new U,M=new _e;let T=!1;const E=[],R={};function S(){return 2*Math.PI/60/60*i.autoRotateSpeed}function A(){return Math.pow(.95,i.zoomSpeed)}function V(b){l.theta-=b}function Y(b){l.phi-=b}const I=function(){const b=new U;return function(pe,ue){b.setFromMatrixColumn(ue,0),b.multiplyScalar(-pe),c.add(b)}}(),O=function(){const b=new U;return function(pe,ue){i.screenSpacePanning===!0?b.setFromMatrixColumn(ue,1):(b.setFromMatrixColumn(ue,0),b.crossVectors(i.object.up,b)),b.multiplyScalar(pe),c.add(b)}}(),k=function(){const b=new U;return function(pe,ue){const de=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;b.copy(Pe).sub(i.target);let We=b.length();We*=Math.tan(i.object.fov/2*Math.PI/180),I(2*pe*We/de.clientHeight,i.object.matrix),O(2*ue*We/de.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(pe*(i.object.right-i.object.left)/i.object.zoom/de.clientWidth,i.object.matrix),O(ue*(i.object.top-i.object.bottom)/i.object.zoom/de.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Z(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(b){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(b){if(!i.zoomToCursor)return;T=!0;const J=i.domElement.getBoundingClientRect(),pe=b.clientX-J.left,ue=b.clientY-J.top,de=J.width,Pe=J.height;M.x=pe/de*2-1,M.y=-(ue/Pe)*2+1,y.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function j(b){return Math.max(i.minDistance,Math.min(i.maxDistance,b))}function H(b){f.set(b.clientX,b.clientY)}function N(b){D(b),h.set(b.clientX,b.clientY)}function z(b){x.set(b.clientX,b.clientY)}function ae(b){d.set(b.clientX,b.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const J=i.domElement;V(2*Math.PI*p.x/J.clientHeight),Y(2*Math.PI*p.y/J.clientHeight),f.copy(d),i.update()}function ie(b){_.set(b.clientX,b.clientY),v.subVectors(_,h),v.y>0?Z(A()):v.y<0&&K(A()),h.copy(_),i.update()}function le(b){g.set(b.clientX,b.clientY),m.subVectors(g,x).multiplyScalar(i.panSpeed),k(m.x,m.y),x.copy(g),i.update()}function ve(b){D(b),b.deltaY<0?K(A()):b.deltaY>0&&Z(A()),i.update()}function Te(b){let J=!1;switch(b.code){case i.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?Y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?Y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?V(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?V(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),J=!0;break}J&&(b.preventDefault(),i.update())}function Se(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const b=.5*(E[0].pageX+E[1].pageX),J=.5*(E[0].pageY+E[1].pageY);f.set(b,J)}}function Ye(){if(E.length===1)x.set(E[0].pageX,E[0].pageY);else{const b=.5*(E[0].pageX+E[1].pageX),J=.5*(E[0].pageY+E[1].pageY);x.set(b,J)}}function Kt(){const b=E[0].pageX-E[1].pageX,J=E[0].pageY-E[1].pageY,pe=Math.sqrt(b*b+J*J);h.set(0,pe)}function Ue(){i.enableZoom&&Kt(),i.enablePan&&Ye()}function G(){i.enableZoom&&Kt(),i.enableRotate&&Se()}function Pt(b){if(E.length==1)d.set(b.pageX,b.pageY);else{const pe=q(b),ue=.5*(b.pageX+pe.x),de=.5*(b.pageY+pe.y);d.set(ue,de)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const J=i.domElement;V(2*Math.PI*p.x/J.clientHeight),Y(2*Math.PI*p.y/J.clientHeight),f.copy(d)}function Me(b){if(E.length===1)g.set(b.pageX,b.pageY);else{const J=q(b),pe=.5*(b.pageX+J.x),ue=.5*(b.pageY+J.y);g.set(pe,ue)}m.subVectors(g,x).multiplyScalar(i.panSpeed),k(m.x,m.y),x.copy(g)}function be(b){const J=q(b),pe=b.pageX-J.x,ue=b.pageY-J.y,de=Math.sqrt(pe*pe+ue*ue);_.set(0,de),v.set(0,Math.pow(_.y/h.y,i.zoomSpeed)),Z(v.y),h.copy(_)}function Ae(b){i.enableZoom&&be(b),i.enablePan&&Me(b)}function it(b){i.enableZoom&&be(b),i.enableRotate&&Pt(b)}function Fe(b){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(b.pointerId),i.domElement.addEventListener("pointermove",De),i.domElement.addEventListener("pointerup",Xe)),se(b),b.pointerType==="touch"?X(b):bt(b))}function De(b){i.enabled!==!1&&(b.pointerType==="touch"?re(b):Ft(b))}function Xe(b){xe(b),E.length===0&&(i.domElement.releasePointerCapture(b.pointerId),i.domElement.removeEventListener("pointermove",De),i.domElement.removeEventListener("pointerup",Xe)),i.dispatchEvent(iv),s=r.NONE}function bt(b){let J;switch(b.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case Vs.DOLLY:if(i.enableZoom===!1)return;N(b),s=r.DOLLY;break;case Vs.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enablePan===!1)return;z(b),s=r.PAN}else{if(i.enableRotate===!1)return;H(b),s=r.ROTATE}break;case Vs.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(i.enableRotate===!1)return;H(b),s=r.ROTATE}else{if(i.enablePan===!1)return;z(b),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ah)}function Ft(b){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ae(b);break;case r.DOLLY:if(i.enableZoom===!1)return;ie(b);break;case r.PAN:if(i.enablePan===!1)return;le(b);break}}function P(b){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(b.preventDefault(),i.dispatchEvent(ah),ve(b),i.dispatchEvent(iv))}function w(b){i.enabled===!1||i.enablePan===!1||Te(b)}function X(b){switch(oe(b),E.length){case 1:switch(i.touches.ONE){case Ws.ROTATE:if(i.enableRotate===!1)return;Se(),s=r.TOUCH_ROTATE;break;case Ws.PAN:if(i.enablePan===!1)return;Ye(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ws.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(),s=r.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;G(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(ah)}function re(b){switch(oe(b),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Pt(b),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Me(b),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(b),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;it(b),i.update();break;default:s=r.NONE}}function ee(b){i.enabled!==!1&&b.preventDefault()}function se(b){E.push(b)}function xe(b){delete R[b.pointerId];for(let J=0;J<E.length;J++)if(E[J].pointerId==b.pointerId){E.splice(J,1);return}}function oe(b){let J=R[b.pointerId];J===void 0&&(J=new _e,R[b.pointerId]=J),J.set(b.pageX,b.pageY)}function q(b){const J=b.pointerId===E[0].pointerId?E[1]:E[0];return R[J.pointerId]}i.domElement.addEventListener("contextmenu",ee),i.domElement.addEventListener("pointerdown",Fe),i.domElement.addEventListener("pointercancel",Xe),i.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}function aL(){const t=new oL(window.camera,window.renderer.domElement);t.target.set(0,0,0),t.update(),window.controls=t}const lL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEAAQADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigD4AooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKAPv+iiigAooooAKKKKACiiigD4AooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKAPv+iiigAooooAKKKKACiiigD4AooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKAPv+iiigAooooAKKKKACiiigD4AooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKAPv+iiigAooooAKKKKACiiigD4AooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKAPv+iiigAooooAKKKKACiiigD4AooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKAPv+iiigAooooAKKKKACiiigD4AooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKAPv+iiigAooooAKKKKACiiigD4AooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKAPv+iiigAooooAKKKKACiiigD4AooooAKKKKACiiigAooooA+/6KKKACiiigAooooAKKKKAPgCiiigAooooAKKKKACiiigD7/ooooAKKKKACiiigAooooA+AKKKKACiiigAooooAKKKKAPv+iiigAooooAKKKKACiiigD//2Q==";function uL(){const t=new Kc(100,100,16,16),e=new qi().load(lL);e.wrapS=e.wrapT=fc,e.repeat.set(8,8);const n=new Op({map:e}),i=new wn(t,n);i.receiveShadow=!0,i.name="ground",i.rotateX(-Math.PI/2),scene.add(i)}const cL=`
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
`,fL=`
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

`,sv=`
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
`,ov=`
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
`,hL=`
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
`,dL=`
    varying vec3 vNormal;
    varying vec3 camPos;
    varying vec2 vUv;

    void main() {
    vNormal = normal;
    vUv = uv;
    camPos = cameraPosition;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
`,lh="/threejs-effects/assets/water-min-cc22e63d.jpg",xu="/threejs-effects/assets/noise9-f6fe66cd.jpg",pL="/threejs-effects/assets/sparklenoise-634d3faf.jpg";function Zi(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ky(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jo={duration:.5,overwrite:!1,delay:0},Kp,un,gt,ii=1e8,et=1/ii,Md=Math.PI*2,mL=Md/4,gL=0,zy=Math.sqrt,_L=Math.cos,vL=Math.sin,Wt=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},hr=function(e){return typeof e=="number"},Xp=function(e){return typeof e>"u"},ki=function(e){return typeof e=="object"},bn=function(e){return e!==!1},jp=function(){return typeof window<"u"},yu=function(e){return _t(e)||Wt(e)},By=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,Ed=/(?:-?\.?\d|\.)+/gi,Hy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,To=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,uh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Gy=/[+-]=-?[.\d]+/,Vy=/[^,'"\[\]\s]+/gi,xL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ct,Jn,Td,Yp,Xn={},pc={},Wy,Ky=function(e){return(pc=Fs(e,Xn))&&Un},qp=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},mc=function(e,n){return!n&&console.warn(e)},Xy=function(e,n){return e&&(Xn[e]=n)&&pc&&(pc[e]=n)||Xn},gl=function(){return 0},yL={suppressEvents:!0,isStart:!0,kill:!1},Iu={suppressEvents:!0,kill:!1},SL={suppressEvents:!0},$p={},Xr=[],wd={},jy,kn={},ch={},av=30,Nu=[],Zp="",Qp=function(e){var n=e[0],i,r;if(ki(n)||_t(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Nu.length;r--&&!Nu[r].targetTest(n););i=Nu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new _S(e[r],i)))||e.splice(r,1);return e},Ts=function(e){return e._gsap||Qp(ri(e))[0]._gsap},Yy=function(e,n,i){return(i=e[n])&&_t(i)?e[n]():Xp(i)&&e.getAttribute&&e.getAttribute(n)||i},Ln=function(e,n){return(e=e.split(",")).forEach(n)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},jt=function(e){return Math.round(e*1e7)/1e7||0},Io=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},ML=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},gc=function(){var e=Xr.length,n=Xr.slice(0),i,r;for(wd={},Xr.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},qy=function(e,n,i,r){Xr.length&&!un&&gc(),e.render(n,i,r||un&&n<0&&(e._initted||e._startAt)),Xr.length&&!un&&gc()},$y=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(Vy).length<2?n:Wt(e)?e.trim():e},Zy=function(e){return e},ui=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},EL=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Fs=function(e,n){for(var i in n)e[i]=n[i];return e},lv=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ki(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},_c=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},Ka=function(e){var n=e.parent||ct,i=e.keyframes?EL(cn(e.keyframes)):ui;if(bn(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},TL=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},Qy=function(e,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=n[s];o&&o[s]>a;)o=o._prev;return o?(n._next=o._next,o._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=o,n.parent=n._dp=e,n},Yc=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,o=n._next;s?s._next=o:e[i]===n&&(e[i]=o),o?o._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},$r=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ws=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},wL=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Ad=function(e,n,i,r){return e._startAt&&(un?e._startAt.revert(Iu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},AL=function t(e){return!e||e._ts&&t(e.parent)},uv=function(e){return e._repeat?Yo(e._tTime,e=e.duration()+e._rDelay)*e:0},Yo=function(e,n){var i=Math.floor(e/=n);return e&&i===e?i-1:i},vc=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},qc=function(e){return e._end=jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||et)||0))},$c=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=jt(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),qc(e),i._dirty||ws(i,e)),e},Jy=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=vc(e.rawTime(),n),(!n._dur||Ll(0,n.totalDuration(),i)-n._tTime>et)&&n.render(i,!0)),ws(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-et}},bi=function(e,n,i,r){return n.parent&&$r(n),n._start=jt((hr(i)?i:i||e!==ct?Qn(e,i,n):e._time)+n._delay),n._end=jt(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Qy(e,n,"_first","_last",e._sort?"_start":0),Cd(n)||(e._recent=n),r||Jy(e,n),e._ts<0&&$c(e,e._tTime),e},eS=function(e,n){return(Xn.ScrollTrigger||qp("scrollTrigger",n))&&Xn.ScrollTrigger.create(n,e)},tS=function(e,n,i,r,s){if(em(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!un&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jy!==zn.frame)return Xr.push(e),e._lazy=[s,r],1},CL=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Cd=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},RL=function(e,n,i,r){var s=e.ratio,o=n<0||!n&&(!e._start&&CL(e)&&!(!e._initted&&Cd(e))||(e._ts<0||e._dp._ts<0)&&!Cd(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Ll(0,e._tDur,n),c=Yo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Yo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||un||r||e._zTime===et||!n&&e._zTime){if(!e._initted&&tS(e,n,r,i,l))return;for(f=e._zTime,e._zTime=n||(i?et:0),i||(i=n&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;n<0&&Ad(e,n,i,!0),e._onUpdate&&!i&&si(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&si(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===o&&(o&&$r(e,1),!i&&!un&&(si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},PL=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},qo=function(e,n,i,r){var s=e._repeat,o=jt(n)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&$c(e,e._tTime=e._tDur*a),e.parent&&qc(e),i||ws(e.parent,e),e},cv=function(e){return e instanceof Mn?ws(e):qo(e,e._dur)},bL={_start:0,endTime:gl,totalDuration:gl},Qn=function t(e,n,i){var r=e.labels,s=e._recent||bL,o=e.duration()>=ii?s.endTime(!1):e._dur,a,l,u;return Wt(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),u=n.substr(-1)==="%",a=n.indexOf("="),l==="<"||l===">"?(a>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(n in r||(r[n]=o),r[n]):(l=parseFloat(n.charAt(a-1)+n.substr(a+1)),u&&i&&(l=l/100*(cn(i)?i[0]:i).totalDuration()),a>1?t(e,n.substr(0,a-1),i)+l:o+l)):n==null?o:+n},Xa=function(e,n,i){var r=hr(n[1]),s=(r?2:1)+(e<2?0:1),o=n[s],a,l;if(r&&(o.duration=n[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;o.immediateRender=bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=n[s-1]}return new Tt(n[0],o,n[s+1])},ts=function(e,n){return e||e===0?n(e):n},Ll=function(e,n,i){return i<e?e:i>n?n:i},on=function(e,n){return!Wt(e)||!(n=xL.exec(e))?"":n[1]},LL=function(e,n,i){return ts(i,function(r){return Ll(e,n,r)})},Rd=[].slice,nS=function(e,n){return e&&ki(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&ki(e[0]))&&!e.nodeType&&e!==Jn},DL=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Wt(r)&&!n||nS(r,1)?(s=i).push.apply(s,ri(r)):i.push(r)})||i},ri=function(e,n,i){return gt&&!n&&gt.selector?gt.selector(e):Wt(e)&&!i&&(Td||!$o())?Rd.call((n||Yp).querySelectorAll(e),0):cn(e)?DL(e,i):nS(e)?Rd.call(e,0):e?[e]:[]},Pd=function(e){return e=ri(e)[0]||mc("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return ri(n,i.querySelectorAll?i:i===e?mc("Invalid scope")||Yp.createElement("div"):e)}},iS=function(e){return e.sort(function(){return .5-Math.random()})},rS=function(e){if(_t(e))return e;var n=ki(e)?e:{each:e},i=As(n.ease),r=n.from||0,s=parseFloat(n.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=n.axis,c=r,f=r;return Wt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,p,x){var g=(x||n).length,m=o[g],h,_,v,y,M,T,E,R,S;if(!m){if(S=n.grid==="auto"?0:(n.grid||[1,ii])[1],!S){for(E=-ii;E<(E=x[S++].getBoundingClientRect().left)&&S<g;);S--}for(m=o[g]=[],h=l?Math.min(S,g)*c-.5:r%S,_=S===ii?0:l?g*f/S-.5:r/S|0,E=0,R=ii,T=0;T<g;T++)v=T%S-h,y=_-(T/S|0),m[T]=M=u?Math.abs(u==="y"?y:v):zy(v*v+y*y),M>E&&(E=M),M<R&&(R=M);r==="random"&&iS(m),m.max=E-R,m.min=R,m.v=g=(parseFloat(n.amount)||parseFloat(n.each)*(S>g?g-1:u?u==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=on(n.amount||n.each)||0,i=i&&g<0?pS(i):i}return g=(m[d]-m.min)/m.max||0,jt(m.b+(i?i(g):g)*m.v)+m.u}},bd=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=jt(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(hr(i)?0:on(i))}},sS=function(e,n){var i=cn(e),r,s;return!i&&ki(e)&&(r=i=e.radius||ii,e.values?(e=ri(e.values),(s=!hr(e[0]))&&(r*=r)):e=bd(e.increment)),ts(n,i?_t(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ii,c=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||hr(o)?c:c+on(o)}:bd(e))},oS=function(e,n,i,r){return ts(cn(e)?!n:i===!0?!!(i=0):!r,function(){return cn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},UL=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,o){return o(s)},r)}},IL=function(e,n){return function(i){return e(parseFloat(i))+(n||on(i))}},NL=function(e,n,i){return lS(e,n,0,1,i)},aS=function(e,n,i){return ts(i,function(r){return e[~~n(r)]})},OL=function t(e,n,i){var r=n-e;return cn(e)?aS(e,t(0,e.length),n):ts(i,function(s){return(r+(s-e)%r)%r+e})},FL=function t(e,n,i){var r=n-e,s=r*2;return cn(e)?aS(e,t(0,e.length-1),n):ts(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},_l=function(e){for(var n=0,i="",r,s,o,a;~(r=e.indexOf("random(",n));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Vy:Ed),i+=e.substr(n,r-n)+oS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),n=o+1;return i+e.substr(n,e.length-n)},lS=function(e,n,i,r,s){var o=n-e,a=r-i;return ts(s,function(l){return i+((l-e)/o*a||0)})},kL=function t(e,n,i,r){var s=isNaN(e+n)?0:function(p){return(1-p)*e+p*n};if(!s){var o=Wt(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},n={p:n};else if(cn(e)&&!cn(n)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(t(e[u-1],e[u]));f--,s=function(x){x*=f;var g=Math.min(d,~~x);return c[g](x-g)},i=n}else r||(e=Fs(cn(e)?[]:{},e));if(!c){for(l in n)Jp.call(a,e,l,"get",n[l]);s=function(x){return im(x,a)||(o?e.p:e)}}}return ts(i,s)},fv=function(e,n,i){var r=e.labels,s=ii,o,a,l;for(o in r)a=r[o]-n,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},si=function(e,n,i){var r=e.vars,s=r[n],o=gt,a=e._ctx,l,u,c;if(s)return l=r[n+"Params"],u=r.callbackScope||e,i&&Xr.length&&gc(),a&&(gt=a),c=l?s.apply(u,l):s.call(u),gt=o,c},Pa=function(e){return $r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!un),e.progress()<1&&si(e,"onInterrupt"),e},wo,uS=[],cS=function(e){if(jp()&&e){e=!e.name&&e.default||e;var n=e.name,i=_t(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:gl,render:im,add:Jp,kill:eD,modifier:JL,rawVars:0},o={targetTest:0,get:0,getSetter:nm,aliases:{},register:0};if($o(),e!==r){if(kn[n])return;ui(r,ui(_c(e,s),o)),Fs(r.prototype,Fs(s,_c(e,o))),kn[r.prop=n]=r,e.targetTest&&(Nu.push(r),$p[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Xy(n,r),e.register&&e.register(Un,r,Dn)}else e&&uS.push(e)},Je=255,ba={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},fh=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*Je+.5|0},fS=function(e,n,i){var r=e?hr(e)?[e>>16,e>>8&Je,e&Je]:0:ba.black,s,o,a,l,u,c,f,d,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ba[e])r=ba[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Je,r&Je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Je,e&Je]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(Ed),!n)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=fh(l+1/3,s,o),r[1]=fh(l,s,o),r[2]=fh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Hy),i&&r.length<4&&(r[3]=1),r}else r=e.match(Ed)||ba.transparent;r=r.map(Number)}return n&&!x&&(s=r[0]/Je,o=r[1]/Je,a=r[2]/Je,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(p=f-d,u=c>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},hS=function(e){var n=[],i=[],r=-1;return e.split(jr).forEach(function(s){var o=s.match(To)||[];n.push.apply(n,o),i.push(r+=o.length+1)}),n.c=i,n},hv=function(e,n,i){var r="",s=(e+r).match(jr),o=n?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=fS(d,n,1))&&o+(n?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=hS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(jr,"1").split(To),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(jr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},jr=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ba)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),zL=/hsl[a]?\(/,dS=function(e){var n=e.join(" "),i;if(jr.lastIndex=0,jr.test(n))return i=zL.test(n),e[1]=hv(e[1],i),e[0]=hv(e[0],i,hS(e[1])),!0},vl,zn=function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,p,x=function g(m){var h=t()-r,_=m===!0,v,y,M,T;if(h>e&&(i+=h-n),r+=h,M=r-i,v=M-o,(v>0||_)&&(T=++f.frame,d=M-f.time*1e3,f.time=M=M/1e3,o+=v+(v>=s?4:s-v),y=1),_||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](M,d,T,m)};return f={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Wy&&(!Td&&jp()&&(Jn=Td=window,Yp=Jn.document||{},Xn.gsap=Un,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(Un.version),Ky(pc||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),c=Jn.requestAnimationFrame,uS.forEach(cS)),l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},vl=1,x(2))},sleep:function(){(c?Jn.cancelAnimationFrame:clearTimeout)(l),vl=0,u=gl},lagSmoothing:function(m,h){e=m||1/0,n=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,h,_){var v=h?function(y,M,T,E){m(y,M,T,E),f.remove(v)}:m;return f.remove(m),a[_?"unshift":"push"](v),$o(),v},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},f}(),$o=function(){return!vl&&zn.wake()},Ke={},BL=/^[\d.\-M][\d.\-,\s]/,HL=/["']/g,GL=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),n[r]=isNaN(u)?u.replace(HL,"").trim():+u,r=l.substr(a+1).trim();return n},VL=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},WL=function(e){var n=(e+"").split("("),i=Ke[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[GL(n[1])]:VL(e).split(",").map($y)):Ke._CE&&BL.test(e)?Ke._CE("",e):i},pS=function(e){return function(n){return 1-e(1-n)}},mS=function t(e,n){for(var i=e._first,r;i;)i instanceof Mn?t(i,n):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==n&&(i.timeline?t(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},As=function(e,n){return e&&(_t(e)?e:Ke[e]||WL(e))||n},Hs=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},o;return Ln(e,function(a){Ke[a]=Xn[a]=s,Ke[o=a.toLowerCase()]=i;for(var l in s)Ke[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[a+"."+l]=s[l]}),s},gS=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},hh=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),o=s/Md*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*vL((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:gS(a);return s=Md/s,l.config=function(u,c){return t(e,u,c)},l},dh=function t(e,n){n===void 0&&(n=1.70158);var i=function(o){return o?--o*o*((n+1)*o+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:gS(i);return r.config=function(s){return t(e,s)},r};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;Hs(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;Hs("Elastic",hh("in"),hh("out"),hh());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(a){return a<n?t*a*a:a<i?t*Math.pow(a-1.5/e,2)+.75:a<r?t*(a-=2.25/e)*a+.9375:t*Math.pow(a-2.625/e,2)+.984375};Hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Hs("Expo",function(t){return t?Math.pow(2,10*(t-1)):0});Hs("Circ",function(t){return-(zy(1-t*t)-1)});Hs("Sine",function(t){return t===1?1:-_L(t*mL)+1});Hs("Back",dh("in"),dh("out"),dh());Ke.SteppedEase=Ke.steps=Xn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,o=1-et;return function(a){return((r*Ll(0,o,a)|0)+s)*i}}};jo.ease=Ke["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Zp+=t+","+t+"Params,"});var _S=function(e,n){this.id=gL++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:Yy,this.set=n?n.getSetter:nm},xl=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,qo(this,+n.duration,1,1),this.data=n.data,gt&&(this._ctx=gt,gt.data.push(this)),vl||zn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,qo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if($o(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for($c(this,i),!s._dp||s.parent||Jy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&bi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===et||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),qy(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+uv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+uv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Yo(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-et?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?vc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-et?0:this._rts,this.totalTime(Ll(-Math.abs(this._delay),this._tDur,r),!0),qc(this),wL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($o(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==et&&(this._tTime-=et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&bi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(bn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=SL);var r=un;return un=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),un=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,cv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,cv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Qn(this,i),bn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,bn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-et,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-et)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=_t(i)?i:Zy,a=function(){var u=r.then;r.then=null,_t(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Pa(this)},t}();ui(xl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-et,_prom:0,_ps:!1,_rts:1});var Mn=function(t){ky(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=bn(i.sortChildren),ct&&bi(i.parent||ct,Zi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&eS(Zi(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,o){return Xa(0,arguments,this),this},n.from=function(r,s,o){return Xa(1,arguments,this),this},n.fromTo=function(r,s,o,a){return Xa(2,arguments,this),this},n.set=function(r,s,o){return s.duration=0,s.parent=this,Ka(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(r,s,Qn(this,o),1),this},n.call=function(r,s,o){return bi(this,Tt.delayedCall(0,r,s),o)},n.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Tt(r,o,Qn(this,l)),this},n.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ka(o).immediateRender=bn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},n.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Ka(a).immediateRender=bn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},n.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:jt(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,p,x,g,m,h,_,v,y,M,T,E;if(this!==ct&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,y=this._start,v=this._ts,h=!v,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=jt(c%m),c===l?(g=this._repeat,d=u):(g=~~(c/m),g&&g===c/m&&(d=u,g--),d>u&&(d=u)),M=Yo(this._tTime,m),!a&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),T&&g&1&&(d=u-d,E=1),g!==M&&!this._lock){var R=T&&M&1,S=R===(T&&g&1);if(g<M&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(E?0:jt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;mS(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=PL(this,jt(a),jt(d)),_&&(c-=d-(d=_._start))),this._tTime=c,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!g&&(si(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||d>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!h){_=0,x&&(c+=this._zTime=-et);break}}p=x}else{p=this._last;for(var A=r<0?r:d;p;){if(x=p._prev,(p._act||A<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,s,o||un&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!h){_=0,x&&(c+=this._zTime=A?-et:et);break}}p=x}}if(_&&!s&&(this.pause(),_.render(d>=a?0:-et)._zTime=d>=a?1:-1,this._ts))return this._start=y,qc(this),this.render(r,s,o);this._onUpdate&&!s&&si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&$r(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(si(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var o=this;if(hr(s)||(s=Qn(this,s,r)),!(r instanceof xl)){if(cn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Wt(r))return this.addLabel(r,s);if(_t(r))r=Tt.delayedCall(0,r);else return this}return this!==r?bi(this,r,s):this},n.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ii);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Tt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},n.remove=function(r){return Wt(r)?this.removeLabel(r):_t(r)?this.killTweensOf(r):(Yc(this,r),r===this._recent&&(this._recent=this._last),ws(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=jt(zn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=Qn(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,o){var a=Tt.delayedCall(0,s||gl,o);return a.data="isPause",this._hasPause=1,bi(this,a,Qn(this,r))},n.removePause=function(r){var s=this._first;for(r=Qn(this,r);s;)s._start===r&&s.data==="isPause"&&$r(s),s=s._next},n.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Dr!==a[l]&&a[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var o=[],a=ri(r),l=this._first,u=hr(s),c;l;)l instanceof Tt?ML(l._targets,a)&&(u?(!Dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},n.tweenTo=function(r,s){s=s||{};var o=this,a=Qn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,p,x=Tt.to(o,ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||et,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==m&&qo(x,m,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,f||[])}},s));return d?x.render(0):x},n.tweenFromTo=function(r,s,o){return this.tweenTo(s,ui({startAt:{time:Qn(this,r)}},o))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),fv(this,Qn(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),fv(this,Qn(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+et)},n.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return ws(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ws(this)},n.totalDuration=function(r){var s=0,o=this,a=o._last,l=ii,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,bi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;qo(o,o===ct&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(ct._ts&&(qy(ct,vc(r,ct)),jy=zn.frame),zn.frame>=av){av+=Wn.autoSleep||120;var s=ct._first;if((!s||!s._ts)&&Wn.autoSleep&&zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zn.sleep()}}},e}(xl);ui(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var KL=function(e,n,i,r,s,o,a){var l=new Dn(this._pt,e,n,0,1,ES,null,s),u=0,c=0,f,d,p,x,g,m,h,_;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=_l(r)),o&&(_=[i,r],o(_,e,n),i=_[0],r=_[1]),d=i.match(uh)||[];f=uh.exec(r);)x=f[0],g=r.substring(u,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),x!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:x.charAt(1)==="="?Io(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},u=uh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Gy.test(r)||h)&&(l.e=0),this._pt=l,l},Jp=function(e,n,i,r,s,o,a,l,u,c){_t(r)&&(r=r(s||0,e,o));var f=e[n],d=i!=="get"?i:_t(f)?u?e[n.indexOf("set")||!_t(e["get"+n.substr(3)])?n:"get"+n.substr(3)](u):e[n]():f,p=_t(f)?u?$L:SS:tm,x;if(Wt(r)&&(~r.indexOf("random(")&&(r=_l(r)),r.charAt(1)==="="&&(x=Io(d,r)+(on(d)||0),(x||x===0)&&(r=x))),!c||d!==r||Ld)return!isNaN(d*r)&&r!==""?(x=new Dn(this._pt,e,n,+d||0,r-(d||0),typeof f=="boolean"?QL:MS,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!f&&!(n in e)&&qp(n,r),KL.call(this,e,n,d,r,p,l||Wn.stringFilter,u))},XL=function(e,n,i,r,s){if(_t(e)&&(e=ja(e,s,n,i,r)),!ki(e)||e.style&&e.nodeType||cn(e)||By(e))return Wt(e)?ja(e,s,n,i,r):e;var o={},a;for(a in e)o[a]=ja(e[a],s,n,i,r);return o},vS=function(e,n,i,r,s,o){var a,l,u,c;if(kn[e]&&(a=new kn[e]).init(s,a.rawVars?n[e]:XL(n[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Dn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==wo))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Dr,Ld,em=function t(e,n,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,f=r.callbackScope,d=r.runBackwards,p=r.yoyoEase,x=r.keyframes,g=r.autoRevert,m=e._dur,h=e._startAt,_=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:_,M=e._overwrite==="auto"&&!Kp,T=e.timeline,E,R,S,A,V,Y,I,O,k,Z,K,D,j;if(T&&(!x||!s)&&(s="none"),e._ease=As(s,jo.ease),e._yEase=p?pS(As(p===!0?s:p,jo.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!T&&!!r.runBackwards,!T||x&&!r.stagger){if(O=_[0]?Ts(_[0]).harness:0,D=O&&r[O.prop],E=_c(r,$p),h&&(h._zTime<0&&h.progress(1),n<0&&d&&a&&!g?h.render(-1,!0):h.revert(d&&m?Iu:yL),h._lazy=0),o){if($r(e._startAt=Tt.set(_,ui({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!h&&bn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(un||!a&&!g)&&e._startAt.revert(Iu),a&&m&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(d&&m&&!h){if(n&&(a=!1),S=ui({overwrite:!1,data:"isFromStart",lazy:a&&!h&&bn(l),immediateRender:a,stagger:0,parent:v},E),D&&(S[O.prop]=D),$r(e._startAt=Tt.set(_,S)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(un?e._startAt.revert(Iu):e._startAt.render(-1,!0)),e._zTime=n,!a)t(e._startAt,et,et);else if(!n)return}for(e._pt=e._ptCache=0,l=m&&bn(l)||l&&!m,R=0;R<_.length;R++){if(V=_[R],I=V._gsap||Qp(_)[R]._gsap,e._ptLookup[R]=Z={},wd[I.id]&&Xr.length&&gc(),K=y===_?R:y.indexOf(V),O&&(k=new O).init(V,D||E,e,K,y)!==!1&&(e._pt=A=new Dn(e._pt,V,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(H){Z[H]=A}),k.priority&&(Y=1)),!O||D)for(S in E)kn[S]&&(k=vS(S,E,e,K,V,y))?k.priority&&(Y=1):Z[S]=A=Jp.call(e,V,S,"get",E[S],K,y,0,r.stringFilter);e._op&&e._op[R]&&e.kill(V,e._op[R]),M&&e._pt&&(Dr=e,ct.killTweensOf(V,Z,e.globalTime(n)),j=!e.parent,Dr=0),e._pt&&l&&(wd[I.id]=1)}Y&&TS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!j,x&&n<=0&&T.render(ii,!0,!0)},jL=function(e,n,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,c,f,d;if(!l)for(l=e._ptCache[n]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return Ld=1,e.vars[n]="+=0",em(e,a),Ld=0,1;l.push(u)}for(d=l.length;d--;)c=l[d],u=c._pt||c,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=xt(i)+on(c.e)),c.b&&(c.b=u.s+on(c.b))},YL=function(e,n){var i=e[0]?Ts(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return n;s=Fs({},n);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},qL=function(e,n,i,r){var s=n.ease||r||"power1.inOut",o,a;if(cn(n))a=i[e]||(i[e]=[]),n.forEach(function(l,u){return a.push({t:u/(n.length-1)*100,v:l,e:s})});else for(o in n)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:n[o],e:s})},ja=function(e,n,i,r,s){return _t(e)?e.call(n,i,r,s):Wt(e)&&~e.indexOf("random(")?_l(e):e},xS=Zp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yS={};Ln(xS+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return yS[t]=1});var Tt=function(t){ky(e,t);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=t.call(this,o?r:Ka(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,x=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,_=r.parent||ct,v=(cn(i)||By(i)?hr(i[0]):"length"in r)?[i]:ri(i),y,M,T,E,R,S,A,V;if(a._targets=v.length?Qp(v):mc("GSAP target "+i+" not found. https://greensock.com",!Wn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||d||yu(u)||yu(c)){if(r=a.vars,y=a.timeline=new Mn({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:v}),y.kill(),y.parent=y._dp=Zi(a),y._start=0,d||yu(u)||yu(c)){if(E=v.length,A=d&&rS(d),ki(d))for(R in d)~xS.indexOf(R)&&(V||(V={}),V[R]=d[R]);for(M=0;M<E;M++)T=_c(r,yS),T.stagger=0,h&&(T.yoyoEase=h),V&&Fs(T,V),S=v[M],T.duration=+ja(u,Zi(a),M,S,v),T.delay=(+ja(c,Zi(a),M,S,v)||0)-a._delay,!d&&E===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(S,T,A?A(M,S,v):0),y._ease=Ke.none;y.duration()?u=c=0:a.timeline=0}else if(x){Ka(ui(y.vars.defaults,{ease:"none"})),y._ease=As(x.ease||r.ease||"none");var Y=0,I,O,k;if(cn(x))x.forEach(function(Z){return y.to(v,Z,">")}),y.duration();else{T={};for(R in x)R==="ease"||R==="easeEach"||qL(R,x[R],T,x.easeEach);for(R in T)for(I=T[R].sort(function(Z,K){return Z.t-K.t}),Y=0,M=0;M<I.length;M++)O=I[M],k={ease:O.e,duration:(O.t-(M?I[M-1].t:0))/100*u},k[R]=O.v,y.to(v,k,Y),Y+=k.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Kp&&(Dr=Zi(a),ct.killTweensOf(v),Dr=0),bi(_,Zi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!x&&a._start===jt(_._time)&&bn(f)&&AL(Zi(a))&&_.data!=="nested")&&(a._tTime=-et,a.render(Math.max(0,-c)||0)),m&&eS(Zi(a),m),a}var n=e.prototype;return n.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-et&&!c?l:r<et?0:r,d,p,x,g,m,h,_,v,y;if(!u)RL(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=f,v=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(d=jt(f%g),f===l?(x=this._repeat,d=u):(x=~~(f/g),x&&x===f/g&&(d=u,x--),d>u&&(d=u)),h=this._yoyo&&x&1,h&&(y=this._yEase,d=u-d),m=Yo(this._tTime,g),d===a&&!o&&this._initted)return this._tTime=f,this;x!==m&&(v&&this._yEase&&mS(v,h),this.vars.repeatRefresh&&!h&&!this._lock&&(this._lock=o=1,this.render(jt(g*x),!0).invalidate()._lock=0))}if(!this._initted){if(tS(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(d/u),this._from&&(this.ratio=_=1-_),d&&!a&&!s&&!x&&(si(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;v&&v.render(r<0?r:!d&&h?-et:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Ad(this,r,s,o),si(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Ad(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&$r(this,1),!s&&!(c&&!a)&&(f||a||h)&&(si(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,o,a){vl||zn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||em(this,l),u=this._ease(l/this._dur),jL(this,r,s,o,a,u,l)?this.resetTo(r,s,o,a):($c(this,0),this.parent||Qy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Pa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Dr&&Dr.vars.overwrite!==!0)._first||Pa(this),this.parent&&o!==this.timeline.totalDuration()&&qo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ri(r):a,u=this._ptLookup,c=this._pt,f,d,p,x,g,m,h;if((!s||s==="all")&&TL(a,l))return s==="all"&&(this._pt=0),Pa(this);for(f=this._op=this._op||[],s!=="all"&&(Wt(s)&&(g={},Ln(s,function(_){return g[_]=1}),s=g),s=YL(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){d=u[h],s==="all"?(f[h]=s,x=d,p={}):(p=f[h]=f[h]||{},x=s);for(g in x)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Yc(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Pa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Xa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Xa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return ct.killTweensOf(r,s,o)},e}(xl);ui(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(t){Tt[t]=function(){var e=new Mn,n=Rd.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var tm=function(e,n,i){return e[n]=i},SS=function(e,n,i){return e[n](i)},$L=function(e,n,i,r){return e[n](r.fp,i)},ZL=function(e,n,i){return e.setAttribute(n,i)},nm=function(e,n){return _t(e[n])?SS:Xp(e[n])&&e.setAttribute?ZL:tm},MS=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},QL=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},ES=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},im=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},JL=function(e,n,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,n,i),s=o},eD=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?Yc(this,n,"_pt"):n.dep||(i=1),n=r;return!i},tD=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},TS=function(e){for(var n=e._pt,i,r,s,o;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:o)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:o=n,n=i}e._pt=s},Dn=function(){function t(n,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||MS,this.d=l||this,this.set=u||tm,this.pr=c||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=tD,this.m=i,this.mt=s,this.tween=r},t}();Ln(Zp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return $p[t]=1});Xn.TweenMax=Xn.TweenLite=Tt;Xn.TimelineLite=Xn.TimelineMax=Mn;ct=new Mn({sortChildren:!1,defaults:jo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=dS;var Cs=[],Ou={},nD=[],dv=0,iD=0,ph=function(e){return(Ou[e]||nD).map(function(n){return n()})},Dd=function(){var e=Date.now(),n=[];e-dv>2&&(ph("matchMediaInit"),Cs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Jn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&n.push(i))}),ph("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i)}),dv=e,ph("matchMedia"))},wS=function(){function t(n,i){this.selector=i&&Pd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=iD++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){_t(i)&&(s=r,r=i,i=_t);var o=this,a=function(){var u=gt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Pd(s)),gt=o,f=r.apply(o,arguments),_t(f)&&o._r.push(f),gt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===_t?a(o):i?o[i]=a:a},e.ignore=function(i){var r=gt;gt=null,i(this),gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Tt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1/0}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Tt)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=Cs.length;a--;)Cs[a].id===this.id&&Cs.splice(a,1)},e.revert=function(i){this.kill(i||{})},t}(),rD=function(){function t(n){this.contexts=[],this.scope=n}var e=t.prototype;return e.add=function(i,r,s){ki(i)||(i={matches:i});var o=new wS(0,s||this.scope),a=o.conditions={},l,u,c;gt&&!o.selector&&(o.selector=gt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Jn.matchMedia(i[u]),l&&(Cs.indexOf(o)<0&&Cs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Dd):l.addEventListener("change",Dd)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t}(),xc={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return cS(r)})},timeline:function(e){return new Mn(e)},getTweensOf:function(e,n){return ct.getTweensOf(e,n)},getProperty:function(e,n,i,r){Wt(e)&&(e=ri(e)[0]);var s=Ts(e||{}).get,o=i?Zy:$y;return i==="native"&&(i=""),e&&(n?o((kn[n]&&kn[n].get||s)(e,n,i,r)):function(a,l,u){return o((kn[a]&&kn[a].get||s)(e,a,l,u))})},quickSetter:function(e,n,i){if(e=ri(e),e.length>1){var r=e.map(function(c){return Un.quickSetter(c,n,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=kn[n],a=Ts(e),l=a.harness&&(a.harness.aliases||{})[n]||n,u=o?function(c){var f=new o;wo._pt=0,f.init(e,i?c+i:c,wo,0,[e]),f.render(1,f),wo._pt&&im(1,wo)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,n,i){var r,s=Un.to(e,Fs((r={},r[n]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(n,l,u,c)};return o.tween=s,o},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=As(e.ease,jo.ease)),lv(jo,e||{})},config:function(e){return lv(Wn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!kn[a]&&!Xn[a]&&mc(n+" effect requires "+a+" plugin.")}),ch[n]=function(a,l,u){return i(ri(a),ui(l||{},s),u)},o&&(Mn.prototype[n]=function(a,l,u){return this.add(ch[n](a,ki(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,n){Ke[e]=As(n)},parseEase:function(e,n){return arguments.length?As(e,n):Ke},getById:function(e){return ct.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Mn(e),r,s;for(i.smoothChildTiming=bn(e.smoothChildTiming),ct.remove(i),i._dp=0,i._time=i._tTime=ct._time,r=ct._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Tt&&r.vars.onComplete===r._targets[0]))&&bi(i,r,r._start-r._delay),r=s;return bi(ct,i,0),i},context:function(e,n){return e?new wS(e,n):gt},matchMedia:function(e){return new rD(e)},matchMediaRefresh:function(){return Cs.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||Dd()},addEventListener:function(e,n){var i=Ou[e]||(Ou[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Ou[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:OL,wrapYoyo:FL,distribute:rS,random:oS,snap:sS,normalize:NL,getUnit:on,clamp:LL,splitColor:fS,toArray:ri,selector:Pd,mapRange:lS,pipe:UL,unitize:IL,interpolate:kL,shuffle:iS},install:Ky,effects:ch,ticker:zn,updateRoot:Mn.updateRoot,plugins:kn,globalTimeline:ct,core:{PropTween:Dn,globals:Xy,Tween:Tt,Timeline:Mn,Animation:xl,getCache:Ts,_removeLinkedListItem:Yc,reverting:function(){return un},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return Kp=e}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return xc[t]=Tt[t]});zn.add(Mn.updateRoot);wo=xc.to({},{duration:0});var sD=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},oD=function(e,n){var i=e._targets,r,s,o;for(r in n)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=sD(o,r)),o&&o.modifier&&o.modifier(n[r],e,i[s],r))},mh=function(e,n){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Wt(s)&&(l={},Ln(s,function(c){return l[c]=1}),s=l),n){l={};for(u in s)l[u]=n(s[u]);s=l}oD(a,s)}}}},Un=xc.registerPlugin({name:"attr",init:function(e,n,i,r,s){var o,a,l;this.tween=i;for(o in n)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",n[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,n){for(var i=n._pt;i;)un?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},mh("roundProps",bd),mh("modifiers"),mh("snap",sS))||xc;Tt.version=Mn.version=Un.version="3.12.2";Wy=1;jp()&&$o();Ke.Power0;Ke.Power1;Ke.Power2;Ke.Power3;Ke.Power4;Ke.Linear;Ke.Quad;Ke.Cubic;Ke.Quart;Ke.Quint;Ke.Strong;Ke.Elastic;Ke.Back;Ke.SteppedEase;Ke.Bounce;Ke.Sine;Ke.Expo;Ke.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pv,Ur,No,rm,vs,mv,sm,aD=function(){return typeof window<"u"},dr={},ds=180/Math.PI,Oo=Math.PI/180,ao=Math.atan2,gv=1e8,om=/([A-Z])/g,lD=/(left|right|width|margin|padding|x)/i,uD=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ud=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},cD=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},fD=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},hD=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},AS=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},CS=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},dD=function(e,n,i){return e.style[n]=i},pD=function(e,n,i){return e.style.setProperty(n,i)},mD=function(e,n,i){return e._gsap[n]=i},gD=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},_D=function(e,n,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},vD=function(e,n,i,r,s){var o=e._gsap;o[n]=i,o.renderTransform(s,o)},ft="transform",Ei=ft+"Origin",xD=function t(e,n){var i=this,r=this.target,s=r.style;if(e in dr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Ji(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Ji(r,e);else return Di.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(ft)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Ei,n,"")),e=ft}(s||n)&&this.props.push(e,n,s[e])},RS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},yD=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(om,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=sm(),(!s||!s.isStart)&&!i[ft]&&(RS(i),r.uncache=1)}},PS=function(e,n){var i={target:e,props:[],revert:yD,save:xD};return e._gsap||Un.core.getCache(e),n&&n.split(",").forEach(function(r){return i.save(r)}),i},bS,Id=function(e,n){var i=Ur.createElementNS?Ur.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ur.createElement(e);return i.style?i:Ur.createElement(e)},Ni=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(om,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,Zo(n)||n,1)||""},_v="O,Moz,ms,Ms,Webkit".split(","),Zo=function(e,n,i){var r=n||vs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(_v[o]+e in s););return o<0?null:(o===3?"ms":o>=0?_v[o]:"")+e},Nd=function(){aD()&&window.document&&(pv=window,Ur=pv.document,No=Ur.documentElement,vs=Id("div")||{style:{}},Id("div"),ft=Zo(ft),Ei=ft+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bS=!!Zo("perspective"),sm=Un.core.reverting,rm=1)},gh=function t(e){var n=Id("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(No.appendChild(n),n.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),No.removeChild(n),this.style.cssText=s,o},vv=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},LS=function(e){var n;try{n=e.getBBox()}catch{n=gh.call(e,!0)}return n&&(n.width||n.height)||e.getBBox===gh||(n=gh.call(e,!0)),n&&!n.width&&!n.x&&!n.y?{x:+vv(e,["x","cx","x1"])||0,y:+vv(e,["y","cy","y1"])||0,width:0,height:0}:n},DS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&LS(e))},yl=function(e,n){if(n){var i=e.style;n in dr&&n!==Ei&&(n=ft),i.removeProperty?((n.substr(0,2)==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(n.replace(om,"-$1").toLowerCase())):i.removeAttribute(n)}},Ir=function(e,n,i,r,s,o){var a=new Dn(e._pt,n,i,0,1,o?CS:AS);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},xv={deg:1,rad:1,turn:1},SD={grid:1,flex:1},Zr=function t(e,n,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=vs.style,l=lD.test(n),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",x,g,m,h;return r===o||!s||xv[r]||xv[o]?s:(o!=="px"&&!d&&(s=t(e,n,i,"px")),h=e.getCTM&&DS(e),(p||o==="%")&&(dr[n]||~n.indexOf("adius"))?(x=h?e.getBBox()[l?"width":"height"]:e[c],xt(p?s/x*f:s/100*x)):(a[l?"width":"height"]=f+(d?o:r),g=~n.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ur||!g.appendChild)&&(g=Ur.body),m=g._gsap,m&&p&&m.width&&l&&m.time===zn.time&&!m.uncache?xt(s/m.width*f):((p||o==="%")&&!SD[Ni(g,"display")]&&(a.position=Ni(e,"position")),g===e&&(a.position="static"),g.appendChild(vs),x=vs[c],g.removeChild(vs),a.position="absolute",l&&p&&(m=Ts(g),m.time=zn.time,m.width=g[c]),xt(d?x*s/f:x&&s?f/x*s:0))))},Ji=function(e,n,i,r){var s;return rm||Nd(),n in Di&&n!=="transform"&&(n=Di[n],~n.indexOf(",")&&(n=n.split(",")[0])),dr[n]&&n!=="transform"?(s=Ml(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Sc(Ni(e,Ei))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=yc[n]&&yc[n](e,n,i)||Ni(e,n)||Yy(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Zr(e,n,s,i)+i:s},MD=function(e,n,i,r){if(!i||i==="none"){var s=Zo(n,e,1),o=s&&Ni(e,s,1);o&&o!==i?(n=s,i=o):n==="borderColor"&&(i=Ni(e,"borderTopColor"))}var a=new Dn(this._pt,e.style,n,0,1,ES),l=0,u=0,c,f,d,p,x,g,m,h,_,v,y,M;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[n]=r,r=Ni(e,n)||r,e.style[n]=i),c=[i,r],dS(c),i=c[0],r=c[1],d=i.match(To)||[],M=r.match(To)||[],M.length){for(;f=To.exec(r);)m=f[0],_=r.substring(l,f.index),x?x=(x+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(x=1),m!==(g=d[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Io(p,m)+y),h=parseFloat(m),v=m.substr((h+"").length),l=To.lastIndex-v.length,v||(v=v||Wn.units[n]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Zr(e,n,g,v)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:p,c:h-p,m:x&&x<4||n==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=n==="display"&&r==="none"?CS:AS;return Gy.test(r)&&(a.e=0),this._pt=a,a},yv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ED=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=yv[i]||i,n[1]=yv[r]||r,n.join(" ")},TD=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],dr[a]&&(l=1,a=a==="transformOrigin"?Ei:ft),yl(i,a);l&&(yl(i,ft),o&&(o.svg&&i.removeAttribute("transform"),Ml(i,1),o.uncache=1,RS(r)))}},yc={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Dn(e._pt,n,i,0,0,TD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Sl=[1,0,0,1,0,0],US={},IS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sv=function(e){var n=Ni(e,ft);return IS(n)?Sl:n.substr(7).match(Hy).map(xt)},am=function(e,n){var i=e._gsap||Ts(e),r=e.style,s=Sv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Sl:s):(s===Sl&&!e.offsetParent&&e!==No&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,No.appendChild(e)),s=Sv(e),l?r.display=l:yl(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):No.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Od=function(e,n,i,r,s,o){var a=e._gsap,l=s||am(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],x=l[1],g=l[2],m=l[3],h=l[4],_=l[5],v=n.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,T,E,R,S;i?l!==Sl&&(E=p*m-x*g)&&(R=y*(m/E)+M*(-g/E)+(g*_-m*h)/E,S=y*(-x/E)+M*(p/E)-(p*_-x*h)/E,y=R,M=S):(T=LS(e),y=T.x+(~v[0].indexOf("%")?y/100*T.width:y),M=T.y+(~(v[1]||v[0]).indexOf("%")?M/100*T.height:M)),r||r!==!1&&a.smooth?(h=y-u,_=M-c,a.xOffset=f+(h*p+_*g)-h,a.yOffset=d+(h*x+_*m)-_):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!r,a.origin=n,a.originIsAbsolute=!!i,e.style[Ei]="0px 0px",o&&(Ir(o,a,"xOrigin",u,y),Ir(o,a,"yOrigin",c,M),Ir(o,a,"xOffset",f,a.xOffset),Ir(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},Ml=function(e,n){var i=e._gsap||new _S(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ni(e,Ei)||"0",c,f,d,p,x,g,m,h,_,v,y,M,T,E,R,S,A,V,Y,I,O,k,Z,K,D,j,H,N,z,ae,ie,le;return c=f=d=g=m=h=_=v=y=0,p=x=1,i.svg=!!(e.getCTM&&DS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ft]!=="none"?l[ft]:"")),r.scale=r.rotate=r.translate="none"),E=am(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",K=""):K=!n&&e.getAttribute("data-svg-origin"),Od(e,K||u,!!K||i.originIsAbsolute,i.smooth!==!1,E)),M=i.xOrigin||0,T=i.yOrigin||0,E!==Sl&&(V=E[0],Y=E[1],I=E[2],O=E[3],c=k=E[4],f=Z=E[5],E.length===6?(p=Math.sqrt(V*V+Y*Y),x=Math.sqrt(O*O+I*I),g=V||Y?ao(Y,V)*ds:0,_=I||O?ao(I,O)*ds+g:0,_&&(x*=Math.abs(Math.cos(_*Oo))),i.svg&&(c-=M-(M*V+T*I),f-=T-(M*Y+T*O))):(le=E[6],ae=E[7],H=E[8],N=E[9],z=E[10],ie=E[11],c=E[12],f=E[13],d=E[14],R=ao(le,z),m=R*ds,R&&(S=Math.cos(-R),A=Math.sin(-R),K=k*S+H*A,D=Z*S+N*A,j=le*S+z*A,H=k*-A+H*S,N=Z*-A+N*S,z=le*-A+z*S,ie=ae*-A+ie*S,k=K,Z=D,le=j),R=ao(-I,z),h=R*ds,R&&(S=Math.cos(-R),A=Math.sin(-R),K=V*S-H*A,D=Y*S-N*A,j=I*S-z*A,ie=O*A+ie*S,V=K,Y=D,I=j),R=ao(Y,V),g=R*ds,R&&(S=Math.cos(R),A=Math.sin(R),K=V*S+Y*A,D=k*S+Z*A,Y=Y*S-V*A,Z=Z*S-k*A,V=K,k=D),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=xt(Math.sqrt(V*V+Y*Y+I*I)),x=xt(Math.sqrt(Z*Z+le*le)),R=ao(k,Z),_=Math.abs(R)>2e-4?R*ds:0,y=ie?1/(ie<0?-ie:ie):0),i.svg&&(K=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!IS(Ni(e,ft)),K&&e.setAttribute("transform",K))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(p*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(x*=-1,_+=_<=0?180:-180)),n=n||i.uncache,i.x=c-((i.xPercent=c&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=xt(p),i.scaleY=xt(x),i.rotation=xt(g)+a,i.rotationX=xt(m)+a,i.rotationY=xt(h)+a,i.skewX=_+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[Ei]=Sc(u)),i.xOffset=i.yOffset=0,i.force3D=Wn.force3D,i.renderTransform=i.svg?AD:bS?NS:wD,i.uncache=0,i},Sc=function(e){return(e=e.split(" "))[0]+" "+e[1]},_h=function(e,n,i){var r=on(n);return xt(parseFloat(n)+parseFloat(Zr(e,"x",i+"px",r)))+r},wD=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,NS(e,n)},ls="0deg",Sa="0px",us=") ",NS=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,p=i.skewY,x=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,_=i.target,v=i.zOrigin,y="",M=h==="auto"&&e&&e!==1||h===!0;if(v&&(f!==ls||c!==ls)){var T=parseFloat(c)*Oo,E=Math.sin(T),R=Math.cos(T),S;T=parseFloat(f)*Oo,S=Math.cos(T),o=_h(_,o,E*S*-v),a=_h(_,a,-Math.sin(T)*-v),l=_h(_,l,R*S*-v+v)}m!==Sa&&(y+="perspective("+m+us),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(M||o!==Sa||a!==Sa||l!==Sa)&&(y+=l!==Sa||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+us),u!==ls&&(y+="rotate("+u+us),c!==ls&&(y+="rotateY("+c+us),f!==ls&&(y+="rotateX("+f+us),(d!==ls||p!==ls)&&(y+="skew("+d+", "+p+us),(x!==1||g!==1)&&(y+="scale("+x+", "+g+us),_.style[ft]=y||"translate(0, 0)"},AD=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,p=i.target,x=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,_=i.forceCSS,v=parseFloat(o),y=parseFloat(a),M,T,E,R,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Oo,u*=Oo,M=Math.cos(l)*f,T=Math.sin(l)*f,E=Math.sin(l-u)*-d,R=Math.cos(l-u)*d,u&&(c*=Oo,S=Math.tan(u-c),S=Math.sqrt(1+S*S),E*=S,R*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),M*=S,T*=S)),M=xt(M),T=xt(T),E=xt(E),R=xt(R)):(M=f,R=d,T=E=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Zr(p,"x",o,"px"),y=Zr(p,"y",a,"px")),(x||g||m||h)&&(v=xt(v+x-(x*M+g*E)+m),y=xt(y+g-(x*T+g*R)+h)),(r||s)&&(S=p.getBBox(),v=xt(v+r/100*S.width),y=xt(y+s/100*S.height)),S="matrix("+M+","+T+","+E+","+R+","+v+","+y+")",p.setAttribute("transform",S),_&&(p.style[ft]=S)},CD=function(e,n,i,r,s){var o=360,a=Wt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ds:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*gv)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*gv)%o-~~(u/o)*o)),e._pt=d=new Dn(e._pt,n,i,r,u,cD),d.e=c,d.u="deg",e._props.push(i),d},Mv=function(e,n){for(var i in n)e[i]=n[i];return e},RD=function(e,n,i){var r=Mv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[ft]=n,a=Ml(i,1),yl(i,ft),i.setAttribute("transform",u)):(u=getComputedStyle(i)[ft],o[ft]=n,a=Ml(i,1),o[ft]=u);for(l in dr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=on(u),x=on(c),f=p!==x?Zr(i,l,u,x):parseFloat(u),d=parseFloat(c),e._pt=new Dn(e._pt,a,l,f,d-f,Ud),e._pt.u=x||0,e._props.push(l));Mv(a,r)};Ln("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",o=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(a){return e<2?t+a:"border"+a+t});yc[e>1?"border"+t:t]=function(a,l,u,c,f){var d,p;if(arguments.length<4)return d=o.map(function(x){return Ji(a,x,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(x,g){return p[x]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,p,f)}});var OS={name:"css",register:Nd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,p,x,g,m,h,_,v,y,M,T,E,R;rm||Nd(),this.styles=this.styles||PS(e),R=this.styles.props,this.tween=i;for(g in n)if(g!=="autoRound"&&(c=n[g],!(kn[g]&&vS(g,n,i,r,e,s)))){if(p=typeof c,x=yc[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=_l(c)),x)x(this,e,g,c,i)&&(E=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",jr.lastIndex=0,jr.test(u)||(m=on(u),h=on(c)),h?m!==h&&(u=Zr(e,g,u,h)+h):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Wt(u)&&~u.indexOf("random(")&&(u=_l(u)),on(u+"")||(u+=Wn.units[g]||on(Ji(e,g))||""),(u+"").charAt(1)==="="&&(u=Ji(e,g))):u=Ji(e,g),d=parseFloat(u),_=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),f=parseFloat(c),g in Di&&(g==="autoAlpha"&&(d===1&&Ji(e,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,a.visibility),Ir(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Di[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in dr,v){if(this.styles.save(g),y||(M=e._gsap,M.renderTransform&&!n.parseTransform||Ml(e,n.parseTransform),T=n.smoothOrigin!==!1&&M.smooth,y=this._pt=new Dn(this._pt,a,ft,0,1,M.renderTransform,M,0,-1),y.dep=1),g==="scale")this._pt=new Dn(this._pt,M,"scaleY",M.scaleY,(_?Io(M.scaleY,_+f):f)-M.scaleY||0,Ud),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Ei,0,a[Ei]),c=ED(c),M.svg?Od(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==M.zOrigin&&Ir(this,M,"zOrigin",M.zOrigin,h),Ir(this,a,g,Sc(u),Sc(c)));continue}else if(g==="svgOrigin"){Od(e,c,1,T,0,this);continue}else if(g in US){CD(this,M,g,d,_?Io(d,_+c):c);continue}else if(g==="smoothOrigin"){Ir(this,M,"smooth",M.smooth,c);continue}else if(g==="force3D"){M[g]=c;continue}else if(g==="transform"){RD(this,c,e);continue}}else g in a||(g=Zo(g)||g);if(v||(f||f===0)&&(d||d===0)&&!uD.test(c)&&g in a)m=(u+"").substr((d+"").length),f||(f=0),h=on(c)||(g in Wn.units?Wn.units[g]:m),m!==h&&(d=Zr(e,g,u,h)),this._pt=new Dn(this._pt,v?M:a,g,d,(_?Io(d,_+f):f)-d,!v&&(h==="px"||g==="zIndex")&&n.autoRound!==!1?hD:Ud),this._pt.u=h||0,m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=fD);else if(g in a)MD.call(this,e,g,u,_?_+c:c);else if(g in e)this.add(e,g,u||e[g],_?_+c:c,r,s);else if(g!=="parseTransform"){qp(g,c);continue}v||(g in a?R.push(g,0,a[g]):R.push(g,1,u||e[g])),o.push(g)}}E&&TS(this)},render:function(e,n){if(n.tween._time||!sm())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:Ji,aliases:Di,getSetter:function(e,n,i){var r=Di[n];return r&&r.indexOf(",")<0&&(n=r),n in dr&&n!==Ei&&(e._gsap.x||Ji(e,"x"))?i&&mv===i?n==="scale"?gD:mD:(mv=i||{})&&(n==="scale"?_D:vD):e.style&&!Xp(e.style[n])?dD:~n.indexOf("-")?pD:nm(e,n)},core:{_removeProperty:yl,_getMatrix:am}};Un.utils.checkPrefix=Zo;Un.core.getStyleSaver=PS;(function(t,e,n,i){var r=Ln(t+","+e+","+n,function(s){dr[s]=1});Ln(e,function(s){Wn.units[s]="deg",US[s]=1}),Di[r[13]]=t+","+e,Ln(i,function(s){var o=s.split(":");Di[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Wn.units[t]="px"});Un.registerPlugin(OS);var Er=Un.registerPlugin(OS)||Un;Er.core.Tween;function PD(){const t=new Ca;function e(){const a={perlinnoise:{type:"t",value:new qi().load(lh)},color4:{value:new U(...options.color3)},time:{type:"f",value:0},noise:{type:"t",value:new qi().load(xu)}},l=new Va(1.11,0,5.3,50,50,!0),u=new Ct({uniforms:a,vertexShader:cL,fragmentShader:fL,transparent:!0,depthWrite:!1,side:sn}),c=new wn(l,u);c.rotation.set(0,0,-Math.PI/2),c.position.set(-4,0,0),c.scale.set(1.5,1.7,1.5),t.add(c),Er.to(a.time,{value:-20,duration:100,repeat:-1})}function n(){const a={perlinnoise:{type:"t",value:new qi().load(lh)},color4:{value:new U(...options.color4)},time:{type:"f",value:0},noise:{type:"t",value:new qi().load(xu)}},l=new Va(1,0,5.3,50,50,!0),u=new Ct({uniforms:a,vertexShader:ov,fragmentShader:sv,transparent:!0,depthWrite:!1,side:sn}),c=new wn(l,u);c.rotation.set(0,0,-Math.PI/2),c.position.set(-4.85,0,0),c.scale.set(2,2,2),t.add(c),bloomEffect.selection.toggle(c),Er.to(a.time,{value:-20,duration:100,repeat:-1})}function i(){const a={time:{type:"f",value:0},perlinnoise:{type:"t",value:new qi().load(xu)},sparknoise:{type:"t",value:new qi().load(pL)},color5:{value:new U(...options.color5)},color4:{value:new U(...options.color4)},color3:{value:new U(...options.color3)},color2:{value:new U(...options.color2)},color1:{value:new U(...options.color1)},color0:{value:new U(...options.color0)},resolution:{value:new _e(window.width,window.height)}},l=new Bp(1,30,30),u=new Ct({uniforms:a,vertexShader:dL,fragmentShader:hL}),c=new wn(l,u);c.scale.set(.78,.78,.78),c.position.set(0,0,0),t.add(c),bloomEffect.selection.toggle(c),Er.to(a.time,{value:-20,duration:100,repeat:-1})}function r(){const a={perlinnoise:{type:"t",value:new qi().load(lh)},color4:{value:new U(...options.color4)},time:{type:"f",value:0},noise:{type:"t",value:new qi().load(xu)}},l=new Va(3,3,3,50,50,!0),u=new Ct({uniforms:a,vertexShader:ov,fragmentShader:sv,transparent:!0,depthWrite:!1,side:sn}),c=new wn(l,u);c.rotation.set(0,Math.PI/2,0),c.position.set(0,0,0),c.scale.set(2,1,2),scene.add(c),Er.to(a.time,{value:20,duration:100,repeat:-1}),Er.to(c.scale,{delay:2.5,duration:.5,keyframes:[{x:2,y:1,z:2},{x:2.5,y:1.5,z:2.5},{x:3,y:2,z:3},{x:4.5,y:3,z:4.5},{x:1,y:.5,z:1},{x:0,y:0,z:0}],onStart:()=>{s()},ease:"power2.out"})}function s(){const a=new tL(camera,new U(0,0,0),{speed:1.25,maxRadius:.5,waveSize:.2,amplitude:.05}),l=new Oy(camera,a);composer.addPass(l),a.explode()}e(),n(),i(),r(),t.rotateZ(-Math.PI/2),t.position.y=30,t.scale.set(2,2,2),scene.add(t);const o=2.5;Er.to(t.position,{duration:o,y:0,ease:"power2.in",onComplete:()=>{t.remove(t.children[0]),t.remove(t.children[0])}}),Er.to(t.children[2].scale,{delay:o,duration:.5,keyframes:[{x:.78,y:.78,z:.78},{x:.78,y:3,z:3},{x:.78,y:5,z:5},{x:.78,y:3,z:3},{x:.78,y:.78,z:.78},{x:0,y:0,z:0}],ease:"power2.out"})}function bD(){Cb(),rL(),iL(),aL(),uL(),PD()}let LD={exposure:2.8,bloomStrength:3.5,bloomRadius:.39,color0:[0,0,0],color1:[81,14,5],color2:[181,156,24],color3:[255,255,255],color4:[200,79,0],color5:[64,27,0]};window.options=LD;window.uniforms=[];function DD(){bD(),FS()}function FS(t=new Ab){renderer.render(scene,camera),composer.render(),requestAnimationFrame(()=>FS(t))}function UD(){const t=Kx();return ye.useEffect(()=>{DD()},[]),Bt.jsx("div",{className:"flame-container",children:Bt.jsxs("div",{className:"flame-wrapper",children:[Bt.jsx("button",{className:"go-back-button",onClick:()=>t("/"),children:"Go Back"}),Bt.jsx("canvas",{id:"canvas"})]})})}function ID(){return Bt.jsx(a1,{children:Bt.jsxs(s1,{children:[Bt.jsx(hd,{path:"/",element:Bt.jsx(l1,{})}),Bt.jsx(hd,{path:"/meteor-effect",element:Bt.jsx(UD,{})})]})})}vh.createRoot(document.getElementById("root")).render(Bt.jsx(Dv.StrictMode,{children:Bt.jsx(ID,{})}));
