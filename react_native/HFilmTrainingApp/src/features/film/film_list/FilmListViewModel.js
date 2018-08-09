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
    ++this._currentPage;
    if (this._currentPage >= this._maxPage) return false;
    try {
      let films = await Repository.film.api.getFilms(this._currentPage);

      for (let item of films) {
        let titles = item.title.split(" / ");
        if (titles.length > 1) {
          item.englishTitle = titles[0];
          item.vietnamTitle = titles[1];
        } else {
          item.englishTitle = titles[0];
          item.vietnamTitle = item.englishTitle;
        }
        item.title = null;
        item.like = false;
      }
      return films;
    } catch (e) {
      --this._currentPage;
      return [];
    }
  }
}

