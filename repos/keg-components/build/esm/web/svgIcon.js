import { d as _objectWithoutProperties, c as _toConsumableArray, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default, { useMemo } from 'react';
import { S as SvgIcon$1, N as NativeSvg } from './svgIcon.native-e0c41d6c.js';
import { StyleInjector } from '@keg-hub/re-theme/styleInjector';
import { useTheme, useStyle } from '@keg-hub/re-theme';
import { isArr, deepMerge, get, noPropObj } from '@keg-hub/jsutils';
import 'react-native-svg-web';

var KegSvgIcon = SvgIcon$1,
    svgElements = _objectWithoutProperties(NativeSvg, ["SvgIcon"]);
var useIconStyle = function useIconStyle(style) {
  return useMemo(function () {
    return isArr(style) ? deepMerge.apply(void 0, _toConsumableArray(style)) : style;
  }, [style]);
};
var useSize = function useSize(size, width, height, style, theme) {
  return useMemo(function () {
    var iconSize = size || get(style, 'fontSize');
    var themeSize = get(theme, 'typography.default.fontSize', 15) * 2;
    return {
      height: height || iconSize || get(style, 'height', themeSize),
      width: width || iconSize || get(style, 'width', themeSize)
    };
  }, [size, width, height, style]);
};
var useColor = function useColor(fill, stroke, color, border, style, theme) {
  return useMemo(function () {
    var themeColor = get(theme, 'typography.default.color');
    return {
      stroke: stroke || border || style.border || color || style.color || themeColor,
      fill: fill || color || style.color || stroke
    };
  }, [fill, stroke, color, border, style]);
};
var SvgIconInject = StyleInjector(KegSvgIcon, {
  maxSelectors: 0,
  kegComponent: true,
  displayName: 'SvgIcon',
  className: 'keg-svg-icon'
});
var SvgIcon = React__default.forwardRef(function (props, ref) {
  var border = props.border,
      color = props.color,
      fill = props.fill,
      height = props.height,
      size = props.size,
      stroke = props.stroke,
      _props$style = props.style,
      style = _props$style === void 0 ? noPropObj : _props$style,
      width = props.width;
  var theme = useTheme();
  var iconStyle = useIconStyle(style);
  var sizeStyle = useSize(size, width, height, iconStyle, theme);
  var svgStyles = useStyle(iconStyle, sizeStyle);
  var colorStyle = useColor(fill, stroke, color, border, iconStyle, theme);
  return React__default.createElement(SvgIconInject, _extends({}, props, sizeStyle, colorStyle, {
    style: svgStyles,
    ref: ref
  }));
});
Object.assign(SvgIcon, svgElements);

export { SvgIcon, SvgIconInject };
//# sourceMappingURL=svgIcon.js.map
