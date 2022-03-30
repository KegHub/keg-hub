import { d as deepFreeze } from './deepFreeze-0437aacd.js';

const noOpObj = Object.freeze({});
const noPropObj = deepFreeze({
  content: {}
});
const noPropArr = deepFreeze([]);
const noOpArr = noPropArr;

export { noPropObj as a, noPropArr as b, noOpArr as c, noOpObj as n };
//# sourceMappingURL=noOps-e78de2aa.js.map
