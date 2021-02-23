import { ToDoItem } from '../types';

type SearchToDosType = (todos: ToDoItem[], searchQuery: string) => ToDoItem[];

const searchToDos: SearchToDosType = (todos, searchQuery) => {
  if (searchQuery.trim()) {
    todos = todos.filter(todo => todo.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  return todos;
};

export default searchToDos;
