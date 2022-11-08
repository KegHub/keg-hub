export { a as areCountMapsEqual, c as areFrequencyEqual, d as areSetEqual, b as buildElementCountMap, e as cloneArr, f as eitherArr, i as findExtrema, j as findMax, k as findMin, g as flatArr, h as flatMap, n as flatUnion, o as omitRange, r as randomArr, l as randomizeArr, m as uniqArr, u as uniqArrByReference } from './flatUnion-fbe380d3.js';
export { e as ensureArr } from './ensureArr-d2e17773.js';
export { i as isArr } from './isArr-a4420764.js';
export { i as isBool } from './isBool-4d844d9e.js';
export { c as convertToStrBool, i as isStrBool, t as toBool } from './toBool-8f49e620.js';
export { s as softFalsy } from './softFalsy-b9d5bbac.js';
export { c as cleanColl, m as mapColl, a as mapFind, r as reduceColl, b as repeat, s as shallowEqual, u as unset } from './shallowEqual-fd91229d.js';
export { g as get } from './get-2e0bc293.js';
export { i as isColl } from './isColl-15a1452b.js';
export { d as deepEqual, i as isEmptyColl } from './deepEqual-e89b5815.js';
export { s as set } from './set-5b974590.js';
export { a as cloneFunc, c as cloneObjWithPrototypeAndProperties, d as deepClone } from './deepClone-06f4b810.js';
export { h as hasDomAccess, a as identity, h as isDom, i as isOrderable, b as isRegex, m as match, n as not } from './not-abeaf606.js';
export { e as either } from './either-77ee1701.js';
export { e as emptyArr, c as noOpArr, n as noOpObj, b as noPropArr, a as noPropObj } from './noOps-e271e41a.js';
export { i as isEmpty, a as isSame, b as isValidDate, t as typeOf } from './isValidDate-76b2dc77.js';
export { s as strToType } from './strToType-a1482d08.js';
export { e as exists } from './exists-bf542cb8.js';
export { l as logData, r as resetLogs, s as setLogs } from './log-8543c007.js';
export { a as applyToFunc, p as pipeline } from './pipeline-e3f70bbe.js';
export { c as checkCall, a as complement, d as debounce, b as doIt, e as eitherFunc, l as limbo, h as limboify, m as memorize, n as noOp, p as parseErrorMessage, r as runSeq, s as stackTracePaths, f as throttle, g as throttleLast, t as timedRun, u as uuid } from './stackTracePaths-753bb480.js';
export { c as compareTo } from './compareTo-22fdd98a.js';
export { i as isFunc } from './isFunc-40ceeef8.js';
export { i as isNonNegative } from './isNonNegative-76ec0014.js';
export { b as isFloat, c as isInt, i as isNegative, a as isPositive } from './isInt-096f1765.js';
export { e as equalsNaN, i as isNum } from './isNum-cc6ad9ca.js';
export { g as getNums, t as toNum } from './toNum-537197a6.js';
export { m as mod, n as nth, t as toFloat, a as toInt } from './mod-9d1b2cfb.js';
export { b as applyToCloneOf, a as clearObj, c as cloneJson, d as deepMerge, e as eitherObj, i as everyEntry, l as filterObj, k as keyMap, m as mapEntries, f as mapKeys, g as mapObj, o as omitKeys, p as pickKeys, s as sanitizeCopy, j as someEntry, n as splitByKeys, h as toObj, t as trimStringFields } from './splitByKeys-e8bc4b47.js';
export { d as deepFreeze } from './deepFreeze-0437aacd.js';
export { h as hasOwn, a as isArrMap, i as isEntry, j as jsonEqual } from './jsonEqual-911fc3f9.js';
export { i as isObj } from './isObj-2a71d1af.js';
export { r as reduceObj } from './reduceObj-efaed709.js';
export { p as promisify, a as promisifyAll, w as wait } from './wait-26c5e7c6.js';
export { g as getRegexSource, j as joinRegex } from './joinRegex-114cd3b7.js';
export { b as buildPath, c as camelCase, f as camelCasePath, e as capitalize, a as cleanStr, g as containsStr, d as delimitString, h as eitherStr, z as getNearestDelimiterIndex, y as getWordEndingAt, A as getWordStartingAt, j as hashString, i as hyphenator, m as mapString, p as parseJSON, k as plural, r as removeDot, x as reverseStr, l as singular, s as snakeCase, o as spaceJoin, n as styleCase, u as template, q as templateRx, t as trainCase, v as validFilename, w as wordCaps } from './getWordEndingAt-e4dc0e45.js';
export { i as isEmail, a as isIp, b as isIp4, c as isIp6, h as isLowerCase, d as isPhone, j as isQuoted, g as isUpperCase, e as isUrl, f as isUuid } from './isQuoted-877344c4.js';
export { i as isStr } from './isStr-481ce69b.js';
export { s as sanitize } from './sanitize-2f5be6f2.js';
export { t as toStr } from './toStr-0e5fe94c.js';
export { v as validate } from './validate-0a7295ee.js';
export { g as getURLParam, o as objToQuery, q as queryToObj } from './getURLParam-94ea59c0.js';
export { i as isValidUrl } from './isValidUrl-18654cdf.js';

const formatCls = classes => classes.filter(item => typeof item === 'string' && Boolean(item)).join(` `).trim();
const cls = (...classGroup) => {
  return formatCls(classGroup.map(classes => {
    return Array.isArray(classes) ? cls(...classes) : typeof classes !== `object` ? formatCls([classes]) : formatCls(Object.entries(classes).map(([item, val]) => {
      return typeof val === 'boolean' ? val && formatCls([item]) : cls(val);
    }));
  }));
};

export { cls };
//# sourceMappingURL=index.js.map
