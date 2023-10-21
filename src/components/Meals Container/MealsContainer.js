import classes from './MealsContainer.module.css';
import MealList from '../Meal Card/MealList';
import useFilter from '../../hooks/useFilter';

function MealsContainer({
  mealsData,
  heading,
  inputValue,
  transformedHeading,
  id,
  sectionNames,
}) {

  const [filteredData] = useFilter(
    mealsData,
    heading,
    inputValue,
    'mealName'
  );

  const hasMatchingItems =
    filteredData[heading]?.length > 0;

  return (
    <>
      {hasMatchingItems && (
        <>
          <div className={classes.main}>
            <div className={classes.mealsHeading} id={id}>
              <h1>{transformedHeading}</h1>
            </div>
            <div className={classes.mealsContainer}>
              {filteredData[heading]?.map((meal, index) => (
                <MealList
                  sectionNames={sectionNames}
                  data={mealsData}
                  key={index}
                  title={meal.mealName}
                  description={meal.description}
                  price={meal.price}
                  imgUrl={meal.image}
                  alt={meal.mealName}
                  options={meal.options}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MealsContainer;
