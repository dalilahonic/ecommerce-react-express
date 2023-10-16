import { useContext } from 'react';
import SectionsContext from '../../context/SectionsContext';
import classes from './Links.module.css';

function Links({
  transformLink,
  handleClickScroll,
  setIsDropdownOpen,
}) {

  return (
    <div className={classes.links}>
      <ul>
        {sections.slice(0, 7).map((link, index) => {
          return index < 6 ? (
            <li
              onClick={() =>
                handleClickScroll(`meal${index}`)
              }
              key={index}
            >
              {transformLink(link)}
            </li>
          ) : (
            <li
              key={index}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              More
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Links;
