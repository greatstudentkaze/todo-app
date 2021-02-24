import { combineReducers } from 'redux';

import { filter } from './filter';
import { tasks } from './tasks';

const rootReducer = combineReducers({
  filter,
  tasks,
});

export default rootReducer;
