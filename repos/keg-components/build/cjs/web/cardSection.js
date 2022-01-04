'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var view = require('./view-cd2faea4.js');
var text = require('./text.js');
var renderFromType = require('./renderFromType.js');
var jsutils = require('@keg-hub/jsutils');
require('@keg-hub/re-theme/colors');
require('./view.native-a1d03d45.js');
require('react-native-web');
require('./useClassName-75c55cf8.js');
require('./updateClassNames.js');
require('./ensureClassArray.js');
require('./handleRefUpdate.js');
require('@keg-hub/re-theme/styleInjector');
require('./kegText-e14b3c1f.js');
require('./kegText.native-d2f2e1a3.js');
require('./useTextAccessibility.js');
require('./useTextStyles.js');
require('@keg-hub/re-theme');
require('./isValidComponent.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["Section"];
var SectionWrap = function SectionWrap(_ref) {
  var children = _ref.children,
      numberOfLines = _ref.numberOfLines,
      showBorder = _ref.showBorder,
      styles = _ref.styles,
      type = _ref.type;
  type = type || 'section';
  return React__default["default"].createElement(text.Text, {
    className: "keg-".concat(type, "-text"),
    numberOfLines: numberOfLines,
    style: [jsutils.get(styles, "text"), showBorder === false && jsutils.get(styles, "noBorder.text")]
  }, children);
};
var CardSection = function CardSection(_ref2) {
  var Section = _ref2.Section,
      props = _rollupPluginBabelHelpers._objectWithoutProperties(_ref2, _excluded);
  var type = props.type || 'section';
  return Section && React__default["default"].createElement(view.View, {
    className: "keg-card-".concat(type),
    style: [jsutils.get(props, "styles.main"), props.showBorder === false && jsutils.get(props, "styles.noBorder.main")]
  }, renderFromType.renderFromType(Section, props, SectionWrap));
};

exports.CardSection = CardSection;
//# sourceMappingURL=cardSection.js.map
