import React, { Component } from "react";
import { connect } from "react-redux";
import SelectFilmsContainer from "./SelectFilmsContainer";
import MoviesContainer from "./MoviesContainer";
import * as actions from "../actions/characters";
import ErrorBoundary from "../components/HOC/ErrorBoundary";

class StarWars extends Component {
  componentDidMount() {
    this.props.loadCharacters();
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <SelectFilmsContainer />
        </ErrorBoundary>
        <MoviesContainer />
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
