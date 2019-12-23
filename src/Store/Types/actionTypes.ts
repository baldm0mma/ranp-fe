import { Movie } from "./movieTypes";

// export const SET_SESSION = "SET_SESSION";
export const SET_MOVIES = "SET_MOVIES";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export interface SetMoviesAction {
  type: typeof SET_MOVIES;
  movies: Movie[];
}

export interface ToggleFavoriteAction {
  type: typeof TOGGLE_FAVORITE;
  id: number;
}

export type MovieActionTypes = SetMoviesAction | ToggleFavoriteAction;

export type AppActions = MovieActionTypes;
