import { i as isFunc } from './isFunc-40ceeef8.js';
import { i as isArr } from './isArr-a4420764.js';
import { i as isColl } from './isColl-15a1452b.js';

const updateColl = (obj, path, type, val) => {
  const org = obj;
  if (!isColl(obj) || !obj || !path) return type !== 'set' && val || undefined;
  const parts = isArr(path) ? Array.from(path) : path.split('.');
  const key = parts.pop();
  let prop;
  let breakPath;
  while (prop = parts.shift()) {
    const next = obj[prop];
    isColl(next) || isFunc(next) ? obj = next : (() => {
      if (type === 'set') obj[prop] = {};else breakPath = true;
      obj = obj[prop];
    })();
    if (breakPath) return val;
  }
  return type === 'get' ?
  key in obj ? obj[key] : val : type === 'unset' ?
  delete obj[key] :
  (obj[key] = val) && org || org;
};

const set = (obj, path, val) => {
  updateColl(obj, path, 'set', val);
  return obj;
};

export { set as s, updateColl as u };
//# sourceMappingURL=set-5b974590.js.map
