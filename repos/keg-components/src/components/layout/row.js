import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './container'
import { useStyle } from '@keg-hub/re-theme'
import { useClassList } from 'KegClassList'

export const Row = ({ className, children, style, ...props }) => {
  const classNames = useClassList('keg-row', className)
  const containerStyles = useStyle(`layout.grid.row`, style)

  return (
    <Container
      {...props}
      flexDir='row'
      className={classNames}
      style={containerStyles}
    >
      { children }
    </Container>
  )
}

Row.propTypes = {
  center: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
}
