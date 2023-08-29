import { Link, useParams } from 'react-router-dom';
import courses from '../data/courses';
import NotFound from './NotFound';

const SingleCourse = () => {
  const params = useParams();
  const course = courses.find((course) => course.slug === params.courseSlug);
  if (!course) {
    return <NotFound />;
  }

  return (
    <>
      <h1>{course.title}</h1>
      <h2>{course.slug}</h2>
      <h3>{course.id}</h3>
      {/*Option 1: Absolute link*/}
      {/*<Link to="/courses">All courses</Link>*/}
      {/*Option 2: It's advised to use relative links*/}
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
};

export default SingleCourse;
