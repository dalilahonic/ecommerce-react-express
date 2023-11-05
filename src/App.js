import { useState } from 'react';
import Cart from './components/Cart/Cart';
import MainPage from './components/pages/MainPage';

function App() {
  const [orderInfo, setOrderInfo] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [amountCard, setAmountCard] = useState(0);

  function handleOrder(orderInfo) {
    setOrderInfo((prev) => [...prev, { ...orderInfo }]);
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
        />
      )}
    </>
  );
}

export default App;
