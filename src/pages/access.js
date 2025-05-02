import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from 'utils/Layout'
import { SmallerHeader } from 'components/Headers'
import styled from 'styled-components'
import MaxWidth from '../components/MaxWidth'
import { media } from '../utils/Media'

const header = {
  title: 'Access',
  description: 'Find more information about accessibility at the theatre',
  type: 'smaller',
}

const Wrapper = styled.section`
  background-color: var(--background);
  padding: 3rem 0;

  .lower {
    padding-bottom: 1rem;

    p {
      color: var(--white);
      margin-bottom: 1rem;
      @media ${media.md} {
        margin-bottom: 2rem;
      }
    }
  }
`

const AccessPage = ({ data }) => (
  <Layout title={header.title} description={header.description}>
    <SmallerHeader
      data={header}
      desktopImage={data.desktopImage.childImageSharp.gatsbyImageData}
      mobileImage={data.mobileImage.childImageSharp.gatsbyImageData}
    />
    <Wrapper>
      <MaxWidth>
        <div className="lower">
          <p>
            <strong>The Mousetrap</strong>
          </p>
          <p>Next captioned performance – Wednesday 5 March 2025 at 7.30pm.</p>
          <br />
          <p>
            <strong>The Smartest Giant in Town</strong>
          </p>
          <p>
            Relaxed performance - Friday 13 December 2024 at 11am.
            <br />
            BSL performance 3rd Jan 2025 at 1.30pm.
          </p>
          <p>
            Every performance of The Mousetrap is now audio described - if you
            would like to use this facility, please call +4420 7836 1443 or
            email&nbsp;
            <a
              href="mailto:access@stmartinstheatre.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              access@stmartinstheatre.co.uk
            </a>{' '}
            to reserve your head sets. The audio description is pre-recorded and
            has been produced by VocalEyes and includes introductory notes
            happening 10 minutes before the play starts.
          </p>
          <p>
            Patrons with specific access or seating requirements should book
            with the Box Office direct on +4420 7836 1443. Bookings for specific
            seats should be made early to avoid disappointment. Bookings and
            enquiries can also be taken by email at&nbsp;
            <a
              href="mailto:access@stmartinstheatre.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              access@stmartinstheatre.co.uk
            </a>
            .
          </p>
          <p>
            The St. Martin&rsquo;s Theatre is located in West Street. It is
            situated next to the Ambassadors Theatre and opposite the Ivy
            Restaurant. There are three shallow steps from the pavement to swing
            doors through to the foyer, where you will find the box office to
            your left and a souvenir kiosk to your right.
          </p>
          <p>
            There are five steps to the back of the dress circle auditorium,
            where there are two steps between rows. All staircases have
            handrails and are highlighted. Access to the Stalls and Upper Circle
            are not suitable for patrons with walking difficulties.
          </p>
          <p>
            Guide dogs and hearing dogs are permitted in the auditorium and
            staff can dog sit by prior arrangement. Dogs will be looked after in
            the manager&rsquo;s office. Please inform the box office at the time
            of booking.
          </p>
          <p>
            Wheelchair access is via a removable ramp through the main entrance
            &ndash; staff will be available to assist. There are two spaces for
            wheelchairs, one in Box C and one in the Dress Circle.
          </p>
          <p>
            It is possible to transfer from a wheelchair to an aisle seat in the
            Dress Circle.
          </p>
          <p>
            All of the bars are accessed via stairs. Drinks in plastic cups may
            be taken into the auditorium.
          </p>
          <p>
            There is an adapted toilet on the Dress Circle level. Access is via
            the entrance on Tower Court. Please ask a member of staff, who will
            be happy to assist with access to the adapted toilet facilities.
          </p>
        </div>
      </MaxWidth>
    </Wrapper>
  </Layout>
)

export default AccessPage

export const AccessQuery = graphql`
  query AccessQuery {
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
