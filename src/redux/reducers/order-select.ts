import { SET_MOVIES_SORT } from '../order-select/action-types';
import { SortEnum } from '../enums';

const initialState = SortEnum.rank;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_SORT: {
      return state;
    }
    default: {
      return state;
    }

  }
}