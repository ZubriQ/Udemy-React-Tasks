import styles from './TodoList.module.css';
import Todo from './Todo';

function TodoList({ todos }) {
  return (
    <div className={styles.todoList}>
      {todos.map((todo, index) => {
        return <Todo key={index} text={todo} />;
      })}
    </div>
  );
}

export default TodoList;
