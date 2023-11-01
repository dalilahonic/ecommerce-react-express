import classes from './ItemCart.module.css';
import MinusAndPlusButtons from '../../../Buttons/MinusAndPlusButtons';

function ItemCart({
  imgUrl,
  title,
  price,
  amount,
  onAddAmount,
}) {
  let finalPrice = price * amount;

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
          className='gap'
          onAddAmount={(sign) => onAddAmount(sign)}
        />
      </div>
    </div>
  );
}

export default ItemCart;
