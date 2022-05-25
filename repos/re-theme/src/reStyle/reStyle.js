import React from 'react'
import { StyleInjector } from 'StyleInjector'
import { exists, noOpObj, isObj } from '@keg-hub/jsutils'

import {
  useReStyles,
  useMergedProps,
  getComponentName,
  usePropClassName,
  useShallowMemoMerge,
} from './reStyleHooks'

/**
 * Builds a HOC, with custom styles injected into it
 * @function
 * @param {React.Component} Component - Component to wrap with custom styles
 * @param {string} [styleProp='style'] - Alternate props key to use other then 'style'
 * @param {Object} [config] - Custom config, overrides the global reStyle config
 *
 * @returns {React.Component} HOC that will inject the custom styles
 */
export const reStyle = (Component, styleProp = 'style', config = noOpObj) => {
  const compName = getComponentName(Component)
  const InjectedComp = StyleInjector(Component, {
    className: compName,
    displayName: compName,
    ...config,
  })

  /**
   * @param {Object | Function} styleData - theme or theme function (theme, props) => styles
   * @param {Object | Function} defaultProps - default props or function that returns default props (theme) => defaultProps
   */
  return (styleData, defaultProps) => {
    const StyledFun = React.forwardRef((props, ref) => {
      const reStyles = useReStyles(styleData, props)
      const classArr = usePropClassName(props.className, compName)
      const styleFromProps = exists(props[styleProp]) ? props[styleProp] : null

      const styles = useShallowMemoMerge(reStyles, styleFromProps)
      const mergedProps = useMergedProps(props, defaultProps)

      return (
        <InjectedComp
          {...mergedProps}
          {...{ [styleProp]: styles }}
          ref={ref}
          className={classArr}
          __reStyleStylePropKey__={styleProp}
        />
      )
    })

    StyledFun.displayName = `reStyle(${compName})`

    return StyledFun
  }
}

/**
 * Helper to set the global config object for reStyle
 * @param {Object} config - Config settings for global reStyle
 * @param {string} config.className - Default className applied to components
 * @param {string} [config.prefix=keg] - Class prefix to prefix to hashed classNames
 * @param {Array} [config.filter] - Group of style rules that should be **ignored** by reStyle
 * @param {string} [config.maxSelectors=1] - Number of selectors used when applying styles
 * @param {Array} [config.important] - Group of style rules that should have `!important` appended to them
 */
reStyle.setConfig = config => {
  if (!isObj(config))
    console.warn(`Restyle config must be an "Object". Instead got`, config)

  StyleInjector.setConfig(config)
}
