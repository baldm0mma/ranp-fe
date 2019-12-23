export interface Favorite {
  createdAt: number;
  id: number;
  title: string;
}

export interface User {
  email: string;
  favorites: Favorite[];
  id: number;
}

export interface Session {
  loggedIn: boolean;
  user: User;
}
