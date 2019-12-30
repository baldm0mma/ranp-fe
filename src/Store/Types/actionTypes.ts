import { Movie } from "./movieTypes";
import { Favorite } from "./sessionTypes";

// export const SET_SESSION = "SET_SESSION";
export const SET_MOVIES = "SET_MOVIES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// Movie Action Types
export interface SetMoviesAction {
  type: typeof SET_MOVIES;
  movies: Movie[];
}

export type MovieActionTypes = SetMoviesAction;

// Session Action Types
export interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  favorite: Favorite;
}

export interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;
  id: number;
}

export type SessionActionTypes = AddFavoriteAction | RemoveFavoriteAction;

// Export All Action Types
export type AppActions = MovieActionTypes | SessionActionTypes;
