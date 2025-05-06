import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'utils/Layout'
import { FullHeightHeader } from 'components/Headers'
import { PlanYourVisit, TheTheatre, WhatsOn } from 'components/shared'

const header = {
  title: 'Homepage | St. Martin’s Theatre',
  description:
    'Welcome to the Heart of the West End – find out more about St. Martin’s Theatre.',
  type: 'smaller',
}

const IndexPage = ({ data }) => {
  const { whatsOn } = data
  return (
    <Layout title={header.title} description={header.description}>
      <FullHeightHeader />
      <WhatsOn data={whatsOn?.nodes} id="whats-on" />
      <PlanYourVisit />
    </Layout>
  )
}

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
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
  }
`
