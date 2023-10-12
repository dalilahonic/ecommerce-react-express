import classes from './MinusAndPlusButtons.module.css';
import { useState } from 'react';

function MinusAndPlusButtons() {
  const [amount, setAmount] = useState(1);

  function handlePlusClick() {
    setAmount((prev) => prev + 1);
  }

  function handleMinusClick() {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  }

  let disabledButton;

  if (amount === 1) {
    disabledButton = {
      cursor: 'not-allowed',
      backgroundColor: '#F8F8F8',
      color: '#8D8D8D',
    };
  }

  return (
    <div className={classes.minusAndPlus}>
      <button
        onClick={handleMinusClick}
        className={classes.minus}
        style={disabledButton}
      >
        -
      </button>
      <p className={classes.quantity}>{amount}</p>
      <button
        onClick={handlePlusClick}
        className={classes.plus}
      >
        +
      </button>
    </div>
  );
}

export default MinusAndPlusButtons;
