import React from "react";
import { connect } from "react-redux";
import Flex from "../UI/Flex";
import SingleMovie from "./SingleMovie";

class MovieList extends React.Component {
  renderMovies() {
    const { films } = this.props;

    return films.map(film => {
      return <SingleMovie key={film.episode_id} film={film} />;
    });
  }

  render() {
    const { films, error } = this.props;

    return (
      <Flex className="movie-list" jContent="center" fWrap="wrap">
        {films.length ? (
          this.renderMovies()
        ) : (
          <p>{error ? "Error loading movies" : "Please select a character"}</p>
        )}
      </Flex>
    );
  }
}

function mapStateToProps(state) {
  const { error } = state.selectedCharacter;

  return {
    error
  };
}

export default connect(mapStateToProps)(MovieList);
