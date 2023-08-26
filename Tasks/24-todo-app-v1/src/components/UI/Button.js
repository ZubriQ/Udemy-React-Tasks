import styles from './Button.module.css';

function Button(props) {
  return (
    <button
      onClick={() => console.log('onClick called')}
      className={styles.todoButton}
    >
      {[props.buttonName]}
    </button>
  );
}

export default Button;
