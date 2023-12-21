import React from 'react';
import ContinueShopping from '../../Buttons/ContiniueShopping';
import HeaderCart from './Header/HeaderCart';
import Items from './Items/Items';
import classes from './LeftCart.module.css';

export default function LeftCart({ setIsCartOpen }) {
  return (
    <div className={classes.yourCartMain}>
      <ContinueShopping setIsCartOpen={setIsCartOpen} />
      <HeaderCart />
      <Items setIsCartOpen={setIsCartOpen} />
    </div>
  );
}
