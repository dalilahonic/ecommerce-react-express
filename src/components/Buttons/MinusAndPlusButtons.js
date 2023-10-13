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

  return (
    <div className={classes.minusAndPlus}>
      <button
        onClick={handleMinusClick}
        className={`${
          amount === 1
            ? classes.disabledButton
            : classes.minus
        }`}
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

// const disabledButton =
//   amount === 1
//     ? {
//         cursor: 'not-allowed',
//         backgroundColor: '#F8F8F8',
//         color: '#8D8D8D',
//       }
//     : {};
