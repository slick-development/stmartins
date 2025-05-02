import React from 'react'
import styled, { css } from 'styled-components'

import MaxWidth from 'components/MaxWidth'
import { StaticImage } from 'gatsby-plugin-image'
import { media } from 'utils/Media'

const SmallerHeaderStyles = styled.header`
  width: 100%;
  height: 50vh;
  position: relative;
  display: flex;
  align-items: center;
  @media ${media.sm} {
    height: 60vh;
  }
  @media ${media.md} {
    height: 55vh;
    min-height: 500px;
  }

  .title {
    position: relative;
    z-index: 100;
    margin-top: 2rem;
    h1 {
      font-weight: 400;
      br {
        display: none;
      }
      margin: 0;
      color: var(--gold);
      font-size: 2rem;
      @media ${media.sm} {
        font-size: 3rem;
      }
      @media ${media.lg} {
        font-size: 3.5rem;
        br {
          display: block;
        }
      }
    }
    .review {
      font-family: var(--fontSecondary);
      color: var(--white);
      font-size: 1.85rem;
      margin-top: 1rem;
      span {
        font-size: 1.25rem;
        margin-left: 5px;
      }
      @media ${media.sm} {
        font-size: 2.2rem;
        span {
          font-size: 1.5rem;
        }
      }
    }
    .dates {
      color: var(--white);
      margin-top: 1rem;
      font-size: 0.9rem;
      @media ${media.sm} {
        font-size: 1rem;
      }
    }
    button {
      width: 200px;
      margin-top: 1.5rem;
      span {
        font-size: 0.9rem;
        @media ${media.sm} {
          font-size: 1rem;
        }
      }
    }
  }

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9;

    &__image {
      width: 100%;
      height: 100%;
      position: relative;
      &::after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        content: '';
      }
      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
      }
    }
  }
`

const IframeHeader = ({ title }) => (
  <SmallerHeaderStyles>
    <MaxWidth>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </MaxWidth>
    <div className="background">
      <div className="background__image">
        <StaticImage src="../../../images/new-poster.png" alt="" />
      </div>
    </div>
  </SmallerHeaderStyles>
)

export default IframeHeader
