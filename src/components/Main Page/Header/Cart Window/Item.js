import React from 'react';
import classes from './Item.module.css';

export default function Item({
  imgUrl,
  title,
  totalPrice,
}) {
  return (
    <div className={classes.cartItem}>
      <img src={imgUrl} alt=''></img>
      <h5>{title}</h5>
      <div className={classes.priceDiv}>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
