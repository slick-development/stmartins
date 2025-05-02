import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import ArrowIcon from 'svgs/down.svg'
import { media } from 'utils/Media'

const SingleFaqStyles = styled.section`
  width: 100%;
  border-top: solid 1px #fff;
  cursor: pointer;
  .question {
    background: var(--background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    position: relative;
    z-index: 99;
    > p {
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 0;
      @media ${media.lg} {
        font-size: 1.2rem;
      }
    }
    svg {
      width: 15px;
      height: 15px;
      fill: var(--white);
      transform: rotate(0);
    }
  }
  .answer {
    visibility: hidden;
    /* max-height: 0; */
    height: 0;
    div {
      position: relative;
      /* z-index: -99; */
      padding: 1rem 0;
      p {
        color: white;
      }
      strong {
        color: var(--white);
      }
      @media ${media.lg} {
        p,
        strong {
          font-size: 1.1rem;
        }
      }
    }
  }
  &:last-child {
    .question {
      border-bottom: solid 1px #fff;
    }
  }
`
const SingleFaq = props => {
  const { id, data, active, toggleActive, open } = props
  const faqRef = useRef()
  const q = gsap.utils.selector(faqRef)
  const fowardsTL = useRef()
  const tl = useRef()

  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q('.answer'), {
        visibility: 'visible',
        height: 'auto',
      })
      .to(
        q('.svg'),
        {
          rotation: 180,
        },
        '<'
      )
  }, [])
  useEffect(() => {
    if (open === id) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [open])
  return (
    <SingleFaqStyles id={id} onClick={() => toggleActive(id)} ref={faqRef}>
      <div className="question">
        <p>{data.question}</p>
        <span>
          <ArrowIcon className="svg" />
        </span>
      </div>
      <div className="answer">
        <div dangerouslySetInnerHTML={{ __html: data.answer }} />
      </div>
    </SingleFaqStyles>
  )
}

export default SingleFaq
