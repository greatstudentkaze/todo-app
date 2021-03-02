import { tasks as reducer, initialState } from './tasks';
import * as actions from '../actions/tasks';
import { TasksActionType } from '../actions/tasks';
import { TaskItem, Tasks } from '../../types';

describe('filter reducer', () => {
  const task: TaskItem = {
    id: '0',
    title: 'test',
    completed: false,
  };
  const state: Tasks = [task];

  it('returns the initial state', () => {
    expect(reducer(undefined, {} as TasksActionType)).toEqual(initialState);
  });

  it('handles ADD_TASK', () => {
    const action = actions.addTask(task);

    expect(reducer(initialState, action))
      .toEqual([
        ...initialState,
        task,
      ]);
  });

  it('handles REMOVE_TASK', () => {
    const action = actions.removeTask('0');

    expect(reducer(state, action))
      .toEqual([]);
  });

  it('handles TOGGLE_TASK', () => {
    const action = actions.toggleTask('0');

    expect(reducer(state, action))
      .toEqual([{ ...task, completed: !task.completed }]);
  });

  it('handles CHANGE_TASK_TITLE', () => {
    const newTitle = 'newTest';
    const action = actions.changeTaskTitle('0', newTitle);

    expect(reducer(state, action))
      .toEqual([{ ...task, title: newTitle }]);
  });
});
