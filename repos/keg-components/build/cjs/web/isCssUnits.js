'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsutils = require('@keg-hub/jsutils');

var cssUnits = ['px', 'vh', 'vw', 'rem', 'em', 'pic'];
var isCssUnits = function isCssUnits(item) {
  return jsutils.isStr(item) && cssUnits.find(function (unit) {
    return item.includes(unit);
  });
};

exports.isCssUnits = isCssUnits;
//# sourceMappingURL=isCssUnits.js.map
