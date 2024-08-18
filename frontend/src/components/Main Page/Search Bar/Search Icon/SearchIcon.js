import classes from './SearchIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchIcon({ setIsSearchOpen, isSearchOpen }) {
  function handleClick() {
    setIsSearchOpen(true);
  }

  return (
    <div
      onClick={handleClick}
      className={`${classes.search} ${
        isSearchOpen && classes.openSearch
      }`}
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
}

export default SearchIcon;
