import React, { useMemo } from 'react'
import { Row } from './row'
import PropTypes from 'prop-types'
import { Container } from './container'
import { useClassList } from 'KegClassList'
import { ensureArr } from '@keg-hub/jsutils'
import { useStyle } from '@keg-hub/re-theme'

/**
 * Builds the styles based on the passed in isCenter param
 *
 * @param {*} isCenter - how to center the children. Should be x / y || true
 * @returns { object } - built center styles
 */
const useBuildCenterStyles = isCenter => {
  return useMemo(() => {
    if (!isCenter) return

    return isCenter === 'x' || isCenter === 'xaxis' || isCenter === 'x-axis'
      ? { justifyContent: 'center' }
      : isCenter === 'y' || isCenter === 'yaxis' || isCenter === 'y-axis'
        ? { alignItems: 'center' }
        : (isCenter && { alignItems: 'center', justifyContent: 'center' }) || {}
  }, [isCenter])
}

/**
 * Checks each child to determine if it's a column or row and if content is centered
 *
 * @param  { array || object } children - React Components
 * @return { bool }
 */
const useChildAttrs = children => {
  return useMemo(() => {
    return children.reduce(
      (attrs, child) => {
        if (attrs?.isRow && attrs?.isCenter) return attrs
        if (!attrs?.isRow && child && child?.type === Row) attrs.isRow = true
        if (!attrs?.isCenter && child && child?.props && child?.props?.center)
          attrs.isCenter = child.props.center.toString().toLowerCase()

        return attrs
      },
      { isRow: false, isCenter: false }
    )
  }, [children])
}

export const Grid = ({ className, children, style, ...props }) => {
  const { isRow, isCenter } = useChildAttrs(ensureArr(children))
  const classNames = useClassList('keg-grid', className)
  const centerStyles = useBuildCenterStyles(isCenter)

  const containerStyle = useStyle('layout.grid.wrapper', style, centerStyles)

  return (
    <Container
      {...props}
      size={1}
      style={containerStyle}
      className={classNames}
      flexDir={isRow ? 'column' : 'row'}
    >
      { children }
    </Container>
  )
}

Grid.propTypes = {
  theme: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
}
