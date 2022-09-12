import { useMemo } from 'react'
import { flattenStyle } from './flattenStyle'
import { addStylesToDom, getSelector, filterRules } from './injectHelpers'
import {
  isArr,
  isObj,
  flatArr,
  noOpObj,
  deepMerge,
  eitherArr,
  hyphenator,
  isEmptyColl,
} from '@keg-hub/jsutils'
import { useTheme } from '../hooks/useTheme'
import {
  prefixStyles,
  createReactDOMStyle,
  preprocess,
} from './reactNativeWeb'
import { ruleOverrides } from '../constants/ruleOverrides'

/**
 * Checks if the rule is enforce and adds !important to it
 * @param {Object} style - Styles rules to be converted to style rules string
 *
 * @returns {string} - Style rules Object converted into a style rules string
 */
const checkImportant = (property, value, important) =>
  important.includes(property) ? `${value} !important` : value

/**
 * Creates a style rules string from a JS object
 * @param {Object} style - Styles rules to be converted to style rules string
 *
 * @returns {string} - Style rules Object converted into a style rules string
 */
export const createBlock = (style, config) => {
  const important = ruleOverrides.important.concat(config?.important)
  const prefixed = prefixStyles(createReactDOMStyle(style))
  const cssString = Object.keys(prefixed)
    .map(property => {
      const value = checkImportant(property, prefixed[property], important)
      const prop = hyphenator(property)

      return isArr(value)
        ? value.map(val => `${prop}:${val}`).join(';')
        : `${prop}:${value}`
    })
    .sort()
    .join(';')

  return cssString.length ? `{${cssString};}` : `{}`
}

/**
 * Converts a JS style object into a style rules string
 * @param {Object} style - Styles rules to be converted to style rules string
 *
 * @returns {string} - Style rules Object converted into a style rules string
 */
export const convertToCss = (style, config) => {
  const stl = deepMerge(...flatArr(eitherArr(style, [style])))
  const rules = { blocks: [], filtered: {} }

  if (!isObj(stl)) return rules

  const { style: cleanStyle, filtered } = filterRules(stl, config?.filter)
  rules.filtered = filtered

  // If all rules were filtered, then skip compiling them
  if (!cleanStyle || isEmptyColl(cleanStyle)) return rules

  const flat = flattenStyle(cleanStyle)
  const compiled = preprocess(flat)
  rules.blocks.push(createBlock(compiled, config))

  return rules
}

/**
 * Custom hook to convert a JS style object into a valid css string
 * <br/>After converting it, it appends it to the Dom
 * <br/>It also keeps a hash of all appended styles rules to avoid duplication
 * @param {Object} style - Styles rules to be converted and added to the Dom
 * @param {string|Array<string>} className - Css selector(s) of the style fules
 *
 * @returns {Object} - {
 *    classNames: a string of classes to pass to a component
 *    css: css rules applied to the dom,
 *    filteredStyle: style object to pass to a component
 * }
 */
export const useStyleTag = (style, className = '', config) => {
  // Ensure config is an object
  config = isObj(config) ? config : noOpObj

  const theme = useTheme()
  const themeSize = theme?.RTMeta?.size
  const themeKey = theme?.RTMeta?.key

  return useMemo(() => {
    const css = { all: '', rules: [] }
    const { blocks, filtered } = convertToCss(style, config)

    if (!blocks.length)
      return {
        css,
        filteredStyle: filtered,
        classNames: eitherArr(className, [className]).join(' '),
      }

    // Create a unique selector based on the className and built blocks
    const { selector, classNames } = getSelector(
      className,
      blocks.join(''),
      config.prefix || 'keg',
      config.maxSelectors
    )

    // Adds the css selector ( className ) to each block
    selector &&
      blocks.map(block => {
        const fullBlock = `${selector}${block}`
        css.all += fullBlock
        css.rules.push(fullBlock)
      })

    css.all && addStylesToDom(selector, css)

    return {
      css,
      classNames,
      filteredStyle: filtered,
    }
  }, [ style, className, themeSize, themeKey, config ])
}
