import React from 'react'
import { capitalize } from '@keg-hub/jsutils'
import { KegText as NativeText } from './kegText.native'
import { StyleInjector } from '@keg-hub/re-theme/styleInjector'
import { useTextStyles } from '../../../hooks/useTextStyles'

/**
 * KegText
 * @summary KegText component that wraps the KegText Native Text component to allow injecting styles
 *
 * @param {string} element - Name of the text element
 */
export const KegText = element => {
  // Build the Text Component with the StyleInjector
  const Text = StyleInjector(NativeText(element), {
    className: `keg-${element}`,
    displayName: capitalize(element),
  })

  return React.forwardRef((props, ref) => {
    const textStyles = useTextStyles(element)

    return <Text
      {...props}
      style={[ textStyles, props.style ]}
      ref={ref}
    />
  })
}

KegText.propTypes = NativeText.propTypes
