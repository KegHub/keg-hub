import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default, { useMemo } from 'react';
import { Row } from './row.js';
import { Container } from './container.js';
import { u as useClassList } from './useClassList-1d418045.js';
import { ensureArr } from '@keg-hub/jsutils';
import { useStyle } from '@keg-hub/re-theme';
import './view-23665db9.js';
import './view.native-f56118b2.js';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';
import './getPlatform-95568099.js';
import './getPressHandler.js';
import '@keg-hub/re-theme/colors';

var _excluded = ["className", "children", "style"];
var useBuildCenterStyles = function useBuildCenterStyles(isCenter) {
  return useMemo(function () {
    if (!isCenter) return;
    return isCenter === 'x' || isCenter === 'xaxis' || isCenter === 'x-axis' ? {
      justifyContent: 'center'
    } : isCenter === 'y' || isCenter === 'yaxis' || isCenter === 'y-axis' ? {
      alignItems: 'center'
    } : isCenter && {
      alignItems: 'center',
      justifyContent: 'center'
    } || {};
  }, [isCenter]);
};
var useChildAttrs = function useChildAttrs(children) {
  return useMemo(function () {
    return children.reduce(function (attrs, child) {
      var _child$props;
      if (attrs !== null && attrs !== void 0 && attrs.isRow && attrs !== null && attrs !== void 0 && attrs.isCenter) return attrs;
      if (!(attrs !== null && attrs !== void 0 && attrs.isRow) && child && (child === null || child === void 0 ? void 0 : child.type) === Row) attrs.isRow = true;
      if (!(attrs !== null && attrs !== void 0 && attrs.isCenter) && child && child !== null && child !== void 0 && child.props && child !== null && child !== void 0 && (_child$props = child.props) !== null && _child$props !== void 0 && _child$props.center) attrs.isCenter = child.props.center.toString().toLowerCase();
      return attrs;
    }, {
      isRow: false,
      isCenter: false
    });
  }, [children]);
};
var Grid = function Grid(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);
  var _useChildAttrs = useChildAttrs(ensureArr(children)),
      isRow = _useChildAttrs.isRow,
      isCenter = _useChildAttrs.isCenter;
  var classNames = useClassList('keg-grid', className);
  var centerStyles = useBuildCenterStyles(isCenter);
  var containerStyle = useStyle('layout.grid.wrapper', style, centerStyles);
  return React__default.createElement(Container, _extends({}, props, {
    size: 1,
    style: containerStyle,
    className: classNames,
    flexDir: isRow ? 'column' : 'row'
  }), children);
};

export { Grid };
//# sourceMappingURL=grid.js.map
