import classes from './Cart.module.css';
import ItemCart from './ItemCart';

function Cart({
  orderInfo,
  setOrderInfo,
  amountCard,
  setAmountCard,
}) {
  function handlePlus(sign) {
    if (sign === '+') setAmountCard((prev) => prev + 1);
    if (sign === '-') setAmountCard((prev) => prev - 1);
  }

  return (
    <div className={classes.cart}>
      <div className={classes.cartChild}>
        <div className={classes.yourCartMain}>
          <div>
            <h1>Your Cart</h1>
            <p>Your Order({amountCard})</p>
          </div>
          <div className={classes.items}>
            {orderInfo.length > 0 ? (
              orderInfo.map((el, index) => {
                return (
                  <ItemCart
                    key={index}
                    title={el.title}
                    amount={el.amount}
                    imgUrl={el.imgUrl}
                    price={el.price}
                    setOrderInfo={setOrderInfo}
                    onAdd={(sign) => handlePlus(sign)}
                  />
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
