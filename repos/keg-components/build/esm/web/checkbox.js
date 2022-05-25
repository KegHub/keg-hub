import { d as _objectWithoutProperties, e as _extends, _ as _objectSpread2 } from './_rollupPluginBabelHelpers-eca9940e.js';
import { V as View } from './view-23665db9.js';
import { C as CheckboxWrapper, a as Check } from './checkbox.wrapper-a93c2d4b.js';
import React__default, { forwardRef } from 'react';
import { noPropObj } from '@keg-hub/jsutils';
import { useStyle } from '@keg-hub/re-theme';
import { StyleInjector } from '@keg-hub/re-theme/styleInjector';
import { I as Input$1 } from './input.web-2c668800.js';
import './view.native-f56118b2.js';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import './handleRefUpdate.js';
import './svgIcon-389f9d70.js';
import './svgIcon.native-e0c41d6c.js';
import 'react-native-svg-web';
import './caption.js';
import './kegText-1ab95fab.js';
import './kegText.native-ba7d1c9c.js';
import './useTextAccessibility.js';
import './useTextStyles.js';
import './h1.js';
import './h2.js';
import './h3.js';
import './h4.js';
import './h5.js';
import './h6.js';
import './label.js';
import './p.js';
import './subtitle.js';
import './text.js';
import './renderFromType.js';
import './isValidComponent.js';
import './getOnChangeHandler.js';
import './getChecked.js';
import '@keg-hub/re-theme/colors';
import './useThemePath.js';
import './useThemeWithHeight.js';
import './useClassList-1d418045.js';
import './useThemeTypeAsClass-1d2ed78d.js';
import './colors-6402d3b3.js';

var _excluded = ["className", "elProps", "styles", "CheckIcon", "checked"];
var checkBoxStyles = {
  icon: {
    position: 'relative',
    zIndex: 1,
    height: 14,
    width: 14,
    top: 0,
    left: 3,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    margin: 0,
    opacity: 0,
    cursor: 'pointer'
  }
};
var Input = StyleInjector(Input$1, {
  maxSelectors: 0,
  kegComponent: true,
  displayName: 'Checkbox',
  className: 'keg-checkbox'
});
var Element = React__default.forwardRef(function (props, ref) {
  var className = props.className,
      elProps = props.elProps,
      _props$styles = props.styles,
      styles = _props$styles === void 0 ? noPropObj : _props$styles,
      _props$CheckIcon = props.CheckIcon,
      CheckIcon = _props$CheckIcon === void 0 ? Check : _props$CheckIcon,
      checked = props.checked,
      attributes = _objectWithoutProperties(props, _excluded);
  var checkStyle = useStyle(checkBoxStyles.icon, styles.indicator);
  var inputStyle = useStyle(styles.input, checkBoxStyles.input);
  return React__default.createElement(View, {
    style: styles.main,
    className: className
  }, React__default.createElement(View, {
    className: "keg-checkbox-area",
    style: styles.area
  }), checked && React__default.createElement(CheckIcon, {
    className: "keg-checkbox-icon",
    style: checkStyle
  }), React__default.createElement(Input, _extends({
    className: "keg-checkbox"
  }, elProps, attributes, {
    role: "checkbox",
    checked: checked,
    type: "checkbox",
    ref: ref,
    style: inputStyle
  })));
});
var Checkbox = forwardRef(function (props, ref) {
  return React__default.createElement(CheckboxWrapper, _extends({}, props, {
    elType: 'checkbox',
    Element: Element,
    isWeb: true,
    ref: ref
  }));
});
Checkbox.propTypes = _objectSpread2({}, CheckboxWrapper.propTypes);

export { Checkbox };
//# sourceMappingURL=checkbox.js.map
