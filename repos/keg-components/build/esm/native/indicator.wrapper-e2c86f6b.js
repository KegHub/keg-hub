import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { V as View } from './view.native-16eca0a6.js';
import '@keg-hub/jsutils';
import '@keg-hub/re-theme/colors';
import { useThemePath } from './useThemePath.js';
import './useThemeWithHeight.js';
import 'react-native';

var _excluded = ["alt", "isWeb", "styles", "Element", "themePath", "resizeMode", "type"];
var IndicatorWrapper = function IndicatorWrapper(props) {
  var alt = props.alt;
      props.isWeb;
      var styles = props.styles,
      Element = props.Element,
      themePath = props.themePath,
      resizeMode = props.resizeMode,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      elProps = _objectWithoutProperties(props, _excluded);
  var builtStyles = useThemePath(themePath || "indicator.".concat(type), styles);
  return React__default.createElement(View, {
    style: builtStyles.container
  }, React__default.createElement(Element, _extends({}, elProps, {
    alt: alt || 'Loading',
    style: builtStyles.icon,
    resizeMode: resizeMode || 'contain'
  })));
};

export { IndicatorWrapper as I };
//# sourceMappingURL=indicator.wrapper-e2c86f6b.js.map
