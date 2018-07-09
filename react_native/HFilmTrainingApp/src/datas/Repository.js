import FilmRepository from './film/FilmRepository'
import FilmApiDataSource from "./film/FilmApiDataSource";
import UserRepository from "./user/UserRepository";

export default class Repository {

  constructor() {
    Repository._film = null;
    Repository._user = null;
  }

  static get film() {
    if (this._film != null) return this._film;
    this._film = new FilmRepository(new FilmApiDataSource());
    return this._film;
  }

  static get user() {
    if (this._user != null) return this._user;
    this._user = new UserRepository();
    return this._user;
  }
}