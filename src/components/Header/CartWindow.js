import classes from './CartWindow.module.css';

function CartWindow() {
  return (
    <div className={classes.cartWindow}>
      <h3>Your Cart</h3>
      <h4>Your Cart Is Empty</h4>
    </div>
  );
}

export default CartWindow;
