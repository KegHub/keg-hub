import { isStr } from '@keg-hub/jsutils';

var cssUnits = ['px', 'vh', 'vw', 'rem', 'em', 'pic'];
var isCssUnits = function isCssUnits(item) {
  return isStr(item) && cssUnits.find(function (unit) {
    return item.includes(unit);
  });
};

export { isCssUnits };
//# sourceMappingURL=isCssUnits.js.map
