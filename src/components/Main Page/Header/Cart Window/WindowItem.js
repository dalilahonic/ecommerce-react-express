import classes from './WindowItem.module.css';
import MinusAndPlusButtons from '../../../Buttons/MinusAndPlusButtons';
import { useDispatch } from 'react-redux';
import { orderActions } from '../../../../store';

function WindowItem({ imgUrl, title, price, amount }) {
  const dispatch = useDispatch();
  let finalPrice = price * amount;

  function handleAddItem(title) {
    dispatch(
      orderActions.addToCart({ title: title, amount: 1 })
    );
  }

  return (
    <div className={classes.cartContainer}>
      <div className={classes.cartItem}>
        <img src={imgUrl} alt=''></img>
        <h5>{title}</h5>
        <div className={classes.priceDiv}>
          <p>${finalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div>
        <MinusAndPlusButtons
          amount={amount}
          className='padding'
          onAddItem={handleAddItem}
          title={title}
        />
      </div>
    </div>
  );
}

export default WindowItem;
