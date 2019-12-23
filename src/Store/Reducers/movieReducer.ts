import { Movie } from "../Types/movieTypes";

const defaultMovieState: Movie[] = [];

export const movieReducer = (state = defaultMovieState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.movies;
    default:
      return state;
  }
};
