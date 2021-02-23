import React from 'react';

import { ToDoItem as ToDoItemType } from '../../types';

type TodoItemProps = {
  data: ToDoItemType,
  onToggle: (id: string) => void,
};

const ToDoItem = ({ data: { title, id, completed }, onToggle}: TodoItemProps) => {

  return (
    <li className="todo-list__item todo-item">
      <input type="checkbox" id={`todo-${id}`} checked={completed} onChange={() => onToggle(id)} />
      <label htmlFor={`todo-${id}`}>{title}</label>
    </li>
  );
};

export default ToDoItem;
