import { i as isObj } from './isObj-2a71d1af.js';
import { i as isArr } from './isArr-a4420764.js';
import { i as isStr } from './isStr-481ce69b.js';
import { i as isNum } from './isNum-cc6ad9ca.js';

const typeOf = val => Object.prototype.toString.call(val).slice(8, -1);

const isEmpty = val => isObj(val) ? Object.keys(val).length === 0 : isArr(val) ? val.length === 0 : isStr(val) ? val.trim().length === 0 : isNum(val) ? val < 1 : false;

const isSame = (val1, val2) => val1 === val2 ? val1 !== 0 || 1 / val1 === 1 / val2 : val1 !== val1 && val2 !== val2;

const isValidDate = date => !isNaN((date instanceof Date && date || new Date(date)).getTime());

export { isSame as a, isValidDate as b, isEmpty as i, typeOf as t };
//# sourceMappingURL=isValidDate-76b2dc77.js.map
