'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var view = require('./view-3370300d.js');
var checkbox_wrapper = require('./checkbox.wrapper-90b47d6a.js');
var React = require('react');
var jsutils = require('@keg-hub/jsutils');
var reTheme = require('@keg-hub/re-theme');
var styleInjector = require('@keg-hub/re-theme/styleInjector');
var input_web = require('./input.web-3e205b72.js');
require('./view.native-a1d03d45.js');
require('react-native-web');
require('./useClassName-75c55cf8.js');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('./handleRefUpdate.js');
require('./svgIcon-ef322a2a.js');
require('./svgIcon.native-48f0d173.js');
require('react-native-svg-web');
require('./caption.js');
require('./kegText-c47b7b6e.js');
require('./kegText.native-d2f2e1a3.js');
require('./useTextAccessibility.js');
require('./useTextStyles.js');
require('./h1.js');
require('./h2.js');
require('./h3.js');
require('./h4.js');
require('./h5.js');
require('./h6.js');
require('./label.js');
require('./p.js');
require('./subtitle.js');
require('./text.js');
require('./renderFromType.js');
require('./isValidComponent.js');
require('./getOnChangeHandler.js');
require('./getChecked.js');
require('@keg-hub/re-theme/colors');
require('./useThemePath.js');
require('./useThemeWithHeight.js');
require('./useClassList-89a8dbd4.js');
require('./useThemeTypeAsClass-43ee56b4.js');
require('./colors-da502c66.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
var Input = styleInjector.StyleInjector(input_web.Input, {
  maxSelectors: 0,
  kegComponent: true,
  displayName: 'Checkbox',
  className: 'keg-checkbox'
});
var Element = React__default["default"].forwardRef(function (props, ref) {
  var className = props.className,
      elProps = props.elProps,
      _props$styles = props.styles,
      styles = _props$styles === void 0 ? jsutils.noPropObj : _props$styles,
      _props$CheckIcon = props.CheckIcon,
      CheckIcon = _props$CheckIcon === void 0 ? checkbox_wrapper.Check : _props$CheckIcon,
      checked = props.checked,
      attributes = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded);
  var checkStyle = reTheme.useStyle(checkBoxStyles.icon, styles.indicator);
  var inputStyle = reTheme.useStyle(styles.input, checkBoxStyles.input);
  return React__default["default"].createElement(view.View, {
    style: styles.main,
    className: className
  }, React__default["default"].createElement(view.View, {
    className: "keg-checkbox-area",
    style: styles.area
  }), checked && React__default["default"].createElement(CheckIcon, {
    className: "keg-checkbox-icon",
    style: checkStyle
  }), React__default["default"].createElement(Input, _rollupPluginBabelHelpers._extends({
    className: "keg-checkbox"
  }, elProps, attributes, {
    role: "checkbox",
    checked: checked,
    type: "checkbox",
    ref: ref,
    style: inputStyle
  })));
});
var Checkbox = React.forwardRef(function (props, ref) {
  return React__default["default"].createElement(checkbox_wrapper.CheckboxWrapper, _rollupPluginBabelHelpers._extends({}, props, {
    elType: 'checkbox',
    Element: Element,
    isWeb: true,
    ref: ref
  }));
});
Checkbox.propTypes = _rollupPluginBabelHelpers._objectSpread2({}, checkbox_wrapper.CheckboxWrapper.propTypes);

exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map
