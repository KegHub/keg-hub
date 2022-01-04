'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var textBox = require('./textBox.js');
var button = require('./button.js');
var card = require('./card.js');
var divider = require('./divider.js');
var drawer = require('./drawer.js');
var React = require('react');
var view_native = require('./view.native-6338852a.js');
var caption = require('./caption.js');
var h1 = require('./h1.js');
var h2 = require('./h2.js');
var h3 = require('./h3.js');
var h4 = require('./h4.js');
var h5 = require('./h5.js');
var h6 = require('./h6.js');
var label = require('./label.js');
var p = require('./p.js');
var subtitle = require('./subtitle.js');
var text = require('./text.js');
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var checkbox = require('./checkbox-ec9b12a1.js');
var reTheme = require('@keg-hub/re-theme');
var useClassList_native = require('./useClassList.native-9e7810c9.js');
var useChildrenWithRefs = require('./useChildrenWithRefs.js');
var jsutils = require('@keg-hub/jsutils');
require('@keg-hub/re-theme/colors');
var useThemePath = require('./useThemePath.js');
var useThemeWithHeight = require('./useThemeWithHeight.js');
var reactNative = require('react-native');
var input = require('./input-c05b0a13.js');
var select = require('./select-ca3120a2.js');
var getInputValue = require('./getInputValue.js');
var useSelectHandlers = require('./useSelectHandlers.js');
var useClassName_native = require('./useClassName.native-3d1a229b.js');
var useThemeTypeAsClass_native = require('./useThemeTypeAsClass.native-90f04031.js');
require('./svgIcon.native-2127578c.js');
var chevronDown = require('./chevronDown-b6b4f214.js');
var icon = require('./icon-a5269604.js');
var styleInjector = require('@keg-hub/re-theme/styleInjector');
var renderFromType = require('./renderFromType.js');
var getOnChangeHandler = require('./getOnChangeHandler.js');
var getChecked = require('./getChecked.js');
var _switch = require('./switch-804304c6.js');
var itemHeader = require('./itemHeader.js');
var appHeader = require('./appHeader.js');
var touchableIcon = require('./touchableIcon.js');
var cardMedia = require('./cardMedia-616666f2.js');
var grid = require('./grid.js');
var row = require('./row.js');
var column = require('./column.js');
var link_wrapper = require('./link.wrapper-47b6721c.js');
var kegText = require('./kegText-d4479e6a.js');
var touchable = require('./touchable-62a31fcc.js');
var getPlatform = require('./getPlatform-24228c6c.js');
var loading = require('./loading.js');
var modal = require('./modal.js');
var scrollView = require('./scrollView.js');
var sectionList = require('./sectionList.native-6bca3c56.js');
var section = require('./section.js');
var isValidComponent = require('./isValidComponent.js');
var sidebarToggle = require('./sidebarToggle.js');
var sidebar = require('./sidebar.js');
var svgIcon = require('./svgIcon.native-4e6a0c69.js');
var textToggle = require('./textToggle.js');
var withTouch = require('./withTouch.js');
var withScrollIntoView = require('./withScrollIntoView.js');
var withOutsideDetect = require('./withOutsideDetect-722ab588.js');
var theme = require('./theme.js');
var useAccessibilityRole = require('./useAccessibilityRole.js');
var useSpin = require('./useSpin-a9050071.js');
var useAutocompleteItems = require('./useAutocompleteItems.js');
var useChildren = require('./useChildren.js');
var useInputHandlers = require('./useInputHandlers.js');
var useMediaProps = require('./useMediaProps.js');
var usePressHandlers = require('./usePressHandlers.js');
var useTextAccessibility = require('./useTextAccessibility.js');
var useFromToAnimation = require('./useFromToAnimation.js');
var useScrollClassName_native = require('./useScrollClassName.native-c0cd7ecb.js');
var getOnLoad = require('./getOnLoad.js');
var getPressHandler = require('./getPressHandler.js');
var getTextFromChangeEvent = require('./getTextFromChangeEvent.js');
var ensureClassArray = require('./ensureClassArray.js');
var getActiveOpacity = require('./getActiveOpacity.js');
var getImgSrc = require('./getImgSrc.js');
var getReadOnly = require('./getReadOnly.js');
var getTarget = require('./getTarget.js');
var handleRefUpdate = require('./handleRefUpdate.js');
var updateClassNames = require('./updateClassNames.js');
var buildColorStyles = require('./buildColorStyles-4da004d3.js');
var getStyles = require('./getStyles.js');
var inheritFrom = require('./inheritFrom.js');
var platformFlatten = require('./platformFlatten.js');
var buildTheme = require('./buildTheme.js');
var validateFunctions = require('./validateFunctions.js');
require('./cardContent.js');
require('./cardCallout.js');
require('./cardContainer.js');
require('./cardSection.js');
require('./checkbox.wrapper-e409fab6.js');
require('./input-bb740648.js');
require('react-native-svg');
require('./image-fed4a14c.js');
require('./container.js');
require('./kegText.js');
require('./useTextStyles.js');
require('./touchable.js');
require('./indicator.wrapper-f4b58c20.js');
require('./useToggledStyles.js');
require('@keg-hub/re-theme/reStyle');
require('./isCssUnits.js');
require('expo-linear-gradient');
require('./themeDefaults-f48ffcaf.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var useKeyPress = function useKeyPress() {
  return false;
};

