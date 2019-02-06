import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Navbar from "../Navbar";

const LayoutWrapper = styled.div`
  .content {
    padding-top: 70px;
  }
`;

const Layout = props => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <Navbar />
      <div className="content">{props.children}</div>
      <footer>footer</footer>
    </LayoutWrapper>
  );
};

export default Layout;
