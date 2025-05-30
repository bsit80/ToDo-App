import { useState } from 'react';
import bgImage from '../assets/background.jpg';

function TodoForm() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

const addTask = () => {
  if (task.trim() === '') return;

  const timestamp = new Date().toLocaleString(); // generate current date/time
  const newTask = {
    id: Date.now(),
    text: task,
    completed: false,
    time: timestamp,
  };

  setTasks([...tasks, newTask]);
  setTask('');
console.log([...tasks, newTask]);

};

  const toggleComplete = (id) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#31487a] text-[#8fb3e2] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Main content */}
      <div className="w-full h-[500px] max-w-md bg-[#1e2e4f] shadow-lg rounded-lg p-6 z-10 relative overflow-hidden">
        <h1 className="text-2xl font-bold mb-4 text-left text-[#8fb3f1]">Todo List</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l outline-none"
            placeholder="Add a new todo..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
          />
          <button
            onClick={addTask}
            className="bg-[#8fb3f1] text-white ml-1 px-4 rounded-r hover:bg-[#8fb3f1]/50"
          >
            Add
          </button>
        </div>

        <ul className="overflow-y-auto h-[calc(100%-130px)] pr-1 scrollbar-hide">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="bg-[#24365c] text-white flex items-start justify-between p-3 rounded mb-2 shadow-xl"
            >
              <div className="flex gap-2 items-start w-full">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleComplete(t.id)}
                  className="mt-1 accent-[#8fb3f1] "
                />
                <div className="w-full overflow-hidden">
                  <p
                    className={`truncate w-[300px] ${
                      t.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {t.text}
                  </p>
                  <p className="text-xs text-gray-300 mt-1">{t.time}</p>
                </div>
              </div>
              <button
                onClick={() => deleteTask(t.id)}
                className="ml-2"
                title="Delete"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 hover:fill-red-500"
                >
                  <path d="M3 6h18v2H3V6zm2 3h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9zm5 2v8h2v-8H10zm4 0v8h2v-8h-2z" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoForm;
