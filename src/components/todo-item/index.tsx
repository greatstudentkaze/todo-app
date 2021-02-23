import React from 'react';

import { ToDoItem as ToDoItemType } from '../../types';

type Props = {
  data: ToDoItemType,
  onToggle: (id: string) => void,
  onRemove: (id: string) => void,
};

const ToDoItem = ({ data: { title, id, completed }, onToggle, onRemove }: Props) => {

  return (
    <li className="todo-list__item todo-item">
      <input type="checkbox" id={`todo-${id}`} checked={completed} onChange={() => onToggle(id)} />
      <label htmlFor={`todo-${id}`}>{title}</label>
      <button type="button" onClick={() => onRemove(id)}>
        Удалить
      </button>
    </li>
  );
};

export default ToDoItem;
