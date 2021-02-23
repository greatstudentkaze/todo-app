import React, { useState } from 'react';

import ToDoList from './components/todo-list';
import { ToDoItem as TodoItemType } from './types';

const initialTodos: TodoItemType[] = [
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

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(initialTodos);

  const handleToggleToDo = (id: string) => {
    setTodos(prevState =>
      prevState.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    );
  };

  return (
    <ToDoList items={todos} handleToggleToDo={handleToggleToDo}/>
  );
};

export default App;
