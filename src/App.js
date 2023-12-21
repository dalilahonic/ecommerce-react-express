import { useState } from 'react';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import { useDispatch } from 'react-redux';
import { orderActions } from './store';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const dispatch = useDispatch();

  function handleOrder(orderObj) {
    dispatch(orderActions.addToCart(orderObj));
  }

  return (
    <>
      {!isCartOpen ? (
        <MainPage
          setIsCartOpen={setIsCartOpen}
          onOrder={handleOrder}
        />
      ) : (
        <CartPage setIsCartOpen={setIsCartOpen} />
      )}
    </>
  );
}

export default App;
