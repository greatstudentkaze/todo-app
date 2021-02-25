import React from 'react';
import { useDispatch } from 'react-redux';

import { TaskItem as TaskItemType } from '../../types';
import { removeTask, toggleTask, changeTaskTitle } from '../../redux/actions/tasks';

type Props = {
  data: TaskItemType,
};

const TaskItem = ({ data: { title, id, completed } }: Props) => {
  const dispatch = useDispatch();

  const handleChangeButtonClick = () => {
    const newTitle: string = prompt('Измените задачу:', title) ?? title;

    if (newTitle !== title) {
      dispatch(changeTaskTitle(id, newTitle));
    }
  };

  const handleRemoveButtonClick = () => {
    const isRemove = window.confirm('Удалить задачу?');

    if (isRemove) {
      dispatch(removeTask(id));
    }
  };

  return (
    <li className="task-list__item task-item">
      <input className="visually-hidden" type="checkbox" id={`task-${id}`} checked={completed} onChange={() => dispatch(toggleTask(id))} />
      <label className="task-item__title" htmlFor={`task-${id}`}>{title}</label>
      <div className="task-item__actions">
        <button className="task-item__button" type="button" onClick={handleChangeButtonClick}>
          Изменить
        </button>
        <button className="task-item__button" type="button" onClick={handleRemoveButtonClick}>
          Удалить
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
