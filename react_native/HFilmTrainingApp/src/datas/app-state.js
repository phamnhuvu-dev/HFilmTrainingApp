
export default class AppState {
  constructor(filmState) {
    this._filmState = filmState;
  }

  get filmState() {
    return this._filmState;
  }

  set filmState(value) {
    this._filmState = value;
  }
}