import classes from './Price.module.css';

function Price({ tip, price }) {
  return (
    <div className={classes.priceDiv}>
      <p>
        <span>Subtotal</span>
        <span>${price?.toFixed(2)}</span>
      </p>
      <p>
        <span>Tip:</span>
        <span>${tip}</span>
      </p>
      <p className={classes.price}>
        <span>Total:</span>
        <span>
          ${(Number(price) + Number(tip)).toFixed(2)}
        </span>
      </p>
    </div>
  );
}

export default Price;
