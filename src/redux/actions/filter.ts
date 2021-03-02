import { SET_SEARCH_QUERY } from './types/filter';

type SearchQuery = string;

interface ISetSearchQueryAction {
  type: typeof SET_SEARCH_QUERY,
  payload: string
}

export const setSearchQuery = (value: SearchQuery): ISetSearchQueryAction => ({
  type: SET_SEARCH_QUERY,
  payload: value
});

export type FilterActionType = ISetSearchQueryAction;
