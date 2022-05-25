export { TextBox } from './textBox.js';
import { Button } from './button.js';
export { Button } from './button.js';
export { Card } from './card.js';
export { Divider } from './divider.js';
export { Drawer } from './drawer.js';
import { b as _slicedToArray, d as _objectWithoutProperties, e as _extends, a as _defineProperty, _ as _objectSpread2 } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default, { useState, useCallback, useEffect, useRef, useImperativeHandle, useMemo, forwardRef, useLayoutEffect } from 'react';
import { get, noOp, mapObj, toBool, isStr, checkCall, noOpObj } from '@keg-hub/jsutils';
import '@keg-hub/re-theme/colors';
import { useThemePath } from './useThemePath.js';
export { useThemePath } from './useThemePath.js';
export { useThemeWithHeight } from './useThemeWithHeight.js';
import { Animated } from 'react-native-web';
import { u as useThemeTypeAsClass } from './useThemeTypeAsClass-1d2ed78d.js';
export { u as useThemeTypeAsClass } from './useThemeTypeAsClass-1d2ed78d.js';
export { Caption } from './caption.js';
export { H1 } from './h1.js';
export { H2 } from './h2.js';
export { H3 } from './h3.js';
export { H4 } from './h4.js';
export { H5 } from './h5.js';
export { H6 } from './h6.js';
export { Label } from './label.js';
import { P } from './p.js';
export { P } from './p.js';
export { Subtitle } from './subtitle.js';
import { Text as Text$1 } from './text.js';
export { Text } from './text.js';
import { V as View } from './view-23665db9.js';
export { V as View } from './view-23665db9.js';
import { StyleInjector } from '@keg-hub/re-theme/styleInjector';
import { I as Input$1 } from './input.web-2c668800.js';
import { C as Checkbox } from './checkbox-0876e7e4.js';
export { C as Checkbox } from './checkbox-0876e7e4.js';
import { useStyle, useTheme, useDimensions } from '@keg-hub/re-theme';
import { u as useClassList } from './useClassList-1d418045.js';
export { u as useClassList } from './useClassList-1d418045.js';
import { useChildrenWithRefs } from './useChildrenWithRefs.js';
export { useChildrenWithRefs } from './useChildrenWithRefs.js';
import { I as Input$2 } from './input-bba35c9c.js';
export { I as Input } from './input-bba35c9c.js';
import { S as Select$1 } from './select-1a68b99c.js';
import { getValueFromChildren, getInputValueKey } from './getInputValue.js';
export { getInputValueKey, getValueFromChildren } from './getInputValue.js';
import { useSelectHandlers } from './useSelectHandlers.js';
export { useSelectHandlers } from './useSelectHandlers.js';
import { u as useClassName } from './useClassName-52067a95.js';
export { u as useClassName } from './useClassName-52067a95.js';
import './svgIcon-389f9d70.js';
import { C as ChevronDown } from './chevronDown-ba9bb372.js';
import { I as Icon } from './icon-b6da5cf9.js';
export { I as Icon } from './icon-b6da5cf9.js';
import { renderFromType } from './renderFromType.js';
export { renderFromType } from './renderFromType.js';
import { getOnChangeHandler } from './getOnChangeHandler.js';
export { getOnChangeHandler } from './getOnChangeHandler.js';
import { getChecked } from './getChecked.js';
export { getChecked } from './getChecked.js';
import { S as Switch$1 } from './switch-2617b5bf.js';
export { ItemHeader } from './itemHeader.js';
export { AppHeader } from './appHeader.js';
export { TouchableIcon } from './touchableIcon.js';
export { I as Image } from './cardMedia-76762ceb.js';
export { Grid } from './grid.js';
export { Row } from './row.js';
export { Column } from './column.js';
import { L as LinkWrapper } from './link.wrapper-2fd965cc.js';
import { K as KegText } from './kegText-1ab95fab.js';
import { Touchable } from './touchable.js';
export { Touchable } from './touchable.js';
import { g as getPlatform } from './getPlatform-95568099.js';
export { g as getPlatform } from './getPlatform-95568099.js';
export { Loading } from './loading.js';
export { Modal } from './modal.js';
export { ScrollView } from './scrollView.js';
export { S as SectionList, g as getElementLayout, s as scrollList, u as useScroll } from './sectionList-e0ca62c3.js';
export { Section } from './section.js';
import { isValidComponent } from './isValidComponent.js';
export { isValidComponent } from './isValidComponent.js';
import { SidebarToggle } from './sidebarToggle.js';
export { SidebarToggle } from './sidebarToggle.js';
import { SidebarMain, SidebarContainer, getSidebarWidth } from './sidebar.js';
export { SvgIcon, SvgIconInject } from './svgIcon.js';
export { TextToggle } from './textToggle.js';
export { withTouch } from './withTouch.js';
export { u as useScrollIntoView, w as withScrollIntoView } from './withScrollIntoView-78f2d09d.js';
export { u as useOutsideDetect, w as withOutsideDetect } from './withOutsideDetect-ad5803dc.js';
export { theme } from './theme.js';
export { useAccessibilityRole } from './useAccessibilityRole.js';
export { u as useAnimate, a as useSpin } from './useSpin-389d72c8.js';
export { getItemsMatchingText, useAutocompleteItems } from './useAutocompleteItems.js';
export { useChildren } from './useChildren.js';
export { useInputHandlers } from './useInputHandlers.js';
export { useMediaProps } from './useMediaProps.js';
export { usePressHandlers } from './usePressHandlers.js';
export { useTextAccessibility } from './useTextAccessibility.js';
export { useFromToAnimation } from './useFromToAnimation.js';
export { u as useScrollClassName } from './useScrollClassName-b9937079.js';
export { getOnLoad } from './getOnLoad.js';
export { getPressHandler } from './getPressHandler.js';
export { getTextFromChangeEvent } from './getTextFromChangeEvent.js';
export { ensureClassArray } from './ensureClassArray.js';
export { getActiveOpacity } from './getActiveOpacity.js';
export { getImgSrc } from './getImgSrc.js';
export { getReadOnly } from './getReadOnly.js';
export { getTarget } from './getTarget.js';
export { handleRefUpdate } from './handleRefUpdate.js';
export { updateClassNames } from './updateClassNames.js';
export { buildColorStyles, buildSurfaceStyles } from './buildColorStyles.js';
export { getStyles } from './getStyles.js';
export { inheritFrom } from './inheritFrom.js';
export { platformFlatten } from './platformFlatten.js';
export { buildTheme } from './buildTheme.js';
export { validateFunctions } from './validateFunctions.js';
import './cardContent.js';
import './cardCallout.js';
import './cardContainer.js';
import './cardSection.js';
import './colors-6402d3b3.js';
import './view.native-f56118b2.js';
import './checkbox.wrapper-a93c2d4b.js';
import './input-e3c661c1.js';
import './svgIcon.native-e0c41d6c.js';
import 'react-native-svg-web';
import './image-aa6f61ca.js';
import './container.js';
import './kegText.native-ba7d1c9c.js';
import './useTextStyles.js';
import './indicator.wrapper-a4270a4d.js';
import './getScrollValues-1e13266a.js';
import './useToggledStyles.js';
import '@keg-hub/re-theme/reStyle';
import './isCssUnits.js';
import './themeDefaults-ae219f8e.js';

