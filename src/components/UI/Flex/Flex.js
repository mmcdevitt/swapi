import React from "react";
import styled from "styled-components";
import cs from "classnames";

const FlexWrapper = styled.div`
  display: flex;
  flex: ${props => props.styles.flex};
  align-items: ${props => props.styles.alignItems};
  justify-content: ${props => props.styles.justifyContent};
  flex-wrap: ${props => props.styles.flexWrap};
  flex-direction: ${props => props.styles.flexDirection};
  height: ${props => props.styles.height};

  @media (max-width: 660px) {
    justify-content: ${props => props.styles.media && props.styles.media};
  }
`;

class Flex extends React.Component {
  render() {
    const {
      shortHand,
      vAlign,
      jContent,
      fWrap,
      direction,
      height,
      className,
      media
    } = this.props;

    const styles = {
      flex: shortHand,
      alignItems: vAlign,
      justifyContent: jContent,
      flexWrap: fWrap,
      flexDirection: direction,
      height,
      media
    };

    const classes = cs(className, "flex-wrapper");

    return (
      <FlexWrapper styles={styles} className={classes}>
        {this.props.children}
      </FlexWrapper>
    );
  }
}

export default Flex;