var useScrollIntoView = function useScrollIntoView() {
  logData('useScrollIntoView is not implemented for native platforms yet.', 'warn');
  return jsutils.noPropArr;
};

var FilePicker = function FilePicker(props) {
  return React__default["default"].createElement(view_native.View, null, React__default["default"].createElement(p.P, null, "FilePicker Not yet implemented for native."));
};

var _excluded$5 = ["title", "className", "style"];
var SimpleHeader = React__default["default"].forwardRef(function (props, ref) {
  var title = props.title,
      className = props.className,
      style = props.style,
      rest = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded$5);
  React.useImperativeHandle(ref, function () {
    return {
      isChecked: undefined,
      setChecked: jsutils.noOp
    };
  });
  var textStyle = reTheme.useStyle('form.checkGroup.simpleHeader.main', style);
  return React__default["default"].createElement(text.Text, _rollupPluginBabelHelpers._extends({
    className: className,
    style: textStyle
  }, rest), title);
});
var CheckboxHeader = React__default["default"].forwardRef(function (props, ref) {
  var title = props.title,
      className = props.className,
      style = props.style,
      onPress = props.onPress,
      checked = props.checked;
  var headerStyles = React.useMemo(function () {
    return {
      main: style,
      content: {
        right: {}
      }
    };
  }, [style]);
  var onChangeHandler = React.useCallback(function (_, val) {
    return onPress === null || onPress === void 0 ? void 0 : onPress(val);
  }, [onPress]);
  return React__default["default"].createElement(checkbox.Checkbox, {
    RightComponent: title,
    rightClassName: className,
    styles: headerStyles,
    checked: checked,
    onChange: onChangeHandler,
    ref: ref,
    close: true
  });
});
var CheckGroup = React__default["default"].forwardRef(function (props, ref) {
  props.className;
      var headerClassName = props.headerClassName,
      title = props.title,
      children = props.children,
      styles = props.styles,
      _props$initChecked = props.initChecked,
      initChecked = _props$initChecked === void 0 ? false : _props$initChecked,
      onGroupPress = props.onGroupPress,
      _props$showHeaderChec = props.showHeaderCheckbox,
      showHeaderCheckbox = _props$showHeaderChec === void 0 ? false : _props$showHeaderChec,
      _props$showHeader = props.showHeader,
      showHeader = _props$showHeader === void 0 ? true : _props$showHeader;
  var groupStyles = reTheme.useStyle('form.checkGroup', styles);
  var _useChildrenWithRefs = useChildrenWithRefs.useChildrenWithRefs(children, showHeaderCheckbox),
      _useChildrenWithRefs2 = _rollupPluginBabelHelpers._slicedToArray(_useChildrenWithRefs, 2),
      childrenWithProps = _useChildrenWithRefs2[0],
      childRefs = _useChildrenWithRefs2[1];
  var headerCheckHandler = React.useCallback(function (checked) {
    onGroupPress === null || onGroupPress === void 0 ? void 0 : onGroupPress(checked);
    jsutils.mapObj(childRefs.current, function (_, child) {
      var _child$setChecked;
      return child === null || child === void 0 ? void 0 : (_child$setChecked = child.setChecked) === null || _child$setChecked === void 0 ? void 0 : _child$setChecked.call(child, checked);
    });
  }, [childRefs]);
  var Header = function Header() {
    return showHeaderCheckbox ? React__default["default"].createElement(CheckboxHeader, {
      className: headerClassName,
      style: groupStyles === null || groupStyles === void 0 ? void 0 : groupStyles.header,
      title: title,
      onPress: showHeaderCheckbox && headerCheckHandler,
      checked: showHeaderCheckbox ? initChecked : undefined,
      ref: ref
    }) : React__default["default"].createElement(SimpleHeader, {
      className: headerClassName,
      style: groupStyles === null || groupStyles === void 0 ? void 0 : groupStyles.header,
      title: title,
      ref: ref
    });
  };
  return React__default["default"].createElement(view_native.View, {
    className: useClassList_native.useClassList(),
    style: groupStyles === null || groupStyles === void 0 ? void 0 : groupStyles.main
  }, showHeader && React__default["default"].createElement(Header, null), childrenWithProps);
});
CheckGroup.Item = checkbox.Checkbox;

