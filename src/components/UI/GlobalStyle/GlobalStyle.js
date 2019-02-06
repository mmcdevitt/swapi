import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0; 
    margin: 0;
    font-size: 1.4rem;
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
