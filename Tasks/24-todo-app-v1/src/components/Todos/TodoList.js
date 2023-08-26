import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoList}>
      {!todos.length && <h2>The todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
