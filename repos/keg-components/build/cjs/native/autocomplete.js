'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-d23df5c1.js');
var React = require('react');
var view_native = require('./view.native-6338852a.js');
require('./touchable-ab081983.js');
require('@keg-hub/re-theme');
var jsutils = require('@keg-hub/jsutils');
var useAutocompleteItems = require('./useAutocompleteItems.js');
var getTextFromChangeEvent = require('./getTextFromChangeEvent.js');
require('@keg-hub/re-theme/colors');
require('./useThemeWithHeight.js');
require('react-native');
var withOutsideDetect = require('./withOutsideDetect-722ab588.js');
var reStyle = require('@keg-hub/re-theme/reStyle');
var autocompleteInput = require('./autocompleteInput.js');
var scrollableSelect = require('./scrollableSelect.js');
require('./useClassName.native-3d1a229b.js');
require('./touchable.js');
require('@keg-hub/re-theme/styleInjector');
require('./getPlatform-24228c6c.js');
require('./useThemePath.js');
require('./input-dc2860a4.js');
require('./getInputValue.js');
require('./getReadOnly.js');
require('./useInputHandlers.js');
require('./validateFunctions.js');
require('./usePressHandlers.js');
require('./input-bb740648.js');
require('./item.js');
require('./text.js');
require('./kegText-c5d9c008.js');
require('./kegText.js');
require('./useTextAccessibility.js');
require('./useTextStyles.js');
require('./renderFromType.js');
require('./isValidComponent.js');
require('./getPressHandler.js');
require('./getActiveOpacity.js');
require('./useThemeTypeAsClass.native-90f04031.js');
require('./selectView.js');
require('./withScrollIntoView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _excluded = ["onChange", "onFocus", "onOutsideClick", "onSelect", "text", "className", "menuHeight", "renderItem", "inputRef", "emptyShowList", "styles", "placeholder", "itemProps", "values"];
var FloatingScrollableSelect = reStyle.reStyle(scrollableSelect.ScrollableSelect, 'styles')(function () {
  return {
    main: {
      pos: 'absolute',
      z: 9999
    }
  };
});
var AutocompleteView = withOutsideDetect.withOutsideDetect(view_native.View);
var useSetDrop = function useSetDrop(callback, setShowDropdown, showDropdown, setTo) {
  return React.useCallback(function () {
    for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }
    jsutils.checkCall.apply(void 0, [callback].concat(data));
    setShowDropdown(setTo);
  }, [callback, setShowDropdown, showDropdown, setTo]);
};
var useDropdownActions = function useDropdownActions(props, inputText, updateText, selectedItem, setSelectedItem) {
  var onSelect = props.onSelect,
      onFocus = props.onFocus,
      onOutsideClick = props.onOutsideClick;
  var _useState = React.useState(false),
      _useState2 = _rollupPluginBabelHelpers._slicedToArray(_useState, 2),
      showDropdown = _useState2[0],
      setShowDropdown = _useState2[1];
  var onSelectItemHandler = React.useCallback(function (item) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(item);
    (item === null || item === void 0 ? void 0 : item.text) && inputText !== (item === null || item === void 0 ? void 0 : item.text) && updateText(item === null || item === void 0 ? void 0 : item.text);
    setSelectedItem(item);
  }, [onSelect, inputText, updateText, selectedItem, setSelectedItem]);
  var onOutsideClickHandler = React.useCallback(function (evt) {
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
      styles = _props$styles === void 0 ? jsutils.noOpObj : _props$styles,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '' : _props$placeholder,
      _props$itemProps = props.itemProps,
      itemProps = _props$itemProps === void 0 ? jsutils.noOpObj : _props$itemProps,
      _props$values = props.values,
      values = _props$values === void 0 ? jsutils.noPropArr : _props$values,
      inputProps = _rollupPluginBabelHelpers._objectWithoutProperties(props, _excluded);
  var _useState3 = React.useState(text),
      _useState4 = _rollupPluginBabelHelpers._slicedToArray(_useState3, 2),
      inputText = _useState4[0],
      updateText = _useState4[1];
  var _useAutocompleteItems = useAutocompleteItems.useAutocompleteItems(inputText, values, emptyShowList),
      _useAutocompleteItems2 = _rollupPluginBabelHelpers._slicedToArray(_useAutocompleteItems, 3),
      autocompleteItems = _useAutocompleteItems2[0],
      setSelectedItem = _useAutocompleteItems2[1],
      selectedItem = _useAutocompleteItems2[2];
  var handleInputChange = React.useCallback(function (evt) {
    var text = getTextFromChangeEvent.getTextFromChangeEvent(evt);
    updateText(text || '');
    onChange === null || onChange === void 0 ? void 0 : onChange(text, evt);
  }, [inputText, onChange, updateText]);
  var _useDropdownActions = useDropdownActions(props, inputText, updateText, selectedItem, setSelectedItem),
      onFocusCB = _useDropdownActions.onFocusCB,
      showDropdown = _useDropdownActions.showDropdown,
      onSelectItemCB = _useDropdownActions.onSelectItemCB,
      onOutsideClickCB = _useDropdownActions.onOutsideClickCB;
  return React__default["default"].createElement(AutocompleteView, {
    style: styles === null || styles === void 0 ? void 0 : styles.main,
    onOutsideClick: onOutsideClickCB,
    className: ['keg-autocomplete-main', className]
  }, React__default["default"].createElement(autocompleteInput.AutocompleteInput, _rollupPluginBabelHelpers._extends({
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
  }, inputProps)), React__default["default"].createElement(view_native.View, {
    className: "keg-autocomplete-dropdown",
    style: styles.dropdown
  }, React__default["default"].createElement(FloatingScrollableSelect, {
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

exports.Autocomplete = Autocomplete;
//# sourceMappingURL=autocomplete.js.map
