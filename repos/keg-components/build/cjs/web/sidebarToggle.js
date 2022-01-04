'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var view = require('./view-cd2faea4.js');
var text = require('./text.js');
var reTheme = require('@keg-hub/re-theme');
var useToggledStyles = require('./useToggledStyles.js');
var sidebar = require('./sidebar.js');
require('./view.native-a1d03d45.js');
require('react-native-web');
require('./useClassName-75c55cf8.js');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('@keg-hub/jsutils');
require('./handleRefUpdate.js');
require('@keg-hub/re-theme/styleInjector');
require('./kegText-e14b3c1f.js');
require('./kegText.native-d2f2e1a3.js');
require('./useTextAccessibility.js');
require('./useTextStyles.js');
require('./touchable.js');
require('./svgIcon-f66eed54.js');
require('./svgIcon.native-48f0d173.js');
require('react-native-svg-web');
require('./chevronDown-a11a32c6.js');
require('@keg-hub/re-theme/reStyle');
require('./isCssUnits.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var useWindowClick = function useWindowClick(cb) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var onWindowClick = React.useCallback(cb.bind.apply(cb, [window].concat(args)), [cb].concat(args));
  React.useEffect(function () {
    window.addEventListener('click', onWindowClick);
    return function () {
      return window.removeEventListener('click', onWindowClick);
    };
  }, [onWindowClick]);
};

var onWindowClick = function onWindowClick(toggled, setIsToggled, event) {
  if (!toggled) return;
  var sideBarEl = event && event.target.closest('.sidebar-main');
  !sideBarEl && setIsToggled(false);
};
var iconRotateOptions = {
  left: {
    on: {
      transform: 'rotate(90deg)'
    },
    off: {
      transform: 'rotate(270deg)'
    }
  },
  right: {
    on: {
      transform: 'rotate(270deg)'
    },
    off: {
      transform: 'rotate(90deg)'
    }
  }
};
var useIconProps = function useIconProps(toggled, themeStyles) {
  var location = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';
  var theme = reTheme.useTheme();
  var iconRotate = iconRotateOptions[location];
  var iconStyle = reTheme.useStyle(themeStyles.icon, toggled ? iconRotate.on : iconRotate.off);
  return React.useMemo(function () {
    var _themeStyles$icon, _theme$typography, _theme$typography$def, _themeStyles$icon2, _themeStyles$icon3;
    return {
      styles: {
        main: iconStyle
      },
      size: (themeStyles === null || themeStyles === void 0 ? void 0 : (_themeStyles$icon = themeStyles.icon) === null || _themeStyles$icon === void 0 ? void 0 : _themeStyles$icon.fontSize) || (theme === null || theme === void 0 ? void 0 : (_theme$typography = theme.typography) === null || _theme$typography === void 0 ? void 0 : (_theme$typography$def = _theme$typography.default) === null || _theme$typography$def === void 0 ? void 0 : _theme$typography$def.fontSize),
      stroke: (themeStyles === null || themeStyles === void 0 ? void 0 : (_themeStyles$icon2 = themeStyles.icon) === null || _themeStyles$icon2 === void 0 ? void 0 : _themeStyles$icon2.c) || (themeStyles === null || themeStyles === void 0 ? void 0 : (_themeStyles$icon3 = themeStyles.icon) === null || _themeStyles$icon3 === void 0 ? void 0 : _themeStyles$icon3.color) || theme.colors.palette.white01
    };
  }, [theme, themeStyles, iconStyle]);
};
var ToggleContainer = function ToggleContainer(props) {
  var to = props.to,
      text$1 = props.text,
      styles = props.styles,
      initial = props.initial,
      toggled = props.toggled,
      onPress = props.onPress,
      location = props.location,
      setIsToggled = props.setIsToggled,
      sidebarWidth = props.sidebarWidth,
      _props$Icon = props.Icon,
      Icon = _props$Icon === void 0 ? sidebar.ToggleIcon : _props$Icon,
      _props$onOffClick = props.onOffClick,
      onOffClick = _props$onOffClick === void 0 ? onWindowClick : _props$onOffClick;
  var iconProps = useIconProps(toggled, styles, location);
  useWindowClick(onOffClick, toggled, setIsToggled);
  return React__default["default"].createElement(sidebar.ToggleAction, {
    to: to,
    initial: initial,
    onPress: onPress,
    location: location,
    styles: styles === null || styles === void 0 ? void 0 : styles.action,
    sidebarWidth: sidebarWidth,
    className: "sidebar-toggle-action"
  }, function (_ref) {
    var hovered = _ref.hovered;
    return React__default["default"].createElement(view.View, {
      className: "sidebar-toggle-content",
      style: styles === null || styles === void 0 ? void 0 : styles.content
    }, !text$1 ? React__default["default"].createElement(Icon, _rollupPluginBabelHelpers._extends({}, iconProps, {
      hovered: hovered
    })) : React__default["default"].createElement(text.Text, {
      className: "sidebar-toggle-text",
      style: styles === null || styles === void 0 ? void 0 : styles.text
    }, text$1));
  });
};
var SidebarToggle = function SidebarToggle(props) {
  var to = props.to,
      text = props.text,
      styles = props.styles,
      initial = props.initial,
      onPress = props.onPress,
      toggled = props.toggled,
      location = props.location,
      children = props.children,
      setIsToggled = props.setIsToggled,
      sidebarWidth = props.sidebarWidth;
  var joinedStyles = reTheme.useStyle('sidebar.toggle', styles);
  var toggleStyles = useToggledStyles.useToggledStyles(toggled, joinedStyles);
  return React__default["default"].createElement(sidebar.ToggleMain, {
    className: "sidebar-toggle-main",
    style: toggleStyles === null || toggleStyles === void 0 ? void 0 : toggleStyles.main
  }, children || React__default["default"].createElement(ToggleContainer, {
    to: to,
    text: text,
    onPress: onPress,
    initial: initial,
    toggled: toggled,
    location: location,
    styles: toggleStyles,
    sidebarWidth: sidebarWidth,
    setIsToggled: setIsToggled
  }));
};

exports.SidebarToggle = SidebarToggle;
//# sourceMappingURL=sidebarToggle.js.map
