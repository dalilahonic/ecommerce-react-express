import classes from './MealPopup.module.css';
import MinusAndPlusButtons from '../../Buttons/MinusAndPlusButtons';
import OrderButton from '../../Buttons/OrderButton';
import BtnExit from '../../Buttons/BtnExit';
import Seperator from '../../Seperator/Separator';
import { useState } from 'react';
import MainOptions from '../../Options/MainOptions';
import PopupInfo from './PopupInfo';

function MealPopup({
  title,
  description,
  price,
  imgUrl,
  alt,
  setIsMealOpen,
  options,
  onOrder,
  onClose,
}) {
  const [amount, setAmount] = useState(1);
  const [optionsPrice, setOptionsPrice] = useState([]);

  function handleChecked(isChecked, price, name) {
    setOptionsPrice((prev) => {
      const newData = [...prev];

      const targetIndex = newData.findIndex(
        (obj) => obj.name === name
      );
      if (targetIndex !== -1) {
        newData[targetIndex] = {
          isChecked,
          price,
          name,
        };
        return newData;
      } else {
        newData.push({ isChecked, price, name });
        return newData;
      }
    });
  }
  function handleOrder(orderInfo) {
    onOrder(orderInfo);
    onClose();
  }

  return (
    <div className={classes.mealOverlay}>
      <div className={classes.mealPopUp}>
        <PopupInfo
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
        {options && (
          <MainOptions
            onChecked={handleChecked}
            options={options}
          />
        )}
        <BtnExit setIsMealOpen={setIsMealOpen} />
        <Seperator classClr='grey' />
        <Seperator classClr='white' />
        <OrderButton
          imgUrl={imgUrl}
          onOrder={handleOrder}
          price={price}
          amount={amount}
          optionsPrice={optionsPrice}
          title={title}
        />
      </div>
    </div>
  );
}

export default MealPopup;
