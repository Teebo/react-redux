import { ADD_MOVIE } from './action-types';

export const addMovie = (payload: any) => {
  return {
    type: ADD_MOVIE,
    payload
  }
}