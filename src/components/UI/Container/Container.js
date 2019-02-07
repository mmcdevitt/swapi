import React from "react";
import styled from "styled-components";
import cs from "classnames";

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

const Container = ({ className, ...props }) => {
  const classes = cs(className, "container");

  return (
    <ContainerWrapper className={classes} {...props}>
      {props.children}
    </ContainerWrapper>
  );
};

export default Container;
