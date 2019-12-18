export interface Movie {
  id: number;
  original_title: string;
  favorited: boolean;
}

export interface User {
  id: number;
  email: string;
  favorites: Movie[];
}

export interface SessionState {
  loggedIn: boolean;
  user: User;
}
