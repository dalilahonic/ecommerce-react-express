import classes from './SearchBar.module.css';
import Dropdown from '../Dropdown/Dropdown';
import { useCallback, useState } from 'react';
import NavBar from '../Nav Bar/NavBar';
import SearchInput from '../Search Input/SearchInput';

function SearchBar({
  isSearchOpen,
  onChangeInputValue,
  onExit,
}) {
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const toggleDropdown = useCallback(
    (isOpen) => setIsDropdownOpen(isOpen),
    []
  );

  if (isSearchOpen) {
    return (
      <SearchInput
        onChangeInputValue={onChangeInputValue}
        onExit={onExit}
      />
    );
  }

  return (
    <div className={classes.links}>
      <NavBar
        scrollToSection={scrollToSection}
        toggleDropdown={toggleDropdown}
      />
      {isDropdownOpen && (
        <Dropdown
          scrollToSection={scrollToSection}
          toggleDropdown={toggleDropdown}
        />
      )}
    </div>
  );
}
export default SearchBar;
