import React, { useEffect } from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getMovies } from "../Utilities/APICalls";
import { setMovies } from "../Store/Actions/actionsIndex";
import { Movie } from "../Store/Types/movieTypes";
import { AppActions } from "../Store/Types/actionTypes";
import { AppState } from "../Store/configureStore";
import "./App.css";

// interface Props {
//   movies: Movie[];
//   setMovies: (movies: Movie[]) => void;
// }

const App: React.FC = props => {
  useEffect(() => {
    const onLoad = async () => {
      const popularMovies = await getMovies();
      props.setMovies(popularMovies);
    };
  }, []);
  return <div className="App">"Hi there!"</div>;
};

interface LinkStateProps {
  movies: Movie[];
}

interface LinkDispatchProps {
  setMovies: (movies: Movie[]) => void;
}

export const mapStateToProps = (state: AppState): LinkStateProps => ({
  movies: state.movies
});

export const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => ({
  // setMovies: movies => dispatch(setMovies(movies))
  setMovies: bindActionCreators(setMovies, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
