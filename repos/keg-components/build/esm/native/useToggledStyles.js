import { useMemo } from 'react';
import { deepMerge, noOpObj } from '@keg-hub/jsutils';

var useToggledStyles = function useToggledStyles(toggled) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noOpObj;
  var openKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'open';
  var closedKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'closed';
  return useMemo(function () {
    var toggleStyles = toggled ? styles[openKey] : styles[closedKey];
    return deepMerge(styles.default || styles, toggleStyles);
  }, [toggled, styles]);
};

export { useToggledStyles };
//# sourceMappingURL=useToggledStyles.js.map
