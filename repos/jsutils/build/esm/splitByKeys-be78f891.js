import { l as logData } from './log-8543c007.js';
import { i as isObj } from './isObj-2a71d1af.js';
import { i as isFunc } from './isFunc-40ceeef8.js';
import { d as deepClone, a as cloneFunc } from './deepClone-06f4b810.js';
import { i as isArr } from './isArr-a4420764.js';
import { i as isColl } from './isColl-15a1452b.js';
import { s as set } from './set-e8f4486d.js';
import { i as isEntry } from './jsonEqual-911fc3f9.js';
import { r as reduceObj } from './reduceObj-efaed709.js';
import { s as sanitize } from './sanitize-2f5be6f2.js';
import { i as isStr } from './isStr-481ce69b.js';
import { s as strToType } from './strToType-a1482d08.js';
import { p as pipeline } from './pipeline-e3f70bbe.js';
import { e as exists } from './exists-bf542cb8.js';
import { t as toStr } from './toStr-0e5fe94c.js';
import { e as ensureArr } from './ensureArr-d2e17773.js';

const cloneJson = obj => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    logData(e.message, 'error');
    return null;
  }
};

const clearObj = (obj, filter) => {
  obj && Object.entries(obj).map(([key, value]) => {
    if (filter && filter.indexOf(key) !== -1) return;
    if (typeof value === 'object') clearObj(value);
    obj[key] = undefined;
    delete obj[key];
  });
};

const eitherObj = (obj1, obj2) => isObj(obj1) && obj1 || obj2;

const deepMerge = (...sources) => {
  return sources.reduce((merged, source) => {
    const srcCopy = deepClone(source);
    return isArr(srcCopy) ?
    [...(isArr(merged) && merged || []), ...srcCopy] :
    isObj(srcCopy) ?
    Object.entries(srcCopy).reduce((joined, [key, value]) => ({ ...joined,
      [key]: isFunc(value) ? cloneFunc(value) :
      isColl(value) && key in joined ?
      deepMerge(joined[key], value) :
      deepClone(value)
    }), merged) :
    merged;
  }, isArr(sources[0]) && [] || {});
};

const applyToCloneOf = (obj, mutatorCb) => {
  let error;
  if (!obj) error = 'object (Argument 1) in applyToCloneOf, must be defined!';
  if (!isObj(obj)) error = 'object (Argument 1) in applyToCloneOf, must be an object!';
  if (!mutatorCb) error = 'mutator (Argument 2) in applyToCloneOf, must be defined!';
  if (!isFunc(mutatorCb)) error = 'mutator (Argument 2) arg in applyToCloneOf, must be a function!';
  if (error) {
    console.warn(error);
    return obj;
  }
  const clone = deepClone(obj);
  mutatorCb(clone);
  return clone;
};

const mapEntries = (obj, cb) => {
  if (!isArr(obj) && !isObj(obj)) {
    console.error(obj, `Expected array or object for obj. Found ${typeof obj}`);
    return obj;
  }
  if (!isFunc(cb)) {
    console.error(`Expected function for cb. Found ${typeof cb}`);
    return obj;
  }
  const entries = Object.entries(obj);
  const initialValue = isArr(obj) ? [] : {};
  return entries.reduce((obj, [key, value]) => {
    const result = cb(key, value);
    if (!isEntry(result)) {
      console.error(`Callback function must return entry. Found: ${result}. Using current entry instead.`);
      return set(obj, key, value);
    }
    return set(obj, result[0], result[1]);
  }, initialValue);
};

const mapKeys = (obj, keyMapper) => {
  if (!isObj(obj) || !isFunc(keyMapper)) return obj;
  return mapEntries(obj, (key, value) => [keyMapper(key), value]);
};

const mapObj = (obj, cb) => {
  if (!isObj(obj)) return [];
  const entries = Object.entries(obj);
  return isFunc(cb) ? entries.map(([key, value]) => cb(key, value)) : entries;
};

const omitKeys = (obj = {}, keys = []) => isObj(obj) && reduceObj(obj, (key, _, updated) => {
  keys.indexOf(key) === -1 && (updated[key] = obj[key]);
  return updated;
}, {}) || {};

const pickKeys = (obj = {}, keys = []) => isObj(obj) && keys.reduce((updated, key) => {
  key in obj && (updated[key] = obj[key]);
  return updated;
}, {}) || {};

const sanitizeCopy = obj => JSON.parse(sanitize(JSON.stringify(obj)));

const trimStringFields = object => Object.entries(object).reduce((cleaned, [key, value]) => {
  cleaned[key] = isStr(value) ? value.trim() : value;
  return cleaned;
}, object);

const toObj = (val, divider, split) => {
  if (isArr(val)) return Object.keys(val).reduce((obj, key) => {
    obj[key] = val[key];
    return obj;
  }, {});
  if (!isStr(val)) return {};
  divider = divider || '=';
  split = split || '&';
  return val.toString().split(split).reduce((obj, item) => {
    const sep = item.split(divider);
    obj[sep[0].trim()] = strToType(sep[1].trim());
    return obj;
  }, {});
};

const keyMap = (arr, toUpperCase) => isArr(arr) && arr.reduce((obj, key) => {
  if (!isStr(key)) return obj;
  const use = toUpperCase && key.toUpperCase() || key;
  obj[use] = use;
  return obj;
}, {}) || {};

const everyEntry = (obj, predicate, logError = true) => {
  if (!isObj(obj)) {
    logError && console.error(`First argument ${obj} must be an object.`);
    return false;
  }
  if (!isFunc(predicate)) {
    logError && console.error(`Second argument ${predicate}, must a function`);
    return false;
  }
  return pipeline(obj, Object.entries, entries => entries.every(([key, value]) => predicate(key, value)));
};

const someEntry = (obj, predicate, logError = true) => {
  if (!isObj(obj)) {
    logError && console.error(`First argument ${obj} must be an object.`);
    return false;
  }
  if (!isFunc(predicate)) {
    logError && console.error(`Second argument ${predicate}, must a function`);
    return false;
  }
  return pipeline(obj, Object.entries, entries => entries.some(([key, value]) => predicate(key, value)));
};

const filterObj = (obj, predicate, logError = true) => {
  if (!isObj(obj)) {
    logError && console.error(`First argument ${obj} must be an object.`);
    return obj;
  }
  if (!isFunc(predicate)) {
    logError && console.error(`Second argument ${predicate}, must a function`);
    return obj;
  }
  return reduceObj(obj, (key, value, data) => {
    if (predicate(key, value)) data[key] = value;
    return data;
  }, {});
};

const splitByKeys = (obj = {}, keys) => {
  if (!keys) return [{}, { ...obj
  }];
  const intersect = [{}, {}];
  const compareKeys = ensureArr(keys);
  return isObj(obj) ? reduceObj(obj, (key, _, updated) => {
    exists(compareKeys.find(k => exists(k) && toStr(k) === key)) ? updated[0][key] = obj[key] : updated[1][key] = obj[key];
    return updated;
  }, intersect) : intersect;
};

export { clearObj as a, applyToCloneOf as b, cloneJson as c, deepMerge as d, eitherObj as e, mapKeys as f, mapObj as g, toObj as h, everyEntry as i, someEntry as j, keyMap as k, filterObj as l, mapEntries as m, splitByKeys as n, omitKeys as o, pickKeys as p, sanitizeCopy as s, trimStringFields as t };
//# sourceMappingURL=splitByKeys-be78f891.js.map
