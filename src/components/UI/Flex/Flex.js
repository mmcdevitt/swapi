import React from "react";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex: ${props => props.styles.flex};
  align-items: ${props => props.styles.alignItems};
  justify-content: ${props => props.styles.justifyContent};
  flex-wrap: ${props => props.styles.flexWrap};
  flex-direction: ${props => props.styles.flexDirection};
  height: ${props => props.styles.height};
`;

class Flex extends React.Component {
  render() {
    const {
      shortHand,
      vAlign,
      jContent,
      fWrap,
      direction,
      height
    } = this.props;

    const styles = {
      flex: shortHand,
      alignItems: vAlign,
      justifyContent: jContent,
      flexWrap: fWrap,
      flexDirection: direction,
      height
    };

    return (
      <FlexWrapper styles={styles} className="flex-wrapper">
        {this.props.children}
      </FlexWrapper>
    );
  }
}

export default Flex;
