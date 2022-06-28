import { FaTimes } from 'react-icons/fa';

export type TaskType = {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
};

export interface ITaskProps {
  task: TaskType;
  onDelete: Function;
  onToggle: Function;
}

const Task = ({ task, onDelete, onToggle }: ITaskProps) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
