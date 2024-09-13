import { useEffect, useRef, useState } from 'react';
import classes from './Dropdown.module.css';
import api from '../../../../services/axios';

function Dropdown({ toggleDropdown, scrollToSection }) {
  const [categories, setCategories] = useState([]);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get('/categories');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      toggleDropdown(false);
    }, 300);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={classes.dropdown}
    >
      <ul>
        {categories?.slice(6)?.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() =>
                scrollToSection(
                  category.name
                    .toLowerCase()
                    .split(' ')
                    .join('-')
                )
              }
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
