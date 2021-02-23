import { ADD_TODO, CHANGE_TODO_TITLE, REMOVE_TODO, SET_TODOS, TOGGLE_TODO } from '../types/todos';
import { ToDoItem } from '../../types';

interface SetToDosAction {
  type: typeof SET_TODOS,
  payload: ToDoItem[],
}

interface AddToDoAction {
  type: typeof ADD_TODO,
  payload: ToDoItem,
}

interface RemoveToDoAction {
  type: typeof REMOVE_TODO,
  payload: string,
}

interface ChangeToDoTitleAction {
  type: typeof CHANGE_TODO_TITLE,
  payload: {
    id: string,
    title: string
  },
}

interface ToggleToDoAction {
  type: typeof TOGGLE_TODO,
  payload: string,
}

export const addToDo = (todo: ToDoItem) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeToDo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const changeToDoTitle = (id: string, title: string) => ({
  type: CHANGE_TODO_TITLE,
  payload: {
    id,
    title,
  },
});

export const toggleToDo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export type ToDosActionType = SetToDosAction | AddToDoAction | RemoveToDoAction | ChangeToDoTitleAction | ToggleToDoAction;
