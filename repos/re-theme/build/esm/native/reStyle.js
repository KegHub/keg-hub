import{u as n,_ as r,a as t,m as e}from"./useTheme-ca608f03.js";import a,{useMemo as u,useState as o,useEffect as c}from"react";import{uuid as i,isFunc as f,isObj as s,noOpObj as l,ensureArr as m,clearObj as p,deepMerge as v,shallowEqual as y,exists as d}from"@keg-hub/jsutils";var StyleInjector=function(n){return function(r){return a.createElement(n,r)}},getComponentName=function(n){return n.displayName||n.name||"keg-".concat(i().split("-").slice(4).join(""))},usePropClassName=function(n,r){return u((function(){var t=n?m(n):[];return r&&t.push(r),t}),[n,r])},useObjWithIdentity=function(n){for(var r=arguments.length,t=new Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];return u((function(){return p(n),Object.assign(n,v.apply(void 0,t)),n}),[n].concat(t))},useReStyles=function(t,e){var a=n(),i=o(e),m=r(i,2),p=m[0],v=m[1],d=y(e,p);return c((function(){!d&&v(e)}),[d]),u((function(){return f(t)?t(a,e):s(t)?t:l}),[a,t,d])},reStyle=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"style",u={},o=getComponentName(n),c=StyleInjector(n);return function(n){var i=a.forwardRef((function(i,f){var s=useReStyles(n,i),m=usePropClassName(i.className,o),p=d(i[r])?i[r]:l,v=useObjWithIdentity(u,s,p);return a.createElement(c,t({},i,e({},r,v),{style:v,className:m,ref:f}))}));return i.displayName="reStyle(".concat(o,")"),i}};export{reStyle};
//# sourceMappingURL=reStyle.js.map
