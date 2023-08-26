import styles from './Button.module.css';

function Button(props) {
  return (
    <button onClick={props.addTodo} className={styles.todoButton}>
      {[props.buttonName]}
    </button>
  );
}

export default Button;
