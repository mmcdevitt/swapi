import {
  LOAD_CHARACTERS,
  LOAD_CHARACTERS_SUCCESS,
  LOAD_CHARACTERS_FAILED
} from "../actions/characters";

const initialState = {
  loading: false,
  collection: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHARACTERS:
      return {
        ...state,
        loading: true
      };
    case LOAD_CHARACTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        collection: action.payload
      };
    case LOAD_CHARACTERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};
