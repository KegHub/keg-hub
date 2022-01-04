import { d as _objectWithoutProperties, b as _slicedToArray, e as _extends } from './_rollupPluginBabelHelpers-eca9940e.js';
import React__default, { useState, useCallback } from 'react';
import { V as View } from './view-86879139.js';
import './touchable.js';
import '@keg-hub/re-theme';
import { checkCall, noOpObj, noPropArr } from '@keg-hub/jsutils';
import { useAutocompleteItems } from './useAutocompleteItems.js';
import { getTextFromChangeEvent } from './getTextFromChangeEvent.js';
import '@keg-hub/re-theme/colors';
import './useThemeWithHeight.js';
import 'react-native-web';
import { w as withOutsideDetect } from './withOutsideDetect-ad5803dc.js';
import { reStyle } from '@keg-hub/re-theme/reStyle';
import { AutocompleteInput } from './autocompleteInput.js';
import { ScrollableSelect } from './scrollableSelect.js';
import './view.native-f56118b2.js';
import './useClassName-52067a95.js';
import './updateClassNames.js';
import './ensureClassArray.js';
import './handleRefUpdate.js';
import '@keg-hub/re-theme/styleInjector';
import './getPlatform-95568099.js';
import './useThemePath.js';
import './input-a3f432a6.js';
import './getInputValue.js';
import './getReadOnly.js';
import './useInputHandlers.js';
import './validateFunctions.js';
import './usePressHandlers.js';
import './input-e3c661c1.js';
import './item.js';
import './text.js';
import './kegText-d18b7a12.js';
import './kegText.native-ba7d1c9c.js';
import './useTextAccessibility.js';
import './useTextStyles.js';
import './renderFromType.js';
import './isValidComponent.js';
import './getPressHandler.js';
import './getActiveOpacity.js';
import './useThemeTypeAsClass-1d2ed78d.js';
import './colors-6402d3b3.js';
import './useClassList-1d418045.js';
import './selectView.js';
import './withScrollIntoView-78f2d09d.js';

