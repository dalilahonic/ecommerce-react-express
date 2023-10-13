import classes from './SauceHeader.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function SauceHeader({openDropDown}) {

  return (
    <div className={classes.wouldYouLikeSauce}>
      <p>Whould You Like To Add Extra Sauce</p>
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
