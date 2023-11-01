import classes from './Cart.module.css';

function Cart({ orderInfo }) {
  return (
    <div className={classes.cart}>
      <div className={classes.cartChild}>
        <div className={classes.yourCartMain}>
          <div>
            <h1>Your Cart</h1>
            <p>Your Order(x items)</p>
          </div>
          <div className={classes.item}>
            {orderInfo.length > 0 ? (
              orderInfo.map((el) => {
                return (
                  <>
                    <p>{el.title}</p>
                    <p>{el.price}</p>
                    <p>{el.amount}</p>
                  </>
                );
              })
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
