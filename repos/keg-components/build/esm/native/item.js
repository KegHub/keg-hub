import { d as _objectWithoutProperties, b as _slicedToArray, e as _extends, _ as _objectSpread2 } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default, { useCallback } from 'react';
import { get, isNum, isFunc, noOp } from '@keg-hub/jsutils';
import { T as Touchable } from './touchable-07dd63ff.js';
import { Text } from './text.js';
import { renderFromType } from './renderFromType.js';
import { getPressHandler } from './getPressHandler.js';
import { getActiveOpacity } from './getActiveOpacity.js';
import '@keg-hub/re-theme/colors';
import { useThemePath } from './useThemePath.js';
import './useThemeWithHeight.js';
import 'react-native';
import { u as useThemeTypeAsClass } from './useThemeTypeAsClass.native-a05b9a50.js';
import { useThemeHover, useThemeActive } from '@keg-hub/re-theme';
import { reStyle } from '@keg-hub/re-theme/reStyle';
import './touchable.js';
import './useClassName.native-32e8827d.js';
import '@keg-hub/re-theme/styleInjector';
import './kegText-8ed80fa5.js';
import './kegText.js';
import './useTextAccessibility.js';
import './useTextStyles.js';
import './isValidComponent.js';

var _excluded$1 = ["className", "children", "content", "onClick", "onPress", "styles", "showFeedback", "type", "themePath", "activeOpacity", "disabled", "selectable"];
var getChildren = function getChildren(Children, _ref) {
  var styles = _ref.styles,
      selectable = _ref.selectable;
  return renderFromType(Children, {
    style: styles === null || styles === void 0 ? void 0 : styles.content,
    selectable: selectable
  }, Text);
};
var checkDisabled = function checkDisabled(mainStyles, btnStyles, disabled) {
  return disabled ? _objectSpread2(_objectSpread2({}, mainStyles), get(btnStyles, 'disabled.main')) : mainStyles;
};
var Button = React__default.forwardRef(function (props, ref) {
  props.className;
      var children = props.children,
      content = props.content,
      onClick = props.onClick,
      onPress = props.onPress,
      styles = props.styles,
      _props$showFeedback = props.showFeedback,
      showFeedback = _props$showFeedback === void 0 ? false : _props$showFeedback,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type,
      themePath = props.themePath,
      activeOpacity = props.activeOpacity,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$selectable = props.selectable,
      selectable = _props$selectable === void 0 ? false : _props$selectable,
      elProps = _objectWithoutProperties(props, _excluded$1);
  var btnStyles = useThemePath(themePath || "button.contained.".concat(type), styles);
  var _useThemeHover = useThemeHover(get(btnStyles, 'default', {}), get(btnStyles, 'hover'), {
    ref: ref
  }),
      _useThemeHover2 = _slicedToArray(_useThemeHover, 2),
      hoverRef = _useThemeHover2[0],
      hoverStyles = _useThemeHover2[1];
  var _useThemeActive = useThemeActive(hoverStyles, get(btnStyles, 'active'), {
    ref: hoverRef
  }),
      _useThemeActive2 = _slicedToArray(_useThemeActive, 2),
      themeRef = _useThemeActive2[0],
      themeStyles = _useThemeActive2[1];
  return React__default.createElement(Touchable, _extends({
    accessibilityRole: "button",
    className: useThemeTypeAsClass()
  }, elProps, {
    disabled: disabled,
    touchRef: themeRef,
    showFeedback: isNum(activeOpacity) || showFeedback,
    style: checkDisabled(themeStyles.main, btnStyles, disabled),
    children: getChildren(children || content, {
      styles: themeStyles,
      selectable: selectable
    })
  }, getPressHandler(false, onClick, onPress), getActiveOpacity(false, props, btnStyles)));
});

var _excluded = ["item", "className", "renderItem", "onSelect", "highlighted", "styles"];
var SelectButton = reStyle(Button, 'styles')(function (theme, props) {
  var palette = theme.colors.palette;
  var content = {
    color: palette.black01,
    fontWeight: 'normal',
    alignSelf: 'start'
  };
  var main = {
    borderRadius: 0,
    backgroundColor: palette.white01
  };
  var highlighted = _objectSpread2(_objectSpread2({}, main), {}, {
    backgroundColor: palette.gray01
  });
  return {
    default: {
      content: content,
      main: props.highlighted ? highlighted : main
    },
    active: {
      content: content,
      main: main
    },
    hover: {
      content: content,
      main: highlighted
    }
  };
});
var SelectItem = React__default.forwardRef(function (props, ref) {
  var item = props.item,
      className = props.className,
      renderItem = props.renderItem,
      _props$onSelect = props.onSelect,
      onSelect = _props$onSelect === void 0 ? noOp : _props$onSelect,
      _props$highlighted = props.highlighted,
      highlighted = _props$highlighted === void 0 ? false : _props$highlighted,
      styles = props.styles,
      btnProps = _objectWithoutProperties(props, _excluded);
  var handlePress = useCallback(function () {
    return onSelect(item);
  }, [item, onSelect]);
  return isFunc(renderItem) ? renderItem(_objectSpread2(_objectSpread2({}, btnProps), {}, {
    ref: ref,
    item: item,
    styles: styles,
    className: className,
    highlighted: highlighted,
    onSelect: handlePress
  })) : React__default.createElement(SelectButton, _extends({}, btnProps, {
    ref: ref,
    styles: styles,
    content: item.text,
    onPress: handlePress,
    highlighted: highlighted,
    className: ["keg-select-button", className]
  }));
});

export { SelectItem };
//# sourceMappingURL=item.js.map
