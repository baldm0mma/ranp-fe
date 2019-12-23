import { Favorite } from "../Types/sessionTypes";

const defaultSessionState: Favorite[] = [];

export const sessionReducer = (state = defaultSessionState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return [...state, action.id];
    default:
      return state;
  }
};
