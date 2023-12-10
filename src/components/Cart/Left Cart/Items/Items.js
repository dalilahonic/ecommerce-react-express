import AddMoreItems from '../../Buttons/AddMoreItems';
import ItemCart from '../Cart Item/ItemCart';
import classes from './Items.module.css';

function Items({
  orderInfo,
  setOrderInfo,
  setIsCartOpen,
  setAmountCard,
}) {
  function handlePlus(sign) {
    if (sign === '+') setAmountCard((prev) => prev + 1);
    if (sign === '-') setAmountCard((prev) => prev - 1);
  }
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
              setOrderInfo={setOrderInfo}
              onAdd={(sign) => handlePlus(sign)}
            />
          );
        })
      ) : (
        <p>Your cart is empty</p>
      )}
      <div className={classes.btn}>
        <AddMoreItems setIsCartOpen={setIsCartOpen} />
      </div>
    </div>
  );
}
export default Items;
