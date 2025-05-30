import './App.css';
import TodoForm from './components/TodoForm.js';

function App() {
  return (
    <div className="App">
      <p className=" absolute flex text-xl font-bold text-white m-5 z-20">PlanPoint</p>
      <TodoForm />
    </div>
  );
}

export default App;
