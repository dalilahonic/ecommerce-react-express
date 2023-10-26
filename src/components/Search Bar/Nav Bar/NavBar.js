import { useContext } from 'react';
import SectionsContext from '../../../context/SectionsContext';
import classes from './NavBar.module.css';
import useTransformText from '../../../hooks/useTransformText';

function NavBar({ handleClickScroll, setIsDropdownOpen }) {
  const sections = useContext(SectionsContext);

  const transformed = useTransformText(sections);

  return (
    <div className={classes.links}>
      <ul>
        {sections.slice(0, 7).map((_, index) => {
          return index < 6 ? (
            <li
              onClick={() =>
                handleClickScroll(`meal${index}`)
              }
              key={index}
            >
              {transformed[index]}
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

export default NavBar;
