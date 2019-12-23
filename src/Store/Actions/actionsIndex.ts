import { Movie } from "../Types/movieTypes";
import { AppActions } from "../Types/actionTypes";

export const setMovies = (movies: Movie[]): AppActions => ({
  type: "SET_MOVIES",
  movies
});

export const toggleFavorite = (id: string): AppActions => ({
  type: "TOGGLE_FAVORITE",
  id
});
