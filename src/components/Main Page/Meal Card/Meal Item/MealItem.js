import { useNavigate } from 'react-router';
import classes from './MealItem.module.css';

function MealItem({
  title,
  description,
  price,
  imgUrl,
  alt,
}) {
  const navigate = useNavigate();

  const path = title.split(' ').join('-');

  return (
    <div
      className={`${classes.mealCard}`}
      onClick={() => navigate(`/${path}`)}
    >
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
