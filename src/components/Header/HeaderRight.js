import classes from './HeaderRight.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function HeaderRight({
  setIsCartWindowOpen,
  amountCard,
  cartIsHovered,
  setCartIsHovered,
  isCartWindowOpen,
  onOpenCart,
}) {
  function handleMouseEnter() {
    setIsCartWindowOpen(true);
    setCartIsHovered(true);
  }

  useEffect(() => {
    let time;
    if (!cartIsHovered && isCartWindowOpen) {
      time = setTimeout(() => {
        setIsCartWindowOpen(false);
        setCartIsHovered(false);
      }, 1000);
    }
    return () => clearTimeout(time);
  }, [
    cartIsHovered,
    setIsCartWindowOpen,
    setCartIsHovered,
    isCartWindowOpen,
  ]);

  return (
    <>
      <div className={classes.headerRight}>
        <div className={classes.btnDiv}>
          <button className={classes.orderBtnHeader}>
            Order Now
          </button>
        </div>
        <div className={classes.btnIcon}>
          <FontAwesomeIcon
            className={classes.icon}
            icon={faUser}
          />
          <FontAwesomeIcon
            onClick={onOpenCart}
            onMouseLeave={() => setCartIsHovered(false)}
            onMouseEnter={handleMouseEnter}
            className={classes.icon}
            icon={faCartShopping}
          />
          <p>{amountCard}</p>
        </div>
      </div>
    </>
  );
}

export default HeaderRight;
