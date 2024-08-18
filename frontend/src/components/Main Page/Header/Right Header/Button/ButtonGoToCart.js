import React from 'react';
import classes from './ButtonGoToCart.module.css';

export default function ButtonGoToCart() {
  return (
    <div className={classes.btnDiv}>
      <button className={classes.orderBtnHeader}>
        Order Now
      </button>
    </div>
  );
}
