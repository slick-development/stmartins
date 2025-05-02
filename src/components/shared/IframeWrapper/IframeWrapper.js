import PropTypes from 'prop-types'
import MaxWidth from 'components/MaxWidth'
import React from 'react'
import styled from 'styled-components'
import { IframeHeader } from 'components/Headers'

const IframeWrapperStyles = styled.section`
  width: 100%;
  background: var(--background);
  .Cookies,
  .SpektrixPage {
    color: var(--white) !important;
  }
  p {
    color: var(--white) !important;
  }
`
const IframeWrapper = props => {
  const { children, title } = props
  return (
    <>
      <IframeHeader title={title} />
      <IframeWrapperStyles>
        <MaxWidth>{children}</MaxWidth>
      </IframeWrapperStyles>
    </>
  )
}

IframeWrapper.propTypes = {
  children: PropTypes.any,
}

export default IframeWrapper
