import { FaIoxhost } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo }) {
  return (
    <div className={styles.todoCard} onDoubleClick={() => deleteTodo(todo.id)}>
      <FaIoxhost className={styles.todoIcon} />
      <p>{todo.text}</p>
    </div>
  );
}

export default Todo;
