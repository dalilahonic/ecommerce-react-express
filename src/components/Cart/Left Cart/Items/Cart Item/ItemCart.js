import { useDispatch } from 'react-redux';
import MinusAndPlusButtons from '../../../../Buttons/MinusAndPlusButtons';
import classes from './ItemCart.module.css';
import {
  cartAmountActions,
  orderActions,
} from '../../../../../store';

function ItemCart({ title, amount, price, imgUrl }) {
  const dispatch = useDispatch();
  let finalPrice = price * amount;

  function handleAddItem(title) {
    dispatch(
      orderActions.addToCart({ title: title, amount: 1 })
    );
  }

  function handleRemoveItem(title) {
    dispatch(orderActions.minus(title));
    dispatch(cartAmountActions.decrement(1));
  }

  return (
    <div className={classes.item}>
      <div className={classes.img}>
        <img src={imgUrl} alt={title} />
      </div>
      <div className={classes.info}>
        <div>
          <p>{title}</p>
          <p>${finalPrice.toFixed(2)}</p>
        </div>
        <div>
          <MinusAndPlusButtons
            key={title}
            title={title}
            amount={amount}
            className='gap'
            onAddItem={handleAddItem}
            onRemoveItem={handleRemoveItem}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
