import { e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default from 'react';
import { SelectItem } from './item.js';
import { SelectView } from './selectView.js';
import { noOpObj } from '@keg-hub/jsutils';
import './touchable.js';
import { useStyle } from '@keg-hub/re-theme';
import { w as withScrollIntoView } from './withScrollIntoView-78f2d09d.js';
import '@keg-hub/re-theme/colors';
import './useThemeWithHeight.js';
import 'react-native-web';
import './text.js';
import './kegText-d18b7a12.js';
import './kegText.native-ba7d1c9c.js';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import './handleRefUpdate.js';
import './useTextAccessibility.js';
import '@keg-hub/re-theme/styleInjector';
import './useTextStyles.js';
import './renderFromType.js';
import './isValidComponent.js';
import './getPressHandler.js';
import './getActiveOpacity.js';
import './useThemePath.js';
import './useThemeTypeAsClass-1d2ed78d.js';
import './colors-6402d3b3.js';
import './useClassList-1d418045.js';
import '@keg-hub/re-theme/reStyle';
import './view-86879139.js';
import './view.native-f56118b2.js';

var InViewSelectItem = withScrollIntoView(SelectItem, false);
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
      itemProps = _ref$itemProps === void 0 ? noOpObj : _ref$itemProps;
  var selectStyle = useStyle(styles === null || styles === void 0 ? void 0 : styles.main, visible ? display.visible : display.hidden);
  return React__default.createElement(SelectView, {
    visible: visible,
    style: selectStyle,
    height: height !== null && height !== void 0 ? height : 150,
    className: ['keg-scrollable-select', className]
  }, items.map(function (item) {
    var _styles$content;
    var highlighted = selectedItem && item.key === selectedItem.key;
    return React__default.createElement(InViewSelectItem, _extends({
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

export { ScrollableSelect };
//# sourceMappingURL=scrollableSelect.js.map
