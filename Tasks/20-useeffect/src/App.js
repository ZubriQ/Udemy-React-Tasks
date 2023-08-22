import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);

  useEffect(
    () => {
      console.log('useEffect called');
      fetch('https://jsonplaceholder.typicode.com/todos/7')
        .then((response) => response.json())
        .then((json) => setTodo(json));
    },
    [
      /* callback function could be used every time a prop updated in this array*/
    ]
  );

  console.log('App rendered');
  console.log(todo);

  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>;
}

export default App;
