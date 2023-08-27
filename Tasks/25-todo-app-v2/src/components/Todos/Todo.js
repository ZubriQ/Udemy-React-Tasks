import { FaThumbtack, FaTrashAlt, FaRegCheckSquare } from 'react-icons/fa';

import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todoCard} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <FaThumbtack className={styles.todoIcon} />
      <h4 className={styles.todoText}>{todo.text}</h4>
      <FaTrashAlt
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaRegCheckSquare
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
