import React from 'react';

import ToDoItem from '../todo-item';
import { ToDoItem as ToDoItemType } from '../../types';

type Props = {
  items: ToDoItemType[],
  handleToggleToDo: (id: string) => void,
  handleRemoveToDo: (id: string) => void,
};

const ToDoList = ({ items, handleToggleToDo, handleRemoveToDo }: Props) => {
    return (
        <ul className="todo-list">
          {
            items.map(item => <ToDoItem key={item.id} data={item} onToggle={handleToggleToDo} onRemove={handleRemoveToDo} />)
          }
        </ul>
    );
};

export default ToDoList;
