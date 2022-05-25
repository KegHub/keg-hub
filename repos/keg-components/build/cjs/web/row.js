'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var container = require('./container.js');
var reTheme = require('@keg-hub/re-theme');
var useClassList = require('./useClassList-89a8dbd4.js');
require('./view-3370300d.js');
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

var _excluded = ["className", "children", "style"];
var Row = function Row(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, _excluded);
  var classNames = useClassList.useClassList('keg-row', className);
  var containerStyles = reTheme.useStyle("layout.grid.row", style);
  return React__default["default"].createElement(container.Container, _rollupPluginBabelHelpers._extends({}, props, {
    flexDir: "row",
    className: classNames,
    style: containerStyles
  }), children);
};

exports.Row = Row;
//# sourceMappingURL=row.js.map
