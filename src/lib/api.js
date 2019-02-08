import axios from "axios";

const getRequest = async endpoint => {
  return await axios.get(endpoint);
};

const getCharacter = async url => {
  return await getRequest(url);
};

const getFilm = async url => {
  return await getRequest(url);
};

const getFilms = async data => {
  return await axios.all(data.map(film => getFilm(film)));
};

export default {
  getRequest,
  getCharacter,
  getFilm,
  getFilms
};
