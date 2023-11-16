import ContinueShopping from '../Buttons/ContiniueShopping';
import classes from './Cart.module.css';
import HeaderCart from './HeaderCart';
import Items from './Items';

function Cart({
  orderInfo,
  setOrderInfo,
  amountCard,
  setAmountCard,
  setIsCartOpen,
}) {
  return (
    <div className={classes.cart}>
      <div className={classes.cartChild}>
        <ContinueShopping setIsCartOpen={setIsCartOpen} />
        <div className={classes.yourCartMain}>
          <HeaderCart amountCard={amountCard} />
          <Items
            orderInfo={orderInfo}
            setOrderInfo={setOrderInfo}
            setIsCartOpen={setIsCartOpen}
            setAmountCard={setAmountCard}
          />
        </div>
      </div>
    </div>
  );
}
export default Cart;
