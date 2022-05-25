'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var textBox = require('./textBox.js');
var button = require('./button.js');
var card = require('./card.js');
var divider = require('./divider.js');
var drawer = require('./drawer.js');
var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var jsutils = require('@keg-hub/jsutils');
require('@keg-hub/re-theme/colors');
var useThemePath = require('./useThemePath.js');
var useThemeWithHeight = require('./useThemeWithHeight.js');
var reactNativeWeb = require('react-native-web');
var useThemeTypeAsClass = require('./useThemeTypeAsClass-43ee56b4.js');
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
var view = require('./view-3370300d.js');
var styleInjector = require('@keg-hub/re-theme/styleInjector');
var input_web = require('./input.web-3e205b72.js');
var checkbox = require('./checkbox-62b5042d.js');
var reTheme = require('@keg-hub/re-theme');
var useClassList = require('./useClassList-89a8dbd4.js');
var useChildrenWithRefs = require('./useChildrenWithRefs.js');
var input = require('./input-dfd0cc20.js');
var select = require('./select-d72ff0ce.js');
var getInputValue = require('./getInputValue.js');
var useSelectHandlers = require('./useSelectHandlers.js');
var useClassName = require('./useClassName-75c55cf8.js');
require('./svgIcon-ef322a2a.js');
var chevronDown = require('./chevronDown-67e5a61e.js');
var icon = require('./icon-96c32b96.js');
var renderFromType = require('./renderFromType.js');
var getOnChangeHandler = require('./getOnChangeHandler.js');
var getChecked = require('./getChecked.js');
var _switch = require('./switch-443c3c2b.js');
var itemHeader = require('./itemHeader.js');
var appHeader = require('./appHeader.js');
var touchableIcon = require('./touchableIcon.js');
var cardMedia = require('./cardMedia-a4f3aac2.js');
var grid = require('./grid.js');
var row = require('./row.js');
var column = require('./column.js');
var link_wrapper = require('./link.wrapper-47b6721c.js');
var kegText = require('./kegText-c47b7b6e.js');
var touchable = require('./touchable.js');
var getPlatform = require('./getPlatform-ec53cd5e.js');
var loading = require('./loading.js');
var modal = require('./modal.js');
var scrollView = require('./scrollView.js');
var sectionList = require('./sectionList-d9b366b7.js');
var section = require('./section.js');
var isValidComponent = require('./isValidComponent.js');
var sidebarToggle = require('./sidebarToggle.js');
var sidebar = require('./sidebar.js');
var svgIcon = require('./svgIcon.js');
var textToggle = require('./textToggle.js');
var withTouch = require('./withTouch.js');
var withScrollIntoView = require('./withScrollIntoView-a8e4d7d3.js');
var withOutsideDetect = require('./withOutsideDetect-f347aa87.js');
var theme = require('./theme.js');
var useAccessibilityRole = require('./useAccessibilityRole.js');
var useSpin = require('./useSpin-a05a1b73.js');
var useAutocompleteItems = require('./useAutocompleteItems.js');
var useChildren = require('./useChildren.js');
var useInputHandlers = require('./useInputHandlers.js');
var useMediaProps = require('./useMediaProps.js');
var usePressHandlers = require('./usePressHandlers.js');
var useTextAccessibility = require('./useTextAccessibility.js');
var useFromToAnimation = require('./useFromToAnimation.js');
var useScrollClassName = require('./useScrollClassName-15b6697b.js');
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
var buildColorStyles = require('./buildColorStyles.js');
var getStyles = require('./getStyles.js');
var inheritFrom = require('./inheritFrom.js');
var platformFlatten = require('./platformFlatten.js');
var buildTheme = require('./buildTheme.js');
var validateFunctions = require('./validateFunctions.js');
require('./cardContent.js');
require('./cardCallout.js');
require('./cardContainer.js');
require('./cardSection.js');
require('./colors-da502c66.js');
require('./view.native-a1d03d45.js');
require('./checkbox.wrapper-90b47d6a.js');
require('./input-fa8fdff1.js');
require('./svgIcon.native-48f0d173.js');
require('react-native-svg-web');
require('./image-1297b42f.js');
require('./container.js');
require('./kegText.native-d2f2e1a3.js');
require('./useTextStyles.js');
require('./indicator.wrapper-a9a1aa52.js');
require('./getScrollValues-f3b1bfa7.js');
require('./useToggledStyles.js');
require('@keg-hub/re-theme/reStyle');
require('./isCssUnits.js');
require('./themeDefaults-f48ffcaf.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var manageListeners = function manageListeners(upHandler, downHandler) {
  window.addEventListener('keydown', downHandler);
  window.addEventListener('keyup', upHandler);
  return function () {
    window.removeEventListener('keydown', downHandler);
    window.removeEventListener('keyup', upHandler);
  };
};
var useKeyPress = function useKeyPress(targetKey) {
  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      keyPressed = _useState2[0],
      setKeyPressed = _useState2[1];
  var downHandler = React.useCallback(function (evt) {
    return evt.key === targetKey && setKeyPressed(true);
  }, [setKeyPressed, targetKey]);
  var upHandler = React.useCallback(function (evt) {
    return evt.key === targetKey && setKeyPressed(false);
  }, [setKeyPressed, targetKey]);
  React.useEffect(function () {
    return manageListeners(upHandler, downHandler);
  }, [downHandler, upHandler]);
  return keyPressed;
};

