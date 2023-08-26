import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo, setNewTodoInput }) {
  return (
    <form className={styles.todoForm}>
      <input
        className={styles.todoInput}
        placeholder="Enter a new todo"
        // onChange={(e) => setNewTodoInput(e.target.value)}
      />
      <button type="submit">Add</button>
      {/*<Button buttonName="Add" addTodo={addTodo} />*/}
    </form>
  );
}

export default TodoForm;
