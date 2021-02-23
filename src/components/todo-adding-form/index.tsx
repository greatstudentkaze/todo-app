import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addToDo } from '../../redux/actions/todos';

import { ToDoItem as ToDoItemType } from '../../types';

const ToDoAddingForm = () => {
  const dispatch = useDispatch();
  const titleInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (titleInputRef.current!.value) {
      const todo: ToDoItemType = {
        id: String(Date.now()),
        title: titleInputRef.current!.value,
        completed: false,
      };

      dispatch(addToDo(todo));

      titleInputRef.current!.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-title">Введите название задачи:</label>
      <input ref={titleInputRef} type="text" name="title" id="todo-title" placeholder="Съесть пиццу"/>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default ToDoAddingForm;
