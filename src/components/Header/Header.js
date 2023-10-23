import classes from './Header.module.css';
import { useState } from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import CartWindow from './CartWindow';

function Header() {
  const [isCartWindowOpen, setIsCartWindowOpen] =
    useState(false);

  return (
    <>
      <div className={classes.mainHeader}>
        <HeaderLeft />
        <HeaderRight
          setIsCartWindowOpen={setIsCartWindowOpen}
        />
        {isCartWindowOpen && <CartWindow />}
      </div>
    </>
  );
}

export default Header;
