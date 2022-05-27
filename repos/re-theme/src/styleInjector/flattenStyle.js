/**
 * Loops over the passed in style style objects
 * @param {Array<Object>} style - Array of Style objects
 * @param {Object} result - Returned result of the flatten styles
 *
 * @returns {Object} - Passed in result Object
 */
const loopArrStyle = (style, result) => {
  for (let i = 0, styleLength = style.length; i < styleLength; ++i) {
    const computedStyle = flattenStyle(style[i])
    if (computedStyle) {
      for (const key in computedStyle) {
        const value = computedStyle[key]
        result[key] = value
      }
    }
  }
  return result
}

/**
 * Flattens the passed in style object || array
 * @param {Object|Array<Object>} style - Styles to flatten
 * @param {Object} result - Returned result of the flatten styles
 *
 * @returns {Object} - Passed in result Object
 */
export const flattenStyle = (style, result = {}) => {
  return !style || style === true
    ? undefined
    : !Array.isArray(style)
        ? style
        : loopArrStyle(style, result)
}
