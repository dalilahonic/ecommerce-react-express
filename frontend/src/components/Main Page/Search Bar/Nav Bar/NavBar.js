import { useEffect, useState } from 'react';
import classes from './NavBar.module.css';
import api from '../../../../services/axios';

function NavBar({ handleClickScroll, setIsDropdownOpen }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get(`/categories`);
        setCategories(response.data);
      } catch {}
    };

    fetchCategories();
  }, []);

  return (
    <div className={classes.links}>
      <ul>
        {categories.slice(0, 5)?.map((category, index) => {
          return (
            <li
              onClick={() =>
                handleClickScroll(`meal${index}`)
              }
              key={index}
            >
              {' '}
              {category.name}
            </li>
          );
        })}
        <li onMouseEnter={() => setIsDropdownOpen(true)}>
          More
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
