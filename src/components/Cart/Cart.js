import classes from './Cart.module.css';

function Cart({ orderInfo }) {
  
  console.log(orderInfo);
  return (
    <div className={classes.cart}>
      {orderInfo.length > 0 ? (
        orderInfo.map((el) => {
          return (
            <>
              <h1>{el.title}</h1>
              <h2>{el.price}</h2>
              <h3>{el.amount}</h3>
              <h3>{el.price}</h3>
            </>
          );
        })
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}
export default Cart;
