import React from 'react'
import {graphql} from 'gatsby'

import {Layout} from 'utils/Layout'
import {SmallerHeader} from 'components/Headers'
import styled from 'styled-components'
import {FaqWrapper} from 'components/FaqPage'
import MaxWidth from '../components/MaxWidth'
import GetImage from '../components/functional/getImage'
import {media} from '../utils/Media'

const header = {
    title: 'FAQS',
    description: 'Got a question? Visit our Frequently Asked Questions page here',
    type: 'smaller',
}

const Wrapper = styled.section`
  background-color: var(--background);
  padding: 3rem 0;
  
  a {
    color: var(--gold);
  }

  .lower {
    padding-bottom: 1rem;

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
  }
`

const FAQPage = ({data}) => {
    const {faqs} = data
    return (
        <Layout title={header.title} description={header.description}>
            <SmallerHeader
                data={header}
                desktopImage={data.desktopImage.childImageSharp.gatsbyImageData}
                mobileImage={data.mobileImage.childImageSharp.gatsbyImageData}
            />
            <Wrapper>
                <MaxWidth>
                    <FaqWrapper data={faqs.nodes}/>
                </MaxWidth>
            </Wrapper>
        </Layout>
    )
}

export default FAQPage

export const FAQQuery = graphql`
  query FAQQuery {
    faqs: allFaqsJson {
      nodes {
        category
        questions {
          question
          answer
        }
      }
    }
    desktopImage: file(relativePath: { eq: "headers/access-1920x1080px.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mobileImage: file(relativePath: { eq: "headers/access-575px.jpg" }) {
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
