import { Movie } from "../Types/movieTypes";

const defaultMoviesState: Movie[] = [];

export const moviesReducer = (state = defaultMoviesState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.movies;
    default:
      return state;
  }
};