var manageListeners = function manageListeners(upHandler, downHandler) {
  window.addEventListener('keydown', downHandler);
  window.addEventListener('keyup', upHandler);
  return function () {
    window.removeEventListener('keydown', downHandler);
    window.removeEventListener('keyup', upHandler);
  };
};
var useKeyPress = function useKeyPress(targetKey) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      keyPressed = _useState2[0],
      setKeyPressed = _useState2[1];
  var downHandler = useCallback(function (evt) {
    return evt.key === targetKey && setKeyPressed(true);
  }, [setKeyPressed, targetKey]);
  var upHandler = useCallback(function (evt) {
    return evt.key === targetKey && setKeyPressed(false);
  }, [setKeyPressed, targetKey]);
  useEffect(function () {
    return manageListeners(upHandler, downHandler);
  }, [downHandler, upHandler]);
  return keyPressed;
};

var _excluded$6 = ["className", "onChange", "title", "children", "style", "showFile", "onFilePicked", "themePath", "buttonThemePath", "capture", "openOnMount"];
var Input = StyleInjector(Input$1, {
  maxSelectors: 0,
  kegComponent: true,
  displayName: 'FilePickerInput',
  className: 'keg-file-picker-input'
});
var FilePicker = React__default.forwardRef(function (props, _ref) {
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
      args = _objectWithoutProperties(props, _excluded$6);
  var componentTheme = useThemePath(themePath);
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];
  var handleInputChange = useCallback(function (event) {
    onChange && onChange(event);
    var file = event.target.files[0];
    file && onFilePicked && onFilePicked(file);
    file && setFile(file);
  }, [onChange, onFilePicked, setFile]);
  var refToInput = useRef();
  var clickInput = useCallback(function () {
    return refToInput.current && refToInput.current.click();
  }, [refToInput]);
  useEffect(function () {
    openOnMount && clickInput();
  }, []);
  return React__default.createElement(View, {
    className: useThemeTypeAsClass(themePath || type, 'keg-filepicker', className),
    style: [get(componentTheme, 'main'), style]
  }, React__default.createElement(Button, {
    content: title,
    onClick: clickInput,
    style: get(componentTheme, 'content.button'),
    themePath: buttonThemePath
  }, children),
  showFile && React__default.createElement(P, {
    style: get(componentTheme, 'content.file')
  }, file.name), React__default.createElement(Input, _extends({}, args, {
    ref: function ref(input) {
      _ref && (_ref.current = input);
      refToInput.current = input;
    },
    onChange: handleInputChange,
    style: get(componentTheme, 'content.input'),
    type: "file",
    capture: capture
  })));
});

