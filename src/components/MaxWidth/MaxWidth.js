import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

const StyledMaxWidth = styled.section`
  width: 100%;

  .container-max {
    width: 100%;
    max-width: var(--maxWidth);
    margin: var(--auto);
    padding: 0 15px;
  }
`
const MaxWidth = props => {
  const { children } = props
  return (
    <StyledMaxWidth>
      {props.$noLazy ? (
        <div className="container-max">{children}</div>
      ) : (
        <LazyLoad offset={100}>
          <div className="container-max">{children}</div>
        </LazyLoad>
      )}
    </StyledMaxWidth>
  )
}

MaxWidth.propTypes = {
  children: PropTypes.any,
}

export default MaxWidth
