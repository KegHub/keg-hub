import { i as isArr } from './isArr-a4420764.js';
import { t as typeOf, i as isEmpty, a as isSame, b as isValidDate } from './isValidDate-76b2dc77.js';
import { i as isFunc } from './isFunc-40ceeef8.js';
import { i as isBool } from './isBool-4d844d9e.js';
import { i as isStrBool } from './toBool-8f49e620.js';
import { i as isColl } from './isColl-15a1452b.js';
import { d as deepEqual, i as isEmptyColl } from './deepEqual-e89b5815.js';
import { e as exists } from './exists-bf542cb8.js';
import { i as isStr } from './isStr-481ce69b.js';
import { i as isNum, e as equalsNaN } from './isNum-cc6ad9ca.js';
import { b as isFloat, c as isInt, i as isNegative, a as isPositive } from './isInt-096f1765.js';
import { h as hasOwn, i as isEntry, a as isArrMap, j as jsonEqual } from './jsonEqual-911fc3f9.js';
import { i as isObj } from './isObj-2a71d1af.js';
import { i as isEmail, a as isIp, h as isLowerCase, d as isPhone, j as isQuoted, g as isUpperCase, e as isUrl, f as isUuid } from './isQuoted-877344c4.js';
import { i as isValidUrl } from './isValidUrl-18654cdf.js';

const isOrderable = x => isStr(x) || isNum(x) || isBool(x);

const identity = x => x;

const match = (matchArg, ...args) => {
  if (!args.length) return null;
  for (let entry of args) {
    if (!isArr(entry)) {
      console.error(`Matching case must be an entry (a 2-element array). Found: ${typeOf(entry)}`, entry);
      break;
    }
    const [caseValueOrPredicate, valueOnMatch] = entry;
    if (isFunc(caseValueOrPredicate) && caseValueOrPredicate(matchArg)) return valueOnMatch;
    if (caseValueOrPredicate === matchArg) return valueOnMatch;
  }
  return null;
};
match.default = () => true;

const hasDomAccess = () => {
  try {
    return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  } catch (error) {
    return false;
  }
};

const isRegex = val => Boolean(val && val instanceof RegExp);

const not = func => {
  return (...args) => !func.apply(null, args);
};
not.bool = not(isBool);
not.strBool = not(isStrBool);
not.coll = not(isColl);
not.deepEqual = not(deepEqual);
not.emptyColl = not(isEmptyColl);
not.dom = not(hasDomAccess);
not.exists = not(exists);
not.empty = not(isEmpty);
not.same = not(isSame);
not.validDate = not(isValidDate);
not.func = not(isFunc);
not.identity = not(identity);
not.orderable = not(isOrderable);
not.equalsNaN = not(equalsNaN);
not.float = not(isFloat);
not.int = not(isInt);
not.num = not(isNum);
not.negative = not(isNegative);
not.positive = not(isPositive);
not.hasOwn = not(hasOwn);
not.entry = not(isEntry);
not.arrMap = not(isArrMap);
not.obj = not(isObj);
not.jsonEqual = not(jsonEqual);
not.regex = not(isRegex);
not.email = not(isEmail);
not.ip = not(isIp);
not.lowerCase = not(isLowerCase);
not.phone = not(isPhone);
not.quoted = not(isQuoted);
not.str = not(isStr);
not.upperCase = not(isUpperCase);
not.url = not(isUrl);
not.uuid = not(isUuid);
not.validUrl = not(isValidUrl);

export { identity as a, isRegex as b, hasDomAccess as h, isOrderable as i, match as m, not as n };
//# sourceMappingURL=not-abeaf606.js.map
