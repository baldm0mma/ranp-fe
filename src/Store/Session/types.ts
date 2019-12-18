export interface Favorite {
  id: number;
  title: string;
  isFavorited: boolean;
}

export interface User {
  id: number;
  email: string;
  favorites: Favorite[];
}

export interface Session {
  loggedIn: boolean;
  user: User;
}
