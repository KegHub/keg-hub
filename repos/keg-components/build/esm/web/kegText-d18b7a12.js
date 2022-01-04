import { e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { capitalize } from '@keg-hub/jsutils';
import { K as KegText$1 } from './kegText.native-ba7d1c9c.js';
import { StyleInjector } from '@keg-hub/re-theme/styleInjector';
import { useTextStyles } from './useTextStyles.js';

var KegText = function KegText(element) {
  var Text = StyleInjector(KegText$1(element), {
    className: "keg-".concat(element),
    displayName: capitalize(element)
  });
  return React__default.forwardRef(function (props, ref) {
    var textStyles = useTextStyles(element);
    return React__default.createElement(Text, _extends({}, props, {
      style: [textStyles, props.style],
      ref: ref
    }));
  });
};

export { KegText as K };
//# sourceMappingURL=kegText-d18b7a12.js.map
