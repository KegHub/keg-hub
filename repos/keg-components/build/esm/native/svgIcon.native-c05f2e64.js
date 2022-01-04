import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import * as Svg from 'react-native-svg';
import Svg__default, { Path } from 'react-native-svg';
import { noPropObj } from '@keg-hub/jsutils';

function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

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

var NativeSvg = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  SvgIcon: SvgIcon
}, [Svg]));

export { NativeSvg as N, SvgIcon as S };
//# sourceMappingURL=svgIcon.native-c05f2e64.js.map
