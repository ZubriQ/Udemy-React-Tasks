import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink
        to="."
        end
        // Option 3 that shows how we can update css:
        style={({ isActive }) =>
          isActive ? { color: '#95d779', textDecoration: 'none' } : {}
        }
      >
        Home
      </NavLink>
      <NavLink to="courses">Courses</NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to="contacts"
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
