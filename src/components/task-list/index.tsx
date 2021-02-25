import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../redux/reducers';
import searchTasks from '../../utils/searchTasks';

import TaskItem from '../task-item';

const mapStateToProps = ({ tasks, filter }: RootState) => ({
  tasks: searchTasks(tasks, filter.searchQuery),
});

type StateProps = ReturnType<typeof mapStateToProps>

const TaskList = ({ tasks }: StateProps) => {

  return (
    <ul className="task-list">
      {
        tasks.map(task => <TaskItem key={task.id} data={task} />)
      }
    </ul>
  );
};

export default connect(mapStateToProps)(TaskList);
