import classes from './OrderButton.module.css';
import useCalculatePrice from '../../hooks/useCalculatePrice';
import { useContext } from 'react';
import OrderContext from '../../context/OrderContext';

function OrderButton({
  price,
  amount,
  optionsPrice,
  onOrder,
}) {
  let finalPrice = useCalculatePrice(
    price,
    amount,
    optionsPrice
  );


  function handleClick() {
    onOrder(finalPrice);
  }

  return (
    <button
      onClick={() => handleClick()}
      className={classes.btnAddToOrder}
    >
      <span>Add to Order</span>
      <span>${finalPrice.toFixed(2)}</span>
    </button>
  );
}

export default OrderButton;
