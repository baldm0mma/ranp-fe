import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { getMovies } from "../Utilities/APICalls";
import { setMovies } from "../Store/Actions/actionsIndex";
import { Movie } from "../Store/Types/movieTypes";
import { AppActions } from "../Store/Types/actionTypes";
import { AppState } from "../Store/configureStore";
import "./App.css";

interface Props {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

const App: React.FC<Props> = props => {
  useEffect(() => {
    // const onLoad = async () => {
    //   const popularMovies = await getMovies();
    //   props.setMovies(popularMovies);
    // };
    (async () => {
      const popularMovies = await getMovies();
      props.setMovies(popularMovies);
    })();
  }, []);
  return <div className="App">"Hi there!"</div>;
};

interface LinkStateProps {
  movies: Movie[];
}

export const mapStateToProps = (state: AppState): LinkStateProps => ({
  movies: state.movies
});

interface LinkDispatchProps {
  setMovies: (movies: Movie[]) => void;
}

export const mapDispatchToProps = (
  dispatch: Dispatch<AppActions>
): LinkDispatchProps => ({
  // setMovies: movies => dispatch(setMovies(movies))
  setMovies: (movies: Movie[]) => dispatch(setMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
