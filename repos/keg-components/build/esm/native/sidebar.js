import { d as _objectWithoutProperties, b as _slicedToArray, e as _extends, a as _defineProperty, _ as _objectSpread2 } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { V as View } from './view.native-16eca0a6.js';
import { T as Touchable } from './touchable-7c6e36c1.js';
import './svgIcon.native-5fb8ae44.js';
import { C as ChevronDown } from './chevronDown-7c76db3a.js';
import { isNum, noOpObj } from '@keg-hub/jsutils';
import { reStyle } from '@keg-hub/re-theme/reStyle';
import { useStyle, useThemeHover } from '@keg-hub/re-theme';
import { isCssUnits } from './isCssUnits.js';
import 'react-native';
import './useClassName.native-32e8827d.js';
import './touchable.js';
import '@keg-hub/re-theme/styleInjector';
import 'react-native-svg';

var _excluded = ["styles", "location"],
    _excluded2 = ["styles", "hovered"];
var ToggleElWidth = 20;
var getSidebarWidth = function getSidebarWidth(width, initial) {
  var _styles$main, _styles$main2, _styles$main3;
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noOpObj;
  return isNum(width) || isCssUnits(width) ? width : isNum(styles === null || styles === void 0 ? void 0 : (_styles$main = styles.main) === null || _styles$main === void 0 ? void 0 : _styles$main.width) || isCssUnits(styles === null || styles === void 0 ? void 0 : (_styles$main2 = styles.main) === null || _styles$main2 === void 0 ? void 0 : _styles$main2.width) ? styles === null || styles === void 0 ? void 0 : (_styles$main3 = styles.main) === null || _styles$main3 === void 0 ? void 0 : _styles$main3.width : isNum(initial) || isCssUnits(initial) ? initial : 200;
};
var getToggleLocation = function getToggleLocation(width, initial, styles, location) {
  var fullWidth = getSidebarWidth(width, initial, styles);
  return location === 'left' ? fullWidth : ToggleElWidth;
};
var SidebarMain = reStyle(View)({
  h: '100%'
});
var SidebarContainer = reStyle(View)(function (theme, props) {
  return {
    fl: 1,
    shadowRadius: 6,
    alS: "stretch",
    shadowOpacity: 0.05,
    bgC: theme.colors.palette.white01,
    shadowOffset: props.location === 'right' ? {
      width: -2,
      height: 2
    } : {
      width: 2,
      height: 2
    },
    shadowColor: theme.colors.palette.black03,
    w: getSidebarWidth(props.sidebarWidth, props.initial, props.styles)
  };
});
var ToggleMain = reStyle(View)(function (theme, props) {
  return {
    position: 'absolute'
  };
});
var ToggleAction = reStyle(function (_ref) {
  var styles = _ref.styles,
      location = _ref.location,
      props = _objectWithoutProperties(_ref, _excluded);
  var locStyles = useStyle(styles.main, styles[location]);
  var _useThemeHover = useThemeHover(locStyles, styles.hover),
      _useThemeHover2 = _slicedToArray(_useThemeHover, 2),
      ref = _useThemeHover2[0],
      style = _useThemeHover2[1];
  return React__default.createElement(Touchable, _extends({}, props, {
    style: style,
    touchRef: ref
  }));
}, 'styles')(function (theme, props) {
  var _theme$colors, _theme$colors$palette, _theme$colors2, _theme$colors2$palett, _theme$colors$palette2;
  return {
    main: _defineProperty({
      w: ToggleElWidth,
      pH: 1,
      pV: 15,
      tp: "45vh",
      bRad: 3,
      minH: 50,
      alI: 'center',
      jtC: 'center',
      pos: 'relative',
      shadowRadius: 2,
      shadowOpacity: 0.2,
      transitionDuration: '0.8s',
      bgC: theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : (_theme$colors$palette = _theme$colors.palette) === null || _theme$colors$palette === void 0 ? void 0 : _theme$colors$palette.black01,
      shadowOffset: {
        width: 2,
        height: 2
      },
      shadowColor: theme === null || theme === void 0 ? void 0 : (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : (_theme$colors2$palett = _theme$colors2.palette) === null || _theme$colors2$palett === void 0 ? void 0 : _theme$colors2$palett.black03,
      transitionProperty: 'width height background-color'
    }, props.location || 'left', getToggleLocation(props.sidebarWidth, props.initial, props.styles, props.location)),
    hover: _objectSpread2({
      minH: 75,
      width: 30,
      bgC: theme === null || theme === void 0 ? void 0 : (_theme$colors$palette2 = theme.colors.palette) === null || _theme$colors$palette2 === void 0 ? void 0 : _theme$colors$palette2.blue02
    }, props.location === 'right' && {
      right: 30
    }),
    left: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0
    },
    right: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0
    }
  };
});
var ToggleIcon = reStyle(function (props) {
  var styles = props.styles,
      hovered = props.hovered,
      iconProps = _objectWithoutProperties(props, _excluded2);
  return React__default.createElement(ChevronDown, _extends({}, iconProps, {
    width: styles === null || styles === void 0 ? void 0 : styles.width,
    height: styles === null || styles === void 0 ? void 0 : styles.height
  }, hovered && (styles === null || styles === void 0 ? void 0 : styles.hover), {
    style: styles === null || styles === void 0 ? void 0 : styles.main
  }));
}, 'styles')({
  main: {
    lt: -1,
    pos: 'relative',
    transitionDuration: '0.8s',
    transitionProperty: 'width height transform stroke color'
  },
  width: 18,
  height: 18,
  hover: {
    width: 25,
    height: 25
  }
});

export { SidebarContainer, SidebarMain, ToggleAction, ToggleIcon, ToggleMain, getSidebarWidth };
//# sourceMappingURL=sidebar.js.map
