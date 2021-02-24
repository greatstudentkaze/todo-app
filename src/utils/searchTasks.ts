import { TaskItem } from '../types';

type SearchTasksType = (tasks: TaskItem[], searchQuery: string) => TaskItem[];

const searchTasks: SearchTasksType = (tasks, searchQuery) => {
  if (searchQuery.trim()) {
    tasks = tasks.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  return tasks;
};

export default searchTasks;
