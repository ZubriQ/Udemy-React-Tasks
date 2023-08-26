import { FaIoxhost } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todoCard} onDoubleClick={() => deleteTodo(index)}>
      <FaIoxhost className={styles.todoIcon} />
      <p>{todo}</p>
    </div>
  );
}

export default Todo;
