import React, { Component } from "react";
import styled from "styled-components";

const UnorderedListWrapper = styled.ul`
  display: ${props => (props.show ? "block" : "none")};
`;

class UnorderedList extends Component {
  render() {
    const { show, data } = this.props;

    return (
      <UnorderedListWrapper show={show}>
        {data.map(item => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </UnorderedListWrapper>
    );
  }
}

export default UnorderedList;
