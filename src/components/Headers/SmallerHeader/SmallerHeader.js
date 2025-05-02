import React from 'react'
import styled, { css } from 'styled-components'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import MaxWidth from 'components/MaxWidth'
import { media } from 'utils/Media'
import { Link } from 'gatsby'

const SmallerHeaderStyles = styled.header`
  width: 100%;
  min-height: 400px;
  position: relative;
  display: flex;
  align-items: center;
  height: 60vh;
  max-height: 200px;
  @media ${media.md} {
    height: 55vh;
    min-height: 200px;
  }
  @media ${media.lg} {
    height: 70vh;
    min-height: 300px;
    max-height: 300px;
  }

  &.smaller {
    height: 40vh;
    @media ${media.md} {
      height: 45vh;
      min-height: 400px;
    }
    @media ${media.lg} {
      height: 50vh;
      min-height: 450px;
    }
  }

  ${props =>
    props.$fullHeight &&
    css`
      height: 100vh !important;

      h1 {
        color: var(--white) !important;
      }
    `}
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
      color: var(--white);
      text-shadow: 4px 4px #000;

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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: var(--background);

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
        display: none;
      }

      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
      }
    }

    .mobile {
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
      }

      @media ${media.md} {
        display: none;
      }
    }

    .desktop {
      display: none;

      @media ${media.md} {
        display: block;
        width: 100%;
        height: 100%;
        max-width: 1920px;
        margin: 0 auto;
        .gatsby-image-wrapper {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`

const SmallerHeader = ({
  title,
  text,
  data,
  desktopImage,
  mobileImage,
  ...props
}) => (
  <SmallerHeaderStyles {...props}>
    <MaxWidth>
      <div className="title">
        {data?.title ? <h1>{data.title}</h1> : <h1>{title}</h1>}
        {data?.review ? (
          <p className="review">
            {data.review}
            <span>{data.reviewer}</span>
          </p>
        ) : (
          ''
        )}
        {data?.dates ? <p className="dates">{data.dates}</p> : ''}
        {data?.links ? (
          <Link to={data.links}>
            <button type="button" className="btn btn-main">
              <span>{data.btnText}</span>
            </button>
          </Link>
        ) : (
          ''
        )}
        {props.$fullHeight ? (
          <Link to="/">
            <button type="button" className="btn btn-main">
              <span>Home</span>
            </button>
          </Link>
        ) : (
          ''
        )}
      </div>
    </MaxWidth>
    <div className="background">
      <div className="background__image">
        {desktopImage ? (
          <>
            <div className="mobile">
              <GatsbyImage
                image={mobileImage}
                alt=""
                title=""
                className="img-fluid d-block"
              />
            </div>
            <div className="desktop">
              <GatsbyImage
                image={desktopImage}
                alt=""
                title=""
                className="img-fluid d-block"
              />
            </div>
          </>
        ) : (
          <>
            <div className="mobile">
              <StaticImage src="../../../images/header.png" alt="" />
            </div>
            <div className="desktop">
              <StaticImage src="../../../images/header.png" alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  </SmallerHeaderStyles>
)

export default SmallerHeader
