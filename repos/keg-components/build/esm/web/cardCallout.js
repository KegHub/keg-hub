import React__default from 'react';
import { V as View } from './view-23665db9.js';
import { get, noPropObj } from '@keg-hub/jsutils';
import { Text } from './text.js';
import { u as useClassList } from './useClassList-1d418045.js';
import './view.native-f56118b2.js';
import './_rollupPluginBabelHelpers-eca9940e.js';
import 'react-native-web';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';
import './kegText-1ab95fab.js';
import './kegText.native-ba7d1c9c.js';
import './useTextAccessibility.js';
import './useTextStyles.js';
import '@keg-hub/re-theme';

var CardCallout = function CardCallout(_ref) {
  var className = _ref.className,
      subtitle = _ref.subtitle,
      title = _ref.title,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? noPropObj : _ref$styles;
  var calloutStyles = get(styles, "callout");
  return React__default.createElement(View, {
    className: useClassList('keg-card-callout', className),
    style: calloutStyles.overlay
  }, title && React__default.createElement(Text, {
    className: "keg-card-title",
    style: calloutStyles.title
  }, title), subtitle && React__default.createElement(Text, {
    className: "keg-card-subtitle",
    style: calloutStyles.subtitle
  }, subtitle));
};

export { CardCallout };
//# sourceMappingURL=cardCallout.js.map
