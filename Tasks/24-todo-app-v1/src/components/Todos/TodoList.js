import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos }) {
  if (todos.length === 0) {
    return <h2>The todo list is empty</h2>;
  }

  return (
    <div className={styles.todoList}>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
