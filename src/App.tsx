import React from 'react';

import Tasks from './components/tasks';
import { TaskItem as TaskItemType } from './types';
import Header from './components/header';

export interface RootState {
  tasks: TaskItemType[],
  filter: {
    searchQuery: string,
  }
}

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Tasks />
      </main>
    </>
  );
};

export default App;
