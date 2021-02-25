import React from 'react';
import { connect } from 'react-redux';

import TaskItem from '../task-item';
import { RootState } from '../../App';
import searchTasks from '../../utils/searchTasks';

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
