import classes from './MealPopUp.module.css';

function MealPopUp({
  title,
  description,
  price,
  imgUrl,
  alt,
  setIsMealOpen,
}) {
  function handleClick() {
    setIsMealOpen(false); 
  }

  return (
    <div className={classes.mealOverlay}>
      <div className={classes.mealPopUp}>
        <img
          src='https://www.mcdonalds.rs/wp-content/uploads/2021/10/Cheeseburger-2.jpg'
          alt={alt}
        />
        <h1>{title}</h1>
        <p className={classes.price}>${price.toFixed(2)}</p>
        <p>{description}</p>
        <div className={classes.minusAndPlus}>
          <button className={classes.minus}>-</button>
          <p className={classes.quantity}>1</p>
          <button className={classes.plus}>+</button>
        </div>
        <button
          onClick={handleClick}
          className={classes.btnExit}
        >
          X
        </button>
        <button className={classes.btnAddToOrder}>
          <span>Add to Order</span>
          <span>${price.toFixed(2)}</span>
        </button>
      </div>
    </div>
  );
}

export default MealPopUp;
