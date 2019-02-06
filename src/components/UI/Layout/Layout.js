import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

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
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
  }
`;

const LayoutWrapper = styled.div`
  .content {
    padding-top: 70px;
  }
`;

const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <header>navbar</header>
      <div className="content">{props.children}</div>
      <footer>footer</footer>
    </LayoutWrapper>
  );
};

export default Layout;
