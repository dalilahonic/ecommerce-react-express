import classes from './MealPopUp.module.css';
import MinusAndPlusButtons from '../Buttons/MinusAndPlusButtons';
import OrderButton from '../Buttons/OrderButton';
import BtnExit from '../Buttons/BtnExit';
import Seperator from '../Seperator/Separator';
import PopUpInfo from './PopUpInfo';
import { useState } from 'react';
import MainOptions from '../Options/MainOptions';

function MealPopUp({
  title,
  description,
  price,
  imgUrl,
  alt,
  setIsMealOpen,
  options,
}) {
  const [amount, setAmount] = useState(1);

  return (
    <div className={classes.mealOverlay}>
      <div className={classes.mealPopUp}>
        <PopUpInfo
          imgUrl={imgUrl}
          alt={alt}
          price={price}
          description={description}
          title={title}
        />
        <MinusAndPlusButtons
          amount={amount}
          setAmount={setAmount}
        />
        <Seperator classClr='grey' />
        {options && <MainOptions options={options} />}
        <BtnExit setIsMealOpen={setIsMealOpen} />
        <Seperator classClr='grey' />
        <Seperator classClr='white' />
        <OrderButton price={price} amount={amount} />
      </div>
    </div>
  );
}

export default MealPopUp;
