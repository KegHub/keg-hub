import { i as isStr } from './isStr-481ce69b.js';
import { i as isNum } from './isNum-cc6ad9ca.js';
import { i as isArr } from './isArr-a4420764.js';
import { i as isObj } from './isObj-2a71d1af.js';
import { t as toBool } from './toBool-8f49e620.js';

const hasOwn = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

const isEntry = maybeEntry => isArr(maybeEntry) && maybeEntry.length === 2 && (isNum(maybeEntry[0]) || isStr(maybeEntry[0]));

const isArrMap = obj => {
  if (!isObj(obj)) return false;
  const values = Object.values(obj);
  return toBool(values.length && values.every(isArr));
};

const jsonEqual = (one, two) => {
  try {
    return JSON.stringify(one) === JSON.stringify(two);
  } catch (e) {
    return false;
  }
};

export { isArrMap as a, hasOwn as h, isEntry as i, jsonEqual as j };
//# sourceMappingURL=jsonEqual-911fc3f9.js.map
