import { ToDoItem } from '../../types';
import { ADD_TODO, CHANGE_TODO_TITLE, REMOVE_TODO, SET_TODOS, TOGGLE_TODO } from '../types/todos';
import { ToDosActionType } from '../actions/todos';

const initialState: ToDoItem[] = [
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
    title: 'Сделать компонент todo',
    completed: true,
  },
];

export const todos = (state = initialState, action: ToDosActionType) => {
  switch (action.type) {
    case SET_TODOS:
      return [...action.payload];
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(item => item.id !== action.payload);
    case CHANGE_TODO_TITLE:
      return state.map(todo => todo.id === action.payload.id ? {...todo, title: action.payload.title} : todo);
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
    default:
      return state;
  }
};
