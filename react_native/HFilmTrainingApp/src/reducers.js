import { combineReducers } from 'redux';
import {FilmReducers} from "./features/film/film-reducers";

const reducers = combineReducers({
  FilmReducers,
});

export default reducers