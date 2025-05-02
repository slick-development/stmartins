import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { media } from 'utils/Media'
import MaxWidth from 'components/MaxWidth'

const TheTheatreStyles = styled.section`
  padding: 2rem 0;
  overflow-x: hidden;
  background-color: var(--white);
  .title {
    h2 {
      font-family: var(--fontMain);
      text-transform: uppercase;
    }
    p {
      margin-top: 1rem;
      @media ${media.md} {
        max-width: 500px;
      }
    }
  }
  .image {
    position: relative;
    width: 90%;
    margin: 2rem auto;
    .gatsby-image-wrapper {
      z-index: 10;
    }
    @media ${media.sm} {
      margin: 3rem auto 1rem auto;
    }
    @media ${media.md} {
      width: 100%;
      max-width: 1000px;
    }
    &::after {
      content: '';
      background-color: var(--gold);
      height: 110%;
      width: 30%;
      position: absolute;
      bottom: 0.28rem;
      right: -2rem;
      z-index: 0;
      @media ${media.s} {
        right: -3rem;
      }
      @media ${media.sm} {
        right: -3.5rem;
      }
      @media ${media.md} {
        width: 50%;
        bottom: 0.45rem;
      }
    }
    &::before {
      content: '';
      background-color: var(--gold);
      height: 75%;
      width: 25%;
      position: absolute;
      bottom: -0.5rem;
      left: -2rem;
      z-index: 0;
      @media ${media.s} {
        left: -3rem;
      }
      @media ${media.sm} {
        left: -3.5rem;
      }
      @media ${media.md} {
        width: 15%;
        left: -0.85rem;
      }
    }
  }
  @media ${media.md} {
    padding: 4rem 0;
  }
`
const TheTheatre = () => (
  <TheTheatreStyles>
    <MaxWidth>
      <div className="title">
        <h2>OUR THEATRE</h2>
        <p>
          St. Martins Theatre is in the heart of London’s West End. It has
          staged the Mousetrap, the longest continuous running show in the
          world, since March 1974.
        </p>
      </div>
      <div className="image">
        <StaticImage src="../../../images/theatre.png" alt="" />
      </div>
    </MaxWidth>
  </TheTheatreStyles>
)

export default TheTheatre
