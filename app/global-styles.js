import { injectGlobal } from 'styled-components'
import StellarMedium from 'fonts/Stellar-Medium.otf'

/* eslint no-unused-expressions: 0 */
injectGlobal`

@font-face {
  font-family: StellarMedium;
  src: url(${StellarMedium}) format("opentype");
}

  @import url('https://fonts.googleapis.com/css?family=VT323');
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
  html,
  body {
    height: 100vh;
    width: 100vw;
  }



  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .bold {
    font-weight: bold;
  }

  .small-caps {
    font-variant: small-caps;
  }

  .slider__tick {
    height: 10px;
  }
`
