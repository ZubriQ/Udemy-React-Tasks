import styles from './Button.module.css';

function Button({ onClick, children, title, disabled = false }) {
  return (
    <button
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={styles.button}
    >
      {children}
    </button>
  );
}

export default Button;
