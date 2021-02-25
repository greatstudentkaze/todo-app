import React from 'react';

import Tasks from './components/tasks';
import Header from './components/header';

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