var _excluded$4 = ["children", "className", "elType", "style", "type", "themePath"];
var Form = React__default["default"].forwardRef(function (props, ref) {
  var theme = reTheme.useTheme();
  var children = props.children;
      props.className;
      props.elType;
      var style = props.style,
      type = props.type,
      _props$themePath = props.themePath,
      themePath = _props$themePath === void 0 ? "form.form.".concat(type || 'default') : _props$themePath,
      elProps = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded$4);
  var formTheme = useThemePath.useThemePath(themePath);
  return React__default["default"].createElement(view_native.View, _rollupPluginBabelHelpers._extends({
    accessibilityRole: "form",
    className: useClassList_native.useClassList()
  }, elProps, {
    style: [jsutils.get(theme, 'form.form.default'), formTheme, style],
    ref: ref
  }), children);
});

var SelectOption = reactNative.Picker.Item;
var useable = function useable(item) {
  return (jsutils.isStr(item) || jsutils.isNum(item)) && item;
};
var getVal = function getVal(value, text, children, label) {
  return useable(value) || useable(text) || useable(children) || useable(label);
};
var Option = function Option(props) {
  var label = props.label,
      children = props.children,
      text = props.text,
      value = props.value;
  return React__default["default"].createElement(SelectOption, {
    label: getVal(label, value, text),
    value: getVal(value, text, children, label)
  });
};

var _excluded$3 = ["theme", "children", "style", "onClick", "onPress", "text"];
var Radio = reTheme.withTheme(function (props) {
  var theme = props.theme;
      props.children;
      var style = props.style;
      props.onClick;
      props.onPress;
      var text$1 = props.text,
      args = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded$3);
  return React__default["default"].createElement(text.Text, _rollupPluginBabelHelpers._extends({}, args, {
    style: [jsutils.get(theme, ['form', 'radio']), style]
  }), text$1);
});

