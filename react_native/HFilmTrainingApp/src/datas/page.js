export default class Page {
  constructor(current, max, isLoading) {
    this._current = current;
    this._max = max;
    this._isLoading = isLoading;
  }

  get current() {
    return this._current;
  }

  set current(value) {
    this._current = value;
  }

  get max() {
    return this._max;
  }

  set max(value) {
    this._max = value;
  }


  get isLoading() {
    return this._isLoading;
  }

  set isLoading(value) {
    this._isLoading = value;
  }
}