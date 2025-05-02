import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from 'utils/Media'
import { FaqInfo } from './FaqInfo'
import { Faqs } from './Faqs'

const FaqWrapperStyles = styled.section`
  .wrapper {
    padding: 2rem 0;
    width: 100%;
    height: 100%;
    margin: var(--auto);
    max-width: var(--maxWidth);
    color: var(--white);
  }
`
const FaqWrapper = ({ data }) => (
  <FaqWrapperStyles>
    <section className="wrapper">
      <Faqs data={data} />
    </section>
  </FaqWrapperStyles>
)

FaqWrapper.propTypes = {
  data: PropTypes.any,
}

export default FaqWrapper
