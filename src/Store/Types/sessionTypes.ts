export interface Favorite {
  createdAt: number;
  movieId: number;
  title: string;
}

export interface User {
  email: string;
  userId: number;
  favorites: Favorite[];
}

export interface Session {
  loggedIn: boolean;
  user: User;
  error: string;
}
