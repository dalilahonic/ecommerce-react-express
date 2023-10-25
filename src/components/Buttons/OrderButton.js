import classes from './OrderButton.module.css';

function OrderButton({ price, amount, optionsPrice }) {
  let finalPrice = price * amount;
  const priceOfOptions = optionsPrice.reduce(
    (acc, curr) => acc + curr.price,
    0
  );
  finalPrice += priceOfOptions * amount;

  return (
    <button className={classes.btnAddToOrder}>
      <span>Add to Order</span>
      <span>${finalPrice.toFixed(2)}</span>
    </button>
  );
}

export default OrderButton;
