import React, { Component } from "react";
import styled from "styled-components";
import UnorderedList from "../UnorderedList";

class DropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  toggle = () => {
    this.setState({
      showDropdown: !this.state.showDropdown
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Select Character</button>
        <UnorderedList show={this.state.showDropdown} data={this.props.data} />
      </div>
    );
  }
}

export default DropdownList;
