import { ADD_Task, CHANGE_Task_TITLE, REMOVE_Task, SET_TaskS, TOGGLE_Task } from '../types/tasks';
import { TaskItem } from '../../types';

interface SetTasksAction {
  type: typeof SET_TaskS,
  payload: TaskItem[],
}

interface AddTaskAction {
  type: typeof ADD_Task,
  payload: TaskItem,
}

interface RemoveTaskAction {
  type: typeof REMOVE_Task,
  payload: string,
}

interface ChangeTaskTitleAction {
  type: typeof CHANGE_Task_TITLE,
  payload: {
    id: string,
    title: string
  },
}

interface ToggleTaskAction {
  type: typeof TOGGLE_Task,
  payload: string,
}

export const addTask = (task: TaskItem) => ({
  type: ADD_Task,
  payload: task,
});

export const removeTask = (id: string) => ({
  type: REMOVE_Task,
  payload: id,
});

export const changeTaskTitle = (id: string, title: string) => ({
  type: CHANGE_Task_TITLE,
  payload: {
    id,
    title,
  },
});

export const toggleTask = (id: string) => ({
  type: TOGGLE_Task,
  payload: id,
});

export type TasksActionType = SetTasksAction | AddTaskAction | RemoveTaskAction | ChangeTaskTitleAction | ToggleTaskAction;
