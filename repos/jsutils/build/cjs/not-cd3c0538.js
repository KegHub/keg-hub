'use strict';

var isArr = require('./isArr-39234014.js');
var isValidDate = require('./isValidDate-813b9419.js');
var isFunc = require('./isFunc-f93803cb.js');
var isBool = require('./isBool-aa6af74e.js');
var toBool = require('./toBool-deb350e4.js');
var isColl = require('./isColl-5757310a.js');
var deepEqual = require('./deepEqual-adba847a.js');
var exists = require('./exists-c79204b1.js');
var isStr = require('./isStr-8a57710e.js');
var isNum = require('./isNum-c7164b50.js');
var isInt = require('./isInt-94ce4199.js');
var jsonEqual = require('./jsonEqual-7e69ef6a.js');
var isObj = require('./isObj-6b3aa807.js');
var isQuoted = require('./isQuoted-eb6994da.js');
var isValidUrl = require('./isValidUrl-a77135f0.js');

const isOrderable = x => isStr.isStr(x) || isNum.isNum(x) || isBool.isBool(x);

const identity = x => x;

const match = (matchArg, ...args) => {
  if (!args.length) return null;
  for (let entry of args) {
    if (!isArr.isArr(entry)) {
      console.error(`Matching case must be an entry (a 2-element array). Found: ${isValidDate.typeOf(entry)}`, entry);
      break;
    }
    const [caseValueOrPredicate, valueOnMatch] = entry;
    if (isFunc.isFunc(caseValueOrPredicate) && caseValueOrPredicate(matchArg)) return valueOnMatch;
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
not.bool = not(isBool.isBool);
not.strBool = not(toBool.isStrBool);
not.coll = not(isColl.isColl);
not.deepEqual = not(deepEqual.deepEqual);
not.emptyColl = not(deepEqual.isEmptyColl);
not.dom = not(hasDomAccess);
not.exists = not(exists.exists);
not.empty = not(isValidDate.isEmpty);
not.same = not(isValidDate.isSame);
not.validDate = not(isValidDate.isValidDate);
not.func = not(isFunc.isFunc);
not.identity = not(identity);
not.orderable = not(isOrderable);
not.equalsNaN = not(isNum.equalsNaN);
not.float = not(isInt.isFloat);
not.int = not(isInt.isInt);
not.num = not(isNum.isNum);
not.negative = not(isInt.isNegative);
not.positive = not(isInt.isPositive);
not.hasOwn = not(jsonEqual.hasOwn);
not.entry = not(jsonEqual.isEntry);
not.arrMap = not(jsonEqual.isArrMap);
not.obj = not(isObj.isObj);
not.jsonEqual = not(jsonEqual.jsonEqual);
not.regex = not(isRegex);
not.email = not(isQuoted.isEmail);
not.ip = not(isQuoted.isIp);
not.lowerCase = not(isQuoted.isLowerCase);
not.phone = not(isQuoted.isPhone);
not.quoted = not(isQuoted.isQuoted);
not.str = not(isStr.isStr);
not.upperCase = not(isQuoted.isUpperCase);
not.url = not(isQuoted.isUrl);
not.uuid = not(isQuoted.isUuid);
not.validUrl = not(isValidUrl.isValidUrl);

exports.identity = identity;
exports.isOrderable = isOrderable;
exports.isRegex = isRegex;
exports.match = match;
exports.not = not;
//# sourceMappingURL=not-cd3c0538.js.map
