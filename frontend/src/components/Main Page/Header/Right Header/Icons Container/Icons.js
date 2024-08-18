import { useSelector } from 'react-redux';
import classes from './Icons.module.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

export default function Icons({
  setIsCartWindowOpen,
  setCartIsHovered,
  cartIsHovered,
  isCartWindowOpen,
}) {
  const navigate = useNavigate();
  const cartAmount = useSelector(
    (state) => state.cartAmount.amount
  );

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
    <div>
      <div className={classes.btnIcon}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={faUser}
        />
        <FontAwesomeIcon
          onClick={() => navigate('/cart')}
          onMouseLeave={() => setCartIsHovered(false)}
          onMouseEnter={handleMouseEnter}
          className={classes.icon}
          icon={faCartShopping}
        />
        <p>{cartAmount}</p>
      </div>
    </div>
  );
}
