import React from "react";
import styled from "styled-components";
import Container from "../Container";
import Flex from "../Flex";

const Header = styled.header`
  background: #fff;
  padding: 10px;
  position: fixed;
  height: 70px;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  .logo {
    color: rgb(255, 37, 50);
    font-weight: 700;
  }
`;

const Navbar = props => {
  return (
    <Header>
      <Container>
        <Flex vAlign="center" jContent="space-between" height="inherit">
          <div className="logo">SWAPI</div>
          <div>Profile</div>
        </Flex>
      </Container>
    </Header>
  );
};

export default Navbar;
