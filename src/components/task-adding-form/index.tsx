import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../redux/actions/tasks';

import { TaskItem as TaskItemType } from '../../types';

type Props = {
  hide: () => void,
}

const TaskAddingForm = ({ hide }: Props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();

    if (title.trim()) {
      const task: TaskItemType = {
        id: String(Date.now()),
        title: title.trim(),
        completed: false,
      };

      dispatch(addTask(task));

      setTitle('');
    }
  };

  return (
    <form className="task-adding-form" onSubmit={handleSubmit} autoComplete="off">
      <div className="task-adding-form__edit-area">
        <input
          className="task-adding-form__input"
          type="text"
          name="title"
          id="task-title"
          placeholder="Съесть пиццу"
          aria-label="Название задачи"
          value={title}
          onChange={evt => setTitle(evt.target.value)} />
      </div>
      <div className="task-adding-form__buttons">
        <button className="task-adding-form__button task-adding-form__button--add button" type="submit" disabled={!title.trim()}>Добавить</button>
        <button className="task-adding-form__button task-adding-form__button--cancel button" type="button" onClick={hide}>Отмена</button>
      </div>
    </form>
  );
};

export default TaskAddingForm;
