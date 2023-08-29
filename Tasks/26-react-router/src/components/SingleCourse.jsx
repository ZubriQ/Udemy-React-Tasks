import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import courses from '../data/courses';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const course = courses.find((course) => course.slug === params.courseSlug);

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
    // Also don't forget the array of dependencies
  }, [course, navigate]);

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
