import React, { useRef } from 'react';

import { ToDoItem as ToDoItemType } from '../../types';

type Props = {
  addToDo: (data: ToDoItemType) => void,
};

const ToDoAddingForm = ({ addToDo }: Props) => {
  const titleInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (titleInputRef.current!.value) {
      const todo:ToDoItemType = {
        id: String(Date.now()),
        title: titleInputRef.current!.value,
        completed: false,
      };

      addToDo(todo);

      titleInputRef.current!.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-title">Введите название задачи:</label>
      <input ref={titleInputRef} type="text" name="title" id="todo-title" placeholder="Съесть пиццу" />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default ToDoAddingForm;
