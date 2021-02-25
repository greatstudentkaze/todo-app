import React, { useState } from 'react';

import TaskList from '../task-list';
import TaskAddingForm from '../task-adding-form';

const Tasks = () => {
  const [isShowEditor, setIsShowEditor] = useState<boolean>(false);

  const hideEditor = () => setIsShowEditor(false);

  return (
    <section className="tasks">
      <h2 className="tasks__title">Список задач</h2>
      <TaskList />
      {
        isShowEditor
          ? <TaskAddingForm hide={hideEditor} />
          : <button className="button" type="button" onClick={() => setIsShowEditor(true)}>Добавить</button>
      }
    </section>
  );
};

export default Tasks;
