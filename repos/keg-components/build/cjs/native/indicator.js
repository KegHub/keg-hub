'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var reactNative = require('react-native');
var indicator_wrapper = require('./indicator.wrapper-f4b58c20.js');
var view_native = require('./view.native-6338852a.js');
var getPlatform = require('./getPlatform-24228c6c.js');
var useClassList_native = require('./useClassList.native-9e7810c9.js');
require('@keg-hub/jsutils');
require('@keg-hub/re-theme/colors');
require('./useThemePath.js');
require('@keg-hub/re-theme');
require('./useThemeWithHeight.js');
require('./useClassName.native-3d1a229b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["className", "style", "size", "color"],
    _excluded2 = ["alt", "size", "color", "styles"];
var isWeb = getPlatform.getPlatform() === 'web';
var Element = function Element(_ref) {
  _ref.className;
      var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      size = _ref.size,
      color = _ref.color;
      _rollupPluginBabelHelpers._objectWithoutProperties(_ref, _excluded);
  return React__default["default"].createElement(view_native.View, {
    className: useClassList_native.useClassList()
  }, React__default["default"].createElement(reactNative.ActivityIndicator, {
    size: size,
    color: color || style.color
  }));
};
var Indicator = function Indicator(_ref2) {
  var alt = _ref2.alt,
      size = _ref2.size,
      color = _ref2.color,
      styles = _ref2.styles,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref2, _excluded2);
  return React__default["default"].createElement(indicator_wrapper.IndicatorWrapper, _rollupPluginBabelHelpers._extends({}, props, {
    color: color,
    isWeb: isWeb,
    styles: styles,
    Element: Element,
    alt: alt || 'Loading',
    size: ['large', 'small'].includes(size) ? size : 'large'
  }));
};

exports.Indicator = Indicator;
//# sourceMappingURL=indicator.js.map
