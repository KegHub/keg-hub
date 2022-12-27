import { d as deepFreeze } from './deepFreeze-0437aacd.js';

const noOpObj = Object.freeze({});
const emptyObj = noOpObj;
const noPropObj = deepFreeze({
  content: {}
});
const noPropArr = deepFreeze([]);
const noOpArr = noPropArr;
const emptyArr = noPropArr;

export { noPropObj as a, noPropArr as b, noOpArr as c, emptyArr as d, emptyObj as e, noOpObj as n };
//# sourceMappingURL=noOps-da760e7c.js.map
