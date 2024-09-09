import classes from './MenuDisplay.module.css';
import useFilter from '../../../../hooks/useFilter';
import MealItem from '../Meal Item/MealItem';

function MenuDisplay({
  inputValue,
  categoryHeading,
  items,
}) {
  const [filteredData] = useFilter(items, inputValue);

  const hasMatchingItems = filteredData?.length > 0;

  return (
    <>
      {hasMatchingItems && (
        <>
          <div className={classes.main}>
            <div className={classes.mealsHeading}>
              <h1>{categoryHeading}</h1>
            </div>
            <div className={classes.mealsContainer}>
              {filteredData.map((meal, index) => (
                <MealItem
                  key={index}
                  title={meal.mealName}
                  description={meal.description}
                  price={meal.price}
                  imgUrl={meal.image}
                  alt={meal.mealName}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MenuDisplay;
