import classes from './SauceOptions.module.css';

function SauceOptions({ data, title, isDropDownOpen }) {
  
  function renderSauceOptions(title, data) {
    let meal = data.starters.find(
      (meal) => meal.mealName === title
    );

    if (!meal) return null;

    return meal.sauces.map((sauce, index) => {
      return (
        <div className={classes.option} key={index}>
          <input type='radio' />
          <label>{sauce.nameOfTheSauce}</label>
          <p>${sauce.price}</p>
        </div>
      );
    });
  }

  return (
    isDropDownOpen && (
      <div>{renderSauceOptions(title, data)}</div>
    )
  );
}

export default SauceOptions;

/*
{data.starters.map((meal) => {
  if (meal.mealName === title) {
    return meal.sauces.map((sauce, index) => {
      return (
        <div
          className={classes.option}
          key={index}
        >
          <input type='radio' />
          <label>{sauce.nameOfTheSauce}</label>
          <p>${sauce.price}</p>
        </div>
      );
    });
  }
  return null;
})}
*/
