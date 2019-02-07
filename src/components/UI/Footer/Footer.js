import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 30px;
  background: #333;
  text-align: center;
  color: #fff;
`;

const Footer = props => {
  return (
    <FooterWrapper className="footer">
      Created by Michael McDevitt
    </FooterWrapper>
  );
};

export default Footer;
