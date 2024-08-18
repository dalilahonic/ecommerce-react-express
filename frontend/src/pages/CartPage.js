import { useSelector } from 'react-redux';
import MainCart from '../components/Cart/Main Cart/MainCart';

function CartPage() {
  const orderInfo = useSelector(
    (state) => state.order.items
  );
  console.log(orderInfo);
  return <MainCart />;
}
export default CartPage;
