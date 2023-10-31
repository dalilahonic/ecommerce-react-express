import classes from './Header.module.css';
import { useState } from 'react';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import CartWindow from './CartWindow';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';

function Header({ orderInfo, setOrderInfo }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  function handleOpenCart() {
    setIsCartOpen(true);
  }

  return (
    <>
      {!isCartOpen && (
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
            isCartOpen={isCartOpen}
            onOpenCart={handleOpenCart}
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
      )}
      {isCartOpen && <Cart orderInfo={orderInfo} />}
    </>
  );
}

export default Header;