var _excluded$2 = ["className", "children", "disabled", "readOnly", "onChange", "onValueChange", "style", "styles", "type", "themePath", "value"];
var KegSelect = styleInjector.StyleInjector(select.Select, {
  displayName: 'Select',
  className: 'keg-select'
});
var getValue = function getValue(props) {
  var children = props.children,
      onChange = props.onChange,
      onValueChange = props.onValueChange,
      readOnly = props.readOnly,
      value = props.value;
  var setValue = getInputValue.getValueFromChildren(value, children);
  var valKey = getInputValue.getInputValueKey(false, onChange, onValueChange, readOnly);
  return _rollupPluginBabelHelpers._defineProperty({}, valKey, setValue);
};
var Select = React__default["default"].forwardRef(function (props, ref) {
  var _selectStyles$icon, _selectStyles$icon$di;
  props.className;
      var children = props.children,
      disabled = props.disabled;
      props.readOnly;
      var onChange = props.onChange,
      onValueChange = props.onValueChange,
      style = props.style,
      styles = props.styles,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      _props$themePath = props.themePath,
      themePath = _props$themePath === void 0 ? "form.select.".concat(type) : _props$themePath;
      props.value;
      var elProps = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded$2);
  var selectStyles = useThemePath.useThemePath(themePath, styles);
  var selectClasses = useThemeTypeAsClass_native.useThemeTypeAsClass();
  var classRef = useClassName_native.useClassName('keg-select', selectClasses, ref);
  return React__default["default"].createElement(view_native.View, {
    style: [selectStyles.main, style]
  }, React__default["default"].createElement(KegSelect, _rollupPluginBabelHelpers._extends({
    ref: classRef
  }, elProps, {
    enabled: !disabled,
    style: [selectStyles.select]
  }, getValue(props), useSelectHandlers.useSelectHandlers({
    onChange: onChange,
    onValueChange: onValueChange
  })), children), React__default["default"].createElement(icon.Icon, {
    styles: selectStyles.icon,
    Component: chevronDown.ChevronDown,
    color: disabled && ((_selectStyles$icon = selectStyles.icon) === null || _selectStyles$icon === void 0 ? void 0 : (_selectStyles$icon$di = _selectStyles$icon.disabled) === null || _selectStyles$icon$di === void 0 ? void 0 : _selectStyles$icon$di.color)
  }));
});

var Slider = function Slider() {
  return null;
};

