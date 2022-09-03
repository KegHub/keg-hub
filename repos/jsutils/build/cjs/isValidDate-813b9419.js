'use strict';

var isObj = require('./isObj-6b3aa807.js');
var isArr = require('./isArr-39234014.js');
var isStr = require('./isStr-8a57710e.js');
var isNum = require('./isNum-c7164b50.js');

const typeOf = val => Object.prototype.toString.call(val).slice(8, -1);

const isEmpty = val => isObj.isObj(val) ? Object.keys(val).length === 0 : isArr.isArr(val) ? val.length === 0 : isStr.isStr(val) ? val.trim().length === 0 : isNum.isNum(val) ? val < 1 : false;

const isSame = (val1, val2) => val1 === val2 ? val1 !== 0 || 1 / val1 === 1 / val2 : val1 !== val1 && val2 !== val2;

const isValidDate = date => !isNaN((date instanceof Date && date || new Date(date)).getTime());

exports.isEmpty = isEmpty;
exports.isSame = isSame;
exports.isValidDate = isValidDate;
exports.typeOf = typeOf;
//# sourceMappingURL=isValidDate-813b9419.js.map