var _excluded = ["onChange", "onFocus", "onOutsideClick", "onSelect", "text", "className", "menuHeight", "renderItem", "inputRef", "emptyShowList", "styles", "placeholder", "itemProps", "values"];
var FloatingScrollableSelect = reStyle(ScrollableSelect, 'styles')(function () {
  return {
    main: {
      pos: 'absolute',
      z: 9999
    }
  };
});
var AutocompleteView = withOutsideDetect(View);
var useSetDrop = function useSetDrop(callback, setShowDropdown, showDropdown, setTo) {
  return useCallback(function () {
    for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }
    checkCall.apply(void 0, [callback].concat(data));
    setShowDropdown(setTo);
  }, [callback, setShowDropdown, showDropdown, setTo]);
};
var useDropdownActions = function useDropdownActions(props, inputText, updateText, selectedItem, setSelectedItem) {
  var onSelect = props.onSelect,
      onFocus = props.onFocus,
      onOutsideClick = props.onOutsideClick;
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDropdown = _useState2[0],
      setShowDropdown = _useState2[1];
  var onSelectItemHandler = useCallback(function (item) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(item);
    (item === null || item === void 0 ? void 0 : item.text) && inputText !== (item === null || item === void 0 ? void 0 : item.text) && updateText(item === null || item === void 0 ? void 0 : item.text);
    setSelectedItem(item);
  }, [onSelect, inputText, updateText, selectedItem, setSelectedItem]);
  var onOutsideClickHandler = useCallback(function (evt) {
    onOutsideClick === null || onOutsideClick === void 0 ? void 0 : onOutsideClick(inputText, evt);
  }, [inputText, onOutsideClick]);
  var onFocusCB = useSetDrop(onFocus, setShowDropdown, showDropdown, true);
  var onSelectItemCB = useSetDrop(onSelectItemHandler, setShowDropdown, showDropdown, false);
  var onOutsideClickCB = useSetDrop(onOutsideClickHandler, setShowDropdown, showDropdown, false);
  return {
    onFocusCB: onFocusCB,
    showDropdown: showDropdown,
    setShowDropdown: setShowDropdown,
    onSelectItemCB: onSelectItemCB,
    onOutsideClickCB: onOutsideClickCB
  };
};
var Autocomplete = function Autocomplete(props) {
  var _styles$content, _styles$content2;
  var onChange = props.onChange;
      props.onFocus;
      props.onOutsideClick;
      props.onSelect;
      var _props$text = props.text,
      text = _props$text === void 0 ? '' : _props$text,
      className = props.className,
      menuHeight = props.menuHeight,
      renderItem = props.renderItem,
      _props$inputRef = props.inputRef,
      inputRef = _props$inputRef === void 0 ? null : _props$inputRef,
      _props$emptyShowList = props.emptyShowList,
      emptyShowList = _props$emptyShowList === void 0 ? false : _props$emptyShowList,
      _props$styles = props.styles,
      styles = _props$styles === void 0 ? noOpObj : _props$styles,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      _props$itemProps = props.itemProps,
      itemProps = _props$itemProps === void 0 ? noOpObj : _props$itemProps,
      _props$values = props.values,
      values = _props$values === void 0 ? noPropArr : _props$values,
      inputProps = _objectWithoutProperties(props, _excluded);
  var _useState3 = useState(text),
      _useState4 = _slicedToArray(_useState3, 2),
      inputText = _useState4[0],
      updateText = _useState4[1];
  var _useAutocompleteItems = useAutocompleteItems(inputText, values, emptyShowList),
      _useAutocompleteItems2 = _slicedToArray(_useAutocompleteItems, 3),
      autocompleteItems = _useAutocompleteItems2[0],
      setSelectedItem = _useAutocompleteItems2[1],
      selectedItem = _useAutocompleteItems2[2];
  var handleInputChange = useCallback(function (evt) {
    var text = getTextFromChangeEvent(evt);
    updateText(text || '');
    onChange === null || onChange === void 0 ? void 0 : onChange(text, evt);
  }, [inputText, onChange, updateText]);
  var _useDropdownActions = useDropdownActions(props, inputText, updateText, selectedItem, setSelectedItem),
      onFocusCB = _useDropdownActions.onFocusCB,
      showDropdown = _useDropdownActions.showDropdown,
      onSelectItemCB = _useDropdownActions.onSelectItemCB,
      onOutsideClickCB = _useDropdownActions.onOutsideClickCB;
  return React__default.createElement(AutocompleteView, {
    style: styles === null || styles === void 0 ? void 0 : styles.main,
    onOutsideClick: onOutsideClickCB,
    className: ['keg-autocomplete-main', className]
  }, React__default.createElement(AutocompleteInput, _extends({
    ref: inputRef,
    value: inputText,
    onFocus: onFocusCB,
    items: autocompleteItems,
    selectItem: onSelectItemCB,
    placeholder: placeholder,
    onChange: handleInputChange,
    style: (styles === null || styles === void 0 ? void 0 : (_styles$content = styles.content) === null || _styles$content === void 0 ? void 0 : _styles$content.input) || (styles === null || styles === void 0 ? void 0 : styles.input),
    highlightItem: setSelectedItem,
    highlightedIndex: selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.index,
    className: "keg-autocomplete-input"
  }, inputProps)), React__default.createElement(View, {
    className: "keg-autocomplete-dropdown",
    style: styles.dropdown
  }, React__default.createElement(FloatingScrollableSelect, {
    height: menuHeight,
    itemProps: itemProps,
    visible: showDropdown,
    renderItem: renderItem,
    onSelect: onSelectItemCB,
    items: autocompleteItems,
    selectedItem: selectedItem,
    styles: (styles === null || styles === void 0 ? void 0 : (_styles$content2 = styles.content) === null || _styles$content2 === void 0 ? void 0 : _styles$content2.menu) || (styles === null || styles === void 0 ? void 0 : styles.menu)
  })));
};

export { Autocomplete };
//# sourceMappingURL=autocomplete.js.map
