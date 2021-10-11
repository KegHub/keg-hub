import React from 'react'
import { ItemHeader } from '../itemHeader'
import { useClassList } from 'KegClassList'
/**
 * AppHeader
 * @todo implement native status bar functionality
 * @param {object} props
 */
export const AppHeader = props => {
  const { className, ...otherProps } = props
  return (
    <ItemHeader
      accessibilityRole='banner'
      className={useClassList('keg-app-header', className)}
      appHeader={true}
      {...otherProps}
    />
  )
}
