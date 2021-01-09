import e,{useState as t,useEffect as n,useMemo as o,useCallback as a,useRef as m,useLayoutEffect as p}from"react";import{get as d,isObj as v,isEmptyColl as y,checkCall as T,shallowEqual as S}from"@keg-hub/jsutils";import{D as w,_ as E,R as b,a as _,b as O,g as x,c as F,d as P,u as C,e as L}from"./useTheme-9d83471e.js";export{R as ReThemeContext,j as addThemeEvent,k as fireThemeEvent,c as getDefaultTheme,h as getMergeSizes,g as getSize,f as getSizeMap,r as removeThemeEvent,l as setDefaultTheme,s as setRNPlatform,i as setSizes,u as useTheme}from"./useTheme-9d83471e.js";var useDimensions=function(){var e=t(w.get("window")),r=E(e,2),i=r[0],o=r[1],onChange=function(e){var t=e.window,n=t.width,r=t.height,i=t.scale,s=t.fontScale;o({width:n,height:r,scale:i,fontScale:s})};return n((function(){return w.addEventListener("change",onChange),function(){return onChange.shouldUnmount=!0,w.removeEventListener("change",onChange)}}),[]),i};function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var W=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function shim(e,t,n,r,i,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}()})),withTheme=function(t){return function(n){return e.createElement(b.Consumer,null,(function(r){return e.createElement(t,_({theme:r},n))}))}},ReThemeProvider=function(r){var i=r.children,s=r.theme,a=r.merge,h=r.platforms,m=Boolean(a||!a&&!1!==a)||!1,c=t(w.get("window")),u=E(c,2),f=u[0],p=u[1],onChange=function(e){var t=e.window,n=t.width,r=t.height,i=t.scale,o=t.fontScale,s=x(n);if(s){var a=s[0],h=P();a!==d(h,["RTMeta","key"])&&p({width:n,height:r,scale:i,fontScale:o})}};n((function(){return w.addEventListener("change",onChange),function(){w.removeEventListener("change",onChange)}}),[]);var l=o((function(){return O(s,f.width,f.height,m&&F(),h)}),[s,f.width,f.height,m,h]);return e.createElement(b.Provider,{value:l},i)};ReThemeProvider.propTypes={theme:W.object.isRequired,merge:W.bool,platforms:W.array,children:W.node};var setRNDimensions=function(e){return e},useStylesCallback=function(e,t,n){var r=a(e,t||[]),i=!(!n||!v(n)||y(n))&&n,s=C();return o((function(){return T.apply(void 0,[r,s,i].concat(L(t)))||{}}),[s,r,i])},nativeThemeHook=function(e,n,r){var i=d(r,"ref",m()),o=t(e),s=E(o,2),a=s[0],h=s[1];return p((function(){var t,n;(t=e)!==(n=a)&&!S(t,n)&&h(a)}),[e,n]),[i,e,h]};export{ReThemeProvider,setRNDimensions,useDimensions,useStylesCallback,nativeThemeHook as useThemeActive,nativeThemeHook as useThemeFocus,nativeThemeHook as useThemeHover,withTheme};
//# sourceMappingURL=index.js.map
