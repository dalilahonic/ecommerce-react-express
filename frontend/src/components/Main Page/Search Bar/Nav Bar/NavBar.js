import { useEffect, useRef, useState } from 'react';
import classes from './NavBar.module.css';
import api from '../../../../services/axios';

function NavBar({ toggleDropdown, scrollToSection }) {
  const [categories, setCategories] = useState([]);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get(`/categories`);
        setCategories(response.data || []);
      } catch {}
    };

    fetchCategories();
  }, []);

  const handleMouseEnter = () => {
    console.log(closeTimeoutRef);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    toggleDropdown(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      toggleDropdown(false);
    }, 300);
  };

  return (
    <div className={classes.links}>
      <ul>
        {categories?.slice(0, 6).map((category, index) => {
          return (
            <li
              onClick={() =>
                scrollToSection(
                  category.name
                    .toLowerCase()
                    .split(' ')
                    .join('-')
                )
              }
              key={index}
            >
              {category.name}
            </li>
          );
        })}
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          More
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
