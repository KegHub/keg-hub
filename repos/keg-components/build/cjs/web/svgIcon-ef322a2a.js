'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var svgIcon_native = require('./svgIcon.native-48f0d173.js');
var styleInjector = require('@keg-hub/re-theme/styleInjector');
var reTheme = require('@keg-hub/re-theme');
var jsutils = require('@keg-hub/jsutils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var KegSvgIcon = svgIcon_native.SvgIcon,
    svgElements = _rollupPluginBabelHelpers._objectWithoutProperties(svgIcon_native.NativeSvg, ["SvgIcon"]);
var useIconStyle = function useIconStyle(style) {
  return React.useMemo(function () {
    return jsutils.isArr(style) ? jsutils.deepMerge.apply(void 0, _rollupPluginBabelHelpers._toConsumableArray(style)) : style;
  }, [style]);
};
var useSize = function useSize(size, width, height, style, theme) {
  return React.useMemo(function () {
    var iconSize = size || jsutils.get(style, 'fontSize');
    var themeSize = jsutils.get(theme, 'typography.default.fontSize', 15) * 2;
    return {
      height: height || iconSize || jsutils.get(style, 'height', themeSize),
      width: width || iconSize || jsutils.get(style, 'width', themeSize)
    };
  }, [size, width, height, style]);
};
var useColor = function useColor(fill, stroke, color, border, style, theme) {
  return React.useMemo(function () {
    var themeColor = jsutils.get(theme, 'typography.default.color');
    return {
      stroke: stroke || border || style.border || color || style.color || themeColor,
      fill: fill || color || style.color || stroke
    };
  }, [fill, stroke, color, border, style]);
};
var SvgIconInject = styleInjector.StyleInjector(KegSvgIcon, {
  maxSelectors: 0,
  kegComponent: true,
  displayName: 'SvgIcon',
  className: 'keg-svg-icon'
});
var SvgIcon = React__default["default"].forwardRef(function (props, ref) {
  var border = props.border,
      color = props.color,
      fill = props.fill,
      height = props.height,
      size = props.size,
      stroke = props.stroke,
      _props$style = props.style,
      style = _props$style === void 0 ? jsutils.noPropObj : _props$style,
      width = props.width;
  var theme = reTheme.useTheme();
  var iconStyle = useIconStyle(style);
  var sizeStyle = useSize(size, width, height, iconStyle, theme);
  var svgStyles = reTheme.useStyle(iconStyle, sizeStyle);
  var colorStyle = useColor(fill, stroke, color, border, iconStyle, theme);
  return React__default["default"].createElement(SvgIconInject, _rollupPluginBabelHelpers._extends({}, props, sizeStyle, colorStyle, {
    style: svgStyles,
    ref: ref
  }));
});
Object.assign(SvgIcon, svgElements);

exports.SvgIcon = SvgIcon;
//# sourceMappingURL=svgIcon-ef322a2a.js.map
