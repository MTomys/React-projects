import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { TaskType } from './components/Task';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const defaultState = [
    {
      id: 0,
      text: 'Doctors Appointment',
      day: 'Feb 4th at 2:30 pm',
      reminder: true,
    },
    {
      id: 1,
      text: 'Meeting at school',
      day: 'Feb 5th at 3:50 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'food shopping',
      day: 'Feb 4th at 2:30 pm',
      reminder: false,
    },
  ];

  const [tasks, setTasks] = useState<TaskType[]>(defaultState);

  // Delete task function
  const deleteTask = (id: number) => {
    console.log('Deleting task: ', id);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // Toggle reminder
  const toggleReminder = (id: number) => {
    console.log('In toggle reminder!');
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add task
  const addTask = (task: TaskType) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };

  const someTitle = 'Title';

  return (
    <div className="container">
      <Header
        title={someTitle}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      ></Header>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        ></Tasks>
      ) : (
        'No tasks to show...'
      )}
    </div>
  );
}

export default App;
