import { i as isObj } from './isObj-2a71d1af.js';
import { i as isColl } from './isColl-15a1452b.js';
import { i as isFunc } from './isFunc-40ceeef8.js';
import { i as isArr } from './isArr-a4420764.js';
import { e as exists } from './exists-bf542cb8.js';
import { v as validate } from './validate-0a7295ee.js';
import { u as updateColl } from './set-e8f4486d.js';
import { d as deepClone } from './deepClone-1f6f3790.js';
import { i as isNum } from './isNum-cc6ad9ca.js';
import { g as get } from './get-b02e8c28.js';
import { i as isStr } from './isStr-481ce69b.js';

const cleanColl = (coll, recursive = true) => {
  return isColl(coll) ? Object.keys(coll).reduce((cleaned, key) => {
    const value = coll[key];
    if (value === null || value === undefined) return cleaned;
    cleaned[key] = recursive && isColl(value) ? cleanColl(value) : value;
    return cleaned;
  }, isObj(coll) && {} || []) : console.error(`cleanColl requires a collection as the first argument`) || coll;
};

const mapColl = (coll, cb) => isFunc(cb) && isColl(coll) ? Object.keys(coll).map(key => cb(key, coll[key], coll)) : isArr(coll) ? [] : {};

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
const mapFind = (coll, mapper, testFunc = exists) => {
  const [valid] = validate({
    coll,
    mapper,
    testFunc
  }, {
    coll: isColl,
    $default: isFunc
  });
  if (!valid) return undefined;
  return isObj(coll) ? mapFindObj(coll, mapper, testFunc) : mapFindArr(coll, mapper, testFunc);
};

const reduceColl = (coll, cb, reduce) => isFunc(cb) && isColl(coll) ? Object.keys(coll).reduce((data, key) => cb(key, coll[key], coll, data), reduce) : isArr(coll) ? [] : {};

const unset = (obj, path) => updateColl(obj, path, 'unset');

const repeat = (element, times, cloneDeep = false) => {
  if (!times || times <= 0) return [];
  if (!isNum(times)) {
    console.error('Times argument must be a number');
    return [];
  }
  const arr = [];
  for (let i = 0; i < times; i++) {
    const value = isFunc(element) ? element() : cloneDeep ? deepClone(element) : element;
    arr.push(value);
  }
  return arr;
};

const shallowEqual = (col1, col2, path) => {
  if (path && (isArr(path) || isStr(path))) {
    col1 = get(col1, path);
    col2 = get(col2, path);
  }
  if (col1 === col2) return true;
  if (!col1 || !isColl(col1) || !col2 || !isColl(col2)) return false;
  if (Object.keys(col1).length !== Object.keys(col2).length) return false;
  for (const key in col1) if (col1[key] !== col2[key]) return false;
  return true;
};

export { mapFind as a, repeat as b, cleanColl as c, mapColl as m, reduceColl as r, shallowEqual as s, unset as u };
//# sourceMappingURL=shallowEqual-655237cf.js.map
