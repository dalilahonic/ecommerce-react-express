import classes from './OrderButton.module.css';

function OrderButton({ price, amount }) {
  let finalPrice = price * amount;
  return (
    <button className={classes.btnAddToOrder}>
      <span>Add to Order</span>
      <span>${finalPrice.toFixed(2)}</span>
    </button>
  );
}

export default OrderButton;
