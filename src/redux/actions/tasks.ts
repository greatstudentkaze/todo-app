import { ADD_TASK, CHANGE_TASK_TITLE, REMOVE_TASK, SET_TASKS, TOGGLE_TASK } from './types/tasks';
import { TaskItem, Tasks } from '../../types';

interface ISetTasksAction {
  type: typeof SET_TASKS,
  payload: Tasks,
}

interface IAddTaskAction {
  type: typeof ADD_TASK,
  payload: TaskItem,
}

interface IRemoveTaskAction {
  type: typeof REMOVE_TASK,
  payload: string,
}

interface IChangeTaskTitleAction {
  type: typeof CHANGE_TASK_TITLE,
  payload: {
    id: string,
    title: string
  },
}

interface IToggleTaskAction {
  type: typeof TOGGLE_TASK,
  payload: string,
}

export type TasksActionType = ISetTasksAction | IAddTaskAction | IRemoveTaskAction | IChangeTaskTitleAction | IToggleTaskAction;

export const addTask = (task: TaskItem): TasksActionType => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (id: string): TasksActionType => ({
  type: REMOVE_TASK,
  payload: id,
});

export const changeTaskTitle = (id: string, title: string): TasksActionType => ({
  type: CHANGE_TASK_TITLE,
  payload: {
    id,
    title,
  },
});

export const toggleTask = (id: string): TasksActionType => ({
  type: TOGGLE_TASK,
  payload: id,
});
