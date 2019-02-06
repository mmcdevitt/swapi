import {
  FETCH_CHARACTER_FILMS,
  FETCH_CHARACTER_FILMS_SUCCESS,
  FETCH_CHARACTER_FILMS_FAILED,
  RESET_FETCH_CHARACTER_ERROR
} from "../actions/character";

const initialState = {
  loading: false,
  data: {},
  films: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_FILMS:
      return {
        ...state,
        loading: true,
        data: {},
        films: []
      };
    case FETCH_CHARACTER_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        films: action.payload.films,
        error: null
      };
    case FETCH_CHARACTER_FILMS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
