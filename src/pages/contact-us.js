import React from 'react'
import {graphql} from 'gatsby'

import {Layout} from 'utils/Layout'
import {SmallerHeader} from 'components/Headers'
import MaxWidth from "../components/MaxWidth";
import GetImage from "../components/functional/getImage";
import styled from "styled-components";
import {media} from "../utils/Media";

const header = {
    "title": "Contact Us",
    "description": "Contact us in person, Box Office opening hours, press enquiries",
    "type": "smaller"
}

const Wrapper = styled.section`
  background-color: var(--background);
  padding: 3rem 0;

  h3 {
    font-family: var(--fontSecondary);
    color: var(--white);
    font-weight: 400;
    @media ${media.md} {
      width: 50%;
      margin-bottom: 2rem;
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
      grid-gap: 10rem;
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
      max-width: 200px;
      padding-top: 1rem;
    }

    @media ${media.md} {
      margin-top: 2rem;
    }
  }
`

const ContactPage = ({data}) => {
    return (
        <Layout
            title={header.title}
            description={header.description}
        >
            <SmallerHeader
                data={header}
                desktopImage={data.desktopImage.childImageSharp.gatsbyImageData}
                mobileImage={data.mobileImage.childImageSharp.gatsbyImageData}
            />
            <Wrapper>
                <MaxWidth>
                    <div className="wrapper">
                        <div className="copy">
                            <p><strong>In Person</strong><br/>
                                From 10am to 8pm Monday to Sunday, St. Martin’s Theatre, West St, London WC2H 9NZ</p>

                            <p><strong>Phone (Box Office)</strong><br/>
                            <strong><a href="tel:02078361443">020 7836 1443</a></strong></p>

                            <p><strong>Stage Door</strong><br/>
                                Phone: <strong><a href="tel:02078361086">020 7836 1086</a></strong><br/>
                                If your enquiry relates to a ticket purchase, please contact the Box Office directly on <strong><a href="tel:02078361443">020 7836 1443</a></strong>.</p>

                            <p>For general enquiries please direct correspondence to <strong><a href="mailto:enquiries@stmartinstheatre.co.uk">enquiries@stmartinstheatre.co.uk</a></strong>. All emails are read and responded to as soon as possible. However, if your enquiry is urgent, please contact the Box Office directly on <strong><a href="tel:02078361443">020 7836 1443</a></strong>.</p>

                            <p>Job applications should be submitted in writing to the Theatre Manager.</p>

                            <p><strong>For Press Enquiries, please contact <a href="mailto:Alex@buchananpr.co.uk">Alex@buchananpr.co.uk</a> and <a href="mailto:Nirvana@buchananpr.co.uk">Nirvana@buchananpr.co.uk</a></strong></p>
                        </div>
                        <div className="info">
                            <GetImage data={data.image.childImageSharp.gatsbyImageData} alt=""/>
                        </div>
                    </div>
                </MaxWidth>
            </Wrapper>
        </Layout>
    )
}

export default ContactPage

export const ContactQuery = graphql`
  query ContactQuery {
    desktopImage: file(relativePath: { eq: "headers/contact-us-1920x1080px.jpg" }) {
        childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
        }
    }
    mobileImage: file(relativePath: { eq: "headers/contact-us-575px.jpg" }) {
        childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
        }
    }
    image: file(relativePath: { eq: "contact-us/contact-us-asset.jpg" }) {
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
