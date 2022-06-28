import Task from './Task';
import { TaskType } from './Task';

export interface ITasksListProps {
  tasks: TaskType[];
  onDelete: Function;
  onToggle: Function;
}

const Tasks = ({ tasks, onDelete, onToggle }: ITasksListProps) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
