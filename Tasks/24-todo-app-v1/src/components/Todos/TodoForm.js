import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm() {
  return (
    <div className={styles.todoForm}>
      <input className={styles.todoInput} placeholder="Enter a new todo" />
      <Button buttonName="Add" />
    </div>
  );
}

export default TodoForm;