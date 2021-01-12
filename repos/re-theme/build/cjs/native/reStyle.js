"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,r=require("react"),t=(e=r)&&"object"==typeof e&&"default"in e?e.default:e,n=require("@keg-hub/jsutils"),u=require("./useTheme-dfd3b7b4.js"),StyleInjector=function(e){return function(r){return t.createElement(e,r)}},getComponentName=function(e){return e.displayName||e.name||"keg-".concat(n.uuid().split("-").slice(4).join(""))},usePropClassName=function(e,t){return r.useMemo((function(){var r=e?n.ensureArr(e):[];return t&&r.push(t),r}),[e,t])},useObjWithIdentity=function(e){for(var t=arguments.length,u=new Array(t>1?t-1:0),s=1;s<t;s++)u[s-1]=arguments[s];return r.useMemo((function(){return n.clearObj(e),Object.assign(e,n.deepMerge.apply(void 0,u)),e}),[e].concat(u))},useReStyles=function(e,t){var s=u.useTheme(),o=r.useState(t),a=u._slicedToArray(o,2),i=a[0],c=a[1],f=n.shallowEqual(t,i);return r.useEffect((function(){!f&&c(t)}),[f]),r.useMemo((function(){return n.isFunc(e)?e(s,t):n.isObj(e)?e:n.noOpObj}),[s,e,f])};exports.reStyle=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"style",s={},o=getComponentName(e),a=StyleInjector(e);return function(e){var i=t.forwardRef((function(i,c){var f=useReStyles(e,i),l=usePropClassName(i.className,o),d=n.exists(i[r])?i[r]:n.noOpObj,p=useObjWithIdentity(s,f,d);return t.createElement(a,u._extends({},i,u._defineProperty({},r,p),{style:p,className:l,ref:c}))}));return i.displayName="reStyle(".concat(o,")"),i}};
//# sourceMappingURL=reStyle.js.map