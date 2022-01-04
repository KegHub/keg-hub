import{c as r,u as n,d as e,a as t,_ as u}from"./useTheme-ce2eabda.js";import c,{useMemo as a,useRef as o}from"react";import{uuid as i,isFunc as f,isObj as s,noOpObj as l,ensureArr as m,deepMerge as p,shallowEqual as v,exists as d}from"@keg-hub/jsutils";var StyleInjector=function(r){return function(n){return c.createElement(r,n)}},getComponentName=function(r){return r.displayName||r.name||"keg-".concat(i().split("-").slice(4).join(""))},usePropClassName=function(r,n){return a((function(){var e=r?m(r):[];return n&&e.push(n),e}),[r,n])},useShallowMemoMerge=function(n,e){var t=o(null);return a((function(){if(!e||e===l)return n;if(!n||n===l)return e;var u=p.apply(void 0,[n].concat(r(m(e)))),c=v(t.current,u)?t.current:u;return c!==t.current&&(t.current=c),c}),[n,e])},useReStyles=function(r,e){var t=n(),u=o(e);return a((function(){!v(e,u.current)&&(u.current=e)}),[e,u]),a((function(){return f(r)?r(t,u.current):s(r)?r:l}),[t,r,u.current])},useMergedProps=function(r,t){if(!t)return r;var u=n(),c=a((function(){return f(t)?t(u):t}),[u,r,t]);return a((function(){return e(e({},c),r)}),[c,r])},y=l,reStyle=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"style",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,o=getComponentName(r),i=StyleInjector(r,e(e({className:o},y),{},{displayName:o},a));return function(r,e){var a=c.forwardRef((function(a,f){var s=useReStyles(r,a),l=usePropClassName(a.className,o),m=d(a[n])?a[n]:null,p=useShallowMemoMerge(s,m),v=useMergedProps(a,e);return c.createElement(i,t({},v,u({},n,p),{ref:f,className:l,__reStyleStylePropKey__:n}))}));return a.displayName="reStyle(".concat(o,")"),a}};reStyle.setConfig=function(r){s(r)||console.warn('Restyle config must be an "Object". Instead got',r),y=r};export{reStyle};
//# sourceMappingURL=reStyle.js.map
