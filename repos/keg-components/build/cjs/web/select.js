'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var view = require('./view-3370300d.js');
var select = require('./select-d72ff0ce.js');
require('@keg-hub/jsutils');
var getInputValue = require('./getInputValue.js');
require('@keg-hub/re-theme/colors');
var useSelectHandlers = require('./useSelectHandlers.js');
var useThemePath = require('./useThemePath.js');
require('./useThemeWithHeight.js');
require('react-native-web');
var useClassName = require('./useClassName-75c55cf8.js');
var useThemeTypeAsClass = require('./useThemeTypeAsClass-43ee56b4.js');
require('./svgIcon-ef322a2a.js');
var chevronDown = require('./chevronDown-67e5a61e.js');
var icon = require('./icon-96c32b96.js');
var styleInjector = require('@keg-hub/re-theme/styleInjector');
require('./view.native-a1d03d45.js');
require('./validateFunctions.js');
require('@keg-hub/re-theme');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('./handleRefUpdate.js');
require('./colors-da502c66.js');
require('./useClassList-89a8dbd4.js');
require('./svgIcon.native-48f0d173.js');
require('react-native-svg-web');
require('./renderFromType.js');
require('./isValidComponent.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["className", "children", "disabled", "readOnly", "onChange", "onValueChange", "style", "styles", "type", "themePath", "value"];
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
      var elProps = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded);
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

exports.Select = Select;
//# sourceMappingURL=select.js.map
