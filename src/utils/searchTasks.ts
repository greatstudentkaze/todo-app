import { Tasks } from '../types';

type SearchTasksType = (tasks: Tasks, searchQuery: string) => Tasks;

const searchTasks: SearchTasksType = (tasks, searchQuery) => {
  if (searchQuery.trim()) {
    tasks = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  return tasks;
};

export default searchTasks;
