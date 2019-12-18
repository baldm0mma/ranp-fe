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

