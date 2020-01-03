import { Session } from "../Types/sessionTypes";
import { SessionActionTypes } from "../Types/actionTypes";

const defaultSessionState: Session = {
  loggedIn: false,
  user: {
    email: "",
    userId: 0,
    favorites: []
  },
  error: ""
};

export const sessionReducer = (
  state = defaultSessionState,
  action: SessionActionTypes
): Session => {
  switch (action.type) {
    case "ADD_FAVORITE":
      state.user.favorites.push(action.favorite);
      return state;
    case "REMOVE_FAVORITE":
      state.user.favorites.filter(fav => fav.movieId !== action.id);
      return state;
    case "SET_ERROR_MESSAGE":
      state.error = action.error;
      return state;
    default:
      return state;
  }
};
