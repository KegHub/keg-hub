"use strict";var e=require("@keg-hub/jsutils"),r=require("react");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t,n=_interopDefaultLegacy(r),o=e.deepFreeze({BUILD_EVENT:"build",CHANGE_EVENT:"change",RESIZE_EVENT:"resize",ADD_EVENT:"addEventListener",REMOVE_EVENT:"removeEventListener",KEG_STYLES_TAG_ID:"keg-components-stylesheet",PLATFORM:{NATIVE:"$native",IOS:"$ios",android:"$android",WEB:"$web",ALL:"$all"}});function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _extends(){return(_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function _slicedToArray(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,o,i=[],a=!0,d=!1;try{for(t=t.call(e);!(a=(n=t.next()).done)&&(i.push(n.value),!r||i.length!==r);a=!0);}catch(e){d=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(d)throw o}}return i}(e,r)||_unsupportedIterableToArray(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _toConsumableArray(e){return function(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||_unsupportedIterableToArray(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var i=(_defineProperty(t={m:"margin",mT:"marginTop",mB:"marginBottom",mR:"marginRight",mL:"marginLeft",mH:"marginHorizontal",mV:"marginVertical",p:"padding",pT:"paddingTop",pB:"paddingBottom",pR:"paddingRight",pL:"paddingLeft",pH:"paddingHorizontal",pV:"paddingVertical",bC:"borderColor",bW:"borderWidth",bS:"borderStyle"},"bC","borderColor"),_defineProperty(t,"bRad","borderRadius"),_defineProperty(t,"bTRR","borderTopRightRadius"),_defineProperty(t,"bTLR","borderTopLeftRadius"),_defineProperty(t,"bBLR","borderBottomLeftRadius"),_defineProperty(t,"bBRR","borderBottomRightRadius"),_defineProperty(t,"bTC","borderTopColor"),_defineProperty(t,"bTW","borderTopWidth"),_defineProperty(t,"bBC","borderBottomColor"),_defineProperty(t,"bBW","borderBottomWidth"),_defineProperty(t,"bRC","borderRightColor"),_defineProperty(t,"bRW","borderRightWidth"),_defineProperty(t,"bLC","borderLeftColor"),_defineProperty(t,"bLW","borderLeftWidth"),_defineProperty(t,"c","color"),_defineProperty(t,"bg","background"),_defineProperty(t,"bgC","backgroundColor"),_defineProperty(t,"d","display"),_defineProperty(t,"ovf","overflow"),_defineProperty(t,"ovfX","overflowX"),_defineProperty(t,"ovfY","overflowY"),_defineProperty(t,"pos","position"),_defineProperty(t,"z","zIndex"),_defineProperty(t,"tp","top"),_defineProperty(t,"bt","bottom"),_defineProperty(t,"btm","bottom"),_defineProperty(t,"lt","left"),_defineProperty(t,"rt","right"),_defineProperty(t,"bxS","boxShadow"),_defineProperty(t,"op","opacity"),_defineProperty(t,"ptrE","pointerEvents"),_defineProperty(t,"otl","outline"),_defineProperty(t,"fl","flex"),_defineProperty(t,"flD","flexDirection"),_defineProperty(t,"flWr","flexWrap"),_defineProperty(t,"flB","flexBasis"),_defineProperty(t,"flG","flexGrow"),_defineProperty(t,"flS","flexShrink"),_defineProperty(t,"jtC","justifyContent"),_defineProperty(t,"alC","alignContent"),_defineProperty(t,"alS","alignSelf"),_defineProperty(t,"alI","alignItems"),_defineProperty(t,"vrA","verticalAlign"),_defineProperty(t,"whS","whiteSpace"),_defineProperty(t,"w","width"),_defineProperty(t,"h","height"),_defineProperty(t,"minH","minHeight"),_defineProperty(t,"maxH","maxHeight"),_defineProperty(t,"minW","minWidth"),_defineProperty(t,"maxW","maxWidth"),_defineProperty(t,"ftF","fontFamily"),_defineProperty(t,"ftSz","fontSize"),_defineProperty(t,"ftS","fontStyle"),_defineProperty(t,"ftWt","fontWeight"),_defineProperty(t,"lnH","lineHeight"),_defineProperty(t,"ltrS","letterSpacing"),_defineProperty(t,"txAl","textAlign"),_defineProperty(t,"txDc","textDecoration"),_defineProperty(t,"txDL","textDecorationLine"),_defineProperty(t,"shC","shadowColor"),_defineProperty(t,"shOf","shadowOffset"),_defineProperty(t,"shOff","shadowOffset"),_defineProperty(t,"shO","shadowOpacity"),_defineProperty(t,"shR","shadowRadius"),_defineProperty(t,"trf","transform"),_defineProperty(t,"trD","transitionDuration"),_defineProperty(t,"trP","transitionProperty"),t),a=e.hasDomAccess()?window:{devicePixelRatio:void 0,innerHeight:void 0,innerWidth:void 0,width:void 0,height:void 0,screen:{height:void 0,width:void 0}},setScreen=function(e){return{fontScale:1,height:e.screen.height,scale:e.devicePixelRatio||1,width:e.screen.width}},setWin=function(e){return{fontScale:1,height:e.innerHeight,scale:e.devicePixelRatio||1,width:e.innerWidth}},d={window:setWin(a),screen:setScreen(a)},f={},update=function(){d.window=setWin(a),d.screen=setScreen(a),e.isArr(f[o.CHANGE_EVENT])&&f[o.CHANGE_EVENT].forEach((function(e){return!e.shouldUnmount&&e(d)}))};e.hasDomAccess()&&e.checkCall((function(){return r=window,t=o.RESIZE_EVENT,n=e.debounce(update,100),void(r&&e.checkCall(r.addEventListener,t,n,i||!1));var r,t,n,i}));var Dimensions_get=function(e){return d[e]},Dimensions_addEventListener=function(r,t){r&&e.isFunc(t)&&(f[r]=f[r]||[],f[r].push(t))},Dimensions_removeEventListener=function(r,t){r&&e.isFunc(t)&&e.isArr(f[r])&&(f[r]=f[r].filter((function(e){return e!==t})))},u={},getDefaultTheme=function(){return u},s=n.default.createContext(getDefaultTheme()),l={OS:"web",select:function(r){return e.isObj(r)&&r.web},Version:"ReTheme"},getDefaultPlatforms=function(){var r=l,t=e.get(r,"OS"),n=[];return"web"!==t&&n.push("$native"),n.push("$"+t),[o.PLATFORM.ALL].concat(n)},c={},p={},getCurrentTheme=function(){return p},y={entries:[["$xsmall",1],["$small",320],["$medium",768],["$large",1024],["$xlarge",1366]],hash:{},indexes:{}},buildSizeMapParts=function(){y.indexes=y.entries.reduce((function(e,r,t){return e[r[0]]=t,e[t]=r[0],y.hash[r[0]]=r[1],e}),{})},getSize=function(r){var t=e.isNum(r)&&r||e.toNum(r),n=y.entries.reduce((function(e,r){var n=_slicedToArray(r,2),o=n[0],i=n[1];return t>=i&&(e?i>y.hash[e]&&(e=o):e=o),e}),"$xsmall");return[n,y.hash[n]]},getMergeSizes=function(e){var r=Object.keys(y.hash),t=r.indexOf(e);return[r.slice(0,t+1),r.slice(t+1)]};buildSizeMapParts();var useDimensions=function(){var e=_slicedToArray(r.useState(Dimensions_get("window")),2),t=e[0],n=e[1],onChange=function(e){var r=e.window,t=r.width,o=r.height,i=r.scale,a=r.fontScale;n({width:t,height:o,scale:i,fontScale:a})};return r.useEffect((function(){return Dimensions_addEventListener("change",onChange),function(){return onChange.shouldUnmount=!0,Dimensions_removeEventListener("change",onChange)}}),[]),t},h=o.PLATFORM,getTheme=function(){for(var r=getCurrentTheme(),t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.deepMerge.apply(void 0,_toConsumableArray(n.reduce((function(t,n){var o=e.isObj(n)?n:e.isStr(n)||e.isArr(n)?e.get(r,n):null;return o&&t.push(o),t}),[])))},extract=function(r,t){if(!r[t])return r;var n=r[t];return delete r[t],e.deepMerge(r,n)},b=function compileStyles(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isArr(r)&&r.length?e.deepMerge.apply(void 0,_toConsumableArray(r)):r;if(!e.isObj(n))return r;var o=t.platforms,a=t.sizes,d=t.omit,f=t.aliases,u=void 0===f?i:f,s=Object.entries(n).reduce((function(r,n){var i=_slicedToArray(n,2),f=i[0],s=i[1];if(o.includes(f)||a.includes(f))r[f]=_objectSpread2(_objectSpread2({},r[f]),compileStyles(s,t));else if(!d.includes(f)){var l=u[f]||f;r[l]=e.isObj(s)?_objectSpread2(_objectSpread2({},r[l]),compileStyles(s,t)):s}return r}),{}),l=o.reduce(extract,s),c=a.reduce(extract,l);return c},useCurrentSize=function(){var e=useDimensions(),t=_slicedToArray(r.useMemo((function(){return getSize(e.width)}),[e.width]),2);return[t[0],t[1],e]},usePlatforms=function(){return r.useMemo((function(){return e=getDefaultPlatforms(),r=Object.values(h).filter((function(r){return!e.includes(r)})),[e,r];var e,r}),[])};exports.Constants=o,exports.ReThemeContext=s,exports._defineProperty=_defineProperty,exports._extends=_extends,exports._objectSpread2=_objectSpread2,exports._objectWithoutProperties=function(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o},exports._slicedToArray=_slicedToArray,exports._toConsumableArray=_toConsumableArray,exports.addThemeEvent=function(r,t){if(r&&e.isFunc(t))return c[r]=c[r]||[],c[r].push(t),c[r].length-1},exports.fireThemeEvent=function(r){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];e.isArr(c[r])&&c[r].forEach((function(e){return e.apply(void 0,n)}))},exports.getDefaultTheme=getDefaultTheme,exports.getMergeSizes=getMergeSizes,exports.getSize=getSize,exports.getSizeMap=function(){return y},exports.removeThemeEvent=function(r,t){r&&c[r]&&(t||0===t)&&(e.isNum(t)?c[r].splice(t,1):e.isFunc(t)&&e.isArr(c[r])&&(c[r]=c[r].filter((function(e){return e!==t}))))},exports.setDefaultTheme=function(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.isObj(r)?u=t?e.deepMerge(u,r):r:console.warn("setDefaultTheme method requires an theme object as the first argument. Received: ",r)},exports.setSizes=function(r){return e.isObj(r)?(e.mapObj(r,(function(t,n){var o=y.indexes[t];if(!e.softFalsy(o))return e.logData("Invalid ".concat(t," for theme size! Allowed keys are xsmall | small | medium | large | xlarge"),"warn");var i=e.toNum(r[t]);if(!i||!y.entries[o])return e.logData("Invalid size entry. Size must be a number and the size entry must exist!","Size: ".concat(i),"Entry: ".concat(y.entries[o]),"warn");y.entries[o]=[t,i]})),buildSizeMapParts(),y):e.logData("setDimensions method requires an argument of type 'Object'.\nReceived: ",r,"error")},exports.updateCurrentTheme=function(e){return p=e},exports.useCompiledStyles=function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=usePlatforms(),i=_slicedToArray(o,2),a=i[0],d=i[1],f=useCurrentSize(),u=_slicedToArray(f,3),s=u[0],l=u[1],c=u[2],p=c.width,y=c.height,h=r.useMemo((function(){return getMergeSizes(s)||e.noPropArr}),[s]),m=_slicedToArray(h,2),_=m[0],g=m[1],P=r.useMemo((function(){return d.concat(g)}),[d,g]),v=r.useMemo((function(){return n?{key:s,size:l,width:p,height:y}:null}),[s,l,p,y]),w=r.useMemo((function(){return b(t,{platforms:a,sizes:_,omit:P})}),[t,a,s]);return n&&(w.get=getTheme,w.RTMeta=v),w},exports.useDimensions=useDimensions,exports.useTheme=function(){return r.useContext(s)};
//# sourceMappingURL=useTheme-c66cd68a.js.map