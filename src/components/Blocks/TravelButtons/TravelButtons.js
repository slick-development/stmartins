import React from 'react'
import styled, { css } from 'styled-components'
import { media } from 'utils/Media'

const btns = [
  {
    name: 'TFL JOURNEY PLANNER',
    link: 'https://tfl.gov.uk/plan-a-journey/',
  },
  {
    name: 'NATIONAL RAIL ENQUIRIES',
    link: 'https://www.nationalrail.co.uk/',
  },
  {
    name: 'CITY MAPPER',
    link: 'https://citymapper.com/london?lang=en/',
  },
  {
    name: 'GOOGLE MAPS',
    link: 'https://www.google.com/maps/place/St.+Martins+Theatre/@51.5127589,-0.1277246,18.46z/data=!4m5!3m4!1s0x487604cd5e2ad9d9:0xc4c21bd15e2c5595!8m2!3d51.512841!4d-0.1276193',
  },
]

const TravelButtonsStyles = styled.section`
  ${props =>
    props.$mobile &&
    css`
      margin: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      @media ${media.md} {
        display: none;
      }
    `}
  ${props =>
    props.$desktop &&
    css`
      display: none;
      @media ${media.md} {
        display: grid;
        margin-top: 1rem;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5rem;
      }
      @media ${media.lg} {
        margin-top: 3.5rem;
        grid-gap: 1.5rem;
      }
    `}
`

const TravelButtons = props => (
  <TravelButtonsStyles {...props}>
    {btns.map((btn, i) => (
      <a href={btn.link} target="_blank" rel="noreferrer" key={i}>
        <button className="btn btn-main" type="button">
          <span>{btn.name}</span>
        </button>
      </a>
    ))}
  </TravelButtonsStyles>
)

export default TravelButtons
