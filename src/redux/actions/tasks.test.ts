import * as actions from './tasks';
import * as types from './types/tasks';

import { TaskItem } from '../../types';

describe('tasks actions', () => {
  it('creates an action to add a task', () => {
    const task: TaskItem = {
      id: '0',
      title: 'test',
      completed: false,
    };
    const expectedAction = {
      type: types.ADD_TASK,
      payload: task
    };

    expect(actions.addTask(task)).toEqual(expectedAction);
  });

  it('creates an action to remove a task', () => {
    const id = '0';
    const expectedAction = {
      type: types.REMOVE_TASK,
      payload: id
    };

    expect(actions.removeTask(id)).toEqual(expectedAction);
  });

  it('creates an action to change a task completion', () => {
    const id = '0';
    const expectedAction = {
      type: types.TOGGLE_TASK,
      payload: id
    };

    expect(actions.toggleTask(id)).toEqual(expectedAction);
  });

  it('creates an action to change a task title', () => {
    const id = '0';
    const title = 'test';
    const expectedAction = {
      type: types.CHANGE_TASK_TITLE,
      payload: { id, title }
    };

    expect(actions.changeTaskTitle(id, title)).toEqual(expectedAction);
  });
});

