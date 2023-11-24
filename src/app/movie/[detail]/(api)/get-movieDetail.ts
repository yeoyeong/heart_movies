const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
const api_key = import.meta.env.VITE_TMDB_API;

export const getMovieDetail = (movie_id: string | undefined) => {
  if (!movie_id) return;
  return fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=ko-KR&api_key=${api_key}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};
