import React from "react";
import Flex from "../UI/Flex";
import SingleMovie from "./SingleMovie";

class MovieList extends React.Component {
  renderMovies() {
    const { films } = this.props;

    return films.map(film => {
      return <SingleMovie film={film} />;
    });
  }

  render() {
    const { films } = this.props;

    return (
      <Flex className="movie-list" jContent="center" fWrap="wrap">
        {films.length ? this.renderMovies() : <div>nothing here</div>}
      </Flex>
    );
  }
}

MovieList.defaultProps = {
  films: []
};

export default MovieList;
