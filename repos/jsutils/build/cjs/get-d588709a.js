'use strict';

var exists = require('./exists-c79204b1.js');
var isArr = require('./isArr-39234014.js');

const get = (obj, path, fallback) => {
  const parts = isArr.isArr(path) ? path : path.split('.');
  const result = parts.reduce((obj, prop) => {
    const type = typeof obj;
    if (type !== 'object' && type !== 'function') return undefined;
    prop = prop.startsWith('[') ? prop.replace(/\D/g, '') : prop;
    return obj[prop];
  }, obj);
  return exists.exists(result) ? result : fallback;
};

exports.get = get;
//# sourceMappingURL=get-d588709a.js.map
