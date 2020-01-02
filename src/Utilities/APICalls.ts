import { movieScrubber } from "./movieScrubber";

const APIKey = process.env.REACT_APP_V3_AUTH_API_KEY;
const pageNum = 1;

export const getMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=${pageNum}`
    );
    const parsedMovies = await response.json();
    const scrubbedMovies = await movieScrubber(parsedMovies.results);
    return scrubbedMovies;
  } catch (error) {
    const caughtError = {
      message: error.message,
      status: error.status
    };
    return caughtError;
  }
};
