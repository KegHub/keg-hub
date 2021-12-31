/* eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/

import React, { useMemo } from 'react'
import { View } from 'KegView'
import PropTypes from 'prop-types'
import { useStyle } from '@keg-hub/re-theme'
import { getPlatform, getPressHandler } from '../../utils'
import { pickKeys, ensureArr, noOpObj } from '@keg-hub/jsutils'

/**
 * Checks the for width styles in the props styles object
 * @param {Object} style - passed in styles for the Container
 *
 * @return {boolean} - If a width style rule exists
 */
const useContainerStyle = (styles, flexDir, size) => {
  const flexStyle = useMemo(() => {
    const hasWidth = (
      styles
        .map(style => {
          return Boolean(
            Object.keys(pickKeys(style, [ 'width', 'minWidth', 'maxWidth' ]))
              .length
          )
        })
        .indexOf(true) !== -1
    )
    // Get flex type based on size or style
    return flexDir === 'row' && ({
      flexDirection: flexDir,
      flex: size ? size : hasWidth ? 0 : 1
    })

  }, [...styles, flexDir, size])

  return useStyle(flexStyle, ...styles)
}
  
  // const style = useStyle(flexStyle, ...containerStyles)
/**
 * Container
 * General Wrapper component that's use to build the Grid / Row / Column components
 * @param {Object} props - see PropTypes below
 *
 */
export const Container = ({
  onPress,
  onClick,
  children,
  flexDir,
  size,
  style = noOpObj,
  ...props
}) => {
  const containerStyle = useContainerStyle(ensureArr(style), flexDir, size)

  return (
    <View
      {...props}
      style={containerStyle}
      {...getPressHandler(getPlatform(), onClick || onPress)}
    >
      { children }
    </View>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
    PropTypes.func,
  ]),
  flexDir: PropTypes.string,
  onPress: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.number,
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
}
