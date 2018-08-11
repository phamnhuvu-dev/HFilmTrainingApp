// import {actionTypes} from "./FilmActions";

import Page from "../../datas/page";
import FilmState from "./film-state";
import {HEADERS, HOST} from "../../modules/ApiService";
import Repository from "../../datas/Repository";


export const actionTypes = {
  SYNC_DATA: 'SYNC_DATA',
  IS_LOADING: 'IS_LOADING',
  FETCH_FILM: 'FETCH_FILM',
  REQUEST_FILM: 'REQUEST_FILM',
  ADD_FILM: 'ADD_FILM',
  CLICK_FILM: 'CLICK_FILM',
  UNCLICK_FILM: 'CLICK_FILM',
  CLICK_LIKE: 'CLICK_LIKE',
};

export const syncData = (state, screen) => ({
  type: actionTypes.SYNC_DATA,
  state,
  screen
});

export const isLoading = () => ({
  type: actionTypes.IS_LOADING,
});

export const requestFilms = state => ({
  type: actionTypes.REQUEST_FILM,
  state
});

export const fetchFilm = page => ({
  type: actionTypes.FETCH_FILM,
  page
});

export const addFilm = films => ({
  type: actionTypes.ADD_FILM,
  films
});

export const clickLike = id => ({
  type: actionTypes.CLICK_LIKE,
  id
});

// export const fetchFilms = (store) => dispatch => action => {
//
//   // console.log("start");
//   // console.log(state);
//   // return dispatch => {
//   //
//   // };
//   // dispatch(action);
//   console.log(store.getState());
//   console.log(dispatch);
//   console.log(action);
//
//   // dispatch(action);
//
//   switch (action.type) {
//     case actionTypes.REQUEST_FILM:
//       // console.log("ok");
//       // console.log(store.getState().FilmReducers);
//       // store.dispatch(action);
//       if (!store.getState().FilmReducers.page.isLoading) {
//         store.dispatch(isLoading());
//
//       }
//       break;
//
//     default:
//       dispatch(action);
//       break;
//   }
// };



export const FilmReducers = (filmState = new FilmState([], new Page(0, 0, false)), action) => {
  switch (action.type) {
    case actionTypes.SYNC_DATA:

      switch (action.screen) {
        case "FILM_LIST":
          return {...filmState, ...action.state};

        case "FILM_DETAIL":
          return Object.assign(filmState.films, {
            films: filmState.films.map(
              film => (film.id === action.state.film.id) ? {...film, like: action.state.film.like} : film
            )
          })
      }

      break;


    case actionTypes.ADD_FILM:
      let value = Object.assign(filmState.films, {films: [...filmState.films, ...action.films]});
      console.log(value);
      return value;

    case actionTypes.CLICK_LIKE:
      return {...filmState,
        films: filmState.films.map(
          film =>
            (film.id === action.id) ?
              {...film, like: !film.like} : film)
      };

    case actionTypes.REQUEST_FILM:
      return Object.assign(filmState, ...action.state);

    case actionTypes.IS_LOADING:
      console.log("isloading");
      let page = filmState.page;
      page.isLoading = true;
      let result = Object.assign(filmState.page.isLoading, {page: page});
      console.log(result);
      return result;

    default:
      return filmState;
  }
};