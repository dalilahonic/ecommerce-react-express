import { useSelector } from 'react-redux';
import classes from './Price.module.css';

function Price({ activeTip }) {
  const totalPrice = useSelector(
    (state) => state.order.totalPrice
  );

  const tip =
    typeof activeTip === 'string'
      ? totalPrice * (parseInt(activeTip) / 100)
      : activeTip;

  const priceWithTip = totalPrice + tip;

  return (
    <div className={classes.priceDiv}>
      <p>
        <span>Subtotal</span>
        <span>${totalPrice?.toFixed(2)}</span>
      </p>
      <p>
        <span>Tip:</span>
        <span>${tip.toFixed(2)}</span>
      </p>
      <p className={classes.price}>
        <span>Total:</span>
        <span>${priceWithTip.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default Price;
