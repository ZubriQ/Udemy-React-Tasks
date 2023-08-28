import courses from '../../data/courses';
import Course from './Course';
import styles from './Courses.module.css';

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      {courses.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
};

export default Courses;
