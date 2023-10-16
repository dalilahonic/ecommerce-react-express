import classes from './SearchBar.module.css';

import { useContext, useState } from 'react';
import SectionsContext from '../../context/SectionsContext';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';
import Links from './Links';
import Dropdown from './Dropdown';

function SearchBar({ onChangeInputValue }) {
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function handleExit() {
    setIsSearchOpen(false);
  }

  function handleClickScroll(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function transformLink(link) {
    return link
      .split('_')
      .map(
        (el) =>
          el.slice(0, 1).toUpperCase() +
          el.slice(1).toLowerCase()
      )
      .join(' ');
  }

  const sections = useContext(SectionsContext);

  return (
    <div className={classes.navigation}>
      <div className={classes.searchBarParent}>
        <SearchIcon
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        {isSearchOpen ? (
          <SearchInput
            onChangeInputValue={onChangeInputValue}
            handleExit={handleExit}
          />
        ) : (
          <div className={classes.links}>
            <Links
              transformLink={transformLink}
              handleClickScroll={handleClickScroll}
              setIsDropdownOpen={setIsDropdownOpen}
            />
            {isDropdownOpen && (
              <Dropdown
                transformLink={transformLink}
                setIsDropdownOpen={setIsDropdownOpen}
                handleClickScroll={handleClickScroll}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
