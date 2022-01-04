'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var view_native = require('./view.native-6338852a.js');
var reTheme = require('@keg-hub/re-theme');
var jsutils = require('@keg-hub/jsutils');
var getPressHandler = require('./getPressHandler.js');
var getPlatform = require('./getPlatform-24228c6c.js');
require('@keg-hub/re-theme/colors');
require('react-native');
require('./useClassName.native-3d1a229b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["onPress", "onClick", "children", "flexDir", "size", "style"];
var useContainerStyle = function useContainerStyle(styles, flexDir, size) {
  var flexStyle = React.useMemo(function () {
    var hasWidth = styles.map(function (style) {
      return Boolean(Object.keys(jsutils.pickKeys(style, ['width', 'minWidth', 'maxWidth'])).length);
    }).indexOf(true) !== -1;
    return flexDir === 'row' && {
      flexDirection: flexDir,
      flex: size ? size : hasWidth ? 0 : 1
    };
  }, [].concat(_rollupPluginBabelHelpers._toConsumableArray(styles), [flexDir, size]));
  return reTheme.useStyle.apply(void 0, [flexStyle].concat(_rollupPluginBabelHelpers._toConsumableArray(styles)));
};
var Container = function Container(_ref) {
  var onPress = _ref.onPress,
      onClick = _ref.onClick,
      children = _ref.children,
      flexDir = _ref.flexDir,
      size = _ref.size,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? jsutils.noOpObj : _ref$style,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, _excluded);
  var containerStyle = useContainerStyle(jsutils.ensureArr(style), flexDir, size);
  return React__default["default"].createElement(view_native.View, _rollupPluginBabelHelpers._extends({}, props, {
    style: containerStyle
  }, getPressHandler.getPressHandler(getPlatform.getPlatform(), onClick || onPress)), children);
};

exports.Container = Container;
//# sourceMappingURL=container.js.map
