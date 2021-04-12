import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100%;
    font-size: 14px;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2, h3 {
    padding: 0;
    margin: 0;
    border: 0;
  }
  
  * { 
    box-sizing: border-box;
    outline: none;
  }
  
  *, ::before, ::after {
    box-sizing: border-box;
    outline: none;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
