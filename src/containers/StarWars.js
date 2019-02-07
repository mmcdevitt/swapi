import React, { Component } from "react";
import { connect } from "react-redux";
import SelectFilmsContainer from "./SelectFilmsContainer";
import MoviesContainer from "./MoviesContainer";
import * as actions from "../actions/characters";
import ErrorBoundary from "../components/HOC/ErrorBoundary";
import Layout from "../components/UI/Layout";
import SelectedCharacter from "../components/SelectedCharacter";

class StarWars extends Component {
  componentDidMount() {
    this.props.loadCharacters();
  }

  render() {
    return (
      <Layout>
        <SelectedCharacter>
          <ErrorBoundary>
            <SelectFilmsContainer />
          </ErrorBoundary>
        </SelectedCharacter>
        <MoviesContainer />
      </Layout>
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
