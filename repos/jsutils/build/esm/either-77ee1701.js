import { s as softFalsy } from './softFalsy-b9d5bbac.js';
import { i as isFunc } from './isFunc-40ceeef8.js';

const either = (val1, val2, check) => !isFunc(check) ? softFalsy(val1) && val1 || val2 : check(val1, val2) && val1 || val2;

export { either as e };
//# sourceMappingURL=either-77ee1701.js.map
