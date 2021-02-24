import { TaskItem } from '../../types';
import { ADD_Task, CHANGE_Task_TITLE, REMOVE_Task, SET_TaskS, TOGGLE_Task } from '../types/tasks';
import { TasksActionType } from '../actions/tasks';

const initialState: TaskItem[] = [
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

export const tasks = (state = initialState, action: TasksActionType) => {
  switch (action.type) {
    case SET_TaskS:
      return [...action.payload];
    case ADD_Task:
      return [...state, action.payload];
    case REMOVE_Task:
      return state.filter(item => item.id !== action.payload);
    case CHANGE_Task_TITLE:
      return state.map(task => task.id === action.payload.id ? {...task, title: action.payload.title} : task);
    case TOGGLE_Task:
      return state.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task);
    default:
      return state;
  }
};
