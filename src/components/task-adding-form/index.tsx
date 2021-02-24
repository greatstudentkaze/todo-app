import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../redux/actions/tasks';

import { TaskItem as TaskItemType } from '../../types';

const TaskAddingForm = () => {
  const dispatch = useDispatch();
  const titleInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (titleInputRef.current!.value) {
      const task: TaskItemType = {
        id: String(Date.now()),
        title: titleInputRef.current!.value,
        completed: false,
      };

      dispatch(addTask(task));

      titleInputRef.current!.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-title">Введите название задачи:</label>
      <input ref={titleInputRef} type="text" name="title" id="task-title" placeholder="Съесть пиццу"/>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default TaskAddingForm;
