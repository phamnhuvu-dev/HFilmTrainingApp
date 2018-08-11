import { combineReducers } from 'redux';
import FilmReducers from "./features/film/FilmReducers";

const Reducers = combineReducers({
  FilmReducers,
});

export default Reducers