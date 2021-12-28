import React from 'react'
import PropTypes from 'prop-types'
import { SelectItem } from '../item/item'
import { SelectView } from './selectView'
import { noOpObj } from '@keg-hub/jsutils'
import { withScrollIntoView } from 'KegHocs'
import { useStyle } from '@keg-hub/re-theme'

/**
 * Wrapper around SelectItem that ensures it stays in the view
 * of the ScrollableSelect list (by automatically scrolling it)
 */
const InViewSelectItem = withScrollIntoView(SelectItem, false)

/**
 * Holds the display style for the down based on visible state
 * @type {Object} 
 */
const display = {
  hidden: { display: 'none' },
  visible: { display: 'block'},
}


/**
 * A scrollable menu list of items, with prop-adjustable height and visibility
 * @param {Object} props
 * @param {Array} props.items - array of objects of the form { text, key } - key is optional if each item has unique text
 * @param {Object} props.styles - style object for the view. ".main": styles the root SelectView. ".content": styles each SelectItem.
 * @param {Boolean} props.visible - boolean, indicating the menu is visible or hidden. Defaults to true.
 * @param {Function} props.onSelect - the callback of form (item) => {...}. Fires when a menu item is selected
 * @param {Number} props.height - the maximum height of the menu before scrolling is required to see remaining items.
 */
export const ScrollableSelect = ({
  items,
  styles,
  height,
  visible = true,
  onSelect,
  className,
  renderItem,
  selectedItem,
  itemProps=noOpObj,
}) => {

  const selectStyle = useStyle(
    styles?.main,
    visible ? display.visible : display.hidden
  )

  return (
    <SelectView
      visible={visible}
      style={selectStyle}
      height={height ?? 150}
      className={['keg-scrollable-select', className]}
    >
      { items.map(item => {
        const highlighted = selectedItem && item.key === selectedItem.key
        return (
          <InViewSelectItem
            key={item.key || item.text}
            {...itemProps}
            item={item}
            onSelect={onSelect}
            renderItem={renderItem}
            highlighted={highlighted}
            scrollIntoView={highlighted}
            styles={styles?.content}
          />
        )
      }) }
    </SelectView>
  )
}

ScrollableSelect.propTypes = {
  styles: PropTypes.object,
  height: PropTypes.number,
  visible: PropTypes.bool,
  onSelect: PropTypes.func,
  renderItem: PropTypes.func,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.object,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
