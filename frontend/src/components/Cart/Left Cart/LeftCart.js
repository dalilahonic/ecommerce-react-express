import React from 'react';
import ContinueShopping from '../../Buttons/ContiniueShopping';
import HeaderCart from './Header/HeaderCart';
import Items from './Items/Items';
import classes from './LeftCart.module.css';

export default function LeftCart() {
  return (
    <div className={classes.yourCartMain}>
      <ContinueShopping />
      <HeaderCart />
      <Items />
    </div>
  );
}
