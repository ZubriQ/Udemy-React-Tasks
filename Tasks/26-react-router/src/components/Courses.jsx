import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import courses from '../data/courses';
import Select from 'react-select';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
  if (!key || !SORT_KEYS.includes(key)) {
    return courses;
  }

  const sortedCourses = [...courses];
  sortedCourses.sort((a, b) => (a[key] < b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  const handleSortChange = (selectedOption) => {
    setSortKey(selectedOption.value);
    navigate(`?sort=${selectedOption.value}`);
  };

  const sortOptions = SORT_KEYS.map((key) => ({ label: key, value: key }));

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>
        {sortKey && SORT_KEYS.includes(sortKey)
          ? `Courses sorted by ${sortKey}`
          : 'Courses'}
      </h1>
      <Select
        value={sortOptions.find((option) => option.value === sortKey)}
        onChange={handleSortChange}
        options={sortOptions}
      />
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
