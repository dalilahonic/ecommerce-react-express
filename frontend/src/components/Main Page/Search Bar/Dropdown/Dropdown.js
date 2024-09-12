import { useEffect, useState } from 'react';
import classes from './Dropdown.module.css';
import api from '../../../../services/axios';

function Dropdown({
  setIsDropdownOpen,
  handleClickScroll,
}) {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await api.get('/categories');
      setCategories(response.data);
    };

    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <div
      onMouseLeave={() => setIsDropdownOpen(false)}
      className={classes.dropdown}
    >
      <ul>
        {categories.slice(5)?.map((category, index) => {
          return (
            <li
              key={index}
              onClick={() =>
                handleClickScroll(`meal${index + 6}`)
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
