import { createGlobalStyle } from 'styled-components'

const Cores = {
  branca: '#eeeeee',
  preta: '#111',
  cinza: '#333',
  verde: '#10ac84'
}
// reset da pagina
export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    boX-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${Cores.preta};
    color: ${Cores.branca};
  }
`
