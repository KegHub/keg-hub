'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var view_native = require('./view.native-6338852a.js');
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var reactNative = require('react-native');
var indicator_wrapper = require('./indicator.wrapper-f4b58c20.js');
var getPlatform = require('./getPlatform-24228c6c.js');
var useClassList_native = require('./useClassList.native-9e7810c9.js');
var text = require('./text.js');
require('@keg-hub/jsutils');
var isValidComponent = require('./isValidComponent.js');
require('@keg-hub/re-theme/colors');
var useThemePath = require('./useThemePath.js');
require('./useThemeWithHeight.js');
require('./useClassName.native-3d1a229b.js');
require('./kegText-d4479e6a.js');
require('./kegText.js');
require('./useTextAccessibility.js');
require('@keg-hub/re-theme/styleInjector');
require('./useTextStyles.js');
require('@keg-hub/re-theme');

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

var Progress = function Progress(props) {
  var styles = props.styles,
      text$1 = props.text,
      loadIndicator = props.loadIndicator,
      type = props.type,
      size = props.size,
      color = props.color;
  var LoadingIndicator = loadIndicator || Indicator;
  return React__default["default"].createElement(view_native.View, {
    style: styles.progress,
    className: "keg-progress"
  }, isValidComponent.isValidComponent(LoadingIndicator) ? React__default["default"].createElement(LoadingIndicator, {
    type: type,
    size: size,
    color: color,
    styles: styles.indicator,
    className: 'keg-loading-indicator'
  }) : text$1 && React__default["default"].createElement(text.Text, {
    className: "keg-progress-text",
    style: styles.text
  }, text$1));
};
var Loading = function Loading(props) {
  var size = props.size,
      color = props.color,
      styles = props.styles,
      children = props.children,
      themePath = props.themePath;
      props.className;
      var indicator = props.indicator,
      _props$text = props.text,
      text = _props$text === void 0 ? 'Loading' : _props$text,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type;
  var builtStyles = useThemePath.useThemePath(themePath || "loading.".concat(type), styles);
  return React__default["default"].createElement(view_native.View, {
    style: builtStyles.main,
    className: useClassList_native.useClassList()
  }, children || React__default["default"].createElement(Progress, {
    text: text,
    type: type,
    size: size,
    color: color,
    styles: builtStyles,
    loadIndicator: indicator
  }));
};

exports.Loading = Loading;
//# sourceMappingURL=loading.js.map
