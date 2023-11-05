import classes from './MinusAndPlusButtons.module.css';

function MinusAndPlusButtons({
  amount,
  setAmount,
  className = '',
  onAddAmount,
  onAdd,
}) {
  function handlePlusClick() {
    if (setAmount) setAmount((prev) => prev + 1);
    if (onAddAmount) onAddAmount('+');
    if (onAdd) onAdd('+');
  }

  function handleMinusClick() {
    if (amount > 1) {
      if (setAmount) {
        setAmount((prev) => prev - 1);
      }
      if (onAddAmount) onAddAmount('-');
      if (onAdd) onAdd('-');
    }
  }

  return (
    <div
      className={`${classes.minusAndPlus} ${classes[className]}`}
    >
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
