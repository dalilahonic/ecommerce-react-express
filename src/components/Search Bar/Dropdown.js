import { useContext } from 'react';
import classes from './Dropdown.module.css';
import SectionsContext from '../../context/SectionsContext';

function Dropdown({
  transformLink,
  setIsDropdownOpen,
  handleClickScroll,
}) {
  const sections = useContext(SectionsContext);

  return (
    <div
      onMouseLeave={() => setIsDropdownOpen(false)}
      className={classes.dropdown}
    >
      <ul>
        {sections.slice(6).map((link, index) => {
          return (
            <li
              key={index}
              onClick={() =>
                handleClickScroll(`meal${index + 6}`)
              }
            >
              {transformLink(link)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
