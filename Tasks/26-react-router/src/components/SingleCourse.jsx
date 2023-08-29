import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
import NotFound from './NotFound';
import { useEffect } from 'react';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const course = courses.find((course) => course.slug === params.courseSlug);

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
    // Also don't forget the array of dependencies
  }, [course]);

  // Option 2:
  // Showing NotFound component
  // if (!course) {
  //   return <NotFound />;
  // }

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
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
