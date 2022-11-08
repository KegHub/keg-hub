'use strict';

var deepFreeze = require('./deepFreeze-d73ccc57.js');

const noOpObj = Object.freeze({});
const noPropObj = deepFreeze.deepFreeze({
  content: {}
});
const noPropArr = deepFreeze.deepFreeze([]);
const noOpArr = noPropArr;
const emptyArr = noPropArr;

exports.emptyArr = emptyArr;
exports.noOpArr = noOpArr;
exports.noOpObj = noOpObj;
exports.noPropArr = noPropArr;
exports.noPropObj = noPropObj;
//# sourceMappingURL=noOps-5b6bf1e9.js.map
