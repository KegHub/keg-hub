'use strict';

var isNum = require('./isNum-c7164b50.js');

const isNegative = x => isNum.isNum(x) && x < 0;

const isPositive = x => isNum.isNum(x) && x > 0;

const isFloat = val => isNum.isNum(val) && val % 1 !== 0;

const isInt = val => isNum.isNum(val) && val % 1 === 0;

exports.isFloat = isFloat;
exports.isInt = isInt;
exports.isNegative = isNegative;
exports.isPositive = isPositive;
//# sourceMappingURL=isInt-94ce4199.js.map
