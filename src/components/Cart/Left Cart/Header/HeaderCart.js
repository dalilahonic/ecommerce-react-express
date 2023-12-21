import { useSelector } from 'react-redux';
import classes from './HeaderCart.module.css';

function HeaderCart() {
  const amountCart = useSelector(
    (state) => state.cartAmount.amount
  );
  return (
    <div className={classes.headerCart}>
      <h1>Your Cart</h1>
      <p>Your Order({amountCart})</p>
    </div>
  );
}

export default HeaderCart;
