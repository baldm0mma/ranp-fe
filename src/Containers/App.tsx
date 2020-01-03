import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { getMovies } from "../Utilities/APICalls";
import { setMovies, setErrorMessage } from "../Store/Actions/actionsIndex";
import { Movie } from "../Store/Types/movieTypes";
import { AppActions } from "../Store/Types/actionTypes";
import { AppState } from "../Store/configureStore";
import "./App.css";

interface Props {
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  setErrorMessage: (error: string) => void;
}

const App: React.FC<Props> = props => {
  useEffect(() => {
    (async () => {
      const response = await getMovies();
      if (typeof response === "string") {
        props.setErrorMessage(response)
      } else {
        props.setMovies(response);
      }
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
  setErrorMessage: (error: string) => void;
}

export const mapDispatchToProps = (
  dispatch: Dispatch<AppActions>
): LinkDispatchProps => ({
  setMovies: (movies: Movie[]) => dispatch(setMovies(movies)),
  setErrorMessage: (error: string) => dispatch(setErrorMessage(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
