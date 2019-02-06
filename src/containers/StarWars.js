import React, { Component } from "react";
import { connect } from "react-redux";
import SelectFilmsContainer from "./SelectFilmsContainer";
import * as actions from "../actions/characters";

class StarWars extends Component {
  componentDidMount() {
    this.props.loadCharacters();
  }

  render() {
    return (
      <div>
        <SelectFilmsContainer />
      </div>
    );
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
)(StarWars);
