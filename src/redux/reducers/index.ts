import { combineReducers } from "redux";
import movieListReducer from './movie-list';
import orderSelectReducer from './order-select';

export const reducers = combineReducers({ movieListReducer, orderSelectReducer });
