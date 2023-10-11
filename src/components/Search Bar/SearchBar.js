import classes from './SearchBar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ links }) {
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

  return (
    <div className={classes.navigation}>
      <div className={classes.searchBarParent}>
        <div className={classes.search}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className={classes.links}>
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>{transformLink(link)}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
