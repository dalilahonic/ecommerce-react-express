import { useState } from 'react';
import classes from './MealCard.module.css';
import MealPopUp from './MealPopUp';

function MealCard({
  title,
  description,
  price,
  imgUrl,
  alt,
}) {
  const [isMealOpen, setIsMealOpen] = useState(false);

  function openPopUp() {
    setIsMealOpen(true);
    document.body.classList.add('scrollLock');
  }

  return (
    <>
      <div className={classes.mealCard} onClick={openPopUp}>
        <div className={classes.mealInformation}>
          <p> {title}</p>
          <p> {description}</p>
          <p className={classes.price}>
            {' '}
            ${price.toFixed(2)}
          </p>
        </div>
        <div className={classes.mealPhoto}>
          <img
            src={
              `${imgUrl}` ||
              'https://www.mcdonalds.rs/wp-content/uploads/2021/10/Cheeseburger-2.jpg'
            }
            alt={alt}
          />
        </div>
      </div>
      {isMealOpen && (
        <MealPopUp
          title={title}
          description={description}
          price={price}
          imgUrl={imgUrl}
          alt={alt}
          setIsMealOpen={setIsMealOpen}
        />
      )}
    </>
  );
}

export default MealCard;
