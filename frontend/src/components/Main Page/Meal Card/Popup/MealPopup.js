import classes from './MealPopup.module.css';
import MinusAndPlusButtons from '../../../Buttons/MinusAndPlusButtons';
import OrderButton from '../../../Buttons/OrderButton';
import BtnExit from '../../../Buttons/BtnExit';
import Seperator from '../../Seperator/Separator';
import { useEffect, useState } from 'react';
import MainOptions from '../../Options/MainOptions';
import PopupInfo from './PopupInfo';
import useCalculatePrice from '../../../../hooks/useCalculatePrice';
import { useDispatch } from 'react-redux';
import {
  cartAmountActions,
  orderActions,
} from '../../../../store';
import { useLocation } from 'react-router';
import api from '../../../../services/axios';

function MealPopup() {
  const [target, setTarget] = useState();
  const [optionsPrice, setOptionsPrice] = useState([]);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await api.get(
          `items/${state.title}`
        );
        setTarget(response.data);
      } catch (err) {}
    };

    fetchMeal();
  }, [state]);

  console.log(target);

  function handleOrder(orderInfo) {
    dispatch(orderActions.addToCart({ orderInfo }));
    dispatch(cartAmountActions.increment(amount));
  }

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

  let finalPrice = useCalculatePrice(
    target?.price,
    optionsPrice
  );

  return (
    <div className={classes.mealOverlay}>
      <div className={classes.mealPopUp}>
        <PopupInfo
          imgUrl={target?.image}
          alt={target?.mealName}
          price={target?.price}
          description={target?.description}
          title={target?.mealName}
        />
        <MinusAndPlusButtons
          amount={amount}
          setAmount={setAmount}
        />
        <Seperator classClr='grey' />
        <MainOptions
          onChecked={handleChecked}
          options={target?.options}
        />
        <BtnExit />
        <Seperator classClr='grey' />
        <Seperator classClr='white' />
        <OrderButton
          imgUrl={target?.image}
          onOrder={handleOrder}
          price={target?.price}
          amount={amount}
          optionsPrice={optionsPrice}
          title={target?.mealName}
          text='Add to Order'
          priceText={finalPrice * amount}
        />
      </div>
    </div>
  );
}

export default MealPopup;
