import API from "../lib/api";

export const FETCH_CHARACTER_FILMS = "FETCH_CHARACTER_FILMS";
export const FETCH_CHARACTER_FILMS_SUCCESS = "FETCH_CHARACTER_FILMS_SUCCESS";
export const FETCH_CHARACTER_FILMS_FAILED = "FETCH_CHARACTER_FILMS_FAILED";
export const RESET_FETCH_CHARACTER_ERROR = "RESET_FETCH_CHARACTER_ERROR";

export const selectCharacter = character => {
  return async dispatch => {
    dispatch({
      type: FETCH_CHARACTER_FILMS,
      payload: character
    });

    try {
      const { data } = await API.getCharacter(character.url);
      const films = await API.getFilms(data.films);

      dispatch({
        type: FETCH_CHARACTER_FILMS_SUCCESS,
        payload: {
          data: character,
          films: films.map(film => film.data)
        }
      });
    } catch ({ message }) {
      dispatch({
        type: FETCH_CHARACTER_FILMS_FAILED,
        payload: {
          error: message
        }
      });
    }
  };
};

export const resetError = () => {
  return dispatch => {
    dispatch({
      type: RESET_FETCH_CHARACTER_ERROR
    });
  };
};
