import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'KegView'
import { Indicator } from 'KegIndicator'
import { Text } from '../typography/text'
import { isValidComponent } from '../../utils'
import { useClassList } from 'KegClassList'
import { useThemePath } from 'KegHooks'

/**
 * Progress
 * @summary Custom Progress component. All props are optional
 *
 * @param {Object} props
 * @property {String} props.text - button text
 * @property {Object} props.style - custom style
 * @property {Component} props.loadIndicator custom load indicator
 * @property {Object=} props.type - Theme type to use
 * @property {number|String=} props.size - Size of the loading indicator
 */
const Progress = props => {
  const { styles, text, loadIndicator, type, size, color } = props
  const LoadingIndicator = loadIndicator || Indicator

  return (
    <View
      style={styles.progress}
      className='keg-progress'
    >
      { isValidComponent(LoadingIndicator) ? (
        <LoadingIndicator
          type={type}
          size={size}
          color={color}
          styles={styles.indicator}
          className={'keg-loading-indicator'}
        />
      ) : (
        text && (
          <Text
            className='keg-progress-text'
            style={styles.text}
          >
            { text }
          </Text>
        )
      ) }
    </View>
  )
}

/**
 * Loading
 * @summary Custom Loading component. All props are optional
 *
 * @param {Object} props - see Loading.propTypes
 * @property {String=} props.className - Class name of the root element
 * @property {String=} props.text - Text to display while loading
 * @property {number|String=} props.size - Size of the loading indicator
 * @property {Object=} props.styles - Styles object tree
 * @property {Object=} props.themePath - Custom path to styles on the theme
 * @property {Object=} props.type - Theme type to use
 * @property {Object=} props.children - Custom Children of the loading component
 * @property {Component=} props.indicator - custom indicator
 */
export const Loading = props => {
  const {
    size,
    color,
    styles,
    children,
    themePath,
    className,
    indicator,
    text = 'Loading',
    type = 'default',
  } = props

  const builtStyles = useThemePath(themePath || `loading.${type}`, styles)

  return (
    <View
      style={builtStyles.main}
      className={useClassList('keg-loading', className)}
    >
      { children || (
        <Progress
          text={text}
          type={type}
          size={size}
          color={color}
          styles={builtStyles}
          loadIndicator={indicator}
        />
      ) }
    </View>
  )
}

Loading.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  text: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  styles: PropTypes.object,
  indicator: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.elementType,
  ]),
  children: PropTypes.object,
  themePath: PropTypes.string,
  className: PropTypes.string,
}
