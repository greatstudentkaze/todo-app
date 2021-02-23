import { SET_SEARCH_QUERY } from '../types/filter';

type SearchQuery = string;

interface SetSearchQueryAction {
  type: typeof SET_SEARCH_QUERY,
  payload: string
}

export const setSearchQuery = (value: SearchQuery) => ({
  type: SET_SEARCH_QUERY,
  payload: value
});

export type FilterActionType = SetSearchQueryAction;
