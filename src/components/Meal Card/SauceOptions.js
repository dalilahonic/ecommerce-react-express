import classes from './SauceOptions.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function SauceOptions({ data, title }) {
  console.log(data.starters[0].mealName);
  console.log(data.starters[0]);
  console.log(title);
  const [isDropDownOpen, setIsDropDownOpen] =
    useState(false);

  function openDropDown() {
    setIsDropDownOpen((prev) => !prev);
  }

  return (
    <div className={classes.sauceMain}>
      <div className={classes.wouldYouLikeSauce}>
        <p>Whould You Like To Add Extra Sauce</p>
        <span onClick={openDropDown}>
          <p>Optional</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ color: 'black' }}
          />
        </span>
      </div>

      {isDropDownOpen && (
        <div>
          {data.starters.map((meal) => {
            if (meal.mealName === title) {
              return meal.sauces.map((sauce, index) => {
                return (
                  <>
                    <div
                      className={classes.option}
                      key={index}
                    >
                      <input type='radio' />
                      <label>{sauce.nameOfTheSauce}</label>
                      <p>${sauce.price}</p>
                    </div>
                  </>
                );
              });
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
}

export default SauceOptions;
