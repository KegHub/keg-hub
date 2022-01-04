import React__default from 'react';
import { V as View } from './view.native-16eca0a6.js';
import { d as _objectWithoutProperties, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import { ActivityIndicator } from 'react-native';
import { I as IndicatorWrapper } from './indicator.wrapper-e2c86f6b.js';
import { g as getPlatform } from './getPlatform-e625f46a.js';
import { u as useClassList } from './useClassList.native-70068878.js';
import { Text } from './text.js';
import '@keg-hub/jsutils';
import { isValidComponent } from './isValidComponent.js';
import '@keg-hub/re-theme/colors';
import { useThemePath } from './useThemePath.js';
import './useThemeWithHeight.js';
import './useClassName.native-32e8827d.js';
import './kegText-fe67e05a.js';
import './kegText.js';
import './useTextAccessibility.js';
import '@keg-hub/re-theme/styleInjector';
import './useTextStyles.js';
import '@keg-hub/re-theme';

var _excluded = ["className", "style", "size", "color"],
    _excluded2 = ["alt", "size", "color", "styles"];
var isWeb = getPlatform() === 'web';
var Element = function Element(_ref) {
  _ref.className;
      var _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      size = _ref.size,
      color = _ref.color;
      _objectWithoutProperties(_ref, _excluded);
  return React__default.createElement(View, {
    className: useClassList()
  }, React__default.createElement(ActivityIndicator, {
    size: size,
    color: color || style.color
  }));
};
var Indicator = function Indicator(_ref2) {
  var alt = _ref2.alt,
      size = _ref2.size,
      color = _ref2.color,
      styles = _ref2.styles,
      props = _objectWithoutProperties(_ref2, _excluded2);
  return React__default.createElement(IndicatorWrapper, _extends({}, props, {
    color: color,
    isWeb: isWeb,
    styles: styles,
    Element: Element,
    alt: alt || 'Loading',
    size: ['large', 'small'].includes(size) ? size : 'large'
  }));
};

var Progress = function Progress(props) {
  var styles = props.styles,
      text = props.text,
      loadIndicator = props.loadIndicator,
      type = props.type,
      size = props.size,
      color = props.color;
  var LoadingIndicator = loadIndicator || Indicator;
  return React__default.createElement(View, {
    style: styles.progress,
    className: "keg-progress"
  }, isValidComponent(LoadingIndicator) ? React__default.createElement(LoadingIndicator, {
    type: type,
    size: size,
    color: color,
    styles: styles.indicator,
    className: 'keg-loading-indicator'
  }) : text && React__default.createElement(Text, {
    className: "keg-progress-text",
    style: styles.text
  }, text));
};
var Loading = function Loading(props) {
  var size = props.size,
      color = props.color,
      styles = props.styles,
      children = props.children,
      themePath = props.themePath;
      props.className;
      var indicator = props.indicator,
      _props$text = props.text,
      text = _props$text === void 0 ? 'Loading' : _props$text,
      _props$type = props.type,
      type = _props$type === void 0 ? 'default' : _props$type;
  var builtStyles = useThemePath(themePath || "loading.".concat(type), styles);
  return React__default.createElement(View, {
    style: builtStyles.main,
    className: useClassList()
  }, children || React__default.createElement(Progress, {
    text: text,
    type: type,
    size: size,
    color: color,
    styles: builtStyles,
    loadIndicator: indicator
  }));
};

export { Loading };
//# sourceMappingURL=loading.js.map
