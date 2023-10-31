import classes from './MainSearch.module.css';
import { useState } from 'react';
import SearchIcon from '../Search Icon/SearchIcon';
import SearchBar from '../Search/SearchBar';

function MainSearch({ onChangeInputValue, setInputValue }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function handleExit() {
    setIsSearchOpen(false);
    setInputValue('');
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

export default MainSearch;
