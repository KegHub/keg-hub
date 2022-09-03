import { i as isNum } from './isNum-cc6ad9ca.js';

const isNegative = x => isNum(x) && x < 0;

const isPositive = x => isNum(x) && x > 0;

const isFloat = val => isNum(val) && val % 1 !== 0;

const isInt = val => isNum(val) && val % 1 === 0;

export { isPositive as a, isFloat as b, isInt as c, isNegative as i };
//# sourceMappingURL=isInt-096f1765.js.map
