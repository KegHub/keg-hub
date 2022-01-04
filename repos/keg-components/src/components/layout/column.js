import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Container } from './container'
import { useClassList } from 'KegClassList'
import { useTheme, useStyle } from '@keg-hub/re-theme'

const widthFromSize = (size, theme) => {
  const total = theme?.layout?.columns || 12
  size = size > total ? total : size
  const colWidth = parseFloat(size * (100 / total)).toFixed(4)

  return { minWidth: `${colWidth}%`, maxWidth: `${colWidth}%` }
}

const useColumnWidth = (size, theme) => {
  return useMemo(() => {
    return size ? widthFromSize(size, theme) : { flexGrow: 1 }
  }, [ size, theme ])
}

export const Column = ({ className, children, size, center, ...props }) => {
  const theme = useTheme()
  const widthStyle = useColumnWidth(size, theme)
  const style = useStyle(`layout.grid.column`, props.style, widthStyle)

  return (
    <Container
      {...props}
      size={size}
      style={style}
      flexDir='column'
      className={useClassList('keg-column', className)}
    >
      { children }
    </Container>
  )
}

Column.propTypes = {
  size: PropTypes.number,
  center: PropTypes.string,
  theme: PropTypes.object,
  style: PropTypes.object,
}
