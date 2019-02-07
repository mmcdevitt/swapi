import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Flex from "../UI/Flex";
import SingleMovie from "./SingleMovie";

const Message = styled.p`
  margin: 0 auto;
`;

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
      <Flex className="movie-list" fWrap="wrap" media="center">
        {films.length ? (
          this.renderMovies()
        ) : (
          <Message>
            {error ? "Error loading movies" : "Please select a character"}
          </Message>
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
