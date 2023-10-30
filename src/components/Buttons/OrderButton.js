import classes from './OrderButton.module.css';
import useCalculatePrice from '../../hooks/useCalculatePrice';
import { useState, useEffect } from 'react';

function OrderButton({
  price,
  amount,
  optionsPrice,
  onOrder,
  title,
  imgUrl,
  className = '',
  text,
  priceText,
}) {
  const [orderInfo, setOrderInfo] = useState({
    title: title,
    price: 0,
    amount: amount,
    imgUrl: imgUrl,
  });

  let finalPrice = useCalculatePrice(
    price,
    amount,
    optionsPrice
  );

  console.log(priceText);

  useEffect(() => {
    setOrderInfo({
      title,
      amount,
      price: finalPrice,
      imgUrl: imgUrl,
    });
  }, [amount, finalPrice, title, imgUrl]);

  function handleClick() {
    onOrder(orderInfo);
  }

  return (
    <button
      onClick={() => handleClick()}
      className={`${classes.btnAddToOrder} ${classes[className]}`}
    >
      <span>{text}</span>
      <span>${priceText.toFixed(2)} </span>
    </button>
  );
}

export default OrderButton;
