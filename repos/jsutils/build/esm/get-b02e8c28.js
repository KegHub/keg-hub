import { e as exists } from './exists-bf542cb8.js';
import { i as isArr } from './isArr-a4420764.js';

const get = (obj, path, fallback) => {
  const parts = isArr(path) ? path : path.split('.');
  const result = parts.reduce((obj, prop) => {
    const type = typeof obj;
    if (type !== 'object' && type !== 'function') return undefined;
    prop = prop.startsWith('[') ? prop.replace(/\D/g, '') : prop;
    return obj[prop];
  }, obj);
  return exists(result) ? result : fallback;
};

export { get as g };
//# sourceMappingURL=get-b02e8c28.js.map
