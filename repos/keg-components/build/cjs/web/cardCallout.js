'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var view = require('./view-3370300d.js');
var jsutils = require('@keg-hub/jsutils');
var text = require('./text.js');
var useClassList = require('./useClassList-89a8dbd4.js');
require('./view.native-a1d03d45.js');
require('./_rollupPluginBabelHelpers-d23df5c1.js');
require('react-native-web');
require('./useClassName-75c55cf8.js');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('./handleRefUpdate.js');
require('@keg-hub/re-theme/styleInjector');
require('./kegText-c47b7b6e.js');
require('./kegText.native-d2f2e1a3.js');
require('./useTextAccessibility.js');
require('./useTextStyles.js');
require('@keg-hub/re-theme');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CardCallout = function CardCallout(_ref) {
  var className = _ref.className,
      subtitle = _ref.subtitle,
      title = _ref.title,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? jsutils.noPropObj : _ref$styles;
  var calloutStyles = jsutils.get(styles, "callout");
  return React__default["default"].createElement(view.View, {
    className: useClassList.useClassList('keg-card-callout', className),
    style: calloutStyles.overlay
  }, title && React__default["default"].createElement(text.Text, {
    className: "keg-card-title",
    style: calloutStyles.title
  }, title), subtitle && React__default["default"].createElement(text.Text, {
    className: "keg-card-subtitle",
    style: calloutStyles.subtitle
  }, subtitle));
};

exports.CardCallout = CardCallout;
//# sourceMappingURL=cardCallout.js.map
