// import { useState } from 'react';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import MealPopup from './components/Main Page/Meal Card/Popup/MealPopup';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <MainPage /> },
    { path: '/cart', element: <CartPage /> },
    { path: ':productId', element: <MealPopup /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
