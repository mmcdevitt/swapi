import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loading from "../components/UI/Loading";
import MovieList from "../components/MovieList";

const FilmsWrapper = styled.div`
  padding: 45px 0;
`;

class MoviesContainer extends Component {
  render() {
    const { loading, films } = this.props;

    return (
      <FilmsWrapper className="movie-container">
        {loading ? <Loading /> : <MovieList films={films} />}
      </FilmsWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { films, loading, data } = state.selectedCharacter;

  return {
    films,
    loading,
    name: data.name
  };
}

export default connect(mapStateToProps)(MoviesContainer);
