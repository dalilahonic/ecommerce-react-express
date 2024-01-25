import React, { useState } from 'react';
import Pickup from './Pickup/Pickup';
import classes from './RightCart.module.css';
import styles from '../Shared Styles/SharedStyles.module.css';
import TipCard from './Tips/TipCard';
import Price from './Price/Price';
import TipInput from './Tips/Input/TipInput';

const tips = ['10%', '15%', '20%', 'other'];

export default function RightCart() {
  const [selected, setSelected] = useState('15%');

  function handleChangeTip(content) {
    setSelected(content);
  }

  function handleSubmitTip(tip) {
    setSelected(tip);
  }

  return (
    <div className={classes.details}>
      <Pickup />

      <div className={`${classes.tip} ${styles.info}`}>
        <h5>ADD A TIP</h5>
        <div className={classes.tips}>
          {tips.map((el, i) => {
            return (
              <TipCard
                content={el}
                key={i}
                onChangeTip={handleChangeTip}
                selected={selected === el}
              />
            );
          })}
        </div>
        {selected === 'other' && (
          <TipInput onSubmitTip={handleSubmitTip} />
        )}
      </div>
      <Price activeTip={selected} />
    </div>
  );
}
