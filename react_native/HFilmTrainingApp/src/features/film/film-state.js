export default class FilmState {
  constructor(films, page) {
    this._films = films;
    this._page = page;
  }

  get films() {
    return this._films;
  }

  set films(value) {
    this._films = value;
  }

  get page() {
    return this._page;
  }

  set page(value) {
    this._page = value;
  }
}