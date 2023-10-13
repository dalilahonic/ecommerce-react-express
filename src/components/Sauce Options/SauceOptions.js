import classes from './SauceOptions.module.css';

function SauceOptions({
  data,
  title,
  isDropDownOpen,
  options,
}) {
  function renderSauceOptions() {
    return options.options.map((sauce, index) => {
      return (
        <div key={index} className={classes.option}>
          <input type='radio' />
          <label>{sauce.name}</label>
          <p>${sauce.price}</p>
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
