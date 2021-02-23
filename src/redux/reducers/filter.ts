import { SET_SEARCH_QUERY } from '../types/filter';
import { FilterActionType } from '../actions/filter';

const initialState = {
  searchQuery: '',
};

export const filter = (state = initialState, action: FilterActionType) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      }
    default:
      return state;
  }
};
