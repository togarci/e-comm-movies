import axios from 'axios';
import { getMovieResponse } from './types';

export const getMovies = async () => {
  try {
    const { data } = await axios.get<getMovieResponse>(`${process.env.BASE_URL}/api/movies`);
    return data.products;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};