var _excluded$1 = ["className", "checked", "children", "elType", "disabled", "LeftComponent", "close", "onChange", "onValueChange", "RightComponent", "styles", "SwitchComponent", "setCheckedSetter", "type", "themePath", "thumbColor", "trackColor", "value"];
var KegSwitch = styleInjector.StyleInjector(_switch.Switch, {
  displayName: 'Switch',
  className: 'keg-switch'
});
var getSwitchColors = function getSwitchColors(thumbColor, trackColor, _ref) {
  var _ref$indicator = _ref.indicator,
      indicator = _ref$indicator === void 0 ? {} : _ref$indicator,
      _ref$area = _ref.area,
      area = _ref$area === void 0 ? {} : _ref$area;
  var indicatorColor = thumbColor || indicator.color;
  var areaColor = trackColor || area.backgroundColor;
  var colors = _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, indicatorColor && {
    thumbColor: thumbColor || color
  }), areaColor && {
    trackColor: areaColor,
    onTintColor: areaColor
  });
  return colors;
};
var useCheckedState = function useCheckedState(isChecked, themeStyles) {
  var theme = reTheme.useTheme();
  return React.useMemo(function () {
    return theme.get(themeStyles, {
      content: {
        area: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, jsutils.get(themeStyles, 'content.area.off')), isChecked && jsutils.get(themeStyles, 'content.area.on')),
        indicator: _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, jsutils.get(themeStyles, 'content.indicator.off')), isChecked && jsutils.get(themeStyles, 'content.indicator.on'))
      }
    });
  }, [isChecked]);
};
var setCheckedValue = function setCheckedValue(isChecked, setChecked, onChange) {
  return function (event) {
    setChecked(!isChecked);
    jsutils.checkCall(onChange, event, !isChecked);
  };
};
var SideComponent = function SideComponent(_ref2) {
  var Component = _ref2.Component,
      style = _ref2.style;
  return jsutils.isStr(Component) ? React__default["default"].createElement(text.Text, {
    style: style
  }, Component) : renderFromType.renderFromType(Component, {
    style: styles.content
  });
};
var ChildrenComponent = function ChildrenComponent(_ref3) {
  var children = _ref3.children;
  return React__default["default"].createElement(React__default["default"].Fragment, null, renderFromType.renderFromType(children, {}, null));
};
var useSwitchHandle = function useSwitchHandle(ref, isChecked, setChecked) {
  return React.useImperativeHandle(ref, function () {
    return {
      isChecked: isChecked,
      setChecked: setChecked
    };
  }, [ref, isChecked, setChecked]);
};
var Switch = React.forwardRef(function (props, ref) {
  props.className;
      var checked = props.checked,
      children = props.children;
      props.elType;
      var disabled = props.disabled,
      LeftComponent = props.LeftComponent,
      close = props.close,
      onChange = props.onChange,
      onValueChange = props.onValueChange,
      RightComponent = props.RightComponent,
      styles = props.styles,
      SwitchComponent = props.SwitchComponent;
      props.setCheckedSetter;
      props.type;
      var themePath = props.themePath,
      thumbColor = props.thumbColor,
      trackColor = props.trackColor,
      value = props.value,
      elProps = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded$1);
  var _useState = React.useState(jsutils.toBool(checked || value)),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setChecked = _useState2[1];
  useSwitchHandle(ref, isChecked, setChecked);
  var elThemePath = themePath || "form.switch.".concat(close && 'close' || 'default');
  var themeStyles = useThemePath.useThemePath(elThemePath, styles);
  var activeStyles = useCheckedState(isChecked, themeStyles);
  var typeClassName = useThemeTypeAsClass_native.useThemeTypeAsClass();
  return children && React__default["default"].createElement(view_native.View, {
    className: typeClassName,
    style: activeStyles.main
  }, React__default["default"].createElement(ChildrenComponent, {
    className: "keg-switch-container",
    children: children
  })) || React__default["default"].createElement(view_native.View, {
    className: typeClassName,
    style: activeStyles.main
  }, LeftComponent && React__default["default"].createElement(SideComponent, {
    className: "keg-switch-left",
    Component: LeftComponent,
    style: activeStyles.content.left
  }), SwitchComponent ? renderFromType.renderFromType(SwitchComponent, _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, props), {}, {
    styles: activeStyles.content
  })) : React__default["default"].createElement(KegSwitch, _rollupPluginBabelHelpers._extends({
    elProps: elProps,
    disabled: disabled,
    styles: activeStyles.content
  }, getSwitchColors(thumbColor, trackColor, activeStyles.content), getChecked.getChecked(false, isChecked), getOnChangeHandler.getOnChangeHandler(false, setCheckedValue(isChecked, setChecked, onChange || onValueChange)))), RightComponent && React__default["default"].createElement(SideComponent, {
    className: "keg-switch-right",
    Component: RightComponent,
    style: activeStyles.content.right
  }));
});

var _excluded = ["children", "className", "elProps", "href", "onPress", "style", "target"];
var isWeb = getPlatform.getPlatform() === 'web';
var Text = kegText.KegText('link');
var Element = React__default["default"].forwardRef(function (props, ref) {
  var children = props.children;
      props.className;
      var elProps = props.elProps,
      href = props.href;
      props.onPress;
      var style = props.style,
      target = props.target,
      attrs = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded);
  return React__default["default"].createElement(touchable.Touchable, _rollupPluginBabelHelpers._extends({
    className: useClassList_native.useClassList()
  }, elProps, attrs, {
    touchRef: ref
  }), React__default["default"].createElement(Text, {
    accessibilityRole: "link",
    className: "keg-link-text",
    style: style,
    href: href,
    target: target
  }, children));
});
var Link = function Link(props) {
  return React__default["default"].createElement(link_wrapper.LinkWrapper, _rollupPluginBabelHelpers._extends({}, props, {
    Element: Element,
    isWeb: isWeb
  }));
};

var ScrollView = styleInjector.StyleInjector(scrollView.ScrollView, {
  displayName: 'Scroll-View',
  className: 'keg-scrollview'
});
ScrollView.propTypes = scrollView.ScrollView.propTypes;

var SectionList = styleInjector.StyleInjector(sectionList.SectionList, {
  displayName: 'SectionList',
  className: "keg-sectionlist"
});
SectionList.propTypes = sectionList.SectionList.propTypes;

