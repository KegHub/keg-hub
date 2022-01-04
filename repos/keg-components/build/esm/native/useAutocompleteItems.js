import { b as _slicedToArray } from './_rollupPluginBabelHelpers-eca9940e.js';
import { isStr, isEmpty, isObj, pipeline, noPropArr } from '@keg-hub/jsutils';
import { useMemo, useState } from 'react';

var ignoreCase = function ignoreCase(str) {
  return str.toLowerCase();
};
var ignoreAccents = function ignoreAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
var formatItem = function formatItem(item, index) {
  var value = item.text || item.value;
  if (isObj(item) && isStr(value)) return {
    text: value,
    key: item.key || value,
    index: index
  };else if (isStr(item)) return {
    text: item,
    key: item,
    index: index
  };else return null;
};
var trimStr = function trimStr(str) {
  return str === null || str === void 0 ? void 0 : str.trim();
};
var textMatches = function textMatches(text, item) {
  var itemComparisonStr = pipeline(item.text, ignoreCase, ignoreAccents);
  var textComparisonStr = pipeline(text, trimStr, ignoreCase, ignoreAccents);
  return itemComparisonStr.includes(textComparisonStr);
};
var getItemsMatchingText = function getItemsMatchingText(text, possibleValues, emptyShowList, selectedItem) {
  if (!isStr(text)) return [];
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
  var menuItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noPropArr;
  var emptyShowList = arguments.length > 2 ? arguments[2] : undefined;
  var curItem = useMemo(function () {
    return menuItems.filter(function (node) {
      return text === node.text || text === node.value;
    }).find(function (val) {
      return val;
    });
  }, [text, menuItems]);
  var _useState = useState(curItem || null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedItem = _useState2[0],
      setSelectedItem = _useState2[1];
  var items = useMemo(function () {
    return !(selectedItem !== null && selectedItem !== void 0 && selectedItem.activeShowList) && !emptyShowList && (isEmpty(text) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.text) === text) ? [] : getItemsMatchingText(text, menuItems, emptyShowList, selectedItem);
  }, [text, menuItems, selectedItem]);
  return [items, setSelectedItem, selectedItem];
};

export { getItemsMatchingText, useAutocompleteItems };
//# sourceMappingURL=useAutocompleteItems.js.map
