import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { Container } from './container.js';
import { useStyle } from '@keg-hub/re-theme';
import { u as useClassList } from './useClassList-1d418045.js';
import './view-23665db9.js';
import './view.native-f56118b2.js';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import '@keg-hub/jsutils';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';
import './getPlatform-95568099.js';
import './getPressHandler.js';
import '@keg-hub/re-theme/colors';

var _excluded = ["className", "children", "style"];
var Row = function Row(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);
  var classNames = useClassList('keg-row', className);
  var containerStyles = useStyle("layout.grid.row", style);
  return React__default.createElement(Container, _extends({}, props, {
    flexDir: "row",
    className: classNames,
    style: containerStyles
  }), children);
};

export { Row };
//# sourceMappingURL=row.js.map
