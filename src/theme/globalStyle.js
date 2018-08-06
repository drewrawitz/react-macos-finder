import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'

export const theme = {
  bg: '#9dbedc',
  ['tag-red']: '#ff554f',
  ['tag-orange']: '#ffb428',
  ['tag-green']: '#25c438',
}

injectGlobal`
  ${styledNormalize}
  
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  :focus {
    outline: 0;
  }
  
  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  }
`