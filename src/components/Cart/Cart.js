import { useState, useEffect } from 'react';
import ContinueShopping from '../Buttons/ContiniueShopping';
import classes from './Cart.module.css';
import HeaderCart from './HeaderCart';
import Items from './Items';
import TipCard from './TipCard';
import Price from './Price';

const tips = ['10%', '15%', '20%', 'other'];

function Cart({
  orderInfo,
  setOrderInfo,
  amountCard,
  setAmountCard,
  setIsCartOpen,
}) {
  const [selected, setSelected] = useState('15%');
  const [price, setPrice] = useState(undefined);
  const [tip, setTip] = useState((15 / 100) * price);

  useEffect(() => {
    setPrice(
      orderInfo?.reduce(
        (acc, obj) => (acc += obj?.amount * obj?.price),
        0
      )
    );
  }, [orderInfo]);

  useEffect(() => {
    if (selected === '15%')
      setTip(((15 / 100) * price).toFixed(2));
  }, [price, selected]);

  function handleSelect(content, tip) {
    setSelected(content);
    setTip(tip);
  }

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
                return selected === el ? (
                  <TipCard
                    isSelected
                    content={el}
                    onSelect={handleSelect}
                    price={price}
                  />
                ) : (
                  <TipCard
                    content={el}
                    onSelect={handleSelect}
                    price={price}
                  />
                );
              })}
            </div>
          </div>
          <Price price={price} tip={tip} />
        </div>
      </div>
    </div>
  );
}
export default Cart;
