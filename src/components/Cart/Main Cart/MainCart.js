import React from 'react';
import classes from './MainCart.module.css';
import LeftCart from '../Left Cart/LeftCart';
import RightCart from '../Right Cart/RightCart';

export default function MainCart({
  setIsCartOpen,
  amountCard,
  orderInfo,
  setOrderInfo,
  setAmountCard,
  onSelect,
  selected,
  tips,
  price,
  tip,
}) {
  return (
    <div>
      {' '}
      <div className={classes.cart}>
        <div className={classes.cartChild}>
          <LeftCart
            setIsCartOpen={setIsCartOpen}
            amountCard={amountCard}
            orderInfo={orderInfo}
            setOrderInfo={setOrderInfo}
            setAmountCard={setAmountCard}
          />
          <RightCart
            onSelect={onSelect}
            selected={selected}
            tips={tips}
            price={price}
            tip={tip}
          />
        </div>
      </div>
    </div>
  );
}
