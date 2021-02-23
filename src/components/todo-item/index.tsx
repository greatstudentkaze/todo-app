import React from 'react';

import { ToDoItem as ToDoItemType } from '../../types';

type Props = {
  data: ToDoItemType,
  onToggle: (id: string) => void,
  onRemove: (id: string) => void,
  updateToDoTitle: (id: string, title: string) => void,
};

const ToDoItem = ({ data: { title, id, completed }, onToggle, onRemove, updateToDoTitle }: Props) => {

  const handleChangeButtonClick = () => {
    const newTitle: string = prompt('Измените задачу:', title) ?? title;

    if (newTitle !== title) {
      updateToDoTitle(id, newTitle);
    }
  };

  const handleRemoveButtonClick = () => {
    const isRemove = window.confirm('Удалить задачу?');

    if (isRemove) {
      onRemove(id);
    }
  };

  return (
    <li className="todo-list__item todo-item">
      <input type="checkbox" id={`todo-${id}`} checked={completed} onChange={() => onToggle(id)} />
      <label htmlFor={`todo-${id}`}>{title}</label>
      <button type="button" onClick={handleChangeButtonClick}>
        Изменить
      </button>
      <button type="button" onClick={handleRemoveButtonClick}>
        Удалить
      </button>
    </li>
  );
};

export default ToDoItem;
