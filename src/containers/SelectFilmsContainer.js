import React, { Component } from "react";
import { connect } from "react-redux";
import DropdownList from "../components/UI/DropdownList";
import * as actions from "../actions/character";

class SelectFilmsContainer extends Component {
  handleChange = async e => {
    const { characters } = this.props;

    const character = characters.find(character => {
      return character.name === e.target.value;
    });

    this.props.selectCharacter(character);
  };

  render() {
    const { characters } = this.props;

    return <DropdownList data={characters} handleChange={this.handleChange} />;
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
  actions
)(SelectFilmsContainer);
