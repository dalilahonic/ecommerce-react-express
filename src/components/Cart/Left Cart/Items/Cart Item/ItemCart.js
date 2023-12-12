import MinusAndPlusButtons from '../../../../Buttons/MinusAndPlusButtons';
import classes from './ItemCart.module.css';

function ItemCart({
  title,
  amount,
  price,
  imgUrl,
  setOrderInfo,
  onAdd,
}) {
  function handleAddAmount(title, sign) {
    setOrderInfo((prev) => {
      const targetIndex = prev.findIndex(
        (el) => el.title === title
      );
      let obj = [...prev];

      if (targetIndex !== -1) {
        if (sign === '+') obj[targetIndex].amount++;
        else if (
          sign === '-' &&
          obj[targetIndex].amount > 0
        )
          obj[targetIndex].amount--;
      }

      return obj;
    });
  }

  let finalPrice = price * amount;

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
            amount={amount}
            className='gap'
            onAddAmount={(sign) =>
              handleAddAmount(title, sign)
            }
            onAdd={(sign) => onAdd(sign)}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
