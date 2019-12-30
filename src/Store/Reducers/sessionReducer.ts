import { Session } from "../Types/sessionTypes";
import { SessionActionTypes } from "../Types/actionTypes";

const defaultSessionState: Session = {
  loggedIn: false,
  user: {
    email: "",
    userId: 0,
    favorites: []
  }
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
    default:
      return state;
  }
};
