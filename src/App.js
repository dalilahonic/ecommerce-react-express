import { useState } from 'react';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {!isCartOpen ? (
        <MainPage setIsCartOpen={setIsCartOpen} />
      ) : (
        <CartPage setIsCartOpen={setIsCartOpen} />
      )}
    </>
  );
}

export default App;
