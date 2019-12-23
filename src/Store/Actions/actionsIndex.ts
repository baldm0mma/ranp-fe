import { Movie } from "../Types/movieTypes";
import { Favorite } from "../Types/sessionTypes";
import { AppActions } from "../Types/actionTypes";

export const setMovies = (movies: Movie[]): AppActions => ({
  type: "SET_MOVIES",
  movies
});

export const toggleFavorite = (favorite: Favorite): AppActions => ({
  type: "TOGGLE_FAVORITE",
  favorite
});
