import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoList}>
      {!todos.length && <h2>The todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
