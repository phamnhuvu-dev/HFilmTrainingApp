// import {actionTypes} from "./FilmActions";

export const actionTypes = {
  ADD_FILM: 'ADD_FILM',
  CLICK_FILM: 'CLICK_FILM',
  UNCLICK_FILM: 'CLICK_FILM',
  CLICK_LIKE: 'CLICK_LIKE',
};

export const addFilm = films => ({
  type: actionTypes.ADD_FILM,
  films
});

export const clickLike = id => ({
  type: actionTypes.CLICK_LIKE,
  id
});


const FilmReducers = (films = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_FILM:
      console.log("add_film");
      return [...films, ...action.films];

    case actionTypes.CLICK_LIKE:
      return films.map(film =>
        (film.id === action.id) ?
          {...film, like: !film.like} : film);

    default:
      return films;
  }
};

export default FilmReducers