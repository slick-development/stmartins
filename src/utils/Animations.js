import { css } from 'styled-components'
import { media } from 'utils/Media'

const Animations = css`
  @keyframes slide-in-blurred-bottom {
    0% {
      transform: translateY(100px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  //* scroll nav animation
  .nav-background-active {
    background: rgba(0, 0, 0, 0.85);
    padding: 0.5rem 0 !important;
    .gatsby-image-wrapper {
      width: 120px !important;
      @media ${media.md} {
        width: 150px !important;
      }
    }
  }
`

export default Animations
