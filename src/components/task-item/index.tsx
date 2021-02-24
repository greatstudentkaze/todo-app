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
      <input type="checkbox" id={`task-${id}`} checked={completed} onChange={() => dispatch(toggleTask(id))} />
      <label htmlFor={`task-${id}`}>{title}</label>
      <button type="button" onClick={handleChangeButtonClick}>
        Изменить
      </button>
      <button type="button" onClick={handleRemoveButtonClick}>
        Удалить
      </button>
    </li>
  );
};

export default TaskItem;
