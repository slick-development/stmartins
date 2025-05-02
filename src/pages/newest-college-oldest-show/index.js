import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

import { Layout } from 'utils/Layout'
import { SmallerHeader } from 'components/Headers'
import styled from 'styled-components'
import MaxWidth from '../../components/MaxWidth'
import GetImage from '../../components/functional/getImage'
import { media } from '../../utils/Media'

const header = {
  title: 'Newest College, Oldest Show',
  description:
    'Based on the best-selling book by Julia Donaldson and Axel Scheffler - book now',
  review: '‘****A joy’',
  reviewer: 'Evening Standard',
  dates: ' Tickets are available now for Newest College, Oldest Show',
  btnText: 'Book Tickets',
  links: '/newest-college-oldest-show/tickets/',
}

const Wrapper = styled.section`
  background-color: var(--background);
  padding: 3rem 0;
  .title-wrapper {
    margin-bottom: 4rem;
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
    .btn-wrap {
      margin-top: 0rem;
      button {
        width: 250px;
      }
      @media ${media.md} {
        flex-basis: 300px;
      }
    }
    @media ${media.md} {
      margin-bottom: 6rem;
      display: flex;
      align-items: flex-start;
      gap: 3rem;
      /* justify-content: space-between; */
      @media ${media.xl} {
        gap: 6rem;
      }
    }
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
  }

  .wrapper {
    margin: 1rem 0;
    @media ${media.md} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem;
    }
    @media ${media.xl} {
      grid-gap: 5rem;
    }

    .copy {
      p {
        color: var(--white);
        margin-bottom: 1rem;
        @media ${media.md} {
          margin-bottom: 2rem;
        }
      }
    }

    .info {
      div {
        &:nth-child(2n) {
          p {
            margin-bottom: 1.5rem;
            @media ${media.md} {
              margin-bottom: 2.5rem;
            }
          }
        }
      }

      p {
        color: var(--white);
        @media ${media.md} {
          margin-bottom: 0.5rem;
        }
      }
    }
  }

  .lower {
    p {
      strong {
        display: block;
        margin-bottom: 0.5rem;
      }

      br {
        display: none;
      }

      color: var(--white);
      margin-bottom: 1rem;
      @media ${media.md} {
        margin-bottom: 2rem;
      }
    }

    .logo {
      /* max-width: 200px; */
      padding-top: 1rem;
      display: flex;
      align-items: center;

      div {
        flex-basis: 150px;
        margin-right: 10px;
      }
    }

    @media ${media.md} {
      margin-top: 2rem;
    }
  }
`

const StyledHeader = styled.section`
  width: 100%;
  position: relative;
  .mobile {
    @media ${media.md} {
      display: none;
    }
  }
  .desktop {
    display: none;
    @media ${media.md} {
      display: block;
    }
  }
  .title {
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
  .title {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0%;
    left: 0;
    div {
      width: 95%;
      max-width: var(--maxWidth);
      margin: var(--auto);
      padding: 0 15px;
    }
  }
`

const SGITPage = ({ data }) => (
  <Layout title={header.title} description={header.description}>
    {/* <SmallerHeader
      data={header}
      desktopImage={data.desktopImage.childImageSharp.gatsbyImageData}
      mobileImage={data.mobileImage.childImageSharp.gatsbyImageData}
    /> */}
    <StyledHeader>
      <div>
        <div className="mobile">
          <GatsbyImage
            image={data.mobileImage.childImageSharp.gatsbyImageData}
            alt=""
            title=""
            className="img-fluid"
          />
        </div>
        <div className="desktop">
          <GatsbyImage
            image={data.desktopImage.childImageSharp.gatsbyImageData}
            alt=""
            title=""
            className="img-fluid"
          />
        </div>
      </div>
      {/* <div className="title">
        <div>
          <h1>{header.title}</h1>
          
          <p className="dates">{header.dates}</p>
          <Link to={header.links}>
            <button type="button" className="btn btn-main">
              <span>{header.btnText}</span>
            </button>
          </Link>
        </div>
      </div> */}
    </StyledHeader>
    <Wrapper>
      <MaxWidth>
        <div className="title-wrapper">
          <div>
            <h1>{header.title}</h1>
            {/* <p className="review">
              {header.review}
              <span>{header.reviewer}</span>
            </p> */}
            <p className="dates">{header.dates}</p>
          </div>
          <div className="btn-wrap">
            <Link to={header.links}>
              <button type="button" className="btn btn-main">
                <span>{header.btnText}</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="wrapper">
          <div className="copy">
            <p>
              <strong>
                The newest performing arts college in the country, based in
                Blackpool, will perform an hour-long concert with all proceeds
                going to the Feathers Association charity.&nbsp;
              </strong>
            </p>
            <p>
              Students from this specialised Sixth Form college will intrigue
              with insights regarding Agatha Christie&rsquo;s fascinating and
              wonderful life whilst showing off their stunning vocals,
              performing songs from across musical theatre, moving the story of
              this literary heroine along. The performance will form part of
              each student&rsquo;s educational qualification.
            </p>
            <p>
              Come and support this elegant charity concert where talented young
              performers will be helping less privileged youth.
            </p>
            <p>
              The newest college on the stage of the oldest show, and it
              won&rsquo;t disappoint!&nbsp;
            </p>
            <p>
              For more information on the Feathers Associate please visit&nbsp;
              <a
                href="https://feathers.charity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://feathers.charity/
              </a>
            </p>
          </div>
          <div className="info">
            <p>
              <strong>Tickets:</strong> £20
            </p>
            <p>
              <strong>Running Time:</strong> 60 minutes
            </p>
            <p>
              <strong>Office:</strong> 020 7836 1443
            </p>
          </div>
        </div>
        {/* <div className="lower">
          <p>
            <strong>Babies in Arms</strong> <br />
            Babes in arms are allowed for this production, babes under 12 months
            sitting on an adults lap do not need a ticket. All other patrons do
            need a ticket for entry.
          </p>
          <p>
            <strong>Prams &amp; Buggies</strong> <br />
            These can be left from 40 minutes before the show in our cloakroom –
            they must be able to collapse and should be before handing to our
            team. Space is limited.
          </p>
          <div className="logo">
            <div>
              <GetImage
                data={data.logo.childImageSharp.gatsbyImageData}
                alt=""
              />
            </div>
            <div>
              <GetImage
                data={data.logo2.childImageSharp.gatsbyImageData}
                alt=""
              />
            </div>
          </div>
        </div> */}
      </MaxWidth>
    </Wrapper>
  </Layout>
)

export default SGITPage

export const NewQuery = graphql`
  query NewQuery {
    whatsOn: allWhatsOnJson {
      nodes {
        title
        text
        link
        inbound
        btnText
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    desktopImage: file(relativePath: { eq: "blackpool-poster.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mobileImage: file(relativePath: { eq: "blackpool-poster.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    logo: file(relativePath: { eq: "whatsOn/Fierylight_Logo.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    logo2: file(relativePath: { eq: "whatsOn/LAT_Full_White@4x.png" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
