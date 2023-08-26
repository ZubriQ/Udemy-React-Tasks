import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo, setNewTodoInput }) {
  return (
    <div className={styles.todoForm}>
      <input
        className={styles.todoInput}
        placeholder="Enter a new todo"
        onChange={(e) => setNewTodoInput(e.target.value)}
      />
      <Button buttonName="Add" addTodo={addTodo} />
    </div>
  );
}

export default TodoForm;
