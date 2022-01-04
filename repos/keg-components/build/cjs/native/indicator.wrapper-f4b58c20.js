'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var view_native = require('./view.native-6338852a.js');
require('@keg-hub/jsutils');
require('@keg-hub/re-theme/colors');
var useThemePath = require('./useThemePath.js');
require('./useThemeWithHeight.js');
require('react-native');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
      elProps = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded);
  var builtStyles = useThemePath.useThemePath(themePath || "indicator.".concat(type), styles);
  return React__default["default"].createElement(view_native.View, {
    style: builtStyles.container
  }, React__default["default"].createElement(Element, _rollupPluginBabelHelpers._extends({}, elProps, {
    alt: alt || 'Loading',
    style: builtStyles.icon,
    resizeMode: resizeMode || 'contain'
  })));
};

exports.IndicatorWrapper = IndicatorWrapper;
//# sourceMappingURL=indicator.wrapper-f4b58c20.js.map
