import { Session, User, Favorite } from "../Types/sessionTypes";
import { SessionActionTypes } from "../Types/actionTypes";

const defaultSessionState: Session = {};

export const sessionReducer = (
  state = defaultSessionState,
  action: SessionActionTypes
): Session => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return [...state, action.id];
    default:
      return state;
  }
};
