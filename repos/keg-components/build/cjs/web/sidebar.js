'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var view = require('./view-3370300d.js');
var touchable = require('./touchable.js');
require('./svgIcon-ef322a2a.js');
var chevronDown = require('./chevronDown-67e5a61e.js');
var jsutils = require('@keg-hub/jsutils');
var reStyle = require('@keg-hub/re-theme/reStyle');
var reTheme = require('@keg-hub/re-theme');
var isCssUnits = require('./isCssUnits.js');
require('./view.native-a1d03d45.js');
require('react-native-web');
require('./useClassName-75c55cf8.js');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('./handleRefUpdate.js');
require('@keg-hub/re-theme/styleInjector');
require('./svgIcon.native-48f0d173.js');
require('react-native-svg-web');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["styles", "location"],
    _excluded2 = ["styles", "hovered"];
var ToggleElWidth = 20;
var getSidebarWidth = function getSidebarWidth(width, initial) {
  var _styles$main, _styles$main2, _styles$main3;
  var styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : jsutils.noOpObj;
  return jsutils.isNum(width) || isCssUnits.isCssUnits(width) ? width : jsutils.isNum(styles === null || styles === void 0 ? void 0 : (_styles$main = styles.main) === null || _styles$main === void 0 ? void 0 : _styles$main.width) || isCssUnits.isCssUnits(styles === null || styles === void 0 ? void 0 : (_styles$main2 = styles.main) === null || _styles$main2 === void 0 ? void 0 : _styles$main2.width) ? styles === null || styles === void 0 ? void 0 : (_styles$main3 = styles.main) === null || _styles$main3 === void 0 ? void 0 : _styles$main3.width : jsutils.isNum(initial) || isCssUnits.isCssUnits(initial) ? initial : 200;
};
var getToggleLocation = function getToggleLocation(width, initial, styles, location) {
  var fullWidth = getSidebarWidth(width, initial, styles);
  return location === 'left' ? fullWidth : ToggleElWidth;
};
var SidebarMain = reStyle.reStyle(view.View)({
  h: '100%'
});
var SidebarContainer = reStyle.reStyle(view.View)(function (theme, props) {
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
var ToggleMain = reStyle.reStyle(view.View)(function (theme, props) {
  return {
    position: 'absolute'
  };
});
var ToggleAction = reStyle.reStyle(function (_ref) {
  var styles = _ref.styles,
      location = _ref.location,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref, _excluded);
  var locStyles = reTheme.useStyle(styles.main, styles[location]);
  var _useThemeHover = reTheme.useThemeHover(locStyles, styles.hover),
      _useThemeHover2 = _rollupPluginBabelHelpers._slicedToArray(_useThemeHover, 2),
      ref = _useThemeHover2[0],
      style = _useThemeHover2[1];
  return React__default["default"].createElement(touchable.Touchable, _rollupPluginBabelHelpers._extends({}, props, {
    style: style,
    touchRef: ref
  }));
}, 'styles')(function (theme, props) {
  var _theme$colors, _theme$colors$palette, _theme$colors2, _theme$colors2$palett, _theme$colors$palette2;
  return {
    main: _rollupPluginBabelHelpers._defineProperty({
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
    hover: _rollupPluginBabelHelpers._objectSpread2({
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
var ToggleIcon = reStyle.reStyle(function (props) {
  var styles = props.styles,
      hovered = props.hovered,
      iconProps = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded2);
  return React__default["default"].createElement(chevronDown.ChevronDown, _rollupPluginBabelHelpers._extends({}, iconProps, {
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

exports.SidebarContainer = SidebarContainer;
exports.SidebarMain = SidebarMain;
exports.ToggleAction = ToggleAction;
exports.ToggleIcon = ToggleIcon;
exports.ToggleMain = ToggleMain;
exports.getSidebarWidth = getSidebarWidth;
//# sourceMappingURL=sidebar.js.map
