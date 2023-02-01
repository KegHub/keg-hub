'use strict';

var isFunc = require('./isFunc-f93803cb.js');

const deepFreeze = obj => {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).map(prop => {
    obj.hasOwnProperty(prop) && obj[prop] !== null && (typeof obj[prop] === 'object' || isFunc.isFunc(obj[prop])) && !Object.isFrozen(obj[prop]) && deepFreeze(obj[prop]);
  });
  return obj;
};

const noOpObj = Object.freeze({});
const emptyObj = noOpObj;
const noPropObj = deepFreeze({
  content: {}
});
const noPropArr = deepFreeze([]);
const noOpArr = noPropArr;
const emptyArr = noPropArr;

exports.deepFreeze = deepFreeze;
exports.emptyArr = emptyArr;
exports.emptyObj = emptyObj;
exports.noOpArr = noOpArr;
exports.noOpObj = noOpObj;
exports.noPropArr = noPropArr;
exports.noPropObj = noPropObj;
//# sourceMappingURL=noOps-b5f3c7e4.js.map
