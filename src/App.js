import { useState } from 'react';
import Cart from './components/Cart/Cart';
import MainPage from './components/pages/MainPage';

function App() {
  const [orderInfo, setOrderInfo] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [amountCard, setAmountCard] = useState(0);

  function handleOrder(orderObj) {
    const index = orderInfo.findIndex(
      (item) => item.title === orderObj.title
    );

    if (index !== -1) {
      setOrderInfo((prev) => {
        const newObj = [...prev];
        newObj[index].amount =
          newObj[index].amount + orderObj.amount;
        return newObj;
      });
    } else
      setOrderInfo((prev) => [...prev, { ...orderObj }]);
  }

  return (
    <>
      {!isCartOpen ? (
        <MainPage
          amountCard={amountCard}
          setAmountCard={setAmountCard}
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}
          setIsCartOpen={setIsCartOpen}
          onOrder={handleOrder}
        />
      ) : (
        <Cart
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}
          amountCard={amountCard}
          setAmountCard={setAmountCard}
          setIsCartOpen={setIsCartOpen}
        />
      )}
    </>
  );
}

export default App;
