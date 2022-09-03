import { e as exists } from './exists-bf542cb8.js';
import { i as isArr } from './isArr-a4420764.js';
import { i as isStr } from './isStr-481ce69b.js';

const get = (obj, path, fallback) => {
  const isPathArr = isArr(path);
  if (!isStr(path) && !isPathArr) return exists(fallback) ? fallback : undefined;
  const parts = isPathArr ? path : path.split('.');
  const result = parts.reduce((obj, prop) => {
    const type = typeof obj;
    if (!exists(obj) || type !== 'object' && type !== 'function') return undefined;
    prop = prop.startsWith('[') ? prop.replace(/\D/g, '') : prop;
    return obj[prop];
  }, obj);
  return exists(result) ? result : fallback;
};

export { get as g };
//# sourceMappingURL=get-2e0bc293.js.map
