import axios from "axios";
// refactor
class SWAPI {
  async getRequest(endpoint) {
    return await axios.get(endpoint);
  }

  async getCharacter(url) {
    return await this.getRequest(url);
  }

  async getFilm(url) {
    return await this.getRequest(url);
  }

  async getFilms(data) {
    return await axios.all(data.map(film => this.getFilm(film)));
  }
}

export default new SWAPI();
