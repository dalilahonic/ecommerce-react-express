import classes from './SearchBar.module.css';
import Dropdown from '../Dropdown/Dropdown';
import { useState } from 'react';
import NavBar from '../Nav Bar/NavBar';
import SearchInput from '../Search Input/SearchInput';

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
      <NavBar
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
