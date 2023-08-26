import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList() {
  return (
    <div className={styles.todoList}>
      <Todo key={1} />
      <Todo key={2} />
      <Todo key={3} />
      <Todo key={4} />
    </div>
  );
}

export default TodoList;
