import classes from './SauceHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function SauceHeader({ openDropDown, text }) {
  return (
    <div className={classes.options}>
      <p>{text}</p>
      <span onClick={openDropDown}>
        <p>Optional</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ color: 'black' }}
        />
      </span>
    </div>
  );
}

export default SauceHeader;
