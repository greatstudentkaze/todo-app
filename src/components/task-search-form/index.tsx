import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchQuery } from '../../redux/actions/filter';
import { RootState } from '../../App';

const selectFilter = (state: RootState) => state.filter;

const TaskSearchForm = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector(selectFilter);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <svg className="search-form__search-icon" width="14" height="14" aria-hidden="true"><path d="M10.006 8.805h-.633l-.224-.216a5.18 5.18 0 001.257-3.386 5.203 5.203 0 10-5.203 5.203 5.18 5.18 0 003.386-1.257l.216.224v.633L12.807 14 14 12.807l-3.994-4.002zm-4.803 0a3.597 3.597 0 01-3.602-3.602 3.597 3.597 0 013.602-3.602 3.597 3.597 0 013.602 3.602 3.597 3.597 0 01-3.602 3.602z" /></svg>
      <input
        className="search-form__input"
        type="text"
        name="search-query"
        id="search-query"
        placeholder="Искать"
        value={searchQuery}
        onChange={evt => dispatch(setSearchQuery(evt.target.value))}
        aria-label="Быстрый поиск"
      />
    </form>
  );
};

export default TaskSearchForm;
