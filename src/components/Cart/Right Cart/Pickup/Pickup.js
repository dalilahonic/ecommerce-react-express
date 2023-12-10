import React from 'react';
import classes from './Pickup.module.css';
import styles from '../../Shared Styles/SharedStyles.module.css';

function Pickup() {
  return (
    <>
      <div className={`${classes.pickup} ${styles.info}`}>
        <div>
          <h5>HOW TO GET IT</h5>
          <p>Edit</p>
        </div>
        <div>
          <p>Pickup:</p>
          <p>Today:</p>
        </div>
      </div>
    </>
  );
}

export default Pickup;
