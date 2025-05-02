import MaxWidth from 'components/MaxWidth'
import React from 'react'
import styled from 'styled-components'

import { media } from 'utils/Media'
import WhatsOnCard from './WhatsOnCard'

const WhatsOnStyles = styled.section`
  width: 100%;
  height: 100%;
  background: var(--background);
  padding: 3rem 0;
  position: relative;
  .anchor {
    position: absolute;
    top: -2rem;
  }
  h2 {
    color: var(--gold);
    font-family: var(--fontMain);
    text-transform: uppercase;
  }
  .wrapper {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media ${media.sm} {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  @media ${media.md} {
    padding: 5rem 0;
  }
`
const WhatsOn = ({ data, id }) => (
  <WhatsOnStyles>
    <span id={id} className="anchor" />
    <MaxWidth>
      <h2>What's on</h2>
      <div className="wrapper">
        {data.map((item, i) => (
          <WhatsOnCard data={item} key={i} />
        ))}
      </div>
    </MaxWidth>
  </WhatsOnStyles>
)

export default WhatsOn
