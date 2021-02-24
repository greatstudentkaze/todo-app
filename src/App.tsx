import React from 'react';

import TaskList from './components/task-list';
import { TaskItem as TaskItemType } from './types';
import TaskAddingForm from './components/task-adding-form';
import TaskSearchForm from './components/task-search-form';

export interface RootState {
  tasks: TaskItemType[],
  filter: {
    searchQuery: string,
  }
}

const App = () => {
  return (
    <>
      <TaskSearchForm />
      <TaskAddingForm />
      <TaskList />
    </>
  );
};

export default App;
