import{m as e,C as t,c as r,d as n,o,u as a,_ as l,b as c}from"./useTheme-342e9351.js";import i,{useMemo as s}from"react";import{hasDomAccess as u,isArr as f,isObj as m,splitByKeys as d,hashString as p,isStr as v,noPropArr as y,exists as S,hyphenator as h,flatArr as _,eitherArr as b,noOpObj as E}from"@keg-hub/jsutils";import j from"react-native-web/dist/modules/prefixStyles";import g from"react-native-web/dist/exports/StyleSheet/flattenStyle";import w from"react-native-web/dist/exports/StyleSheet/createReactDOMStyle";import N from"react-native-web/dist/exports/StyleSheet/createCompileableStyle";var T,x={important:[],filter:["aspectRatio","elevation","overlayColor","resizeMode","tintColor","backgroundSize","animationKeyframes","placeholderTextColor","pointerEvents","scrollbarWidth"],allowedStyleObject:["transform","shadowOffset","textShadowOffset","animationKeyframes"]},C=u(),k=new Set,selectorExists=function(e){return k.has(e)},getKegSheet=function(){return T=T||document.head.querySelector("#".concat(t.KEG_STYLES_TAG_ID))},formatSelectors=function(e,t,r,n){var o=S(n)?n:1,a=t.filter((function(e){return e&&r?e.startsWith(r):e})).reverse().slice(0,o).sort();return{selector:".".concat(a.concat([e]).join(".")).trim(),classNames:t.concat([e]).join(" ").trim()}},getSelector=function(e,t,r,n){var o="".concat(r,"-").concat(p(t)),a=f(e)?formatSelectors(o,e,r,n):v(e)?formatSelectors(o,e.split(" "),r,n):formatSelectors(o,y,r,n),l=a.selector;return{hashClass:o,classNames:a.classNames,selector:!selectorExists(l)&&l}},addStylesToDom=function(e,t){C&&t&&!selectorExists(e)&&(k.add(e),getKegSheet().sheet.insertRule("@media all {".concat(t.all,"}")))};e(t.BUILD_EVENT,(function(){k.clear(),getKegSheet().textContent=""})),function(){if(C){if(T=document.head.querySelector("#".concat(t.KEG_STYLES_TAG_ID)))return T;(T=document.createElement("style")).id=t.KEG_STYLES_TAG_ID,document.head.append(T)}}();var createBlock=function(e,t){var r=x.important.concat(null==t?void 0:t.important),n=j(w(e)),o=Object.keys(n).map((function(e){var t=function(e,t,r){return r.includes(e)?"".concat(t," !important"):t}(e,n[e],r),o=h(e);return f(t)?t.map((function(e){return"".concat(o,":").concat(e)})).join(";"):"".concat(o,":").concat(t)})).sort().join(";");return"{".concat(o,"}")},convertToCss=function(e,t){return _(b(e,[e])).reduce((function(e,n){if(!m(n))return e;var o=function(e,t){var n=f(t)?x.filter.concat(t):x.filter;if(Boolean(Object.entries(e).filter((function(e){var t=r(e,2),n=t[0],o=t[1];return m(o)&&!x.allowedStyleObject.includes(n)})).length))return{filtered:e};var o=d(e,n),a=r(o,2),l=a[0];return{style:a[1],filtered:l}}(n,null==t?void 0:t.filter),a=o.style,l=o.filtered;if(Object.assign(e.filtered,l),!a)return e;var c=g(a),i=N(c);return e.blocks.push(createBlock(i,t)),e}),{blocks:[],filtered:{}})},useStyleTag=function(e){var t,r,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0;a=m(a)?a:E;var l=n(),c=null==l||null===(t=l.RTMeta)||void 0===t?void 0:t.size,i=null==l||null===(r=l.RTMeta)||void 0===r?void 0:r.key;return s((function(){var t=convertToCss(e,a),r=t.blocks,n=t.filtered,l=getSelector(o,r.join(""),a.prefix||"keg",a.maxSelectors),c=l.selector,i=l.classNames,s=r.reduce((function(e,t){var r="".concat(c).concat(t);return e.all+=r,e.rules.push(r),e}),{all:"",rules:[]});return addStylesToDom(c,s),{css:s,classNames:i,filteredStyle:n}}),[e,o,c,i,a])},O=["config","children","Component","className","styleProp","splitStyles"],K=i.forwardRef((function(e,t){var r=e.config,n=e.children,s=e.Component,u=e.className,f=e.styleProp,m=e.splitStyles,d=o(e,O),p=r.className,v=a(m),y=useStyleTag(v,u||p,r),S=y.classNames,h=y.filteredStyle;return i.createElement(s,l({},d,c({},f,h),{ref:t,className:S}),n)})),StyleInjector=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;return i.forwardRef((function(n,o){var a=n.__reStyleStylePropKey__||"style",s=d(n,[a,"__reStyleStylePropKey__"]),u=r(s,2),f=u[0],m=u[1],p=f[a];return p&&p!==E?i.createElement(K,l({},m,{ref:o,config:t,Component:e,splitStyles:p,styleProp:a})):i.createElement(e,l({},m,c({},a,p),{ref:o}))}))};export{StyleInjector as S,convertToCss as a,createBlock as c,useStyleTag as u};
//# sourceMappingURL=styleInjector-4a289787.js.map
