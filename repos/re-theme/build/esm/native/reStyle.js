import{c as n,u as r,d as e,a as t,_ as u}from"./useTheme-ce2eabda.js";import c,{useMemo as a,useRef as o}from"react";import{uuid as i,isFunc as f,isObj as s,noOpObj as l,ensureArr as m,deepMerge as p,shallowEqual as v,exists as d}from"@keg-hub/jsutils";var StyleInjector=function(n){return function(r){return c.createElement(n,r)}},getComponentName=function(n){return n.displayName||n.name||"keg-".concat(i().split("-").slice(4).join(""))},usePropClassName=function(n,r){return a((function(){var e=n?m(n):[];return r&&e.push(r),e}),[n,r])},useShallowMemoMerge=function(r,e){var t=o(null);return a((function(){if(!e||e===l)return r;if(!r||r===l)return e;var u=p.apply(void 0,[r].concat(n(m(e)))),c=v(t.current,u)?t.current:u;return c!==t.current&&(t.current=c),c}),[r,e])},useReStyles=function(n,e){var t=r(),u=o(e);return a((function(){!v(e,u.current)&&(u.current=e)}),[e,u]),a((function(){return f(n)?n(t,u.current):s(n)?n:l}),[t,n,u.current])},useMergedProps=function(n,t){if(!t)return n;var u=r(),c=a((function(){return f(t)?t(u):t}),[u,n,t]);return a((function(){return e(e({},c),n)}),[c,n])},reStyle=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"style",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:l,o=getComponentName(n),i=StyleInjector(n,e({className:o,displayName:o},a));return function(n,e){var a=c.forwardRef((function(a,f){var s=useReStyles(n,a),l=usePropClassName(a.className,o),m=d(a[r])?a[r]:null,p=useShallowMemoMerge(s,m),v=useMergedProps(a,e);return c.createElement(i,t({},v,u({},r,p),{ref:f,className:l,__reStyleStylePropKey__:r}))}));return a.displayName="reStyle(".concat(o,")"),a}};reStyle.setConfig=function(n){s(n)||console.warn('Restyle config must be an "Object". Instead got',n),StyleInjector.setConfig(n)};export{reStyle};
//# sourceMappingURL=reStyle.js.map
