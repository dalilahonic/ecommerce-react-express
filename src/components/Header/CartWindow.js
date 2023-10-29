import classes from './CartWindow.module.css';

function CartWindow({
  orderInfo,
  amountCard,
  setCartIsHovered,
}) {
  function handleMouseEnter() {
    setCartIsHovered(true);
  }

  function handleMouseLeave() {
    setCartIsHovered(false);
  }
  console.log(orderInfo);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.cartWindow}
    >
      <h3>Your Cart ({amountCard})</h3>
      {orderInfo.length > 0 ? (
        orderInfo.map((el) => {
          return (
            <div className={classes.cartItem}>
              <img src={el.imgUrl} alt=''></img>
              <h5>{el.title}</h5>
              <p>${el.price}</p>
            </div>
          );
        })
      ) : (
        <h4>Your Cart Is Empty</h4>
      )}
    </div>
  );
}

export default CartWindow;
