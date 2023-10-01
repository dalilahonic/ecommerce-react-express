import classes from './MealPopUp.module.css';

function MealPopUp({
  title,
  description,
  price,
  imgUrl,
  alt,
}) {
  return (
    <div className={classes.mealOverlay}>
      <div className={classes.mealPopUp}>
        <img
          src='https://www.mcdonalds.rs/wp-content/uploads/2021/10/Cheeseburger-2.jpg'
          alt={alt}
        />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MealPopUp;
