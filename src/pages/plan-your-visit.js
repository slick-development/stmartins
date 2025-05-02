import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'utils/Layout'
import { SmallerHeader } from 'components/Headers'
import styled from 'styled-components'
import MaxWidth from '../components/MaxWidth'
import { media } from '../utils/Media'
import { PlanYourVisit } from '../components/shared'

const header = {
  title: 'Plan your visit',
  description:
    'Find out how to get to our venue: information on public transport, car parking, food & drink and more.',
  type: 'smaller',
}

const Wrapper = styled.section`
  background-color: var(--background);
  padding: 3rem 0;

  h3 {
    color: var(--white);
    margin: 1.5rem auto;
    @media ${media.md} {
      font-size: 2.25rem;
      margin: 3rem auto;
    }
  }

  button {
    max-width: 235px;
  }

  p {
    color: var(--white);
    margin-bottom: 1rem;
    @media ${media.md} {
      margin-bottom: 2rem;
    }

    strong {
      display: block;
      margin-bottom: 0.5rem;
    }
  }

  ul {
    padding-left: 2rem;
    color: var(--white);
  }

  .lower {
    padding-bottom: 1rem;
  }

  .grid {
    margin: 1rem 0;
    @media ${media.md} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 4rem;
    }
    @media ${media.xl} {
      grid-gap: 10rem;
    }
  }

  a {
    font-weight: bold;
    text-decoration: underline;
  }
`

const PlanYourVisitPage = ({ data }) => (
  <Layout title={header.title} description={header.description}>
    <SmallerHeader
      data={header}
      desktopImage={data.desktopImage.childImageSharp.gatsbyImageData}
      mobileImage={data.mobileImage.childImageSharp.gatsbyImageData}
    />
    <Wrapper>
      <MaxWidth>
        <PlanYourVisit $noTitle />
        <h3>IN THE AREA</h3>
        <div className="grid">
          <div>
            <p>
              <strong>Car Park</strong>
            </p>
            <p>
              Driving to London to see The Mousetrap? Take advantage of 50% off
              at select London Q-Park parking facilities when you visit a
              participating theatre*. Please select your desired car park below
              &amp; book your discounted 4 hour parking session.
            </p>
            <p>
              *Any over runs will be charged at our standard hourly rate. You
              must have a valid theatre ticket for the day of your visit which
              may be checked upon arrival and/or exit.
            </p>
            <p>
              Book you parking ticket in advance{' '}
              <a
                href="https://www.q-park.co.uk/en-gb/cities/london/society-of-london-theatre/"
                target="_blank"
                rel="noreferrer noopener"
              >
                here
              </a>
              .
            </p>
            <p style={{ paddingTop: '2rem' }}>
              <a href="#" target="_blank" rel="noreferrer">
                <button className="btn btn-main" type="button">
                  <span>Find out more</span>
                </button>
              </a>
            </p>
          </div>
          <div>
            <p>
              <strong>Food & Drink</strong>
            </p>
            <p>
              There are many restaurants, pubs and bars within walking distance
              of the theatre. Seven Dials, Covent Garden and Leicester Square
              are all only a short walk away. Some of our favourites are:
            </p>
            <ul>
              <li>The Ivy (56 feet away)</li>
              <li>Dishoom Covent Garden (220 feet away)</li>
              <li>Hawksmoor Seven Dials (0.1 miles away)</li>
              <li>Thai Square Covent Garden (0.2 miles away)</li>
            </ul>
          </div>
        </div>
      </MaxWidth>
    </Wrapper>
  </Layout>
)

export default PlanYourVisitPage

export const PlanYourVisitQuery = graphql`
  query PlanYourVisitQuery {
    desktopImage: file(
      relativePath: { eq: "headers/plan-your-visit-1920x1080px.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mobileImage: file(
      relativePath: { eq: "headers/plan-your-visit-575px.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    image: file(relativePath: { eq: "our-theatre/our-theatre-asset.jpg" }) {
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
