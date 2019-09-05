import { SET_MOVIES_SORT } from "./action-types";

export const addMovie = (payload: any) => {
  return {
    type: SET_MOVIES_SORT,
    payload
  };
};
