import React, { useState } from 'react';
import Task, { TaskType } from './Task';

interface IAddTaskProps {
  onAdd: Function;
}

const AddTask = ({ onAdd }: IAddTaskProps) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setText(e.currentTarget.value)
          }
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add day and time"
          value={day}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setDay(e.currentTarget.value)
          }
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={String(reminder)}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setReminder(e.currentTarget.checked)
          }
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block"></input>
    </form>
  );
};

export default AddTask;
