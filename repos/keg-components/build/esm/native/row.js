import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { Container } from './container.js';
import { useStyle } from '@keg-hub/re-theme';
import { u as useClassList } from './useClassList.native-70068878.js';
import './view.native-16eca0a6.js';
import 'react-native';
import './useClassName.native-32e8827d.js';
import '@keg-hub/jsutils';
import './getPressHandler.js';
import './getPlatform-e625f46a.js';
import '@keg-hub/re-theme/colors';

var _excluded = ["className", "children", "style"];
var Row = function Row(_ref) {
  _ref.className;
      var children = _ref.children,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);
  var classNames = useClassList();
  var containerStyles = useStyle("layout.grid.row", style);
  return React__default.createElement(Container, _extends({}, props, {
    flexDir: "row",
    className: classNames,
    style: containerStyles
  }), children);
};

export { Row };
//# sourceMappingURL=row.js.map
