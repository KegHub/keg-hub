'use strict';

var isStr = require('./isStr-8a57710e.js');
var isNum = require('./isNum-c7164b50.js');
var isArr = require('./isArr-39234014.js');
var isObj = require('./isObj-6b3aa807.js');
var toBool = require('./toBool-deb350e4.js');

const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

const isEntry = maybeEntry => isArr.isArr(maybeEntry) && maybeEntry.length === 2 && (isNum.isNum(maybeEntry[0]) || isStr.isStr(maybeEntry[0]));

const isArrMap = obj => {
  if (!isObj.isObj(obj)) return false;
  const values = Object.values(obj);
  return toBool.toBool(values.length && values.every(isArr.isArr));
};

const jsonEqual = (one, two) => {
  try {
    return JSON.stringify(one) === JSON.stringify(two);
  } catch (e) {
    return false;
  }
};

exports.hasOwn = hasOwn;
exports.isArrMap = isArrMap;
exports.isEntry = isEntry;
exports.jsonEqual = jsonEqual;
//# sourceMappingURL=jsonEqual-7e69ef6a.js.map
