import classes from './Header.module.css';
import { useState } from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import CartWindow from './CartWindow';
import { useEffect } from 'react';

function Header({ orderInfo }) {
  const [isCartWindowOpen, setIsCartWindowOpen] =
    useState(false);
  const [amountCard, setAmountCard] = useState(0);
  const [cartIsHovered, setCartIsHovered] = useState(true);

  useEffect(() => {
    if (orderInfo)
      setAmountCard(
        orderInfo.reduce(
          (acc, curr) => acc + curr.amount,
          0
        )
      );
  }, [orderInfo]);

  return (
    <>
      <div className={classes.mainHeader}>
        <HeaderLeft />
        <HeaderRight
          isCartWindowOpen={isCartWindowOpen}
          cartIsHovered={cartIsHovered}
          amountCard={amountCard}
          setIsCartWindowOpen={setIsCartWindowOpen}
          setCartIsHovered={setCartIsHovered}
        />
        {isCartWindowOpen && (
          <CartWindow
            setCartIsHovered={setCartIsHovered}
            orderInfo={orderInfo}
            amountCard={amountCard}
          />
        )}
      </div>
    </>
  );
}

export default Header;
