import { Favorite } from "../Types/sessionTypes";

const defaultFavoritesState: Favorite[] = [];

export const toggleFavoritesReducer = (
  state = defaultFavoritesState,
  action
) => {
  switch (action.type) {
    case "TOGGLE_FAVORITE":
      return [...state, action.id];
    default:
      return state;
  }
};
