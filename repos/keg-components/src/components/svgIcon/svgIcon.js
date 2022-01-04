import React, { useMemo } from 'react'
import * as NativeSvg from './svgIcon.native'
import { StyleInjector } from '@keg-hub/re-theme/styleInjector'
import { useTheme, useStyle } from '@keg-hub/re-theme'
import { get, isArr, deepMerge, noPropObj } from '@keg-hub/jsutils'

const { SvgIcon: KegSvgIcon, ...svgElements } = NativeSvg

/**
 * Custom hook to check if the size prop is an array, and merge it. Otherwise just returns the style object
 * @param {Object|Array=} style - Style object used to apply custom styles to the component
 *
 * @returns {Object} - Merged style object
 */
const useIconStyle = style => {
  return useMemo(() => {
    return isArr(style) ? deepMerge(...style) : style
  }, [style])
}

/**
 * Custom hook to find the size from the props and styles
 * @param {string=} size - Size of the Svg Component
 * @param {Object=} style - Style object used to apply custom styles to the component
 * @param {Object=} theme - Global theme object
 *
 * @returns {Object} - Contains the height and width props for the Svg element
 */
const useSize = (size, width, height, style, theme) => {
  return useMemo(() => {
    const iconSize = size || get(style, 'fontSize')
    const themeSize = get(theme, 'typography.default.fontSize', 15) * 2
    return {
      height: height || iconSize || get(style, 'height', themeSize),
      width: width || iconSize || get(style, 'width', themeSize),
    }
  }, [ size, width, height, style ])
}

/**
 * Custom hook to find the fill color from the props and styles
 * @param {string=} fill - Fill color of the path element
 * @param {string=} stroke - Color of the stroke for the path element
 * @param {string=} color - Color of the Svg component
 * @param {string} border - Used as the stroke color when no stroke prop is passed
 * @param {Object=} style - Style object used to apply custom styles to the component
 * @param {Object=} theme - Global theme object
 *
 * @returns {Object} - Contains the stroke and fill props for the path element
 */
const useColor = (fill, stroke, color, border, style, theme) => {
  return useMemo(() => {
    const themeColor = get(theme, 'typography.default.color')
    return {
      stroke:
        stroke || border || style.border || color || style.color || themeColor,
      fill: fill || color || style.color || stroke,
    }
  }, [ fill, stroke, color, border, style ])
}

/**
 * SvgIcon
 * @summary SVG component for rendering SVG icons
 *
 * @param {Object} props - see SvgIcon PropTypes
 * @property {String} props.className - Value to set the className to (web platform only)
 *
 */
export const SvgIconInject = StyleInjector(KegSvgIcon, {
  displayName: 'SvgIcon',
  className: 'keg-svg-icon',
})

export const SvgIcon = React.forwardRef((props, ref) => {
  const {
    border,
    color,
    fill,
    height,
    size,
    stroke,
    style = noPropObj,
    width,
  } = props

  const theme = useTheme()
  const iconStyle = useIconStyle(style)
  const sizeStyle = useSize(size, width, height, iconStyle, theme)
  const svgStyles = useStyle(iconStyle, sizeStyle)
  const colorStyle = useColor(fill, stroke, color, border, iconStyle, theme)

  return (
    <SvgIconInject
      {...props}
      {...sizeStyle}
      {...colorStyle}
      style={svgStyles}
      ref={ref}
    />
  )
})

// add all the react-native-svg exports, like Circle, so that clients
// can use them as children (e.g. SvgIcon.Circle)
Object.assign(SvgIcon, svgElements)

SvgIcon.propTypes = {
  ...KegSvgIcon.propTypes,
}
