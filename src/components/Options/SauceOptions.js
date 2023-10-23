import classes from './SauceOptions.module.css';

function SauceOptions({ isDropDownOpen, options }) {
  function renderSauceOptions() {
    return options.options.map((sauce, index) => {
      return (
        <div key={index} className={classes.option}>
          <label>
            <input type='checkbox' />
            {sauce.name || sauce}
          </label>
          {sauce.price !== undefined && (
            <p>${sauce.price}</p>
          )}
        </div>
      );
    });
  }

  return (
    isDropDownOpen && <div>{renderSauceOptions()}</div>
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
