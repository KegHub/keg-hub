import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { withTheme } from '@keg-hub/re-theme';
import { V as View } from './view-86879139.js';
import { u as useClassList } from './useClassList-1d418045.js';
import './view.native-f56118b2.js';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import '@keg-hub/jsutils';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';

var _excluded = ["className", "theme", "children", "style", "type"];
var Section = withTheme(function (props) {
  var className = props.className,
      theme = props.theme,
      children = props.children,
      style = props.style,
      type = props.type,
      args = _objectWithoutProperties(props, _excluded);
  return React__default.createElement(View, _extends({}, args, {
    className: useClassList('keg-section', className),
    accessibilityRole: "region",
    style: theme.get("section.default", type && "section.".concat(type), style)
  }), children);
});

export { Section };
//# sourceMappingURL=section.js.map
