import classes from './MenuDisplay.module.css';
import useFilter from '../../../../hooks/useFilter';
import MainMeal from '../Main/MainMeal';
import useFetch from '../../../../hooks/useFetch';

function MenuDisplay({
  heading,
  inputValue,
  transformedHeading,
  id,
}) {
  const [mealsData] = useFetch(
    'https://react-10d3f-default-rtdb.firebaseio.com/meals.json'
  );

  console.log(mealsData);

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
                <MainMeal
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
