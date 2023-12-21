import { useState, useEffect } from 'react';
import MainCart from '../components/Cart/Main Cart/MainCart';
import { useSelector } from 'react-redux';

const tips = ['10%', '15%', '20%', 'other'];

function CartPage({
  setOrderInfo,
  amountCard,
  setAmountCard,
  setIsCartOpen,
}) {
  const orderInfo = useSelector((state) => state.order);
  const [selected, setSelected] = useState('15%');
  const [price, setPrice] = useState(undefined);
  const [tip, setTip] = useState((15 / 100) * price);

  useEffect(() => {
    setPrice(
      orderInfo?.reduce(
        (acc, obj) => (acc += obj?.amount * obj?.price),
        0
      )
    );
  }, [orderInfo]);

  useEffect(() => {
    if (selected === '15%')
      setTip(((15 / 100) * price).toFixed(2));
  }, [price, selected]);

  function handleSelect(content, tip) {
    setSelected(content);
    setTip(tip);
  }

  return (
    <MainCart
      setIsCartOpen={setIsCartOpen}
      onSelect={handleSelect}
      selected={selected}
      tip={tip}
      tips={tips}
      price={price}
    />
  );
}
export default CartPage;
