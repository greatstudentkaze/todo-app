import React from 'react';
import { useDispatch } from 'react-redux';

import { ToDoItem as ToDoItemType } from '../../types';
import { removeToDo, toggleToDo, changeToDoTitle } from '../../redux/actions/todos';

type Props = {
  data: ToDoItemType,
};

const ToDoItem = ({ data: { title, id, completed } }: Props) => {
  const dispatch = useDispatch();

  const handleChangeButtonClick = () => {
    const newTitle: string = prompt('Измените задачу:', title) ?? title;

    if (newTitle !== title) {
      dispatch(changeToDoTitle(id, newTitle));
    }
  };

  const handleRemoveButtonClick = () => {
    const isRemove = window.confirm('Удалить задачу?');

    if (isRemove) {
      dispatch(removeToDo(id));
    }
  };

  return (
    <li className="todo-list__item todo-item">
      <input type="checkbox" id={`todo-${id}`} checked={completed} onChange={() => dispatch(toggleToDo(id))} />
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
