import { isStr } from '@keg-hub/jsutils'

/**
 * Css units types
 * @type {Object}
 */
const cssUnits = [ 'px', 'vh', 'vw', 'rem', 'em', 'pic' ]

/**
 * Checks is the passed in item has css units within it's string
 * @function
 * @param {string} item - The item to check
 *
 * @return {Boolean} - True if the string contains css units
 */
export const isCssUnits = item => {
  return isStr(item) && cssUnits.find(unit => item.includes(unit))
}
