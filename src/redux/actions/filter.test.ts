import { setSearchQuery } from './filter';
import { SET_SEARCH_QUERY } from './types/filter';

describe('filter actions', () => {
  it('creates an action toj set search query', () => {
    const searchQuery = 'test';
    const expectedAction = {
      type: SET_SEARCH_QUERY,
      payload: searchQuery
    };

    expect(setSearchQuery(searchQuery)).toEqual(expectedAction);
  });
});
