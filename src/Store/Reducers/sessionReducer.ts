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
    case "TOGGLE_FAVORITE":
      if (
        state.user.favorites.map(fav => fav.movieId === action.favorite.movieId)
      ) {
        state.user.favorites.filter(
          fav => fav.movieId !== action.favorite.movieId
        );
      } else {
        state.user.favorites.push(action.favorite);
      }
      return state;
    default:
      return state;
  }
};
