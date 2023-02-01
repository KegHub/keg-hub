import { i as isFunc } from './isFunc-40ceeef8.js';

const deepFreeze = obj => {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).map(prop => {
    obj.hasOwnProperty(prop) && obj[prop] !== null && (typeof obj[prop] === 'object' || isFunc(obj[prop])) && !Object.isFrozen(obj[prop]) && deepFreeze(obj[prop]);
  });
  return obj;
};

const noOpObj = Object.freeze({});
const emptyObj = noOpObj;
const noPropObj = deepFreeze({
  content: {}
});
const noPropArr = deepFreeze([]);
const noOpArr = noPropArr;
const emptyArr = noPropArr;

export { noPropObj as a, noPropArr as b, noOpArr as c, emptyArr as d, emptyObj as e, deepFreeze as f, noOpObj as n };
//# sourceMappingURL=noOps-3942ab96.js.map
