import React from 'react'
import { ActivityIndicator } from 'react-native'
import { IndicatorWrapper } from './indicator.wrapper'
import { View } from 'KegView'
import { getPlatform } from 'KegGetPlatform'
import { useClassList } from 'KegClassList'

const isWeb = getPlatform() === 'web'

const Element = ({ className, style = {}, size, color, ...attrs }) => {
  return (
    <View className={useClassList('keg-indicator', className)}>
      <ActivityIndicator
        size={size}
        color={color || style.color}
      />
    </View>
  )
}

export const Indicator = ({ alt, size, color, styles, ...props }) => {
  return (
    <IndicatorWrapper
      {...props}
      color={color}
      isWeb={isWeb}
      styles={styles}
      Element={Element}
      alt={alt || 'Loading'}
      size={[ 'large', 'small' ].includes(size) ? size : 'large'}
    />
  )
}
