import classes from './AddMoreItems.module.css';

function AddMoreItems({ setIsCartOpen }) {
  return (
    <button
      onClick={() => setIsCartOpen(false)}
      className={classes.addMoreItems}
    >
      Add More Items
    </button>
  );
}

export default AddMoreItems;
