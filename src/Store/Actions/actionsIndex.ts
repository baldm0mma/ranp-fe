import { Movie } from "../Types/movieTypes";

export const setMovies = (movies: Movie[]) => ({
  type: "SET_MOVIES",
  movies
});

export const toggleFavorite = id => ({
  type: "TOGGLE_FAVORITE",
  id
});
