import { createGlobalStyle } from 'styled-components'

import { media } from 'utils/Media'
import Animations from './Animations'
import Typography from './Typography'
import Vars from './Vars'

const GlobalStyles = createGlobalStyle`
  ${Vars}
  ${Animations}
  ${Typography}
  *, *:after, *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    margin: 0;
    padding: 0;
  }

  body {
    font-size: ${props => props.theme.font.size.base};
    font-weight: normal;
    line-height: ${props => props.theme.font.lineHeight.base};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    margin: 0 auto;
    height: auto;
    background: var(--black);
    font-family: var(--body);
  }

  h1 {
    font-size: ${props => props.theme.font.h1.size};
    line-height: 100%;
    font-family: var(--fontMain);
    @media ${media.sm} {
      font-size: ${props => props.theme.font.h1.sm.size};
    }
    @media ${media.lg} {
      font-size: ${props => props.theme.font.h1.lg.size};
    }
  }

  h2 {
    font-size: ${props => props.theme.font.h2.size};
    line-height: 100%;
    @media ${media.sm} {
      font-size: ${props => props.theme.font.h2.sm.size};
    }
    @media ${media.md} {
      font-size: ${props => props.theme.font.h2.md.size};
    }

    @media ${media.xl} {
      font-size: ${props => props.theme.font.h2.xl.size};
    }
  }

  h3, .h3 {
    font-size: ${props => props.theme.font.h3.size};
    font-family: var(--fontSecondary);
    font-weight: 300;
    @media ${media.sm} {
      font-size: ${props => props.theme.font.h3.sm.size};
    }
    @media ${media.md} {
      font-size: ${props => props.theme.font.h3.md.size};
    }
    @media ${media.xl} {
      font-size: ${props => props.theme.font.h3.xl.size};
    }
  }

  h4 {
    font-size: ${props => props.theme.font.h4.size};
    @media ${media.sm} {
      font-size: ${props => props.theme.font.h4.sm.size};
    }
  }

  h5, h6, p, ul, ol {
    font-size: ${props => props.theme.font.p.size};
  }

  a, a:focus {
    color: inherit;
    text-decoration: none;
  }

  //? For screen readers 
  .sr-only {
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  ::selection {
    background: var(--black); /* WebKit/Blink Browsers */
    color: var(--main);
  }

  .qc-cmp2-persistent-link {
    background-color: var(--gold) !important;
  }

  .btn {
    width: 100%;
    padding: .85rem .5rem;
    border-radius: 0;
  }

  .btn-main {
    background-color: var(--gold);
    border: solid 2px var(--gold);
    cursor: pointer;
    transition: var(--transition);

    span {
      color: var(--white);
      text-transform: uppercase;
      font-weight: 700;
    }

    &:active, &:hover {
      background-color: transparent;

      span {
        color: var(--gold);
      }
    }
  }
  
  
  strong {
    font-family: var(--body);
    font-weight: bold;
  }
`
export default GlobalStyles
