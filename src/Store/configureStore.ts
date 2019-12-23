import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extention";
import { sessionReducer } from "./Reducers/sessionReducer";
import { movieReducer } from "./Reducers/movieReducer";

export const rootReducer = combineReducers({
  session: sessionReducer,
  movies: movieReducer
});

export const store = createStore(rootReducer, composeWithDevTools();
