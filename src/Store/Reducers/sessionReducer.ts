import { Session, User, Favorite } from "../Types/sessionTypes";
import { SessionActionTypes } from "../Types/actionTypes";

const defaultSessionState: Session = {
  loggedIn: false,
  user: {
    email: '',
    id: 0,
    favorites: []
  }
};

export const sessionReducer = (
  state = defaultSessionState,
  action: SessionActionTypes
): Session => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      state.user.favorites.push(action.favorite)
      return state;
    default:
      return state;
  }
};
