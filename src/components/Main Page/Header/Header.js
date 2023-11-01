import classes from './Header.module.css';
import { useState } from 'react';
import HeaderLeft from './Left Header/HeaderLeft';
import HeaderRight from './Right Header/HeaderRight';
import CartWindow from './Cart Window/CartWindow';
import { useEffect } from 'react';

function Header({
  orderInfo,
  setOrderInfo,
  setIsCartOpen,
}) {
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
          orderInfo={orderInfo}
          isCartWindowOpen={isCartWindowOpen}
          cartIsHovered={cartIsHovered}
          amountCard={amountCard}
          setIsCartWindowOpen={setIsCartWindowOpen}
          setCartIsHovered={setCartIsHovered}
          setIsCartOpen={setIsCartOpen}
        />
        {isCartWindowOpen && (
          <CartWindow
            setCartIsHovered={setCartIsHovered}
            orderInfo={orderInfo}
            amountCard={amountCard}
            setIsCartOpen={setIsCartOpen}
            setOrderInfo={setOrderInfo}
          />
        )}
      </div>
    </>
  );
}

export default Header;
