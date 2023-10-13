import classes from './OrderButton.module.css';

function OrderButton({ price }) {
  return (
    <button className={classes.btnAddToOrder}>
      <span>Add to Order</span>
      <span>${price.toFixed(2)}</span>
    </button>
  );
}

export default OrderButton;
