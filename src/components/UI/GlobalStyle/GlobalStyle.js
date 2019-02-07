import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0; 
    margin: 0;
    outline: none;
  }

  html {
    box-sizing: border-box;
    font-size: 14px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Montserrat", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Abel", sans-serif;
    text-transform: uppercase;
  }

  h1 {
    font-size: 40px;
    font-weight: 400;
  }
`;

export default GlobalStyle;
