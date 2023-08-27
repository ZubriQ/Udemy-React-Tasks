import { FaThumbtack, FaTrashAlt, FaRegCheckSquare } from 'react-icons/fa';

import styles from './Todo.module.css';

function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todoCard} onDoubleClick={() => deleteTodo(todo.id)}>
      <FaThumbtack className={styles.todoIcon} />
      <h4 className={styles.todoText}>{todo.text}</h4>
      <FaTrashAlt className={styles.deleteIcon} />
      <FaRegCheckSquare className={styles.checkIcon} />
    </div>
  );
}

export default Todo;
