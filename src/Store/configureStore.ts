import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { sessionReducer } from "./Reducers/sessionReducer";
import { moviesReducer } from "./Reducers/moviesReducer";

export const rootReducer = combineReducers({
  session: sessionReducer,
  movies: moviesReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools());
