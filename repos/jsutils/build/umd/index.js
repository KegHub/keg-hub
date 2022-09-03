!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).jsutils={})}(this,(function(e){"use strict";const t={SHOULD_LOG:!0,SHOULD_THROW:!1,LOG_PREFIX:null},r=()=>!0,n=(e,n={},i={})=>{const{logs:u=t.SHOULD_LOG,throws:l=t.SHOULD_THROW,prefix:a=t.LOG_PREFIX}=i,c=Object.entries(e).map((([e,t])=>o(e,t,n[e]||n.$default||r))),{success:f,cases:p}=c.reduce(((e,t)=>s(e,t,{logs:u,throws:l,prefix:a})),{success:!0,cases:{}});return[f,p]};n.setOptions=({logs:e,throws:r,prefix:n})=>{void 0!==e&&(t.SHOULD_LOG=e),void 0!==r&&(t.SHOULD_THROW=r),void 0!==n&&(t.LOG_PREFIX=n)},n.resetOptions=()=>{t.SHOULD_LOG=!0,t.SHOULD_THROW=!1,t.LOG_PREFIX=null};const o=(e,t,r)=>{const n=r(t),o=!r.name||r.name===e||"$default"===r.name?r.toString():r.name;return{success:n,key:e,value:t,validator:r,reason:n?null:[`Argument "${e}" with value `,t,` failed validator: ${o}.`]}},s=(e,t,{logs:r,throws:n,prefix:o})=>(!t.success&&i(t,r,n,o),{success:e.success&&t.success,cases:{...e.cases,[t.key]:t}}),i=(e,t,r,n)=>{const o=n?[n,...e.reason]:e.reason;if(r)throw new Error(o.join());t&&console.error(...o)},u=e=>Array.isArray(e),l=e=>{const t=new Map;for(let n=0;n<e.length;n++){var r;const o=e[n],s=null!==(r=t.get(o))&&void 0!==r?r:0;t.set(o,s+1)}return t},a=(e,t)=>{if(e.size!==t.size)return!1;for(let[r,n]of e){if(t.get(r)!==n)return!1}return!0},c=e=>"object"==typeof e&&!Array.isArray(e)&&null!==e,f=e=>u(e)?e:[e],p=e=>"function"==typeof e,d=e=>(Object.freeze(e),Object.getOwnPropertyNames(e).map((t=>{e.hasOwnProperty(t)&&null!==e[t]&&("object"==typeof e[t]||p(e[t]))&&!Object.isFrozen(e[t])&&d(e[t])})),e),g=Object.freeze({}),m=d({content:{}}),h=d([]),y=h,O=e=>e==e&&null!=e,b=(e,t,r)=>{for(let n=0;n<e.length;n++){const o=e[n];u(o)?b(o,t,r):r.exists&&!O(o)||r.truthy&&!o||t.push(o)}return r.mutate?(Object.assign(e,t).splice(t.length),e):t},j=(e,t)=>b(e,[],c(t)?t:g),w=(e,t)=>{if(u(t)){const[r,...n]=t;return r(e,...n)}return p(t)?t(e):(console.error("Pipeline expected either a function or an array (for function expressions). Found "+typeof t),e)},S=(e,...t)=>t.reduce(((e,t)=>w(e,t)),e),v=e=>"string"==typeof e,$=(e,t)=>{if(!v(e))return e;if(!p(t))return e;let r="";for(const n of e)r+=t(n);return r},A=e=>e===e.toLowerCase(),C=e=>e===e.toUpperCase(),_=(e,t,r=["-","_"," "])=>{if(!v(e))return e;const n=e=>r.some((t=>t===e));let o="_";return $(e,(e=>n(e)?(o=t,t):C(e)&&A(o)&&!n(o)?(o=e,t+e):(o=e,e)))},x=(e,t=!0)=>{if(!v(e)||!e[0])return e;const r=t?e.slice(1).toLowerCase():e.slice(1);return`${e[0].toUpperCase()}${r}`},F=e=>{const t=0===e.indexOf(".")?e.slice(1):e;return t.indexOf(".")===t.length-1?t.slice(0,-1):t},E=e=>e&&F(e).replace(/[-_]/gm," ")||e,P=(e,t)=>e&&E(e).split(/[\s_-]/gm).reduce(((e,r,n)=>r?e+=(n>0||t)&&x(r)||r.toLowerCase():e),"")||e,R=e=>null==e?"":v(e)?e:JSON.stringify(e),T=/[A-Z]/g,I=/^ms-/,N={},L=e=>"-"+e.toLowerCase(),U=e=>"number"==typeof e&&e!=e,k=e=>"number"==typeof e&&!U(e),D=e=>k(e)&&e>=0,q=e=>{if(!e||!v(e))return!1;return Boolean(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e))},M={ipv4:/^(?:(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.){3}(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/,ipv6:/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i},B=e=>{if(!e||!v(e))return!1;return Boolean(M.ipv4.test(e))||Boolean(M.ipv6.test(e))},z=e=>{if(!e||!v(e))return!1;return Boolean(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e))&&e.replace(/\D/g,"").length<11},J=e=>Boolean(/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(e)),H=e=>{if(!e||!v(e))return!1;return Boolean(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(e))},W=e=>v(e)&&e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")||e,G=e=>"object"==typeof e&&null!==e,K=(e,t,r)=>{const n=(u(t)?t:t.split(".")).reduce(((e,t)=>{const r=typeof e;if("object"===r||"function"===r)return e[t=t.startsWith("[")?t.replace(/\D/g,""):t]}),e);return O(n)?n:r},X=(e,t,r="")=>{t=G(t)&&t||{};const n=X.regex||/\${(.*?)\}/g;return v(e)?e.replace(n,((e,n)=>{const o=(n||e.substr(2,e.length-3)).trim(),s=K(t,o,r);return p(s)?s(t,o,r):s})):console.error("template requires a string as the first argument")||e},Q=['"',"'"],V=(e,t=Q)=>v(e)&&t.some((t=>e.startsWith(t)&&e.endsWith(t))),Z=e=>{if(!v(e))return;let t="";for(let r of e)t=r+t;return t},Y=(e,t,r=[" "])=>r.map((r=>e.indexOf(r,t))).sort().find((e=>e>=0)),ee=(e,t,r=[" "])=>{const n=Y(e,t,r);return e.substring(t,-1===n?e.length:n)},te=e=>"boolean"==typeof e,re=e=>"false"===e||"true"===e,ne=e=>te(e)?R(e):e&&"false"!==e&&"0"!==e?"true":"false",oe=e=>Boolean(e||""===e||0===e),se=e=>re(e)?"true"===e:"true"===ne(e),ie=e=>k(e)&&e<0,ue=e=>k(e)&&e>0,le=e=>R(e).replace(/([^.\d])/gm,""),ae=e=>k(e)&&e%1!=0,ce=e=>k(e)&&e%1==0,fe=e=>k(e)?e:e&&!U(e)&&Number(le(e))||0,pe=e=>v(e)||k(e)||te(e),de=(e,t)=>{const[r]=n({x:e,y:t},{$default:pe});return r?v(e)?e.localeCompare(t):e-t:null},ge=e=>e,me=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),he=e=>{const t=function(...r){return e instanceof t||K(e.prototype,"constructor.name")?new e(...r):e.apply(e,r)};for(let r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return Object.defineProperty(t,"name",{value:e.name,configurable:!0}),t.toString=()=>e.toString(),t},ye=(e,t=new WeakMap)=>{if(Object(e)!==e)return e;if(e instanceof Set)return new Set(e);if(t.has(e))return t.get(e);if(u(e))return e.map((e=>ye(e)));if(p(e))return he(e);const r=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e.constructor?null:Object.create(null);return null===r?Oe(e):(t.set(e,r),e instanceof Map?Array.from(e,(([e,n])=>r.set(e,ye(n,t)))):Object.assign(r,...Object.keys(e).map((r=>({[r]:ye(e[r],t)})))))},Oe=e=>{if(!e)return e;const t=Object.getPrototypeOf(e),r=Object.getOwnPropertyDescriptors(e);for(const[e,t]of Object.entries(r))t.value&&(r[e].value=ye(t.value));const n=Object.create(t,r);return Object.isFrozen(e)&&Object.freeze(n),Object.isSealed(e)&&Object.seal(n),n},be=e=>e&&p(e.then)?e.then((e=>[null,e])).catch((e=>[e,void 0])):[new Error("A promise or thenable is required as the first argument!"),null],je=e=>e?(e^16*Math.random()>>e/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,je),we=e=>Object.prototype.toString.call(e).slice(8,-1),Se=(e,...t)=>{if(!t.length)return null;for(let r of t){if(!u(r)){console.error(`Matching case must be an entry (a 2-element array). Found: ${we(r)}`,r);break}const[t,n]=r;if(p(t)&&t(e))return n;if(t===e)return n}return null};Se.default=()=>!0;const ve=e=>u(e)?0===e.length:G(e)&&0===Object.getOwnPropertyNames(e).length,$e=Array.isArray,Ae=Object.keys,Ce=Object.prototype.hasOwnProperty,_e=(e,t)=>{if(e===t)return!0;if(!e||!t||"object"!=typeof e||"object"!=typeof t)return e!=e&&t!=t;const r=$e(e),n=$e(t);let o,s,i;if(r&&n){if(s=e.length,s!=t.length)return!1;for(o=s;0!=o--;)if(!_e(e[o],t[o]))return!1;return!0}if(r!=n)return!1;const u=e instanceof Date,l=t instanceof Date;if(u!=l)return!1;if(u&&l)return e.getTime()==t.getTime();const a=e instanceof RegExp,c=t instanceof RegExp;if(a!=c)return!1;if(a&&c)return e.toString()==t.toString();const f=Ae(e);if(s=f.length,s!==Ae(t).length)return!1;for(o=s;0!=o--;)if(!Ce.call(t,f[o]))return!1;for(o=s;0!=o--;)if(i=f[o],!_e(e[i],t[i]))return!1;return!0},xe=e=>c(e)?0===Object.keys(e).length:u(e)?0===e.length:v(e)?0===e.trim().length:!!k(e)&&e<1,Fe=(e,t)=>e===t?0!==e||1/e==1/t:e!=e&&t!=t,Ee=e=>!isNaN((e instanceof Date&&e||new Date(e)).getTime()),Pe=e=>u(e)&&2===e.length&&(k(e[0])||v(e[0])),Re=e=>{if(!c(e))return!1;const t=Object.values(e);return se(t.length&&t.every(u))},Te=(e,t)=>{try{return JSON.stringify(e)===JSON.stringify(t)}catch(e){return!1}},Ie=e=>Boolean(e&&e instanceof RegExp),Ne=e=>/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/.test(e),Le=e=>(...t)=>!e.apply(null,t);Le.bool=Le(te),Le.strBool=Le(re),Le.coll=Le(G),Le.deepEqual=Le(_e),Le.emptyColl=Le(ve),Le.dom=Le((()=>{try{return!("undefined"==typeof window||!window.document||!window.document.createElement)}catch(e){return!1}})),Le.exists=Le(O),Le.empty=Le(xe),Le.same=Le(Fe),Le.validDate=Le(Ee),Le.func=Le(p),Le.identity=Le(ge),Le.orderable=Le(pe),Le.equalsNaN=Le(U),Le.float=Le(ae),Le.int=Le(ce),Le.num=Le(k),Le.negative=Le(ie),Le.positive=Le(ue),Le.hasOwn=Le(me),Le.entry=Le(Pe),Le.arrMap=Le(Re),Le.obj=Le(c),Le.jsonEqual=Le(Te),Le.regex=Le(Ie),Le.email=Le(q),Le.ip=Le(B),Le.lowerCase=Le(A),Le.phone=Le(z),Le.quoted=Le(V),Le.str=Le(v),Le.upperCase=Le(C),Le.url=Le(J),Le.uuid=Le(H),Le.validUrl=Le(Ne);const Ue=["node:internal","node_modules/jest"],ke=(e,t)=>{const[r]=n({arr:e,comparator:t},{arr:u,$default:p});return r&&e.length?e.reduce(((e,r)=>t(e,r)>0?e:r)):null},De=e=>u(e)?e.filter(((e,t,r)=>r.indexOf(e)==t)):e,qe=(e,t)=>{if(!t)return De(e);const{unique:r}=e.reduce(((e,r,n)=>{const o=t(r,n);return!e.set.has(o)&&e.unique.push(r),e.set.add(o),e}),{unique:[],set:new Set});return r},Me=(e,t=!0)=>G(e)?Object.keys(e).reduce(((r,n)=>{const o=e[n];return null==o||(r[n]=t&&G(o)?Me(o):o),r}),c(e)&&{}||[]):console.error("cleanColl requires a collection as the first argument")||e,Be=(e,t,r,n)=>{const o=e;if(!G(e)||!e||!t)return"set"!==r&&n||void 0;const s=u(t)?Array.from(t):t.split("."),i=s.pop();let l,a;for(;l=s.shift();){const t=e[l];if(G(t)||p(t)?e=t:("set"===r?e[l]={}:a=!0,e=e[l]),a)return n}return"get"===r?i in e?e[i]:n:"unset"===r?delete e[i]:(e[i]=n)&&o||o},ze=(e,t,r)=>Be(e,t,"set",r),Je=e=>e&&v(e)?re(e)?se(e):k(e)?fe(e):(()=>{try{return JSON.parse(e)}catch(t){return e}})():e;let He,We="dir",Ge="type";const Ke=["error","info","log","dir","warn"],Xe=(...e)=>{if(!e.length)return;let t=1===e.length?We:e.pop();(He||"error"===t)&&("string"==typeof e[0]&&("type"===Ge?e[0]=`[ ${t.toUpperCase()} ] ${e[0]}`:Ge&&(e[0]=`${Ge} ${e[0]}`)),-1!==Ke.indexOf(t)?console[t](...e):console[We](...e,t))},Qe=(e,t)=>{e&&Object.entries(e).map((([r,n])=>{t&&-1!==t.indexOf(r)||("object"==typeof n&&Qe(n),e[r]=void 0,delete e[r])}))},Ve=(...e)=>e.reduce(((e,t)=>{const r=ye(t);return u(r)?[...u(e)&&e||[],...r]:c(r)?Object.entries(r).reduce(((e,[t,r])=>({...e,[t]:p(r)?he(r):G(r)&&t in e?Ve(e[t],r):ye(r)})),e):e}),u(e[0])&&[]||{}),Ze=(e,t)=>{if(!u(e)&&!c(e))return console.error(e,"Expected array or object for obj. Found "+typeof e),e;if(!p(t))return console.error("Expected function for cb. Found "+typeof t),e;const r=Object.entries(e),n=u(e)?[]:{};return r.reduce(((e,[r,n])=>{const o=t(r,n);return Pe(o)?ze(e,o[0],o[1]):(console.error(`Callback function must return entry. Found: ${o}. Using current entry instead.`),ze(e,r,n))}),n)},Ye=(e,t,r={})=>c(e)&&p(t)&&Object.entries(e).reduce(((e,[r,n])=>t(r,n,e)),r)||r,et=e=>{if(!p(e))throw"Argument must be a function";return(...t)=>new Promise(((r,n)=>p(t[t.length-1])?(t.pop(),t.push(((...e)=>e&&e[0]?n(...e):r(...e))),e(...t)):r(e(...t))))},tt=Array.from(["caller","callee","arguments","apply","bind","call","toString","__proto__","__defineGetter__","__defineSetter__","hasOwnProperty","__lookupGetter__","__lookupSetter__","isPrototypeOf","propertyIsEnumerable","valueOf","toLocaleString"]).concat(Object.getOwnPropertyNames(Object.prototype)).reduce(((e,t)=>(e[t]=!0,e)),{}),rt=e=>{if(!e.__IS_PROMISIFIED__){for(const t of Object.getOwnPropertyNames(e)){if(!(-1!==t.indexOf("Async")||e[`${t}Async`])&&!tt[t])if(p(e[t]))e[`${t}Async`]=et(e[t]);else{const r=Object.getOwnPropertyDescriptor(e,t).get;p(r)&&(e[`${t}Async`]=et(r))}}e.__IS_PROMISIFIED__=!0}return e},nt=e=>Ie(e)?e.source:v(e)?e:null,ot=e=>{const t={},r=e.split("?"),n=r[r.length-1];if(!n)return t;const o=n.split("&");return o.length&&o.map((e=>{const r=e.split("=");if(r.length<=1)return t;const n=[r.shift(),r.join("=")];if(2===n.length){const e=decodeURIComponent(n[1]).split(",");if(e&&e.length>1)t[n[0]]=e;else if(n[0]in t){const e=t[n[0]];t[n[0]]=u(e)?e.push(decodeURIComponent(n[1])):[e,decodeURIComponent(n[1])]}else t[n[0]]=decodeURIComponent(n[1])}})),t};e.applyToCloneOf=(e,t)=>{let r;if(e||(r="object (Argument 1) in applyToCloneOf, must be defined!"),c(e)||(r="object (Argument 1) in applyToCloneOf, must be an object!"),t||(r="mutator (Argument 2) in applyToCloneOf, must be defined!"),p(t)||(r="mutator (Argument 2) arg in applyToCloneOf, must be a function!"),r)return console.warn(r),e;const n=ye(e);return t(n),n},e.applyToFunc=w,e.areCountMapsEqual=a,e.areFrequencyEqual=(e,t)=>{const[r]=n({arr:e,otherArr:t},{$default:u});if(!r)return null;if(e===t)return!0;if(e.length!==t.length)return!1;const o=l(e),s=l(t);return a(o,s)},e.areSetEqual=(e,t)=>{const[r]=n({arr:e,otherArr:t},{$default:u});if(!r)return null;if(e===t)return!0;const[o,s]=e.length>t.length?[e,t]:[t,e],i=new Set(s);for(let e=0;e<o.length;e++){const t=o[e];if(!i.has(t))return!1}return!0},e.buildElementCountMap=l,e.buildPath=(...e)=>e.reduce(((e,t)=>{let r=toStr(t);return`${e}${r&&"/"+r||""}`}),"").replace(/([^:\/]|^)\/{2,}/g,"$1/"),e.camelCase=P,e.camelCasePath=e=>{const t=e.split(".").map(((e,t)=>t>0?x(e,!1):e));return t.length>1?t.join(""):e},e.capitalize=x,e.checkCall=(e,...t)=>p(e)?e(...t):void 0,e.cleanColl=Me,e.cleanStr=E,e.clearObj=Qe,e.cloneArr=e=>Array.from([...u(e)&&e||c(e)&&Object.entries(e)||[]]),e.cloneFunc=he,e.cloneJson=e=>{try{return JSON.parse(JSON.stringify(e))}catch(e){return Xe(e.message,"error"),null}},e.cloneObjWithPrototypeAndProperties=Oe,e.compareTo=de,e.complement=e=>{const[t]=n({predicate:e},{predicate:p});return t?(...t)=>!e(...t):null},e.containsStr=(e,t,r)=>(e=!v(e)&&R(e)||e,t=!v(t)&&R(t)||t,-1!==e.indexOf(t,r)),e.convertToStrBool=ne,e.debounce=(e,t=250,r=!1)=>{let n;return function(...o){if(!p(e))return null;const s=this,i=r&&!n;return clearTimeout(n),n=setTimeout((()=>{n=null,!r&&e.apply(s,o)}),t),i?p(e)&&e.apply(s,o):void 0}},e.deepClone=ye,e.deepEqual=_e,e.deepFreeze=d,e.deepMerge=Ve,e.delimitString=_,e.doIt=(...e)=>{const t=e.slice(),r=t.shift(),n=t.shift(),o=t.pop();if(!k(r)||!p(o))return[];const s=new Array(r),i=[];for(let e=0;e<s.length;e++){const r=o.call(n,e,...t);if(!1===r)break;i.push(r)}return i},e.either=(e,t,r)=>p(r)?r(e,t)&&e||t:oe(e)&&e||t,e.eitherArr=(e,t)=>u(e)?e:t,e.eitherFunc=(e,t)=>p(e)&&e||t,e.eitherObj=(e,t)=>c(e)&&e||t,e.eitherStr=(e,t)=>v(e)&&e||t,e.ensureArr=f,e.equalsNaN=U,e.everyEntry=(e,t,r=!0)=>c(e)?p(t)?S(e,Object.entries,(e=>e.every((([e,r])=>t(e,r))))):(r&&console.error(`Second argument ${t}, must a function`),!1):(r&&console.error(`First argument ${e} must be an object.`),!1),e.exists=O,e.filterObj=(e,t,r=!0)=>c(e)?p(t)?Ye(e,((e,r,n)=>(t(e,r)&&(n[e]=r),n)),{}):(r&&console.error(`Second argument ${t}, must a function`),e):(r&&console.error(`First argument ${e} must be an object.`),e),e.findExtrema=ke,e.findMax=(e=[],t=ge)=>ke(e,((e,r)=>de(t(e),t(r)))),e.findMin=(e=[],t=ge)=>ke(e,((e,r)=>de(t(r),t(e)))),e.flatArr=j,e.flatMap=(e,t)=>{const[r]=n({arr:e,mapFn:t},{arr:u,mapFn:p});return r?e.reduce(((e,r)=>{const n=t(r);return u(n)?n.map((t=>e.push(t))):e.push(n),e}),[]):e},e.flatUnion=(...e)=>{const t=e.pop(),r={exists:!0},n=p(t)?t:e.push(t)&&void 0;return e.reduce(((e,t)=>u(t)?qe(j([...e,...t],r),n):e),[])},e.get=K,e.getNearestDelimiterIndex=Y,e.getNums=le,e.getRegexSource=nt,e.getURLParam=e=>{var t,r,o;const[s]=n({paramKey:e},{paramKey:v});if(!s)return null;const i="undefined"!=typeof document?document:null,u=null==i||null===(t=i.location)||void 0===t?void 0:t.search;return v(u)&&null!==(r=null===(o=ot(u))||void 0===o?void 0:o[e])&&void 0!==r?r:null},e.getWordEndingAt=(e,t,r=[" "])=>{const n=Z(e),o=e.length-t;return Z(ee(n,o,r))},e.getWordStartingAt=ee,e.hasOwn=me,e.hashString=(e,t)=>{if(!v(e)||0==e.length)return 0;e=e.split("").reverse().join("");let r=0;for(let t=0;t<e.length;t++){r=(r<<5)-r+e.charCodeAt(t),r=`${Math.abs(r&r)}`}return D(t)?r.slice(0,t):r},e.hyphenator=e=>{if(N.hasOwnProperty(e))return N[e];const t=e.replace(T,L);return N[e]=I.test(t)?"-"+t:t},e.identity=ge,e.isArr=u,e.isArrMap=Re,e.isBool=te,e.isColl=G,e.isEmail=q,e.isEmpty=xe,e.isEmptyColl=ve,e.isEntry=Pe,e.isFloat=ae,e.isFunc=p,e.isInt=ce,e.isIp=B,e.isIp4=e=>!(!e||!v(e))&&Boolean(M.ipv4.test(e)),e.isIp6=e=>!(!e||!v(e))&&Boolean(M.ipv6.test(e)),e.isLowerCase=A,e.isNegative=ie,e.isNonNegative=D,e.isNum=k,e.isObj=c,e.isOrderable=pe,e.isPhone=z,e.isPositive=ue,e.isQuoted=V,e.isRegex=Ie,e.isSame=Fe,e.isStr=v,e.isStrBool=re,e.isUpperCase=C,e.isUrl=J,e.isUuid=H,e.isValidDate=Ee,e.isValidUrl=Ne,e.joinRegex=(...e)=>{const[t,r]=(e=>{if(u(e[0]))return[e[0],e[1]];const t=e[e.length-1],r=v(t)?t:void 0;return[r?e.splice(0,e.length-1):e,r]})(e),n=t.reduce(((e,t)=>{const r=nt(t);return r?""===e?r:`${e}|${r}`:e}),"");return new RegExp(`(${n})`,r)},e.jsonEqual=Te,e.keyMap=(e,t)=>u(e)&&e.reduce(((e,r)=>{if(!v(r))return e;const n=t&&r.toUpperCase()||r;return e[n]=n,e}),{})||{},e.limbo=be,e.limboify=(e,...t)=>be(new Promise(((r,n)=>e(...t,((e,t)=>e?n(e):r(t||!0)))))),e.logData=Xe,e.mapColl=(e,t)=>p(t)&&G(e)?Object.keys(e).map((r=>t(r,e[r],e))):u(e)?[]:{},e.mapEntries=Ze,e.mapFind=(e,t,r=O)=>{const[o]=n({coll:e,mapper:t,testFunc:r},{coll:G,$default:p});if(o)return c(e)?((e,t,r)=>{let n=0;for(let o in e){if(!e.hasOwnProperty(o))continue;const s=t(e[o],o,n);if(r(s,o,n))return s;n++}return null})(e,t,r):((e,t,r)=>{for(let n=0;n<e.length;n++){const o=t(e[n],n,n);if(r(o,n,n))return o}return null})(e,t,r)},e.mapKeys=(e,t)=>c(e)&&p(t)?Ze(e,((e,r)=>[t(e),r])):e,e.mapObj=(e,t)=>{if(!c(e))return[];const r=Object.entries(e);return p(t)?r.map((([e,r])=>t(e,r))):r},e.mapString=$,e.match=Se,e.memorize=(e,t,r=1)=>{if(!p(e)||t&&!p(t))return console.error("Error: Expected a function",e,t);let n=function(){const o=n.cache,s=t?t.apply(this,arguments):arguments[0];if(me(o,s))return o[s];const i=e.apply(this,arguments);return k(r)&&Object.keys(o).length<r?o[s]=i:n.cache={[s]:i},i};return n.cache={},n.destroy=()=>{t=void 0,n.cache=void 0,n.destroy=void 0,n=void 0},n},e.mod=(e,t)=>(e%t+t)%t,e.noOp=()=>{},e.noOpArr=y,e.noOpObj=g,e.noPropArr=h,e.noPropObj=m,e.not=Le,e.nth=e=>{if(!k(e)){if(!(e=le(e)))return"";if(e=fe(e),U(e))return""}const t=e%100;if(t>=10&&t<=20)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},e.objToQuery=e=>{let t;return Ye(e,((e,r,n)=>{if(!r)return n;const o=v(r)||k(r)||te(r)?r:G(r)?u(r)?r.join(","):JSON.stringify(r):null;return o?(n=t?`${n}&${encodeURIComponent(e)}=${encodeURIComponent(o)}`:`?${encodeURIComponent(e)}=${encodeURIComponent(o)}`,t=!0,n):n}),"")},e.omitKeys=(e={},t=[])=>c(e)&&Ye(e,((r,n,o)=>(-1===t.indexOf(r)&&(o[r]=e[r]),o)),{})||{},e.omitRange=(e,t,r)=>{const[o]=n({arr:e,startIndex:t,count:r},{arr:u,$default:D});if(!o)return e;const s=[...e];return s.splice(t,r),s},e.parseErrorMessage=e=>v(e)&&!xe(e)?e:c(e)?e.message:null,e.parseJSON=(e,t=!0)=>{try{return JSON.parse(e)}catch(e){return t&&console.error(e.message),null}},e.pickKeys=(e={},t=[])=>c(e)&&t.reduce(((t,r)=>(r in e&&(t[r]=e[r]),t)),{})||{},e.pipeline=S,e.plural=e=>e&&e.length&&"s"!==e[e.length-1]?e+"s":e,e.promisify=et,e.promisifyAll=e=>{if(!c(e))return e;rt(e);const t=Object.getPrototypeOf(e);return t&&null!==Object.getPrototypeOf(t)&&rt(t),e},e.queryToObj=ot,e.randomArr=(e,t)=>{if(!u(e))return e;const r=t||1,n=[];for(let t=0;t<r;t++)n.push(e[Math.floor(Math.random()*e.length)]);return t?n:n[0]},e.randomizeArr=e=>!u(e)&&e||e.sort((()=>.5-Math.random())),e.reduceColl=(e,t,r)=>p(t)&&G(e)?Object.keys(e).reduce(((r,n)=>t(n,e[n],e,r)),r):u(e)?[]:{},e.reduceObj=Ye,e.removeDot=F,e.repeat=(e,t,r=!1)=>{if(!t||t<=0)return[];if(!k(t))return console.error("Times argument must be a number"),[];const n=[];for(let o=0;o<t;o++){const t=p(e)?e():r?ye(e):e;n.push(t)}return n},e.resetLogs=()=>{He=void 0,We="log",Ge="type"},e.reverseStr=Z,e.runSeq=async(e=[],t={})=>{const[r]=n({asyncFns:e},{asyncFns:u});if(!r)return[];const{cloneResults:o=!1,returnOriginal:s=!0}=t,i=[];for(const t of e){const e=p(t)?await t(i.length,o?ye(i):i):s?t:void 0;i.push(e)}return i},e.sanitize=W,e.sanitizeCopy=e=>JSON.parse(W(JSON.stringify(e))),e.set=ze,e.setLogs=(e,t,r)=>{He=e,We=t||We||"log",Ge=r||Ge||"type"},e.shallowEqual=(e,t,r)=>{if(r&&(u(r)||v(r))&&(e=K(e,r),t=K(t,r)),e===t)return!0;if(!(e&&G(e)&&t&&G(t)))return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(e[r]!==t[r])return!1;return!0},e.singular=e=>e&&e.length&&"s"===e[e.length-1]?e.slice(0,e.length-1):e,e.snakeCase=e=>_(e,"_").toLowerCase(),e.softFalsy=oe,e.someEntry=(e,t,r=!0)=>c(e)?p(t)?S(e,Object.entries,(e=>e.some((([e,r])=>t(e,r))))):(r&&console.error(`Second argument ${t}, must a function`),!1):(r&&console.error(`First argument ${e} must be an object.`),!1),e.spaceJoin=(e,t)=>(t=u(t)?t:[t]).reduce(((e,t)=>v(t)?`${e?e+" ":""}${t}`.trim():e),v(e)?e:""),e.splitByKeys=(e={},t)=>{if(!t)return[{},{...e}];const r=[{},{}],n=f(t);return c(e)?Ye(e,((t,r,o)=>(O(n.find((e=>O(e)&&R(e)===t)))?o[0][t]=e[t]:o[1][t]=e[t],o)),r):r},e.stackTracePaths=(e=Ue)=>{const t=Error.prepareStackTrace;Error.prepareStackTrace=(e,t)=>t;const r=(new Error).stack.slice(1);return Error.prepareStackTrace=t,r.reduce(((t,n)=>{const o=n.getFileName();if(!o)return t;return!(p(e)?e(o,n,r):Boolean(e.length&&e.find((e=>o.includes(e)))))&&t.push(o),t}),[])},e.strToType=Je,e.styleCase=e=>{if(!v(e))return e;const t=P(e);return`${t[0].toLowerCase()}${t.slice(1)}`},e.template=X,e.templateRx=(e,t,r="",n)=>{const o=X.regex;X.regex=n||/{{([^}]*)}}/g;const s=X(e,t,r);return X.regex=o,s},e.throttle=(e,t=100)=>{let r=!1;return function(...n){if(!r)return r=!0,e.apply(this,n),setTimeout((()=>{r=!1}),t)}},e.throttleLast=(e,t,r=100)=>{let n;return function(...o){n&&clearTimeout(n),n=setTimeout((()=>{e.apply(this,o),clearTimeout(n)}),r),"function"==typeof t&&t()}},e.timedRun=async(e,...t)=>{const[r]=n({fn:e},{fn:p});if(!r)return[void 0,-1];const o=new Date;return[await e(...t),new Date-o]},e.toBool=se,e.toFloat=e=>e&&!U(e)&&parseFloat(k(e)&&e||le(e))||0,e.toInt=e=>e&&!U(e)&&parseInt(k(e)&&e||le(e))||0,e.toNum=fe,e.toObj=(e,t,r)=>u(e)?Object.keys(e).reduce(((t,r)=>(t[r]=e[r],t)),{}):v(e)?(t=t||"=",r=r||"&",e.toString().split(r).reduce(((e,r)=>{const n=r.split(t);return e[n[0].trim()]=Je(n[1].trim()),e}),{})):{},e.toStr=R,e.trainCase=e=>v(e)&&e.split(/(?=[A-Z])|[\s_-]/gm).join("-").toLowerCase()||e,e.trimStringFields=e=>Object.entries(e).reduce(((e,[t,r])=>(e[t]=v(r)?r.trim():r,e)),e),e.typeOf=we,e.uniqArr=qe,e.uniqArrByReference=De,e.unset=(e,t)=>Be(e,t,"unset"),e.uuid=je,e.validFilename=e=>{if(!e)return!1;return!(/[<>:"/\\|?*\u0000-\u001F]/g.test(e)||/^(con|prn|aux|nul|com\d|lpt\d)$/i.test(e)||/^\.\.?$/.test(e))},e.validate=n,e.wait=e=>new Promise((t=>setTimeout((()=>t(!0)),e))),e.wordCaps=e=>{if(!v(e))return e;return E(e).split(" ").map((e=>e&&x(e)||"")).join(" ")}}));
//# sourceMappingURL=index.js.map
