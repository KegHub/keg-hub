'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var jsutils = require('@keg-hub/jsutils');
var React = require('react');

var ignoreCase = function ignoreCase(str) {
  return str.toLowerCase();
};
var ignoreAccents = function ignoreAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
var formatItem = function formatItem(item, index) {
  var value = item.text || item.value;
  if (jsutils.isObj(item) && jsutils.isStr(value)) return {
    text: value,
    key: item.key || value,
    index: index
  };else if (jsutils.isStr(item)) return {
    text: item,
    key: item,
    index: index
  };else return null;
};
var trimStr = function trimStr(str) {
  return str === null || str === void 0 ? void 0 : str.trim();
};
var textMatches = function textMatches(text, item) {
  var itemComparisonStr = jsutils.pipeline(item.text, ignoreCase, ignoreAccents);
  var textComparisonStr = jsutils.pipeline(text, trimStr, ignoreCase, ignoreAccents);
  return itemComparisonStr.includes(textComparisonStr);
};
var getItemsMatchingText = function getItemsMatchingText(text, possibleValues, emptyShowList, selectedItem) {
  if (!jsutils.isStr(text)) return [];
  var result = possibleValues.reduce(function (state, nextItem) {
    var formattedItem = formatItem(nextItem, state.counter);
    if (!formattedItem) return state;
    var addItem = !text && emptyShowList || textMatches(text, formattedItem) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.activeShowList);
    if (addItem && !state.keys.has(formattedItem.key)) {
      state.keys.add(formattedItem.key);
      state.arr.push(formattedItem);
      state.counter++;
    }
    return state;
  }, {
    arr: [],
    keys: new Set(),
    counter: 0
  });
  return result.arr;
};
var useAutocompleteItems = function useAutocompleteItems(text) {
  var menuItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : jsutils.noPropArr;
  var emptyShowList = arguments.length > 2 ? arguments[2] : undefined;
  var curItem = React.useMemo(function () {
    return menuItems.filter(function (node) {
      return text === node.text || text === node.value;
    }).find(function (val) {
      return val;
    });
  }, [text, menuItems]);
  var _useState = React.useState(curItem || null),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];
  var items = React.useMemo(function () {
    return !(selectedItem !== null && selectedItem !== void 0 && selectedItem.activeShowList) && !emptyShowList && (jsutils.isEmpty(text) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.text) === text) ? [] : getItemsMatchingText(text, menuItems, emptyShowList, selectedItem);
  }, [text, menuItems, selectedItem]);
  return [items, setSelectedItem, selectedItem];
};

exports.getItemsMatchingText = getItemsMatchingText;
exports.useAutocompleteItems = useAutocompleteItems;
//# sourceMappingURL=useAutocompleteItems.js.map
