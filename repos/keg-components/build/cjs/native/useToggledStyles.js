'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var jsutils = require('@keg-hub/jsutils');

var useToggledStyles = function useToggledStyles(toggled) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : jsutils.noOpObj;
  var openKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'open';
  var closedKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'closed';
  return React.useMemo(function () {
    var toggleStyles = toggled ? styles[openKey] : styles[closedKey];
    return jsutils.deepMerge(styles.default || styles, toggleStyles);
  }, [toggled, styles]);
};

exports.useToggledStyles = useToggledStyles;
//# sourceMappingURL=useToggledStyles.js.map
