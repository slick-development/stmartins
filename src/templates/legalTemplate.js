import React from 'react'
import styled from 'styled-components'
import { media } from 'utils/Media'
import { graphql } from 'gatsby'
import { Layout } from 'utils/Layout'
import MaxWidth from 'components/MaxWidth'
import { SmallerHeader } from 'components/Headers'

const LegalTemplateStyles = styled.div`
  width: 100%;
  background-color: var(--white);
  section {
    width: 90%;
    margin: var(--auto);
    padding: 2.5rem 0;
    max-width: 900px;
    h1 {
      text-align: center;
      font-size: 2.5rem;
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      @media ${media.md} {
        margin: 1rem 0;
      }
    }
    p,
    strong,
    ul,
    li {
      margin-bottom: 0.5rem;
      @media ${media.md} {
        margin-bottom: 0.75rem;
      }
    }
    strong {
      font-weight: 600;
    }
    a {
      word-wrap: break-word;
    }
    li,
    p {
      font-size: 1rem !important;
    }
    a,
    p a {
      color: var(--main);
      font-weight: 600;
      text-decoration: underline 2px !important;
    }
    ul {
      padding-left: 20px;
    }
    td {
      strong {
        /* font-size: 1.2rem; */
      }
    }
  }
`

const LegalTemplate = ({ data }) => {
  const content = data.page
  return (
    <Layout>
      <SmallerHeader title={content.title} $smaller />
      <LegalTemplateStyles>
        <MaxWidth>
          <section>
            <div dangerouslySetInnerHTML={{ __html: content.body }} />
          </section>
        </MaxWidth>
      </LegalTemplateStyles>
    </Layout>
  )
}

export default LegalTemplate

export const LegalPageQuery = graphql`
  query LegalPageQuery($slug: String!) {
    page: legalPagesJson(slug: { eq: $slug }) {
      slug
      title
      short
      body
    }
  }
`
