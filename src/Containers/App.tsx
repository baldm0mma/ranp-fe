import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getMovies } from "../Utilities/APICalls";
import { setMovies } from "../Store/Actions/actionsIndex";
import "./App.css";

const App: React.FC = props => {
  useEffect(() => {
    const onLoad = async () => {
      const popularMovies = await getMovies();
      props.setMovies(popularMovies);
    };
  }, []);
  return <div className="App">"Hi there!"</div>;
};



export const mapStateToProps = ({ movies }) => ({
  movies
});

export const mapDispatchToProps = dispatch => ({
  setMovies: movies => dispatch(setMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
