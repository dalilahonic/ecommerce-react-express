import classes from './HeaderCart.module.css';

function HeaderCart({ amountCard }) {
  return (
    <div className={classes.headerCart}>
      <h1>Your Cart</h1>
      <p>Your Order({amountCard})</p>
    </div>
  );
}

export default HeaderCart;
