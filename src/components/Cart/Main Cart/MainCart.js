import React from 'react';
import classes from './MainCart.module.css';
import LeftCart from '../Left Cart/LeftCart';
import RightCart from '../Right Cart/RightCart';

export default function MainCart() {
  return (
    <div>
      {' '}
      <div className={classes.cart}>
        <div className={classes.cartChild}>
          <LeftCart />
          <RightCart />
        </div>
      </div>
    </div>
  );
}
