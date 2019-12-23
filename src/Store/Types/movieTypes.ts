export interface Movie {
  id: number;
  isFavorited: boolean = false;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
}