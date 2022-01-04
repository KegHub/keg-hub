import { useMemo, useRef } from 'react'
import { useTheme } from '../hooks/useTheme'
import {
  ensureArr,
  uuid,
  isObj,
  deepMerge,
  noOpObj,
  isFunc,
  shallowEqual,
} from '@keg-hub/jsutils'

/**
 * Helper to get the name of a component, or an ID for reference
 * @function
 * @param {React.Component} Component - Component to get the name from
 *
 * @returns {string} - Name of the Component or generated id when name does not exist
 */
export const getComponentName = Component => {
  return (
    Component.displayName ||
    Component.name ||
    `keg-${uuid().split('-')
      .slice(4)
      .join('')}`
  )
}

/**
 * Hook to ensure the className prop is an array with the compName argument added to it
 * @function
 * @param {String|Array} className - Current class names already set
 * @param {string} compName - Name of a component to be added as a class name
 *
 * @returns {Array} - Built array of class names with the compName name added to it
 */
export const usePropClassName = (className, compName) => {
  return useMemo(() => {
    const classArr = className ? ensureArr(className) : []
    compName && classArr.push(compName)

    return classArr
  }, [ className, compName ])
}

/**
 * Hook that memoizes the merged objects using a shallow-equal comparison
 * @function
 * @param {Object} reStyles - Styles generated form useReStyles hook
 * @param {Object} styleFromProps - Styles passed in from props
 *
 * @returns {Object} - merged object
 */
export const useShallowMemoMerge = (reStyles, styleFromProps) => {
  const identity = useRef(null)

  return useMemo(() => {
    if (!styleFromProps || styleFromProps === noOpObj) return reStyles
    if (!reStyles || reStyles === noOpObj) return styleFromProps

    const merged = deepMerge(reStyles, ...ensureArr(styleFromProps))

    const foundIdentity = shallowEqual(identity.current, merged)
      ? identity.current
      : merged

    // if the merged object is shallowly different than the cached identity,
    // update the identity
    if (foundIdentity !== identity.current) {
      identity.current = foundIdentity
    }

    return foundIdentity
  }, [ reStyles, styleFromProps ])
}

/**
 * Hook to memoize the styles and return them
 * <br/> Calls styleData when its a function passing in the theme and props
 * @function
 * @param {Object|function} styleData - Custom styles or function return custom styles
 * @param {Object} props - Props of the component being wrapped
 *
 * @returns {Object} - Build styles object
 */
export const useReStyles = (styleData, props) => {
  const theme = useTheme()
  const lastProps = useRef(props)

  useMemo(() => {
    !shallowEqual(props, lastProps.current) && (lastProps.current = props)
  }, [ props, lastProps ])

  return useMemo(() => {
    return isFunc(styleData)
      ? styleData(theme, lastProps.current)
      : isObj(styleData)
        ? styleData
        : noOpObj
  }, [ theme, styleData, lastProps.current ])
}

/**
 * Merges props
 * @param {Object} props - component props
 * @param {*} defaultProps - optional default props defined at reStyle site
 * @returns {Object} - merged props and defaultProps
 */
export const useMergedProps = (props, defaultProps) => {
  // defaultProps will never change, so we can safely short circuit
  // if it's undefined
  if (!defaultProps) return props

  const theme = useTheme()

  const finalDefProps = useMemo(
    () => (isFunc(defaultProps) ? defaultProps(theme) : defaultProps),
    [ theme, props, defaultProps ]
  )

  return useMemo(() => ({ ...finalDefProps, ...props }), [ finalDefProps, props ])
}