var _excluded$6 = ["className", "onChange", "title", "children", "style", "showFile", "onFilePicked", "themePath", "buttonThemePath", "capture", "openOnMount"];
var Input = styleInjector.StyleInjector(input_web.Input, {
  maxSelectors: 0,
  kegComponent: true,
  displayName: 'FilePickerInput',
  className: 'keg-file-picker-input'
});
var FilePicker = React__default["default"].forwardRef(function (props, _ref) {
  var className = props.className,
      onChange = props.onChange,
      title = props.title,
      children = props.children,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$showFile = props.showFile,
      showFile = _props$showFile === void 0 ? true : _props$showFile,
      onFilePicked = props.onFilePicked,
      _props$themePath = props.themePath,
      themePath = _props$themePath === void 0 ? 'filePicker.default' : _props$themePath,
      _props$buttonThemePat = props.buttonThemePath,
      buttonThemePath = _props$buttonThemePat === void 0 ? 'button.contained.default' : _props$buttonThemePat,
      capture = props.capture,
      _props$openOnMount = props.openOnMount,
      openOnMount = _props$openOnMount === void 0 ? false : _props$openOnMount,
      args = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded$6);
  var componentTheme = useThemePath.useThemePath(themePath);
  var _useState = React.useState({}),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];
  var handleInputChange = React.useCallback(function (event) {
    onChange && onChange(event);
    var file = event.target.files[0];
    file && onFilePicked && onFilePicked(file);
    file && setFile(file);
  }, [onChange, onFilePicked, setFile]);
  var refToInput = React.useRef();
  var clickInput = React.useCallback(function () {
    return refToInput.current && refToInput.current.click();
  }, [refToInput]);
  React.useEffect(function () {
    openOnMount && clickInput();
  }, []);
  return React__default["default"].createElement(view.View, {
    className: useThemeTypeAsClass.useThemeTypeAsClass(themePath || type, 'keg-filepicker', className),
    style: [jsutils.get(componentTheme, 'main'), style]
  }, React__default["default"].createElement(button.Button, {
    content: title,
    onClick: clickInput,
    style: jsutils.get(componentTheme, 'content.button'),
    themePath: buttonThemePath
  }, children),
  showFile && React__default["default"].createElement(p.P, {
    style: jsutils.get(componentTheme, 'content.file')
  }, file.name), React__default["default"].createElement(Input, _rollupPluginBabelHelpers._extends({}, args, {
    ref: function ref(input) {
      _ref && (_ref.current = input);
      refToInput.current = input;
    },
    onChange: handleInputChange,
    style: jsutils.get(componentTheme, 'content.input'),
    type: "file",
    capture: capture
  })));
});

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
  var className = props.className,
      headerClassName = props.headerClassName,
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
  return React__default["default"].createElement(view.View, {
    className: useClassList.useClassList('keg-check-group', className),
    style: groupStyles === null || groupStyles === void 0 ? void 0 : groupStyles.main
  }, showHeader && React__default["default"].createElement(Header, null), childrenWithProps);
});
CheckGroup.Item = checkbox.Checkbox;

var _excluded$4 = ["children", "className", "elType", "style", "type", "themePath"];
var Form = React__default["default"].forwardRef(function (props, ref) {
  var theme = reTheme.useTheme();
  var children = props.children,
      className = props.className;
      props.elType;
      var style = props.style,
      type = props.type,
      _props$themePath = props.themePath,
      themePath = _props$themePath === void 0 ? "form.form.".concat(type || 'default') : _props$themePath,
      elProps = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded$4);
  var formTheme = useThemePath.useThemePath(themePath);
  return React__default["default"].createElement(view.View, _rollupPluginBabelHelpers._extends({
    accessibilityRole: "form",
    className: useClassList.useClassList('keg-form', className)
  }, elProps, {
    style: [jsutils.get(theme, 'form.form.default'), formTheme, style],
    ref: ref
  }), children);
});

