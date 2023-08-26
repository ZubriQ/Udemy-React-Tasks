import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  return (
    <div className="App">
      <h1>
        Hello, this is my Todo app, which is made with my React programming
        skills
      </h1>
      <TodoForm />
      <TodoList></TodoList>
    </div>
  );
}

export default App;
