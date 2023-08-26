import { useState } from 'react';
import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([
    'Initial todo',
    'The second todo',
    'Learn React',
    'Learn CSS',
  ]);

  return (
    <div className={styles.todoList}>
      {todos.map((todo, index) => {
        return <Todo key={index} text={todo} />;
      })}
    </div>
  );
}

export default TodoList;
