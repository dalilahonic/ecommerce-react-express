import classes from './Header.module.css';
import { useState } from 'react';
import HeaderLeft from './Left Header/HeaderLeft';
import HeaderRight from './Right Header/HeaderRight';
import CartWindow from './Cart Window/CartWindow';

function Header({
  setIsCartOpen,
  amountCard,
  setAmountCard,
}) {
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
          setIsCartOpen={setIsCartOpen}
        />
        {isCartWindowOpen && (
          <CartWindow
            setCartIsHovered={setCartIsHovered}
            setIsCartOpen={setIsCartOpen}
          />
        )}
      </div>
    </>
  );
}

export default Header;
