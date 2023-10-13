import classes from './SearchBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function SearchBar({ links, onChangeInputValue }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);

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

  function handleClick() {
    setIsSearchOpen(true);
  }

  function handleExitClick() {
    setIsSearchOpen(false);
  }

  function handleChange(value) {
    setInputValue(value);
    onChangeInputValue(value);
  }

  function handleClickScroll(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={classes.navigation}>
      <div className={classes.searchBarParent}>
        <div
          onClick={handleClick}
          className={`${classes.search} ${
            isSearchOpen && classes.openSearch
          }`}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        {isSearchOpen ? (
          <div className={classes.inputSearchDiv}>
            <input
              value={inputValue}
              onChange={(e) => handleChange(e.target.value)}
              className={`${
                isSearchOpen && classes.openSearch
              }`}
              placeholder='Search'
            />
            <span onClick={handleExitClick}> X </span>
          </div>
        ) : (
          <div className={classes.links}>
            <ul>
              {links.slice(0, 7).map((link, index) => {
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
                    onMouseEnter={() =>
                      setIsDropdownOpen(true)
                    }
                  >
                    More
                  </li>
                );
              })}
            </ul>
            {isDropdownOpen && (
              <div
                onMouseLeave={() =>
                  setIsDropdownOpen(false)
                }
                className={classes.dropdown}
              >
                <ul>
                  {links.slice(6).map((link, index) => {
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
