import Repository from "../../../datas/Repository";


export default class FilmListViewModel {


  constructor() {
    this._films = [];
    this._currentPage = 0;
    this._maxPage = 4;
  }

  get films() {
    return this._films
  }

  async loadFilms() {
    let result;
    await ++this._currentPage;
    if (this._currentPage >= this._maxPage) return 0;

    result = await Repository.film.api
      .getFilms(this._currentPage)
      .then((films) => {
        this._films = this._films.concat(films);
        return 1;
      })
      .catch((error) => {
        return 0;
      });

    return result;
  }
}