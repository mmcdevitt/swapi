import React from "react";
import { kebabCase } from "lodash";
import styled from "styled-components";

const SingleMovieWrapper = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 30px;
`;

const MoviePoster = styled.div`
  height: 450px;
  width: 285px;
  border-radius: 4px;
  background-image: ${props => props.image};
  background-size: cover;
  background-position: center;
`;

const MovieTitle = styled.div`
  margin-top: 15px;
  text-align: center;
`;

const SingleMovie = ({ film }) => {
  const image = `url(${process.env.PUBLIC_URL}/images/${kebabCase(
    film.title
  )}.jpg)`;

  const date = new Date(film.release_date).toLocaleDateString("eng");

  return (
    <SingleMovieWrapper className="movie" key={film.title}>
      <MoviePoster className="movie-poster" image={image} />
      <MovieTitle className="movie-info">
        <h3 className="movie-title">{film.title}</h3>
        <p className="movie-date">Released: {date}</p>
      </MovieTitle>
    </SingleMovieWrapper>
  );
};

export default SingleMovie;
