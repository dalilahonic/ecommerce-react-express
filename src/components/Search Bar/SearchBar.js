import classes from './SearchBar.module.css';
import SearchInput from './SearchInput';
import Dropdown from './Dropdown';
import Links from './Links';
import { useState } from 'react';

function SearchBar({
  isSearchOpen,
  onChangeInputValue,
  onExit,
}) {
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);

  function handleClickScroll(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return isSearchOpen ? (
    <SearchInput
      onChangeInputValue={onChangeInputValue}
      onExit={onExit}
    />
  ) : (
    <div className={classes.links}>
      <Links
        handleClickScroll={handleClickScroll}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      {isDropdownOpen && (
        <Dropdown
        handleClickScroll={handleClickScroll}
        setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </div>
  );
}
export default SearchBar;
