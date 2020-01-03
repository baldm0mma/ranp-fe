export const movieScrubber = movies => {
  return movies.map(movie => {
    const { id, overview, poster_path, release_date, runtime, title } = movie;
    const scrubbedMovie = {
      movieId: id,
      isFavorited: false,
      overview,
      poster_path,
      release_date,
      runtime,
      title
    };
    return scrubbedMovie;
  });
};
