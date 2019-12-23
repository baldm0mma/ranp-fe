import { Movie } from "./movieTypes";

// export const SET_SESSION = "SET_SESSION";
export const SET_MOVIES = "SET_MOVIES";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

// Movie Action Types
export interface SetMoviesAction {
  type: typeof SET_MOVIES;
  movies: Movie[];
}

export type MovieActionTypes = SetMoviesAction;


// Session Action Types
export interface ToggleFavoriteAction {
  type: typeof TOGGLE_FAVORITE;
  id: number;
}

export type SessionActionTypes = ToggleFavoriteAction;

// Export All Action Types
export type AppActions = MovieActionTypes | SessionActionTypes;
