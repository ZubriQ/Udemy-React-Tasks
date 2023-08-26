import styles from './Todo.module.css';

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todoCard} onDoubleClick={() => deleteTodo(index)}>
      <img
        src={`${process.env.PUBLIC_URL}/favicon-32x32.png`}
        alt="icon"
        className={styles.todoIcon}
      />
      <p>{todo}</p>
    </div>
  );
}

export default Todo;
