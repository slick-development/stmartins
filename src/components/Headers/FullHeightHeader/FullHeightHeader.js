import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import ArrowIcon from 'svgs/arrow.svg'
import { media } from 'utils/Media'
import MaxWidth from 'components/MaxWidth'

const FullHeightHeaderStyles = styled.header`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  @media ${media.sm} {
    height: 600px;
  }

  .title {
    position: relative;
    z-index: 100;
    padding: 3rem 0 8rem 0;

    h1 {
      font-weight: 400;
      @media ${media.lg} {
        font-size: 4rem;
      }

      br {
        display: none;
      }

      margin: 0;
      color: var(--gold);
      @media ${media.lg} {
        br {
          display: block;
        }
      }
    }

    p {
      margin-top: 1.5rem;
      max-width: 700px;
      font-size: 16px;
      color: var(--white);
    }
  }

  .arrow-icon {
    position: absolute;
    z-index: 99;
    width: 100%;
    bottom: 1rem;
    left: -1rem;

    .icon {
      max-width: var(--maxWidth);
      width: 100%;
      margin: 0 auto;

      svg {
        width: 85px;
        height: 85px;
      }

      @media ${media.sm} {
        svg {
          width: 110px;
          height: 110px;
        }
      }
      @media ${media.md} {
        left: 0.5rem;
        svg {
          width: 130px;
          height: 130px;
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
        background: rgba(0, 0, 0, 0.75);
        content: '';
      }

      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
      }
    }
  }
`
const FullHeightHeader = () => (
  <FullHeightHeaderStyles>
    <MaxWidth $noLazy>
      <div className="title">
        <h1>
          Welcome to the Heart <br /> of the West End
        </h1>
        <p>
          St. Martin’s Theatre has welcomed over 15 million audience members
          through its doors since opening in 1916 with its first production, the
          spectacular Edwardian musical comedy Houp La! This Grade II listed
          building, designed by W.G.R. Sprague, has been home to Agatha
          Christie’s record-breaking masterpiece The Mousetrap since 1974.
          Located in West Street in the charming Seven Dials area of the West
          End, St. Martin’s Theatre has cemented its place as a London landmark
          in its own right.
        </p>
      </div>
    </MaxWidth>
    <div className="arrow-icon">
      <div className="icon">
        <a href="#whats-on">
          <ArrowIcon />
        </a>
      </div>
    </div>
    <div className="background">
      <div className="background__image">
        <StaticImage
          src="../../../images/header-new.jpg"
          alt="St Martins's Theatre"
        />
      </div>
    </div>
  </FullHeightHeaderStyles>
)

export default FullHeightHeader
