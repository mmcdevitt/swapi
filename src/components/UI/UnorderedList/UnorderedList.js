import React, { Component } from "react";
import styled from "styled-components";
import ListItem from "./ListItem";

const UnorderedListWrapper = styled.ul`
  display: ${props => (props.show ? "block" : "none")};
`;

class UnorderedList extends Component {
  renderList() {
    const { data } = this.props;

    return data.map(item => {
      return <ListItem key={item.name}>{item.name}</ListItem>;
    });
  }

  render() {
    const { show } = this.props;

    return (
      <UnorderedListWrapper show={show}>
        {this.renderList()}
      </UnorderedListWrapper>
    );
  }
}

export default UnorderedList;