var _excluded$5 = ["title", "className", "style"];
var SimpleHeader = React__default.forwardRef(function (props, ref) {
  var title = props.title,
      className = props.className,
      style = props.style,
      rest = _objectWithoutProperties(props, _excluded$5);
  useImperativeHandle(ref, function () {
    return {
      isChecked: undefined,
      setChecked: noOp
    };
  });
  var textStyle = useStyle('form.checkGroup.simpleHeader.main', style);
  return React__default.createElement(Text$1, _extends({
    className: className,
    style: textStyle
  }, rest), title);
});
var CheckboxHeader = React__default.forwardRef(function (props, ref) {
  var title = props.title,
      className = props.className,
      style = props.style,
      onPress = props.onPress,
      checked = props.checked;
  var headerStyles = useMemo(function () {
    return {
      main: style,
      content: {
        right: {}
      }
    };
  }, [style]);
  var onChangeHandler = useCallback(function (_, val) {
    return onPress === null || onPress === void 0 ? void 0 : onPress(val);
  }, [onPress]);
  return React__default.createElement(Checkbox, {
    RightComponent: title,
    rightClassName: className,
    styles: headerStyles,
    checked: checked,
    onChange: onChangeHandler,
    ref: ref,
    close: true
  });
});
var CheckGroup = React__default.forwardRef(function (props, ref) {
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
  var groupStyles = useStyle('form.checkGroup', styles);
  var _useChildrenWithRefs = useChildrenWithRefs(children, showHeaderCheckbox),
      _useChildrenWithRefs2 = _slicedToArray(_useChildrenWithRefs, 2),
      childrenWithProps = _useChildrenWithRefs2[0],
      childRefs = _useChildrenWithRefs2[1];
  var headerCheckHandler = useCallback(function (checked) {
    onGroupPress === null || onGroupPress === void 0 ? void 0 : onGroupPress(checked);
    mapObj(childRefs.current, function (_, child) {
      var _child$setChecked;
      return child === null || child === void 0 ? void 0 : (_child$setChecked = child.setChecked) === null || _child$setChecked === void 0 ? void 0 : _child$setChecked.call(child, checked);
    });
  }, [childRefs]);
  var Header = function Header() {
    return showHeaderCheckbox ? React__default.createElement(CheckboxHeader, {
      className: headerClassName,
      style: groupStyles === null || groupStyles === void 0 ? void 0 : groupStyles.header,
      title: title,
      onPress: showHeaderCheckbox && headerCheckHandler,
      checked: showHeaderCheckbox ? initChecked : undefined,
      ref: ref
    }) : React__default.createElement(SimpleHeader, {
      className: headerClassName,
      style: groupStyles === null || groupStyles === void 0 ? void 0 : groupStyles.header,
      title: title,
      ref: ref
    });
  };
  return React__default.createElement(View, {
    className: useClassList('keg-check-group', className),
    style: groupStyles === null || groupStyles === void 0 ? void 0 : groupStyles.main
  }, showHeader && React__default.createElement(Header, null), childrenWithProps);
});
CheckGroup.Item = Checkbox;

