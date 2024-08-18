import classes from './HeaderRight.module.css';

import ButtonGoToCart from './Button/ButtonGoToCart';
import Icons from './Icons Container/Icons';

function HeaderRight({
  isCartWindowOpen,
  setIsCartWindowOpen,
  cartIsHovered,
  setCartIsHovered,
}) {
  return (
    <>
      <div className={classes.headerRight}>
        <ButtonGoToCart />
        <Icons
          setIsCartWindowOpen={setIsCartWindowOpen}
          setCartIsHovered={setCartIsHovered}
          cartIsHovered={cartIsHovered}
          isCartWindowOpen={isCartWindowOpen}
        />
      </div>
    </>
  );
}

export default HeaderRight;
