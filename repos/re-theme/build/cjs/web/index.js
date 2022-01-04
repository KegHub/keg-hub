"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./useTheme-c66cd68a.js"),t=require("react"),n=require("@keg-hub/jsutils");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o,r,u=_interopDefaultLegacy(t),i=!1;n.hasDomAccess()&&(o=0,r=function(){o=Date.now(),i&&(i=!1)},document.addEventListener("touchstart",r,!0),document.addEventListener("touchmove",r,!0),document.addEventListener("mousemove",(function(){!i&&Date.now()-o>1e3&&(i=!0)}),!0));var useEventCallBacks=function(o){var r,u=o.pointerState,s=o.onEvent,c=o.offEvent,a=o.onName,f=o.offName,v=t.useState(!1),l=e._slicedToArray(v,2),m=l[0],p=l[1],h=t.useCallback((function(e){n.checkCall(c,e),p(!1)}),[m,p,c]),d=t.useCallback((function(e){("hover"!==u||i)&&(n.checkCall(s,e),p(!0),"active"===u&&document.addEventListener(f,h,{once:!0}))}),[u,m,p,s]);return r={},e._defineProperty(r,u,m),e._defineProperty(r,a,d),e._defineProperty(r,f,h),r},useElementEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.noOpObj,o=arguments.length>1?arguments[1]:void 0,r="hover"===o?useEventCallBacks({pointerState:o,onName:"onPointerIn",offName:"onPointerOut",onEvent:e.onPointerIn,offEvent:e.onPointerOut}):n.noOpObj,u=r.hover,i=void 0!==u&&u,s=r.onPointerIn,c=r.onPointerOut,a="focus"===o?useEventCallBacks({pointerState:o,onName:"onFocus",offName:"onBlur",onEvent:e.onFocus,offEvent:e.onBlur}):n.noOpObj,f=a.focus,v=void 0!==f&&f,l=a.onFocus,m=a.onBlur,p="active"===o?useEventCallBacks({pointerState:o,onName:"onPointerDown",offName:"mouseup",onEvent:e.onPointerDown,offEvent:e.onMouseUp}):n.noOpObj,h=p.active,d=void 0!==h&&h,T=p.onPointerDown;return t.useMemo((function(){return{active:d,focus:v,hover:i,events:"hover"===o?{pointerover:s,pointerout:c}:"focus"===o?{focus:l,blur:m}:{pointerdown:T}}}),[d,v,i,m,l,T,s,c,e.ref,o])},loopElementEvents=function(t,n,o){Object.entries(n).map((function(n){var r=e._slicedToArray(n,2),u=r[0],i=r[1];return t[o](u,i)}))},createCBRef=function(e,o){var r=t.useRef(null),u=t.useCallback((function(t){r.current=t,n.isFunc(e)?e(t):e&&(e.current=t)}),[r.current,e,e.current]);return t.useEffect((function(){return r.current&&loopElementEvents(r.current,o,"addEventListener"),function(){r.current&&loopElementEvents(r.current,o,"removeEventListener")}}),[r.current,o]),u},usePointerState=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.noOpObj,t=arguments.length>1?arguments[1]:void 0,o=useElementEvents(e,t),r=o.events,u=o.hover,i=o.active,s=o.focus;return{hover:u,focus:s,active:i,events:r,ref:createCBRef(e.ref,r)}},useCompareState=function(e,o,r,u){return t.useMemo((function(){return u?r?o:n.deepMerge(e,o):e}),[e,o,r,u])},useThemeState=function(n){return function(o,r){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.useRef(null),s=usePointerState(e._objectSpread2(e._objectSpread2({},u),{},{ref:u.ref||i}),n),c=s.ref,a=s[n],f=useCompareState(o,r,Boolean(u.noMerge),a);return[c,f]}},s=useThemeState("hover"),c=useThemeState("active"),a=useThemeState("focus");exports.ReThemeContext=e.ReThemeContext,exports.addThemeEvent=e.addThemeEvent,exports.fireThemeEvent=e.fireThemeEvent,exports.getDefaultTheme=e.getDefaultTheme,exports.getMergeSizes=e.getMergeSizes,exports.getSize=e.getSize,exports.getSizeMap=e.getSizeMap,exports.removeThemeEvent=e.removeThemeEvent,exports.setDefaultTheme=e.setDefaultTheme,exports.setSizes=e.setSizes,exports.useDimensions=e.useDimensions,exports.useTheme=e.useTheme,exports.ReThemeProvider=function(o){var r=o.children,i=o.theme,s=o.merge,c=function(o,r){return t.useMemo((function(){if(!r)return o;var t=e.getDefaultTheme();return t&&t!==o?n.deepMerge(t,o):o}),[o,r])}(i,Boolean(s||!s&&!1!==s)||!1),a=e.useCompiledStyles(c,!0);return e.updateCurrentTheme(a),t.useEffect((function(){e.fireThemeEvent(e.Constants.BUILD_EVENT,a)}),[a]),u.default.createElement(e.ReThemeContext.Provider,{value:a},r)},exports.setRNDimensions=function(e){},exports.setRNPlatform=function(e){},exports.usePointerState=usePointerState,exports.useStyle=function(){for(var o=arguments.length,r=new Array(o),u=0;u<o;u++)r[u]=arguments[u];var i=e.useTheme();return t.useMemo((function(){return i.get.apply(i,r)||n.noPropObj}),[i].concat(r))},exports.useStylesCallback=function(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.noPropArr,u=arguments.length>2?arguments[2]:void 0,i=t.useCallback(o,r),s=e.useTheme(),c=!(!u||!n.isObj(u)||n.isEmptyColl(u))&&u;return t.useMemo((function(){return n.checkCall.apply(void 0,[i,s,c].concat(e._toConsumableArray(r)))||n.noPropObj}),[s,i,c])},exports.useThemeActive=c,exports.useThemeFocus=a,exports.useThemeHover=s,exports.withTheme=function(t){return function(n){return u.default.createElement(e.ReThemeContext.Consumer,null,(function(o){return u.default.createElement(t,e._extends({theme:o},n))}))}};
//# sourceMappingURL=index.js.map
