'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var view = require('./view-3370300d.js');
var jsutils = require('@keg-hub/jsutils');
var cardCallout = require('./cardCallout.js');
require('./view.native-a1d03d45.js');
require('./_rollupPluginBabelHelpers-d23df5c1.js');
require('react-native-web');
require('./useClassName-75c55cf8.js');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('./handleRefUpdate.js');
require('@keg-hub/re-theme/styleInjector');
require('./text.js');
require('./kegText-c47b7b6e.js');
require('./kegText.native-d2f2e1a3.js');
require('./useTextAccessibility.js');
require('./useTextStyles.js');
require('@keg-hub/re-theme');
require('./useClassList-89a8dbd4.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var CardContent = function CardContent(_ref) {
  var children = _ref.children,
      _ref$styles = _ref.styles,
      styles = _ref$styles === void 0 ? jsutils.noPropObj : _ref$styles,
      subtitle = _ref.subtitle,
      title = _ref.title;
  return React__default["default"].createElement(view.View, {
    className: "keg-card-content",
    style: styles.main
  }, (title || subtitle) && React__default["default"].createElement(cardCallout.CardCallout, {
    className: "keg-card-content-callout",
    styles: styles,
    subtitle: subtitle,
    title: title
  }), children);
};

exports.CardContent = CardContent;
//# sourceMappingURL=cardContent.js.map
