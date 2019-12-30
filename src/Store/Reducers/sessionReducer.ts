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
      return [...state, action.favorite];
    case "REMOVE_FAVORITE":
      return state.user.favorites.filter(fav => fav.movieId !== action.id);
    default:
      return state;
  }
};
