import React from 'react'
import { useStyleTag } from './useStyleTag'
import { splitByKeys, noOpObj } from '@keg-hub/jsutils'
import { useCompiledStyles } from '../hooks/useCompiledStyles'

/**
 * Helper component that actually calls the useStyleTag hook
 * Call the useStyleTag hook here to allow calling the hook conditionally
 * and not break the rules of Hooks
 * @param {Object} props - All props passed to the wrapped Component
 * @param {Object} props.Component - Component being wrapped by the HOC
 * @param {string} props.KegDefClass - Default className of the wrapped Component
 * @param {Object} props.style - Styles to be added to the Dom
 *
 * @returns {string} - className Css selector of the added style rules
 */
const BuildWithStyles = React.forwardRef((props, ref) => {
  const {
    config,
    children,
    Component,
    className,
    styleProp,
    splitStyles: style,
    ...buildProps
  } = props

  const { className: KegDefClass } = config
  const compiled = useCompiledStyles(style)
  const { classNames, filteredStyle } = useStyleTag(
    compiled,
    className || KegDefClass,
    config
  )

  return (
    <Component
      {...buildProps}
      {...{ [styleProp]: filteredStyle }}
      ref={ref}
      className={classNames}
    >
      { children }
    </Component>
  )
})

/**
 * Custom Hoc that wraps a component, and extracts the style prop from props
 * It then appends the style props to the Dom
 * Component must accept a className prop to work properly
 * @param {Object} Component - React Component to wrap
 * @param {Object} config - Settings for the Hoc
 *
 * @returns {Function} - Anonymous function that wraps the passed in Component
 */
export const StyleInjector = (Component, config = {}) => {
  return React.forwardRef((allProps, ref) => {
    const styleProp = allProps.__reStyleStylePropKey__ || 'style'

    // separate the styles via the internal __reStyleStylePropKey value and key name
    // We use __reStyleStylePropKey__ to not override a prop from a consumer
    // It's possible __reStyleStylePropKey__ could be reused, but unlikely
    // And it only matters when using reStyle and __reStyleStylePropKey
    // It contains the prop key name that should be used for accessing the styles in the props
    const [ styleSplit, props ] = splitByKeys(allProps, [
      styleProp,
      '__reStyleStylePropKey__',
    ])

    // Get only the styles, and ignore the styleProp
    const styles = styleSplit[styleProp]

    /**
     * If NO styles
     *  * return the component passing on the props and ref, and falsy styles by styleProp key
     * If styles do exist
     *  * Pass on the props, and separated (splitStyles) to the BuildWithStyles component
     */
    return !styles || styles === noOpObj ? (
      <Component
        {...props}
        {...{ [styleProp]: styles }}
        ref={ref}
      />
    ) : (
      <BuildWithStyles
        {...props}
        ref={ref}
        config={config}
        Component={Component}
        splitStyles={styles}
        styleProp={styleProp}
      />
    )
  })
}
