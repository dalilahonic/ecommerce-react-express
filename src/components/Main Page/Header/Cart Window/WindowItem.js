import classes from './WindowItem.module.css';
import MinusAndPlusButtons from '../../../Buttons/MinusAndPlusButtons';
import { useDispatch } from 'react-redux';
import { orderActions } from '../../../../store';
import { cartAmountActions } from '../../../../store';
import Item from './Item';

function WindowItem({ imgUrl, title, amount, totalPrice }) {
  const dispatch = useDispatch();

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
    <div className={classes.cartContainer}>
      <Item
        imgUrl={imgUrl}
        totalPrice={totalPrice}
        title={title}
      />
      <div>
        <MinusAndPlusButtons
          amount={amount}
          className='padding'
          onAddItem={handleAddItem}
          onRemoveItem={handleRemoveItem}
          title={title}
        />
      </div>
    </div>
  );
}

export default WindowItem;
