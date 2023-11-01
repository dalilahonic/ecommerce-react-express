import { useState } from 'react';
import Cart from './components/Cart/Cart';
import MainPage from './components/pages/MainPage';

function App() {
  const [orderInfo, setOrderInfo] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleOrder(orderInfo) {
    setOrderInfo((prev) => [...prev, { ...orderInfo }]);
  }

  return (
    <>
      {!isCartOpen ? (
        <MainPage
          orderInfo={orderInfo}
          setOrderInfo={setOrderInfo}
          setIsCartOpen={setIsCartOpen}
          onOrder={handleOrder}
        />
      ) : (
        <Cart orderInfo={orderInfo} />
      )}
    </>
  );
}

export default App;
