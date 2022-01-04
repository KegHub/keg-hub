import React from 'react'
import { View } from 'KegView'
import { useThemePath } from 'KegHooks'

export const IndicatorWrapper = props => {
  const {
    alt,
    isWeb,
    styles,
    Element,
    themePath,
    resizeMode,
    type = 'default',
    ...elProps
  } = props

  const builtStyles = useThemePath(themePath || `indicator.${type}`, styles)

  return (
    <View style={builtStyles.container}>
      <Element
        {...elProps}
        alt={alt || 'Loading'}
        style={builtStyles.icon}
        resizeMode={resizeMode || 'contain'}
      />
    </View>
  )
}
