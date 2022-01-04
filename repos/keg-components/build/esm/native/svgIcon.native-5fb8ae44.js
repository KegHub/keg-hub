import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import Svg__default, { Path } from 'react-native-svg';
import { noPropObj } from '@keg-hub/jsutils';

var _excluded = ["className", "clipRule", "delta", "fill", "fillRule", "height", "stroke", "strokeWidth", "strokeLinecap", "strokeLinejoin", "style", "svgFill", "viewBox", "width", "children"];
var useClassName = function useClassName(className) {
  return noPropObj;
};
var SvgIcon = React__default.forwardRef(function (props, ref) {
  props.className;
      var clipRule = props.clipRule,
      delta = props.delta,
      fill = props.fill,
      fillRule = props.fillRule,
      height = props.height,
      stroke = props.stroke,
      strokeWidth = props.strokeWidth,
      strokeLinecap = props.strokeLinecap,
      strokeLinejoin = props.strokeLinejoin,
      _props$style = props.style,
      style = _props$style === void 0 ? noPropObj : _props$style,
      svgFill = props.svgFill,
      viewBox = props.viewBox,
      width = props.width,
      children = props.children,
      attrs = _objectWithoutProperties(props, _excluded);
  var classProps = useClassName();
  return React__default.createElement(Svg__default, _extends({}, attrs, classProps, {
    height: height,
    width: width,
    fill: svgFill,
    viewBox: viewBox,
    style: style
  }), delta && React__default.createElement(Path, {
    clipRule: clipRule,
    d: delta,
    fill: fill,
    fillRule: fillRule,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeLinecap: strokeLinecap,
    strokeLinejoin: strokeLinejoin
  }), children);
});

export { SvgIcon as S };
//# sourceMappingURL=svgIcon.native-5fb8ae44.js.map
