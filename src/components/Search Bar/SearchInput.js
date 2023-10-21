import classes from './SearchInput.module.css';
import { useState } from 'react';

function SearchInput({
  isSearchOpen,
  onChangeInputValue,
  onExit,
}) {
  const [inputValue, setInputValue] = useState('');

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
      <span onClick={() => onExit()}> X </span>
    </div>
  );
}

export default SearchInput;
