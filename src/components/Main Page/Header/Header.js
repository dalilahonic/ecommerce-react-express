import classes from './Header.module.css';
import { useState } from 'react';
import HeaderLeft from './Left Header/HeaderLeft';
import HeaderRight from './Right Header/HeaderRight';
import CartWindow from './Cart Window/CartWindow';

function Header() {
  const [isCartWindowOpen, setIsCartWindowOpen] =
    useState(false);
  const [cartIsHovered, setCartIsHovered] = useState(true);

  return (
    <>
      <div className={classes.mainHeader}>
        <HeaderLeft />
        <HeaderRight
          isCartWindowOpen={isCartWindowOpen}
          cartIsHovered={cartIsHovered}
          setIsCartWindowOpen={setIsCartWindowOpen}
          setCartIsHovered={setCartIsHovered}
        />
        {isCartWindowOpen && (
          <CartWindow setCartIsHovered={setCartIsHovered} />
        )}
      </div>
    </>
  );
}

export default Header;
