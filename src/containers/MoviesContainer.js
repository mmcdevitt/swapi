import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../components/UI/Loading";
import Container from "../components/UI/Container";

class MoviesContainer extends Component {
  renderMovieList() {
    const { films } = this.props;

    return films.map(film => {
      return <div key={film.episode_id}>{film.title}</div>;
    });
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="films">
        <Container>{loading ? <Loading /> : this.renderMovieList()}</Container>
      </div>
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
