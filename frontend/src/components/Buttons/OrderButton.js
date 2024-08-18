import classes from './OrderButton.module.css';
import useCalculatePrice from '../../hooks/useCalculatePrice';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

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
  onOpenCart,
}) {
  const navigate = useNavigate();
  const [orderInfo, setOrderInfo] = useState({
    title: title,
    price: 0,
    amount: amount,
    imgUrl: imgUrl,
  });

  let finalPrice = useCalculatePrice(price, optionsPrice);

  useEffect(() => {
    setOrderInfo({
      title,
      amount,
      price: finalPrice,
      imgUrl: imgUrl,
    });
  }, [amount, finalPrice, title, imgUrl]);

  function handleClick() {
    if (onOrder) {
      onOrder(orderInfo);
      navigate('/');
    }
    if (onOpenCart) onOpenCart();

    if (text === 'Continue to Cart') navigate('/cart');
  }

  return (
    <button
      onClick={() => handleClick()}
      className={`${classes.btnAddToOrder} ${classes[className]}`}
    >
      <span>{text}</span>
      {priceText ? (
        <span>${priceText?.toFixed(2)}</span>
      ) : (
        <span>${priceText?.toFixed(2)}</span>
      )}
    </button>
  );
}

export default OrderButton;
