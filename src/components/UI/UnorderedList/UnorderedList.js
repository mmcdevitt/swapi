import React, { Component } from "react";
import styled from "styled-components";
import { kebabCase } from "lodash";
import ListItem from "./ListItem";

const UnorderedListWrapper = styled.ul`
  display: ${props => (props.show ? "block" : "none")};
`;

class UnorderedList extends Component {
  renderList() {
    const { data } = this.props;

    return data.map(item => {
      return (
        <ListItem key={item.name}>
          <label>
            <input
              type="radio"
              onChange={e => this.props.handleChange(e)}
              value={item.name}
              name="character-name"
              id={`${kebabCase(item.name)}-radio`}
            />
            {item.name}
          </label>
        </ListItem>
      );
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
