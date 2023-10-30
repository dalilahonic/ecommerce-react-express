import { useEffect, useState } from 'react';
import OrderButton from '../Buttons/OrderButton';
import classes from './CartWindow.module.css';
import ItemCart from './ItemCart';

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

  const [finalPrice, setFinalPrice] = useState(0);
  console.log(finalPrice);

  useEffect(() => {
    const newPrice = orderInfo.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
    setFinalPrice(newPrice);
  }, [orderInfo]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.cartWindow}
    >
      <h3>Your Cart ({amountCard})</h3>
      {orderInfo.length > 0 ? (
        orderInfo.map((el, i) => {
          return (
            <ItemCart
              key={i}
              title={el.title}
              imgUrl={el.imgUrl}
              price={el.price}
              amount={el.amount}
            />
          );
        })
      ) : (
        <h4>Your Cart Is Empty</h4>
      )}
      <div className={classes.orderBtnDiv}>
        {orderInfo.length > 0 && (
          <OrderButton
            className='cart'
            text='Continue to Cart'
            priceText={finalPrice}
          />
        )}
      </div>
    </div>
  );
}

export default CartWindow;
