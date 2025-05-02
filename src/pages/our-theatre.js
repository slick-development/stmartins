import React from 'react'
import {graphql} from 'gatsby'

import {Layout} from 'utils/Layout'
import {SmallerHeader} from 'components/Headers'
import MaxWidth from "../components/MaxWidth";
import GetImage from "../components/functional/getImage";
import styled from "styled-components";
import {media} from "../utils/Media";

const header = {
    "title": "Our Theatre",
    "description": "St. Martins Theatre is in the heart of London’s West End. It has staged the Mousetrap, the longest continuous running show in the world, since March 1974.",
    "type": "smaller"
}

const Wrapper = styled.section`
  background-color: var(--background);
  padding: 3rem 0;

  h3 {
    color: var(--white);
    margin: 1.5rem auto;
    @media ${media.md} {
      margin: 3rem auto;
    }
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

const OurTheatrePage = ({data}) => {
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
                    <div className="lower">
                        <p>Located in the heart of London’s West End and theatre district, St.Martin’s Theatre has a
                            capacity of 552 over three auditorium levels – Stalls (265), Dress Circle (123) and Upper
                            Circle (153) – and four boxes (11). The theatre has three bars and is fully air-conditioned.
                            For venue hire enquiries, visit the Contact Us page.</p>
                    </div>
                    <div className="logo">
                        <GetImage data={data.image.childImageSharp.gatsbyImageData} alt=""/>
                    </div>
                    <div className="lower">
                        <h3>History</h3>
                        <p>The St. Martin’s Theatre was designed by W. G. R. Sprague as one of a pair of theatres, along
                            with the Ambassadors Theatre, also in West Street. Richard Verney, 19th Baron Willoughby de
                            Broke, together with B. A. (Bertie) Meyer, commissioned Sprague to design the theatre
                            buildings. Although the Ambassadors opened in 1913, construction of the St. Martin’s was
                            delayed by the outbreak of the First World War. The theatre is still owned by the present
                            Lord Willoughby de Broke and his family.</p>

                        <p>The first production at the St. Martin’s was the spectacular Edwardian musical comedy Houp
                            La!, starring Gertie Millar, which opened on 23 November 1916. The producer was the
                            impresario Charles B. Cochran, who took a 21-year lease on the new theatre.</p>

                        <p>Many famous British actors have passed through the St. Martin's. In April 1923 Basil Rathbone
                            played Harry Domain in R.U.R. and in June 1927 Henry Daniell appeared there as Gregory Brown
                            in Meet the Wife. Successes at the theatre included Hugh Williams's play (later a film) The
                            Grass is Greener, John Mortimer's The Wrong Side of the Park, and in 1970, the thriller
                            Sleuth.</p>

                        <p>After Cochran, Bertie Meyer ran the theatre intermittently until 1967, when his son R. A.
                            (Ricky) Meyer became administrator for the next two decades. The St. Martin's was Grade II
                            listed by English Heritage in March 1973.</p>

                    </div>
                </MaxWidth>
            </Wrapper>
        </Layout>
    )
}

export default OurTheatrePage

export const OurTheatreQuery = graphql`
  query OurTheatreQuery {
    desktopImage: file(relativePath: { eq: "headers/our-theatre-1920x1080px.jpg" }) {
        childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
        }
    }
    mobileImage: file(relativePath: { eq: "headers/our-theatre-575px.jpg" }) {
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
