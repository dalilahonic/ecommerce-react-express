import classes from './HeaderRight.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function HeaderRight({ setIsCartWindowOpen }) {
  function handleMouseEnter() {
    setIsCartWindowOpen(true);
  }

  function handleMouseLeave() {
    setIsCartWindowOpen(false);
  }
  return (
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={classes.icon}
          icon={faCartShopping}
        />
      </div>
    </div>
  );
}

export default HeaderRight;
