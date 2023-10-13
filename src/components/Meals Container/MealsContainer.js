import classes from './MealsContainer.module.css';
import MealList from '../Meal Card/MealList';
import { useEffect, useState } from 'react';

function MealsContainer({
  heading,
  mealsData,
  transformedHeading,
  inputValue,
  id,
}) {
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    const filtered = mealsData[heading]?.filter((el) => {
      return el.mealName
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });

    setFilteredData((prevState) => ({
      ...prevState,
      [heading]: filtered,
    }));
  }, [inputValue, mealsData, heading]);

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
                  data={mealsData}
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

export default MealsContainer;
