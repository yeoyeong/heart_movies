import { movieListOptionType } from "../(model)/list";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
const api_key = import.meta.env.VITE_TMDB_API;

export const getMovie = (movieListOption: movieListOptionType) => {
  const { category, page } = movieListOption;
  return fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=${page}&api_key=${api_key}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};
