import { ADD_MOVIE } from './action-types';

export const addMovie = (payload) => {
  return {
    type: ADD_MOVIE,
    payload
  }
}