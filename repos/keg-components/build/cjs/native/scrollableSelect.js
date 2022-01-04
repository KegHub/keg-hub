'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var item = require('./item.js');
var selectView = require('./selectView.js');
var jsutils = require('@keg-hub/jsutils');
require('./touchable-62a31fcc.js');
var reTheme = require('@keg-hub/re-theme');
var withScrollIntoView = require('./withScrollIntoView.js');
require('@keg-hub/re-theme/colors');
require('./useThemeWithHeight.js');
require('react-native');
require('./text.js');
require('./kegText-d4479e6a.js');
require('./kegText.js');
require('./useClassName.native-3d1a229b.js');
require('./useTextAccessibility.js');
require('@keg-hub/re-theme/styleInjector');
require('./useTextStyles.js');
require('./renderFromType.js');
require('./isValidComponent.js');
require('./getPressHandler.js');
require('./getActiveOpacity.js');
require('./useThemePath.js');
require('./useThemeTypeAsClass.native-90f04031.js');
require('@keg-hub/re-theme/reStyle');
require('./view.native-6338852a.js');
require('./touchable.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var InViewSelectItem = withScrollIntoView.withScrollIntoView(item.SelectItem);
var display = {
  hidden: {
    display: 'none'
  },
  visible: {
    display: 'block'
  }
};
var ScrollableSelect = function ScrollableSelect(_ref) {
  var items = _ref.items,
      styles = _ref.styles,
      height = _ref.height,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? true : _ref$visible,
      onSelect = _ref.onSelect,
      className = _ref.className,
      renderItem = _ref.renderItem,
      selectedItem = _ref.selectedItem,
      _ref$itemProps = _ref.itemProps,
      itemProps = _ref$itemProps === void 0 ? jsutils.noOpObj : _ref$itemProps;
  var selectStyle = reTheme.useStyle(styles === null || styles === void 0 ? void 0 : styles.main, visible ? display.visible : display.hidden);
  return React__default["default"].createElement(selectView.SelectView, {
    visible: visible,
    style: selectStyle,
    height: height !== null && height !== void 0 ? height : 150,
    className: ['keg-scrollable-select', className]
  }, items.map(function (item) {
    var _styles$content;
    var highlighted = selectedItem && item.key === selectedItem.key;
    return React__default["default"].createElement(InViewSelectItem, _rollupPluginBabelHelpers._extends({
      key: item.key || item.text
    }, itemProps, {
      item: item,
      onSelect: onSelect,
      renderItem: renderItem,
      highlighted: highlighted,
      scrollIntoView: highlighted,
      styles: (styles === null || styles === void 0 ? void 0 : (_styles$content = styles.content) === null || _styles$content === void 0 ? void 0 : _styles$content.item) || (styles === null || styles === void 0 ? void 0 : styles.item)
    }));
  }));
};

exports.ScrollableSelect = ScrollableSelect;
//# sourceMappingURL=scrollableSelect.js.map
