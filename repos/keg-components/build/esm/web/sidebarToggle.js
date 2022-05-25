import { e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default, { useCallback, useEffect, useMemo } from 'react';
import { V as View } from './view-23665db9.js';
import { Text } from './text.js';
import { useStyle, useTheme } from '@keg-hub/re-theme';
import { useToggledStyles } from './useToggledStyles.js';
import { ToggleMain, ToggleAction, ToggleIcon } from './sidebar.js';
import './view.native-f56118b2.js';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import '@keg-hub/jsutils';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';
import './kegText-1ab95fab.js';
import './kegText.native-ba7d1c9c.js';
import './useTextAccessibility.js';
import './useTextStyles.js';
import './touchable.js';
import './svgIcon-389f9d70.js';
import './svgIcon.native-e0c41d6c.js';
import 'react-native-svg-web';
import './chevronDown-ba9bb372.js';
import '@keg-hub/re-theme/reStyle';
import './isCssUnits.js';

var useWindowClick = function useWindowClick(cb) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var onWindowClick = useCallback(cb.bind.apply(cb, [window].concat(args)), [cb].concat(args));
  useEffect(function () {
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
  var theme = useTheme();
  var iconRotate = iconRotateOptions[location];
  var iconStyle = useStyle(themeStyles.icon, toggled ? iconRotate.on : iconRotate.off);
  return useMemo(function () {
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
      text = props.text,
      styles = props.styles,
      initial = props.initial,
      toggled = props.toggled,
      onPress = props.onPress,
      location = props.location,
      setIsToggled = props.setIsToggled,
      sidebarWidth = props.sidebarWidth,
      _props$Icon = props.Icon,
      Icon = _props$Icon === void 0 ? ToggleIcon : _props$Icon,
      _props$onOffClick = props.onOffClick,
      onOffClick = _props$onOffClick === void 0 ? onWindowClick : _props$onOffClick;
  var iconProps = useIconProps(toggled, styles, location);
  useWindowClick(onOffClick, toggled, setIsToggled);
  return React__default.createElement(ToggleAction, {
    to: to,
    initial: initial,
    onPress: onPress,
    location: location,
    styles: styles === null || styles === void 0 ? void 0 : styles.action,
    sidebarWidth: sidebarWidth,
    className: "sidebar-toggle-action"
  }, function (_ref) {
    var hovered = _ref.hovered;
    return React__default.createElement(View, {
      className: "sidebar-toggle-content",
      style: styles === null || styles === void 0 ? void 0 : styles.content
    }, !text ? React__default.createElement(Icon, _extends({}, iconProps, {
      hovered: hovered
    })) : React__default.createElement(Text, {
      className: "sidebar-toggle-text",
      style: styles === null || styles === void 0 ? void 0 : styles.text
    }, text));
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
  var joinedStyles = useStyle('sidebar.toggle', styles);
  var toggleStyles = useToggledStyles(toggled, joinedStyles);
  return React__default.createElement(ToggleMain, {
    className: "sidebar-toggle-main",
    style: toggleStyles === null || toggleStyles === void 0 ? void 0 : toggleStyles.main
  }, children || React__default.createElement(ToggleContainer, {
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

export { SidebarToggle };
//# sourceMappingURL=sidebarToggle.js.map
