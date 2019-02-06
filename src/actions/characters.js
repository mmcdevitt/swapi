import { characters } from "../data/characters";

export const LOAD_CHARACTERS = "LOAD_CHARACTERS";
export const LOAD_CHARACTERS_SUCCESS = "LOAD_CHARACTERS_SUCCESS";
export const LOAD_CHARACTERS_FAILED = "LOAD_CHARACTERS_FAILED";

export const loadCharacters = () => {
  return async dispatch => {
    dispatch({
      type: LOAD_CHARACTERS
    });

    try {
      dispatch({
        type: LOAD_CHARACTERS_SUCCESS,
        payload: characters
      });
    } catch ({ message }) {
      dispatch({
        type: LOAD_CHARACTERS_FAILED,
        payload: {
          error: message
        }
      });
    }
  };
};
