import { Movie } from "../Types/movieTypes";
import { MovieActionTypes } from "../Types/actionTypes";

const defaultMoviesState: Movie[] = [];

export const moviesReducer = (
  state = defaultMoviesState,
  action: MovieActionTypes
): Movie[] => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.movies;
    default:
      return state;
  }
};