var _excluded$3 = ["children", "label", "style", "text", "value"];
var Option = function Option(props) {
  var children = props.children,
      label = props.label;
      props.style;
      var text = props.text,
      value = props.value,
      args = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded$3);
  return React__default["default"].createElement("option", _rollupPluginBabelHelpers._extends({}, args, {
    value: value || label || text
  }), label || value || text || children);
};

var Radio = function Radio(props) {
  return React__default["default"].createElement(input.Input, _rollupPluginBabelHelpers._extends({}, props, {
    type: "radio"
  }));
};

var _excluded$2 = ["className", "children", "disabled", "readOnly", "onChange", "onValueChange", "style", "styles", "type", "themePath", "value"];
var KegSelect = styleInjector.StyleInjector(select.Select, {
  maxSelectors: 0,
  kegComponent: true,
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
  var className = props.className,
      children = props.children,
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
  var selectClasses = useThemeTypeAsClass.useThemeTypeAsClass(themePath || type, 'keg-select', className);
  var classRef = useClassName.useClassName('keg-select', selectClasses, ref);
  return React__default["default"].createElement(view.View, {
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
  maxSelectors: 0,
  kegComponent: true,
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
  var className = props.className,
      checked = props.checked,
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
      var type = props.type,
      themePath = props.themePath,
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
  var typeClassName = useThemeTypeAsClass.useThemeTypeAsClass(elThemePath || type, 'keg-switch', className);
  return children && React__default["default"].createElement(view.View, {
    className: typeClassName,
    style: activeStyles.main
  }, React__default["default"].createElement(ChildrenComponent, {
    className: "keg-switch-container",
    children: children
  })) || React__default["default"].createElement(view.View, {
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
  var children = props.children,
      className = props.className,
      elProps = props.elProps,
      href = props.href;
      props.onPress;
      var style = props.style,
      target = props.target,
      attrs = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded);
  return React__default["default"].createElement(touchable.Touchable, _rollupPluginBabelHelpers._extends({
    className: useClassList.useClassList('keg-link', className)
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
  var _useState5 = React.useState(new reactNativeWeb.Animated.Value(initial)),
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
    reactNativeWeb.Animated[type](animation, animationConfig).start();
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
  return React__default["default"].createElement(React__default["default"].Fragment, null, React__default["default"].createElement(reactNativeWeb.Animated.View, {
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

exports.TextBox = textBox.TextBox;
exports.Button = button.Button;
exports.Card = card.Card;
exports.Divider = divider.Divider;
exports.Drawer = drawer.Drawer;
exports.useThemePath = useThemePath.useThemePath;
exports.useThemeWithHeight = useThemeWithHeight.useThemeWithHeight;
exports.useThemeTypeAsClass = useThemeTypeAsClass.useThemeTypeAsClass;
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
exports.View = view.View;
exports.Checkbox = checkbox.Checkbox;
exports.useClassList = useClassList.useClassList;
exports.useChildrenWithRefs = useChildrenWithRefs.useChildrenWithRefs;
exports.Input = input.Input;
exports.getInputValueKey = getInputValue.getInputValueKey;
exports.getValueFromChildren = getInputValue.getValueFromChildren;
exports.useSelectHandlers = useSelectHandlers.useSelectHandlers;
exports.useClassName = useClassName.useClassName;
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
exports.ScrollView = scrollView.ScrollView;
exports.SectionList = sectionList.SectionList;
exports.getElementLayout = sectionList.getElementLayout;
exports.scrollList = sectionList.scrollList;
exports.useScroll = sectionList.useScroll;
exports.Section = section.Section;
exports.isValidComponent = isValidComponent.isValidComponent;
exports.SidebarToggle = sidebarToggle.SidebarToggle;
exports.SvgIcon = svgIcon.SvgIcon;
exports.SvgIconInject = svgIcon.SvgIconInject;
exports.TextToggle = textToggle.TextToggle;
exports.withTouch = withTouch.withTouch;
exports.useScrollIntoView = withScrollIntoView.useScrollIntoView;
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
exports.useScrollClassName = useScrollClassName.useScrollClassName;
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
exports.Select = Select;
exports.Sidebar = Sidebar;
exports.Slider = Slider;
exports.Switch = Switch;
exports.useKeyPress = useKeyPress;
//# sourceMappingURL=index.js.map
