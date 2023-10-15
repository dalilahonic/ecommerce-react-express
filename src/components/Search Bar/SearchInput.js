import classes from './SearchInput.module.css';
import { useState } from 'react';

function SearchInput({ isSearchOpen, onChangeInputValue , handleExit}) {
  const [inputValue, setInputValue] = useState('');

  function handleExitClick() {
    handleExit()
  }

  function handleChange(value) {
    setInputValue(value);
    onChangeInputValue(value);
  }
  return (
    <div className={classes.inputSearchDiv}>
      <input
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
        className={`${isSearchOpen && classes.openSearch}`}
        placeholder='Search'
      />
      <span onClick={handleExitClick}> X </span>
    </div>
  );
}

export default SearchInput;
