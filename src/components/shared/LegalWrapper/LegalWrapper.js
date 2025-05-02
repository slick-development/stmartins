import React from 'react'
import styled from 'styled-components'

import { media } from 'utils/Media'
import MaxWidth from 'components/MaxWidth'

const LegalWrapperStyles = styled.section`
  width: 100%;
  padding: 3rem 0;
  margin: var(--auto);
  overflow-y: hidden;
  background: var(--white);

  h1 {
    font-size: 2rem;
    @media ${media.md} {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    @media ${media.xl} {
      margin-bottom: 3rem;
    }
  }
  h2,
  h3 {
    color: var(--gold);
    margin-top: 1.5rem;
    font-size: 1.65rem;
  }
  h3 {
    font-size: 1.35rem;
  }
  li {
    word-wrap: break-word;
    @media ${media.xl} {
      font-size: 18px !important;
    }
  }
  p {
    margin: 1rem 0;
    font-weight: 500 !important;
    a {
      color: var(--gold);
      transition: var(--transition);
      &:hover {
        text-decoration: underline;
      }
    }
  }
  ul,
  ol {
    margin-left: 19px;
    display: block;
    li {
      margin: 0.5rem 0;
      font-size: 1rem;
      font-weight: 400;
      word-wrap: break-word;
      a {
        transition: var(--transition);
        color: var(--gold);
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  ol {
    counter-reset: item;
    list-style: none;
    li:before {
      content: counters(item, '.') ' : ';
      counter-increment: item;
    }
  }
  table {
    width: 100%;
    border: solid white 1px;
    tr {
      border-bottom: solid 1px white;
      > p {
        text-align: center;
      }
    }
    td {
      border-right: solid white 1px;
      padding: 10px;
    }
  }
`
const LegalWrapper = ({ title, children }) => {
  const i = true
  return (
    <LegalWrapperStyles>
      <MaxWidth>{children}</MaxWidth>
    </LegalWrapperStyles>
  )
}

export default LegalWrapper
