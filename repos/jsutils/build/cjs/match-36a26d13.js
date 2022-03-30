'use strict';

var isArr = require('./isArr-39234014.js');
var typeOf = require('./typeOf-51fe5771.js');
var isFunc = require('./isFunc-f93803cb.js');

const match = (matchArg, ...args) => {
  if (!args.length) return null;
  for (let entry of args) {
    if (!isArr.isArr(entry)) {
      console.error(`Matching case must be an entry (a 2-element array). Found: ${typeOf.typeOf(entry)}`, entry);
      break;
    }
    const [caseValueOrPredicate, valueOnMatch] = entry;
    if (isFunc.isFunc(caseValueOrPredicate) && caseValueOrPredicate(matchArg)) return valueOnMatch;
    if (caseValueOrPredicate === matchArg) return valueOnMatch;
  }
  return null;
};
match.default = () => true;

exports.match = match;
//# sourceMappingURL=match-36a26d13.js.map
