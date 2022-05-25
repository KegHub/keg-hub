import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { ItemHeader } from './itemHeader.js';
import { u as useClassList } from './useClassList-1d418045.js';
import '@keg-hub/re-theme';
import '@keg-hub/jsutils';
import './view-23665db9.js';
import './view.native-f56118b2.js';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';
import './button.js';
import './touchable.js';
import './text.js';
import './kegText-1ab95fab.js';
import './kegText.native-ba7d1c9c.js';
import './useTextAccessibility.js';
import './useTextStyles.js';
import './renderFromType.js';
import './isValidComponent.js';
import './getPressHandler.js';
import './getActiveOpacity.js';
import '@keg-hub/re-theme/colors';
import './useThemePath.js';
import './useThemeWithHeight.js';
import './useThemeTypeAsClass-1d2ed78d.js';
import './colors-6402d3b3.js';
import './icon-b6da5cf9.js';
import './caption.js';
import './h1.js';
import './h2.js';
import './h3.js';
import './h4.js';
import './h5.js';
import './h6.js';
import './label.js';
import './p.js';
import './subtitle.js';
import './getPlatform-95568099.js';
import './useAccessibilityRole.js';

var _excluded = ["className"];
var AppHeader = function AppHeader(props) {
  var className = props.className,
      otherProps = _objectWithoutProperties(props, _excluded);
  return React__default.createElement(ItemHeader, _extends({
    accessibilityRole: "banner",
    className: useClassList('keg-app-header', className),
    appHeader: true
  }, otherProps));
};

export { AppHeader };
//# sourceMappingURL=appHeader.js.map
