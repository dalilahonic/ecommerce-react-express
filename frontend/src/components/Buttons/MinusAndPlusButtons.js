import { useDispatch } from 'react-redux';
import classes from './MinusAndPlusButtons.module.css';
import { cartAmountActions } from '../../store';

function MinusAndPlusButtons({
  className = '',
  amount,
  setAmount,
  title,
  onAddItem,
  onRemoveItem,
}) {
  const dispatch = useDispatch();
  function handlePlusClick() {
    // adding items from Cart Window and Cart
    if (onAddItem) {
      onAddItem(title);
      dispatch(cartAmountActions.increment(1));
    }

    // adding items from Popup
    if (setAmount) setAmount((prev) => prev + 1);
  }

  function handleMinusClick() {
    if (amount > 1) {
      if (setAmount) setAmount((prev) => prev - 1);
      if (onRemoveItem) onRemoveItem(title);
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
