import { d as _objectWithoutProperties, c as _toConsumableArray, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default, { useMemo } from 'react';
import { V as View } from './view-23665db9.js';
import { useStyle } from '@keg-hub/re-theme';
import { ensureArr, pickKeys, noOpObj } from '@keg-hub/jsutils';
import { g as getPlatform } from './getPlatform-95568099.js';
import { getPressHandler } from './getPressHandler.js';
import '@keg-hub/re-theme/colors';
import './view.native-f56118b2.js';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';

var _excluded = ["onPress", "onClick", "children", "flexDir", "size", "style"];
var useContainerStyle = function useContainerStyle(styles, flexDir, size) {
  var flexStyle = useMemo(function () {
    var hasWidth = styles.map(function (style) {
      return Boolean(Object.keys(pickKeys(style, ['width', 'minWidth', 'maxWidth'])).length);
    }).indexOf(true) !== -1;
    return flexDir === 'row' && {
      flexDirection: flexDir,
      flex: size ? size : hasWidth ? 0 : 1
    };
  }, [].concat(_toConsumableArray(styles), [flexDir, size]));
  return useStyle.apply(void 0, [flexStyle].concat(_toConsumableArray(styles)));
};
var Container = function Container(_ref) {
  var onPress = _ref.onPress,
      onClick = _ref.onClick,
      children = _ref.children,
      flexDir = _ref.flexDir,
      size = _ref.size,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? noOpObj : _ref$style,
      props = _objectWithoutProperties(_ref, _excluded);
  var containerStyle = useContainerStyle(ensureArr(style), flexDir, size);
  return React__default.createElement(View, _extends({}, props, {
    style: containerStyle
  }, getPressHandler(getPlatform(), onClick || onPress)), children);
};

export { Container };
//# sourceMappingURL=container.js.map
