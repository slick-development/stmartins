import {css} from 'styled-components'

import ModestoCondensedWOFF2 from 'utils/Fonts/modesto-condensed-light-webfont.woff2'
import ModestoCondensedWOFF from 'utils/Fonts/modesto-condensed-light-webfont.woff'

import ModestoPosterWOFF2 from 'utils/Fonts/modesto-poster-regular-webfont.woff2'
import ModestoPosterWOFF from 'utils/Fonts/modesto-poster-regular-webfont.woff'

import OpenSansVariableWeight from 'utils/Fonts/OpenSansVarWeight.woff2'

const Typography = css`
  @font-face {
    font-family: 'ModestoCondensed';
    src: url(${ModestoCondensedWOFF2}) format('woff2'),
    url(${ModestoCondensedWOFF}) format('woff');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'ModestoPoster';
    src: url(${ModestoPosterWOFF2}) format('woff2'),
    url(${ModestoPosterWOFF}) format('woff');
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSansVariableWeight}) format('woff2');
    font-style: normal;
    font-weight: 125 950;
    font-display: swap;
  }
`

export default Typography
