'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var Svg = require('react-native-svg');
var jsutils = require('@keg-hub/jsutils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

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

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);
var Svg__namespace = /*#__PURE__*/_interopNamespace(Svg);

var _excluded = ["className", "clipRule", "delta", "fill", "fillRule", "height", "stroke", "strokeWidth", "strokeLinecap", "strokeLinejoin", "style", "svgFill", "viewBox", "width", "children"];
var useClassName = function useClassName(className) {
  return jsutils.noPropObj;
};
var SvgIcon = React__default["default"].forwardRef(function (props, ref) {
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
      style = _props$style === void 0 ? jsutils.noPropObj : _props$style,
      svgFill = props.svgFill,
      viewBox = props.viewBox,
      width = props.width,
      children = props.children,
      attrs = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded);
  var classProps = useClassName();
  return React__default["default"].createElement(Svg__default["default"], _rollupPluginBabelHelpers._extends({}, attrs, classProps, {
    height: height,
    width: width,
    fill: svgFill,
    viewBox: viewBox,
    style: style
  }), delta && React__default["default"].createElement(Svg.Path, {
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
}, [Svg__namespace]));

exports.NativeSvg = NativeSvg;
exports.SvgIcon = SvgIcon;
//# sourceMappingURL=svgIcon.native-4e6a0c69.js.map
