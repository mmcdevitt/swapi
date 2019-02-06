import React from "react";
import styled from "styled-components";
import Container from "../Container";

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
        <div className="logo">SWAPI</div>
      </Container>
    </Header>
  );
};

export default Navbar;