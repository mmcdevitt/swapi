import React, { Component } from "react";
import { connect } from "react-redux";

class MoviesContainer extends Component {
  renderMovieList() {
    const { loading, films } = this.props;

    if (loading) {
      return <div>Loading</div>;
    } else {
      return films.map(film => {
        return <div key={film.episode_id}>{film.title}</div>;
      });
    }
  }

  render() {
    return <section>{this.renderMovieList()}</section>;
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
