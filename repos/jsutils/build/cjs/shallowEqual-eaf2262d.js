'use strict';

var isObj = require('./isObj-6b3aa807.js');
var isColl = require('./isColl-5757310a.js');
var isFunc = require('./isFunc-f93803cb.js');
var isArr = require('./isArr-39234014.js');
var exists = require('./exists-c79204b1.js');
var validate = require('./validate-23297ec2.js');
var set = require('./set-c0a98b21.js');
var deepClone = require('./deepClone-ae664a21.js');
var isNum = require('./isNum-c7164b50.js');
var get = require('./get-00626335.js');
var isStr = require('./isStr-8a57710e.js');

const cleanColl = (coll, recursive = true) => {
  return isColl.isColl(coll) ? Object.keys(coll).reduce((cleaned, key) => {
    const value = coll[key];
    if (value === null || value === undefined) return cleaned;
    cleaned[key] = recursive && isColl.isColl(value) ? cleanColl(value) : value;
    return cleaned;
  }, isObj.isObj(coll) && {} || []) : console.error(`cleanColl requires a collection as the first argument`) || coll;
};

const mapColl = (coll, cb) => isFunc.isFunc(cb) && isColl.isColl(coll) ? Object.keys(coll).map(key => cb(key, coll[key], coll)) : isArr.isArr(coll) ? [] : {};

const mapFindArr = (arr, mapper, testFunc) => {
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = mapper(arr[i], i, i);
    if (testFunc(mappedValue, i, i)) return mappedValue;
  }
  return null;
};
const mapFindObj = (obj, mapper, testFunc) => {
  let idx = 0;
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    const value = obj[key];
    const mappedValue = mapper(value, key, idx);
    if (testFunc(mappedValue, key, idx)) return mappedValue;
    idx++;
  }
  return null;
};
const mapFind = (coll, mapper, testFunc = exists.exists) => {
  const [valid] = validate.validate({
    coll,
    mapper,
    testFunc
  }, {
    coll: isColl.isColl,
    $default: isFunc.isFunc
  });
  if (!valid) return undefined;
  return isObj.isObj(coll) ? mapFindObj(coll, mapper, testFunc) : mapFindArr(coll, mapper, testFunc);
};

const reduceColl = (coll, cb, reduce) => isFunc.isFunc(cb) && isColl.isColl(coll) ? Object.keys(coll).reduce((data, key) => cb(key, coll[key], coll, data), reduce) : isArr.isArr(coll) ? [] : {};

const unset = (obj, path) => {
  set.updateColl(obj, path, 'unset');
  return obj;
};

const repeat = (element, times, cloneDeep = false) => {
  if (!times || times <= 0) return [];
  if (!isNum.isNum(times)) {
    console.error('Times argument must be a number');
    return [];
  }
  const arr = [];
  for (let i = 0; i < times; i++) {
    const value = isFunc.isFunc(element) ? element() : cloneDeep ? deepClone.deepClone(element) : element;
    arr.push(value);
  }
  return arr;
};

const shallowEqual = (col1, col2, path) => {
  if (path && (isArr.isArr(path) || isStr.isStr(path))) {
    col1 = get.get(col1, path);
    col2 = get.get(col2, path);
  }
  if (col1 === col2) return true;
  if (!col1 || !isColl.isColl(col1) || !col2 || !isColl.isColl(col2)) return false;
  if (Object.keys(col1).length !== Object.keys(col2).length) return false;
  for (const key in col1) if (col1[key] !== col2[key]) return false;
  return true;
};

exports.cleanColl = cleanColl;
exports.mapColl = mapColl;
exports.mapFind = mapFind;
exports.reduceColl = reduceColl;
exports.repeat = repeat;
exports.shallowEqual = shallowEqual;
exports.unset = unset;
//# sourceMappingURL=shallowEqual-eaf2262d.js.map
