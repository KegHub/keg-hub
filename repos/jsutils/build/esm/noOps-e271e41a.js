import { d as deepFreeze } from './deepFreeze-0437aacd.js';

const noOpObj = Object.freeze({});
const noPropObj = deepFreeze({
  content: {}
});
const noPropArr = deepFreeze([]);
const noOpArr = noPropArr;
const emptyArr = noPropArr;

export { noPropObj as a, noPropArr as b, noOpArr as c, emptyArr as e, noOpObj as n };
//# sourceMappingURL=noOps-e271e41a.js.map
