import classes from './SearchBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function SearchBar({ links }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  return (
    <div className={classes.navigation}>
      <div className={classes.searchBarParent}>
        <div
          onClick={handleClick}
          className={classes.search}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        {isSearchOpen ? (
          <div className={classes.inputSearchDiv}>
            <input placeholder='Search' />
            <span onClick={handleExitClick}> X </span>
          </div>
        ) : (
          <div className={classes.links}>
            <ul>
              {links.map((link, index) => {
                return (
                  <li key={index}>{transformLink(link)}</li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
