import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Loading from "../components/UI/Loading";
import MovieList from "../components/MovieList";

const MoviesContainerWrapper = styled.div`
  padding: 45px 0 15px 0;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: inherit;
  width: 100%;

  @media (min-width: 660px) {
    width: 660px;
  }

  @media (min-width: 975px) {
    width: 975px;
  }

  @media (min-width: 1290px) {
    width: 1290px;
  }
`;

class MoviesContainer extends Component {
  render() {
    const { loading, films } = this.props;

    return (
      <MoviesContainerWrapper className="movie-container">
        {loading ? <Loading /> : <MovieList films={films} />}
      </MoviesContainerWrapper>
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
