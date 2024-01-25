import OrderButton from '../../../Buttons/OrderButton';
import classes from './CartWindow.module.css';
import WindowItem from './WindowItem';
import { useSelector } from 'react-redux';

function CartWindow({ setCartIsHovered }) {
  const orderInfo = useSelector(
    (state) => state.order.items
  );

  const cartAmount = useSelector(
    (state) => state.cartAmount.amount
  );
  const totalPrice = useSelector(
    (state) => state.order.totalPrice
  );

  function handleMouseEnter() {
    setCartIsHovered(true);
  }

  function handleMouseLeave() {
    setCartIsHovered(false);
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={classes.cartWindow}
    >
      <h3>Your Cart ({cartAmount})</h3>
      {orderInfo.length > 0 ? (
        orderInfo.map((el, i) => {
          return (
            <WindowItem
              key={i}
              title={el.title}
              imgUrl={el.imgUrl}
              amount={el.amount}
              totalPrice={el.totalPriceByItem}
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
          />
        )}
      </div>
    </div>
  );
}

export default CartWindow;
