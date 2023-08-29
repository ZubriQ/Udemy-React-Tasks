import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import courses from '../data/courses';
import { useState } from 'react';

function sortCourses(courses, key) {
  if (!key) {
    return courses;
  }

  const sortedCourses = [...courses];
  sortedCourses.sort((a, b) => (a[key] < b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={course.slug} className="courseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;