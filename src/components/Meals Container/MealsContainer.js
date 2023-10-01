import classes from './MealsContainer.module.css';
import MealCard from '../Meal Card/MealCard';

function MealsContainer({
  heading,
  mealsData,
  transformedHeading,
}) {
  return (
    <>
      <div className={classes.mealsHeading}>
        <h1>{transformedHeading}</h1>
      </div>
      <div className={classes.mealsContainer}>
        {mealsData[heading]?.map((meal, index) => (
          <MealCard
            key={index}
            title={meal.mealName}
            description={meal.description}
            price={meal.price}
            imgUrl={meal.image}
            alt={meal.mealName}
          />
        ))}
      </div>
    </>
  );
}

export default MealsContainer;
