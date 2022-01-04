import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default, { useMemo } from 'react';
import { Container } from './container.js';
import { u as useClassList } from './useClassList.native-70068878.js';
import { useTheme, useStyle } from '@keg-hub/re-theme';
import './view.native-16eca0a6.js';
import 'react-native';
import './useClassName.native-32e8827d.js';
import '@keg-hub/jsutils';
import './getPressHandler.js';
import './getPlatform-e625f46a.js';
import '@keg-hub/re-theme/colors';

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
  return useMemo(function () {
    return size ? widthFromSize(size, theme) : {
      flexGrow: 1
    };
  }, [size, theme]);
};
var Column = function Column(_ref) {
  _ref.className;
      var children = _ref.children,
      size = _ref.size;
      _ref.center;
      var props = _objectWithoutProperties(_ref, _excluded);
  var theme = useTheme();
  var widthStyle = useColumnWidth(size, theme);
  var style = useStyle("layout.grid.column", props.style, widthStyle);
  return React__default.createElement(Container, _extends({}, props, {
    size: size,
    style: style,
    flexDir: "column",
    className: useClassList()
  }), children);
};

export { Column };
//# sourceMappingURL=column.js.map