var _excluded$4 = ["children", "className", "elType", "style", "type", "themePath"];
var Form = React__default.forwardRef(function (props, ref) {
  var theme = useTheme();
  var children = props.children,
      className = props.className;
      props.elType;
      var style = props.style,
      type = props.type,
      _props$themePath = props.themePath,
      themePath = _props$themePath === void 0 ? "form.form.".concat(type || 'default') : _props$themePath,
      elProps = _objectWithoutProperties(props, _excluded$4);
  var formTheme = useThemePath(themePath);
  return React__default.createElement(View, _extends({
    accessibilityRole: "form",
    className: useClassList('keg-form', className)
  }, elProps, {
    style: [get(theme, 'form.form.default'), formTheme, style],
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
      args = _objectWithoutProperties(props, _excluded$3);
  return React__default.createElement("option", _extends({}, args, {
    value: value || label || text
  }), label || value || text || children);
};

var Radio = function Radio(props) {
  return React__default.createElement(Input$2, _extends({}, props, {
    type: "radio"
  }));
};

var _excluded$2 = ["className", "children", "disabled", "readOnly", "onChange", "onValueChange", "style", "styles", "type", "themePath", "value"];
var KegSelect = StyleInjector(Select$1, {
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
  var setValue = getValueFromChildren(value, children);
  var valKey = getInputValueKey(false, onChange, onValueChange, readOnly);
  return _defineProperty({}, valKey, setValue);
};
var Select = React__default.forwardRef(function (props, ref) {
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
      var elProps = _objectWithoutProperties(props, _excluded$2);
  var selectStyles = useThemePath(themePath, styles);
  var selectClasses = useThemeTypeAsClass(themePath || type, 'keg-select', className);
  var classRef = useClassName('keg-select', selectClasses, ref);
  return React__default.createElement(View, {
    style: [selectStyles.main, style]
  }, React__default.createElement(KegSelect, _extends({
    ref: classRef
  }, elProps, {
    enabled: !disabled,
    style: [selectStyles.select]
  }, getValue(props), useSelectHandlers({
    onChange: onChange,
    onValueChange: onValueChange
  })), children), React__default.createElement(Icon, {
    styles: selectStyles.icon,
    Component: ChevronDown,
    color: disabled && ((_selectStyles$icon = selectStyles.icon) === null || _selectStyles$icon === void 0 ? void 0 : (_selectStyles$icon$di = _selectStyles$icon.disabled) === null || _selectStyles$icon$di === void 0 ? void 0 : _selectStyles$icon$di.color)
  }));
});

var Slider = function Slider() {
  return null;
};

var _excluded$1 = ["className", "checked", "children", "elType", "disabled", "LeftComponent", "close", "onChange", "onValueChange", "RightComponent", "styles", "SwitchComponent", "setCheckedSetter", "type", "themePath", "thumbColor", "trackColor", "value"];
var KegSwitch = StyleInjector(Switch$1, {
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
  var colors = _objectSpread2(_objectSpread2({}, indicatorColor && {
    thumbColor: thumbColor || color
  }), areaColor && {
    trackColor: areaColor,
    onTintColor: areaColor
  });
  return colors;
};
var useCheckedState = function useCheckedState(isChecked, themeStyles) {
  var theme = useTheme();
  return useMemo(function () {
    return theme.get(themeStyles, {
      content: {
        area: _objectSpread2(_objectSpread2({}, get(themeStyles, 'content.area.off')), isChecked && get(themeStyles, 'content.area.on')),
        indicator: _objectSpread2(_objectSpread2({}, get(themeStyles, 'content.indicator.off')), isChecked && get(themeStyles, 'content.indicator.on'))
      }
    });
  }, [isChecked]);
};
var setCheckedValue = function setCheckedValue(isChecked, setChecked, onChange) {
  return function (event) {
    setChecked(!isChecked);
    checkCall(onChange, event, !isChecked);
  };
};
var SideComponent = function SideComponent(_ref2) {
  var Component = _ref2.Component,
      style = _ref2.style;
  return isStr(Component) ? React__default.createElement(Text$1, {
    style: style
  }, Component) : renderFromType(Component, {
    style: styles.content
  });
};
var ChildrenComponent = function ChildrenComponent(_ref3) {
  var children = _ref3.children;
  return React__default.createElement(React__default.Fragment, null, renderFromType(children, {}, null));
};
var useSwitchHandle = function useSwitchHandle(ref, isChecked, setChecked) {
  return useImperativeHandle(ref, function () {
    return {
      isChecked: isChecked,
      setChecked: setChecked
    };
  }, [ref, isChecked, setChecked]);
};
var Switch = forwardRef(function (props, ref) {
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
      elProps = _objectWithoutProperties(props, _excluded$1);
  var _useState = useState(toBool(checked || value)),
      _useState2 = _slicedToArray(_useState, 2),
      isChecked = _useState2[0],
      setChecked = _useState2[1];
  useSwitchHandle(ref, isChecked, setChecked);
  var elThemePath = themePath || "form.switch.".concat(close && 'close' || 'default');
  var themeStyles = useThemePath(elThemePath, styles);
  var activeStyles = useCheckedState(isChecked, themeStyles);
  var typeClassName = useThemeTypeAsClass(elThemePath || type, 'keg-switch', className);
  return children && React__default.createElement(View, {
    className: typeClassName,
    style: activeStyles.main
  }, React__default.createElement(ChildrenComponent, {
    className: "keg-switch-container",
    children: children
  })) || React__default.createElement(View, {
    className: typeClassName,
    style: activeStyles.main
  }, LeftComponent && React__default.createElement(SideComponent, {
    className: "keg-switch-left",
    Component: LeftComponent,
    style: activeStyles.content.left
  }), SwitchComponent ? renderFromType(SwitchComponent, _objectSpread2(_objectSpread2({}, props), {}, {
    styles: activeStyles.content
  })) : React__default.createElement(KegSwitch, _extends({
    elProps: elProps,
    disabled: disabled,
    styles: activeStyles.content
  }, getSwitchColors(thumbColor, trackColor, activeStyles.content), getChecked(false, isChecked), getOnChangeHandler(false, setCheckedValue(isChecked, setChecked, onChange || onValueChange)))), RightComponent && React__default.createElement(SideComponent, {
    className: "keg-switch-right",
    Component: RightComponent,
    style: activeStyles.content.right
  }));
});

var _excluded = ["children", "className", "elProps", "href", "onPress", "style", "target"];
var isWeb = getPlatform() === 'web';
var Text = KegText('link');
var Element = React__default.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      elProps = props.elProps,
      href = props.href;
      props.onPress;
      var style = props.style,
      target = props.target,
      attrs = _objectWithoutProperties(props, _excluded);
  return React__default.createElement(Touchable, _extends({
    className: useClassList('keg-link', className)
  }, elProps, attrs, {
    touchRef: ref
  }), React__default.createElement(Text, {
    accessibilityRole: "link",
    className: "keg-link-text",
    style: style,
    href: href,
    target: target
  }, children));
});
var Link = function Link(props) {
  return React__default.createElement(LinkWrapper, _extends({}, props, {
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
  var dims = useDimensions();
  var sidebarStyles = useStyle('sidebar', styles);
  var width = getSidebarWidth(sidebarWidth, initial, sidebarStyles);
  var mainStyles = useMemo(function () {
    return _objectSpread2(_objectSpread2({
      flex: 1,
      zIndex: 5,
      position: 'fixed',
      top: 0,
      bottom: 0,
      height: dims.height
    }, sidebarStyles === null || sidebarStyles === void 0 ? void 0 : sidebarStyles.main), {}, _defineProperty({
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
      onToggled = _props$onToggled === void 0 ? noOp : _props$onToggled,
      initial = props.initial,
      to = props.to;
  var _useState = useState(toggled),
      _useState2 = _slicedToArray(_useState, 2),
      isToggled = _useState2[0],
      setIsToggled = _useState2[1];
  var _useState3 = useState(toggled),
      _useState4 = _slicedToArray(_useState3, 2),
      originalToggled = _useState4[0],
      setOriginalToggled = _useState4[1];
  useEffect(function () {
    if (originalToggled === toggled) return;
    setOriginalToggled(toggled);
    setIsToggled(toggled);
  }, [toggled, originalToggled]);
  var onTogglePress = useCallback(function (event) {
    var toggleUpdate = !isToggled;
    setIsToggled(toggleUpdate);
    checkCall(onToggled, toggleUpdate);
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
      config = _props$config === void 0 ? noOpObj : _props$config,
      initial = props.initial,
      to = props.to,
      _props$type = props.type,
      type = _props$type === void 0 ? 'timing' : _props$type;
  var _useState5 = useState(new Animated.Value(initial)),
      _useState6 = _slicedToArray(_useState5, 2),
      animation = _useState6[0],
      setAnimation = _useState6[1];
  var xPosRef = useRef({
    initial: initial,
    to: to
  });
  useLayoutEffect(function () {
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
    var animationConfig = config ? _objectSpread2(_objectSpread2({}, config), {}, {
      toValue: xPosChanges.to
    }) : {
      toValue: xPosChanges.to
    };
    animationConfig.useNativeDriver = false;
    Animated[type](animation, animationConfig).start();
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
  var Toggler = isValidComponent(ToggleComponent) && React__default.createElement(ToggleComponent, {
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
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Animated.View, {
    style: [mainStyles, _defineProperty({}, location, animation)]
  }, React__default.createElement(SidebarMain, {
    className: "sidebar-main",
    style: sidebarStyles === null || sidebarStyles === void 0 ? void 0 : sidebarStyles.main
  }, location === 'right' && Toggler, React__default.createElement(SidebarContainer, {
    location: location,
    sidebarWidth: sidebarWidth,
    className: "sidebar-container",
    style: sidebarStyles === null || sidebarStyles === void 0 ? void 0 : sidebarStyles.container
  }, children), location !== 'right' && Toggler)));
};
Sidebar.Toggle = SidebarToggle;
Sidebar.defaultProps = {
  config: noOpObj,
  location: 'left',
  type: 'timing',
  ToggleComponent: SidebarToggle
};

export { Link as A, CheckGroup, FilePicker, Form, Link, Option, Radio, Select, Sidebar, Slider, Switch, useKeyPress };
//# sourceMappingURL=index.js.map
