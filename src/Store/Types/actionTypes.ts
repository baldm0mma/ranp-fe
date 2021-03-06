import { Movie } from "./movieTypes";
import { Favorite } from "./sessionTypes";

// export const SET_SESSION = "SET_SESSION";
export const SET_MOVIES = "SET_MOVIES";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
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

export interface SetErrorMessageAction {
  type: typeof SET_ERROR_MESSAGE;
  error: string;
}

export type SessionActionTypes = AddFavoriteAction | RemoveFavoriteAction | SetErrorMessageAction;

// Export All Action Types
export type AppActions = MovieActionTypes | SessionActionTypes;
