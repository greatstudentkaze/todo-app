import { filter as reducer, initialState } from './filter';
import { FilterActionType, setSearchQuery } from '../actions/filter';

describe('filter reducer', () => {
  it('returns the initial state', () => {
    expect(reducer(undefined, {} as FilterActionType)).toEqual(initialState);
  });

  it('handles SET_SEARCH_QUERY', () => {
    const action = setSearchQuery('test');
    
    expect(reducer(initialState, action))
      .toEqual({
        ...initialState,
        searchQuery: 'test',
      });
  });
});
