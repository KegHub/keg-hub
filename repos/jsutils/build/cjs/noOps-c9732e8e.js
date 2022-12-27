'use strict';

var deepFreeze = require('./deepFreeze-d73ccc57.js');

const noOpObj = Object.freeze({});
const emptyObj = noOpObj;
const noPropObj = deepFreeze.deepFreeze({
  content: {}
});
const noPropArr = deepFreeze.deepFreeze([]);
const noOpArr = noPropArr;
const emptyArr = noPropArr;

exports.emptyArr = emptyArr;
exports.emptyObj = emptyObj;
exports.noOpArr = noOpArr;
exports.noOpObj = noOpObj;
exports.noPropArr = noPropArr;
exports.noPropObj = noPropObj;
//# sourceMappingURL=noOps-c9732e8e.js.map