var noAnimate = function noAnimate(toggled, current, _ref) {
  var initial = _ref.initial,
      to = _ref.to;
  return !toggled && current === initial || toggled && current === to;
};
var useSidebarStyles = function useSidebarStyles(_ref2) {
  var initial = _ref2.initial,
      styles = _ref2.styles,
      sidebarWidth = _ref2.sidebarWidth,
      location = _ref2.location;
  var dims = reTheme.useDimensions();
  var sidebarStyles = reTheme.useStyle('sidebar', styles);
  var width = sidebar.getSidebarWidth(sidebarWidth, initial, sidebarStyles);
  var mainStyles = React.useMemo(function () {
    return _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({
      flex: 1,
      zIndex: 5,
      position: 'fixed',
      top: 0,
      bottom: 0,
      height: dims.height
    }, sidebarStyles === null || sidebarStyles === void 0 ? void 0 : sidebarStyles.main), {}, _rollupPluginBabelHelpers._defineProperty({
      width: width
    }, location === 'right' ? location : 'left', initial));
  }, [location, width, initial, sidebarStyles === null || sidebarStyles === void 0 ? void 0 : sidebarStyles.main, dims === null || dims === void 0 ? void 0 : dims.height]);
  return {
    mainStyles: mainStyles,
    sidebarStyles: sidebarStyles
  };
};
var useSidebarToggle = function useSidebarToggle(props) {
  var toggled = props.toggled,
      _props$onToggled = props.onToggled,
      onToggled = _props$onToggled === void 0 ? jsutils.noOp : _props$onToggled,
      initial = props.initial,
      to = props.to;
  var _useState = React.useState(toggled),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      isToggled = _useState2[0],
      setIsToggled = _useState2[1];
  var _useState3 = React.useState(toggled),
      _useState4 = _rollupPluginBabelHelpers._slicedToArray(_useState3, 2),
      originalToggled = _useState4[0],
      setOriginalToggled = _useState4[1];
  React.useEffect(function () {
    if (originalToggled === toggled) return;
    setOriginalToggled(toggled);
    setIsToggled(toggled);
  }, [toggled, originalToggled]);
  var onTogglePress = React.useCallback(function (event) {
    var toggleUpdate = !isToggled;
    setIsToggled(toggleUpdate);
    jsutils.checkCall(onToggled, toggleUpdate);
  }, [isToggled, setIsToggled, initial, to]);
  return {
    toggled: toggled,
    isToggled: isToggled,
    setIsToggled: setIsToggled,
    onTogglePress: onTogglePress
  };
};
var useSidebarAnimate = function useSidebarAnimate(props, isToggled) {
  var _props$config = props.config,
      config = _props$config === void 0 ? jsutils.noOpObj : _props$config,
      initial = props.initial,
      to = props.to,
      _props$type = props.type,
      type = _props$type === void 0 ? 'timing' : _props$type;
  var _useState5 = React.useState(new reactNative.Animated.Value(initial)),
      _useState6 = _rollupPluginBabelHelpers._slicedToArray(_useState5, 2),
      animation = _useState6[0],
      setAnimation = _useState6[1];
  var xPosRef = React.useRef({
    initial: initial,
    to: to
  });
  React.useLayoutEffect(function () {
    if (!xPosRef.current) return;
    if (noAnimate(isToggled, animation._value, xPosRef.current)) return;
    var _xPosRef$current = xPosRef.current,
        initial = _xPosRef$current.initial,
        to = _xPosRef$current.to;
    var xPosChanges = isToggled ? {
      from: initial,
      to: to
    } : {
      from: to,
      to: initial
    };
    animation.setValue(xPosChanges.from);
    var animationConfig = config ? _rollupPluginBabelHelpers._objectSpread2(_rollupPluginBabelHelpers._objectSpread2({}, config), {}, {
      toValue: xPosChanges.to
    }) : {
      toValue: xPosChanges.to
    };
    animationConfig.useNativeDriver = false;
    reactNative.Animated[type](animation, animationConfig).start();
  }, [isToggled, type, config]);
  return {
    animation: animation,
    setAnimation: setAnimation
  };
};
var Sidebar = function Sidebar(props) {
  var to = props.to,
      initial = props.initial,
      children = props.children,
      location = props.location,
      onOffClick = props.onOffClick,
      sidebarWidth = props.sidebarWidth,
      ToggleComponent = props.ToggleComponent;
  var _useSidebarToggle = useSidebarToggle(props),
      isToggled = _useSidebarToggle.isToggled,
      setIsToggled = _useSidebarToggle.setIsToggled,
      onTogglePress = _useSidebarToggle.onTogglePress;
  var _useSidebarAnimate = useSidebarAnimate(props, isToggled),
      animation = _useSidebarAnimate.animation;
  var _useSidebarStyles = useSidebarStyles(props),
      mainStyles = _useSidebarStyles.mainStyles,
      sidebarStyles = _useSidebarStyles.sidebarStyles;
  var Toggler = isValidComponent.isValidComponent(ToggleComponent) && React__default["default"].createElement(ToggleComponent, {
    to: to,
    initial: initial,
    location: location,
    toggled: isToggled,
    onOffClick: onOffClick,
    onPress: onTogglePress,
    sidebarWidth: sidebarWidth,
    setIsToggled: setIsToggled,
    styles: sidebarStyles === null || sidebarStyles === void 0 ? void 0 : sidebarStyles.toggle
  });
  return React__default["default"].createElement(React__default["default"].Fragment, null, React__default["default"].createElement(reactNative.Animated.View, {
    style: [mainStyles, _rollupPluginBabelHelpers._defineProperty({}, location, animation)]
  }, React__default["default"].createElement(sidebar.SidebarMain, {
    className: "sidebar-main",
    style: sidebarStyles === null || sidebarStyles === void 0 ? void 0 : sidebarStyles.main
  }, location === 'right' && Toggler, React__default["default"].createElement(sidebar.SidebarContainer, {
    location: location,
    sidebarWidth: sidebarWidth,
    className: "sidebar-container",
    style: sidebarStyles === null || sidebarStyles === void 0 ? void 0 : sidebarStyles.container
  }, children), location !== 'right' && Toggler)));
};
Sidebar.Toggle = sidebarToggle.SidebarToggle;
Sidebar.defaultProps = {
  config: jsutils.noOpObj,
  location: 'left',
  type: 'timing',
  ToggleComponent: sidebarToggle.SidebarToggle
};

