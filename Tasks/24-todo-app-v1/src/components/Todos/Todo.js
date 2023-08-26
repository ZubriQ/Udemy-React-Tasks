import styles from './Todo.module.css';

function Todo({ text }) {
  return (
    <div className={styles.todoCard}>
      <img
        src={`${process.env.PUBLIC_URL}/favicon-32x32.png`}
        alt="icon"
        className={styles.todoIcon}
      />
      <p>{text}</p>
    </div>
  );
}

export default Todo;
