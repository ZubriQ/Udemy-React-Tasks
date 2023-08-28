import { useParams } from 'react-router-dom';
import courses from '../../data/courses';

const SingleCourse = () => {
  const { slug } = useParams();
  const currentCourse = courses.find((item) => item.slug === slug);

  return (
    <>
      <h1>
        This is {currentCourse.id} {currentCourse.title}
      </h1>
    </>
  );
};

export default SingleCourse;
