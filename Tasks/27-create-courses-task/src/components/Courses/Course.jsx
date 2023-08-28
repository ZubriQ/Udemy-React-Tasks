import { Link } from 'react-router-dom';
import styles from './Course.module.css';

const Course = ({ id, title, slug }) => {
  return (
    <div className={styles.courseContainer}>
      <Link to={slug}>{title}</Link>
    </div>
  );
};

export default Course;
