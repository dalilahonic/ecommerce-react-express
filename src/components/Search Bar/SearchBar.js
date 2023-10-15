import classes from './SearchBar.module.css';

import { useContext, useState } from 'react';
import SectionsContext from '../../context/SectionsContext';
import SearchIcon from './SearchIcon';
import SearchInput from './SearchInput';
import Links from './Links';

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
              <div
                onMouseLeave={() =>
                  setIsDropdownOpen(false)
                }
                className={classes.dropdown}
              >
                <ul>
                  {sections.slice(6).map((link, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() =>
                          handleClickScroll(
                            `meal${index + 6}`
                          )
                        }
                      >
                        {transformLink(link)}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
