import React from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Flex from "../Flex";

const MainContent = styled.div`
  padding-top: 70px;
`;

const Layout = props => {
  return (
    <Flex direction="column" height="inherit">
      <GlobalStyle />
      <Navbar />
      <MainContent className="content">{props.children}</MainContent>
      <Footer />
    </Flex>
  );
};

export default Layout;
