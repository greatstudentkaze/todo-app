import React from 'react';
import { connect } from 'react-redux';

import ToDoItem from '../todo-item';
import { RootState } from '../../App';
import searchToDos from '../../utils/searchToDos';

const mapStateToProps = ({ todos, filter }: RootState) => ({
  todos: searchToDos(todos, filter.searchQuery),
});

type StateProps = ReturnType<typeof mapStateToProps>

const ToDoList = ({ todos }: StateProps) => {

    return (
        <ul className="todo-list">
          {
            todos.map(todo => <ToDoItem key={todo.id} data={todo} />)
          }
        </ul>
    );
};

export default connect(mapStateToProps)(ToDoList);
