import React, { Component } from "react";
import styled from "styled-components";
import UnorderedList from "../UnorderedList";
import Flex from "../Flex";
import Button from "../Button";
import SVGArrow from "../SVG/SVGArrow";

const DropdownListWrapper = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SpanMuted = styled.span`
  color: #bdbdbd;
`;

class DropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  handleChange = e => {
    this.toggle();
    this.props.handleChange(e);
  };

  render() {
    return (
      <DropdownListWrapper className="dropdown">
        <Button
          id="select-character-dropdown"
          size="block"
          onClick={this.toggle}
          open={this.state.visible}
        >
          <Flex jContent="space-between" vAlign="center">
            <SpanMuted>Select Character</SpanMuted> <SVGArrow />
          </Flex>
        </Button>
        <UnorderedList
          handleChange={this.handleChange}
          show={this.state.visible}
          data={this.props.data}
        />
      </DropdownListWrapper>
    );
  }
}

export default DropdownList;
