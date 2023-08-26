import styles from './Button.module.css';

function Button(props) {
  return <button className={styles.todoButton}>{[props.buttonName]}</button>;
}

export default Button;
