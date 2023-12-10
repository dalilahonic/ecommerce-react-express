import React from 'react';
import Pickup from './Pickup/Pickup';
import classes from './RightCart.module.css';
import styles from '../Shared Styles/SharedStyles.module.css';
import TipCard from './Tips/TipCard';
import Price from './Price/Price';

export default function RightCart({
  tips,
  selected,
  onSelect,
  price,
  tip,
}) {
  return (
    <div className={classes.details}>
      <Pickup />

      <div className={`${classes.tip} ${styles.info}`}>
        <h5>ADD A TIP</h5>
        <div className={classes.tips}>
          {tips.map((el, i) => {
            return (
              <TipCard
                isSelected={selected === el}
                content={el}
                onSelect={onSelect}
                price={price}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <Price price={price} tip={tip} />
    </div>
  );
}
