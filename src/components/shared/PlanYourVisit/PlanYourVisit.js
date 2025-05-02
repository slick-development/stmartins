import React from 'react'
import styled from 'styled-components'
import {StaticImage} from 'gatsby-plugin-image'

import {TravelButtons} from 'components/Blocks'

import {media} from 'utils/Media'
import MaxWidth from 'components/MaxWidth'

const PlanYourVisitStyles = styled.section`
  width: 100%;
  background: var(--background);
  padding: 2rem 0;

  h3 {
    color: var(--gold);
    text-transform: uppercase;
  }

  .wrapper {
    &__text {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin: 1rem 0;

      .box {
        color: var(--white);

        h5 {
          font-family: var(--fontSecondary);
          font-weight: 400;
          margin-bottom: 1rem;
          font-size: 1.7rem;
          @media ${media.md} {
            font-size: 2rem;
          }
        }

        p {
          margin-bottom: 0.35rem;
        }
      }
    }

    @media ${media.md} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 2rem;
      &__text {
        margin-top: 0;
      }
    }
    @media ${media.lg} {
      display: grid;
      grid-template-columns: 45% 1fr;
      gap: 2rem;
      margin-top: 2rem;
      &__text {
        margin-top: 0;
      }
    }
  }

  @media ${media.md} {
    padding: 5rem 0;
  }

  .desktop {
    display: none;
    @media ${media.md} {
      display: block;
    }
  }

  .mobile {
    display: block;
    @media ${media.md} {
      display: none;
    }
  }
`
const PlanYourVisit = (props) => (
    <PlanYourVisitStyles>
        <MaxWidth>
            {!props.$noTitle && <h3>PLAN YOUR VISIT</h3>}
            <div className="wrapper">
                <section className="wrapper__text">
                    <div className="box">
                        <h5>St. Martin’s Theatre</h5>
                        <p>West Street, London WC2H 9NZ</p>
                    </div>
                    <div className="box">
                        <h5>Public Transport</h5>
                        <p>
                            <strong>Tube: </strong>Leicester Square
                        </p>
                        <p>
                            <strong>National Rail: </strong>Charing Cross
                        </p>
                        <p>
                            <strong>Bus: </strong>Charing Cross Rd, serviced by the following
                            buses: <br/> 14, 19, 22, 24, 29, 38, 40, 176
                        </p>
                    </div>
                    <TravelButtons $desktop/>
                </section>
                <div className="map">
                    <StaticImage className="mobile" src="../../../images/map-mobile.jpg" alt=""/>
                    <StaticImage className="desktop" src="../../../images/map.jpg" alt=""/>
                </div>
                <TravelButtons $mobile/>
            </div>
        </MaxWidth>
    </PlanYourVisitStyles>
)

export default PlanYourVisit
