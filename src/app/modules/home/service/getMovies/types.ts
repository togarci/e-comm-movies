export interface Movie {
  id: number;
  image: string;
  price: number;
  title: string;
}

export interface getMovieResponse {
  products: Movie[];
}
