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
}) {
  let finalPrice = useCalculatePrice(
    price,
    amount,
    optionsPrice
  );

  const [orderInfo, setOrderInfo] = useState({
    title: title,
    price: 0,
    amount: amount,
    imgUrl: imgUrl,
  });

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
      className={classes.btnAddToOrder}
    >
      <span>Add to Order</span>
      <span>${finalPrice.toFixed(2)}</span>
    </button>
  );
}

export default OrderButton;
