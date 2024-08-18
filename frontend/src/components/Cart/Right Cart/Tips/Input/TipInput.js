import classes from './TipInput.module.css';
import { useState } from 'react';

function TipInput({ onSubmitTip }) {
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitTip(Number(inputValue));
  }

  return (
    <>
      <form
        className={classes.tipForm}
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type='number'
          className={classes.tipInput}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={classes.tipButton}>Apply</button>
      </form>
    </>
  );
}

export default TipInput;
