import { addThemeEvent } from '../theme/themeEvent'
import { Constants } from '../constants'
import { ruleOverrides } from '../constants/ruleOverrides'
import {
  isArr,
  isStr,
  isObj,
  exists,
  noPropArr,
  hashString,
  hasDomAccess,
  splitByKeys,
} from '@keg-hub/jsutils'

/**
 * Cache the current environment
 */
const domAccess = hasDomAccess()

/**
 * Cache holder to hold the main StyleSheet Dom element
 */
let KegStyleSheet

/**
 * Caches selectors already added to the Dom
 */
const selectorCache = new Set()

/**
 * Checks if a selector already exists in the selector cache
 * @param {string} selector - selector to check if already exists
 * @param {string} sizeKey - Current size being rendered
 *
 * @return {Boolean} - If the selector has already been cached
 */
const selectorExists = selector => selectorCache.has(selector)

/**
 * Gets the cached style sheet, or finds it on the DOM
 * @function
 *
 * @returns {Object} - Keg Style sheet
 */
const getKegSheet = () => {
  KegStyleSheet =
    KegStyleSheet ||
    document.head.querySelector(`#${Constants.KEG_STYLES_TAG_ID}`)

  return KegStyleSheet
}

/**
 * Filters out styles that require extra help to convert to CSS
 * <br/>In these cases, we let react-native-web handel through the style attribute
 * @function
 * @param {Object} style - Object containing style rules
 * @param {Array} filter - Custom style rules to filter out
 *
 * @returns {Object} - Contains separated objects with filtered styles, non-filtered styles
 */
export const filterRules = (style, filter) => {
  const toFilter = isArr(filter)
    ? ruleOverrides.filter.concat(filter)
    : ruleOverrides.filter

  // Ensure the object is a style object, an not multi-layered object
  const hasSubStyles = Boolean(
    Object.entries(style).filter(
      ([ key, val ]) =>
        /**
         * Some style rules are allowed to be object
         * Those rules are defined in the allowedStyleObject Array
         * So if the value is an object, but not in the allowedStyleObject Array
         * Then it is assumed to be a multi-layered style object
         * In this case, we don't want to process these styles
         * They are skipped and passed on to the component
         * @example
         * const styles = {content: {item: {color: '#ffffff'}}}
         */
        isObj(val) && !ruleOverrides.allowedStyleObject.includes(key)
    ).length
  )

  if (hasSubStyles) return { filtered: style }

  const [ filtered, keep ] = splitByKeys(style, toFilter)

  return {
    style: keep,
    filtered: filtered,
  }
}

const formatSelectors = (hashClass, classNames, prefix, maxSelectors) => {
  /**
   * Allow setting how many selectors are added to the element via maxSelectors
   * @example
   * //                   Index 0      Index 1      Index 2
   * const selectors = [`selector0`, `selector1`, `selector2`]
   * const maxSelectors === 2
   * selectors.slice(0, maxSelectors) === [`selector0`, `selector1`]
   *
   */
  const selectorAmount = exists(maxSelectors) ? maxSelectors : 1
  const selectors = classNames
    .filter(cls => (cls && prefix ? cls.startsWith(prefix) : cls))
    .reverse()
    .slice(0, selectorAmount)
    .sort()

  return {
    selector: `.${selectors.concat([hashClass]).join('.')}`.trim(),
    classNames: classNames.concat([hashClass]).join(' ')
      .trim(),
  }
}

/**
 * Creates a unique selector based on the passed in className and cssString
 * @function
 * @param {string|Array<string>} className - Original className(s) used as a css selector
 * @param {string} cssString - Css rules for the className in string format
 * @param {string=} prefix - optional prefix to filter by
 *
 * @returns {{hashClass:string, selector:string}} - returns selector string and hashClass string
 */
export const getSelector = (className, cssString, prefix, maxSelectors) => {
  const hashClass = `${prefix}-${hashString(cssString)}`

  const { selector, classNames } = isArr(className)
    ? formatSelectors(hashClass, className, prefix, maxSelectors)
    : isStr(className)
      ? formatSelectors(hashClass, className.split(' '), prefix, maxSelectors)
      : formatSelectors(hashClass, noPropArr, prefix, maxSelectors)

  return {
    hashClass,
    classNames,
    selector: selectorExists(selector) ? false : selector,
  }
}

/**
 * Adds a css string to the KegStyleSheet
 * @param {string} selector - Css selector to add the style rules to
 * @param {Object} css - Style rules as an object
 * @param {string} css.all - Style rules to be added as a string
 *
 * @returns {Void}
 */
export const addStylesToDom = (selector, css) => {
  // skip if these styles are already inserted
  if (!domAccess || !css || selectorExists(selector)) return

  // Cache the selector with the size
  // So next time we can look up if the size changed
  selectorCache.add(selector)
  const KegSheet = getKegSheet()
  KegSheet.sheet.insertRule(`@media all {${css.all}}`)
}

/**
 * Removes any keys stored in the selectorCache
 * <br/>Removes all styles applied to the Dom
 * @function
 *
 * @returns {Void}
 */
const clearStyleSheet = () => {
  selectorCache.clear()
  const KegSheet = getKegSheet()
  KegSheet.textContent = ''
}

/**
 * Add an event listener to the Theme Build event
 * Any time the theme rebuilds, we want to reset the styles added to the dom
 */
addThemeEvent(Constants.BUILD_EVENT, clearStyleSheet)

/**
 * Creates a <style> Element on the dom, is called immediately
 *
 * @returns {Object} - finds or creates style tag with Constants.KEG_STYLES_TAG_ID as the id
 */
;(() => {
  if (!domAccess) return

  KegStyleSheet = document.head.querySelector(`#${Constants.KEG_STYLES_TAG_ID}`)

  if (KegStyleSheet) return KegStyleSheet

  KegStyleSheet = document.createElement('style')
  KegStyleSheet.id = Constants.KEG_STYLES_TAG_ID
  document.head.append(KegStyleSheet)
})()
