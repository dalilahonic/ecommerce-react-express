import { useSelector } from 'react-redux';
import AddMoreItems from '../../../Buttons/AddMoreItems';
import ItemCart from './Cart Item/ItemCart';
import classes from './Items.module.css';

function Items() {
  const orderInfo = useSelector(
    (state) => state.order.items
  );

  return (
    <div className={classes.items}>
      {orderInfo.length > 0 ? (
        orderInfo.map((el, index) => {
          return (
            <ItemCart
              key={index}
              title={el.title}
              amount={el.amount}
              imgUrl={el.imgUrl}
              price={el.price}
            />
          );
        })
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className={classes.btn}>
        <AddMoreItems />
      </div>
    </div>
  );
}
export default Items;
