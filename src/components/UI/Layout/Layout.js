import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";

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
