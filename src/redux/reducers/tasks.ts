import { ADD_TASK, CHANGE_TASK_TITLE, REMOVE_TASK, SET_TASKS, TOGGLE_TASK } from '../actions/types/tasks';
import { TasksActionType } from '../actions/tasks';
import { Tasks } from '../../types';

const initialState: Tasks = [
  {
    id: '1',
    title: 'Ознакомиться с TypeScript',
    completed: false,
  },
  {
    id: '2',
    title: 'Сделать компонент списка',
    completed: true,
  },
  {
    id: '3',
    title: 'Сделать компонент task',
    completed: true,
  },
];

export const tasks = (state = initialState, action: TasksActionType):Tasks => {
  switch (action.type) {
    case SET_TASKS:
      return [...action.payload];
    case ADD_TASK:
      return [...state, action.payload];
    case REMOVE_TASK:
      return state.filter(item => item.id !== action.payload);
    case CHANGE_TASK_TITLE:
      return state.map(task => task.id === action.payload.id ? {...task, title: action.payload.title} : task);
    case TOGGLE_TASK:
      return state.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task);
    default:
      return state;
  }
};
