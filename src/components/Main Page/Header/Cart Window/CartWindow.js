import { useEffect, useState } from 'react';
import OrderButton from '../../../Buttons/OrderButton';
import classes from './CartWindow.module.css';
import ItemCart from './ItemCart';

function CartWindow({
  orderInfo,
  amountCard,
  setCartIsHovered,
  setIsCartOpen,
  setOrderInfo,
}) {
  const [totalPrice, setTotalPrice] = useState(0);

  function handleMouseEnter() {
    setCartIsHovered(true);
  }

  function handleMouseLeave() {
    setCartIsHovered(false);
  }

  function handleOpenCart() {
    setIsCartOpen(true);
  }

  useEffect(() => {
    let price = 0;
    orderInfo.forEach((el) => {
      price += el.price * el.amount;
    });
    setTotalPrice(price);
  }, [orderInfo]);

  function handleAddAmount(title, sign) {
    const targetIndex = orderInfo.findIndex(
      (el) => el.title === title
    );
    setOrderInfo((prev) => {
      let obj = [...prev];
      if (sign === '+') obj[targetIndex].amount++;
      else if (sign === '-') obj[targetIndex].amount--;
      return obj;
    });
  }

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
              onAddAmount={(sign) =>
                handleAddAmount(el.title, sign)
              }
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
            priceText={totalPrice}
            onOpenCart={handleOpenCart}
          />
        )}
      </div>
    </div>
  );
}

export default CartWindow;
