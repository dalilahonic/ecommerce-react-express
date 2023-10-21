import classes from './Search.module.css';
import { useState } from 'react';
import SearchIcon from './SearchIcon';
import SearchBar from './SearchBar';

function Search({ onChangeInputValue }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function handleExit() {
    setIsSearchOpen(false);
  }

  return (
    <>
      <div className={classes.navigation}>
        <div className={classes.searchBarParent}>
          <SearchIcon
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
          />
          <SearchBar
            isSearchOpen={isSearchOpen}
            onChangeInputValue={onChangeInputValue}
            onExit={handleExit}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
