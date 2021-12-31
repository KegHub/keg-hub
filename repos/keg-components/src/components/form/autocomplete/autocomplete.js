import React, { useState, useCallback } from 'react'
import { View } from 'KegView'
import PropTypes from 'prop-types'
import { withOutsideDetect } from 'KegHocs'
import { useAutocompleteItems } from 'KegHooks'
import { getTextFromChangeEvent } from 'KegUtils'
import { reStyle } from '@keg-hub/re-theme/reStyle'
import { AutocompleteInput } from './autocompleteInput'
import { noOpObj, noPropArr, checkCall } from '@keg-hub/jsutils'
import { ScrollableSelect } from '../scrollable/select/scrollableSelect'

/**
 * An absolutely-positioned scrollable select
 */
const FloatingScrollableSelect = reStyle(
  ScrollableSelect,
  'styles'
)(() => ({
  main: { pos: 'absolute', z: 9999 },
}))

/**
 * View wrapped with out-of-bounds click detection.
 */
const AutocompleteView = withOutsideDetect(View)

const useSetDrop = (callback, setShowDropdown, showDropdown, setTo) => {
  return useCallback((...data) => {
    checkCall(callback, ...data)
    setShowDropdown(setTo)
  }, [
    callback,
    setShowDropdown,
    showDropdown,
    setTo,
  ])
}


const useDropdownActions = (props, inputText, updateText, selectedItem, setSelectedItem) => {

  const {onSelect, onFocus, onOutsideClick} = props
  const [ showDropdown, setShowDropdown ] = useState(false)

  const onSelectItemHandler = useCallback(
    item => {
      // Ensure we always call the callback when it exists
      item && onSelect?.(item)

      // Only update the text if the text has actually changed
      item.text &&
        inputText !== item.text &&
        updateText(item.text)

      setSelectedItem(item)
    },
    [
      onSelect,
      inputText,
      updateText,
      selectedItem,
      setSelectedItem,
    ]
  )

  const onOutsideClickHandler = useCallback((evt) => {
    onOutsideClick?.(inputText, evt)
  }, [inputText, onOutsideClick])

  const onFocusCB = useSetDrop(onFocus, setShowDropdown, showDropdown, true)
  const onSelectItemCB = useSetDrop(onSelectItemHandler, setShowDropdown, showDropdown, false)
  const onOutsideClickCB = useSetDrop(onOutsideClickHandler, setShowDropdown, showDropdown, false)

  return {
    onFocusCB,
    showDropdown,
    setShowDropdown,
    onSelectItemCB,
    onOutsideClickCB
  }
}

/**
 * Provides text input with autocomplete functionality. As user types, shows a menu of autocomplete options that contain user input as a substring.
 * Parent component must pass the total list of options (in autocompleteValues prop) for this to work.
 * @param {Object} props
 * @param {Array<string> | Array<Object>} props.values - array of possible items to use for autocomplete.
 *  - If it is Array<string>, any duplicates will be ignored.
 *  - If it is Array<object>, each object should be of form { text: string, key: string? },
 *    where key is an optional unique id that can distinguish duplicates
 * @param {Function?} props.onSelect - (optional) callback of form (text) => {...}, called when user selects a value from the autocomplete menu
 * @param {Function?} props.onChange - (optional) callback of form (text) => {...}, called when user types or selects a value. updates character by character
 * @param {String?} props.placeholder - (optional) placeholder text filled when no text has been inputted
 * @param {String?} props.text - (optional) initial value of the text in the input
 * @param {Object?} props.styles - (optional) style object for the root view of this component
 * @param {Object?} props.inputRef - (optional) a ref that will be assigned to the TextInput. Use this for obtaining access to TextInput methods like .clear()
 * @param {Number?} props.menuHeight - (optional) height of menu that shows autocomplete values
 * @param {*?} props.* - remaining props are passed straight through to the Input component
 */
export const Autocomplete = props => {
  const {
    onChange,
    onFocus,
    onOutsideClick,
    onSelect,
    text = '',
    className,
    menuHeight,
    renderItem,
    inputRef = null,
    emptyShowList=false,
    styles = noOpObj,
    placeholder = '',
    itemProps=noOpObj,
    values = noPropArr,
    ...inputProps
  } = props

  const [ inputText, updateText ] = useState(text)
  const [ autocompleteItems, setSelectedItem, selectedItem ] = useAutocompleteItems(
    inputText,
    values,
    emptyShowList
  )

  const handleInputChange = useCallback(
    evt => {
      const text = getTextFromChangeEvent(evt)
      updateText(text || '')
      onChange?.(text, evt)
    },
    [inputText, onChange, updateText]
  )

  const {
    onFocusCB,
    showDropdown,
    onSelectItemCB,
    onOutsideClickCB
  } = useDropdownActions(
    props,
    inputText,
    updateText,
    selectedItem,
    setSelectedItem
  )

  return (
    <AutocompleteView
      style={styles?.main}
      onOutsideClick={onOutsideClickCB}
      className={['keg-autocomplete-main', className]}
    >
      <AutocompleteInput
        ref={inputRef}
        value={inputText}
        onFocus={onFocusCB}
        items={autocompleteItems}
        selectItem={onSelectItemCB}
        placeholder={placeholder}
        onChange={handleInputChange}
        style={styles?.content?.input || styles?.input}
        highlightItem={setSelectedItem}
        highlightedIndex={selectedItem?.index}
        className='keg-autocomplete-input'
        {...inputProps}
      />

      { /* nest select in view so that it appears below the input and still absolute-positioned */ }
      <View className='keg-autocomplete-dropdown' style={styles.dropdown} >
        <FloatingScrollableSelect
          height={menuHeight}
          itemProps={itemProps}
          visible={showDropdown}
          renderItem={renderItem}
          onSelect={onSelectItemCB}
          items={autocompleteItems}
          selectedItem={selectedItem}
          styles={styles?.content?.menu || styles?.menu}
        />
      </View>
    </AutocompleteView>
  )
}

Autocomplete.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        key: PropTypes.string,
      }),
    ])
  ),
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  onOutsideClick: PropTypes.func,
  emptyShowList: PropTypes.bool,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  styles: PropTypes.object,
  inputRef: PropTypes.object,
  menuHeight: PropTypes.number,
}
