import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { useStyle } from '@keg-hub/re-theme';
import { V as View } from './view-23665db9.js';
import { u as useClassList } from './useClassList-1d418045.js';
import { useAccessibilityRole } from './useAccessibilityRole.js';
import '@keg-hub/jsutils';
import '@keg-hub/re-theme/colors';
import './useThemeWithHeight.js';
import 'react-native-web';
import './view.native-f56118b2.js';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';
import './getPlatform-95568099.js';
import './useThemePath.js';

var _excluded = ["className", "style"];
var Divider = React__default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);
  var dividerStyle = useStyle('divider');
  var accessibilityRoleObj = useAccessibilityRole('separator');
  return React__default.createElement(View, _extends({
    ref: ref,
    className: useClassList('keg-divider', className)
  }, props, {
    style: [dividerStyle, style]
  }, accessibilityRoleObj));
});

export { Divider };
//# sourceMappingURL=divider.js.map
