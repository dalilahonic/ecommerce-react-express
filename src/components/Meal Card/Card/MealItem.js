import classes from './MealItem.module.css';

function MealItem({
  title,
  description,
  price,
  imgUrl,
  alt,
  openPopUp,
}) {
  return (
    <div className={classes.mealCard} onClick={openPopUp}>
      <div className={classes.mealInformation}>
        <p> {title}</p>
        <p> {description}</p>
        <p className={classes.price}>${price.toFixed(2)}</p>
      </div>
      <div className={classes.mealPhoto}>
        <img src={imgUrl} alt={alt} />
      </div>
    </div>
  );
}
export default MealItem;
