import ContinueShopping from '../Buttons/ContiniueShopping';
import classes from './Cart.module.css';
import HeaderCart from './HeaderCart';
import Items from './Items';

const tips = [10, 15, 20, 'other'];

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
        <div className={classes.yourCartMain}>
          <ContinueShopping setIsCartOpen={setIsCartOpen} />
          <HeaderCart amountCard={amountCard} />
          <Items
            orderInfo={orderInfo}
            setOrderInfo={setOrderInfo}
            setIsCartOpen={setIsCartOpen}
            setAmountCard={setAmountCard}
          />
        </div>

        <div className={classes.details}>
          <div
            className={`${classes.pickup} ${classes.info}`}
          >
            <div>
              <h5>HOW TO GET IT</h5>
              <p>Edit</p>
            </div>
            <div>
              <p>Pickup:</p>
              <p>Today:</p>
            </div>
          </div>

          <div className={`${classes.tip} ${classes.info}`}>
            <h5>ADD A TIP</h5>
            <div className={classes.tips}>
              {tips.map((el, i) => {
                return (
                  <div key={i}>
                    {el}
                    {typeof el === 'number' ? '%' : ''}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
