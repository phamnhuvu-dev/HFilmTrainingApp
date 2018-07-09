import {HOST, GET, HEADERS} from '../../modules/ApiService'

export default class FilmApiDataSource {

  async getFilms(page) {
    let response = await fetch(`${HOST}movie/list?page=${page}`, {
      method: GET,
      headers: HEADERS
    });
    let json = await response.json();
    return await json.data;
  }
}