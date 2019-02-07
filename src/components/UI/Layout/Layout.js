import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MainContent = styled.div`
  padding-top: 70px;
`;

const Layout = props => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      <MainContent className="content">{props.children}</MainContent>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
