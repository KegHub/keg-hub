'use strict';

var log = require('./log-37bbfac6.js');
var isObj = require('./isObj-6b3aa807.js');
var isFunc = require('./isFunc-f93803cb.js');
var deepClone = require('./deepClone-ae664a21.js');
var isArr = require('./isArr-39234014.js');
var isColl = require('./isColl-5757310a.js');
var set = require('./set-c0a98b21.js');
var jsonEqual = require('./jsonEqual-7e69ef6a.js');
var reduceObj = require('./reduceObj-f41cbf8d.js');
var sanitize = require('./sanitize-0a18302d.js');
var isStr = require('./isStr-8a57710e.js');
var strToType = require('./strToType-00c4481f.js');
var pipeline = require('./pipeline-e65bdaae.js');
var exists = require('./exists-c79204b1.js');
var toStr = require('./toStr-8e499966.js');
var ensureArr = require('./ensureArr-ae68c041.js');
var noOps = require('./noOps-b5f3c7e4.js');

const cloneJson = obj => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (e) {
    log.logData(e.message, 'error');
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

const eitherObj = (obj1, obj2) => isObj.isObj(obj1) && obj1 || obj2;

const deepMerge = (...sources) => {
  return sources.reduce((merged, source) => {
    const srcCopy = deepClone.deepClone(source);
    return isArr.isArr(srcCopy) ?
    [...(isArr.isArr(merged) && merged || []), ...srcCopy] :
    isObj.isObj(srcCopy) ?
    Object.entries(srcCopy).reduce((joined, [key, value]) => ({ ...joined,
      [key]: isFunc.isFunc(value) ? deepClone.cloneFunc(value) :
      isColl.isColl(value) && key in joined ?
      deepMerge(joined[key], value) :
      deepClone.deepClone(value)
    }), merged) :
    merged;
  }, isArr.isArr(sources[0]) && [] || {});
};

const applyToCloneOf = (obj, mutatorCb) => {
  let error;
  if (!obj) error = 'object (Argument 1) in applyToCloneOf, must be defined!';
  if (!isObj.isObj(obj)) error = 'object (Argument 1) in applyToCloneOf, must be an object!';
  if (!mutatorCb) error = 'mutator (Argument 2) in applyToCloneOf, must be defined!';
  if (!isFunc.isFunc(mutatorCb)) error = 'mutator (Argument 2) arg in applyToCloneOf, must be a function!';
  if (error) {
    console.warn(error);
    return obj;
  }
  const clone = deepClone.deepClone(obj);
  mutatorCb(clone);
  return clone;
};

const mapEntries = (obj, cb) => {
  if (!isArr.isArr(obj) && !isObj.isObj(obj)) {
    console.error(obj, `Expected array or object for obj. Found ${typeof obj}`);
    return obj;
  }
  if (!isFunc.isFunc(cb)) {
    console.error(`Expected function for cb. Found ${typeof cb}`);
    return obj;
  }
  const entries = Object.entries(obj);
  const initialValue = isArr.isArr(obj) ? [] : {};
  return entries.reduce((obj, [key, value]) => {
    const result = cb(key, value);
    if (!jsonEqual.isEntry(result)) {
      console.error(`Callback function must return entry. Found: ${result}. Using current entry instead.`);
      return set.set(obj, key, value);
    }
    return set.set(obj, result[0], result[1]);
  }, initialValue);
};

const mapKeys = (obj, keyMapper) => {
  if (!isObj.isObj(obj) || !isFunc.isFunc(keyMapper)) return obj;
  return mapEntries(obj, (key, value) => [keyMapper(key), value]);
};

const mapObj = (obj, cb) => {
  if (!isObj.isObj(obj)) return [];
  const entries = Object.entries(obj);
  return isFunc.isFunc(cb) ? entries.map(([key, value]) => cb(key, value)) : entries;
};

const omitKeys = (obj = {}, keys = []) => isObj.isObj(obj) && reduceObj.reduceObj(obj, (key, _, updated) => {
  keys.indexOf(key) === -1 && (updated[key] = obj[key]);
  return updated;
}, {}) || {};

const pickKeys = (obj = {}, keys = []) => isObj.isObj(obj) && keys.reduce((updated, key) => {
  key in obj && (updated[key] = obj[key]);
  return updated;
}, {}) || {};

const sanitizeCopy = obj => JSON.parse(sanitize.sanitize(JSON.stringify(obj)));

const trimStringFields = object => Object.entries(object).reduce((cleaned, [key, value]) => {
  cleaned[key] = isStr.isStr(value) ? value.trim() : value;
  return cleaned;
}, object);

const toObj = (val, divider, split) => {
  if (isArr.isArr(val)) return Object.keys(val).reduce((obj, key) => {
    obj[key] = val[key];
    return obj;
  }, {});
  if (!isStr.isStr(val)) return {};
  divider = divider || '=';
  split = split || '&';
  return val.toString().split(split).reduce((obj, item) => {
    const sep = item.split(divider);
    obj[sep[0].trim()] = strToType.strToType(sep[1].trim());
    return obj;
  }, {});
};

const keyMap = (arr, toUpperCase) => isArr.isArr(arr) && arr.reduce((obj, key) => {
  if (!isStr.isStr(key)) return obj;
  const use = toUpperCase && key.toUpperCase() || key;
  obj[use] = use;
  return obj;
}, {}) || {};

const everyEntry = (obj, predicate, logError = true) => {
  if (!isObj.isObj(obj)) {
    logError && console.error(`First argument ${obj} must be an object.`);
    return false;
  }
  if (!isFunc.isFunc(predicate)) {
    logError && console.error(`Second argument ${predicate}, must a function`);
    return false;
  }
  return pipeline.pipeline(obj, Object.entries, entries => entries.every(([key, value]) => predicate(key, value)));
};

const someEntry = (obj, predicate, logError = true) => {
  if (!isObj.isObj(obj)) {
    logError && console.error(`First argument ${obj} must be an object.`);
    return false;
  }
  if (!isFunc.isFunc(predicate)) {
    logError && console.error(`Second argument ${predicate}, must a function`);
    return false;
  }
  return pipeline.pipeline(obj, Object.entries, entries => entries.some(([key, value]) => predicate(key, value)));
};

const filterObj = (obj, predicate, logError = true) => {
  if (!isObj.isObj(obj)) {
    logError && console.error(`First argument ${obj} must be an object.`);
    return obj;
  }
  if (!isFunc.isFunc(predicate)) {
    logError && console.error(`Second argument ${predicate}, must a function`);
    return obj;
  }
  return reduceObj.reduceObj(obj, (key, value, data) => {
    if (predicate(key, value)) data[key] = value;
    return data;
  }, {});
};

const pad = (hash, len) => {
  while (hash.length < len) hash = '0' + hash;
  return hash;
};
const fold = (hash, text) => {
  if (text.length === 0) return hash;
  let i;
  let chr;
  let len;
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash < 0 ? hash * -2 : hash;
};
const foldObject = (hash, obj, seen) => {
  const foldKey = (hash, key) => foldValue(hash, obj[key], key, seen);
  return Object.keys(obj).sort().reduce(foldKey, hash);
};
const foldValue = (input, value, key, seen) => {
  const hash = fold(fold(fold(input, key), toString(value)), typeof value);
  if (value === null) return fold(hash, 'null');
  if (value === undefined) return fold(hash, 'undefined');
  if (typeof value === 'object' || typeof value === 'function') {
    if (seen.indexOf(value) !== -1) return fold(hash, '[Circular]' + key);
    seen.push(value);
    const objHash = foldObject(hash, value, seen);
    if (!('valueOf' in value) || typeof value.valueOf !== 'function') ;
    try {
      return fold(objHash, String(value.valueOf()));
    } catch (err) {
      return fold(objHash, '[valueOf exception]' + (err.stack || err.message));
    }
  }
  return fold(hash, value.toString());
};
const toString = obj => Object.prototype.toString.call(obj);
const hashObj = obj => pad(foldValue(0, obj, '', []).toString(16), 8);

const splitByKeys = (obj = {}, keys) => {
  if (!keys) return [{}, { ...obj
  }];
  const intersect = [{}, {}];
  const compareKeys = ensureArr.ensureArr(keys);
  return isObj.isObj(obj) ? reduceObj.reduceObj(obj, (key, _, updated) => {
    exists.exists(compareKeys.find(k => exists.exists(k) && toStr.toStr(k) === key)) ? updated[0][key] = obj[key] : updated[1][key] = obj[key];
    return updated;
  }, intersect) : intersect;
};

const transformKeys = (obj = noOps.emptyObj, keyMap = noOps.emptyObj, opts = noOps.emptyObj) => {
  const {
    strict = false
  } = opts;
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const ref = keyMap[key] || (!strict ? key : undefined);
    ref && (acc[ref] = value);
    return acc;
  }, {});
};

exports.applyToCloneOf = applyToCloneOf;
exports.clearObj = clearObj;
exports.cloneJson = cloneJson;
exports.deepMerge = deepMerge;
exports.eitherObj = eitherObj;
exports.everyEntry = everyEntry;
exports.filterObj = filterObj;
exports.hashObj = hashObj;
exports.keyMap = keyMap;
exports.mapEntries = mapEntries;
exports.mapKeys = mapKeys;
exports.mapObj = mapObj;
exports.omitKeys = omitKeys;
exports.pickKeys = pickKeys;
exports.sanitizeCopy = sanitizeCopy;
exports.someEntry = someEntry;
exports.splitByKeys = splitByKeys;
exports.toObj = toObj;
exports.transformKeys = transformKeys;
exports.trimStringFields = trimStringFields;
//# sourceMappingURL=transformKeys-574f796c.js.map
