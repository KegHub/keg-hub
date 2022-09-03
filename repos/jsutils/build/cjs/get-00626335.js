'use strict';

var exists = require('./exists-c79204b1.js');
var isArr = require('./isArr-39234014.js');
var isStr = require('./isStr-8a57710e.js');

const get = (obj, path, fallback) => {
  const isPathArr = isArr.isArr(path);
  if (!isStr.isStr(path) && !isPathArr) return exists.exists(fallback) ? fallback : undefined;
  const parts = isPathArr ? path : path.split('.');
  const result = parts.reduce((obj, prop) => {
    const type = typeof obj;
    if (!exists.exists(obj) || type !== 'object' && type !== 'function') return undefined;
    prop = prop.startsWith('[') ? prop.replace(/\D/g, '') : prop;
    return obj[prop];
  }, obj);
  return exists.exists(result) ? result : fallback;
};

exports.get = get;
//# sourceMappingURL=get-00626335.js.map
