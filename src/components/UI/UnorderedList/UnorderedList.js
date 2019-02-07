import React, { Component } from "react";
import styled from "styled-components";
import { kebabCase } from "lodash";
import ListItem from "./ListItem";

const UnorderedListWrapper = styled.ul`
  display: ${props => (props.show ? "block" : "none")};
  position: absolute;
  width: 100%;
  list-style: none;
  li .btn:hover {
    background: #199ee9;
    color: #fff;
  }

  li {
    border-top: 1px solid #eaeaea;
  }

  li:last-child .btn {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
`;

class UnorderedList extends Component {
  renderList() {
    const { data } = this.props;

    return data.map(item => {
      return (
        <ListItem key={item.name} className="character-list-item">
          <label className="btn btn-default btn-block no-radius left">
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
      <UnorderedListWrapper show={show} className="character-list">
        {this.renderList()}
      </UnorderedListWrapper>
    );
  }
}

export default UnorderedList;
