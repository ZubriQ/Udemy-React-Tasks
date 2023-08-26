import './App.css';
import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([
    'Initial todo',
    'The second todo',
    'Learn React',
    'Learn CSS',
  ]);
  function addTodo() {
    setTodos((prevTodos) => [...prevTodos, 'Added new todo']);
  }

  const [newTodoInput, setNewTodoInput] = useState('');

  return (
    <div className="App">
      <h1>
        Hello, this is my Todo app, which is made with my React programming
        skills
      </h1>
      <TodoForm addTodo={addTodo} setNewTodoInput={setNewTodoInput} />
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default App;
