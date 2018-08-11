import Repository from "../../../datas/Repository";

export const fetchFilms = async (state) => {
  if (!state.page.isLoading) {
    state.page.isLoading = true;
    state.page.current++;

    let films = await Repository.film.api.getFilms(state.page.current);
    if (films.length === 0) {
      console.log("empty");
      state.page.current--;
    } else {
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
      state.films.push(...films);
    }

    console.log("request " + state.page.current);
    state.page.isLoading = false;
    return films;
  }
};

