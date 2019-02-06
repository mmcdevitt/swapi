import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: inherit;

  @media (min-width: 576px) {
    width: 540px;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 992px) {
    width: 960px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

const Container = props => {
  return (
    <ContainerWrapper className="container">{props.children}</ContainerWrapper>
  );
};

export default Container;
