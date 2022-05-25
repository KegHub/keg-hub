import { e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { V as View } from './view-23665db9.js';
import { u as useClassList } from './useClassList-1d418045.js';
import { noOpObj, noPropObj } from '@keg-hub/jsutils';
import './view.native-f56118b2.js';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';

var CardContainer = function CardContainer(_ref) {
  var className = _ref.className,
      _ref$attributes = _ref.attributes,
      attributes = _ref$attributes === void 0 ? noOpObj : _ref$attributes,
      children = _ref.children,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? noPropObj : _ref$styles;
  return React__default.createElement(View, _extends({
    className: useClassList('keg-card', className)
  }, attributes, {
    style: styles.main
  }), React__default.createElement(View, {
    className: "keg-card-container",
    style: styles.container
  }, children));
};

export { CardContainer };
//# sourceMappingURL=cardContainer.js.map