var KegSvgIcon = svgIcon.SvgIcon,
    svgElements = _rollupPluginBabelHelpers._objectWithoutProperties(svgIcon.NativeSvg, ["SvgIcon"]);
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

exports.TextBox = textBox.TextBox;
exports.Button = button.Button;
exports.Card = card.Card;
exports.Divider = divider.Divider;
exports.Drawer = drawer.Drawer;
exports.View = view_native.View;
exports.Caption = caption.Caption;
exports.H1 = h1.H1;
exports.H2 = h2.H2;
exports.H3 = h3.H3;
exports.H4 = h4.H4;
exports.H5 = h5.H5;
exports.H6 = h6.H6;
exports.Label = label.Label;
exports.P = p.P;
exports.Subtitle = subtitle.Subtitle;
exports.Text = text.Text;
exports.Checkbox = checkbox.Checkbox;
exports.useClassList = useClassList_native.useClassList;
exports.useChildrenWithRefs = useChildrenWithRefs.useChildrenWithRefs;
exports.useThemePath = useThemePath.useThemePath;
exports.useThemeWithHeight = useThemeWithHeight.useThemeWithHeight;
exports.Input = input.Input;
exports.getInputValueKey = getInputValue.getInputValueKey;
exports.getValueFromChildren = getInputValue.getValueFromChildren;
exports.useSelectHandlers = useSelectHandlers.useSelectHandlers;
exports.useClassName = useClassName_native.useClassName;
exports.useThemeTypeAsClass = useThemeTypeAsClass_native.useThemeTypeAsClass;
exports.Icon = icon.Icon;
exports.renderFromType = renderFromType.renderFromType;
exports.getOnChangeHandler = getOnChangeHandler.getOnChangeHandler;
exports.getChecked = getChecked.getChecked;
exports.ItemHeader = itemHeader.ItemHeader;
exports.AppHeader = appHeader.AppHeader;
exports.TouchableIcon = touchableIcon.TouchableIcon;
exports.Image = cardMedia.Image;
exports.Grid = grid.Grid;
exports.Row = row.Row;
exports.Column = column.Column;
exports.Touchable = touchable.Touchable;
exports.getPlatform = getPlatform.getPlatform;
exports.Loading = loading.Loading;
exports.Modal = modal.Modal;
exports.getElementLayout = sectionList.getElementLayout;
exports.scrollList = sectionList.scrollList;
exports.useScroll = sectionList.useScroll;
exports.Section = section.Section;
exports.isValidComponent = isValidComponent.isValidComponent;
exports.SidebarToggle = sidebarToggle.SidebarToggle;
exports.TextToggle = textToggle.TextToggle;
exports.withTouch = withTouch.withTouch;
exports.withScrollIntoView = withScrollIntoView.withScrollIntoView;
exports.useOutsideDetect = withOutsideDetect.useOutsideDetect;
exports.withOutsideDetect = withOutsideDetect.withOutsideDetect;
exports.theme = theme.theme;
exports.useAccessibilityRole = useAccessibilityRole.useAccessibilityRole;
exports.useAnimate = useSpin.useAnimate;
exports.useSpin = useSpin.useSpin;
exports.getItemsMatchingText = useAutocompleteItems.getItemsMatchingText;
exports.useAutocompleteItems = useAutocompleteItems.useAutocompleteItems;
exports.useChildren = useChildren.useChildren;
exports.useInputHandlers = useInputHandlers.useInputHandlers;
exports.useMediaProps = useMediaProps.useMediaProps;
exports.usePressHandlers = usePressHandlers.usePressHandlers;
exports.useTextAccessibility = useTextAccessibility.useTextAccessibility;
exports.useFromToAnimation = useFromToAnimation.useFromToAnimation;
exports.useScrollClassName = useScrollClassName_native.useScrollClassName;
exports.getOnLoad = getOnLoad.getOnLoad;
exports.getPressHandler = getPressHandler.getPressHandler;
exports.getTextFromChangeEvent = getTextFromChangeEvent.getTextFromChangeEvent;
exports.ensureClassArray = ensureClassArray.ensureClassArray;
exports.getActiveOpacity = getActiveOpacity.getActiveOpacity;
exports.getImgSrc = getImgSrc.getImgSrc;
exports.getReadOnly = getReadOnly.getReadOnly;
exports.getTarget = getTarget.getTarget;
exports.handleRefUpdate = handleRefUpdate.handleRefUpdate;
exports.updateClassNames = updateClassNames.updateClassNames;
exports.buildColorStyles = buildColorStyles.buildColorStyles;
exports.buildSurfaceStyles = buildColorStyles.buildSurfaceStyles;
exports.getStyles = getStyles.getStyles;
exports.inheritFrom = inheritFrom.inheritFrom;
exports.platformFlatten = platformFlatten.platformFlatten;
exports.buildTheme = buildTheme.buildTheme;
exports.validateFunctions = validateFunctions.validateFunctions;
exports.A = Link;
exports.CheckGroup = CheckGroup;
exports.FilePicker = FilePicker;
exports.Form = Form;
exports.Link = Link;
exports.Option = Option;
exports.Radio = Radio;
exports.ScrollView = ScrollView;
exports.SectionList = SectionList;
exports.Select = Select;
exports.Sidebar = Sidebar;
exports.Slider = Slider;
exports.SvgIcon = SvgIcon;
exports.SvgIconInject = SvgIconInject;
exports.Switch = Switch;
exports.useKeyPress = useKeyPress;
exports.useScrollIntoView = useScrollIntoView;
//# sourceMappingURL=index.js.map
