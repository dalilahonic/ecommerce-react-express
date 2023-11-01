import { useContext } from 'react';
import classes from './Dropdown.module.css';
import SectionsContext from '../../../../context/SectionsContext';
import useTransformText from '../../../../hooks/useTransformText';

function Dropdown({
  setIsDropdownOpen,
  handleClickScroll,
}) {
  let sections = useContext(SectionsContext);
  sections = sections.slice(6);
  const transformedLinks = useTransformText(sections);

  return (
    <div
      onMouseLeave={() => setIsDropdownOpen(false)}
      className={classes.dropdown}
    >
      <ul>
        {sections.map((_, index) => {
          return (
            <li
              key={index}
              onClick={() =>
                handleClickScroll(`meal${index + 6}`)
              }
            >
              {transformedLinks[index]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
