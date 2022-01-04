'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var container = require('./container.js');
var useClassList = require('./useClassList-89a8dbd4.js');
var reTheme = require('@keg-hub/re-theme');
require('./view-cd2faea4.js');
require('./view.native-a1d03d45.js');
require('react-native-web');
require('./useClassName-75c55cf8.js');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('@keg-hub/jsutils');
require('./handleRefUpdate.js');
require('@keg-hub/re-theme/styleInjector');
require('./getPlatform-ec53cd5e.js');
require('./getPressHandler.js');
require('@keg-hub/re-theme/colors');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["className", "children", "size", "center"];
var widthFromSize = function widthFromSize(size, theme) {
  var _theme$layout;
  var total = (theme === null || theme === void 0 ? void 0 : (_theme$layout = theme.layout) === null || _theme$layout === void 0 ? void 0 : _theme$layout.columns) || 12;
  size = size > total ? total : size;
  var colWidth = parseFloat(size * (100 / total)).toFixed(4);
  return {
    minWidth: "".concat(colWidth, "%"),
    maxWidth: "".concat(colWidth, "%")
  };
};
var useColumnWidth = function useColumnWidth(size, theme) {
  return React.useMemo(function () {
    return size ? widthFromSize(size, theme) : {
      flexGrow: 1
    };
  }, [size, theme]);
};
var Column = function Column(_ref) {
  var className = _ref.className,
      children = _ref.children,
      size = _ref.size;
      _ref.center;
      var props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, _excluded);
  var theme = reTheme.useTheme();
  var widthStyle = useColumnWidth(size, theme);
  var style = reTheme.useStyle("layout.grid.column", props.style, widthStyle);
  return React__default["default"].createElement(container.Container, _rollupPluginBabelHelpers._extends({}, props, {
    size: size,
    style: style,
    flexDir: "column",
    className: useClassList.useClassList('keg-column', className)
  }), children);
};

exports.Column = Column;
//# sourceMappingURL=column.js.map
