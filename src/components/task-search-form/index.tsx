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
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-title">Что ищем?</label>
      <input
        type="text"
        name="search-query"
        id="search-query"
        placeholder="Купить книжку"
        value={searchQuery}
        onChange={evt => dispatch(setSearchQuery(evt.target.value))} />
    </form>
  );
};

export default TaskSearchForm;
