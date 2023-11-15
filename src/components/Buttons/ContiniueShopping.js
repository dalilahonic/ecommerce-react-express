import classes from './ContinueShopping.module.css';

function ContinueShopping({ setIsCartOpen }) {
  return (
    <button
      className={classes.continueShopping}
      onClick={() => setIsCartOpen(false)}
    >
      <span> {'<'}</span> <span>Continiue Shopping </span>
    </button>
  );
}

export default ContinueShopping;
