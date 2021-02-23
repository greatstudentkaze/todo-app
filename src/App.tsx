import React, { useState } from 'react';

import ToDoList from './components/todo-list';
import { ToDoItem as TodoItemType } from './types';
import ToDoAddingForm from './components/todo-adding-form';

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

  const handleRemoveToDo = (id: string) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  const updateToDoTitle = (id: string, title: string) => {
    setTodos(prevState =>
      prevState.map(todo => todo.id === id ? {...todo, title} : todo)
    );
  };

  const addToDo = (newToDo: TodoItemType) => {
    setTodos([...todos, newToDo])
  };

  return (
    <>
      <ToDoAddingForm addToDo={addToDo} />
      <ToDoList items={todos} handleToggleToDo={handleToggleToDo} handleRemoveToDo={handleRemoveToDo} updateToDoTitle={updateToDoTitle} />
    </>
  );
};

export default App;
