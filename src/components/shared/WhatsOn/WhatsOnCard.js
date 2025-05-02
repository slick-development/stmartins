import React from 'react'
import styled from 'styled-components'

import GetImage from 'components/functional/getImage'
import { media } from 'utils/Media'
import { Link } from 'gatsby'

const WhatsOnCardStyles = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  @media ${media.md} {
    margin: 0;
  }

  .content {
    background: var(--white);
    padding: 1.5rem 1rem;

    h4 {
      font-family: var(--fontSecondary);
      font-weight: 200;
      font-size: 1.65rem;
      @media ${media.md} {
        font-size: 2rem;
      }
    }

    p {
      margin: 0.5rem 0 1rem 0;
      @media ${media.md} {
        margin-bottom: 3rem;
      }
    }

    @media ${media.md} {
      padding: 2.5rem 1.5rem;
    }
  }
`
const WhatsOnCard = ({ data }) => (
  <WhatsOnCardStyles>
    <div className="image">
      <GetImage
        data={data.image}
        alt={`${data.title} | St Martins's Theatre`}
      />
    </div>
    <div className="content">
      <h4>{data.title}</h4>
      <p>{data.text}</p>
      {data.inbound ? (
        <Link to={data.link}>
          <button className="btn btn-main" type="button">
            <span>{data.btnText}</span>
          </button>
        </Link>
      ) : (
        <a href={data.link} target="_blank" rel="noreferrer">
          <button className="btn btn-main" type="button">
            <span>{data.btnText}</span>
          </button>
        </a>
      )}
    </div>
  </WhatsOnCardStyles>
)

export default WhatsOnCard
