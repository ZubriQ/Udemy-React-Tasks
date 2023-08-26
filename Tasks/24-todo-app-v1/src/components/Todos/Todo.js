import styles from './Todo.module.css';

function Todo({ todo }) {
  return (
    <div className={styles.todoCard}>
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
