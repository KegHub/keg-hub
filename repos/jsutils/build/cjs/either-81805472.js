'use strict';

var softFalsy = require('./softFalsy-3d7ead1c.js');
var isFunc = require('./isFunc-f93803cb.js');

const either = (val1, val2, check) => !isFunc.isFunc(check) ? softFalsy.softFalsy(val1) && val1 || val2 : check(val1, val2) && val1 || val2;

exports.either = either;
//# sourceMappingURL=either-81805472.js.map
