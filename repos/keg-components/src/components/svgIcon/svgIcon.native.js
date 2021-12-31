import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import Svg, { Path } from 'react-native-svg'
import {
  isArr,
  isStr,
  noPropObj,
  eitherArr,
} from '@keg-hub/jsutils'
import { getPlatform } from 'KegGetPlatform'
const isWeb = getPlatform() === 'web'

const defClass = 'keg-svg-icon'

/**
 * Custom hook to get the classes for the SVG component on web
 * @param {Array|string=} className - Class name(s) to add
 *
 * @returns {Object} - Contains a className prop if on a web platform, otherwise it's empty
 */
const useClassName = className => {
  if (!isWeb) return noPropObj

  const deps = eitherArr(className, [className]).join(' ')
  return useMemo(() => {
    const classes = isArr(className)
      ? className.join(' ')
      : isStr(className)
        ? className
        : ''
    return {
      className: classes.includes(defClass)
        ? classes
        : `${defClass} ${classes}`,
    }
  }, [deps])
}

/**
 * SvgIcon
 * @param {object} props
 * @param {string} props.border - Used as the stroke color when no stroke prop is passed
 * @param {string=} props.color - Color of the Svg component
 *                              - Used as the stroke color when no stroke prop is passed
 *                              - Used as the fill color when no fill prop is passed
 * @param {string=} props.clipRule - Svg rule for clipping
 * @param {string=} props.delta - Path definition for the Svg Component. If omitted, no Path element is rendered.
 * @param {string=} props.fill - Fill color of the path element
 * @param {string=} props.fillRule - Svg rule for the fill attribute
 * @param {string=} props.size - Size of the Svg Component
 * @param {string=} props.stroke - Color of the stroke for the path element
 * @param {Object=} props.style - Style object used to apply custom styles to the component
 * @param {string=} props.style.border - Used as the stroke color when no stroke or border prop is passed
 * @param {string=} props.style.color - Used as the fill color when no fill or color prop is passed
 * @param {string=} props.svgFill - Fill color of the parent SVG element
 * @param {string=} props.viewBox - View box size of the parent SVG element
 *
 */
export const SvgIcon = React.forwardRef((props, ref) => {
  const {
    className,
    clipRule,
    delta,
    fill,
    fillRule,
    height,
    stroke,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    style = noPropObj,
    svgFill,
    viewBox,
    width,
    children,
    ...attrs
  } = props

  const classProps = useClassName(className)

  return (
    <Svg
      {...attrs}
      {...classProps}
      height={height}
      width={width}
      fill={svgFill}
      viewBox={viewBox}
      style={style}
    >
      { delta && (
        <Path
          clipRule={clipRule}
          d={delta}
          fill={fill}
          fillRule={fillRule}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
        />
      ) }
      { children }
    </Svg>
  )
})

SvgIcon.propTypes = {
  border: PropTypes.string,
  className: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]),
  color: PropTypes.string,
  clipRule: PropTypes.string,
  delta: PropTypes.string,
  fill: PropTypes.string,
  fillRule: PropTypes.string,
  size: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  stroke: PropTypes.string,
  style: PropTypes.oneOfType([ PropTypes.object, PropTypes.array ]),
  svgFill: PropTypes.string,
  viewBox: PropTypes.string,
}

export * from 'react-native-svg'
