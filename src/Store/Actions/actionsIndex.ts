import { Movie } from "../Types/movieTypes";
import { Favorite } from "../Types/sessionTypes";
import { AppActions } from "../Types/actionTypes";

export const setMovies = (movies: Movie[]): AppActions => ({
  type: "SET_MOVIES",
  movies
});

export const addFavorite = (favorite: Favorite): AppActions => ({
  type: "ADD_FAVORITE",
  favorite
});

export const removeFavorite = (id: number): AppActions => ({
  type: "REMOVE_FAVORITE",
  id
});
