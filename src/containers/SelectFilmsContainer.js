import React, { Component } from "react";
import { connect } from "react-redux";
import DropdownList from "../components/UI/DropdownList";

class SelectFilmsContainer extends Component {
  render() {
    const { characters } = this.props;

    return <DropdownList data={characters} />;
  }
}

function mapStateToProps(state) {
  const { collection } = state.characters;

  return {
    characters: collection
  };
}

export default connect(
  mapStateToProps,
  null
)(SelectFilmsContainer);
