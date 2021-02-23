import React from 'react';

import ToDoList from './components/todo-list';
import { ToDoItem as ToDoItemType } from './types';
import ToDoAddingForm from './components/todo-adding-form';
import ToDoSearchForm from './components/todo-search-form';

export interface RootState {
  todos: ToDoItemType[],
  filter: {
    searchQuery: string,
  }
}

const App = () => {
  return (
    <>
      <ToDoSearchForm />
      <ToDoAddingForm />
      <ToDoList />
    </>
  );
};

export default App;
